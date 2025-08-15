<template>
  <div class="p-5">
    <h2 class="text-2xl font-bold mb-4 text-[var(--tm-text-primary)]">userState: 测试页</h2>
    <div class="space-y-2">
      <p class="text-[var(--tm-text-secondary)]">普通响应式数据: {{ number }}</p>
      <p class="text-[var(--tm-text-secondary)]">userState: {{ userNumber }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useState } from 'nuxt/app'
  import { onMounted, ref } from 'vue'
  const number = ref(0)
  number.value++
  const userNumber = useState('userNumber', () => {
    return 0
  })
  onMounted(() => {
    userNumber.value++
    console.log(userNumber.value)
  })
</script>
