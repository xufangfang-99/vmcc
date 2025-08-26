import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineNuxtConfig({
  compatibilityDate: '2025-02-01',
  devtools: { enabled: true },
  components: {
    dirs: [
      {
        path: '~/components',
        global: true,
      },
      // {
      //   path: '~/pages',
      //   pattern: '**/*.vue',
      //   global: true,
      //   pathPrefix: false,
      // },
    ],
  },
  modules: [
    [
      '@nuxt/image',
      {
        inject: true,
      },
    ],
    '@nuxtjs/eslint-module',
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    'nuxt-svgo',
  ],
  css: ['~/assets/styles/global.css', 'uno.css'],
  build: {
    transpile: ['@element-plus/icons-vue'],
    postcss: {
      plugins: {
        '@fullhuman/postcss-purgecss': {
          content: ['./pages/**/*.{vue,js,ts}', './components/**/*.{vue,js,ts}'],
        },
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;', // 自动导入 SCSS 变量
        },
      },
    },
    optimizeDeps: {
      include: ['dayjs', 'lodash-unified'],
    },
    plugins: [vueJsx()],
  },
  eslint: {
    lintOnStart: false,
    include: ['**/*.{js,jsx,ts,tsx,vue}'],
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'transition-colors',
      },
    },
  },
  image: {
    provider: false,
  },
  i18n: {
    langDir: './locales/',
    locales: [
      {
        code: 'zh-CN',
        name: '中文',
        file: 'zh.json',
      },
      {
        code: 'en-US',
        name: 'English',
        file: 'en.json',
      },
    ],
    defaultLocale: 'zh-CN',
    strategy: 'prefix_except_default',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  runtimeConfig: {
    apiSecret: '',
    isServer: 'true',
    public: {
      baseUrl: '',
      environment: process.env.NODE_ENV || 'development',
    },
  },
  plugins: ['~/plugins/i18n.ts'],
  experimental: {
    payloadExtraction: false,
  },
})
