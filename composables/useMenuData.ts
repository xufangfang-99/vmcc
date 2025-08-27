import type { MenuItem } from '~/components/NavMenu.types'

export const useMenuData = () => {
  const menuItems: MenuItem[] = [
    {
      name: 'Industries',
      hasSubMenu: true,
      subItems: [
        { name: 'Aerospace Defense', hasSubMenu: false, link: '/industries/aerospace-defense' },
        { name: 'Agriculture', hasSubMenu: false, link: '/industries/agriculture' },
        {
          name: 'Automotive & Assembly',
          hasSubMenu: false,
          link: '/industries/automotive-assembly',
        },
        { name: 'Chemicals', hasSubMenu: false, link: '/industries/chemicals' },
        {
          name: 'Consumer Packaged Goods',
          hasSubMenu: false,
          link: '/industries/consumer-packaged-goods',
        },
        { name: 'Education', hasSubMenu: false, link: '/industries/education' },
        {
          name: 'Electric Power & Natural Gas',
          hasSubMenu: false,
          link: '/industries/electric-power-natural-gas',
        },
        { name: 'Energy and Materials', hasSubMenu: false, link: '/industries/energy-materials' },
        {
          name: 'Engineering, Construction & Building Materials',
          hasSubMenu: false,
          link: '/industries/engineering-construction-building-materials',
        },
        { name: 'Financial Services', hasSubMenu: false, link: '/industries/financial-services' },
        { name: 'Healthcare', hasSubMenu: false, link: '/industries/healthcare' },
        {
          name: 'Industrials & Electronics',
          hasSubMenu: false,
          link: '/industries/industrials-electronics',
        },
        { name: 'Infrastructure', hasSubMenu: false, link: '/industries/infrastructure' },
        { name: 'Life Sciences', hasSubMenu: false, link: '/industries/life-sciences' },
        { name: 'Logistics', hasSubMenu: false, link: '/industries/logistics' },
        { name: 'Metals & Mining', hasSubMenu: false, link: '/industries/metals-mining' },
        { name: 'Oil & Gas', hasSubMenu: false, link: '/industries/oil-gas' },
        { name: 'Packaging & Paper', hasSubMenu: false, link: '/industries/packaging-paper' },
        { name: 'Private Capital', hasSubMenu: false, link: '/industries/private-capital' },
        { name: 'Public Sector', hasSubMenu: false, link: '/industries/public-sector' },
        { name: 'Real Estate', hasSubMenu: false, link: '/industries/real-estate' },
        { name: 'Retail', hasSubMenu: false, link: '/industries/retail' },
        { name: 'Semiconductors', hasSubMenu: false, link: '/industries/semiconductors' },
        { name: 'Social Sector', hasSubMenu: false, link: '/industries/social-sector' },
        {
          name: 'Technology, Media & Telecommunications',
          hasSubMenu: false,
          link: '/industries/technology-media-telecommunications',
        },
        { name: 'Travel', hasSubMenu: false, link: '/industries/travel' },
      ],
    },
    {
      name: 'Timeline',
      hasSubMenu: false,
      link: '/timeline',
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
      name: '洞察',
      hasSubMenu: true,
      subItems: [
        {
          title: '热门话题',
          name: '热门话题',
          isGroup: true,
          hasSubMenu: false,
          subItems: [
            { name: '人工智能与生成式AI', hasSubMenu: false },
            { name: '商业韧性', hasSubMenu: false },
            { name: '案例研究', hasSubMenu: false },
            { name: 'CEO卓越领导力', hasSubMenu: false },
            { name: '地缘政治', hasSubMenu: false },
            { name: '关税与全球贸易', hasSubMenu: false },
          ],
        },
        {
          title: '探索',
          name: '探索',
          isGroup: true,
          hasSubMenu: false,
          subItems: [
            { name: '作者访谈', hasSubMenu: false },
            { name: '全球调研', hasSubMenu: false },
            { name: '麦肯锡解读', hasSubMenu: false },
            { name: '麦肯锡直播', hasSubMenu: false },
            { name: '麦肯锡书评', hasSubMenu: false },
            { name: '麦肯锡人物传记', hasSubMenu: false },
            { name: '麦肯锡播客', hasSubMenu: false },
            { name: '麦肯锡主题', hasSubMenu: false },
            { name: '麦肯锡视频', hasSubMenu: false },
            { name: '一周图表', hasSubMenu: false },
          ],
        },
      ],
      featured: {
        title: '特色内容',
        items: [
          {
            name: '问麦肯锡',
            description:
              '基于麦肯锡洞察，获取您关心问题的答案。这个新的AI聊天机器人试点涵盖数字、AI、技术、媒体和电信。',
            link: '/insights/ask-mckinsey',
          },
          {
            name: '麦肯锡季刊',
            description: '自1964年以来，我们的旗舰商业出版物一直在定义和影响高级管理议程。',
            link: '/insights/mckinsey-quarterly',
          },
          {
            name: '麦肯锡全球研究院',
            description: '我们的使命是帮助多个部门的领导者更深入地了解全球经济。',
            link: '/insights/mgi',
          },
        ],
      },
      exploreLink: {
        text: '探索我们的洞察',
        url: '/insights',
      },
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
        { name: 'Career Home', hasSubMenu: false },
        { name: 'Why VMMC', hasSubMenu: false },
        {
          name: 'Open Positions',
          hasSubMenu: true,
          subItems: [
            { name: 'Senior Recruitment Consultants', hasSubMenu: false },
            { name: 'HR Business Partners', hasSubMenu: false },
            { name: 'Talent Acquisition Specialists', hasSubMenu: false },
            { name: 'Client Relationship Managers', hasSubMenu: false },
            { name: 'Regional Business Directors', hasSubMenu: false },
          ],
        },
        {
          name: 'Application Process',
          hasSubMenu: true,
          subItems: [
            { name: 'How to Apply', hasSubMenu: false },
            { name: 'Interview Process', hasSubMenu: false },
            { name: 'Assessment & Evaluation', hasSubMenu: false },
            { name: 'Recruitment FAQs', hasSubMenu: false },
          ],
        },
        { name: 'Our Global Team', hasSubMenu: false },
        { name: 'Professional Development', hasSubMenu: false },
        { name: 'Employee Benefits', hasSubMenu: false },
        { name: 'Life at VMMC', hasSubMenu: false },
      ],
    },
    {
      name: 'About',
      hasSubMenu: true,
      subItems: [
        { name: 'About VMMC', hasSubMenu: false, link: '/about#company-intro' },
        {
          name: 'Global Vision, Local Expertise',
          hasSubMenu: false,
          link: '/about#vision-mission',
        },
        { name: 'Global Presence', hasSubMenu: false, link: '/about#global-presence' },
        { name: 'Our Core Expertise', hasSubMenu: false, link: '/about#core-expertise' },
        {
          name: 'Commitment to Excellence',
          hasSubMenu: false,
          link: '/about#commitment-excellence',
        },
        { name: 'Leadership Team', hasSubMenu: false, link: '/about#leadership-team' },
        { name: 'Our Core Values', hasSubMenu: false, link: '/about#core-values' },
        { name: 'Certifications & Standards', hasSubMenu: false, link: '/about#certifications' },
      ],
    },
    {
      name: 'HOME',
      hasSubMenu: false,
      link: '/',
      isHome: true,
    },
  ]

  // Industries 三级菜单项 - 直接导航到页面，不需要四级菜单
  const industriesThirdLevelItems = [
    'How We Help Clients',
    'Our Insights',
    'Our People',
    'Contact Us',
  ]

  // 特殊菜单配置 - 移除地点相关配置
  const specialMenuConfigs: {
    firstLevel: Record<string, any[]>
    secondLevel: Record<string, any[]>
    thirdLevel: Record<string, any[]>
  } = {
    // 一级菜单的特殊配置 - 移除地点配置
    firstLevel: {
      // 移除地点的特殊配置，让它使用默认导航
    },

    // 二级菜单的特殊配置
    secondLevel: {
      '能力-业务构建': [
        { name: '商业模式创新', link: '/capabilities/business-building/model' },
        { name: '创业孵化', link: '/capabilities/business-building/incubation' },
        { name: '数字化产品', link: '/capabilities/business-building/digital' },
        { name: '生态系统构建', link: '/capabilities/business-building/ecosystem' },
      ],
      '能力-实施': [
        { name: '变革管理', link: '/capabilities/implementation/change' },
        { name: '项目管理', link: '/capabilities/implementation/project' },
        { name: '敏捷转型', link: '/capabilities/implementation/agile' },
        { name: '绩效改进', link: '/capabilities/implementation/performance' },
      ],
      '能力-并购': [
        { name: '尽职调查', link: '/capabilities/ma/due-diligence' },
        { name: '并购战略', link: '/capabilities/ma/strategy' },
        { name: '整合管理', link: '/capabilities/ma/integration' },
        { name: '价值创造', link: '/capabilities/ma/value-creation' },
      ],
      '能力-风险与韧性': [
        { name: '风险评估', link: '/capabilities/risk/assessment' },
        { name: '危机管理', link: '/capabilities/risk/crisis' },
        { name: '业务连续性', link: '/capabilities/risk/continuity' },
        { name: '合规管理', link: '/capabilities/risk/compliance' },
      ],
      '洞察-案例研究': [
        { name: '数字化转型案例', link: '/insights/cases/digital' },
        { name: '组织变革案例', link: '/insights/cases/organization' },
        { name: '战略规划案例', link: '/insights/cases/strategy' },
        { name: '运营优化案例', link: '/insights/cases/operations' },
      ],
      '洞察-人工智能与生成式AI': [
        { name: 'ChatGPT应用', link: '/insights/ai/chatgpt' },
        { name: '企业AI战略', link: '/insights/ai/enterprise' },
        { name: 'AI风险管理', link: '/insights/ai/risk' },
        { name: 'AI投资趋势', link: '/insights/ai/investment' },
      ],
      '洞察-商业韧性': [
        { name: '供应链韧性', link: '/insights/resilience/supply-chain' },
        { name: '组织韧性', link: '/insights/resilience/organization' },
        { name: '财务韧性', link: '/insights/resilience/financial' },
        { name: '数字韧性', link: '/insights/resilience/digital' },
      ],
      '职业发展-我们的员工': [
        { name: '员工故事', link: '/careers/people/stories' },
        { name: '职业路径', link: '/careers/people/paths' },
        { name: '培训发展', link: '/careers/people/training' },
        { name: '多元文化', link: '/careers/people/diversity' },
      ],
      '职业发展-技术职业': [
        { name: '软件工程师', link: '/careers/tech/software' },
        { name: '数据科学家', link: '/careers/tech/data' },
        { name: '产品设计师', link: '/careers/tech/design' },
        { name: '技术架构师', link: '/careers/tech/architect' },
      ],
      '职业发展-咨询之外的职业': [
        { name: '投资机构', link: '/careers/beyond/investment' },
        { name: '创业公司', link: '/careers/beyond/startup' },
        { name: '企业高管', link: '/careers/beyond/executive' },
        { name: '公共部门', link: '/careers/beyond/public' },
      ],
    },

    // 三级菜单配置 - 不再需要为 Industries 生成四级菜单
    thirdLevel: {},
  }

  return {
    menuItems,
    specialMenuConfigs,
    industriesThirdLevelItems,
  }
}
