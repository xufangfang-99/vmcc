<template>
  <div class="homepage relative">
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
  import HeroSection from '~/components/Home/HeroSection.vue'
  import ServicesSection from '~/components/Home/ServicesSection.vue'
  import ExpertiseSection from '~/components/Home/ExpertiseSection.vue'
  import TestimonialsSection from '~/components/Home/TestimonialsSection.vue'
  import CTASection from '~/components/Home/CTASection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面使用首页布局
  definePageMeta({
    layout: 'homepage',
  })

  useHead({
    title: 'Victor Meridian Management Consultancies - Elite Talent Solutions',
    meta: [
      {
        name: 'description',
        content:
          'Victor Meridian Management Consultancies. Providing elite talent solutions for forward-thinking organizations. We connect exceptional professionals with industry-leading companies worldwide.',
      },
      {
        name: 'keywords',
        content:
          'Victor Meridian Management Consultancies, elite talent solutions, executive search, professional recruitment, global talent acquisition',
      },
      {
        property: 'og:title',
        content: 'Victor Meridian Management Consultancies - Elite Talent Solutions',
      },
      {
        property: 'og:description',
        content:
          'Providing elite talent solutions for forward-thinking organizations. We connect exceptional professionals with industry-leading companies worldwide.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
  })
</script>
