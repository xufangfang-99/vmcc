<template>
  <div class="about-page">
    <!-- 保持现有的 section 结构不变 -->
    <section id="company-intro">
      <AboutHero />
    </section>
    <section id="vision-mission">
      <AboutVision />
    </section>
    <section id="global-presence">
      <GlobalPresence />
    </section>
    <section id="core-expertise">
      <CoreExpertise />
    </section>
    <section id="commitment-excellence">
      <CommitmentExcellence />
    </section>
    <section id="leadership-team">
      <LeadershipTeam />
    </section>
    <section id="core-values">
      <CoreValues />
    </section>
    <section id="certifications">
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
</script>

<style scoped>
  /* 保持现有样式不变 */
  .about-page {
    background: var(--tm-bg-primary);
  }

  /* 为每个部分添加间距和滚动偏移 */
  section {
    scroll-margin-top: 80px; /* 为固定头部预留空间 */
  }

  /* 页面切换动画 */
  .about-page {
    animation: pageEnter 0.6s ease-out;
  }

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
</style>
