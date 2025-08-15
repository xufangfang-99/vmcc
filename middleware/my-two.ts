import { defineNuxtRouteMiddleware } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('当前路径my-two:', to.path)
  console.log('来源路径my-two:', from.path)
})
