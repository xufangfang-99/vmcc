import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp.isClient) {
    const savedLocale = localStorage.getItem('user-language')
    if (savedLocale) {
      // @ts-ignore
      nuxtApp.$i18n.locale = savedLocale
    }
  }
})
