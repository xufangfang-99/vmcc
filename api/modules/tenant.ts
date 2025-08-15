import { ApiRequest } from '../request'
import type { RequestState } from '../request'

interface TenantInfo {
  // 根据实际返回数据定义接口
  [key: string]: any
}

export class TenantApi {
  static async getTenantInfo(): Promise<RequestState<TenantInfo>> {
    return ApiRequest.request<TenantInfo>(
      'https://tenant-client-api-dev.3333d.vip/api/v1/client/tenant/get',
      {
        method: 'POST',
        body: {
          domain: 'client-h5-dev.3333d.vip',
        },
      }
    )
  }
}
