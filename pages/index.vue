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

    <!-- 第六屏: 页脚 -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import HeroSection from './Home/Components/HeroSection.vue'
  import ServicesSection from './Home/Components/ServicesSection.vue'
  import ExpertiseSection from './Home/Components/ExpertiseSection.vue'
  import TestimonialsSection from './Home/Components/TestimonialsSection.vue'
  import CTASection from './Home/Components/CTASection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面使用首页布局
  definePageMeta({
    layout: 'homepage',
  })

  useHead({
    title: '精英人才解决方案 - 为企业提供优质猎头服务',
    meta: [
      {
        name: 'description',
        content:
          '我们为具有前瞻性思维的企业提供优质的猎头服务、战略人力资源外包、人才派遣解决方案、组织咨询以及全面的跨境业务支持。',
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
