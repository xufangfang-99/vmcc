<template>
  <div class="construction-page">
    <!-- Hero Section -->
    <ConstructionHero />

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

    <!-- Expert Consultation Modal -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- Consultation Form Modal -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ConstructionHero from '~/components/Industries/Construction/ConstructionHero.vue'
  import IndustryOverview from '~/components/Industries/Construction/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Construction/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Construction/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Construction/ServicesSection.vue'
  import CTASection from '~/components/Industries/Construction/CTASection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'

  // 弹出框状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // 简化版专家咨询弹出框控制
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整版咨询表单弹出框控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Provide modal controls to child components
  provide('openExpertModal', openExpertModal)
  provide('openConsultationModal', openConsultationModal)

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title:
      'Construction & Smart Cities Industry Solutions | Infrastructure & Green Building | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading construction and smart cities talent solutions covering infrastructure development, sustainable building practices, modular construction, and green materials. Expert recruitment for construction technology, BIM specialists, and sustainable building professionals. Comprehensive industry reports and consulting services.',
      },
      {
        name: 'keywords',
        content:
          'construction recruitment, smart cities talent, infrastructure development, sustainable building, green construction materials, BIM specialists, modular construction, construction technology, building automation',
      },
      {
        property: 'og:title',
        content: 'Construction & Smart Cities Industry Solutions | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your construction projects with our expert talent solutions covering smart cities, sustainable building, and green construction technologies across global markets.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:title',
        content: 'Construction & Smart Cities Industry Solutions | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Leading construction talent solutions covering infrastructure, smart cities, sustainable building, modular construction, and construction automation across GCC and global markets.',
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
        href: 'https://www.vmmcae.com/industries/construction-smart-cities',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Construction & Smart Cities Industry Solutions',
          description:
            'Comprehensive construction industry talent solutions and consulting services covering smart cities, infrastructure development, sustainable building practices, modular construction, green materials, and construction automation.',
          url: 'https://www.vmmcae.com/industries/construction-smart-cities',
          mainEntity: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            url: 'https://www.vmmcae.com',
            sameAs: [
              'https://www.linkedin.com/company/vmmc-uae',
              'https://www.instagram.com/vmmc.global',
              'https://www.facebook.com/profile.php?id=61579975078423',
            ],
            serviceType: [
              'Construction Recruitment',
              'Smart Cities Talent Solutions',
              'Infrastructure Development Consulting',
              'Sustainable Building Recruitment',
              'Green Construction Consulting',
            ],
            areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'SG', 'MY'],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+971-55-829-6351',
                contactType: 'Dubai Office',
                addressLocality: 'Dubai',
                addressCountry: 'AE',
                availableLanguage: ['English', 'Arabic'],
              },
              {
                '@type': 'ContactPoint',
                telephone: '+65-6386-8322',
                contactType: 'Singapore Headquarters',
                addressLocality: 'Singapore',
                addressCountry: 'SG',
                availableLanguage: ['English'],
              },
              {
                '@type': 'ContactPoint',
                telephone: '+60-322-469-000',
                contactType: 'Malaysia Office',
                addressLocality: 'Kuala Lumpur',
                addressCountry: 'MY',
                availableLanguage: ['English'],
              },
            ],
            address: [
              {
                '@type': 'PostalAddress',
                streetAddress: 'Aspin Commercial Tower, Office2818, DIFC',
                addressLocality: 'Dubai',
                addressRegion: 'Dubai',
                addressCountry: 'AE',
              },
              {
                '@type': 'PostalAddress',
                streetAddress: 'The Guoco Tower, Office1801',
                addressLocality: 'Singapore',
                addressCountry: 'SG',
              },
              {
                '@type': 'PostalAddress',
                streetAddress: 'Aspire Tower, 07-05, KL Eco City, 59200 Kuala Lumpur',
                addressLocality: 'Kuala Lumpur',
                addressCountry: 'MY',
              },
            ],
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
                name: 'Construction & Smart Cities',
                item: 'https://www.vmmcae.com/industries/construction-smart-cities',
              },
            ],
          },
          potentialAction: {
            '@type': 'ContactAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.vmmcae.com/industries/construction-smart-cities',
            },
          },
        }),
      },
    ],
  })
</script>

<style scoped>
  .construction-page {
    position: relative;
    width: 100%;
  }

  /* Page transition animation */
  @keyframes pageEnter {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .construction-page {
    animation: pageEnter 0.6s ease-out;
  }

  /* Ensure proper z-index for modals */
  :deep(.modal-overlay) {
    z-index: 9999;
  }
</style>
