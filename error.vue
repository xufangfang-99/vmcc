<template>
  <div class="error-container">
    <h1>{{ error?.statusCode ?? 'Unknown Error' }}</h1>
    <p>{{ error?.message ?? 'An unexpected error occurred' }}</p>
    <button @click="handleError">Try again</button>
    <NuxtLink
      to="/"
      @click="handleHomeClick"
    >
      Go back home
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'nuxt/app'
  import { useMenuHandler } from '~/composables/useMenuHandler'
  // 获取统一的菜单处理方法
  const { resetToHome } = useMenuHandler()
  // 处理 Home 点击，使用统一的重置方法
  const handleHomeClick = resetToHome

  interface ErrorObject {
    statusCode?: number
    message?: string
  }

  defineProps({
    error: {
      type: Object as () => ErrorObject,
      required: true,
    },
  })
  const handleError = () => {
    const router = useRouter()
    router.push('/login')
  }
</script>

<style scoped>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  button,
  a {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin: 0.5rem;
    text-decoration: none;
    color: #fff;
    background-color: #3498db;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover,
  a:hover {
    background-color: #2980b9;
  }
</style>
