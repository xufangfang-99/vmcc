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
          name: 'Information Technology',
          hasSubMenu: false,
          link: '/industries/information-technology',
        },
        {
          name: 'Construction & Engineering',
          hasSubMenu: false,
          link: '/industries/construction-engineering',
        },
        {
          name: 'Manufacturing & Industrial',
          hasSubMenu: false,
          link: '/industries/manufacturing-industrial',
        },
        {
          name: 'Hospitality & Travel',
          hasSubMenu: false,
          link: '/industries/hospitality-travel',
        },
        {
          name: 'Retail & Consumer Products',
          hasSubMenu: false,
          link: '/industries/retail-consumer-products',
        },
        {
          name: 'Education & Training',
          hasSubMenu: false,
          link: '/industries/education-training',
        },
        {
          name: 'Legal & Professional Services',
          hasSubMenu: false,
          link: '/industries/legal-professional-services',
        },
        {
          name: 'Insurance & Risk Management',
          hasSubMenu: false,
          link: '/industries/insurance-risk-management',
        },
        {
          name: 'Shipping & Logistics',
          hasSubMenu: false,
          link: '/industries/shipping-logistics',
        },
      ],
    },
    {
      name: 'Services',
      hasSubMenu: true,
      subItems: [
        {
          name: 'Recruitment Services',
          hasSubMenu: false,
          link: '/services/recruitment-services',
        },
        {
          name: 'Executive Search',
          hasSubMenu: false,
          link: '/services/executive-search',
        },
        {
          name: 'HR Consulting',
          hasSubMenu: false,
          link: '/services/hr-consulting',
        },
        {
          name: 'Talent Management',
          hasSubMenu: false,
          link: '/services/talent-management',
        },
        {
          name: 'Organizational Development',
          hasSubMenu: false,
          link: '/services/organizational-development',
        },
        {
          name: 'Training & Development',
          hasSubMenu: false,
          link: '/services/training-development',
        },
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
          name: 'Recruitment Trends',
          hasSubMenu: false,
          link: '/insights/recruitment-trends',
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
    'Our Services',
    'Key Roles We Fill',
    'Success Stories',
    'Market Intelligence',
    'Contact Specialists',
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
      // Recruitment Services 子服务
      'Services-Recruitment Services': [
        { name: 'Executive Search', link: '/services/recruitment-services/executive-search' },
        { name: 'Middle Management', link: '/services/recruitment-services/middle-management' },
        { name: 'Specialist Roles', link: '/services/recruitment-services/specialist-roles' },
        {
          name: 'Graduate Recruitment',
          link: '/services/recruitment-services/graduate-recruitment',
        },
      ],

      // HR Consulting 子服务
      'Services-HR Consulting': [
        { name: 'HR Strategy & Planning', link: '/services/hr-consulting/hr-strategy-planning' },
        { name: 'Compensation & Benefits', link: '/services/hr-consulting/compensation-benefits' },
        { name: 'Performance Management', link: '/services/hr-consulting/performance-management' },
        { name: 'Policy Development', link: '/services/hr-consulting/policy-development' },
      ],

      // Executive Search 子服务
      'Services-Executive Search': [
        { name: 'C-Suite Search', link: '/services/executive-search/c-suite-search' },
        { name: 'Board Search', link: '/services/executive-search/board-search' },
        { name: 'Functional Leadership', link: '/services/executive-search/functional-leadership' },
        { name: 'Succession Planning', link: '/services/executive-search/succession-planning' },
      ],

      // Talent Management 子服务
      'Services-Talent Management': [
        { name: 'Talent Assessment', link: '/services/talent-management/talent-assessment' },
        { name: 'Career Development', link: '/services/talent-management/career-development' },
        {
          name: 'Leadership Development',
          link: '/services/talent-management/leadership-development',
        },
        { name: 'Skills Gap Analysis', link: '/services/talent-management/skills-gap-analysis' },
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
          name: 'Change Management',
          link: '/services/organizational-development/change-management',
        },
        {
          name: 'Team Effectiveness',
          link: '/services/organizational-development/team-effectiveness',
        },
      ],

      // Training & Development 子服务
      'Services-Training & Development': [
        { name: 'Leadership Training', link: '/services/training-development/leadership-training' },
        { name: 'Skills Development', link: '/services/training-development/skills-development' },
        { name: 'Compliance Training', link: '/services/training-development/compliance-training' },
        { name: 'Custom Programs', link: '/services/training-development/custom-programs' },
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
