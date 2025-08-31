<template>
  <section class="py-16 md:py-20 lg:py-24 bg-[var(--tm-bg-primary)]">
    <div class="container max-w-7xl">
      <!-- Header -->
      <header class="text-center mb-16 md:mb-20">
        <div class="mb-6 md:mb-8">
          <span
            class="inline-block bg-[var(--tm-bg-feature)] px-6 py-2 rounded-full border border-[var(--tm-bd-light)] text-sm text-[var(--tm-accent-primary)] font-medium tracking-wide"
          >
            LIVE INTELLIGENCE
          </span>
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Talent Market
          <br />
          <span class="text-[var(--tm-accent-primary)] font-normal">Intelligence</span>
        </h1>

        <p class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-3xl mx-auto mb-12">
          Real-time workforce insights across 8 global markets. Strategic intelligence for executive
          decision-making.
        </p>

        <!-- Key Metrics -->
        <div class="flex flex-wrap justify-center gap-8 md:gap-12">
          <div
            v-for="metric in keyMetrics"
            :key="metric.label"
            class="text-center"
          >
            <div class="text-3xl md:text-4xl font-light text-[var(--tm-accent-primary)] mb-1">
              {{ metric.value }}
            </div>
            <div class="text-sm text-[var(--tm-txt-light)] uppercase tracking-wide">
              {{ metric.label }}
            </div>
          </div>
        </div>
      </header>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- Intelligence Domains -->
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-light text-[var(--tm-txt-primary)] mb-8">
            Intelligence Domains
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="domain in domains"
              :key="domain.title"
              class="group p-6 md:p-8 bg-[var(--tm-bg-card)] rounded-2xl border border-[var(--tm-bd-light)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex items-center space-x-4 mb-4">
                <div
                  class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    class="w-6 h-6 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="domain.iconPath"
                    />
                  </svg>
                </div>
                <h3 class="text-lg md:text-xl font-medium text-[var(--tm-txt-primary)]">
                  {{ domain.title }}
                </h3>
              </div>

              <p class="text-sm md:text-base text-[var(--tm-txt-secondary)] leading-relaxed">
                {{ domain.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Live Dashboard -->
        <aside class="space-y-6">
          <h2 class="text-xl md:text-2xl font-light text-[var(--tm-txt-primary)]">
            Live Dashboard
          </h2>

          <!-- High Demand -->
          <div class="bg-[var(--tm-bg-card)] rounded-2xl border border-[var(--tm-bd-light)] p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium text-[var(--tm-txt-primary)]">High Demand</h3>
              <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>

            <div class="space-y-3">
              <div
                v-for="role in demandRoles"
                :key="role.name"
                class="flex justify-between items-center"
              >
                <span class="text-sm text-[var(--tm-txt-secondary)]">{{ role.name }}</span>
                <div class="flex items-center space-x-2">
                  <div
                    class="h-1 rounded-full"
                    :class="role.barClass"
                    :style="{ width: role.width }"
                  ></div>
                  <span
                    class="text-xs font-medium"
                    :class="role.textClass"
                  >
                    {{ role.level }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Salary Trends -->
          <div class="bg-[var(--tm-bg-card)] rounded-2xl border border-[var(--tm-bd-light)] p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium text-[var(--tm-txt-primary)]">Salary Growth</h3>
              <svg
                class="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
              </svg>
            </div>

            <div class="space-y-3">
              <div
                v-for="trend in salaryTrends"
                :key="trend.sector"
                class="flex justify-between"
              >
                <div>
                  <div class="text-sm font-medium text-[var(--tm-txt-primary)]">
                    {{ trend.sector }}
                  </div>
                  <div class="text-xs text-[var(--tm-txt-light)]">{{ trend.location }}</div>
                </div>
                <div class="text-green-600 font-bold">{{ trend.growth }}</div>
              </div>
            </div>
          </div>

          <!-- Market Alert -->
          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
              <div>
                <h3 class="font-medium text-amber-900 mb-2">Market Alert</h3>
                <p class="text-sm text-amber-800 leading-relaxed">
                  Critical cybersecurity talent shortage across GCC markets. Compensation packages
                  increasing 20%+ to attract candidates.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <!-- Global Network -->
      <div class="mb-20">
        <h2 class="text-2xl font-light text-[var(--tm-txt-primary)] text-center mb-12">
          Global Network
        </h2>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Singapore HQ -->
          <div
            class="p-6 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-2xl text-white text-center relative overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div
              class="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"
            ></div>
            <h3 class="text-lg font-medium mb-1 text-white">Singapore</h3>
            <div class="text-xs opacity-80 mb-3">Asia-Pacific HQ</div>
            <div class="text-xs opacity-90">Executive • FinTech • Innovation</div>
          </div>

          <!-- Other Locations -->
          <div
            v-for="location in otherLocations"
            :key="location.name"
            class="p-6 bg-[var(--tm-bg-card)] rounded-2xl border border-[var(--tm-bd-light)] text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 class="text-lg font-medium mb-1 text-[var(--tm-txt-primary)]">
              {{ location.name }}
            </h3>
            <div class="text-xs text-[var(--tm-txt-light)] mb-3">{{ location.region }}</div>
            <div class="text-xs text-[var(--tm-txt-secondary)]">{{ location.specialties }}</div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <div
          class="max-w-3xl mx-auto p-8 md:p-12 bg-[var(--tm-bg-feature)] rounded-3xl border border-[var(--tm-bd-secondary)]"
        >
          <h3 class="text-2xl md:text-3xl font-light text-[var(--tm-txt-primary)] mb-4">
            Access Intelligence Reports
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 leading-relaxed">
            Get comprehensive market intelligence with strategic recommendations tailored to your
            industry and region.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-[var(--tm-accent-primary)] hover:bg-[var(--tm-accent-secondary)] text-white rounded-full transition-all duration-300 font-medium hover:scale-105"
              @click="openConsultationModal"
            >
              Request Report
            </button>
            <a
              :href="`tel:${contactPhone}`"
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-[var(--tm-bd-primary)] text-[var(--tm-accent-primary)] rounded-full transition-all duration-300 no-underline hover:bg-[var(--tm-bg-hover)] font-medium hover:scale-105"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </div>

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
  const isConsultationModalVisible = ref(false)

  // 联系电话
  const contactPhone = '+971558296351'

  // 完整咨询表单弹出框控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // 关键指标
  const keyMetrics = [
    { value: '8', label: 'Markets' },
    { value: '1M+', label: 'Profiles' },
    { value: '50K+', label: 'Data Points' },
    { value: 'Q1', label: 'Updates' },
  ]

  // 智能领域
  const domains = [
    {
      title: 'Executive Mapping',
      description: 'C-suite availability and compensation benchmarks across global markets.',
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      title: 'Global Mobility',
      description: 'International talent movement patterns and immigration policy impacts.',
      iconPath:
        'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
    },
    {
      title: 'Compensation',
      description: 'Real-time salary data with currency-adjusted multi-market comparisons.',
      iconPath:
        'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      title: 'Skills Analysis',
      description: 'Critical skills gap analysis and emerging competency requirements.',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
  ]

  // 其他地区
  const otherLocations = [
    { name: 'Dubai', region: 'Middle East Hub', specialties: 'Oil & Gas • Construction' },
    { name: 'Malaysia', region: 'Southeast Asia', specialties: 'Manufacturing • Healthcare' },
    { name: 'China', region: '4 Major Cities', specialties: 'Technology • Manufacturing' },
  ]

  // 需求角色
  const demandRoles = [
    {
      name: 'Data Scientists',
      level: 'Critical',
      width: '32px',
      barClass: 'bg-red-500',
      textClass: 'text-red-600',
    },
    {
      name: 'Cloud Engineers',
      level: 'High',
      width: '24px',
      barClass: 'bg-orange-500',
      textClass: 'text-orange-600',
    },
    {
      name: 'ESG Managers',
      level: 'Rising',
      width: '16px',
      barClass: 'bg-yellow-500',
      textClass: 'text-yellow-600',
    },
  ]

  // 薪资趋势
  const salaryTrends = [
    { sector: 'Technology', location: 'SG • Dubai', growth: '+12%' },
    { sector: 'Healthcare', location: 'Global', growth: '+8%' },
    { sector: 'Finance', location: 'APAC', growth: '+6%' },
  ]
</script>

<style scoped>
  /* 深色模式适配 */
  @media (prefers-color-scheme: dark) {
    .bg-amber-50 {
      background-color: rgba(245, 158, 11, 0.1);
    }
    .border-amber-200 {
      border-color: rgba(245, 158, 11, 0.3);
    }
    .text-amber-900 {
      color: rgb(251, 191, 36);
    }
    .text-amber-800 {
      color: rgb(252, 211, 77);
    }
    .bg-amber-500 {
      background-color: rgb(245, 158, 11);
    }
  }

  /* 移动端优化 */
  @media (max-width: 640px) {
    .grid.lg\\:grid-cols-3 {
      grid-template-columns: 1fr;
    }

    .lg\\:col-span-2 {
      grid-column: span 1;
    }

    .grid.lg\\:grid-cols-4 {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
