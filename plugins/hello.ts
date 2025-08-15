import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    // console.log('客户端页面加载完成')
  })

  nuxtApp.hook('app:rendered', (_renderContext) => {
    // const html = renderContext.renderResult.html
    // console.log('服务端渲染html完成', html)
  })
})
