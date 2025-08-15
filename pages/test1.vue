<template>
  <div class="p-5">
    <h2 class="text-2xl font-bold mb-4 text-[var(--tm-text-primary)]">测试页</h2>
    <div class="space-y-2">
      <p class="text-[var(--tm-text-secondary)]">
        {{ helloTest({ title: '我是第一个测试1111' }) }}
      </p>
      <p class="text-[var(--tm-text-secondary)]">
        {{ helloTest1({ title: '我是第二个测试222' }) }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { helloTest, helloTest1 } from '@/composables/useTest'
  console.log(helloTest1({ title: '我是第一个测试1111' }))
</script>
