<template>
  <div class="p-5">
    <h2 class="text-2xl font-bold mb-4 text-[var(--tm-text-primary)]">环境配置</h2>
    <div class="space-y-2">
      <!-- 公共配置 -->
      <p>
        baseUrl:
        <span>{{ config.public.baseUrl }}</span>
      </p>
      <p>
        environment:
        <span>{{ config.public.environment }}</span>
      </p>

      <!-- 使用 ClientOnly 包装环境相关的显示 -->
      <ClientOnly>
        <p>
          isClient:
          <span>{{ isClient }}</span>
        </p>
        <p>
          isServer:
          <span>{{ isServer }}</span>
        </p>
        <template #fallback>
          <p>Loading environment info...</p>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const config = useRuntimeConfig()

  const isClient = computed(() => process.client)
  const isServer = computed(() => process.server)

  if (process.server) {
    console.log({
      apiSecret: config.apiSecret,
      isServer: config.isServer,
    })
  }

  if (process.client) {
    const clientConfig = {
      baseUrl: config.public.baseUrl,
      environment: config.public.environment,
    }
    console.log(clientConfig)
  }
</script>

<style scoped>
  .space-y-2 > * + * {
    margin-top: 0.5rem;
  }
</style>
