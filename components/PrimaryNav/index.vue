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
  import type { MenuItem, UnifiedMenuItem } from './types/index'

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

  // Helper function to create submenu items
  const createSubItems = (items: string[]): UnifiedMenuItem[] => {
    return items.map((item) => ({
      name: item,
      hasSubMenu: false,
    }))
  }

  // Menu data with unified structure
  const menuItems: MenuItem[] = [
    {
      name: 'Industries',
      hasSubMenu: true,
      subItems: [
        {
          name: 'Aerospace & Defense',
          hasSubMenu: true,
          subItems: createSubItems([
            'Aerospace & Defense',
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Agriculture',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Automotive & Assembly',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Chemicals',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Consumer Packaged Goods',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Education',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Electric Power & Natural Gas',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Energy and Materials',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Engineering, Construction & Building Materials',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Financial Services',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Healthcare',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Industrials & Electronics',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Infrastructure',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Life Sciences',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Logistics',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Metals & Mining',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Oil & Gas',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Packaging & Paper',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Private Capital',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Public Sector',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Real Estate',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Retail',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Semiconductors',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Social Sector',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Technology, Media & Telecommunications',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Travel',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
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
          subItems: createSubItems([
            'Overview',
            'Our Approach',
            'Labs',
            'Case Studies',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Business Building',
          hasSubMenu: true,
          subItems: createSubItems(['Overview', 'Our insights', 'Our People', 'Contact Us']),
        },
        {
          name: 'Geopolitics',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Insights on Geopolitics',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Growth, Marketing & Sales',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
            'Solutions',
          ]),
        },
        {
          name: 'Implementation',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our People',
            'Our Insights',
            'Contact Us',
          ]),
        },
        {
          name: 'M&A',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Operations',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Case Studies',
            'Solutions',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Risk & Resilience',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Strategy & Corporate Finance',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'People & Organizational Performance',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
        },
        {
          name: 'Sustainability',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Case Studies',
            'Careers',
            'Contact Us',
          ]),
        },
        {
          name: 'Technology',
          hasSubMenu: true,
          subItems: createSubItems(['Overview', 'Our Insights', 'Our People', 'Contact Us']),
        },
        {
          name: 'Transformation',
          hasSubMenu: true,
          subItems: createSubItems([
            'How We Help Clients',
            'Our Insights',
            'Our People',
            'Contact Us',
          ]),
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
          name: 'TRENDING TOPICS',
          isGroup: true,
          hasSubMenu: true,
          subItems: [
            {
              name: 'Artificial Intelligence & Gen AI',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Our Approach',
                'Labs',
                'Case Studies',
                'Our Insights',
                'Our People',
                'Contact Us',
              ]),
            },
            {
              name: 'Business Resilience',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Case Studies',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'CEO Excellence',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Geopolitics',
              hasSubMenu: true,
              subItems: createSubItems([
                'How We Help Clients',
                'Insights on Geopolitics',
                'Our People',
                'Contact Us',
              ]),
            },
            {
              name: 'Tariffs and Global Trade',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
          ],
        },
        {
          title: 'EXPLORE',
          name: 'EXPLORE',
          isGroup: true,
          hasSubMenu: true,
          subItems: [
            {
              name: 'Author Talks',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Global Surveys',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'McKinsey Explainers',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'McKinsey Live',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'McKinsey on Books',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'McKinsey on Lives & Legacies',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'McKinsey Podcast',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'McKinsey Themes',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'McKinsey Video',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Week in Charts',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
          ],
        },
      ],
      featured: {
        title: 'FEATURED',
        items: [
          {
            name: 'Ask McKinsey',
            description:
              'Get answers to the questions that matter to youâ€"based on McKinsey insights. This pilot of our new gen AI chatbot covers digital, AI, technology, media, and telecoms. Other topics coming soon.',
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
        {
          name: 'Home',
          hasSubMenu: true,
          subItems: createSubItems([
            'Home',
            'Explore',
            'Jobs',
            'Interviewing',
            'Our People',
            'Students',
            'Tech Careers',
            'Careers Beyond Consulting',
            'Experienced Professionals',
          ]),
        },
        {
          name: 'Explore',
          hasSubMenu: true,
          subItems: createSubItems([
            'Home',
            'Explore',
            'Jobs',
            'Interviewing',
            'Our People',
            'Students',
            'Tech Careers',
            'Careers Beyond Consulting',
            'Experienced Professionals',
          ]),
        },
        {
          name: 'Jobs',
          hasSubMenu: true,
          subItems: createSubItems([
            'Home',
            'Explore',
            'Jobs',
            'Interviewing',
            'Our People',
            'Students',
            'Tech Careers',
            'Careers Beyond Consulting',
            'Experienced Professionals',
          ]),
        },
        {
          name: 'Interviewing',
          hasSubMenu: true,
          subItems: createSubItems([
            'Home',
            'Explore',
            'Jobs',
            'Interviewing',
            'Our People',
            'Students',
            'Tech Careers',
            'Careers Beyond Consulting',
            'Experienced Professionals',
          ]),
        },
        {
          name: 'Our People',
          hasSubMenu: true,
          subItems: createSubItems([
            'Home',
            'Explore',
            'Jobs',
            'Interviewing',
            'Our People',
            'Students',
            'Tech Careers',
            'Careers Beyond Consulting',
            'Experienced Professionals',
          ]),
        },
        {
          name: 'Students',
          hasSubMenu: true,
          subItems: createSubItems([
            'Careers',
            'Home',
            'Explore',
            'Jobs',
            'Interviewing',
            'Our People',
            'Students',
            'Tech Careers',
            'Careers Beyond Consulting',
            'Experienced Professionals',
          ]),
        },
        {
          name: 'Tech Careers',
          hasSubMenu: true,
          subItems: createSubItems([
            'Home',
            'Explore',
            'Jobs',
            'Interviewing',
            'Our People',
            'Students',
            'Tech Careers',
            'Careers Beyond Consulting',
            'Experienced Professionals',
          ]),
        },
        {
          name: 'Careers Beyond Consulting',
          hasSubMenu: true,
          subItems: createSubItems([
            'Home',
            'Explore',
            'Jobs',
            'Interviewing',
            'Our People',
            'Students',
            'Tech Careers',
            'Careers Beyond Consulting',
            'Experienced Professionals',
          ]),
        },
        {
          name: 'Experienced Professionals',
          hasSubMenu: true,
          subItems: createSubItems([
            'Home',
            'Explore',
            'Jobs',
            'Interviewing',
            'Our People',
            'Students',
            'Tech Careers',
            'Careers Beyond Consulting',
            'Experienced Professionals',
          ]),
        },
      ],
    },
    {
      name: 'About Us',
      hasSubMenu: true,
      subItems: [
        {
          title: 'WHO WE ARE',
          name: 'WHO WE ARE',
          isGroup: true,
          hasSubMenu: true,
          subItems: [
            {
              name: 'Our Leadership',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Purpose, Mission & Values',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Our History',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Our Aspiration',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Our Governance',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
          ],
        },
        {
          title: 'HOW WE WORK',
          name: 'HOW WE WORK',
          isGroup: true,
          hasSubMenu: true,
          subItems: [
            {
              name: 'Alliances & Acquisitions',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Solutions',
              hasSubMenu: true,
              subItems: createSubItems([
                'Industries',
                'Capabilities',
                'Our Insights',
                'Locations',
                'Careers',
                'About Us',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Client Capabilities Network',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Our Work',
                'Our People',
                'Careers',
                'Contact Us',
              ]),
            },
            {
              name: 'Case Studies',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'From idea to impact',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
          ],
        },
        {
          title: 'OUR COMMITMENTS',
          name: 'OUR COMMITMENTS',
          isGroup: true,
          hasSubMenu: true,
          subItems: [
            {
              name: 'Our Diverse Meritocracy',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Economic Opportunity',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Social Responsibility',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'Environmental Sustainability',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: '2024 Sustainable and Inclusive Growth Report',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
          ],
        },
        {
          title: 'KEEP EXPLORING',
          name: 'KEEP EXPLORING',
          isGroup: true,
          hasSubMenu: true,
          subItems: [
            {
              name: 'Media',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
            {
              name: 'McKinsey Blog',
              hasSubMenu: true,
              subItems: createSubItems([
                'Overview',
                'Who we are',
                'Our commitments',
                'How we work',
                'Media',
                'McKinsey Blog',
              ]),
            },
          ],
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
