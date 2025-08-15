<template>
  <div class="p-5">
    <h2 class="text-2xl font-bold mb-4 text-[var(--tm-text-primary)]">pinan: 测试页</h2>
    <p class="text-[var(--tm-text-secondary)] mb-4">pinan: {{ useStore().count }}</p>
    <div class="flex gap-4">
      <el-button
        :style="{
          backgroundColor: 'var(--tm-btn-primary-background-0)',
          color: 'var(--tm-btn-primary-text-0)',
          borderColor: 'var(--tm-btn-primary-border-0)',
        }"
        @click="useStore().increment"
      >
        +1
      </el-button>
      <el-button
        :style="{
          backgroundColor: 'var(--tm-btn-primary-background-0)',
          color: 'var(--tm-btn-primary-text-0)',
          borderColor: 'var(--tm-btn-primary-border-0)',
        }"
        @click="useStore().decrement"
      >
        -1
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useStore } from '@/composables/useStore'
  const store = useStore()
  store.initStorageListener()
</script>
