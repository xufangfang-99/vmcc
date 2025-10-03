<template>
  <div class="careers-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- 保持现有的 section 结构不变 -->
    <section
      id="career-home"
      class="scroll-mt-80px"
    >
      <CareersHero />
    </section>
    <section
      id="why-vmmc"
      class="scroll-mt-80px"
    >
      <WhyVMMC />
    </section>
    <section
      id="our-global-team"
      class="scroll-mt-80px"
    >
      <OurGlobalTeam />
    </section>
    <section
      id="open-positions"
      class="scroll-mt-80px"
    >
      <OpenPositions />
    </section>
    <section
      id="application-process"
      class="scroll-mt-80px"
    >
      <ApplicationProcess />
    </section>
    <section
      id="professional-development"
      class="scroll-mt-80px"
    >
      <ProfessionalDevelopment />
    </section>
    <section
      id="employee-benefits"
      class="scroll-mt-80px"
    >
      <EmployeeBenefits />
    </section>
    <section
      id="life-at-vmmc"
      class="scroll-mt-80px"
    >
      <LifeAtVMMC />
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import { useScrollTo } from '~/composables/useScrollTo'

  // 导入所有组件
  import CareersHero from '~/components/Careers/CareersHero.vue'
  import WhyVMMC from '~/components/Careers/WhyVMMC.vue'
  import OurGlobalTeam from '~/components/Careers/OurGlobalTeam.vue'
  import OpenPositions from '~/components/Careers/OpenPositions.vue'
  import ApplicationProcess from '~/components/Careers/ApplicationProcess.vue'
  import ProfessionalDevelopment from '~/components/Careers/ProfessionalDevelopment.vue'
  import EmployeeBenefits from '~/components/Careers/EmployeeBenefits.vue'
  import LifeAtVMMC from '~/components/Careers/LifeAtVMMC.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Careers at VMMC Dubai | HR Jobs UAE | Join Leading Talent Solutions Team in GCC',
    meta: [
      {
        name: 'description',
        content:
          'Join VMMC Dubai - Leading HR consultancy with 15+ years of excellence. Exciting career opportunities in recruitment, executive search, and talent solutions across Dubai, UAE and GCC. 200+ global professionals, 7 offices in Singapore, Dubai, Malaysia. Competitive benefits, professional development, and global mobility programs.',
      },
      {
        name: 'keywords',
        content:
          'VMMC careers Dubai, HR jobs Dubai, Victor Meridian careers UAE, recruitment jobs Dubai, talent acquisition jobs Dubai, executive search careers Dubai, HR consultant jobs UAE, recruitment consultant jobs Dubai, headhunter jobs Dubai, HR careers GCC, international HR jobs Dubai, talent solutions careers UAE, Dubai recruitment careers, staffing consultant jobs Dubai, HR recruitment jobs UAE, talent management careers Dubai, recruitment specialist jobs UAE, employment consultant jobs Dubai, workforce solutions careers GCC, HR professional jobs Dubai, talent advisor jobs UAE, recruitment agency jobs Dubai, HR outsourcing careers Dubai, Emiratisation consultant jobs, global recruitment careers',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'Careers at VMMC Dubai | Join Leading HR Consultancy in UAE & GCC',
      },
      {
        property: 'og:description',
        content:
          'Join 200+ professionals at VMMC Dubai. Career opportunities in recruitment, executive search across UAE and GCC. 15+ years excellence, global offices, comprehensive benefits.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/careers',
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
        content: 'Careers at VMMC Dubai | HR Jobs UAE',
      },
      {
        name: 'twitter:description',
        content:
          'Join leading HR consultancy in Dubai. 200+ professionals, 7 global offices, comprehensive benefits and development programs.',
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
        href: 'https://www.vmmcae.com/careers',
      },
    ],
    script: [
      // Organization Schema with JobPosting capabilities
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Victor Meridian Management Consultancies',
          alternateName: 'VMMC Dubai',
          url: 'https://www.vmmcae.com',
          logo: 'https://www.vmmcae.com/logo.png',
          description:
            'Leading HR consultancy with 15+ years of excellence, offering career opportunities in recruitment, executive search, and talent solutions across UAE and GCC region.',
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
            contactType: 'HR Department',
            areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH'],
            availableLanguage: ['English', 'Arabic'],
          },
          sameAs: [
            'https://www.linkedin.com/company/vmmc',
            'https://www.instagram.com/vmmc.global',
            'https://www.facebook.com/profile.php?id=61579975078423',
          ],
          foundingDate: '2010',
          numberOfEmployees: '200+',
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
              name: 'Careers',
              item: 'https://www.vmmcae.com/careers',
            },
          ],
        }),
      },
      // Sample JobPosting Schema (示例职位)
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: 'Recruitment Consultant - Dubai',
          description:
            'Join VMMC Dubai as a Recruitment Consultant. Work with leading companies across UAE and GCC region. Excellent career growth opportunities.',
          datePosted: '2025-01-01',
          validThrough: '2025-12-31',
          employmentType: 'FULL_TIME',
          hiringOrganization: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            sameAs: 'https://www.vmmcae.com',
            logo: 'https://www.vmmcae.com/logo.png',
          },
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ICD Brookfield Place, Level 7',
              addressLocality: 'Dubai',
              addressRegion: 'Dubai',
              addressCountry: 'AE',
            },
          },
          baseSalary: {
            '@type': 'MonetaryAmount',
            currency: 'AED',
            value: {
              '@type': 'QuantitativeValue',
              minValue: 8000,
              maxValue: 15000,
              unitText: 'MONTH',
            },
          },
          qualifications:
            'Bachelor degree, 2+ years recruitment experience, excellent communication skills',
          responsibilities:
            'Executive search, client management, candidate sourcing, talent acquisition',
          skills: 'Recruitment, HR, Talent Acquisition, Client Relations, Executive Search',
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
