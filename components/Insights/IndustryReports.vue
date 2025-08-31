<template>
  <section class="py-16 md:py-20 lg:py-24 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 简化背景装饰 -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-1/4 right-0 w-80 h-80 bg-[var(--tm-accent-primary)] rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 left-0 w-96 h-96 bg-[var(--tm-accent-secondary)] rounded-full blur-3xl"
      ></div>
    </div>

    <div class="container max-w-7xl relative z-10">
      <!-- Header -->
      <header class="text-center mb-16 md:mb-20">
        <div class="mb-6 md:mb-8">
          <span
            class="inline-flex items-center px-6 py-2 bg-[var(--tm-bg-primary)] border border-[var(--tm-bd-light)] rounded-full text-sm text-[var(--tm-accent-primary)] font-medium tracking-wide"
          >
            <div
              class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3 animate-pulse"
            ></div>
            COMPREHENSIVE INDUSTRY INTELLIGENCE
          </span>
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          12 Industries,
          <span class="text-[var(--tm-accent-primary)] font-normal">Global Insights</span>
        </h1>

        <p class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto mb-12">
          Deep-dive analysis across key sectors driving the global economy. From emerging markets in
          Asia-Pacific to established industries in the Middle East.
        </p>

        <!-- 核心统计 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div
            v-for="stat in coreStats"
            :key="stat.label"
            class="text-center"
          >
            <div class="text-2xl md:text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">
              {{ stat.value }}
            </div>
            <div class="text-xs md:text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wide">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </header>

      <!-- 行业网格 -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16 md:mb-20">
        <article
          v-for="industry in industries"
          :key="industry.name"
          class="group bg-[var(--tm-bg-primary)] rounded-2xl p-6 border border-[var(--tm-bd-light)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          :class="industry.hoverClass"
        >
          <!-- 图标区域 -->
          <div
            class="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300"
            :class="industry.iconBg + ' group-hover:' + industry.iconHover"
          >
            <div :class="industry.iconShape + ' ' + industry.iconColor"></div>
          </div>

          <!-- 内容 -->
          <h3 class="font-semibold text-[var(--tm-txt-primary)] text-sm md:text-base mb-2">
            {{ industry.name }}
          </h3>
          <p class="text-xs md:text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            {{ industry.description }}
          </p>

          <!-- 报告数量标签 -->
          <span
            :class="industry.badgeClass"
            class="text-xs px-2 py-1 rounded-full"
          >
            {{ industry.reports }}+ Reports
          </span>
        </article>
      </div>

      <!-- 报告特色和CTA -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 md:p-10 lg:p-12 border border-[var(--tm-bd-light)]"
      >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <!-- 特色列表 -->
          <div class="lg:col-span-2">
            <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-8">
              What Makes Our Reports Different
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="feature in reportFeatures"
                :key="feature.title"
                class="flex items-start space-x-4"
              >
                <div
                  class="w-6 h-6 bg-[var(--tm-accent-primary)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-medium text-[var(--tm-txt-primary)] mb-2">{{ feature.title }}</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA区域 -->
          <div class="text-center lg:text-left">
            <div
              class="bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-2xl p-8"
            >
              <h4 class="text-lg md:text-xl font-semibold mb-4 text-white">Access Full Reports</h4>
              <p class="text-sm opacity-90 mb-6 text-white">
                Get complete industry analysis with detailed insights and recommendations
              </p>

              <div class="space-y-3">
                <button
                  class="block w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                  @click="openExpertModal"
                >
                  Contact Our Experts
                </button>
                <button
                  class="block w-full bg-transparent hover:bg-white/10 border border-white/50 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                  @click="openConsultationModal"
                >
                  Browse All Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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

  // 核心统计数据
  const coreStats = [
    { value: '150+', label: 'Reports' },
    { value: '8+', label: 'Markets' },
    { value: '99%', label: 'Accuracy' },
    { value: 'Q4', label: 'Updates' },
  ]

  // 行业数据
  const industries = [
    {
      name: 'Oil & Gas',
      description: 'Energy transition & workforce evolution',
      reports: '25',
      iconBg: 'bg-amber-500/10',
      iconHover: 'bg-amber-500/20',
      iconShape: 'w-6 h-6 rounded-full',
      iconColor: 'bg-amber-600',
      hoverClass: 'hover:border-amber-500',
      badgeClass: 'bg-amber-100 text-amber-800',
    },
    {
      name: 'Banking & Finance',
      description: 'Digital transformation & fintech integration',
      reports: '30',
      iconBg: 'bg-blue-500/10',
      iconHover: 'bg-blue-500/20',
      iconShape: 'w-6 h-6 transform rotate-45',
      iconColor: 'bg-blue-600',
      hoverClass: 'hover:border-blue-500',
      badgeClass: 'bg-blue-100 text-blue-800',
    },
    {
      name: 'Healthcare',
      description: 'Medical tech & pharmaceutical growth',
      reports: '18',
      iconBg: 'bg-emerald-500/10',
      iconHover: 'bg-emerald-500/20',
      iconShape: 'w-4 h-4 transform rotate-45',
      iconColor: 'bg-emerald-600',
      hoverClass: 'hover:border-emerald-500',
      badgeClass: 'bg-emerald-100 text-emerald-800',
    },
    {
      name: 'Technology',
      description: 'AI/ML & cloud infrastructure expansion',
      reports: '35',
      iconBg: 'bg-blue-600/10', // 直接使用蓝色 10% 透明度
      iconHover: 'bg-blue-600/20', // 悬停时 20% 透明度
      iconShape: 'w-6 h-6 rounded-lg',
      iconColor: 'bg-white/70', // 70% 透明度的白色
      hoverClass: 'hover:border-blue-600',
      badgeClass: 'bg-purple-100 text-purple-800',
    },
    {
      name: 'Construction',
      description: 'Infrastructure & sustainable building',
      reports: '22',
      iconBg: 'bg-slate-500/10',
      iconHover: 'bg-slate-500/20',
      iconShape: 'w-5 h-3',
      iconColor: 'bg-slate-600',
      hoverClass: 'hover:border-slate-500',
      badgeClass: 'bg-slate-100 text-slate-800',
    },
    {
      name: 'Manufacturing',
      description: 'Industry 4.0 & automation integration',
      reports: '20',
      iconBg: 'bg-red-500/10',
      iconHover: 'bg-red-500/20',
      iconShape: 'w-6 h-6 rounded-full border-2',
      iconColor: 'bg-red-600 border-red-400',
      hoverClass: 'hover:border-red-500',
      badgeClass: 'bg-red-100 text-red-800',
    },
    {
      name: 'Hospitality',
      description: 'Tourism recovery & experience economy',
      reports: '12',
      iconBg: 'bg-pink-500/10',
      iconHover: 'bg-pink-500/20',
      iconShape: 'w-4 h-4 rounded-full',
      iconColor: 'bg-pink-600',
      hoverClass: 'hover:border-pink-500',
      badgeClass: 'bg-pink-100 text-pink-800',
    },
    {
      name: 'Retail',
      description: 'E-commerce evolution & consumer behavior',
      reports: '16',
      iconBg: 'bg-green-500/10',
      iconHover: 'bg-green-500/20',
      iconShape: 'w-4 h-4',
      iconColor: 'bg-green-600',
      hoverClass: 'hover:border-green-500',
      badgeClass: 'bg-green-100 text-green-800',
    },
    {
      name: 'Education',
      description: 'Digital learning & skills development',
      reports: '14',
      iconBg: 'bg-indigo-500/10',
      iconHover: 'bg-indigo-500/20',
      iconShape: 'w-4 h-4 transform rotate-45',
      iconColor: 'bg-indigo-600',
      hoverClass: 'hover:border-indigo-500',
      badgeClass: 'bg-indigo-100 text-indigo-800',
    },
    {
      name: 'Legal Services',
      description: 'Regulatory compliance & digital law',
      reports: '8',
      iconBg: 'bg-cyan-500/10',
      iconHover: 'bg-cyan-500/20',
      iconShape: 'w-5 h-5 transform rotate-12',
      iconColor: 'bg-cyan-600',
      hoverClass: 'hover:border-cyan-500',
      badgeClass: 'bg-cyan-100 text-cyan-800',
    },
    {
      name: 'Insurance',
      description: 'Risk management & insurtech innovation',
      reports: '10',
      iconBg: 'bg-violet-500/10',
      iconHover: 'bg-violet-500/20',
      iconShape: 'w-6 h-6 rounded-full border-2',
      iconColor: 'bg-violet-600 border-violet-400',
      hoverClass: 'hover:border-violet-500',
      badgeClass: 'bg-violet-100 text-violet-800',
    },
    {
      name: 'Logistics',
      description: 'Supply chain optimization & logistics tech',
      reports: '12',
      iconBg: 'bg-teal-500/10',
      iconHover: 'bg-teal-500/20',
      iconShape: 'w-4 h-6 transform -rotate-12',
      iconColor: 'bg-teal-600',
      hoverClass: 'hover:border-teal-500',
      badgeClass: 'bg-teal-100 text-teal-800',
    },
  ]

  // 报告特色
  const reportFeatures = [
    {
      title: 'Global Perspective',
      description: 'Cross-border talent insights from 8+ regional offices',
    },
    {
      title: 'Real-Time Data',
      description: 'Live market intelligence updated quarterly',
    },
    {
      title: 'Actionable Insights',
      description: 'Strategic recommendations from industry experts',
    },
    {
      title: 'Custom Analysis',
      description: 'Tailored reports for specific market needs',
    },
  ]
</script>

<style scoped>
  /* 移动端优化 */
  @media (max-width: 640px) {
    .grid.lg\\:grid-cols-6 {
      grid-template-columns: 1fr 1fr;
    }

    .grid.lg\\:grid-cols-3 {
      grid-template-columns: 1fr;
    }

    .lg\\:col-span-2 {
      grid-column: span 1;
    }
  }

  @media (max-width: 768px) {
    .grid.md\\:grid-cols-3 {
      grid-template-columns: 1fr 1fr;
    }

    .grid.md\\:grid-cols-4 {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
