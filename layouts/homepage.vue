<template>
  <div class="homepage-layout">
    <slot />
  </div>
</template>

<script setup lang="ts">
  // 首页专用布局，没有默认的头部和底部
</script>

<style scoped>
  .homepage-layout {
    min-height: 100vh;
  }
</style>
