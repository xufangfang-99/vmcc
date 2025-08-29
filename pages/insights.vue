<template>
  <div class="insights-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- 1. 首屏展示 -->
    <section
      id="insights-hero"
      class="scroll-mt-80px"
    >
      <InsightsHero />
    </section>

    <!-- 2. Industry Reports -->
    <section
      id="industry-reports"
      class="scroll-mt-80px"
    >
      <IndustryReports />
    </section>

    <!-- 3. Talent Market Intelligence -->
    <section
      id="talent-market-intelligence"
      class="scroll-mt-80px"
    >
      <TalentMarketIntelligence />
    </section>

    <!-- 4. Recruitment Trends -->
    <section
      id="recruitment-trends"
      class="scroll-mt-80px"
    >
      <RecruitmentTrends />
    </section>

    <!-- 5. Success Stories -->
    <section
      id="success-stories"
      class="scroll-mt-80px"
    >
      <SuccessStories />
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import { useScrollTo } from '~/composables/useScrollTo'

  // 导入所有组件
  import InsightsHero from '~/components/Insights/InsightsHero.vue'
  import IndustryReports from '~/components/Insights/IndustryReports.vue'
  import TalentMarketIntelligence from '~/components/Insights/TalentMarketIntelligence.vue'
  import RecruitmentTrends from '~/components/Insights/RecruitmentTrends.vue'
  import SuccessStories from '~/components/Insights/SuccessStories.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Market Insights & Intelligence - VMMC Global',
    meta: [
      {
        name: 'description',
        content:
          'Access comprehensive market insights, industry reports, and talent intelligence across global markets. Expert analysis and data-driven recommendations for your recruitment strategy.',
      },
      {
        name: 'keywords',
        content:
          'market insights, talent intelligence, industry reports, recruitment trends, success stories, best practices, global recruitment',
      },
    ],
  })

  // 使用通用的滚动处理
  const { handleRouteHash } = useScrollTo()

  // 自动处理路由中的 hash
  handleRouteHash()
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
