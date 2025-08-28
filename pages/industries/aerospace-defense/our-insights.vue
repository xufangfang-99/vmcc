// 特色洞察数据 - 聚焦HR和人才管理 const featuredInsights = [ { title: 'Security Clearance Talent
Pipeline: Building Tomorrow\'s Defense Workforce', description: 'Strategic approaches to
identifying, developing, and retaining professionals with security clearances for critical defense
programs.', type: 'Talent Strategy', image:
'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', authors: ['VMMC Defense
Practice', 'Security Clearance Team'], date: 'Dec 2024', readTime: 8, }, { title: 'Aerospace
Engineering Talent Shortage: Recruitment Solutions That Work', description: 'How leading aerospace
companies are overcoming engineering talent shortages through innovative recruitment strategies and
employer branding.', type: 'Market Analysis', image:
'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80', authors: ['Technical
Recruiting Team'], date: 'Nov 2024', readTime: 12, }, { title: 'Executive Leadership in Space
Economy: What It Takes to Lead', description: 'Competency frameworks and leadership profiles for
executives driving growth in the rapidly evolving commercial space sector.', type: 'Executive
Search', image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80', authors:
['Executive Search Practice'], date: 'Oct 2024', readTime: 6, }, { title: 'Compliance-First HR:
Managing Workforce in Regulated Defense Environments', description: 'HR compliance strategies for
defense contractors navigating ITAR, EAR, and security requirements in talent management.', type:
'Compliance & HR', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
authors: ['HR Consulting Team'], date: 'Oct 2024', readTime: 10, }, { title: 'Succession Planning
for Mission-Critical Aerospace Programs', description: 'Knowledge
<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- 页面头部 -->
    <div
      class="relative py-20 md:py-32 overflow-hidden min-h-[70vh] md:min-h-[75vh] flex items-center"
    >
      <!-- 背景图片层 -->
      <div class="absolute inset-0">
        <OptImage
          src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&q=80"
          alt="Aerospace Insights Background"
          class="w-full h-full object-cover object-center"
        />
        <!-- 渐变遮罩层 -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"
        ></div>
      </div>

      <!-- 背景装饰 -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 right-20 w-40 h-40 rounded-full opacity-5"
          :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
        ></div>
        <div
          class="absolute bottom-32 left-20 w-24 h-24 rounded-full opacity-5"
          :style="{ backgroundColor: 'var(--tm-accent-secondary)' }"
        ></div>
      </div>

      <div class="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 text-center w-full">
        <!-- 面包屑导航 -->
        <div
          class="flex items-center justify-center flex-wrap gap-2 md:gap-3 text-xs sm:text-sm bg-white/10 backdrop-blur-md px-4 py-2.5 md:px-6 md:py-3 rounded-full border border-white/20 w-fit mx-auto mb-8 animate-fade-in-up"
        >
          <NuxtLink
            to="/"
            class="text-white/80 hover:text-blue-400 transition-colors duration-300 font-medium hover:drop-shadow-md active:scale-95 transform transition-transform"
          >
            Home
          </NuxtLink>
          <span class="text-white/50 font-light">/</span>
          <NuxtLink
            to="/industries"
            class="text-white/80 hover:text-blue-400 transition-colors duration-300 font-medium hover:drop-shadow-md active:scale-95 transform transition-transform"
          >
            Industries
          </NuxtLink>
          <span class="text-white/50 font-light">/</span>
          <NuxtLink
            to="/industries/aerospace-defense"
            class="text-white/80 hover:text-blue-400 transition-colors duration-300 font-medium hover:drop-shadow-md active:scale-95 transform transition-transform"
          >
            Aerospace & Defense
          </NuxtLink>
          <span class="text-white/50 font-light">/</span>
          <span class="text-blue-400 font-semibold drop-shadow-sm text-center">Our Insights</span>
        </div>

        <!-- 标题 -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 md:mb-8 text-white tracking-tight leading-[0.95] md:leading-[0.9] drop-shadow-2xl animate-fade-in-up animation-delay-200 px-2 md:px-0"
        >
          Our Insights
        </h1>

        <!-- 副标题 -->
        <p
          class="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-full md:max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up animation-delay-400 px-4 md:px-0"
        >
          VMMC's expertise in aerospace and defense talent solutions: industry insights, workforce
          trends, and strategic HR perspectives
        </p>
      </div>
    </div>

    <!-- 洞察内容区域 -->
    <div class="py-16 md:py-24 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-[1400px] mx-auto px-4 md:px-8">
        <!-- 特色洞察 -->
        <div class="mb-20">
          <h2
            class="text-3xl md:text-4xl font-light mb-12 text-center"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            Featured Insights
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 主要洞察文章 -->
            <div
              v-for="(insight, index) in featuredInsights"
              :key="insight.title"
              class="group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 animate-fade-in-up"
              :style="{
                backgroundColor: 'var(--tm-bg-primary)',
                border: '1px solid var(--tm-bd-card)',
                animationDelay: `${index * 0.1}s`,
              }"
            >
              <!-- 文章图片 -->
              <div class="relative h-48 overflow-hidden">
                <OptImage
                  :src="insight.image"
                  :alt="insight.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <!-- 文章类型标签 -->
                <div class="absolute top-4 left-4">
                  <span
                    class="px-3 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full"
                  >
                    {{ insight.type }}
                  </span>
                </div>
              </div>

              <!-- 文章内容 -->
              <div class="p-6">
                <h3
                  class="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-[var(--tm-accent-primary)] transition-colors"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                >
                  {{ insight.title }}
                </h3>
                <p
                  class="text-sm mb-4 line-clamp-3 leading-relaxed"
                  :style="{ color: 'var(--tm-txt-secondary)' }"
                >
                  {{ insight.description }}
                </p>

                <!-- 作者和日期 -->
                <div class="flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2">
                    <span
                      :style="{ color: 'var(--tm-accent-primary)' }"
                      class="font-medium"
                    >
                      {{ insight.authors.join(', ') }}
                    </span>
                  </div>
                  <span :style="{ color: 'var(--tm-txt-light)' }">
                    {{ insight.date }}
                  </span>
                </div>

                <!-- 阅读时间 -->
                <div
                  class="mt-3 pt-3 border-t"
                  :style="{ borderColor: 'var(--tm-bd-light)' }"
                >
                  <span
                    class="text-xs"
                    :style="{ color: 'var(--tm-txt-light)' }"
                  >
                    {{ insight.readTime }} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 洞察分类 -->
        <div class="mb-20">
          <h2
            class="text-3xl md:text-4xl font-light mb-12 text-center"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            Explore by Topic
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- 分类卡片 -->
            <div
              v-for="(category, index) in insightCategories"
              :key="category.name"
              class="group p-6 rounded-xl text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 cursor-pointer animate-fade-in-up"
              :style="{
                backgroundColor: 'var(--tm-bg-primary)',
                border: '1px solid var(--tm-bd-card)',
                animationDelay: `${index * 0.1}s`,
              }"
            >
              <div
                class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                :style="{ backgroundColor: category.color }"
              >
                <div
                  :class="category.icon"
                  class="text-white text-2xl"
                ></div>
              </div>
              <h3
                class="text-lg font-semibold mb-2 group-hover:text-[var(--tm-accent-primary)] transition-colors"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                {{ category.name }}
              </h3>
              <p
                class="text-sm mb-3"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                {{ category.description }}
              </p>
              <div
                class="text-xs"
                :style="{ color: 'var(--tm-accent-primary)' }"
              >
                {{ category.articleCount }} articles
              </div>
            </div>
          </div>
        </div>

        <!-- 最新洞察 -->
        <div class="mb-20">
          <h2
            class="text-3xl md:text-4xl font-light mb-12 text-center"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            Latest Research
          </h2>

          <div class="space-y-6">
            <!-- 文章列表 -->
            <div
              v-for="(article, index) in latestResearch"
              :key="article.title"
              class="group p-6 rounded-xl transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] animate-fade-in-up"
              :style="{
                backgroundColor: 'var(--tm-bg-primary)',
                border: '1px solid var(--tm-bd-card)',
                animationDelay: `${index * 0.1}s`,
              }"
            >
              <div class="flex flex-col md:flex-row gap-6">
                <!-- 文章图片 -->
                <div class="md:w-64 h-40 flex-shrink-0">
                  <OptImage
                    :src="article.image"
                    :alt="article.title"
                    class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <!-- 文章信息 -->
                <div class="flex-1">
                  <div class="flex items-start justify-between mb-3">
                    <div>
                      <span
                        class="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                        :style="{
                          backgroundColor: 'var(--tm-bg-badge)',
                          color: 'var(--tm-accent-primary)',
                        }"
                      >
                        {{ article.category }}
                      </span>
                      <h3
                        class="text-xl md:text-2xl font-semibold mb-2 group-hover:text-[var(--tm-accent-primary)] transition-colors"
                        :style="{ color: 'var(--tm-txt-primary)' }"
                      >
                        {{ article.title }}
                      </h3>
                    </div>
                  </div>

                  <p
                    class="text-base mb-4 line-clamp-2"
                    :style="{ color: 'var(--tm-txt-secondary)' }"
                  >
                    {{ article.description }}
                  </p>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4 text-sm">
                      <span
                        :style="{ color: 'var(--tm-accent-primary)' }"
                        class="font-medium"
                      >
                        {{ article.authors.join(', ') }}
                      </span>
                      <span :style="{ color: 'var(--tm-txt-light)' }">
                        {{ article.date }}
                      </span>
                      <span :style="{ color: 'var(--tm-txt-light)' }">
                        {{ article.readTime }} min read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 行业报告 -->
        <div class="mb-20">
          <h2
            class="text-3xl md:text-4xl font-light mb-12 text-center"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            Industry Reports
          </h2>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- 报告卡片 -->
            <div
              v-for="(report, index) in industryReports"
              :key="report.title"
              class="group p-8 rounded-xl transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 relative overflow-hidden animate-fade-in-up"
              :style="{
                background: `linear-gradient(135deg, ${report.gradientFrom}, ${report.gradientTo})`,
                animationDelay: `${index * 0.2}s`,
              }"
            >
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16"
              ></div>

              <div class="relative z-10">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4"
                  >
                    <div
                      :class="report.icon"
                      class="text-white text-xl"
                    ></div>
                  </div>
                  <div>
                    <span class="text-white/80 text-sm">{{ report.type }}</span>
                    <h3 class="text-white text-xl font-semibold">{{ report.title }}</h3>
                  </div>
                </div>

                <p class="text-white/90 mb-6 leading-relaxed">
                  {{ report.description }}
                </p>

                <div class="flex items-center justify-between">
                  <div class="text-white/80 text-sm">
                    {{ report.pages }} pages • {{ report.publishDate }}
                  </div>
                  <button
                    class="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <FooterSection />
  </div>
</template>

<script setup>
  import FooterSection from '~/components/Home/FooterSection.vue'

  // 页面配置
  definePageMeta({
    layout: 'default',
  })

  // SEO 设置
  useHead({
    title: 'Our Insights - Aerospace & Defense - VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Strategic perspectives and innovative solutions shaping the future of aerospace and defense industry.',
      },
      {
        name: 'keywords',
        content:
          'aerospace insights, defense strategy, industry analysis, aviation trends, space technology',
      },
    ],
  })

  // 特色洞察数据
  const featuredInsights = [
    {
      title: 'The future of sustainable aviation: Navigating the path to net-zero emissions',
      description:
        'Exploring technological breakthroughs, policy frameworks, and industry partnerships required to achieve carbon neutrality in aviation by 2050.',
      type: 'Analysis',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
      authors: ['Michael Chen', 'Sarah Williams'],
      date: 'Dec 2024',
      readTime: 8,
    },
    {
      title: 'Defense supply chain resilience in an uncertain world',
      description:
        'Strategic approaches to building robust, flexible supply chains that can withstand geopolitical disruptions and technological changes.',
      type: 'Report',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      authors: ['David Johnson', 'Lisa Zhang'],
      date: 'Nov 2024',
      readTime: 12,
    },
    {
      title: 'Space economy: Commercial opportunities beyond Earth',
      description:
        'Market analysis of emerging space sectors including satellite services, space tourism, and asteroid mining ventures.',
      type: 'Market Research',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
      authors: ['Ahmed Hassan', 'Jennifer Lee'],
      date: 'Oct 2024',
      readTime: 6,
    },
    {
      title: 'AI and autonomous systems in modern warfare',
      description:
        'Examining the integration of artificial intelligence and unmanned systems in defense operations and their strategic implications.',
      type: 'Technology Brief',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80',
      authors: ['Robert Kim', 'Maria Rodriguez'],
      date: 'Oct 2024',
      readTime: 10,
    },
    {
      title: 'Urban air mobility: The next frontier in transportation',
      description:
        'Regulatory, technological, and market factors shaping the development of electric vertical takeoff and landing aircraft for urban transport.',
      type: 'Industry Update',
      image: 'https://images.unsplash.com/photo-1569629286942-8eb5b1ca8dfc?w=800&q=80',
      authors: ['Tom Anderson', 'Priya Patel'],
      date: 'Sep 2024',
      readTime: 7,
    },
    {
      title: 'Cybersecurity challenges in connected aerospace systems',
      description:
        'Addressing vulnerabilities and building robust security frameworks for increasingly digital and networked aviation infrastructure.',
      type: 'Security Analysis',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      authors: ['Elena Volkov', 'James Miller'],
      date: 'Sep 2024',
      readTime: 9,
    },
  ]

  // 洞察分类
  const insightCategories = [
    {
      name: 'Strategy & Operations',
      description: 'Strategic planning and operational excellence insights',
      icon: 'i-carbon-strategy',
      color: '#1890FF',
      articleCount: 24,
    },
    {
      name: 'Technology & Innovation',
      description: 'Latest tech trends and innovation strategies',
      icon: 'i-carbon-innovation',
      color: '#52C41A',
      articleCount: 18,
    },
    {
      name: 'Market Analysis',
      description: 'Industry trends and market intelligence',
      icon: 'i-carbon-analytics',
      color: '#FA8C16',
      articleCount: 15,
    },
    {
      name: 'Sustainability',
      description: 'Environmental impact and green technologies',
      icon: 'i-carbon-earth',
      color: '#13C2C2',
      articleCount: 12,
    },
  ]

  // 最新研究
  const latestResearch = [
    {
      title: 'Global aerospace manufacturing outlook 2025: Trends and opportunities',
      description:
        'Comprehensive analysis of manufacturing trends, capacity utilization, and emerging opportunities across major aerospace markets worldwide.',
      category: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      authors: ['Global Research Team'],
      date: 'Jan 2025',
      readTime: 15,
    },
    {
      title: 'Digital transformation in defense procurement: Lessons from leading organizations',
      description:
        'Case studies and best practices from defense organizations successfully implementing digital procurement solutions to improve efficiency and transparency.',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      authors: ['Technology Practice'],
      date: 'Dec 2024',
      readTime: 11,
    },
    {
      title: 'Workforce of the future: Skills and talent strategies for aerospace companies',
      description:
        'Addressing the skills gap in aerospace through strategic workforce planning, training programs, and talent acquisition strategies.',
      category: 'Human Capital',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
      authors: ['People & Performance'],
      date: 'Nov 2024',
      readTime: 8,
    },
  ]

  // 行业报告
  const industryReports = [
    {
      title: 'Aerospace & Defense Industry Report 2025',
      description:
        'Comprehensive analysis of market trends, competitive landscape, and strategic opportunities in the global A&D sector.',
      type: 'Annual Report',
      icon: 'i-carbon-document',
      pages: 120,
      publishDate: 'January 2025',
      gradientFrom: '#667eea',
      gradientTo: '#764ba2',
    },
    {
      title: 'Defense Technology Trends 2025',
      description:
        'Deep dive into emerging defense technologies, their strategic implications, and investment priorities for defense contractors.',
      type: 'Technology Report',
      icon: 'i-carbon-tool-kit',
      pages: 85,
      publishDate: 'December 2024',
      gradientFrom: '#f093fb',
      gradientTo: '#f5576c',
    },
  ]
</script>

<style scoped>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2.5rem;
    }

    .md\:text-6xl {
      font-size: 3rem;
    }
  }
</style>
