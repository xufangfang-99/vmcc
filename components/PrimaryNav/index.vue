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
        'Aerospace & Defense',
        'Agriculture',
        'Automotive & Assembly',
        'Chemicals',
        'Consumer Packaged Goods',
        'Education',
        'Electric Power & Natural Gas',
        'Energy and Materials',
        'Engineering, Construction & Building Materials',
        'Financial Services',
        'Healthcare',
        'Industrials & Electronics',
        'Infrastructure',
        'Life Sciences',
        'Logistics',
        'Metals & Mining',
        'Oil & Gas',
        'Packaging & Paper',
        'Private Capital',
        'Public Sector',
        'Real Estate',
        'Retail',
        'Semiconductors',
        'Social Sector',
        'Technology, Media & Telecommunications',
        'Travel',
      ],
    },
    {
      name: 'Capabilities',
      hasSubMenu: true,
      subItems: [
        'Artificial Intelligence',
        'Business Building',
        'Geopolitics',
        'Growth, Marketing & Sales',
        'Implementation',
        'M&A',
        'Operations',
        'Risk & Resilience',
        'Strategy & Corporate Finance',
        'People & Organizational Performance',
        'Sustainability',
        'Technology',
        'Transformation',
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
      subItems: ['Overview', 'Search Jobs', 'Life at McKinsey', 'Interview Process'],
    },
    {
      name: 'About Us',
      hasSubMenu: true,
      subItems: ['Overview', 'Our People', 'Social Impact', 'Alumni', 'Media Center'],
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
