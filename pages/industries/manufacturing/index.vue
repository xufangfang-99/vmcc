<template>
  <div class="manufacturing-page">
    <!-- Hero Section -->
    <ManufacturingHero />

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
  import ManufacturingHero from '~/components/Industries/Manufacturing/ManufacturingHero.vue'
  import IndustryOverview from '~/components/Industries/Manufacturing/IndustryOverview.vue'
  import ReportsSection from '~/components/Industries/Manufacturing/ReportsSection.vue'
  import MarketInsights from '~/components/Industries/Manufacturing/MarketInsights.vue'
  import ServicesSection from '~/components/Industries/Manufacturing/ServicesSection.vue'
  import CTASection from '~/components/Industries/Manufacturing/CTASection.vue'
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
    title: 'Manufacturing Industry Solutions | Industry 4.0 & Smart Factory Transformation | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading manufacturing industry talent solutions covering Industry 4.0, smart factories, automation integration, predictive maintenance, and supply chain digitalization. Expert recruitment for manufacturing technology, AI specialists, and digital transformation professionals. Comprehensive industry reports and consulting services.',
      },
      {
        name: 'keywords',
        content:
          'manufacturing recruitment, Industry 4.0 talent, smart factory automation, IoT manufacturing, AI manufacturing specialists, predictive maintenance, supply chain digitalization, collaborative robots, manufacturing transformation',
      },
      {
        property: 'og:title',
        content: 'Manufacturing Industry Solutions | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your manufacturing operations with our expert talent solutions covering Industry 4.0, smart factories, automation integration, and digital supply chain transformation across global markets.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:title',
        content: 'Manufacturing Industry Solutions | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Leading manufacturing talent solutions covering Industry 4.0, smart factories, automation, predictive maintenance, and supply chain digitalization across GCC and global markets.',
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
        href: 'https://www.vmmcae.com/industries/manufacturing',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Manufacturing Industry Solutions',
          description:
            'Comprehensive manufacturing industry talent solutions and consulting services covering Industry 4.0, smart factories, automation integration, predictive maintenance, supply chain digitalization, and human-machine collaboration.',
          url: 'https://www.vmmcae.com/industries/manufacturing',
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
              'Manufacturing Recruitment',
              'Industry 4.0 Talent Solutions',
              'Smart Factory Consulting',
              'Automation Integration Recruitment',
              'Supply Chain Digitalization Consulting',
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
                name: 'Manufacturing',
                item: 'https://www.vmmcae.com/industries/manufacturing',
              },
            ],
          },
          potentialAction: {
            '@type': 'ContactAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.vmmcae.com/industries/manufacturing',
            },
          },
        }),
      },
    ],
  })
</script>

<style scoped>
  .manufacturing-page {
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

  .manufacturing-page {
    animation: pageEnter 0.6s ease-out;
  }

  /* Ensure proper z-index for modals */
  :deep(.modal-overlay) {
    z-index: 9999;
  }
</style>
