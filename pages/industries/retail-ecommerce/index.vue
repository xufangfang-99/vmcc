<!-- pages/industries/retail-ecommerce/index.vue -->
<template>
  <div class="retail-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <RetailHero />

    <!-- Industry Overview -->
    <IndustryOverview />

    <!-- Reports Section -->
    <ReportsSection />

    <!-- Market Insights -->
    <MarketInsights />

    <!-- Services Section -->
    <ServicesSection />

    <!-- CTA Section -->
    <CTASection />

    <!-- Footer -->
    <FooterSection />

    <!-- Modals -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, provide } from 'vue'
  import RetailHero from '~/components/Industries/Retail/RetailHero.vue'
  import IndustryOverview from '~/components/Industries/Retail/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Retail/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Retail/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Retail/ServicesSection.vue'
  import CTASection from '~/components/Industries/Retail/CTASection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'

  // Modal state
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Provide modal controls to child components
  provide('openExpertModal', openExpertModal)
  provide('openConsultationModal', openConsultationModal)

  // Page meta
  definePageMeta({
    layout: 'default',
  })

  // SEO Configuration
  useHead({
    title: 'Retail & E-commerce Talent Solutions | Digital Commerce Recruitment | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading retail and e-commerce recruitment solutions for omnichannel integration, social commerce, personalized shopping, cross-border expansion, and sustainable retail. Expert talent acquisition for digital transformation in retail.',
      },
      {
        name: 'keywords',
        content:
          'retail recruitment, e-commerce talent, omnichannel retail, social commerce, digital marketing specialists, supply chain optimization, cross-border e-commerce, sustainable retail, consumer insights, retail technology',
      },
      {
        property: 'og:title',
        content: 'Retail & E-commerce Talent Solutions | Digital Commerce Expertise | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your retail business with expert talent in e-commerce, social commerce, personalization, and sustainable retail practices. Comprehensive recruitment for the digital commerce era.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/industries/retail-ecommerce',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Retail & E-commerce Talent Solutions | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Expert recruitment for retail digital transformation, social commerce, omnichannel integration, and sustainable retail practices.',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'author',
        content: 'VMMC - Vision Management & Marketing Consultancy',
      },
      {
        name: 'geo.region',
        content: 'AE-DU',
      },
      {
        name: 'geo.placename',
        content: 'Dubai, United Arab Emirates',
      },
      {
        name: 'language',
        content: 'en',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/industries/retail-ecommerce',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'VMMC Retail & E-commerce Recruitment',
          description:
            'Expert recruitment and talent solutions for retail and e-commerce digital transformation',
          url: 'https://www.vmmcae.com/industries/retail-ecommerce',
          areaServed: {
            '@type': 'Country',
            name: 'United Arab Emirates',
          },
          serviceType: [
            'Retail Recruitment',
            'E-commerce Talent Acquisition',
            'Digital Commerce Consulting',
            'Omnichannel Strategy',
            'Social Commerce Experts',
            'Supply Chain Optimization',
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'AE',
          },
        }),
      },
    ],
  })
</script>

<style scoped>
  .retail-page {
    min-height: 100vh;
  }
</style>
