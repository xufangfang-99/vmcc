import { generateUUID, getOS, getOSCode } from '@/utils/useTest'
import { ElMessage } from 'element-plus'
import type { UseFetchOptions } from 'nuxt/app'
import { useFetch } from 'nuxt/app'

const createHeaders = (config: any) => {
  return {
    ...config.headers,
    'Content-Type': 'application/json',
    'X-Platform-Id': 'C',
    'X-Device-Type': getOSCode(),
    'X-Tenant-Id': '1000010',
    'X-Device-Id': generateUUID(),
    'X-Lang': 'zh',
    'X-Web-Terminal-Id': getOS(),
  }
}

export const usePostFetch = async <T = any>(
  url: string,
  body: any,
  options: UseFetchOptions<T> = {}
) => {
  const defaultOptions: UseFetchOptions<T> = {
    method: 'POST',
    body,
    headers: {},
    onRequest({ options }) {
      options.headers = createHeaders(options)
    },
    onRequestError({ error }) {
      console.error('请求错误:', error)
      ElMessage.error('请求发送失败')
    },
    onResponse({ response }) {
      const { code, msg } = response._data
      if (code !== 0) {
        if ([100003, 100004, 100005].includes(code)) {
          handleTokenExpired()
        }

        ElMessage.error(msg)
        throw new Error(msg)
      }
    },
    onResponseError({ error }) {
      console.error('响应错误:', error)
      ElMessage.error('请求失败')
    },
  }

  const mergedOptions = { ...defaultOptions, ...options }

  return await useFetch(url, mergedOptions)
}

export const useGetFetch = <T = any>(url: string, options: Partial<UseFetchOptions<T>> = {}) => {
  return useFetch<T>(url, {
    method: 'GET',
    headers: createHeaders(options),
    ...options,
  } as any)
}

function handleTokenExpired() {
  console.log('Token 过期，需要重新登录')
  ElMessage.warning('Token 过期，需要重新登录')
}
