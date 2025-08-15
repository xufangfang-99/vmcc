<template>
  <div>
    <h2>使用优化的静态图片</h2>
    <div class="image-container">
      <!-- 使用主题相关图片 -->
      <OptImage
        v-for="image in images"
        :key="image.id"
        :src="image.url"
        :alt="image.alt"
        width="300"
        height="200"
        class="optimized-image"
        loading="lazy"
        use-theme-path
      />

      <!-- 不使用主题路径的图片 -->
      <OptImage
        src="/images/comm/test.jpg"
        width="300"
        height="200"
        class="optimized-image"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
  const images = ref([
    { id: 1, url: '/images/test.jpg', alt: 'Sample Image 1' },
    { id: 2, url: '/images/banner.png', alt: 'Sample Image 2' },
    { id: 3, url: '/images/animation.gif', alt: 'Sample Image 3' },
  ])
</script>

<style scoped>
  .image-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .optimized-image {
    object-fit: cover;
  }
</style>
