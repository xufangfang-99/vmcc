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
    title: 'Contact VMMC Dubai | Free HR Consultation | Talent Solutions UAE & GCC',
    meta: [
      {
        name: 'description',
        content:
          'Contact Victor Meridian Management Consultancies (VMMC) Dubai for free HR consultation. Schedule expert recruitment services including executive search, flexible staffing, Emiratisation, and HR outsourcing across UAE and GCC region. 24/7 global support with offices in Dubai DIFC, Singapore, and Malaysia.',
      },
      {
        name: 'keywords',
        content:
          'Contact VMMC Dubai, VMMC consultation, Victor Meridian contact Dubai, free HR consultation UAE, Dubai recruitment agency contact, talent solutions consultation Dubai, executive search consultation Dubai, HR outsourcing Dubai contact, Emiratisation consultation UAE, GCC recruitment contact, flexible staffing Dubai, schedule consultation UAE, Dubai DIFC recruitment contact, talent acquisition consultation Middle East, 24/7 recruitment support Dubai, professional recruitment consultation UAE, headhunting services Dubai contact, workforce solutions Dubai, Dubai talent solutions contact, UAE HR advisory contact, free recruitment consultation Dubai, book HR consultation GCC, Dubai staffing agency contact, comprehensive talent solutions UAE contact',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'Contact VMMC Dubai | Free HR Consultation | Talent Solutions UAE',
      },
      {
        property: 'og:description',
        content:
          'Schedule free consultation with VMMC Dubai. Expert recruitment services including executive search, Emiratisation, and HR outsourcing across UAE and GCC. 24/7 support.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/contact',
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
        content: 'Contact VMMC Dubai | Free HR Consultation',
      },
      {
        name: 'twitter:description',
        content:
          'Schedule free consultation with VMMC Dubai. Expert recruitment and talent solutions across UAE and GCC region.',
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
        href: 'https://www.vmmcae.com/contact',
      },
    ],
    script: [
      // ContactPage 结构化数据
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          mainEntity: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            alternateName: 'VMMC Dubai',
            url: 'https://www.vmmcae.com',
            logo: 'https://www.vmmcae.com/logo.png',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+971-55-829-6351',
                contactType: 'Customer Service',
                areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH'],
                availableLanguage: ['English', 'Arabic'],
                contactOption: 'TollFree',
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],
                  opens: '00:00',
                  closes: '23:59',
                },
              },
              {
                '@type': 'ContactPoint',
                telephone: '+971-4-376-4600',
                contactType: 'Sales',
                areaServed: 'AE',
                availableLanguage: ['English', 'Arabic'],
              },
              {
                '@type': 'ContactPoint',
                email: 'info@vmmcglobal.com',
                contactType: 'Customer Support',
                areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'SG', 'MY'],
              },
            ],
            address: [
              {
                '@type': 'PostalAddress',
                streetAddress: 'ICD Brookfield Place, Level 7',
                addressLocality: 'Dubai',
                addressRegion: 'Dubai',
                addressCountry: 'AE',
                name: 'Dubai Office (DIFC)',
              },
              {
                '@type': 'PostalAddress',
                streetAddress: '1 Marina Bay Sands, Level 20',
                addressLocality: 'Singapore',
                postalCode: '018956',
                addressCountry: 'SG',
                name: 'Singapore Headquarters',
              },
            ],
            sameAs: [
              'https://www.linkedin.com/company/vmmc',
              'https://www.instagram.com/vmmc.global',
              'https://www.facebook.com/profile.php?id=61579975078423',
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
              name: 'Contact Us',
              item: 'https://www.vmmcae.com/contact',
            },
          ],
        }),
      },
      // FAQPage 结构化数据（基于FAQSection组件内容）
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How long does the executive search process typically take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our executive search process typically takes 8-12 weeks, from initial requirement discussion to final candidate placement. For urgent needs, we can activate fast-track channels to complete recruitment within 4-6 weeks.',
              },
            },
            {
              '@type': 'Question',
              name: 'Which industries do you specialize in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We serve 50+ industry sectors, including technology, finance, healthcare, manufacturing, retail, energy, and professional services across UAE and GCC region.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is your talent placement success rate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We maintain a 92% placement success rate and 95% client satisfaction rate. Candidates we recommend have a 96% retention rate after 12 months of employment.',
              },
            },
            {
              '@type': 'Question',
              name: 'How quickly can you respond to urgent hiring needs?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide 24-hour rapid response service. Upon receiving urgent requirements, we arrange dedicated consultant liaison within 2 hours and recommend first batch candidates within 72 hours.',
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
