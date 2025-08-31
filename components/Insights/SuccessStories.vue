<template>
  <section class="py-16 md:py-20 lg:py-24 bg-[var(--tm-bg-primary)] transition-colors duration-300">
    <div class="container max-w-7xl">
      <!-- Header Section -->
      <header class="text-center mb-16 md:mb-20 lg:mb-24">
        <div class="mb-6 md:mb-8">
          <span
            class="inline-flex items-center px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-[var(--tm-accent-primary)] bg-[var(--tm-bg-feature)] border border-[var(--tm-bd-accentAlpha15)] rounded-full font-medium tracking-wide uppercase transition-all duration-300 hover:bg-[var(--tm-bg-accentLight)] hover:border-[var(--tm-bd-primary)]"
          >
            CLIENT TRANSFORMATIONS
          </span>
        </div>

        <h1
          class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[var(--tm-txt-primary)] mb-4 md:mb-6 leading-tight"
        >
          Success
          <br />
          <span
            class="text-[var(--tm-accent-primary)] font-normal bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] bg-clip-text text-transparent"
          >
            Stories
          </span>
        </h1>

        <p
          class="text-lg md:text-xl lg:text-2xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed px-4"
        >
          Real client transformations and strategic wins across our global network. Measurable
          results from our recruitment and consulting partnerships.
        </p>
      </header>

      <!-- Success Metrics Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-20 lg:mb-24">
        <div
          v-for="metric in successMetrics"
          :key="metric.label"
          class="group relative overflow-hidden p-4 md:p-6 lg:p-8 bg-[var(--tm-bg-card)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-card)] transition-all duration-500 hover:bg-[var(--tm-bg-hover)] hover:border-[var(--tm-bd-primary)] hover:shadow-[var(--tm-shadow-accent)] hover:-translate-y-1"
        >
          <!-- 背景装饰 -->
          <div
            class="absolute top-0 right-0 w-20 h-20 bg-[var(--tm-bg-accentGradient-from)] opacity-5 rounded-full -translate-y-10 translate-x-10 group-hover:opacity-10 transition-opacity duration-500"
          ></div>

          <div class="relative z-10 text-center">
            <div
              class="text-3xl md:text-4xl lg:text-5xl font-light text-[var(--tm-accent-primary)] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300"
            >
              {{ metric.value }}
            </div>
            <div
              class="text-sm md:text-base text-[var(--tm-txt-secondary)] group-hover:text-[var(--tm-txt-primary)] transition-colors duration-300"
            >
              {{ metric.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Case Studies -->
      <section class="mb-16 md:mb-20 lg:mb-24">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-12 md:mb-16 lg:mb-20"
        >
          Featured Case Studies
        </h2>

        <div class="space-y-8 md:space-y-12 lg:space-y-16">
          <article
            v-for="(caseStudy, index) in caseStudies"
            :key="index"
            class="group grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 bg-[var(--tm-bg-card)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-bd-primary)] hover:-translate-y-2"
          >
            <!-- 主要内容 -->
            <div class="xl:col-span-2 space-y-6 md:space-y-8">
              <!-- 公司信息 -->
              <header class="flex items-start space-x-4 md:space-x-5">
                <div
                  :class="caseStudy.iconClasses"
                  class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-lg md:text-xl lg:text-2xl font-bold transition-transform duration-300 group-hover:scale-110"
                >
                  {{ caseStudy.icon }}
                </div>
                <div class="min-w-0 flex-1">
                  <h3
                    class="text-lg md:text-xl lg:text-2xl font-semibold text-[var(--tm-txt-primary)] mb-1 md:mb-2"
                  >
                    {{ caseStudy.title }}
                  </h3>
                  <p
                    class="text-sm md:text-base text-[var(--tm-txt-light)] flex items-center space-x-2"
                  >
                    <span>{{ caseStudy.industry }}</span>
                    <span class="w-1 h-1 bg-[var(--tm-txt-light)] rounded-full"></span>
                    <span>{{ caseStudy.location }}</span>
                  </p>
                </div>
              </header>

              <!-- 描述文字 -->
              <p
                class="text-base md:text-lg text-[var(--tm-txt-secondary)] leading-relaxed lg:leading-loose"
              >
                {{ caseStudy.description }}
              </p>

              <!-- 数据指标 -->
              <div class="grid grid-cols-2 gap-4 md:gap-6">
                <div
                  v-for="stat in caseStudy.stats"
                  :key="stat.label"
                  class="p-4 md:p-5 lg:p-6 bg-[var(--tm-bg-feature)] rounded-xl lg:rounded-2xl border border-[var(--tm-bd-accentAlpha15)] transition-all duration-300 hover:bg-[var(--tm-bg-accentLight)] hover:border-[var(--tm-bd-primary)]"
                >
                  <div
                    class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--tm-accent-primary)] mb-1 md:mb-2"
                  >
                    {{ stat.value }}
                  </div>
                  <div class="text-sm md:text-base text-[var(--tm-txt-secondary)]">
                    {{ stat.label }}
                  </div>
                </div>
              </div>

              <div
                class="flex items-center text-sm md:text-base text-[var(--tm-txt-secondary)] p-4 md:p-5 bg-[var(--tm-bg-secondary)] rounded-xl lg:rounded-2xl border border-[var(--tm-bd-light)]"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 text-[var(--tm-accent-primary)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span class="font-medium">{{ caseStudy.achievement }}</span>
              </div>
            </div>

            <!-- 解决方案卡片 -->
            <aside class="space-y-4 md:space-y-5 lg:space-y-6">
              <div
                v-for="solution in caseStudy.solutions"
                :key="solution.type"
                :class="solution.bgClass"
                class="p-4 md:p-5 lg:p-6 rounded-xl lg:rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <h4
                  :class="solution.titleClass"
                  class="font-semibold text-sm md:text-base mb-2 md:mb-3"
                >
                  {{ solution.type }}
                </h4>
                <p
                  :class="solution.textClass"
                  class="text-sm md:text-base leading-relaxed"
                >
                  {{ solution.description }}
                </p>
              </div>
            </aside>
          </article>
        </div>
      </section>

      <!-- Client Testimonials -->
      <section class="mb-16 md:mb-20 lg:mb-24">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-12 md:mb-16 lg:mb-20"
        >
          What Our Clients Say
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <blockquote
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="group relative p-6 md:p-8 lg:p-10 bg-[var(--tm-bg-card)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-bd-primary)] hover:-translate-y-2 overflow-hidden"
          >
            <!-- 引号装饰 -->
            <div
              class="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 text-4xl md:text-5xl lg:text-6xl text-[var(--tm-accent-primary)] opacity-20 font-serif transition-all duration-300 group-hover:opacity-30 group-hover:scale-110"
            >
              "
            </div>

            <!-- 背景装饰 -->
            <div
              class="absolute bottom-0 right-0 w-32 h-32 bg-[var(--tm-bg-accentGradient-from)] opacity-5 rounded-full translate-x-16 translate-y-16 group-hover:opacity-10 transition-opacity duration-500"
            ></div>

            <div class="relative z-10 pt-8 md:pt-10 lg:pt-12">
              <p
                class="text-base md:text-lg text-[var(--tm-txt-secondary)] mb-6 md:mb-8 leading-relaxed lg:leading-loose"
              >
                {{ testimonial.quote }}
              </p>

              <footer class="flex items-center space-x-3 md:space-x-4">
                <div
                  class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[var(--tm-bg-accentLight)] rounded-full flex items-center justify-center text-[var(--tm-accent-primary)] font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 group-hover:bg-[var(--tm-accent-primary)] group-hover:text-white"
                >
                  {{ testimonial.initials }}
                </div>
                <div>
                  <div
                    class="font-semibold text-sm md:text-base lg:text-lg text-[var(--tm-txt-primary)]"
                  >
                    {{ testimonial.name }}
                  </div>
                  <div class="text-xs md:text-sm lg:text-base text-[var(--tm-txt-light)]">
                    {{ testimonial.title }}
                  </div>
                </div>
              </footer>
            </div>
          </blockquote>
        </div>
      </section>

      <!-- Industry Success Stats -->
      <section class="mb-16 md:mb-20 lg:mb-24">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-12 md:mb-16 lg:mb-20"
        >
          Success Across Industries
        </h2>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div
            v-for="industry in industryStats"
            :key="industry.name"
            class="group text-center p-6 md:p-8 lg:p-10 bg-[var(--tm-bg-card)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-accent)] hover:border-[var(--tm-bd-primary)] hover:-translate-y-2"
          >
            <!-- 图标 -->
            <div
              class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[var(--tm-bg-feature)] rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 lg:mb-8 border border-[var(--tm-bd-accentAlpha15)] transition-all duration-300 group-hover:bg-[var(--tm-bg-accentLight)] group-hover:border-[var(--tm-bd-primary)] group-hover:scale-110"
            >
              <svg
                class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[var(--tm-accent-primary)] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="industry.name === 'Technology'"
                  d="M9 3V1H7v2H1v4h2v14a2 2 0 002 2h14a2 2 0 002-2V7h2V3h-6V1h-2v2H9zM5 5h14v2H5V5zm14 16H5V9h14v12z"
                />
                <path
                  v-else-if="industry.name === 'Energy & Oil'"
                  d="M11 4V1L4 8h3v8l7-7h-3z"
                />
                <path
                  v-else-if="industry.name === 'Healthcare'"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                />
                <path
                  v-else-if="industry.name === 'Financial'"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
                />
              </svg>
            </div>

            <!-- 数据 -->
            <div
              class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300"
            >
              {{ industry.count }}
            </div>

            <div
              class="text-sm md:text-base lg:text-lg text-[var(--tm-txt-secondary)] mb-1 md:mb-2 group-hover:text-[var(--tm-txt-primary)] transition-colors duration-300"
            >
              {{ industry.name }}
            </div>

            <div class="text-xs md:text-sm text-[var(--tm-txt-light)]">Placements</div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <div
          class="max-w-4xl mx-auto p-8 md:p-12 lg:p-16 bg-[var(--tm-bg-feature)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-secondary)] relative overflow-hidden group"
        >
          <!-- 背景装饰 -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[var(--tm-bg-accentGradient-from)] to-[var(--tm-bg-accentGradient-to)] opacity-5 group-hover:opacity-10 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <h3
              class="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--tm-txt-primary)] mb-4 md:mb-6 lg:mb-8"
            >
              Ready to Create Your Success Story?
            </h3>

            <p
              class="text-lg md:text-xl text-[var(--tm-txt-secondary)] mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Join our portfolio of successful clients who have transformed their organizations
              through strategic talent acquisition and consulting partnerships.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <button
                class="group/btn inline-flex items-center justify-center px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-[var(--tm-accent-primary)] hover:bg-[var(--tm-accent-secondary)] text-white rounded-full transition-all duration-300 font-medium text-sm md:text-base lg:text-lg shadow-[var(--tm-shadow-accent)] hover:shadow-[var(--tm-shadow-hover)] hover:scale-105 active:scale-95"
                @click="openConsultationModal"
              >
                <span class="mr-2">Start Your Journey</span>
                <div
                  class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    class="w-full h-full"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>

              <button
                class="group/btn inline-flex items-center justify-center px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 border-2 border-[var(--tm-bd-primary)] text-[var(--tm-accent-primary)] rounded-full transition-all duration-300 hover:bg-[var(--tm-bg-hover)] hover:border-[var(--tm-accent-primary)] font-medium text-sm md:text-base lg:text-lg hover:scale-105 active:scale-95"
                @click="openExpertModal"
              >
                <span class="mr-2">View Case Studies</span>
                <div
                  class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    class="w-full h-full"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 专家咨询弹出框 (简化版) -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- 完整咨询表单弹出框 -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // 弹出框状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // 专家咨询弹出框控制 (简化版)
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整咨询表单弹出框控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // 成功指标数据
  const successMetrics = [
    { value: '98%', label: 'Client Retention Rate' },
    { value: '45', label: 'Days Avg Placement' },
    { value: '150K+', label: 'Successful Placements' },
    { value: '500+', label: 'Global Clients' },
  ]

  // 案例研究数据
  const caseStudies = [
    {
      icon: 'T',
      iconClasses: 'bg-gradient-to-br from-blue-500 to-purple-600',
      title: 'Global Fintech Scale-Up',
      industry: 'Technology',
      location: 'Singapore & Dubai',
      description:
        'Leading fintech company needed to rapidly scale engineering teams across APAC and Middle East markets. Required specialized blockchain and AI talent with cross-cultural competencies for their expansion into digital banking solutions.',
      stats: [
        { value: '87', label: 'Senior engineers hired' },
        { value: '35', label: 'Days average hire time' },
      ],
      achievement: 'Successfully launched in 3 new markets within 6 months',
      solutions: [
        {
          type: 'Challenge Solved',
          description: 'Shortage of blockchain developers with regulatory compliance experience',
          bgClass: 'bg-green-50 dark:bg-green-900/20',
          titleClass: 'text-green-900 dark:text-green-400',
          textClass: 'text-green-800 dark:text-green-300',
          borderClass: 'border-green-200 dark:border-green-700',
        },
        {
          type: 'Our Solution',
          description: 'Global talent mapping with specialized assessment framework',
          bgClass: 'bg-blue-50 dark:bg-blue-900/20',
          titleClass: 'text-blue-900 dark:text-blue-400',
          textClass: 'text-blue-800 dark:text-blue-300',
          borderClass: 'border-blue-200 dark:border-blue-700',
        },
        {
          type: 'Impact',
          description: '200% faster market entry vs industry benchmark',
          bgClass: 'bg-purple-50 dark:bg-purple-900/20',
          titleClass: 'text-purple-900 dark:text-purple-400',
          textClass: 'text-purple-800 dark:text-purple-300',
          borderClass: 'border-purple-200 dark:border-purple-700',
        },
      ],
    },
    {
      icon: 'E',
      iconClasses: 'bg-gradient-to-br from-green-500 to-emerald-600',
      title: 'National Oil Company Transformation',
      industry: 'Energy',
      location: 'Middle East',
      description:
        'Major national oil company transitioning to renewable energy needed specialized talent in clean technology, project management, and sustainable finance. Required blend of traditional energy expertise with green transition knowledge.',
      stats: [
        { value: '156', label: 'Clean energy specialists' },
        { value: '89%', label: 'Local talent integration' },
      ],
      achievement: 'Achieved nationalization targets while building green energy capabilities',
      solutions: [
        {
          type: 'Challenge Solved',
          description: 'Talent gap in renewable energy transition leadership',
          bgClass: 'bg-amber-50 dark:bg-amber-900/20',
          titleClass: 'text-amber-900 dark:text-amber-400',
          textClass: 'text-amber-800 dark:text-amber-300',
          borderClass: 'border-amber-200 dark:border-amber-700',
        },
        {
          type: 'Our Solution',
          description: 'Hybrid recruitment strategy combining global and local expertise',
          bgClass: 'bg-teal-50 dark:bg-teal-900/20',
          titleClass: 'text-teal-900 dark:text-teal-400',
          textClass: 'text-teal-800 dark:text-teal-300',
          borderClass: 'border-teal-200 dark:border-teal-700',
        },
        {
          type: 'Impact',
          description: '$2.5B renewable projects successfully launched',
          bgClass: 'bg-green-50 dark:bg-green-900/20',
          titleClass: 'text-green-900 dark:text-green-400',
          textClass: 'text-green-800 dark:text-green-300',
          borderClass: 'border-green-200 dark:border-green-700',
        },
      ],
    },
    {
      icon: 'H',
      iconClasses: 'bg-gradient-to-br from-red-500 to-pink-600',
      title: 'Regional Healthcare Network',
      industry: 'Healthcare',
      location: 'Malaysia & China',
      description:
        'International healthcare network expanding digital health services needed medical technology specialists, data scientists, and regulatory affairs experts across Southeast Asia and China markets.',
      stats: [
        { value: '203', label: 'Healthcare professionals' },
        { value: '94%', label: 'Regulatory compliance rate' },
      ],
      achievement: 'Digital health platform serving 2M+ patients across region',
      solutions: [
        {
          type: 'Challenge Solved',
          description: 'Complex regulatory requirements across multiple jurisdictions',
          bgClass: 'bg-red-50 dark:bg-red-900/20',
          titleClass: 'text-red-900 dark:text-red-400',
          textClass: 'text-red-800 dark:text-red-300',
          borderClass: 'border-red-200 dark:border-red-700',
        },
        {
          type: 'Our Solution',
          description: 'Regulatory-first recruitment with compliance expertise mapping',
          bgClass: 'bg-blue-50 dark:bg-blue-900/20',
          titleClass: 'text-blue-900 dark:text-blue-400',
          textClass: 'text-blue-800 dark:text-blue-300',
          borderClass: 'border-blue-200 dark:border-blue-700',
        },
        {
          type: 'Impact',
          description: 'Zero regulatory issues across all market launches',
          bgClass: 'bg-indigo-50 dark:bg-indigo-900/20',
          titleClass: 'text-indigo-900 dark:text-indigo-400',
          textClass: 'text-indigo-800 dark:text-indigo-300',
          borderClass: 'border-indigo-200 dark:border-indigo-700',
        },
      ],
    },
  ]

  // 客户评价数据
  const testimonials = [
    {
      quote:
        "VMMC's understanding of both technical requirements and cultural fit was exceptional. They delivered senior blockchain engineers who integrated seamlessly into our team.",
      name: 'James Liu',
      title: 'CTO, Global Fintech',
      initials: 'JL',
    },
    {
      quote:
        'Their deep knowledge of energy transition talent and regulatory landscape helped us build our renewable energy division ahead of schedule.',
      name: 'Sarah Al-Rashid',
      title: 'VP Strategy, Energy Corp',
      initials: 'SA',
    },
    {
      quote:
        'The quality of healthcare professionals they sourced was outstanding. Every placement has exceeded our expectations for clinical excellence.',
      name: 'Dr. David Tan',
      title: 'Chief Medical Officer',
      initials: 'DT',
    },
  ]

  // 行业统计数据
  const industryStats = [
    {
      name: 'Technology',
      count: '2,340',
    },
    {
      name: 'Energy & Oil',
      count: '1,856',
    },
    {
      name: 'Healthcare',
      count: '1,203',
    },
    {
      name: 'Financial',
      count: '967',
    },
  ]
</script>

<style scoped>
  /* 渐变文字效果 */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }

  /* 深色模式适配 */
  @media (prefers-color-scheme: dark) {
    .bg-green-50 {
      background-color: rgba(16, 185, 129, 0.1);
    }
    .border-green-200 {
      border-color: rgba(16, 185, 129, 0.2);
    }
    .text-green-900 {
      color: rgb(52, 211, 153);
    }
    .text-green-800 {
      color: rgb(110, 231, 183);
    }

    .bg-blue-50 {
      background-color: rgba(59, 130, 246, 0.1);
    }
    .border-blue-200 {
      border-color: rgba(59, 130, 246, 0.2);
    }
    .text-blue-900 {
      color: rgb(96, 165, 250);
    }
    .text-blue-800 {
      color: rgb(147, 197, 253);
    }

    .bg-purple-50 {
      background-color: rgba(147, 51, 234, 0.1);
    }
    .border-purple-200 {
      border-color: rgba(147, 51, 234, 0.2);
    }
    .text-purple-900 {
      color: rgb(196, 181, 253);
    }
    .text-purple-800 {
      color: rgb(221, 214, 254);
    }

    .bg-amber-50 {
      background-color: rgba(245, 158, 11, 0.1);
    }
    .border-amber-200 {
      border-color: rgba(245, 158, 11, 0.2);
    }
    .text-amber-900 {
      color: rgb(251, 191, 36);
    }
    .text-amber-800 {
      color: rgb(252, 211, 77);
    }

    .bg-teal-50 {
      background-color: rgba(20, 184, 166, 0.1);
    }
    .border-teal-200 {
      border-color: rgba(20, 184, 166, 0.2);
    }
    .text-teal-900 {
      color: rgb(94, 234, 212);
    }
    .text-teal-800 {
      color: rgb(153, 246, 228);
    }

    .bg-red-50 {
      background-color: rgba(239, 68, 68, 0.1);
    }
    .border-red-200 {
      border-color: rgba(239, 68, 68, 0.2);
    }
    .text-red-900 {
      color: rgb(248, 113, 113);
    }
    .text-red-800 {
      color: rgb(252, 165, 165);
    }

    .bg-indigo-50 {
      background-color: rgba(99, 102, 241, 0.1);
    }
    .border-indigo-200 {
      border-color: rgba(99, 102, 241, 0.2);
    }
    .text-indigo-900 {
      color: rgb(165, 180, 252);
    }
    .text-indigo-800 {
      color: rgb(199, 210, 254);
    }
  }

  /* 动画增强 */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .group:hover .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  /* 移动端优化 */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    /* 确保小屏幕下的可读性 */
    .grid.grid-cols-2.lg\\:grid-cols-4 {
      gap: 0.75rem;
    }

    .grid.grid-cols-2.lg\\:grid-cols-4 > div {
      padding: 1rem;
    }
  }
</style>
