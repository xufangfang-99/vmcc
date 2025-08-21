<template>
  <div class="about-page">
    <AboutHero />
    <AboutVision />
    <CommitmentExcellence />
    <!-- 新增：卓越承诺组件 -->
    <GlobalPresence />
    <CoreExpertise />
    <CoreValues />
    <CertificationsStandards />
    <!-- 新增：认证标准组件 -->
    <LeadershipTeam />
  </div>
</template>

<script setup lang="ts">
  import AboutHero from '~/components/About/AboutHero.vue'
  import AboutVision from '~/components/About/AboutVision.vue'
  import CommitmentExcellence from '~/components/About/CommitmentExcellence.vue' // 新增
  import GlobalPresence from '~/components/About/GlobalPresence.vue'
  import CoreExpertise from '~/components/About/CoreExpertise.vue'
  import CoreValues from '~/components/About/CoreValues.vue'
  import CertificationsStandards from '~/components/About/CertificationsStandards.vue' // 新增
  import LeadershipTeam from '~/components/About/LeadershipTeam.vue'

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
