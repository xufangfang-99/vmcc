<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- 页面头部 -->
    <IndustryPageHeader
      :industry-name="industryName"
      :industry-description="industryDescription"
      background-image="banner1.jpg"
    />

    <!-- 行业介绍部分 -->
    <IndustryIntroSection />

    <!-- 如何帮助客户 -->
    <HowWeHelpClients />

    <!-- 服务行业 -->
    <SectorsWeServe />

    <!-- 我们的团队 -->
    <OurPeople />

    <!-- 其他页面内容可以在这里添加 -->
    <!-- 例如：案例研究、客户证言等 -->
    <!-- 第四屏: 页脚 -->
    <FooterSection />
  </div>
</template>

<script setup>
  import IndustryPageHeader from '~/components/Industries/AerospaceDefense/HowWeHelpClients/AerospacePageHeader.vue'
  import IndustryIntroSection from '~/components/Industries/AerospaceDefense/HowWeHelpClients/AerospaceIndustryIntro.vue'
  import HowWeHelpClients from '~/components/Industries/AerospaceDefense/HowWeHelpClients/AerospaceHowWeHelpClients.vue'
  import SectorsWeServe from '~/components/Industries/AerospaceDefense/HowWeHelpClients/AerospaceSectorsWeServe.vue'
  import OurPeople from '~/components/Industries/AerospaceDefense/HowWeHelpClients/AerospaceOurPeople.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  // 页面数据
  const industryName = 'Aerospace & Defense'
  const industryDescription =
    'Creating and accelerating critical advantages through cutting-edge strategy and operations'

  // SEO 设置
  useHead({
    title: `${industryName} Solutions - VMMC`,
    meta: [
      {
        name: 'description',
        content: `${industryDescription}. Expert consulting services for ${industryName.toLowerCase()} companies.`,
      },
      {
        name: 'keywords',
        content: `${industryName.toLowerCase()}, consulting, strategy, operations, digital transformation`,
      },
    ],
  })

  // 页面配置
  definePageMeta({
    layout: 'default',
  })
</script>
