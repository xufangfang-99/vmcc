<template>
  <div class="insurance-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <InsuranceHero />

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
  import InsuranceHero from '~/components/Industries/Insurance/InsuranceHero.vue'
  import IndustryOverview from '~/components/Industries/Insurance/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Insurance/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Insurance/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Insurance/ServicesSection.vue'
  import CTASection from '~/components/Industries/Insurance/CTASection.vue'
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

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'VMMC Insurance Talent Solutions',
    description:
      'Expert recruitment and talent solutions for insurance, Insurtech, cyber insurance, climate risk, and digital transformation expertise',
    url: 'https://www.vmmcae.com/industries/insurance',
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    serviceType: [
      'Insurance Recruitment',
      'Insurtech Talent Acquisition',
      'Cyber Insurance Specialists',
      'Risk Management Experts',
      'Digital Insurance Transformation',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  }

  // SEO Configuration
  useHead({
    title: 'Insurance & Insurtech Talent Solutions | Risk Management Recruitment | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading insurance recruitment solutions for Insurtech innovation, cyber insurance, climate risk management, personalized insurance, and blockchain-powered transformation. Expert talent acquisition for digital insurance.',
      },
      {
        name: 'keywords',
        content:
          'insurance recruitment, Insurtech talent, cyber insurance experts, risk management specialists, AI insurance, blockchain insurance, parametric insurance, climate risk, digital transformation, IoT insurance, smart contracts',
      },
      {
        property: 'og:title',
        content: 'Insurance & Insurtech Talent Solutions | Risk Management | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your insurance business with expert talent in Insurtech, cyber risk, climate insurance, and digital innovation. Comprehensive recruitment for the modern insurance landscape.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/industries/insurance',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Insurance & Insurtech Talent Solutions | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Expert recruitment for insurance digital transformation, Insurtech innovation, cyber insurance, climate risk, and blockchain solutions.',
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
        href: 'https://www.vmmcae.com/industries/insurance',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData),
      },
    ],
  })
</script>

<style scoped>
  .insurance-page {
    min-height: 100vh;
  }
</style>
