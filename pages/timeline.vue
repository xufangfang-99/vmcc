<template>
  <div class="journey-page bg-[var(--tm-bg-primary)] animate-page-enter">
    <!-- Hero Section -->
    <JourneyHero />

    <!-- Timeline Section - 待添加 -->
    <JourneyTimeline />
    <!-- Global Services Section - 待添加 -->
    <JourneyGlobalServices />
    <!-- GCC Regions Section - 待添加 -->
    <JourneyGCCRegions />
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import JourneyHero from '~/components/Journey/JourneyHero.vue'
  import JourneyTimeline from '~/components/Journey/JourneyTimeline.vue'
  import JourneyGlobalServices from '~/components/Journey/JourneyGlobalServices.vue'
  import JourneyGCCRegions from '~/components/Journey/JourneyGCCRegions.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'

  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'VMMC Journey 2010-2024 | 15 Years Growth from Singapore to Dubai, GCC & China',
    meta: [
      {
        name: 'description',
        content:
          "Discover VMMC's remarkable 15-year journey from Singapore startup (2010) to leading HR consultancy with 7 global offices across Dubai, Singapore, Malaysia, and China. Major milestones: 1.2M candidate database, 100K+ corporate clients, 170K+ jobs placed, 50K+ training programs. Comprehensive GCC coverage across UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain. Expert Emiratisation, recruitment, and talent solutions since 2010.",
      },
      {
        name: 'keywords',
        content:
          'VMMC history, VMMC journey, Victor Meridian 15 years, VMMC timeline, VMMC global expansion, VMMC founded 2010, VMMC Singapore headquarters, VMMC Dubai office 2022, VMMC China offices, recruitment company history, HR consultancy growth, talent solutions timeline, VMMC Malaysia office, VMMC Beijing Shanghai, VMMC milestones, VMMC achievements, GCC HR expansion, Asia Pacific recruitment growth, VMMC office network, international recruitment history, Emiratisation services history, VMMC company evolution, talent management journey, VMMC success story, recruitment industry leader',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'VMMC Journey 2010-2024 | 15 Years from Singapore to Global HR Leader',
      },
      {
        property: 'og:description',
        content:
          '15-year journey from Singapore startup to 7 global offices. 1.2M candidates, 100K+ clients, comprehensive GCC coverage.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.vmmcae.com/timeline',
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
        content: 'VMMC Journey 2010-2024 | 15 Years Global Growth',
      },
      {
        name: 'twitter:description',
        content:
          '15-year journey: Singapore to 7 global offices. 1.2M candidates, comprehensive GCC coverage.',
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
        href: 'https://www.vmmcae.com/timeline',
      },
    ],
    script: [
      // Organization with founding date
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
            'Leading HR consultancy established in 2010 in Singapore, now with 7 global offices across Dubai, Singapore, Malaysia, and China, serving Asia-Pacific, Middle East, and GCC regions.',
          foundingDate: '2010',
          foundingLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Singapore',
              addressCountry: 'SG',
            },
          },
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: 200,
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'ICD Brookfield Place, Level 7',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
          },
          sameAs: [
            'https://www.linkedin.com/company/vmmc',
            'https://www.instagram.com/vmmc.global',
            'https://www.facebook.com/profile.php?id=61579975078423',
          ],
        }),
      },
      // Timeline as ItemList
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'VMMC Company Timeline',
          description: '15-year journey of VMMC from 2010 to 2024',
          itemListElement: [
            {
              '@type': 'Event',
              name: 'VMMC Founded in Singapore',
              description: 'VMMC opened its first office in Singapore',
              startDate: '2010',
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Singapore',
                  addressCountry: 'SG',
                },
              },
            },
            {
              '@type': 'Event',
              name: 'Malaysia Office Launch',
              description: 'VMMC expanded to Kuala Lumpur, Malaysia',
              startDate: '2013',
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Kuala Lumpur',
                  addressCountry: 'MY',
                },
              },
            },
            {
              '@type': 'Event',
              name: 'Shanghai Office Established',
              description: 'VMMC entered China market with Shanghai office',
              startDate: '2015',
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Shanghai',
                  addressCountry: 'CN',
                },
              },
            },
            {
              '@type': 'Event',
              name: 'Beijing Office Opening',
              description: 'VMMC expanded China presence with Beijing office',
              startDate: '2017',
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Beijing',
                  addressCountry: 'CN',
                },
              },
            },
            {
              '@type': 'Event',
              name: 'Chengdu & Shenzhen Expansion',
              description: 'VMMC opened 5th and 6th offices in China',
              startDate: '2019',
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Chengdu, Shenzhen',
                  addressCountry: 'CN',
                },
              },
            },
            {
              '@type': 'Event',
              name: 'Dubai Office Launch',
              description: 'VMMC entered Middle East market with Dubai office',
              startDate: '2022',
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'ICD Brookfield Place, Level 7',
                  addressLocality: 'Dubai',
                  addressCountry: 'AE',
                },
              },
            },
            {
              '@type': 'Event',
              name: 'Global Brand Launch',
              description: 'Official global brand launch reinforcing international leadership',
              startDate: '2024',
            },
          ],
        }),
      },
      // Achievement Statistics
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'VMMC Journey & Milestones',
          description: 'VMMC 15-year journey from 2010 to 2024 with major achievements',
          mainEntity: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            foundingDate: '2010',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '500',
            },
          },
          about: [
            {
              '@type': 'Thing',
              name: 'Candidate Database',
              description: '1.2 million qualified candidates',
            },
            {
              '@type': 'Thing',
              name: 'Corporate Clients',
              description: '100,000+ companies served',
            },
            {
              '@type': 'Thing',
              name: 'Jobs Placed',
              description: '170,000+ successful placements',
            },
            {
              '@type': 'Thing',
              name: 'Training Programs',
              description: '50,000+ courses delivered',
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
              name: 'Our Journey',
              item: 'https://www.vmmcae.com/timeline',
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
