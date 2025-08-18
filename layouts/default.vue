<template>
  <el-container class="min-h-screen bg-[var(--tm-bg-primary)] transition-colors duration-300">
    <el-header class="border-0 border-b border-solid border-[var(--tm-bd-primary)]">
      <div class="flex justify-between items-center h-full">
        <div class="flex items-center gap-4">
          <MenuIcon
            :menu-items="menuItems"
            @click="handleIconClick"
          />
          <Logo></Logo>
          <!-- 仅在非移动端显示 NavMenu -->
          <Responsive :not-mobile="true">
            <NavMenu
              :menu-items="menuItems"
              @menu-click="handleMenuClick"
              @submenu-click="handleSubmenuClick"
            />
          </Responsive>
        </div>
        <ThemeSelector />
      </div>
    </el-header>
    <el-main class="bg-[var(--tm-bg-secondary)] transition-colors duration-300">
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
  import NavMenu from '~/components/NavMenu.vue'
  import type { MenuItem, UnifiedMenuItem } from '~/components/NavMenu.types'

  const handleIconClick = () => {
    console.log('menu icon clicked')
    // 这里可以触发全屏菜单的显示
  }

  // Menu data
  // 完整的菜单数据
  const menuItems: MenuItem[] = [
    {
      name: 'Industries',
      hasSubMenu: true,
      subItems: [
        { name: 'Aerospace & Defense', hasSubMenu: false },
        { name: 'Agriculture', hasSubMenu: false },
        { name: 'Automotive & Assembly', hasSubMenu: false },
        { name: 'Chemicals', hasSubMenu: false },
        { name: 'Consumer Packaged Goods', hasSubMenu: false },
        { name: 'Education', hasSubMenu: false },
        { name: 'Electric Power & Natural Gas', hasSubMenu: false },
        { name: 'Energy and Materials', hasSubMenu: false },
        { name: 'Engineering, Construction & Building Materials', hasSubMenu: false },
        { name: 'Financial Services', hasSubMenu: false },
        { name: 'Healthcare', hasSubMenu: false },
        { name: 'Industrials & Electronics', hasSubMenu: false },
        { name: 'Infrastructure', hasSubMenu: false },
        { name: 'Life Sciences', hasSubMenu: false },
        { name: 'Logistics', hasSubMenu: false },
        { name: 'Metals & Mining', hasSubMenu: false },
        { name: 'Oil & Gas', hasSubMenu: false },
        { name: 'Packaging & Paper', hasSubMenu: false },
        { name: 'Private Capital', hasSubMenu: false },
        { name: 'Public Sector', hasSubMenu: false },
        { name: 'Real Estate', hasSubMenu: false },
        { name: 'Retail', hasSubMenu: false },
        { name: 'Semiconductors', hasSubMenu: false },
        { name: 'Social Sector', hasSubMenu: false },
        { name: 'Technology, Media & Telecommunications', hasSubMenu: false },
        { name: 'Travel', hasSubMenu: false },
      ],
    },
    {
      name: 'Capabilities',
      hasSubMenu: true,
      subItems: [
        { name: 'Artificial Intelligence', hasSubMenu: false },
        { name: 'Business Building', hasSubMenu: false },
        { name: 'Geopolitics', hasSubMenu: false },
        { name: 'Growth, Marketing & Sales', hasSubMenu: false },
        { name: 'Implementation', hasSubMenu: false },
        { name: 'M&A', hasSubMenu: false },
        { name: 'Operations', hasSubMenu: false },
        { name: 'Risk & Resilience', hasSubMenu: false },
        { name: 'Strategy & Corporate Finance', hasSubMenu: false },
        { name: 'People & Organizational Performance', hasSubMenu: false },
        { name: 'Sustainability', hasSubMenu: false },
        { name: 'Technology', hasSubMenu: false },
        { name: 'Transformation', hasSubMenu: false },
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
          hasSubMenu: false,
          subItems: [
            { name: 'Artificial Intelligence & Gen AI', hasSubMenu: false },
            { name: 'Business Resilience', hasSubMenu: false },
            { name: 'Case Studies', hasSubMenu: false },
            { name: 'CEO Excellence', hasSubMenu: false },
            { name: 'Geopolitics', hasSubMenu: false },
            { name: 'Tariffs and Global Trade', hasSubMenu: false },
          ],
        },
        {
          title: 'EXPLORE',
          name: 'EXPLORE',
          isGroup: true,
          hasSubMenu: false,
          subItems: [
            { name: 'Author Talks', hasSubMenu: false },
            { name: 'Global Surveys', hasSubMenu: false },
            { name: 'McKinsey Explainers', hasSubMenu: false },
            { name: 'McKinsey Live', hasSubMenu: false },
            { name: 'McKinsey on Books', hasSubMenu: false },
            { name: 'McKinsey on Lives & Legacies', hasSubMenu: false },
            { name: 'McKinsey Podcast', hasSubMenu: false },
            { name: 'McKinsey Themes', hasSubMenu: false },
            { name: 'McKinsey Video', hasSubMenu: false },
            { name: 'Week in Charts', hasSubMenu: false },
          ],
        },
      ],
      featured: {
        title: 'FEATURED',
        items: [
          {
            name: 'Ask McKinsey',
            description:
              'Get answers to the questions that matter to you—based on McKinsey insights. This pilot of our new gen AI chatbot covers digital, AI, technology, media, and telecoms.',
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
    {
      name: 'Locations',
      hasSubMenu: false,
    },
    {
      name: 'Careers',
      hasSubMenu: true,
      subItems: [
        { name: 'Home', hasSubMenu: false },
        { name: 'Explore', hasSubMenu: false },
        { name: 'Jobs', hasSubMenu: false },
        { name: 'Interviewing', hasSubMenu: false },
        { name: 'Our People', hasSubMenu: false },
        { name: 'Students', hasSubMenu: false },
        { name: 'Tech Careers', hasSubMenu: false },
        { name: 'Careers Beyond Consulting', hasSubMenu: false },
        { name: 'Experienced Professionals', hasSubMenu: false },
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
          hasSubMenu: false,
          subItems: [
            { name: 'Our Leadership', hasSubMenu: false },
            { name: 'Purpose, Mission & Values', hasSubMenu: false },
            { name: 'Our History', hasSubMenu: false },
            { name: 'Our Aspiration', hasSubMenu: false },
            { name: 'Our Governance', hasSubMenu: false },
          ],
        },
        {
          title: 'HOW WE WORK',
          name: 'HOW WE WORK',
          isGroup: true,
          hasSubMenu: false,
          subItems: [
            { name: 'Alliances & Acquisitions', hasSubMenu: false },
            { name: 'Solutions', hasSubMenu: false },
            { name: 'Client Capabilities Network', hasSubMenu: false },
            { name: 'Case Studies', hasSubMenu: false },
            { name: 'From idea to impact', hasSubMenu: false },
          ],
        },
        {
          title: 'OUR COMMITMENTS',
          name: 'OUR COMMITMENTS',
          isGroup: true,
          hasSubMenu: false,
          subItems: [
            { name: 'Our Diverse Meritocracy', hasSubMenu: false },
            { name: 'Economic Opportunity', hasSubMenu: false },
            { name: 'Social Responsibility', hasSubMenu: false },
            { name: 'Environmental Sustainability', hasSubMenu: false },
            { name: '2024 Sustainable and Inclusive Growth Report', hasSubMenu: false },
          ],
        },
        {
          title: 'KEEP EXPLORING',
          name: 'KEEP EXPLORING',
          isGroup: true,
          hasSubMenu: false,
          subItems: [
            { name: 'Media', hasSubMenu: false },
            { name: 'McKinsey Blog', hasSubMenu: false },
          ],
        },
      ],
      featured: {
        title: 'FEATURED',
        items: [
          {
            name: 'Growing economic opportunity',
            description: 'Helping organizations thrive, economies prosper, and people progress.',
            link: '/about-us/growing-economic-opportunity',
          },
          {
            name: 'McKinsey Health Institute',
            description:
              'Our mission is for everyone on the planet to add years to their lives and life to their years.',
            link: '/about-us/mckinsey-health-institute',
          },
          {
            name: 'McKinsey Institute for Economic Mobility',
            description: 'Accelerating inclusive growth. Improving economic mobility.',
            link: '/about-us/mckinsey-institute-for-economic-mobility',
          },
        ],
      },
    },
    {
      name: 'McKinsey Blog',
      hasSubMenu: false,
    },
  ]

  // 处理菜单点击
  const handleMenuClick = (item: MenuItem) => {
    console.log('Menu clicked:', item.name)
    // 如果需要，这里可以处理导航逻辑
  }

  // 处理子菜单点击
  const handleSubmenuClick = (parentItem: MenuItem, subItem: UnifiedMenuItem) => {
    console.log('Submenu clicked:', parentItem.name, '->', subItem.name)
  }
</script>
