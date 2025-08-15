declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
    isServer: string
  }
  interface PublicRuntimeConfig {
    baseUrl: string
    environment: string
  }
}
