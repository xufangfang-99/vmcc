<template>
  <div class="p-5 max-w-3xl mx-auto">
    <el-card class="bg-[var(--tm-bg-primary)] border-[var(--tm-bd-primary)]">
      <template #header>
        <div>
          <h3 class="text-xl font-bold text-[var(--tm-text-primary)]">按需加载测试</h3>
        </div>
      </template>
      <el-space
        direction="vertical"
        size="large"
        class="w-full"
      >
        <el-input
          v-model="input"
          placeholder="请输入内容"
          class="w-full"
          :style="{
            '--el-input-border-color': 'var(--tm-bd-primary)',
            '--el-input-text-color': 'var(--tm-text-primary)',
            '--el-input-placeholder-color': 'var(--tm-text-placeholder)',
          }"
        />
        <div class="flex gap-4">
          <el-button
            :style="{
              backgroundColor: 'var(--tm-btn-primary-background-0)',
              color: 'var(--tm-btn-primary-text-0)',
              borderColor: 'var(--tm-btn-primary-border-0)',
            }"
          >
            主要按钮
          </el-button>
          <el-button
            type="success"
            class="hover:opacity-90"
          >
            成功按钮
          </el-button>
          <el-button
            type="warning"
            class="hover:opacity-90"
            @click="helloClick"
          >
            警告按钮
          </el-button>
        </div>
      </el-space>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { createError, useHead } from 'nuxt/app'
  import { ref } from 'vue'
  useHead({
    title: '我是首页',
    meta: [
      {
        name: 'description',
        content: '我是首页的描述',
      },
      {
        name: 'keywords',
        content: 'nuxt, seo, web开发, 网站优化',
      },
    ],
  })
  const input = ref('')
  function helloClick() {
    throw createError({
      statusCode: 404,
      message: '找不到页面',
      fatal: true,
    })
  }
</script>

<style scoped>
  .container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
</style>
