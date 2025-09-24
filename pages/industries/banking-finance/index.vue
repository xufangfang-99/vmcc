<template>
  <div class="banking-finance-page">
    <!-- Hero Section -->
    <BankingFinanceHero />

    <!-- Industry Overview -->
    <IndustryOverview />

    <!-- Reports & Studies Section -->
    <ReportsSection />

    <!-- Market Insights -->
    <MarketInsights />

    <!-- Services Section -->
    <ServicesSection />

    <!-- CTA Section -->
    <CTASection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import BankingFinanceHero from '~/components/Industries/Banking/BankingFinanceHero.vue'
  import IndustryOverview from '~/components/Industries/Banking/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Banking/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Banking/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Banking/ServicesSection.vue'
  import CTASection from '~/components/Industries/Banking/CTASection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Banking & Finance Industry Solutions | Expert Talent & Digital Transformation | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading banking and finance talent solutions in UAE and GCC. Expertise in wealth management, digital transformation, investment banking, and fintech. Comprehensive industry reports and consulting services.',
      },
      {
        name: 'keywords',
        content:
          'UAE banking recruitment, wealth management talent, fintech professionals, investment banking careers, digital transformation banking, Islamic finance experts, compliance professionals, ESG finance',
      },
      {
        property: 'og:title',
        content: 'Banking & Finance Industry Solutions | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your banking and finance operations with our expert talent solutions, digital transformation insights, and comprehensive industry reports.',
      },
    ],
  })
</script>

<style scoped>
  .banking-finance-page {
    position: relative;
    width: 100%;
  }
</style>
