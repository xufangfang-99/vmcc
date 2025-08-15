<template>
  <!-- Normal Navigation Mode (Desktop) -->
  <nav
    v-if="!fullscreen"
    class="primary-nav"
  >
    <ul class="flex items-center gap-6 list-none p-0 m-0">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="relative"
      >
        <a
          class="text-base font-normal cursor-pointer transition-colors hover:text-[var(--tm-pri-0)]"
          :style="{ color: 'var(--tm-txt-primary)' }"
          @click="handleNavClick(item)"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>

  <!-- Fullscreen Menu Mode -->
  <Teleport
    v-else
    to="body"
  >
    <!-- Desktop Fullscreen Menu -->
    <Responsive :not-mobile="true">
      <DesktopFullscreenMenu
        v-model:open="isOpen"
        :menu-items="menuItems"
        :bottom-links="bottomLinks"
      />
    </Responsive>

    <!-- Mobile Fullscreen Menu -->
    <Responsive :mobile="true">
      <MobileFullscreenMenu
        v-model:open="isOpen"
        :menu-items="menuItems"
        :bottom-links="bottomLinks"
      />
    </Responsive>
  </Teleport>
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue'
  import { navigateTo } from 'nuxt/app'
  import DesktopFullscreenMenu from './DesktopFullscreenMenu.vue'
  import MobileFullscreenMenu from './MobileFullscreenMenu.vue'
  import type { MenuItem } from './types/index'

  interface Props {
    fullscreen?: boolean
    open?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    fullscreen: false,
    open: false,
  })

  const emit = defineEmits<{
    'update:open': [value: boolean]
  }>()

  const isOpen = computed({
    get: () => props.open,
    set: (value) => emit('update:open', value),
  })

  // Menu data
  const menuItems: MenuItem[] = [
    {
      name: 'Industries',
      hasSubMenu: true,
      subItems: [
        {
          name: 'Aerospace & Defense',
          hasSubMenu: true,
          subItems: [
            'Aerospace & Defense',
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ],
        },
        {
          name: 'Agriculture',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Automotive & Assembly',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Chemicals',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Consumer Packaged Goods',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Education',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Electric Power & Natural Gas',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Energy and Materials',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Engineering, Construction & Building Materials',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Financial Services',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Healthcare',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Industrials & Electronics',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Infrastructure',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Life Sciences',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Logistics',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Metals & Mining',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Oil & Gas',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Packaging & Paper',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Private Capital',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Public Sector',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Real Estate',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Retail',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Semiconductors',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Social Sector',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Technology, Media & Telecommunications',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Travel',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
      ],
    },
    {
      name: 'Capabilities',
      hasSubMenu: true,
      subItems: [
        {
          name: 'Artificial Intelligence',
          hasSubMenu: true,
          subItems: [
            'Overview',
            'Our Approach',
            'Labs',
            'Case Studies',
            'Our Insights',
            'Our People',
            'Contact Us',
          ],
        },
        {
          name: 'Business Building',
          hasSubMenu: true,
          subItems: ['Overview', 'Our insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Geopolitics',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Insights on Geopolitics', 'Our People', 'Contact Us'],
        },
        {
          name: 'Growth, Marketing & Sales',
          hasSubMenu: true,
          subItems: [
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
            'Solutions',
          ],
        },
        {
          name: 'Implementation',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our People', 'Our Insights', 'Contact Us'],
        },
        {
          name: 'M&A',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Operations',
          hasSubMenu: true,
          subItems: [
            'How We Help Clients',
            'Our Insights',
            'Case Studies',
            'Solutions',
            'Our People',
            'Contact Us',
          ],
        },
        {
          name: 'Risk & Resilience',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Strategy & Corporate Finance',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'People & Organizational Performance',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Sustainability',
          hasSubMenu: true,
          subItems: [
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Case Studies',
            'Careers',
            'Contact Us',
          ],
        },
        {
          name: 'Technology',
          hasSubMenu: true,
          subItems: ['Overview', 'Our Insights', 'Our People', 'Contact Us'],
        },
        {
          name: 'Transformation',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
      ],
      featured: {
        title: 'FEATURED',
        items: [
          {
            name: 'Tech & AI at McKinsey',
            description:
              'We help clients unlock the power of AI at scale, modernize technology delivery, and build new businesses to fuel growth.',
            link: '/capabilities/tech-ai-mckinsey',
          },
        ],
      },
    },
    {
      name: 'Our Insights',
      hasSubMenu: true,
      subItems: [
        {
          title: 'TRENDING TOPICS',
          items: [
            'Artificial Intelligence & Gen AI',
            'Business Resilience',
            'Case Studies',
            'CEO Excellence',
            'Geopolitics',
            'Tariffs and Global Trade',
          ],
        },
        {
          title: 'EXPLORE',
          items: [
            'Author Talks',
            'Global Surveys',
            'McKinsey Explainers',
            'McKinsey Live',
            'McKinsey on Books',
            'McKinsey on Lives & Legacies',
            'McKinsey Podcast',
            'McKinsey Themes',
            'McKinsey Video',
            'Week in Charts',
          ],
        },
      ],
      featured: {
        title: 'FEATURED',
        items: [
          {
            name: 'Ask McKinsey',
            description:
              'Get answers to the questions that matter to you—based on McKinsey insights. This pilot of our new gen AI chatbot covers digital, AI, technology, media, and telecoms. Other topics coming soon.',
            link: '/our-insights/ask-mckinsey',
          },
          {
            name: 'McKinsey Quarterly',
            description:
              'Our flagship business publication has been defining and informing the senior-management agenda since 1964.',
            link: '/our-insights/mckinsey-quarterly',
          },
          {
            name: 'McKinsey Global Institute',
            description:
              'Our mission is to help leaders in multiple sectors develop a deeper understanding of the global economy.',
            link: '/our-insights/mckinsey-global-institute',
          },
        ],
      },
      exploreLink: {
        text: 'EXPLORE OUR INSIGHTS',
        url: '/our-insights',
      },
    },
    { name: 'Locations', hasSubMenu: false },
    {
      name: 'Careers',
      hasSubMenu: true,
      subItems: [
        'Home',
        'Explore',
        'Jobs',
        'Interviewing',
        'Our People',
        'Students',
        'Tech Careers',
        'Careers Beyond Consulting',
        'Experienced Professionals',
      ],
    },
    {
      name: 'About Us',
      hasSubMenu: true,
      subItems: [
        {
          title: 'WHO WE ARE',
          items: [
            'Our Leadership',
            'Purpose, Mission & Values',
            'Our History',
            'Our Aspiration',
            'Our Governance',
          ],
        },
        {
          title: 'OUR COMMITMENTS',
          items: [
            'Our Diverse Meritocracy',
            'Economic Opportunity',
            'Social Responsibility',
            'Environmental Sustainability',
            '2024 Sustainable and Inclusive Growth Report',
          ],
        },
        {
          title: 'HOW WE WORK',
          items: [
            'Alliances & Acquisitions',
            'Solutions',
            'Client Capabilities Network',
            'Case Studies',
            'From idea to impact',
          ],
        },
        {
          title: 'KEEP EXPLORING',
          items: ['Keep Exploring', 'Alumni', 'Media', 'McKinsey Blog'],
        },
      ],
      featured: {
        title: 'FEATURED',
        items: [
          {
            name: 'Growing economic opportunity',
            description: 'Helping organizations thrive, economies prosper, and people progress.',
            link: '/our-insights/ask-mckinsey',
          },
          {
            name: 'McKinsey Health Institute',
            description:
              'Our mission is for everyone on the planet to add years to their lives and life to their years.',
            link: '/our-insights/mckinsey-quarterly',
          },
          {
            name: 'McKinsey Institute for Economic Mobility',
            description: 'Accelerating inclusive growth. Improving economic mobility.',
            link: '/our-insights/mckinsey-global-institute',
          },
        ],
      },
      exploreLink: {
        text: 'EXPLORE OUR INSIGHTS',
        url: '/our-insights',
      },
    },
    { name: 'McKinsey Blog', hasSubMenu: false },
  ]

  const bottomLinks = [
    { name: 'Email Subscriptions', path: '/subscriptions' },
    { name: 'Profile', path: '/profile' },
    { name: 'Saved Articles', path: '/saved' },
  ]

  // Handle body scroll when menu is open
  watch(isOpen, (newValue) => {
    if (props.fullscreen) {
      document.body.style.overflow = newValue ? 'hidden' : ''
    }
  })

  const handleNavClick = (item: MenuItem) => {
    if (!item.hasSubMenu) {
      navigateTo(`/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
    }
    // For items with submenu in normal mode, you might want to show a dropdown
  }
</script>

<style scoped>
  .primary-nav {
    display: flex;
    align-items: center;
  }
</style>
