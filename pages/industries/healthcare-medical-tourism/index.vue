<template>
  <div class="healthcare-page">
    <!-- Hero Section -->
    <HealthcareHero />

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
  import HealthcareHero from '~/components/Industries/Healthcare/HealthcareHero.vue'
  import IndustryOverview from '~/components/Industries/Healthcare/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Healthcare/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Healthcare/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Healthcare/ServicesSection.vue'
  import CTASection from '~/components/Industries/Healthcare/CTASection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title:
      'Healthcare & Medical Tourism Industry Solutions | Digital Health & Biotechnology | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading healthcare and medical tourism talent solutions in UAE and GCC. Expertise in digital health, biotechnology, pharmaceuticals, medical devices, and medical tourism. Comprehensive industry reports and consulting services.',
      },
      {
        name: 'keywords',
        content:
          'UAE healthcare recruitment, medical tourism talent, digital health professionals, biotechnology careers, pharmaceutical experts, medical device specialists, healthcare transformation, medical professionals GCC',
      },
      {
        property: 'og:title',
        content: 'Healthcare & Medical Tourism Industry Solutions | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your healthcare operations with our expert talent solutions, digital health insights, and comprehensive industry reports covering pharmaceuticals, biotechnology, and medical tourism.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:title',
        content: 'Healthcare & Medical Tourism Industry Solutions | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Leading healthcare talent solutions covering digital health, biotechnology, pharmaceuticals, medical devices, and medical tourism across UAE and GCC markets.',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'author',
        content: 'VMMC - Victor Meridian Management Consultancies',
      },
      {
        name: 'geo.region',
        content: 'AE-DU',
      },
      {
        name: 'geo.placename',
        content: 'Dubai, United Arab Emirates',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/industries/healthcare-medical-tourism',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Healthcare & Medical Tourism Industry Solutions',
          description:
            'Comprehensive healthcare industry talent solutions and consulting services covering digital health, biotechnology, pharmaceuticals, medical devices, and medical tourism.',
          url: 'https://www.vmmcae.com/industries/healthcare-medical-tourism',
          mainEntity: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            url: 'https://www.vmmcae.com',
            sameAs: ['https://www.linkedin.com/company/vmmc'],
            serviceType: [
              'Healthcare Recruitment',
              'Medical Tourism Consulting',
              'Digital Health Talent',
              'Biotechnology Recruitment',
              'Pharmaceutical Consulting',
            ],
            areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH'],
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.vmmcae.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Industries',
                item: 'https://www.vmmcae.com/industries',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Healthcare & Medical Tourism',
                item: 'https://www.vmmcae.com/industries/healthcare-medical-tourism',
              },
            ],
          },
        }),
      },
    ],
  })
</script>

<style scoped>
  .healthcare-page {
    position: relative;
    width: 100%;
  }
</style>
