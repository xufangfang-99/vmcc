<template>
  <div class="consultation">
    <!-- Hero区域: 页面介绍 -->
    <ConsultationHero />

    <!-- 第一屏: 预约表单 -->
    <ConsultationForm />

    <!-- 第二屏: 联系方式 -->
    <ContactSection />

    <!-- 第三屏: 常见问题 -->
    <FAQSection />
    <!-- 第四屏: 页脚 -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import ConsultationHero from '~/components/Contact/ConsultationHero.vue'
  import ConsultationForm from '~/components/Contact/ConsultationForm.vue'
  import ContactSection from '~/components/Contact/ContactSection.vue'
  import FAQSection from '~/components/Contact/FAQSection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'VMMC Dubai Office | Contact HR Consultancy DIFC | Free Consultation UAE',
    meta: [
      {
        name: 'description',
        content:
          'Contact VMMC Dubai office at ICD Brookfield Place, DIFC. Leading HR consultancy in UAE offering executive search, Emiratisation, flexible staffing, and HR outsourcing services. Free consultation available. Call +971-4-376-4600 or email info@vmmcglobal.com Serving Dubai, Abu Dhabi, and entire GCC region.',
      },
      {
        name: 'keywords',
        content:
          'VMMC Dubai, VMMC Dubai office, HR consultancy Dubai DIFC, recruitment agency Dubai, contact VMMC Dubai, Dubai talent solutions, executive search Dubai, Emiratisation Dubai, HR outsourcing Dubai, staffing agency Dubai, headhunting Dubai, talent acquisition Dubai, Dubai recruitment contact, DIFC recruitment agency, Dubai HR services, GCC recruitment Dubai, UAE staffing solutions, Dubai DIFC office, recruitment consultant Dubai, Dubai employment agency, talent management Dubai, workforce solutions Dubai, Dubai hiring solutions, contact recruitment Dubai, HR advisory Dubai',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'VMMC Dubai Office | Contact HR Consultancy DIFC',
      },
      {
        property: 'og:description',
        content:
          'Contact VMMC Dubai at ICD Brookfield Place, DIFC. Executive search, Emiratisation, HR outsourcing services across UAE and GCC. Free consultation.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/dubai',
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
        content: 'VMMC Dubai Office | HR Consultancy DIFC',
      },
      {
        name: 'twitter:description',
        content:
          'Contact VMMC Dubai office. Executive search, Emiratisation, HR outsourcing across UAE and GCC.',
      },
      {
        name: 'twitter:image',
        content: 'https://www.vmmcae.com/logo.png',
      },
      // 地理位置 - Dubai专属
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
        href: 'https://www.vmmcae.com/dubai',
      },
    ],
    script: [
      // Dubai Office - LocalBusiness Schema
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.vmmcae.com/dubai',
          name: 'Victor Meridian Management Consultancies - Dubai Office',
          alternateName: 'VMMC Dubai',
          image: 'https://www.vmmcae.com/logo.png',
          description:
            'Leading HR consultancy in Dubai offering executive search, Emiratisation, flexible staffing, and HR outsourcing services across UAE and GCC region.',
          url: 'https://www.vmmcae.com/dubai',
          telephone: '+971-4-376-4600',
          email: 'info@vmmcglobal.com',
          priceRange: '$$$',
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
            latitude: 25.2048,
            longitude: 55.2708,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+971-4-376-4600',
              contactType: 'Customer Service',
              areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH'],
              availableLanguage: ['English', 'Arabic'],
              contactOption: 'TollFree',
            },
            {
              '@type': 'ContactPoint',
              email: 'info@vmmcglobal.com',
              contactType: 'Sales',
              areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH'],
            },
          ],
          areaServed: [
            {
              '@type': 'City',
              name: 'Dubai',
            },
            {
              '@type': 'City',
              name: 'Abu Dhabi',
            },
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
          sameAs: [
            'https://www.linkedin.com/company/vmmc',
            'https://www.instagram.com/vmmc.global',
            'https://www.facebook.com/profile.php?id=61579975078423',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'HR Consultancy Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Executive Search',
                  description: 'Premium executive search and headhunting services in Dubai and GCC',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Emiratisation Services',
                  description: 'UAE nationals recruitment and Emiratisation compliance',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'HR Outsourcing',
                  description: 'Comprehensive HR outsourcing solutions for Dubai businesses',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Flexible Staffing',
                  description: 'Temporary and contract staffing solutions in UAE',
                },
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
              name: 'Dubai Office',
              item: 'https://www.vmmcae.com/dubai',
            },
          ],
        }),
      },
      // FAQPage Schema (Dubai-specific)
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Where is VMMC Dubai office located?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'VMMC Dubai office is located at ICD Brookfield Place, Level 7, in the Dubai International Financial Centre (DIFC). We serve clients across Dubai, Abu Dhabi, and the entire GCC region.',
              },
            },
            {
              '@type': 'Question',
              name: 'What services does VMMC Dubai offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'VMMC Dubai offers executive search, Emiratisation services, flexible staffing, HR outsourcing, and talent acquisition solutions across UAE and GCC region.',
              },
            },
            {
              '@type': 'Question',
              name: 'How can I contact VMMC Dubai office?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can contact VMMC Dubai at +971-4-376-4600 or email info@vmmcglobal.com. Our office hours are Sunday to Thursday, 9 AM to 6 PM GST.',
              },
            },
          ],
        }),
      },
    ],
  })
</script>

<style scoped>
  .consultation {
    position: relative;
    width: 100%;
  }
</style>
