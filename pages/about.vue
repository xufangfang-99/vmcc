<template>
  <div class="about-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- 保持现有的 section 结构不变 -->
    <section
      id="company-intro"
      class="scroll-mt-80px"
    >
      <AboutHero />
    </section>
    <section
      id="vision-mission"
      class="scroll-mt-80px"
    >
      <AboutVision />
    </section>
    <section
      id="global-presence"
      class="scroll-mt-80px"
    >
      <GlobalPresence />
    </section>
    <section
      id="core-expertise"
      class="scroll-mt-80px"
    >
      <CoreExpertise />
    </section>
    <section
      id="commitment-excellence"
      class="scroll-mt-80px"
    >
      <CommitmentExcellence />
    </section>
    <section
      id="leadership-team"
      class="scroll-mt-80px"
    >
      <LeadershipTeam />
    </section>
    <section
      id="core-values"
      class="scroll-mt-80px"
    >
      <CoreValues />
    </section>
    <section
      id="certifications"
      class="scroll-mt-80px"
    >
      <CertificationsStandards />
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import { useScrollTo } from '~/composables/useScrollTo'

  // 导入所有组件
  import AboutHero from '~/components/About/AboutHero.vue'
  import AboutVision from '~/components/About/AboutVision.vue'
  import GlobalPresence from '~/components/About/GlobalPresence.vue'
  import CoreExpertise from '~/components/About/CoreExpertise.vue'
  import CommitmentExcellence from '~/components/About/CommitmentExcellence.vue'
  import LeadershipTeam from '~/components/About/LeadershipTeam.vue'
  import CoreValues from '~/components/About/CoreValues.vue'
  import CertificationsStandards from '~/components/About/CertificationsStandards.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 使用通用的滚动处理
  const { handleRouteHash } = useScrollTo()

  // 自动处理路由中的 hash
  handleRouteHash()

  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'About VMMC Dubai | Leading Talent Solutions Provider in UAE & GCC',
    meta: [
      {
        name: 'description',
        content:
          'Victor Meridian Management Consultancies (VMMC) - Leading comprehensive talent solutions provider in Dubai since 2010. Specializing in executive search, flexible staffing, HR outsourcing, and Emiratisation services across UAE and GCC region with offices in Dubai, Singapore, and Malaysia.',
      },
      {
        name: 'keywords',
        content:
          'About VMMC Dubai, Victor Meridian Management Consultancies, VMMC history, talent solutions provider UAE, recruitment company Dubai, executive search firm GCC, HR consultancy Dubai, global talent network, Dubai recruitment agency, UAE staffing solutions, GCC headhunting, Emiratisation experts, international recruitment Dubai, talent acquisition Middle East, HR outsourcing UAE',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'About VMMC Dubai | Leading Talent Solutions Provider in UAE & GCC',
      },
      {
        property: 'og:description',
        content:
          'Leading comprehensive talent solutions provider in Dubai since 2010. Executive search, flexible staffing, and Emiratisation services across UAE and GCC region.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/about',
      },
      {
        property: 'og:image',
        content: 'https://www.vmmcae.com/logo.png',
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'About VMMC Dubai | Leading Talent Solutions Provider',
      },
      {
        name: 'twitter:description',
        content:
          'Leading talent solutions provider in Dubai and GCC since 2010. Executive search, flexible staffing, and Emiratisation expertise.',
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
        href: 'https://www.vmmcae.com/about',
      },
    ],
    script: [
      // 公司信息结构化数据
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          mainEntity: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            alternateName: 'VMMC Dubai',
            url: 'https://www.vmmcae.com',
            logo: 'https://www.vmmcae.com/logo.png',
            foundingDate: '2010',
            description:
              'Leading comprehensive talent solutions provider in Dubai, UAE. Specializing in executive search, flexible staffing, HR outsourcing, and Emiratisation services across GCC region.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ICD Brookfield Place, Level 7',
              addressLocality: 'Dubai',
              addressRegion: 'Dubai',
              addressCountry: 'AE',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+971-4-376-4600',
              contactType: 'Customer Service',
              areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH'],
              availableLanguage: ['English', 'Arabic'],
            },
            sameAs: [
              'https://www.linkedin.com/company/vmmc',
              'https://www.instagram.com/vmmc.global',
              'https://www.facebook.com/profile.php?id=61579975078423',
            ],
            numberOfEmployees: '50-100',
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
          },
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
              name: 'About Us',
              item: 'https://www.vmmcae.com/about',
            },
          ],
        }),
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
