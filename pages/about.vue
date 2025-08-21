<template>
  <div class="about-page">
    <!-- Hero 部分 -->
    <section id="company-intro">
      <AboutHero />
    </section>

    <!-- 愿景与使命 -->
    <section id="vision-mission">
      <AboutVision />
    </section>

    <!-- 全球布局 -->
    <section id="global-presence">
      <GlobalPresence />
    </section>

    <!-- 核心专长 -->
    <section id="core-expertise">
      <CoreExpertise />
    </section>

    <!-- 卓越承诺 -->
    <section id="commitment-excellence">
      <CommitmentExcellence />
    </section>

    <!-- 领导团队 -->
    <section id="leadership-team">
      <LeadershipTeam />
    </section>

    <!-- 核心价值观 -->
    <section id="core-values">
      <CoreValues />
    </section>

    <!-- 认证与标准 -->
    <section id="certifications">
      <CertificationsStandards />
    </section>

    <!-- 页脚 -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'

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

  const route = useRoute()

  // 处理锚点跳转
  onMounted(() => {
    if (route.hash) {
      setTimeout(() => {
        const element = document.querySelector(route.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  })

  // 监听路由变化
  watch(
    () => route.hash,
    (newHash) => {
      if (newHash) {
        const element = document.querySelector(newHash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  )
</script>

<style scoped>
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
