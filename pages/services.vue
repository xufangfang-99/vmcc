<template>
  <div class="staffing-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- 保持现有的 section 结构不变 -->
    <section
      id="recruitment-intro"
      class="scroll-mt-80px"
    >
      <StaffingHero />
    </section>
    <section
      id="emiratisation"
      class="scroll-mt-80px"
    >
      <Emiratisation />
    </section>
    <section
      id="permanent-recruitment"
      class="scroll-mt-80px"
    >
      <PermanentRecruitment />
    </section>
    <section
      id="temporary-recruitment"
      class="scroll-mt-80px"
    >
      <TemporaryRecruitment />
    </section>
    <section
      id="bulk-hiring"
      class="scroll-mt-80px"
    >
      <BulkHiring />
    </section>
    <section
      id="outsourcing-services"
      class="scroll-mt-80px"
    >
      <OutsourcingServices />
    </section>
    <section
      id="advisory-services"
      class="scroll-mt-80px"
    >
      <AdvisoryServices />
    </section>
    <section
      id="staffing-cta"
      class="scroll-mt-80px"
    >
      <StaffingCTA />
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import { useScrollTo } from '~/composables/useScrollTo'

  // 导入所有组件
  import StaffingHero from '~/components/Staffing/StaffingHero.vue'
  import Emiratisation from '~/components/Staffing/Emiratisation.vue'
  import PermanentRecruitment from '~/components/Staffing/PermanentRecruitment.vue'
  import TemporaryRecruitment from '~/components/Staffing/TemporaryRecruitment.vue'
  import BulkHiring from '~/components/Staffing/BulkHiring.vue'
  import OutsourcingServices from '~/components/Staffing/OutsourcingServices.vue'
  import AdvisoryServices from '~/components/Staffing/AdvisoryServices.vue'
  import StaffingCTA from '~/components/Staffing/StaffingCTA.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'VMMC Dubai Services | Emiratisation, Executive Search, HR Outsourcing UAE & GCC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive talent solutions by VMMC Dubai: Emiratisation services, permanent & temporary recruitment, executive search, bulk hiring, HR outsourcing, and advisory services across UAE and GCC. 15+ years expertise serving 500+ enterprises with 98% success rate. Contact us for customized workforce solutions in Dubai, Abu Dhabi, Saudi Arabia, Qatar, and Middle East.',
      },
      {
        name: 'keywords',
        content:
          'VMMC services Dubai, Emiratisation services UAE, executive search Dubai, permanent recruitment Dubai, temporary recruitment UAE, bulk hiring Dubai, HR outsourcing Dubai, advisory services UAE, talent solutions Dubai, recruitment services Dubai, staffing solutions UAE, headhunting Dubai, workforce solutions GCC, talent acquisition Dubai, employment services UAE, manpower recruitment Dubai, contract staffing Dubai, permanent staffing UAE, recruitment agency Dubai services, HR consultancy Dubai, talent management Dubai, Emiratisation compliance UAE, UAE nationals recruitment, flexible staffing Dubai, recruitment process outsourcing Dubai, RPO services UAE, talent advisory Dubai, workforce planning UAE, recruitment solutions GCC',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'VMMC Dubai Services | Emiratisation, Executive Search, HR Outsourcing',
      },
      {
        property: 'og:description',
        content:
          'Comprehensive talent solutions: Emiratisation, recruitment, executive search, HR outsourcing across UAE and GCC. 15+ years, 500+ clients, 98% success rate.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/services',
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
        content: 'VMMC Dubai Services | Emiratisation & HR Solutions UAE',
      },
      {
        name: 'twitter:description',
        content:
          'Comprehensive talent solutions across UAE and GCC. Emiratisation, recruitment, executive search, HR outsourcing.',
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
        href: 'https://www.vmmcae.com/services',
      },
    ],
    script: [
      // Service Catalog Schema
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Victor Meridian Management Consultancies',
          alternateName: 'VMMC Dubai',
          url: 'https://www.vmmcae.com/services',
          logo: 'https://www.vmmcae.com/logo.png',
          description:
            'Comprehensive talent solutions provider offering Emiratisation, recruitment, executive search, and HR outsourcing services across UAE and GCC region.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'ICD Brookfield Place, Level 7',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
          },
          telephone: '+971-4-376-4600',
          email: 'info@vmmcglobal.com',
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
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'VMMC Talent Solutions Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Emiratisation Services',
                  description:
                    'UAE nationals recruitment and Emiratisation compliance solutions for government and private sector organizations across UAE.',
                  url: 'https://www.vmmcae.com/services#emiratisation',
                  provider: {
                    '@type': 'Organization',
                    name: 'VMMC Dubai',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Permanent Recruitment',
                  description:
                    'Executive search and permanent placement services for mid to senior-level positions across all industries in UAE and GCC.',
                  url: 'https://www.vmmcae.com/services#permanent-recruitment',
                  provider: {
                    '@type': 'Organization',
                    name: 'VMMC Dubai',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Temporary Recruitment',
                  description:
                    'Flexible staffing solutions including contract, temporary, and interim placements across Dubai and UAE.',
                  url: 'https://www.vmmcae.com/services#temporary-recruitment',
                  provider: {
                    '@type': 'Organization',
                    name: 'VMMC Dubai',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Bulk Hiring Solutions',
                  description:
                    'Large-scale recruitment solutions for enterprises requiring multiple hires across various roles and levels in UAE.',
                  url: 'https://www.vmmcae.com/services#bulk-hiring',
                  provider: {
                    '@type': 'Organization',
                    name: 'VMMC Dubai',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'HR Outsourcing Services',
                  description:
                    'Comprehensive HR outsourcing including payroll, benefits administration, compliance, and workforce management for UAE businesses.',
                  url: 'https://www.vmmcae.com/services#outsourcing-services',
                  provider: {
                    '@type': 'Organization',
                    name: 'VMMC Dubai',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'HR Advisory Services',
                  description:
                    'Strategic talent consulting, workforce planning, and organizational development services for UAE and GCC enterprises.',
                  url: 'https://www.vmmcae.com/services#advisory-services',
                  provider: {
                    '@type': 'Organization',
                    name: 'VMMC Dubai',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Executive Search',
                  description:
                    'C-suite and senior executive recruitment services across UAE, Saudi Arabia, and GCC region.',
                  provider: {
                    '@type': 'Organization',
                    name: 'VMMC Dubai',
                  },
                },
              },
            ],
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '500',
            bestRating: '5',
            worstRating: '1',
          },
          sameAs: [
            'https://www.linkedin.com/company/vmmc',
            'https://www.instagram.com/vmmc.global',
            'https://www.facebook.com/profile.php?id=61579975078423',
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
              name: 'Services',
              item: 'https://www.vmmcae.com/services',
            },
          ],
        }),
      },
    ],
  })

  // 使用通用的滚动处理
  const { handleRouteHash } = useScrollTo()

  // 自动处理路由中的 hash
  handleRouteHash()
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
