<!-- pages/industries/education-edtech/index.vue -->
<template>
  <div class="education-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <EducationHero />

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
  import EducationHero from '~/components/Industries/Education/EducationHero.vue'
  import IndustryOverview from '~/components/Industries/Education/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Education/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Education/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Education/ServicesSection.vue'
  import CTASection from '~/components/Industries/Education/CTASection.vue'
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
    name: 'VMMC Education & EdTech Recruitment',
    description:
      'Expert recruitment and talent solutions for education and educational technology digital transformation',
    url: 'https://www.vmmcae.com/industries/education-edtech',
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    serviceType: [
      'Education Recruitment',
      'EdTech Talent Acquisition',
      'Online Learning Experts',
      'Corporate Training Specialists',
      'Educational Technology Innovation',
      'Vocational Training Leadership',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  }

  // SEO Configuration
  useHead({
    title: 'Education & EdTech Talent Solutions | Digital Learning Recruitment | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading education and EdTech recruitment solutions for online learning, vocational training, corporate learning ecosystems, cross-border education, and educational technology innovation. Expert talent acquisition for digital transformation in education.',
      },
      {
        name: 'keywords',
        content:
          'education recruitment, EdTech talent, online learning, vocational training, corporate learning, LMS experts, AI education, digital learning, MOOCs, lifelong learning, educational technology, VR/AR education',
      },
      {
        property: 'og:title',
        content: 'Education & EdTech Talent Solutions | Digital Learning Expertise | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your education business with expert talent in online learning, EdTech innovation, corporate training, and digital education. Comprehensive recruitment for the future of learning.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/industries/education-edtech',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Education & EdTech Talent Solutions | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Expert recruitment for education digital transformation, online learning platforms, corporate training, and EdTech innovation.',
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
        href: 'https://www.vmmcae.com/industries/education-edtech',
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
  .education-page {
    min-height: 100vh;
  }
</style>
