<template>
  <div class="hospitality-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <HospitalityHero />

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
  import HospitalityHero from '~/components/Industries/Hospitality/HospitalityHero.vue'
  import IndustryOverview from '~/components/Industries/Hospitality/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Hospitality/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Hospitality/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Hospitality/ServicesSection.vue'
  import CTASection from '~/components/Industries/Hospitality/CTASection.vue'
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

  // SEO
  useHead({
    title: 'Hospitality & Tourism Talent Solutions | Expert Recruitment Services | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading hospitality recruitment solutions for hotels, resorts, and tourism enterprises. Expert talent acquisition for guest experience, F&B, operations, and digital innovation roles.',
      },
      {
        name: 'keywords',
        content:
          'hospitality recruitment, hotel talent acquisition, tourism jobs, guest experience professionals, executive chef recruitment, hotel general manager, F&B talent, hospitality digital transformation',
      },
    ],
  })
</script>

<style scoped>
  .hospitality-page {
    min-height: 100vh;
  }
</style>
