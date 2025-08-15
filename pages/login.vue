<template>
  <div class="p-5">
    <el-card class="max-w-md mx-auto bg-[var(--tm-bg-primary)] border-[var(--tm-bd-primary)]">
      <template #header>
        <h2 class="text-xl font-bold text-[var(--tm-text-primary)]">登录</h2>
      </template>
      <el-form class="space-y-4">
        <el-form-item
          label="用户名"
          class="text-[var(--tm-text-secondary)]"
          :style="{
            '--el-text-color-regular': 'var(--tm-text-secondary)',
          }"
        >
          <el-input
            v-model="username"
            class="w-full"
            :style="{
              '--el-input-border-color': 'var(--tm-bd-primary)',
              '--el-input-text-color': 'var(--tm-text-primary)',
              '--el-input-placeholder-color': 'var(--tm-text-placeholder)',
            }"
          />
        </el-form-item>
        <el-form-item
          label="密码"
          class="text-[var(--tm-text-secondary)]"
          :style="{
            '--el-text-color-regular': 'var(--tm-text-secondary)',
          }"
        >
          <el-input
            v-model="password"
            type="password"
            class="w-full"
            :style="{
              '--el-input-border-color': 'var(--tm-bd-primary)',
              '--el-input-text-color': 'var(--tm-text-primary)',
              '--el-input-placeholder-color': 'var(--tm-text-placeholder)',
            }"
          />
        </el-form-item>
        <div class="flex gap-4">
          <el-button
            :style="{
              backgroundColor: 'var(--tm-btn-primary-background-0)',
              color: 'var(--tm-btn-primary-text-0)',
              borderColor: 'var(--tm-btn-primary-border-0)',
            }"
            @click="handleLogin"
          >
            登录
          </el-button>
          <el-button
            class="hover:opacity-90"
            :style="{
              backgroundColor: 'var(--tm-btn-primary-background-0)',
              color: 'var(--tm-btn-primary-text-0)',
              borderColor: 'var(--tm-btn-primary-border-0)',
            }"
            @click="handleLogout"
          >
            登出
          </el-button>
        </div>
      </el-form>
      <client-only>
        <div
          v-if="store.getToken"
          class="mt-5 p-3 rounded bg-[var(--tm-bg-secondary)] text-[var(--tm-text-primary)]"
        >
          <p>当前 Token: {{ store.getToken }}</p>
        </div>
      </client-only>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { useStore } from '@/composables/useStore'
  import { ElMessage } from 'element-plus'
  import { ref } from 'vue'

  import { useHead } from 'nuxt/app'

  useHead({
    title: '我是登入',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: '我是登入的描述',
      },
      {
        name: 'keywords',
        content: 'nuxt, seo, web开发, 网站优化',
      },
    ],
  })

  const store = useStore()
  const username = ref('')
  const password = ref('')

  const generateRandomToken = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  const handleLogin = () => {
    console.log('登录:', { username: username.value, password: password.value })

    const randomToken = generateRandomToken()
    const fullToken = store.setToken(randomToken)

    ElMessage.success(`登录成功！Token 已设置: ${fullToken}`)
  }

  const handleLogout = () => {
    console.log('1')
    store.delToken()
    console.log('3')
    ElMessage.info('已登出，Token 已清除')
  }
</script>
