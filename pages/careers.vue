<template>
  <div class="careers-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- 保持现有的 section 结构不变 -->
    <section
      id="career-home"
      class="scroll-mt-80px"
    >
      <CareersHero />
    </section>
    <section
      id="why-vmmc"
      class="scroll-mt-80px"
    >
      <WhyVMMC />
    </section>
    <section
      id="our-global-team"
      class="scroll-mt-80px"
    >
      <OurGlobalTeam />
    </section>
    <section
      id="open-positions"
      class="scroll-mt-80px"
    >
      <OpenPositions />
    </section>
    <section
      id="application-process"
      class="scroll-mt-80px"
    >
      <ApplicationProcess />
    </section>
    <section
      id="professional-development"
      class="scroll-mt-80px"
    >
      <ProfessionalDevelopment />
    </section>
    <section
      id="employee-benefits"
      class="scroll-mt-80px"
    >
      <EmployeeBenefits />
    </section>
    <section
      id="life-at-vmmc"
      class="scroll-mt-80px"
    >
      <LifeAtVMMC />
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import { useScrollTo } from '~/composables/useScrollTo'

  // 导入所有组件
  import CareersHero from '~/components/Careers/CareersHero.vue'
  import WhyVMMC from '~/components/Careers/WhyVMMC.vue'
  import OurGlobalTeam from '~/components/Careers/OurGlobalTeam.vue'
  import OpenPositions from '~/components/Careers/OpenPositions.vue'
  import ApplicationProcess from '~/components/Careers/ApplicationProcess.vue'
  import ProfessionalDevelopment from '~/components/Careers/ProfessionalDevelopment.vue'
  import EmployeeBenefits from '~/components/Careers/EmployeeBenefits.vue'
  import LifeAtVMMC from '~/components/Careers/LifeAtVMMC.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Careers - Join Our Global Team | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Discover exciting career opportunities at VMMC. Join our global team of HR professionals and make a meaningful impact in talent solutions across Asia-Pacific and Middle East.',
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
