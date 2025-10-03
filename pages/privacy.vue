<script setup lang="ts">
  useHead({
    title: 'Privacy Policy | VMMC Dubai | GDPR & PDPA Compliant Data Protection UAE',
    meta: [
      {
        name: 'description',
        content:
          "VMMC's comprehensive privacy policy explains how we protect your personal information across Dubai, UAE, and GCC. GDPR and PDPA compliant data protection practices. Learn about our data collection, usage, security measures, and your rights. Trusted HR consultancy committed to privacy since 2010.",
      },
      {
        name: 'keywords',
        content:
          'VMMC privacy policy, data protection Dubai, GDPR compliance UAE, PDPA Singapore, privacy rights, personal information protection, data security Dubai, HR consultancy privacy, recruitment data protection, candidate privacy UAE, VMMC data policy, privacy UAE, data protection GCC, confidential recruitment, secure HR services',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'Privacy Policy | VMMC Dubai | Data Protection UAE',
      },
      {
        property: 'og:description',
        content:
          'VMMC privacy policy: GDPR & PDPA compliant data protection. Learn how we protect your personal information.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/privacy',
      },
      {
        property: 'og:image',
        content: 'https://www.vmmcae.com/logo.png',
      },
      // 其他Meta
      {
        name: 'robots',
        content: 'index, follow', // 隐私政策应该被索引以展示透明度
      },
      {
        name: 'author',
        content: 'Victor Meridian Management Consultancies',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/privacy',
      },
    ],
    script: [
      // WebPage Schema
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Privacy Policy - Victor Meridian Management Consultancies',
          description:
            'VMMC privacy policy outlining data protection practices across Dubai, UAE, and GCC regions',
          url: 'https://www.vmmcae.com/privacy',
          publisher: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            url: 'https://www.vmmcae.com',
          },
          datePublished: '2010-01-01',
          dateModified: '2025-01-01',
          inLanguage: 'en',
        }),
      },
      // Organization Schema
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Victor Meridian Management Consultancies',
          url: 'https://www.vmmcae.com',
          logo: 'https://www.vmmcae.com/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+65-6386-8322',
            contactType: 'Data Protection Officer',
            email: 'info@vmmcglobal.com',
            areaServed: ['AE', 'SG', 'MY', 'CN', 'SA', 'QA', 'KW', 'OM', 'BH'],
            availableLanguage: ['English', 'Arabic', 'Chinese'],
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'The Guoco Tower, Office 1801',
            addressLocality: 'Singapore',
            addressCountry: 'SG',
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
              name: 'Privacy Policy',
              item: 'https://www.vmmcae.com/privacy',
            },
          ],
        }),
      },
    ],
  })

  definePageMeta({
    layout: 'default',
  })
</script>
