<template>
  <NuxtLink
    to="/"
    class="logo"
  >
    <img
      src="/images/comm/logo.svg"
      alt="QuantumBlack"
      class="logo-svg w-50"
      @error="handleImageError"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
  const handleImageError = (event: Event) => {
    console.error('Logo 加载失败')
    // 可以设置一个备用图片或显示文字
    const img = event.target as HTMLImageElement
    img.style.display = 'none'
  }
</script>
