import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('当前路径:', to.path)
  console.log('来源路径:', from.path)
  if (to.path === '/about') {
    return navigateTo('/login')
  }
})
