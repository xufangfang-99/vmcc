import { ApiRequest } from '../request'

// 请求参数接口
export interface PopListParams {
  start: number // 起点,从0开始
  limit: number // 数量,单页数据行数
}

// 弹窗类型枚举
export enum PopType {
  NotLoggedIn = 1, // 未登录弹窗
  LoggedIn = 2, // 登陆弹窗
  ReturnHome = 3, // 返回首页弹窗
  RefreshPage = 4, // 界面刷新弹窗
}

// 跳转类型枚举
export enum RedirectType {
  SpecificGame = 1, // 指定游戏
  InternalPage = 2, // 内部界面
  ActivityDetail = 3, // 指定活动详情
  ExternalLink = 4, // 外部链接
}

// 弹窗列表项接口
export interface PopListItem {
  id: number // ID
  title: string // 标题
  content: string // 内容
  lang: string // 语言
  thumbnail: string // 缩略图
  popType: PopType // 弹窗类型
  redirectType: RedirectType // 跳转类型
  redirectParas: string // 跳转参数
  sort: number // 排序
  createdAt: number // 创建时间 13位时间戳(毫秒)
  updatedAt: number // 最后更新时间 13位时间戳(毫秒)
}

// 响应数据接口
export interface PopListResponse {
  total: number // 总数
  list: PopListItem[] // 弹窗列表
}

export class PopApi {
  /**
   * 获取弹窗列表
   * @param params 分页参数
   * @returns 分页后的弹窗列表数据
   */
  static async getPopList(params: PopListParams) {
    return ApiRequest.request<PopListResponse>(
      'https://sysmanager-client-api-dev.3333d.vip/api/v1/client/sysmanager/pop-list',
      {
        method: 'POST',
        body: params,
      }
    )
  }

  /**
   * 获取指定语言的弹窗列表
   * @param params 分页参数
   * @param lang 语言代码
   * @returns 分页后的弹窗列表数据
   */
  static async getPopListByLang(params: PopListParams, lang: string) {
    return ApiRequest.request<PopListResponse>(
      'https://sysmanager-client-api-dev.3333d.vip/api/v1/client/sysmanager/pop-list',
      {
        method: 'POST',
        body: {
          ...params,
          lang,
        },
      }
    )
  }
}
