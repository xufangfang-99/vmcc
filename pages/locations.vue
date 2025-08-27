<template>
  <div class="locations-page">
    <!-- 全球办公网络 -->
    <GlobalPresence />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import GlobalPresence from '~/components/About/GlobalPresence.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Global Locations - VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Discover our global presence across key business hubs in Asia-Pacific and Middle East, enabling seamless cross-border operations and local market expertise.',
      },
    ],
  })
</script>

<style scoped>
  .locations-page {
    min-height: 100vh;
  }
</style>
