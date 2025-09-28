<template>
  <div class="technology-page">
    <!-- Hero Section -->
    <TechnologyHero />

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
  import TechnologyHero from '~/components/Industries/Technology/TechnologyHero.vue'
  import IndustryOverview from '~/components/Industries/Technology/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Technology/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Technology/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Technology/ServicesSection.vue'
  import CTASection from '~/components/Industries/Technology/CTASection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Technology & AI Industry Solutions | Digital Transformation & Cloud Innovation | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading technology and AI talent solutions across digital transformation, cloud infrastructure, cybersecurity, and edge computing. Expert recruitment for AI/ML, cloud architecture, DevOps, and emerging technologies. Comprehensive industry reports and consulting services.',
      },
      {
        name: 'keywords',
        content:
          'technology recruitment, AI talent solutions, cloud computing careers, cybersecurity experts, DevOps professionals, machine learning engineers, digital transformation consulting, technology industry reports',
      },
      {
        property: 'og:title',
        content: 'Technology & AI Industry Solutions | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your technology operations with our expert talent solutions, AI insights, and comprehensive industry reports covering cloud infrastructure, cybersecurity, and emerging technologies.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:title',
        content: 'Technology & AI Industry Solutions | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Leading technology talent solutions covering AI/ML, cloud infrastructure, cybersecurity, DevOps, and digital transformation across global markets.',
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
        href: 'https://www.vmmcae.com/industries/technology-ai',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Technology & AI Industry Solutions',
          description:
            'Comprehensive technology industry talent solutions and consulting services covering AI/ML, cloud infrastructure, cybersecurity, digital transformation, and emerging technologies.',
          url: 'https://www.vmmcae.com/industries/technology-ai',
          mainEntity: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            url: 'https://www.vmmcae.com',
            sameAs: ['https://www.linkedin.com/company/vmmc'],
            serviceType: [
              'Technology Recruitment',
              'AI Talent Solutions',
              'Cloud Computing Consulting',
              'Cybersecurity Recruitment',
              'Digital Transformation Consulting',
            ],
            areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'SG', 'MY'],
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
                name: 'Technology & AI',
                item: 'https://www.vmmcae.com/industries/technology-ai',
              },
            ],
          },
        }),
      },
    ],
  })
</script>

<style scoped>
  .technology-page {
    position: relative;
    width: 100%;
  }
</style>
