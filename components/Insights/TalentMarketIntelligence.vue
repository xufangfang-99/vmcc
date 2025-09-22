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
          Strategic workforce insights across global markets. Real-time intelligence for executive
          decision-making and competitive talent acquisition.
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
          <h2 class="text-xl md:text-2xl font-light text-[var(--tm-txt-primary)]">Market Pulse</h2>

          <!-- High Demand Sectors -->
          <div class="bg-[var(--tm-bg-card)] rounded-2xl border border-[var(--tm-bd-light)] p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium text-[var(--tm-txt-primary)]">High Growth Sectors</h3>
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            <div class="space-y-3">
              <div
                v-for="sector in demandSectors"
                :key="sector.name"
                class="flex justify-between items-center"
              >
                <span class="text-sm text-[var(--tm-txt-secondary)]">{{ sector.name }}</span>
                <div class="flex items-center space-x-2">
                  <div
                    class="h-1 rounded-full"
                    :class="sector.barClass"
                    :style="{ width: sector.width }"
                  ></div>
                  <span
                    class="text-xs font-medium"
                    :class="sector.textClass"
                  >
                    {{ sector.level }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Technology Trends -->
          <div class="bg-[var(--tm-bg-card)] rounded-2xl border border-[var(--tm-bd-light)] p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium text-[var(--tm-txt-primary)]">Tech Transformation</h3>
              <svg
                class="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </div>

            <div class="space-y-3">
              <div
                v-for="trend in techTrends"
                :key="trend.sector"
                class="flex justify-between"
              >
                <div>
                  <div class="text-sm font-medium text-[var(--tm-txt-primary)]">
                    {{ trend.sector }}
                  </div>
                  <div class="text-xs text-[var(--tm-txt-light)]">{{ trend.impact }}</div>
                </div>
                <div class="text-blue-600 font-bold">{{ trend.adoption }}</div>
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
                  AI and automation integration driving 42% of companies to restructure roles. New
                  skill requirements emerging in human-AI collaboration across all sectors.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <!-- Global Network -->
      <div class="mb-20">
        <h2 class="text-2xl font-light text-[var(--tm-txt-primary)] text-center mb-12">
          Global Intelligence Network
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
            <div class="text-xs opacity-90">FinTech • AI/ML • Digital</div>
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
            Access Market Intelligence
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 leading-relaxed">
            Get comprehensive market intelligence with strategic recommendations tailored to your
            industry transformation and talent acquisition needs.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-[var(--tm-accent-primary)] hover:bg-[var(--tm-accent-secondary)] text-white rounded-full transition-all duration-300 font-medium hover:scale-105"
              @click="openConsultationModal"
            >
              Request Intelligence Report
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-[var(--tm-bd-primary)] text-[var(--tm-accent-primary)] rounded-full transition-all duration-300 hover:bg-[var(--tm-bg-hover)] font-medium hover:scale-105"
              @click="openExpertModal"
            >
              Schedule Briefing
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Expert consultation modal -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- Full consultation form modal -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // Modal state management
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // Expert consultation modal control
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // Full consultation form modal control
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Key metrics
  const keyMetrics = [
    { value: '12', label: 'Industries' },
    { value: '8+', label: 'Markets' },
    { value: '150K+', label: 'Profiles' },
    { value: 'Real-time', label: 'Updates' },
  ]

  // Intelligence domains based on industry reports
  const domains = [
    {
      title: 'Digital Transformation',
      description:
        'Track AI/ML adoption, cloud migration, and automation impact across industries.',
      iconPath: 'M9 3V1H7v2H1v4h2v14a2 2 0 002 2h14a2 2 0 002-2V7h2V3h-6V1h-2v2H9z',
    },
    {
      title: 'Energy Transition',
      description:
        'Monitor workforce evolution in oil & gas, renewables, and sustainable technologies.',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      title: 'Healthcare Innovation',
      description: 'Analyze medical tourism, biotechnology, and digital health talent markets.',
      iconPath:
        'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    },
    {
      title: 'RegTech & Compliance',
      description:
        'Global compliance evolution, data privacy laws, and regulatory technology trends.',
      iconPath:
        'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
  ]

  // Other locations
  const otherLocations = [
    { name: 'Dubai', region: 'Middle East Hub', specialties: 'Energy • ESG • Construction' },
    { name: 'Malaysia', region: 'Southeast Asia', specialties: 'Manufacturing • Healthcare' },
    { name: 'China', region: 'Greater China', specialties: 'Technology • Manufacturing' },
  ]

  // High demand sectors based on reports
  const demandSectors = [
    {
      name: 'AI/ML Engineers',
      level: 'Critical',
      width: '32px',
      barClass: 'bg-red-500',
      textClass: 'text-red-600',
    },
    {
      name: 'ESG Specialists',
      level: 'High',
      width: '28px',
      barClass: 'bg-green-500',
      textClass: 'text-green-600',
    },
    {
      name: 'Cybersecurity',
      level: 'Rising',
      width: '24px',
      barClass: 'bg-blue-500',
      textClass: 'text-blue-600',
    },
  ]

  // Technology trends
  const techTrends = [
    { sector: 'Banking', impact: 'Digital transformation', adoption: '90%+' },
    { sector: 'Healthcare', impact: 'Medical tourism tech', adoption: '85%+' },
    { sector: 'Energy', impact: 'Green transition', adoption: '78%+' },
  ]
</script>

<style scoped>
  /* Dark mode adaptation */
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

  /* Mobile optimization */
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
