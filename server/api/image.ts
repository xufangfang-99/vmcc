import { defineEventHandler, getQuery, send } from 'h3'
import sharp from 'sharp'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const imageUrl = query.url as string
  const format = (query.format as string) || 'webp'
  const quality = parseInt(query.quality as string) || 80

  if (!imageUrl) {
    event.node.res.statusCode = 400
    return send(event, { message: 'Image URL is required' })
  }

  try {
    const response = await fetch(imageUrl)
    const buffer = await response.arrayBuffer()

    const optimizedImage = await sharp(Buffer.from(buffer))
      .toFormat(format as any, { quality })
      .toBuffer()

    event.node.res.setHeader('Content-Type', `image/${format}`)
    return optimizedImage
  } catch (error) {
    const errorMessage = (error as Error).message
    event.node.res.statusCode = 500
    return send(event, { message: `Failed to process image: ${errorMessage}` })
  }
})
