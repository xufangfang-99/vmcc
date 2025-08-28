import type { MenuItem } from '~/components/NavMenu.types'

export const useMenuData = () => {
  const menuItems: MenuItem[] = [
    {
      name: 'Industries',
      hasSubMenu: true,
      subItems: [
        { name: 'Oil & Gas', hasSubMenu: false, link: '/industries/oil-gas' },
        { name: 'Banking & Finance', hasSubMenu: false, link: '/industries/banking-finance' },
        {
          name: 'Healthcare & Life Sciences',
          hasSubMenu: false,
          link: '/industries/healthcare-life-sciences',
        },
        {
          name: 'Technology & Innovation',
          hasSubMenu: false,
          link: '/industries/technology-innovation',
        },
        {
          name: 'Real Estate & Construction',
          hasSubMenu: false,
          link: '/industries/real-estate-construction',
        },
        { name: 'Aviation & Logistics', hasSubMenu: false, link: '/industries/aviation-logistics' },
        {
          name: 'Hospitality & Tourism',
          hasSubMenu: false,
          link: '/industries/hospitality-tourism',
        },
        {
          name: 'Government & Public Sector',
          hasSubMenu: false,
          link: '/industries/government-public-sector',
        },
        {
          name: 'Manufacturing & Industrial',
          hasSubMenu: false,
          link: '/industries/manufacturing-industrial',
        },
        { name: 'Education & Training', hasSubMenu: false, link: '/industries/education-training' },
        {
          name: 'Retail & Consumer Goods',
          hasSubMenu: false,
          link: '/industries/retail-consumer-goods',
        },
        {
          name: 'Media & Telecommunications',
          hasSubMenu: false,
          link: '/industries/media-telecommunications',
        },
      ],
    },
    {
      name: 'Services',
      hasSubMenu: true,
      subItems: [
        {
          name: 'Management Consulting',
          hasSubMenu: false,
          link: '/services/management-consulting',
        },
        {
          name: 'Digital Transformation',
          hasSubMenu: false,
          link: '/services/digital-transformation',
        },
        {
          name: 'Organizational Development',
          hasSubMenu: false,
          link: '/services/organizational-development',
        },
        { name: 'Executive Search', hasSubMenu: false, link: '/services/executive-search' },
        { name: 'Talent Acquisition', hasSubMenu: false, link: '/services/talent-acquisition' },
        { name: 'HR Consulting', hasSubMenu: false, link: '/services/hr-consulting' },
      ],
    },
    {
      name: 'Staffing',
      hasSubMenu: true,
      subItems: [
        { name: 'Emiratisation', hasSubMenu: false, link: '/staffing#emiratisation' },
        {
          name: 'Permanent Recruitment',
          hasSubMenu: false,
          link: '/staffing#permanent-recruitment',
        },
        {
          name: 'Temporary Recruitment',
          hasSubMenu: false,
          link: '/staffing#temporary-recruitment',
        },
        { name: 'Bulk Hiring', hasSubMenu: false, link: '/staffing#bulk-hiring' },
        {
          name: 'Outsourcing Services',
          hasSubMenu: false,
          link: '/staffing#outsourcing-services',
        },
        { name: 'Advisory Services', hasSubMenu: false, link: '/staffing#advisory-services' },
      ],
    },
    {
      name: 'Insights',
      hasSubMenu: true,
      subItems: [
        { name: 'Industry Reports', hasSubMenu: false, link: '/insights/industry-reports' },
        { name: 'Talent Market Intelligence', hasSubMenu: false, link: '/insights/talent-market' },
        {
          name: 'Digital Transformation Trends',
          hasSubMenu: false,
          link: '/insights/digital-trends',
        },
        { name: 'Success Stories', hasSubMenu: false, link: '/insights/success-stories' },
        { name: 'Best Practices', hasSubMenu: false, link: '/insights/best-practices' },
      ],
    },
    {
      name: 'Locations',
      hasSubMenu: false,
      link: '/locations',
    },
    {
      name: 'Careers',
      hasSubMenu: true,
      subItems: [
        {
          name: 'Why Join VMMC',
          hasSubMenu: false,
          link: '/careers#why-vmmc',
        },
        {
          name: 'Open Positions',
          hasSubMenu: false,
          link: '/careers#open-positions',
        },
        {
          name: 'Application Process',
          hasSubMenu: false,
          link: '/careers#application-process',
        },
        {
          name: 'Our Global Team',
          hasSubMenu: false,
          link: '/careers#our-global-team',
        },
        {
          name: 'Professional Development',
          hasSubMenu: false,
          link: '/careers#professional-development',
        },
        {
          name: 'Employee Benefits',
          hasSubMenu: false,
          link: '/careers#employee-benefits',
        },
        {
          name: 'Life at VMMC',
          hasSubMenu: false,
          link: '/careers#life-at-vmmc',
        },
      ],
    },
    {
      name: 'About',
      hasSubMenu: true,
      subItems: [
        { name: 'About VMMC', hasSubMenu: false, link: '/about#company-intro' },
        {
          name: 'Our Mission & Vision',
          hasSubMenu: false,
          link: '/about#vision-mission',
        },
        { name: 'Global Presence', hasSubMenu: false, link: '/about#global-presence' },
        { name: 'Our Expertise', hasSubMenu: false, link: '/about#core-expertise' },
        { name: 'Leadership Team', hasSubMenu: false, link: '/about#leadership-team' },
        { name: 'Our Values', hasSubMenu: false, link: '/about#core-values' },
        { name: 'Certifications & Awards', hasSubMenu: false, link: '/about#certifications' },
      ],
    },
    {
      name: 'HOME',
      hasSubMenu: false,
      link: '/',
      isHome: true,
    },
  ]

  // Industries三级菜单项 - 每个行业页面的通用子导航
  const industriesThirdLevelItems = [
    'Industry Overview',
    'How We Help Clients',
    'Our Insights',
    'Our People',
    'Success Stories',
    'Contact Us',
  ]

  // Services页面的三级菜单项
  const servicesThirdLevelItems = [
    'Service Overview',
    'Our Approach',
    'Case Studies',
    'Our Experts',
    'Get Started',
  ]

  // 特殊菜单配置
  const specialMenuConfigs: {
    firstLevel: Record<string, any[]>
    secondLevel: Record<string, any[]>
    thirdLevel: Record<string, any[]>
  } = {
    // 一级菜单的特殊配置
    firstLevel: {},

    // 二级菜单的特殊配置
    secondLevel: {
      // Management Consulting 子服务
      'Services-Management Consulting': [
        { name: 'Strategic Planning', link: '/services/management-consulting/strategic-planning' },
        {
          name: 'Operational Excellence',
          link: '/services/management-consulting/operational-excellence',
        },
        { name: 'Change Management', link: '/services/management-consulting/change-management' },
        {
          name: 'Performance Improvement',
          link: '/services/management-consulting/performance-improvement',
        },
      ],

      // Digital Transformation 子服务
      'Services-Digital Transformation': [
        { name: 'Digital Strategy', link: '/services/digital-transformation/digital-strategy' },
        {
          name: 'Technology Implementation',
          link: '/services/digital-transformation/technology-implementation',
        },
        { name: 'Process Automation', link: '/services/digital-transformation/process-automation' },
        { name: 'Digital Culture', link: '/services/digital-transformation/digital-culture' },
      ],

      // Organizational Development 子服务
      'Services-Organizational Development': [
        {
          name: 'Organization Design',
          link: '/services/organizational-development/organization-design',
        },
        {
          name: 'Culture Transformation',
          link: '/services/organizational-development/culture-transformation',
        },
        {
          name: 'Leadership Development',
          link: '/services/organizational-development/leadership-development',
        },
        {
          name: 'Team Effectiveness',
          link: '/services/organizational-development/team-effectiveness',
        },
      ],

      // HR Consulting 子服务
      'Services-HR Consulting': [
        { name: 'HR Strategy & Planning', link: '/services/hr-consulting/hr-strategy-planning' },
        { name: 'Compensation & Benefits', link: '/services/hr-consulting/compensation-benefits' },
        { name: 'Performance Management', link: '/services/hr-consulting/performance-management' },
        { name: 'Learning & Development', link: '/services/hr-consulting/learning-development' },
      ],

      // Executive Search 子服务
      'Services-Executive Search': [
        { name: 'C-Suite Search', link: '/services/executive-search/c-suite-search' },
        { name: 'Board Search', link: '/services/executive-search/board-search' },
        { name: 'Functional Leadership', link: '/services/executive-search/functional-leadership' },
        { name: 'Succession Planning', link: '/services/executive-search/succession-planning' },
      ],

      // Talent Acquisition 子服务
      'Services-Talent Acquisition': [
        { name: 'Talent Strategy', link: '/services/talent-acquisition/talent-strategy' },
        { name: 'Recruitment Process Outsourcing', link: '/services/talent-acquisition/rpo' },
        { name: 'Employer Branding', link: '/services/talent-acquisition/employer-branding' },
        { name: 'Talent Analytics', link: '/services/talent-acquisition/talent-analytics' },
      ],
    },

    // 三级菜单配置
    thirdLevel: {},
  }

  return {
    menuItems,
    specialMenuConfigs,
    industriesThirdLevelItems,
    servicesThirdLevelItems,
  }
}
