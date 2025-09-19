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
        lang: 'en', // 添加语言标识
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // 默认的meta description
        {
          hid: 'description',
          name: 'description',
          content:
            'Victor Meridian Management Consultancies. Providing elite talent solutions for forward-thinking organizations. We connect exceptional professionals with industry-leading companies worldwide.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph默认设置
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Victor Meridian Management Consultancies',
        },
        { hid: 'og:url', property: 'og:url', content: 'https://www.vmmcae.com' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@VMMC' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.vmmcae.com' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            alternateName: 'VMMC',
            description:
              'Providing elite talent solutions for forward-thinking organizations. We connect exceptional professionals with industry-leading companies worldwide.',
            url: 'https://www.vmmcae.com',
            logo: 'https://www.vmmcae.com/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+971-4-376-4600',
              contactType: 'Customer Service',
              availableLanguage: ['English', 'Arabic'],
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ICD Brookfield Place, Level 7',
              addressLocality: 'Dubai',
              addressRegion: 'Dubai',
              addressCountry: 'AE',
            },
            foundingDate: '2010',
            numberOfEmployees: '50-100',
            areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'SG', 'MY'],
            serviceType: [
              'Executive Search',
              'Talent Acquisition',
              'HR Consulting',
              'Workforce Planning',
            ],
            sameAs: ['https://www.linkedin.com/company/vmmc'],
          }),
        },
      ],
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
