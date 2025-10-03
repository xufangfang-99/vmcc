<template>
  <div class="homepage relative">
    <!-- 第一屏: 视频背景英雄区 -->
    <HeroSection />

    <!-- 第二屏: 服务展示 -->
    <ServicesSection />

    <!-- 第三屏: 精英服务 -->
    <ExpertiseSection />

    <!-- 第四屏: 客户评价 -->
    <TestimonialsSection />

    <!-- 第五屏: 行动号召 -->
    <CTASection />

    <!-- 第六屏: 页脚 -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import HeroSection from '~/components/Home/HeroSection.vue'
  import ServicesSection from '~/components/Home/ServicesSection.vue'
  import ExpertiseSection from '~/components/Home/ExpertiseSection.vue'
  import TestimonialsSection from '~/components/Home/TestimonialsSection.vue'
  import CTASection from '~/components/Home/CTASection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  definePageMeta({
    layout: 'homepage',
  })

  useHead({
    title:
      'VMMC Heritage | 15 Years Excellence in Talent Solutions Since 2010 | Singapore to Dubai',
    meta: [
      {
        name: 'description',
        content:
          "Discover VMMC's proud heritage: Founded 2010 in Singapore, now leading HR consultancy with 15+ years excellence across Dubai, UAE, and GCC. Our legacy includes 1.2M candidate database, 100K+ corporate clients, 170K+ successful placements. Trusted partner in executive search, Emiratisation, and comprehensive talent solutions. From humble beginnings to 7 global offices spanning Asia-Pacific and Middle East.",
      },
      {
        name: 'keywords',
        content:
          'VMMC heritage, Victor Meridian history, VMMC legacy, founded 2010, VMMC origins, recruitment company heritage, HR consultancy legacy, talent solutions tradition, VMMC values, company culture VMMC, VMMC founding story, Singapore to Dubai journey, VMMC mission vision, corporate heritage Dubai, recruitment excellence legacy, 15 years HR expertise, VMMC company history, talent solutions pioneer, recruitment industry heritage, VMMC core values, business legacy UAE, HR consultancy tradition, VMMC establishment, company heritage Middle East',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'VMMC Heritage | 15 Years Excellence Since 2010',
      },
      {
        property: 'og:description',
        content:
          "VMMC's proud heritage: 15+ years from Singapore (2010) to 7 global offices. 1.2M candidates, trusted partner in talent solutions.",
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/our-heritage',
      },
      {
        property: 'og:image',
        content: 'https://www.vmmcae.com/logo.png',
      },
      {
        property: 'og:locale',
        content: 'en_AE',
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'VMMC Heritage | 15 Years Excellence Since 2010',
      },
      {
        name: 'twitter:description',
        content:
          '15+ years from Singapore to 7 global offices. 1.2M candidates, trusted talent solutions.',
      },
      {
        name: 'twitter:image',
        content: 'https://www.vmmcae.com/logo.png',
      },
      // 地理位置
      {
        name: 'geo.region',
        content: 'AE-DU',
      },
      {
        name: 'geo.placename',
        content: 'Dubai',
      },
      // 其他SEO Meta
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'author',
        content: 'Victor Meridian Management Consultancies',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/our-heritage',
      },
    ],
    script: [
      // Organization Heritage
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Victor Meridian Management Consultancies',
          alternateName: 'VMMC',
          url: 'https://www.vmmcae.com',
          logo: 'https://www.vmmcae.com/logo.png',
          description:
            'Leading HR consultancy with 15+ years heritage. Founded in Singapore (2010), now serving Dubai, UAE, GCC, and Asia-Pacific with comprehensive talent solutions.',
          foundingDate: '2010',
          foundingLocation: {
            '@type': 'Place',
            name: 'Singapore',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Singapore',
              addressCountry: 'SG',
            },
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'ICD Brookfield Place, Level 7',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
          },
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: 200,
          },
          slogan: 'Connecting Exceptional Talent with Transformative Opportunities',
          knowsAbout: [
            'Executive Search',
            'Emiratisation Services',
            'Permanent Recruitment',
            'Temporary Recruitment',
            'Bulk Hiring',
            'HR Outsourcing',
            'Talent Advisory',
          ],
          areaServed: [
            {
              '@type': 'Country',
              name: 'United Arab Emirates',
            },
            {
              '@type': 'Country',
              name: 'Saudi Arabia',
            },
            {
              '@type': 'Country',
              name: 'Qatar',
            },
            {
              '@type': 'Country',
              name: 'Kuwait',
            },
            {
              '@type': 'Country',
              name: 'Oman',
            },
            {
              '@type': 'Country',
              name: 'Bahrain',
            },
            {
              '@type': 'Country',
              name: 'Singapore',
            },
            {
              '@type': 'Country',
              name: 'Malaysia',
            },
            {
              '@type': 'Country',
              name: 'China',
            },
          ],
          sameAs: [
            'https://www.linkedin.com/company/vmmc',
            'https://www.instagram.com/vmmc.global',
            'https://www.facebook.com/profile.php?id=61579975078423',
          ],
        }),
      },
      // AboutPage Schema
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'VMMC Heritage & Company History',
          description:
            "Learn about VMMC's 15-year journey from Singapore startup to leading HR consultancy across Dubai, UAE, GCC, and Asia-Pacific",
          url: 'https://www.vmmcae.com/our-heritage',
          mainEntity: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            foundingDate: '2010',
            description: 'Comprehensive talent solutions provider',
          },
          about: [
            {
              '@type': 'Thing',
              name: 'Company Heritage',
              description: '15+ years of excellence in talent solutions since 2010',
            },
            {
              '@type': 'Thing',
              name: 'Core Values',
              description: 'Excellence, Integrity, Innovation, Diversity & Inclusion',
            },
            {
              '@type': 'Thing',
              name: 'Mission',
              description:
                'Connecting exceptional professionals with industry-leading companies worldwide',
            },
          ],
        }),
      },
      // Breadcrumb
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
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
              name: 'Our Heritage',
              item: 'https://www.vmmcae.com/our-heritage',
            },
          ],
        }),
      },
    ],
  })
</script>
