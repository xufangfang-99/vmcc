import { usePostFetch } from './http'

export const getTenantInfo = async (domain: string) => {
  const baseUrl = 'https://tenant-client-api-dev.3333d.vip'
  const path = '/api/v1/client/tenant/get'

  return usePostFetch(`${baseUrl}${path}`, { domain })
}

export const getPopList = async (start: number, limit: number) => {
  const baseUrl = 'https://sysmanager-client-api-dev.3333d.vip'
  const path = '/api/v1/client/sysmanager/pop-list'

  return usePostFetch(`${baseUrl}${path}`, { start, limit })
}
