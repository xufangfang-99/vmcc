export default defineEventHandler((event) => {
  // 获取 User-Agent 头部
  const userAgent = getRequestHeader(event, 'user-agent') || ''

  // 检测操作系统
  let os = 'unknown'
  if (/windows/i.test(userAgent)) {
    os = 'Windows'
  } else if (/macintosh|mac os x/i.test(userAgent)) {
    os = 'MacOS'
  } else if (/linux/i.test(userAgent)) {
    os = 'Linux'
  } else if (/android/i.test(userAgent)) {
    os = 'Android'
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    os = 'iOS'
  }

  // 获取客户端 UUID（假设存储在 Cookie 或 Header 中）
  const clientUUID =
    getRequestHeader(event, 'x-client-uuid') || getCookie(event, 'client_uuid') || 'unknown'

  // 存入 event.context，供后续 API 使用
  event.context.clientInfo = {
    os,
    uuid: clientUUID,
  }
})
