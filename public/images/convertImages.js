import sharp from 'sharp'
import { readdir } from 'fs/promises'
import path from 'path'

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirents.map(async (dirent) => {
      const res = path.resolve(dir, dirent.name)
      if (dirent.isDirectory()) {
        return getFiles(res)
      }
      return res
    })
  )
  return files.flat()
}

async function convertImages() {
  try {
    // 获取所有文件路径
    const allFiles = await getFiles('.')
    // 筛选图片文件
    const imageFiles = allFiles.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))

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

      // 保持目录结构
      const baseFileName = path.join(parsedPath.dir, `${parsedPath.name}_${extCode}`)

      console.log(`Converting ${file} to WebP...`)
      await image.clone().webp({ quality: 80 }).toFile(`${baseFileName}.webp`)

      console.log(`Converting ${file} to AVIF...`)
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
