import { useStore } from '@/composables/useStore'
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('当前testglobal:', to.path)
  console.log('来源路径testglobal:', from.path)
  const publicRoutes = [
    '/',
    '/index',
    '/index.html',
    '/login',
    '/login.html',
    '/test10.html',
    '/test8.html',
  ]
  const isPublicRoute = publicRoutes.some((route) => to.path === route || to.path.startsWith(route))
  if (isPublicRoute) return

  if (import.meta.client) {
    const store = useStore()
    const token = store.getToken

    if (!token) {
      return navigateTo({
        path: '/login',
        query: {
          code: '401',
          message: encodeURIComponent('没有token，请先登入'),
        },
      })
    }
  }
})
