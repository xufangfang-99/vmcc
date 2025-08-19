<template>
  <div class="homepage">
    <!-- 第一屏: 视频背景英雄区 -->
    <HeroSection />

    <!-- 第二屏: 服务展示 -->
    <ServicesSection />

    <!-- 第三屏: 精英服务 -->
    <ExpertiseSection />

    <!-- 第四屏: 客户评价 -->
    <TestimonialsSection />

    <!-- 第五屏: 行动号召 -->
    <CTASection />
  </div>
</template>

<script setup lang="ts">
  import HeroSection from './Home/Components/HeroSection.vue'
  import ServicesSection from './Home/Components/ServicesSection.vue'
  import ExpertiseSection from './Home/Components/ExpertiseSection.vue'
  import TestimonialsSection from './Home/Components/TestimonialsSection.vue'
  import CTASection from './Home/Components/CTASection.vue'

  // 设置页面使用首页布局
  definePageMeta({
    layout: 'homepage',
  })

  useHead({
    title: "麦肯锡 - What's your next brilliant move?",
    meta: [
      {
        name: 'description',
        content: '麦肯锡全球管理咨询公司',
      },
    ],
  })
</script>

<style scoped>
  /* 重置默认样式 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 隐藏默认的 layout header */
  .homepage {
    position: relative;
  }
</style>
