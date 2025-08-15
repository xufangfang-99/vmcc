export default defineEventHandler((event) => {
  const accept = getRequestHeader(event, 'accept') || ''
  const supportsAvif = accept.includes('image/avif')
  const supportsWebp = accept.includes('image/webp')

  event.context.imageSupport = {
    avif: supportsAvif,
    webp: supportsWebp,
  }
})
