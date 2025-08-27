<template>
  <div class="journey-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- Hero Section -->
    <JourneyHero />

    <!-- Timeline Section - 待添加 -->
    <JourneyTimeline />
    <!-- Global Services Section - 待添加 -->
    <JourneyGlobalServices />
    <!-- GCC Regions Section - 待添加 -->
    <JourneyGCCRegions />
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import JourneyHero from '~/components/Journey/JourneyHero.vue'
  import JourneyTimeline from '~/components/Journey/JourneyTimeline.vue'
  import JourneyGlobalServices from '~/components/Journey/JourneyGlobalServices.vue'
  import JourneyGCCRegions from '~/components/Journey/JourneyGCCRegions.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Our Journey - VMMC',
    meta: [
      {
        name: 'description',
        content:
          "Discover VMMC's journey from a single office in Singapore to becoming a leading comprehensive human resources service provider across Asia-Pacific and Middle East.",
      },
    ],
  })
</script>

<style>
  /* 页面切换动画 */
  @keyframes pageEnter {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-page-enter {
    animation: pageEnter 0.6s ease-out;
  }
</style>
