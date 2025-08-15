import { v4 as uuidv4 } from 'uuid'

export const generateUUID = (): string => {
  return uuidv4()
}

export const getOS = (): string => {
  if (process.client) {
    const userAgent = navigator.userAgent

    if (/Android/i.test(userAgent)) {
      return 'ANDROID'
    }
    if (/HarmonyOS/i.test(userAgent)) {
      return 'HARMONYOS'
    }
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return 'IOS'
    }
    if (userAgent.includes('Windows')) {
      return 'WINDOWS'
    }
    if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS X')) {
      return 'WINDOWS'
    }
    if (userAgent.includes('Linux')) {
      return 'WINDOWS'
    }
  }

  return 'Unknown'
}

export const getOSCode = (): number => {
  if (process.client) {
    const userAgent = navigator.userAgent

    if (userAgent.includes('Windows')) return 1
    if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS X')) return 2
    if (userAgent.includes('Linux')) return 3
    if (/Android/i.test(userAgent)) return 4
    if (/iPhone|iPad|iPod/i.test(userAgent)) return 5
    if (userAgent.includes('HarmonyOS')) return 6
    if (userAgent.includes('BlackBerry') || userAgent.includes('BB10')) return 7
  }

  return 8
}

export const helloTest3 = (params: any) => {
  return 'hello3 ' + params.title
}

export const helloTest4 = (params: any) => {
  return 'hello4 ' + params.title
}
