<template>
  <div class="p-5">
    <h2 class="text-2xl font-bold mb-4 text-[var(--tm-text-primary)]">测试页</h2>
    <p class="text-[var(--tm-text-secondary)]">我是客户端打印：{{ config.public.baseUrl }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useRuntimeConfig } from 'nuxt/app'

  const config = useRuntimeConfig()

  if (import.meta.server) {
    console.log('我是服务器打印：= ', config.isServer)
  }
  if (import.meta.client) {
    console.log('我是客户端打印：= ', config.public.baseUrl)
  }
</script>
