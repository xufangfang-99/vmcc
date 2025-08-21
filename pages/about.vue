<template>
  <div class="about-page">
    <AboutHero />
    <AboutVision />
    <GlobalPresence />
    <CoreExpertise />
    <LeadershipTeam />
  </div>
</template>

<script setup lang="ts">
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
