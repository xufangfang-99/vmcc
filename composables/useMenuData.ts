import type { MenuItem } from '~/components/NavMenu.types'

export const useMenuData = () => {
  // 中文菜单数据
  const menuItems: MenuItem[] = [
    {
      name: '行业',
      hasSubMenu: true,
      subItems: [
        { name: '航空航天与国防', hasSubMenu: false },
        { name: '农业', hasSubMenu: false },
        { name: '汽车与装配', hasSubMenu: false },
        { name: '化工', hasSubMenu: false },
        { name: '消费品', hasSubMenu: false },
        {
          name: '教育',
          hasSubMenu: true,
          subItems: [
            { name: 'K12教育', hasSubMenu: false },
            { name: '高等教育', hasSubMenu: false },
            { name: '职业教育', hasSubMenu: false },
            { name: '在线教育', hasSubMenu: false },
            { name: '教育科技', hasSubMenu: false },
          ],
        },
        { name: '电力与天然气', hasSubMenu: false },
        { name: '能源与材料', hasSubMenu: false },
        { name: '工程建筑', hasSubMenu: false },
        {
          name: '金融服务',
          hasSubMenu: true,
          subItems: [
            { name: '银行业', hasSubMenu: false },
            { name: '保险业', hasSubMenu: false },
            { name: '资产管理', hasSubMenu: false },
            { name: '支付科技', hasSubMenu: false },
          ],
        },
        {
          name: '医疗健康',
          hasSubMenu: true,
          subItems: [
            { name: '医院管理', hasSubMenu: false },
            { name: '医疗器械', hasSubMenu: false },
            { name: '数字医疗', hasSubMenu: false },
            { name: '健康保险', hasSubMenu: false },
          ],
        },
        { name: '工业与电子', hasSubMenu: false },
        { name: '基础设施', hasSubMenu: false },
        { name: '生命科学', hasSubMenu: false },
        { name: '物流', hasSubMenu: false },
        { name: '金属与矿业', hasSubMenu: false },
        { name: '石油天然气', hasSubMenu: false },
        { name: '包装与造纸', hasSubMenu: false },
        { name: '私募股权', hasSubMenu: false },
        { name: '公共部门', hasSubMenu: false },
        { name: '房地产', hasSubMenu: false },
        {
          name: '零售',
          hasSubMenu: true,
          subItems: [
            { name: '线上零售', hasSubMenu: false },
            { name: '线下零售', hasSubMenu: false },
            { name: '新零售', hasSubMenu: false },
            { name: '奢侈品', hasSubMenu: false },
          ],
        },
        { name: '半导体', hasSubMenu: false },
        { name: '社会部门', hasSubMenu: false },
        {
          name: '科技媒体通信',
          hasSubMenu: true,
          subItems: [
            { name: '互联网', hasSubMenu: false },
            { name: '软件服务', hasSubMenu: false },
            { name: '通信运营商', hasSubMenu: false },
            { name: '媒体娱乐', hasSubMenu: false },
          ],
        },
        { name: '旅游', hasSubMenu: false },
      ],
    },
    {
      name: '能力',
      hasSubMenu: true,
      subItems: [
        {
          name: '人工智能',
          hasSubMenu: true,
          subItems: [
            { name: 'AI战略规划', hasSubMenu: false },
            { name: '机器学习', hasSubMenu: false },
            { name: '自然语言处理', hasSubMenu: false },
            { name: '计算机视觉', hasSubMenu: false },
            { name: 'AI伦理与治理', hasSubMenu: false },
          ],
        },
        { name: '业务构建', hasSubMenu: false },
        { name: '地缘政治', hasSubMenu: false },
        {
          name: '增长营销与销售',
          hasSubMenu: true,
          subItems: [
            { name: '数字营销', hasSubMenu: false },
            { name: '销售转型', hasSubMenu: false },
            { name: '客户体验', hasSubMenu: false },
            { name: '定价策略', hasSubMenu: false },
          ],
        },
        { name: '实施', hasSubMenu: false },
        { name: '并购', hasSubMenu: false },
        {
          name: '运营',
          hasSubMenu: true,
          subItems: [
            { name: '供应链管理', hasSubMenu: false },
            { name: '精益生产', hasSubMenu: false },
            { name: '质量管理', hasSubMenu: false },
            { name: '数字化运营', hasSubMenu: false },
          ],
        },
        { name: '风险与韧性', hasSubMenu: false },
        {
          name: '战略与企业金融',
          hasSubMenu: true,
          subItems: [
            { name: '企业战略', hasSubMenu: false },
            { name: '业务组合策略', hasSubMenu: false },
            { name: '企业金融', hasSubMenu: false },
            { name: '价值创造', hasSubMenu: false },
          ],
        },
        { name: '人员与组织绩效', hasSubMenu: false },
        {
          name: '可持续发展',
          hasSubMenu: true,
          subItems: [
            { name: '碳中和战略', hasSubMenu: false },
            { name: 'ESG管理', hasSubMenu: false },
            { name: '循环经济', hasSubMenu: false },
            { name: '绿色金融', hasSubMenu: false },
          ],
        },
        {
          name: '技术',
          hasSubMenu: true,
          subItems: [
            { name: '云计算', hasSubMenu: false },
            { name: '网络安全', hasSubMenu: false },
            { name: '数据架构', hasSubMenu: false },
            { name: 'IT现代化', hasSubMenu: false },
            { name: '技术战略', hasSubMenu: false },
          ],
        },
        { name: '转型', hasSubMenu: false },
      ],
      featured: {
        title: '特色内容',
        items: [
          {
            name: '麦肯锡科技与AI',
            description:
              '我们帮助客户大规模释放AI的力量，实现技术交付现代化，并建立新业务以推动增长。',
            link: '/capabilities/tech-ai',
          },
        ],
      },
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
      name: '地点',
      hasSubMenu: false,
    },
    {
      name: '职业发展',
      hasSubMenu: true,
      subItems: [
        { name: '首页', hasSubMenu: false },
        { name: '探索', hasSubMenu: false },
        {
          name: '职位',
          hasSubMenu: true,
          subItems: [
            { name: '咨询顾问', hasSubMenu: false },
            { name: '数据分析师', hasSubMenu: false },
            { name: '产品经理', hasSubMenu: false },
            { name: '项目经理', hasSubMenu: false },
            { name: '实习生', hasSubMenu: false },
          ],
        },
        {
          name: '面试准备',
          hasSubMenu: true,
          subItems: [
            { name: '案例面试', hasSubMenu: false },
            { name: '行为面试', hasSubMenu: false },
            { name: '模拟面试', hasSubMenu: false },
            { name: '面试技巧', hasSubMenu: false },
          ],
        },
        { name: '我们的员工', hasSubMenu: false },
        {
          name: '学生专区',
          hasSubMenu: true,
          subItems: [
            { name: '暑期实习', hasSubMenu: false },
            { name: '校园招聘', hasSubMenu: false },
            { name: '奖学金计划', hasSubMenu: false },
            { name: '学生活动', hasSubMenu: false },
          ],
        },
        { name: '技术职业', hasSubMenu: false },
        { name: '咨询之外的职业', hasSubMenu: false },
        { name: '经验丰富的专业人士', hasSubMenu: false },
      ],
    },
    {
      name: '关于我们',
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
      name: '麦肯锡博客',
      hasSubMenu: false,
    },
  ]

  // 特殊菜单配置
  const specialMenuConfigs: {
    firstLevel: Record<string, any[]>
    secondLevel: Record<string, any[]>
  } = {
    // 一级菜单的特殊配置
    firstLevel: {
      地点: [
        {
          name: '亚太地区',
          hasSubMenu: true,
          subItems: [
            { name: '中国大陆', link: '/locations/china' },
            { name: '香港', link: '/locations/hongkong' },
            { name: '台湾', link: '/locations/taiwan' },
            { name: '日本', link: '/locations/japan' },
            { name: '韩国', link: '/locations/korea' },
            { name: '新加坡', link: '/locations/singapore' },
          ],
        },
        {
          name: '北美',
          hasSubMenu: true,
          subItems: [
            { name: '美国', link: '/locations/usa' },
            { name: '加拿大', link: '/locations/canada' },
            { name: '墨西哥', link: '/locations/mexico' },
          ],
        },
        {
          name: '欧洲',
          hasSubMenu: true,
          subItems: [
            { name: '英国', link: '/locations/uk' },
            { name: '德国', link: '/locations/germany' },
            { name: '法国', link: '/locations/france' },
          ],
        },
        { name: '其他地区', link: '/locations/others' },
      ],
      麦肯锡博客: [
        { name: '最新文章', link: '/blog/latest' },
        { name: '行业洞察', link: '/blog/industry' },
        { name: '技术前沿', link: '/blog/technology' },
        { name: '管理思维', link: '/blog/management' },
        { name: '案例分享', link: '/blog/cases' },
        { name: '作者专栏', link: '/blog/authors' },
      ],
    },
    // 二级菜单的特殊配置
    secondLevel: {
      '行业-农业': [
        { name: '智慧农业', link: '/industries/agriculture/smart' },
        { name: '农业科技', link: '/industries/agriculture/tech' },
        { name: '供应链优化', link: '/industries/agriculture/supply-chain' },
        { name: '可持续农业', link: '/industries/agriculture/sustainable' },
      ],
      '行业-化工': [
        { name: '精细化工', link: '/industries/chemicals/fine' },
        { name: '基础化工', link: '/industries/chemicals/basic' },
        { name: '新材料', link: '/industries/chemicals/materials' },
        { name: '绿色化工', link: '/industries/chemicals/green' },
      ],
      '行业-消费品': [
        { name: '食品饮料', link: '/industries/consumer/food' },
        { name: '个人护理', link: '/industries/consumer/personal-care' },
        { name: '家居用品', link: '/industries/consumer/home' },
        { name: '时尚服饰', link: '/industries/consumer/fashion' },
      ],
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
  }

  return {
    menuItems,
    specialMenuConfigs,
  }
}
