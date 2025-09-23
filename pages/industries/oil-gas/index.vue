<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Oil & Gas Hero Section -->
    <OilGasHero />

    <!-- Market Trends Section -->
    <section id="market-trends">
      <MarketTrends />
    </section>

    <!-- Energy Transition Section -->
    <section id="energy-transition">
      <EnergyTransition />
    </section>

    <!-- M&A Consolidation Section -->
    <section id="ma-consolidation">
      <MAConsolidation />
    </section>

    <!-- UAE Development Section -->
    <section id="uae-development">
      <UAEDevelopment />
    </section>

    <!-- Digital Transformation Section -->
    <section id="digital-transformation">
      <DigitalTransformation />
    </section>

    <!-- CTA Section -->
    <CTASection />
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import OilGasHero from '~/components/Industries/OilGas/OilGasHero.vue'
  import MarketTrends from '~/components/Industries/OilGas/MarketTrends.vue'
  import EnergyTransition from '~/components/Industries/OilGas/EnergyTransition.vue'
  import MAConsolidation from '~/components/Industries/OilGas/MAConsolidation.vue'
  import UAEDevelopment from '~/components/Industries/OilGas/UAEDevelopment.vue'
  import DigitalTransformation from '~/components/Industries/OilGas/DigitalTransformation.vue'
  import CTASection from '~/components/Industries/OilGas/CTASection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  // Enhanced SEO settings for Oil & Gas industry page
  useHead({
    title: 'Oil & Gas Industry Transformation - Digital Innovation & Energy Transition | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive oil & gas industry insights covering market trends, energy transition, digital transformation, and UAE development. Expert analysis of M&A activities, technological innovation, and future outlook for the energy sector.',
      },
      {
        name: 'keywords',
        content:
          'oil gas industry, energy transition, digital transformation, ADNOC, UAE oil reserves, energy sector M&A, petroleum industry trends, upstream downstream operations, carbon neutrality, energy consulting',
      },
      {
        property: 'og:title',
        content:
          'Oil & Gas Industry Transformation - Digital Innovation & Energy Transition | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Navigate the evolving energy landscape with comprehensive insights on market trends, digital transformation, and sustainable practices in the oil & gas industry.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: 'https://www.vmmcae.com/images/oil-gas-industry-og.jpg',
      },
      {
        name: 'twitter:title',
        content: 'Oil & Gas Industry Transformation | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Expert insights on oil & gas market trends, energy transition, and digital transformation across the industry value chain.',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'author',
        content: 'VMMC - Victor Meridian Management Consultancies',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/industries/oil-gas',
      },
    ],
  })

  // Define page meta
  definePageMeta({
    layout: 'default',
  })
</script>

<style scoped>
  /* Smooth scroll behavior for anchor links */
  html {
    scroll-behavior: smooth;
  }

  /* Section spacing */
  section {
    position: relative;
  }

  /* Scroll margin for anchor navigation */
  section[id] {
    scroll-margin-top: 80px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    section[id] {
      scroll-margin-top: 60px;
    }
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
</style>
