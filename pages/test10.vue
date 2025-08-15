<template>
  <div class="p-5">
    <h2 class="text-2xl font-bold mb-4 text-[var(--tm-text-primary)]">SEO配置</h2>
    <div class="bg-[var(--tm-bg-secondary)] p-4 rounded-lg">
      <p class="text-[var(--tm-text-secondary)]">已配置页面 SEO 信息，请查看页面源代码。</p>
    </div>
  </div>
</template>

<script setup>
  import { useHead } from 'nuxt/app'

  useHead({
    title: '我的网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: '我的网站描述',
      },
      {
        name: 'keywords',
        content: 'nuxt, seo, web开发, 网站优化',
      },
    ],
  })
</script>
