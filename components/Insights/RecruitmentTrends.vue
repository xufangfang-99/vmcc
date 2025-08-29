<template>
  <section
    class="py-16 md:py-20 lg:py-24 bg-[var(--tm-bg-secondary)] transition-colors duration-300 relative overflow-hidden"
  >
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-1/4 left-10 w-96 h-96 bg-[var(--tm-accent-primary)] rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/3 right-10 w-80 h-80 bg-[var(--tm-accent-secondary)] rounded-full blur-3xl"
      ></div>
    </div>

    <div class="container max-w-7xl relative z-10">
      <!-- Header Section -->
      <header class="text-center mb-20">
        <div class="mb-8">
          <span
            class="inline-flex items-center px-6 py-3 text-sm text-[var(--tm-accent-primary)] bg-[var(--tm-bg-primary)] border border-[var(--tm-bd-light)] rounded-full font-medium tracking-wide uppercase shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            FUTURE WORKFORCE
          </span>
        </div>

        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--tm-txt-primary)] mb-6 leading-tight"
        >
          Recruitment
          <br />
          <span class="text-[var(--tm-accent-primary)] font-normal relative">
            Trends
            <div
              class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            ></div>
          </span>
        </h1>

        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-5xl mx-auto leading-relaxed"
        >
          Future workforce patterns and technology impacts shaping recruitment strategies. Strategic
          insights from our global intelligence network across 8 markets.
        </p>
      </header>

      <!-- Hero Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <div
          v-for="stat in heroStats"
          :key="stat.label"
          class="group text-center p-8 bg-[var(--tm-bg-primary)] rounded-3xl border border-[var(--tm-bd-light)] relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
          <!-- 背景光效 -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[var(--tm-accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <div
              class="text-4xl md:text-5xl font-bold text-[var(--tm-accent-primary)] mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ stat.value }}
            </div>
            <div class="text-sm md:text-base text-[var(--tm-txt-secondary)]">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Masonry Layout for Trends -->
      <div class="mb-24">
        <h2 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-16">
          Key Market Dynamics
        </h2>

        <!-- 瀑布流式布局 -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- 大卡片：AI & Automation -->
          <article
            class="lg:col-span-8 group bg-[var(--tm-bg-primary)] rounded-3xl p-8 md:p-10 border border-[var(--tm-bd-light)] hover:shadow-2xl hover:border-[var(--tm-accent-primary)] transition-all duration-500 relative overflow-hidden"
          >
            <!-- 背景渐变 -->
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"
            ></div>

            <div class="relative z-10">
              <div class="flex items-start justify-between mb-6">
                <div class="flex items-center space-x-4">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
                  >
                    AI
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-[var(--tm-txt-primary)]">
                      AI & Automation Impact
                    </h3>
                    <p class="text-[var(--tm-accent-primary)] font-medium">
                      Leading Transformation
                    </p>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)]">67%</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">Tech Sector Impact</div>
                </div>
              </div>

              <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 leading-relaxed">
                42% of global companies are restructuring roles due to AI integration. New skill
                requirements emerging in human-AI collaboration across all industries.
              </p>

              <div class="grid grid-cols-2 gap-6">
                <div class="p-4 bg-[var(--tm-bg-feature)] rounded-xl">
                  <div class="text-2xl font-bold text-green-600 mb-1">+28%</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">New Roles Created</div>
                </div>
                <div class="p-4 bg-[var(--tm-bg-feature)] rounded-xl">
                  <div class="text-2xl font-bold text-blue-600 mb-1">312%</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">Skill Demand Growth</div>
                </div>
              </div>
            </div>
          </article>

          <!-- 右侧垂直卡片组 -->
          <div class="lg:col-span-4 space-y-6">
            <!-- Global Talent Access -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-2xl p-6 border border-[var(--tm-bd-light)] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-center space-x-3 mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Global Talent</h3>
              </div>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
                Remote-first policies enabling global talent access
              </p>
              <div class="text-xl font-bold text-[var(--tm-accent-primary)]">
                +156% Remote Roles
              </div>
            </div>

            <!-- ESG Focus -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-2xl p-6 border border-[var(--tm-bd-light)] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-center space-x-3 mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)]">ESG Priority</h3>
              </div>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
                73% workforce prioritizes ESG commitments
              </p>
              <div class="text-xl font-bold text-green-600">+134% ESG Roles</div>
            </div>

            <!-- Skills-First -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-2xl p-6 border border-[var(--tm-bd-light)] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-center space-x-3 mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Skills-First</h3>
              </div>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
                76% prioritize skills over degrees
              </p>
              <div class="text-xl font-bold text-orange-600">+203% Assessment</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Regional Dashboard -->
      <div class="mb-24">
        <h2 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-16">
          Regional Market Intelligence
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Asia-Pacific 大卡片 -->
          <div
            class="lg:col-span-2 bg-[var(--tm-bg-primary)] rounded-3xl p-8 border border-[var(--tm-bd-light)] relative overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <!-- 背景图案 -->
            <div class="absolute top-0 right-0 w-40 h-40 opacity-5">
              <svg
                viewBox="0 0 100 100"
                class="w-full h-full text-[var(--tm-accent-primary)]"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="currentColor"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="15"
                  fill="currentColor"
                />
                <circle
                  cx="70"
                  cy="70"
                  r="10"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-bold text-[var(--tm-txt-primary)] mb-6">
                Asia-Pacific Market
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div
                  v-for="metric in regionalData[0].metrics"
                  :key="metric.name"
                  class="text-center p-4 bg-[var(--tm-bg-feature)] rounded-2xl"
                >
                  <div
                    class="text-3xl font-bold mb-2"
                    :class="metric.textClass"
                  >
                    {{ metric.value }}
                  </div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">{{ metric.name }}</div>

                  <!-- 圆形进度条 -->
                  <div class="relative w-16 h-16 mx-auto mt-4">
                    <svg
                      class="w-16 h-16 transform -rotate-90"
                      viewBox="0 0 64 64"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        stroke-width="4"
                        fill="none"
                        class="text-[var(--tm-bg-tertiary)]"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        stroke-width="4"
                        fill="none"
                        stroke-linecap="round"
                        :stroke-dasharray="`${metric.percentage * 1.76} 176`"
                        :class="metric.textClass"
                        class="transition-all duration-1000"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Middle East 卡片 -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-3xl p-6 border border-[var(--tm-bd-light)] hover:shadow-xl hover:scale-105 transition-all duration-500"
          >
            <h3 class="text-xl font-bold text-[var(--tm-txt-primary)] mb-6">Middle East</h3>

            <div class="space-y-4">
              <div
                v-for="metric in regionalData[1].metrics"
                :key="metric.name"
              >
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm font-medium text-[var(--tm-txt-secondary)]">
                    {{ metric.name }}
                  </span>
                  <span
                    class="text-sm font-bold"
                    :class="metric.textClass"
                  >
                    {{ metric.value }}
                  </span>
                </div>

                <!-- 横向进度条 -->
                <div class="w-full h-2 bg-[var(--tm-bg-secondary)] rounded-full overflow-hidden">
                  <div
                    class="h-full rounded-full transition-all duration-1000 ease-out"
                    :class="metric.barClass"
                    :style="{ width: metric.percentage + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Dashboard -->
      <div class="mb-24">
        <h2 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-16">
          Hottest Skills 2024-2025
        </h2>

        <!-- 技能排行榜样式 -->
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(skill, index) in hotSkills"
              :key="skill.name"
              class="group relative bg-[var(--tm-bg-primary)] rounded-2xl p-6 border border-[var(--tm-bd-light)] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <!-- 排名徽章 -->
              <div
                class="absolute top-4 right-4 w-8 h-8 bg-[var(--tm-accent-primary)] rounded-full flex items-center justify-center text-white text-sm font-bold"
              >
                {{ index + 1 }}
              </div>

              <!-- 背景装饰 -->
              <div
                class="absolute bottom-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              >
                <div
                  :class="skill.iconBg"
                  class="w-full h-full rounded-full"
                ></div>
              </div>

              <div class="relative z-10">
                <div class="flex items-center space-x-4 mb-4">
                  <div
                    :class="skill.iconBg"
                    class="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path :d="skill.iconPath" />
                    </svg>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-[var(--tm-txt-primary)]">
                      {{ skill.name }}
                    </h3>
                    <div class="flex items-center space-x-2">
                      <span class="text-sm text-[var(--tm-txt-secondary)]">Growth:</span>
                      <span
                        class="text-lg font-bold"
                        :class="skill.growthClass"
                      >
                        {{ skill.growth }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- 技能热度可视化 -->
                <div class="relative h-2 bg-[var(--tm-bg-secondary)] rounded-full overflow-hidden">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Future Outlook - 时间线样式 -->
      <div class="mb-24">
        <div
          class="max-w-5xl mx-auto bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-feature)] rounded-3xl p-8 md:p-12 border border-[var(--tm-bd-secondary)] relative overflow-hidden"
        >
          >
          <!-- 装饰性背景 -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-0 left-1/4 w-2 h-full bg-[var(--tm-accent-primary)]"></div>
            <div
              class="absolute top-1/3 right-1/4 w-32 h-32 bg-[var(--tm-accent-secondary)] rounded-full blur-2xl"
            ></div>
          </div>

          <div class="relative z-10">
            <h3
              class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-12"
            >
              2025 Outlook
            </h3>

            <!-- 时间线布局 -->
            <div class="space-y-8">
              <div
                v-for="(outlook, index) in futureOutlook"
                :key="outlook.title"
                class="flex items-start space-x-6"
              >
                <!-- 时间线点 -->
                <div
                  class="flex-shrink-0 w-4 h-4 bg-[var(--tm-accent-primary)] rounded-full mt-2 relative"
                >
                  <div
                    v-if="index < futureOutlook.length - 1"
                    class="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-[var(--tm-bd-light)]"
                  ></div>
                </div>

                <div class="flex-1 pb-8">
                  <h4 class="text-xl font-bold text-[var(--tm-txt-primary)] mb-3">
                    {{ outlook.title }}
                  </h4>
                  <p class="text-base text-[var(--tm-txt-secondary)] leading-relaxed">
                    {{ outlook.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div
          class="max-w-4xl mx-auto p-12 bg-[var(--tm-bg-primary)] rounded-3xl border border-[var(--tm-bd-light)] shadow-2xl relative overflow-hidden group"
        >
          <!-- 动态背景 -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-[var(--tm-accent-primary)]/5 via-transparent to-[var(--tm-accent-secondary)]/5 group-hover:from-[var(--tm-accent-primary)]/10 group-hover:to-[var(--tm-accent-secondary)]/10 transition-all duration-500"
          ></div>

          <div class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] mb-6">
              Stay Ahead of Trends
            </h3>

            <p class="text-xl text-[var(--tm-txt-secondary)] mb-10 leading-relaxed">
              Get quarterly trend reports and strategic insights to adapt your recruitment strategy
              for the evolving global workforce landscape.
            </p>

            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <NuxtLink
                to="/contact"
                class="group/btn relative inline-flex items-center justify-center px-10 py-5 bg-[var(--tm-accent-primary)] text-white rounded-full overflow-hidden transition-all duration-300 no-underline font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                ></div>
                <span class="relative z-10 mr-3">Get Trend Reports</span>
                <svg
                  class="relative z-10 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </NuxtLink>

              <NuxtLink
                to="/insights/recruitment-trends"
                class="inline-flex items-center justify-center px-10 py-5 border-2 border-[var(--tm-bd-primary)] text-[var(--tm-accent-primary)] rounded-full transition-all duration-300 no-underline hover:bg-[var(--tm-bg-accentLight)] hover:shadow-xl font-semibold text-lg hover:scale-105 hover:-translate-y-1"
              >
                <span class="mr-3">Explore Trends</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Hero统计数据
  const heroStats = [
    { value: '42%', label: 'Companies Restructuring' },
    { value: '85%', label: 'Location-Agnostic Hiring' },
    { value: '73%', label: 'ESG-Focused Workforce' },
    { value: '76%', label: 'Skills-First Employers' },
  ]

  // 地区数据
  const regionalData = [
    {
      name: 'Asia-Pacific',
      metrics: [
        {
          name: 'Tech Talent',
          value: '92%',
          percentage: 92,
          barClass: 'bg-[var(--tm-accent-primary)]',
          textClass: 'text-[var(--tm-accent-primary)]',
        },
        {
          name: 'Remote Work',
          value: '67%',
          percentage: 67,
          barClass: 'bg-green-500',
          textClass: 'text-green-600',
        },
        {
          name: 'Skills-Based',
          value: '78%',
          percentage: 78,
          barClass: 'bg-purple-500',
          textClass: 'text-purple-600',
        },
      ],
    },
    {
      name: 'Middle East',
      metrics: [
        {
          name: 'Nationalization',
          value: '95%',
          percentage: 95,
          barClass: 'bg-orange-500',
          textClass: 'text-orange-600',
        },
        {
          name: 'ESG Growth',
          value: '89%',
          percentage: 89,
          barClass: 'bg-teal-500',
          textClass: 'text-teal-600',
        },
        {
          name: 'Digital Transform',
          value: '72%',
          percentage: 72,
          barClass: 'bg-blue-500',
          textClass: 'text-blue-600',
        },
      ],
    },
  ]

  // 热门技能数据 - 重新排序为竞争感
  const hotSkills = [
    {
      name: 'AI/Machine Learning',
      growth: '+312%',
      growthClass: 'text-red-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-purple-600',
      iconPath:
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    },
    {
      name: 'Cloud Architecture',
      growth: '+267%',
      growthClass: 'text-orange-600',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
      iconPath:
        'M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15S21.76 10 19 10',
    },
    {
      name: 'Cybersecurity',
      growth: '+234%',
      growthClass: 'text-yellow-600',
      iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      iconPath:
        'M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z',
    },
    {
      name: 'Data Analytics',
      growth: '+198%',
      growthClass: 'text-green-600',
      iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
      iconPath: 'M5 9.2H7V19H9V9.2H11V7H5V9.2ZM13 7V19H15V13H17V19H19V7H13ZM3 5V7H21V5H3Z',
    },
  ]

  // 未来展望数据
  const futureOutlook = [
    {
      title: 'Hybrid Integration',
      description:
        'AI-human collaboration roles will dominate new job creation across all industries',
    },
    {
      title: 'Global Mobility',
      description: 'Cross-border remote work agreements expanding rapidly with new visa frameworks',
    },
    {
      title: 'Skills Evolution',
      description:
        'Continuous learning platforms becoming recruitment differentiators and retention tools',
    },
  ]
</script>

<style scoped>
  /* 渐变文字效果 */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }

  /* 圆形进度条动画 */
  @keyframes circularProgress {
    from {
      stroke-dasharray: 0 176;
    }
  }

  /* 移动端优化 */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .grid.md\\:grid-cols-2 {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .grid.lg\\:grid-cols-3 {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .lg\\:col-span-2 {
      grid-column: span 1;
    }
  }

  /* 平板优化 */
  @media (min-width: 641px) and (max-width: 1023px) {
    .grid.lg\\:grid-cols-12 {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .lg\\:col-span-8,
    .lg\\:col-span-4 {
      grid-column: span 1;
    }
  }
</style>
