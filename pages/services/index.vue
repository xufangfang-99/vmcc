<template>
  <div class="services-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- Hero Section -->
    <ServicesHero />

    <!-- Services Overview -->
    <ServicesOverview />

    <!-- Core Services Grid -->
    <CoreServicesGrid />

    <!-- Industry Expertise -->
    <IndustryExpertise />

    <!-- Success Metrics -->
    <SuccessMetrics />

    <!-- Why Choose VMMC -->
    <WhyChooseVMMC />

    <!-- CTA Section -->
    <ServicesCTA />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import ServicesHero from '~/components/Services/ServicesHero.vue'
  import ServicesOverview from '~/components/Services/ServicesOverview.vue'
  import CoreServicesGrid from '~/components/Services/CoreServicesGrid.vue'
  import IndustryExpertise from '~/components/Services/IndustryExpertise.vue'
  import SuccessMetrics from '~/components/Services/SuccessMetrics.vue'
  import WhyChooseVMMC from '~/components/Services/WhyChooseVMMC.vue'
  import ServicesCTA from '~/components/Services/ServicesCTA.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 设置页面元信息
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Our Services - Global Talent Solutions | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive talent solutions including recruitment services, executive search, HR consulting, and organizational development across multiple industries.',
      },
      {
        name: 'keywords',
        content:
          'talent solutions, recruitment services, executive search, HR consulting, organizational development, VMMC services',
      },
    ],
  })
</script>

<style>
  /* 页面切换动画 */
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

  .animate-page-enter {
    animation: pageEnter 0.6s ease-out;
  }
</style>
