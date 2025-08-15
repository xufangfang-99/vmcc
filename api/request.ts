import type { UseFetchOptions } from 'nuxt/app'
import { useFetch } from 'nuxt/app'
import { useStore } from '~/composables/useStore'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import type { Ref } from 'vue'

export interface ApiResponse<T> {
  code: number
  msg: string
  data: T
}

export interface RequestOptions<T = any> extends Omit<UseFetchOptions<ApiResponse<T>>, 'headers'> {
  showError?: boolean
  customError?: (error: any) => void
  headers?: Record<string, string>
}

export interface RequestStateData<T> {
  data: T | null
  error: string | null
  pending: boolean
  refresh: () => Promise<void>
}

export type RequestState<T> = Ref<RequestStateData<T>>

export class ApiRequest {
  private static getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'x-device-id': '65b58114-d1f6-41b3-968d-65f9b1a0aee5',
      'x-device-type': '2',
      'x-lang': 'pt_BR',
      'x-platform-id': 'C',
      'x-tenant-id': '1000010',
      'x-web-terminal-id': 'WINDOWS',
    }

    const store = useStore()
    const token = store.getToken
    if (token) {
      headers.authorization = token
    }

    return headers
  }

  private static createState<T>(): RequestState<T> {
    return ref({
      data: null,
      error: null,
      pending: false,
      refresh: async () => {},
    })
  }

  private static createOptions<T>(
    options: RequestOptions<T> = {}
  ): UseFetchOptions<ApiResponse<T>> {
    const { showError = true, customError, headers, ...restOptions } = options

    return {
      ...restOptions,
      headers: {
        ...this.getHeaders(),
        ...headers,
      },
      onRequest({ options }) {
        console.log('Request:', options)
      },
      onRequestError({ error }) {
        console.error('Request Error:', error)
        if (process.client && showError) {
          ElMessage.error('请求发送失败')
        }
        customError?.(error)
      },
      onResponse({ response }) {
        const { code, msg } = response._data
        if (code !== 0) {
          if (process.client && showError) {
            ElMessage.error(msg)
          }
          throw new Error(msg)
        }
      },
      onResponseError({ error }) {
        console.error('Response Error:', error)
        if (process.client && showError) {
          ElMessage.error('请求失败')
        }
        customError?.(error)
      },
    }
  }

  static async request<T>(url: string, options: RequestOptions<T> = {}): Promise<RequestState<T>> {
    const state = this.createState<T>()

    const refresh = async () => {
      state.value.pending = true
      state.value.error = null

      try {
        const result = await useFetch<ApiResponse<T>>(url, this.createOptions<T>(options))

        if (result.error.value) {
          state.value.error = result.error.value.message
        } else if (result.data.value) {
          state.value.data = result.data.value.data
        }
      } catch (err) {
        state.value.error = err instanceof Error ? err.message : 'Unknown error'
      } finally {
        state.value.pending = false
      }
    }

    state.value.refresh = refresh
    await refresh()

    return state
  }
}
