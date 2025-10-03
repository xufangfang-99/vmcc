<template>
  <div class="locations-page">
    <!-- 全球办公网络 -->
    <GlobalPresence />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import GlobalPresence from '~/components/About/GlobalPresence.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'VMMC Global Offices | Dubai, Singapore, Malaysia, China | Talent Solutions Locations',
    meta: [
      {
        name: 'description',
        content:
          'VMMC global offices across 7+ locations in Dubai UAE, Singapore, Malaysia, and China (Beijing, Shanghai, Shenzhen, Chengdu). Comprehensive talent solutions and recruitment services covering Asia-Pacific, Middle East, and GCC region. Contact our nearest office for executive search, HR outsourcing, and Emiratisation services.',
      },
      {
        name: 'keywords',
        content:
          'VMMC offices, VMMC Dubai office, VMMC Singapore office, Victor Meridian locations, VMMC Malaysia office, VMMC China offices, recruitment agency Dubai location, HR consultancy Dubai office, talent solutions Dubai, executive search Singapore office, headhunting Dubai office, VMMC DIFC office, recruitment company Singapore, HR outsourcing Dubai location, staffing agency UAE office, GCC recruitment offices, Middle East HR offices, Asia Pacific recruitment locations, VMMC Beijing office, VMMC Shanghai office, talent acquisition Dubai office, Emiratisation services Dubai, international recruitment offices, global talent solutions locations',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'VMMC Global Offices | Dubai, Singapore, Malaysia, China',
      },
      {
        property: 'og:description',
        content:
          '7+ VMMC offices across Dubai, Singapore, Malaysia, and China. Comprehensive talent solutions covering Asia-Pacific, Middle East, and GCC.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/locations',
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
        content: 'VMMC Global Offices | Dubai, Singapore, Malaysia, China',
      },
      {
        name: 'twitter:description',
        content:
          '7+ VMMC offices across key business hubs. Contact our nearest office for talent solutions.',
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
        href: 'https://www.vmmcae.com/locations',
      },
    ],
    script: [
      // Organization with all locations
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
            'Global talent solutions provider with offices in Dubai, Singapore, Malaysia, and China',
          sameAs: [
            'https://www.linkedin.com/company/vmmc',
            'https://www.instagram.com/vmmc.global',
            'https://www.facebook.com/profile.php?id=61579975078423',
          ],
        }),
      },
      // Dubai Office - LocalBusiness
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.vmmcae.com/locations#dubai',
          name: 'VMMC Dubai Office',
          image: 'https://www.vmmcae.com/logo.png',
          telephone: '+971-4-376-4600',
          email: 'info@vmmcglobal.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'ICD Brookfield Place, Level 7',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 25.2048,
            longitude: 55.2708,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '09:00',
            closes: '18:00',
          },
          priceRange: '$$$',
          areaServed: ['AE', 'SA', 'QA', 'KW', 'OM', 'BH'],
        }),
      },
      // Singapore Office - LocalBusiness (HQ)
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.vmmcae.com/locations#singapore',
          name: 'VMMC Singapore Headquarters',
          image: 'https://www.vmmcae.com/logo.png',
          telephone: '+65-6123-4567',
          email: 'info@vmmcglobal.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 Marina Bay Sands, Level 20',
            addressLocality: 'Singapore',
            postalCode: '018956',
            addressCountry: 'SG',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 1.2839,
            longitude: 103.8607,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          priceRange: '$$$',
          areaServed: ['SG', 'MY', 'TH', 'VN', 'ID', 'PH'],
        }),
      },
      // Malaysia Office - LocalBusiness
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.vmmcae.com/locations#malaysia',
          name: 'VMMC Malaysia Office',
          image: 'https://www.vmmcae.com/logo.png',
          telephone: '+60-3-1234-5678',
          email: 'info@vmmcglobal.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'KLCC Area',
            addressLocality: 'Kuala Lumpur',
            addressCountry: 'MY',
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          priceRange: '$$$',
          areaServed: 'MY',
        }),
      },
      // China Offices - ItemList
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'VMMC China Offices',
          description: 'VMMC offices in major Chinese cities',
          itemListElement: [
            {
              '@type': 'LocalBusiness',
              name: 'VMMC Beijing Office',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Beijing',
                addressCountry: 'CN',
              },
            },
            {
              '@type': 'LocalBusiness',
              name: 'VMMC Shanghai Office',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Shanghai',
                addressCountry: 'CN',
              },
            },
            {
              '@type': 'LocalBusiness',
              name: 'VMMC Shenzhen Office',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Shenzhen',
                addressCountry: 'CN',
              },
            },
            {
              '@type': 'LocalBusiness',
              name: 'VMMC Chengdu Office',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chengdu',
                addressCountry: 'CN',
              },
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
              name: 'Locations',
              item: 'https://www.vmmcae.com/locations',
            },
          ],
        }),
      },
    ],
  })
</script>

<style scoped>
  .locations-page {
    min-height: 100vh;
  }
</style>
