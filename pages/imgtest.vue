<template>
  <div>
    <h2>接口返回的动态图片优化{{ menus }}</h2>
    <div
      v-for="menu in menus"
      :key="menu.id"
      class="menu-item"
    >
      <img
        :src="getOptimizedImageUrl(menu.iconUrl)"
        :alt="menu.categoryName"
      />
      <p>{{ menu.categoryName }}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from '@/composables/useStore'
  const store = useStore()
  import { useAsyncData } from '#app'

  const tenantPending = ref(false)
  const tenantError = ref(null)

  const getHeaders = () => {
    const headers = {
      'x-device-id': '65b58114-d1f6-41b3-968d-65f9b1a0aee5',
      'x-device-type': '2',
      'x-lang': 'pt_BR',
      'x-platform-id': 'C',
      'x-tenant-id': '1000010',
      'x-web-terminal-id': 'WINDOWS',
    }

    const token = store.getToken
    if (token) {
      headers.authorization = token
    }

    return headers
  }

  const fetchTenantInfo = async () => {
    tenantPending.value = true
    tenantError.value = null
    try {
      const { data, error } = await useFetch(
        'https://thirdgame-client-api-dev.3333d.vip/api/v1/client/game/navigation/menu',
        {
          method: 'POST',
          headers: getHeaders(),
          body: {
            sidebar: true,
          },
        }
      )

      if (error.value) {
        throw new Error(error.value.message)
      }

      console.log('-完整的返回数据：', data.value)

      const { code, msg, data: menuData } = data.value || {}
      if (code !== 0) {
        ElMessage.error(msg)
        throw new Error(msg)
      }

      return menuData?.menus || [] // 返回数据
    } catch (error) {
      console.error('Tenant Info Error:', error)
      if (import.meta.client) {
        ElMessage.error('请求失败')
      }
      tenantError.value = error.message
      return [] // 返回空数组以防止其他错误
    } finally {
      tenantPending.value = false
    }
  }

  const { data: menus } = useAsyncData('menus', async () => {
    const response = await fetchTenantInfo() // 用之前定义的 fetchTenantInfo 函数
    return response // 直接返回数据
  })

  const getOptimizedImageUrl = (imageUrl) => {
    return `/api/image?url=${encodeURIComponent(imageUrl)}&format=webp&quality=80`
  }
</script>

<style scoped>
  .menu-item {
    display: inline-block;
    margin: 10px;
    text-align: center;
  }
  .menu-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
</style>
