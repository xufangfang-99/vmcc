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
    title: 'VMMC Dubai | Executive Search, Flexible Staffing & Emiratisation UAE',
    meta: [
      {
        name: 'description',
        content:
          'Victor Meridian Management Consultancies (VMMC) - Leading comprehensive talent solutions provider in Dubai, UAE. Offering executive search, flexible staffing solutions, HR outsourcing, Emiratisation services, and global recruitment across Middle East and GCC region.',
      },
      {
        name: 'keywords',
        content:
          'VMMC Dubai, Victor Meridian Management Consultancies, comprehensive talent solutions Dubai, talent solutions UAE, flexible staffing solutions Dubai, global talent network, executive search Dubai, professional recruitment UAE, HR outsourcing Dubai, Emiratisation services, GCC recruitment solutions, recruitment agency Dubai, headhunting Dubai, staffing agency UAE, talent acquisition Middle East, Dubai DIFC recruitment, workforce solutions UAE, permanent recruitment Dubai, temporary staffing Dubai, bulk hiring UAE, HR consulting Dubai, international recruitment Dubai',
      },
      {
        property: 'og:title',
        content: 'VMMC Dubai | Comprehensive Talent Solutions | Global Recruitment Network',
      },
      {
        property: 'og:description',
        content:
          'Leading comprehensive talent solutions provider in Dubai and UAE. Executive search, flexible staffing, HR outsourcing, and Emiratisation services across Middle East and GCC region.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com',
      },
      {
        property: 'og:image',
        content: 'https://www.vmmcae.com/logo.png',
      },
      {
        property: 'og:locale',
        content: 'en_AE',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'VMMC Dubai | Comprehensive Talent Solutions',
      },
      {
        name: 'twitter:description',
        content:
          'Leading talent solutions provider in Dubai, UAE. Executive search, flexible staffing, and HR outsourcing across GCC.',
      },
      {
        name: 'twitter:image',
        content: 'https://www.vmmcae.com/logo.png',
      },
      {
        name: 'geo.region',
        content: 'AE-DU',
      },
      {
        name: 'geo.placename',
        content: 'Dubai',
      },
      {
        name: 'geo.position',
        content: '25.2048;55.2708',
      },
      {
        name: 'ICBM',
        content: '25.2048, 55.2708',
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'author',
        content: 'Victor Meridian Management Consultancies',
      },
      {
        name: 'language',
        content: 'English',
      },
      {
        name: 'revisit-after',
        content: '7 days',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://www.vmmcae.com',
      },
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: 'https://www.vmmcae.com',
      },
    ],
    script: [
      // 增强的结构化数据 - ProfessionalService
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Victor Meridian Management Consultancies',
          alternateName: ['VMMC Dubai', 'VMMC', 'Victor Meridian'],
          url: 'https://www.vmmcae.com',
          logo: 'https://www.vmmcae.com/logo.png',
          image: 'https://www.vmmcae.com/logo.png',
          description:
            'Leading comprehensive talent solutions provider in Dubai, UAE. Offering executive search, flexible staffing solutions, HR outsourcing, Emiratisation services, and global recruitment across Middle East and GCC region.',
          priceRange: '$$',
          telephone: '+971-4-376-4600',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'ICD Brookfield Place, Level 7',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            postalCode: '',
            addressCountry: 'AE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '25.2048',
            longitude: '55.2708',
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          sameAs: [
            'https://www.linkedin.com/company/vmmc',
            'https://www.instagram.com/vmmc.global',
            'https://www.facebook.com/profile.php?id=61579975078423',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Comprehensive Talent Solutions',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Emiratisation Services Dubai',
                  description:
                    'UAE nationalization programs and local talent development with proven expertise',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Executive Search Dubai',
                  description:
                    'Professional executive recruitment and headhunting services across GCC region',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Flexible Staffing Solutions',
                  description:
                    'Temporary and permanent recruitment with rapid deployment capabilities',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'HR Outsourcing Dubai',
                  description:
                    'Comprehensive HR outsourcing and talent acquisition services for UAE businesses',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Bulk Hiring Solutions',
                  description: 'Large-scale recruitment with quality assurance across industries',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'HR Advisory Services',
                  description:
                    'Strategic HR consulting and organizational development for GCC companies',
                },
              },
            ],
          },
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
          ],
          knowsAbout: [
            'Executive Search',
            'Talent Acquisition',
            'HR Consulting',
            'Recruitment',
            'Staffing Solutions',
            'Emiratisation',
            'Workforce Planning',
            'Global Talent Network',
            'Flexible Staffing',
            'HR Outsourcing',
            'Bulk Hiring',
            'GCC Recruitment',
          ],
        }),
      },
      // Breadcrumb 结构化数据
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
          ],
        }),
      },
    ],
  })
</script>
