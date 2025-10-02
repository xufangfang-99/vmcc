<!-- pages/industries/logistics/index.vue -->
<template>
  <div class="logistics-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <LogisticsHero />

    <!-- Industry Overview -->
    <IndustryOverview />

    <!-- Reports Section -->
    <ReportsSection />

    <!-- Technology Trends -->
    <TechnologyTrends />

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
  import LogisticsHero from '~/components/Industries/Logistics/LogisticsHero.vue'
  import IndustryOverview from '~/components/Industries/Logistics/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Logistics/ReportsSection.vue'
  import TechnologyTrends from '~/components/Industries/Logistics/TechnologyTrends.vue'
  import ServicesSection from '~/components/Industries/Logistics/ServicesSection.vue'
  import CTASection from '~/components/Industries/Logistics/CTASection.vue'
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
    name: 'VMMC Logistics & Supply Chain Talent Solutions',
    description:
      'Expert recruitment and talent solutions for logistics, supply chain management, warehousing automation, green logistics, and digital transformation expertise',
    url: 'https://www.vmmcae.com/industries/logistics',
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    serviceType: [
      'Logistics Recruitment',
      'Supply Chain Management',
      'Warehouse Automation Talent',
      'Green Logistics Specialists',
      'Digital Supply Chain Transformation',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  }

  // SEO Configuration
  useHead({
    title: 'Logistics & Supply Chain Talent Solutions | Automation & Sustainability | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading logistics recruitment solutions for supply chain optimization, digital platforms, warehouse automation, green logistics, and risk management. Expert talent acquisition for modern logistics operations.',
      },
      {
        name: 'keywords',
        content:
          'logistics recruitment, supply chain talent, warehouse automation experts, green logistics specialists, IoT logistics, AI supply chain, blockchain logistics, digital twins, risk management, sustainable logistics, e-commerce fulfillment',
      },
      {
        property: 'og:title',
        content: 'Logistics & Supply Chain Talent Solutions | Digital Transformation | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your logistics operations with expert talent in supply chain optimization, warehouse automation, green logistics, and digital innovation. Comprehensive recruitment for modern supply chains.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/industries/logistics',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Logistics & Supply Chain Talent Solutions | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Expert recruitment for logistics digital transformation, supply chain optimization, warehouse automation, green logistics, and risk management solutions.',
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
        href: 'https://www.vmmcae.com/industries/logistics',
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
  .logistics-page {
    min-height: 100vh;
  }
</style>
