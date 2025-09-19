<template>
  <div class="staffing-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- 保持现有的 section 结构不变 -->
    <section
      id="recruitment-intro"
      class="scroll-mt-80px"
    >
      <StaffingHero />
    </section>
    <section
      id="emiratisation"
      class="scroll-mt-80px"
    >
      <Emiratisation />
    </section>
    <section
      id="permanent-recruitment"
      class="scroll-mt-80px"
    >
      <PermanentRecruitment />
    </section>
    <section
      id="temporary-recruitment"
      class="scroll-mt-80px"
    >
      <TemporaryRecruitment />
    </section>
    <section
      id="bulk-hiring"
      class="scroll-mt-80px"
    >
      <BulkHiring />
    </section>
    <section
      id="outsourcing-services"
      class="scroll-mt-80px"
    >
      <OutsourcingServices />
    </section>
    <section
      id="advisory-services"
      class="scroll-mt-80px"
    >
      <AdvisoryServices />
    </section>
    <section
      id="staffing-cta"
      class="scroll-mt-80px"
    >
      <StaffingCTA />
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import { useScrollTo } from '~/composables/useScrollTo'

  // 导入所有组件
  import StaffingHero from '~/components/Staffing/StaffingHero.vue'
  import Emiratisation from '~/components/Staffing/Emiratisation.vue'
  import PermanentRecruitment from '~/components/Staffing/PermanentRecruitment.vue'
  import TemporaryRecruitment from '~/components/Staffing/TemporaryRecruitment.vue'
  import BulkHiring from '~/components/Staffing/BulkHiring.vue'
  import OutsourcingServices from '~/components/Staffing/OutsourcingServices.vue'
  import AdvisoryServices from '~/components/Staffing/AdvisoryServices.vue'
  import StaffingCTA from '~/components/Staffing/StaffingCTA.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Services - Victor Meridian Management Consultancies Elite Solutions',
    meta: [
      {
        name: 'description',
        content:
          'Victor Meridian Management Consultancies. Providing elite talent solutions for forward-thinking organizations. We connect exceptional professionals with industry-leading companies worldwide.',
      },
      {
        name: 'keywords',
        content:
          'VMMC services, Victor Meridian Management Consultancies, recruitment services, executive search, talent acquisition, HR outsourcing',
      },
      {
        property: 'og:title',
        content: 'Services - Victor Meridian Management Consultancies',
      },
      {
        property: 'og:description',
        content:
          'Comprehensive talent solutions including executive search, HR outsourcing, immigration services, and strategic consulting.',
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
