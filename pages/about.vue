<template>
  <div class="about-page">
    <AboutHero />
    <AboutVision />
    <GlobalPresence />
    <CoreExpertise />
    <LeadershipTeam />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import AboutHero from '~/components/About/AboutHero.vue'
  import AboutVision from '~/components/About/AboutVision.vue'
  import GlobalPresence from '~/components/About/GlobalPresence.vue'
  import CoreExpertise from '~/components/About/CoreExpertise.vue'
  import LeadershipTeam from '~/components/About/LeadershipTeam.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  // 页面元数据
  definePageMeta({
    title: '关于我们 - VMMC Global',
    description: '了解VMMC Global - 亚太地区领先的人力资源咨询公司',
  })
</script>

<style scoped>
  .about-page {
    min-height: 100vh;
    background: var(--tm-bg-primary);
  }
</style>
