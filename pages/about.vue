<template>
  <div class="about-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- 保持现有的 section 结构不变 -->
    <section
      id="company-intro"
      class="scroll-mt-80px"
    >
      <AboutHero />
    </section>
    <section
      id="vision-mission"
      class="scroll-mt-80px"
    >
      <AboutVision />
    </section>
    <section
      id="global-presence"
      class="scroll-mt-80px"
    >
      <GlobalPresence />
    </section>
    <section
      id="core-expertise"
      class="scroll-mt-80px"
    >
      <CoreExpertise />
    </section>
    <section
      id="commitment-excellence"
      class="scroll-mt-80px"
    >
      <CommitmentExcellence />
    </section>
    <section
      id="leadership-team"
      class="scroll-mt-80px"
    >
      <LeadershipTeam />
    </section>
    <section
      id="core-values"
      class="scroll-mt-80px"
    >
      <CoreValues />
    </section>
    <section
      id="certifications"
      class="scroll-mt-80px"
    >
      <CertificationsStandards />
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import { useScrollTo } from '~/composables/useScrollTo'

  // 导入所有组件
  import AboutHero from '~/components/About/AboutHero.vue'
  import AboutVision from '~/components/About/AboutVision.vue'
  import GlobalPresence from '~/components/About/GlobalPresence.vue'
  import CoreExpertise from '~/components/About/CoreExpertise.vue'
  import CommitmentExcellence from '~/components/About/CommitmentExcellence.vue'
  import LeadershipTeam from '~/components/About/LeadershipTeam.vue'
  import CoreValues from '~/components/About/CoreValues.vue'
  import CertificationsStandards from '~/components/About/CertificationsStandards.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 使用通用的滚动处理
  const { handleRouteHash } = useScrollTo()

  // 自动处理路由中的 hash
  handleRouteHash()

  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'About Victor Meridian Management Consultancies - Elite Talent Solutions',
    meta: [
      {
        name: 'description',
        content:
          'Victor Meridian Management Consultancies. Providing elite talent solutions for forward-thinking organizations. We connect exceptional professionals with industry-leading companies worldwide.',
      },
      {
        name: 'keywords',
        content:
          'Victor Meridian Management Consultancies, about VMMC, elite talent solutions, executive search, global recruitment',
      },
      {
        property: 'og:title',
        content: 'About Victor Meridian Management Consultancies',
      },
      {
        property: 'og:description',
        content:
          'Providing elite talent solutions for forward-thinking organizations. We connect exceptional professionals with industry-leading companies worldwide.',
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
