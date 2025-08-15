import sharp from 'sharp'
import { readdir } from 'fs/promises'
import path from 'path'

async function convertImages() {
  try {
    const files = await readdir('.')
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))

    for (const file of imageFiles) {
      const parsedPath = path.parse(file)
      const image = sharp(file)

      const metadata = await image.metadata()
      const { width = 0, height = 0 } = metadata

      const aspectRatio = width / height
      let thumbWidth, thumbHeight
      if (aspectRatio > 1) {
        thumbWidth = Math.min(15, width)
        thumbHeight = Math.round(thumbWidth / aspectRatio)
      } else {
        thumbHeight = Math.min(15, height)
        thumbWidth = Math.round(thumbHeight * aspectRatio)
      }

      const ext = parsedPath.ext.substring(1).toLowerCase()
      const extCode =
        ext === 'jpg' || ext === 'jpeg' ? 'j' : ext === 'png' ? 'p' : ext === 'gif' ? 'g' : ext[0]

      const baseFileName = `${parsedPath.name}_${extCode}`

      await image.clone().webp({ quality: 80 }).toFile(`${baseFileName}.webp`)

      await image.clone().avif({ quality: 80 }).toFile(`${baseFileName}.avif`)

      console.log(`Generating blur thumbnail for ${file}...`)
      await image
        .clone()
        .resize(thumbWidth, thumbHeight)
        .blur(3)
        .webp({ quality: 80 })
        .toFile(`${baseFileName}_t.webp`)
    }

    console.log('All conversions completed successfully!')
  } catch (error) {
    console.error('Error during conversion:', error)
  }
}

convertImages()
