<template>
  <div class="p-5">
    <h2 class="text-2xl font-bold mb-4 text-[var(--tm-text-primary)]">测试页</h2>
    <div class="space-y-2">
      <p class="text-[var(--tm-text-secondary)]">
        {{ helloTest3({ title: '我是第一个测试3333' }) }}
      </p>
      <p class="text-[var(--tm-text-secondary)]">
        {{ helloTest4({ title: '我是第二个测试4444' }) }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { helloTest3, helloTest4 } from '@/utils/useTest'
  console.log(helloTest3({ title: '我是第一个测试3333' }))
</script>
