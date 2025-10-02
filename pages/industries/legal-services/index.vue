<!-- pages/industries/legal-services/index.vue -->
<template>
  <div class="legal-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <LegalHero />

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
  import LegalHero from '~/components/Industries/Legal/LegalHero.vue'
  import IndustryOverview from '~/components/Industries/Legal/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Legal/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Legal/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Legal/ServicesSection.vue'
  import CTASection from '~/components/Industries/Legal/CTASection.vue'
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
    name: 'VMMC Legal Services Recruitment',
    description:
      'Expert recruitment and talent solutions for legal services, compliance, data privacy, RegTech, and ESG legal expertise',
    url: 'https://www.vmmcae.com/industries/legal-services',
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    serviceType: [
      'Legal Recruitment',
      'Compliance Talent Acquisition',
      'Data Privacy Specialists',
      'RegTech Experts',
      'ESG Legal Consultants',
      'Cross-border Compliance',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  }

  // SEO Configuration
  useHead({
    title: 'Legal Services Talent Solutions | Compliance & RegTech Recruitment | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading legal services recruitment solutions for global compliance, data privacy, RegTech integration, ESG compliance, and cross-border regulatory expertise. Expert talent acquisition for digital transformation in legal.',
      },
      {
        name: 'keywords',
        content:
          'legal recruitment, compliance talent, data privacy lawyers, RegTech experts, ESG legal consultants, GDPR compliance, cross-border legal, digital law, AML specialists, legal technology, regulatory compliance',
      },
      {
        property: 'og:title',
        content: 'Legal Services Talent Solutions | Compliance Expertise | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your legal practice with expert talent in compliance, data privacy, RegTech, and ESG. Comprehensive recruitment for the digital legal landscape.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/industries/legal-services',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Legal Services Talent Solutions | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Expert recruitment for legal digital transformation, compliance, data privacy, RegTech, and ESG legal services.',
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
        href: 'https://www.vmmcae.com/industries/legal-services',
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
  .legal-page {
    min-height: 100vh;
  }
</style>
