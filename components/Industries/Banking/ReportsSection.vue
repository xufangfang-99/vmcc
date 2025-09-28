<template>
  <section class="py-20 bg-tm-bg-primary dark:bg-tm-bg-secondary reports-section">
    <div class="max-w-1400px mx-auto px-5">
      <!-- Section Header -->
      <div class="text-center mb-15">
        <h2 class="text-3xl md:text-4xl font-300 text-tm-txt-primary mb-4 leading-tight">
          Industry Reports &
          <span
            class="font-600 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 bg-clip-text text-transparent"
          >
            Analysis
          </span>
        </h2>
        <p class="text-lg md:text-xl text-tm-txt-secondary max-w-800px mx-auto leading-relaxed">
          Comprehensive banking and finance sector insights covering UAE, GCC, and global markets
          with detailed analysis and strategic recommendations
        </p>
      </div>

      <!-- Main Reports Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-15">
        <!-- UAE Wealth Management Report - Featured (2x2 span) -->
        <div
          class="lg:col-span-6 lg:row-span-2 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-3xl p-8 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 relative overflow-hidden flex flex-col"
        >
          <!-- Decoration -->
          <div
            class="absolute top-0 right-0 w-25 h-25 bg-gradient-to-bl from-tm-pri-0/10 to-tm-pri-1/10 rounded-bl-full"
          ></div>

          <div class="relative z-1 flex flex-col h-full">
            <div class="flex justify-between items-start mb-5">
              <div class="flex flex-col gap-2">
                <span
                  class="px-3 py-1 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 text-tm-txt-white text-xs font-600 uppercase tracking-wider rounded-full w-fit"
                >
                  UAE Market
                </span>
                <span class="text-sm text-tm-txt-light font-500">2024 Edition</span>
              </div>
              <div
                class="w-15 h-15 bg-gradient-to-br from-tm-pri-0 to-tm-pri-1 rounded-2xl flex items-center justify-center text-tm-txt-white flex-shrink-0"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>

            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-600 text-tm-txt-primary mb-4 leading-tight">
                UAE Banking Wealth Management Business Report & Yearbook
              </h3>
              <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
                In-depth analysis of the AED 895 billion UAE wealth management market, covering
                industry scale, market structure, regulatory dynamics, and competitive landscape
                between local and foreign institutions.
              </p>

              <!-- Key Insights Grid -->
              <div class="mb-6">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-3 uppercase tracking-wider">
                  Key Market Insights
                </h4>
                <div class="grid grid-cols-2 gap-3">
                  <div
                    class="flex flex-col items-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl text-center"
                  >
                    <span class="text-xs text-tm-txt-light mb-1">Market Growth</span>
                    <span class="text-lg font-700 text-tm-pri-0">9.2% YoY</span>
                  </div>
                  <div
                    class="flex flex-col items-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl text-center"
                  >
                    <span class="text-xs text-tm-txt-light mb-1">Total AUM</span>
                    <span class="text-lg font-700 text-tm-pri-0">AED 895B</span>
                  </div>
                  <div
                    class="flex flex-col items-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl text-center"
                  >
                    <span class="text-xs text-tm-txt-light mb-1">Active Investors</span>
                    <span class="text-lg font-700 text-tm-pri-0">1.8M+</span>
                  </div>
                  <div
                    class="flex flex-col items-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl text-center"
                  >
                    <span class="text-xs text-tm-txt-light mb-1">New Products</span>
                    <span class="text-lg font-700 text-tm-pri-0">1,280</span>
                  </div>
                </div>
              </div>

              <!-- Highlights -->
              <div class="flex flex-col gap-3 mb-6">
                <div class="flex items-center gap-3">
                  <span class="text-base">📊</span>
                  <span class="text-sm text-tm-txt-primary font-500">
                    Local banks hold 78.5% market share
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-base">🌱</span>
                  <span class="text-sm text-tm-txt-primary font-500">
                    Green wealth management: AED 120B (+45% YoY)
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-base">🏦</span>
                  <span class="text-sm text-tm-txt-primary font-500">
                    42 banks & 11 licensed wealth companies
                  </span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 mt-auto">
              <NuxtLink
                to="/industries/banking-finance/uae-wealth-management"
                class="flex-1 group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 text-tm-txt-white text-sm font-600 rounded-full border border-tm-bd-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 no-underline"
              >
                <span>Read Full Report</span>
                <svg
                  class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </NuxtLink>
              <button
                class="flex-1 px-6 py-3 bg-tm-bg-primary dark:bg-tm-bg-secondary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300"
                @click="openExpertModal"
              >
                Get Report Summary
              </button>
            </div>
          </div>
        </div>

        <!-- Digital Transformation Report -->
        <div
          class="lg:col-span-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 flex flex-col"
        >
          <div class="flex justify-between items-start mb-5">
            <div class="flex flex-col gap-2">
              <span
                class="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-tm-txt-white text-xs font-600 uppercase tracking-wider rounded-full w-fit"
              >
                Digital Innovation
              </span>
              <span class="text-sm text-tm-txt-light font-500">2024</span>
            </div>
            <div
              class="w-12 h-12 bg-tm-pri-0/10 text-tm-pri-0 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line
                  x1="12"
                  y1="22"
                  x2="12"
                  y2="12"
                />
              </svg>
            </div>
          </div>

          <div class="flex-1 mb-6">
            <h3 class="text-lg font-600 text-tm-txt-primary mb-3 leading-tight">
              UAE Banking Digital Transformation Report
            </h3>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Analysis of AED 4.5B fintech investments, 90% core business digitization, and 82%
              mobile banking penetration.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-1 gap-3 mb-4">
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <span class="block text-base font-700 text-tm-pri-0 mb-1">AED 4.5B</span>
                <span class="text-xs text-tm-txt-light">Fintech Investment</span>
              </div>
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <span class="block text-base font-700 text-tm-pri-0 mb-1">AED 12T</span>
                <span class="text-xs text-tm-txt-light">Digital Transactions</span>
              </div>
            </div>

            <!-- Features -->
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-tm-pri-0 rounded-full flex-shrink-0"></div>
                <span class="text-xs text-tm-txt-secondary">AI chatbots in 85% of banks</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-tm-pri-0 rounded-full flex-shrink-0"></div>
                <span class="text-xs text-tm-txt-secondary">Blockchain settlements</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-tm-pri-0 rounded-full flex-shrink-0"></div>
                <span class="text-xs text-tm-txt-secondary">Biometric security (70%)</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <NuxtLink
              to="/industries/banking-finance/digital-transformation"
              class="w-full inline-flex items-center justify-center px-6 py-3 bg-tm-bg-primary dark:bg-tm-bg-secondary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              View Digital Report
            </NuxtLink>
          </div>
        </div>

        <!-- Global Banking Trends -->
        <div
          class="lg:col-span-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 flex flex-col"
        >
          <div class="flex justify-between items-start mb-5">
            <div class="flex flex-col gap-2">
              <span
                class="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-tm-txt-white text-xs font-600 uppercase tracking-wider rounded-full w-fit"
              >
                Global Market
              </span>
              <span class="text-sm text-tm-txt-light font-500">2024</span>
            </div>
            <div
              class="w-12 h-12 bg-tm-pri-0/10 text-tm-pri-0 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <path d="m4.9 4.9 14.2 14.2" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </div>

          <div class="flex-1 mb-6">
            <h3 class="text-lg font-600 text-tm-txt-primary mb-3 leading-tight">
              Global Banking & Finance Development Trends
            </h3>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Analysis of USD 180T global banking assets, digital payment evolution, and emerging
              market dynamics.
            </p>

            <!-- Trends -->
            <div class="space-y-3">
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm font-600 text-tm-pri-0">$19T</span>
                <span class="text-xs text-tm-txt-secondary">Digital payments by 2027</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm font-600 text-tm-pri-0">$500B+</span>
                <span class="text-xs text-tm-txt-secondary">Green bond issuance</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm font-600 text-tm-pri-0">1M+</span>
                <span class="text-xs text-tm-txt-secondary">FinTech talent shortage</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <NuxtLink
              to="/industries/banking-finance/global-trends"
              class="w-full inline-flex items-center justify-center px-6 py-3 bg-tm-bg-primary dark:bg-tm-bg-secondary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              Access Global Report
            </NuxtLink>
          </div>
        </div>

        <!-- Wealth Management Industry -->
        <div
          class="lg:col-span-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 flex flex-col"
        >
          <div class="flex justify-between items-start mb-5">
            <div class="flex flex-col gap-2">
              <span
                class="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-tm-txt-white text-xs font-600 uppercase tracking-wider rounded-full w-fit"
              >
                Wealth Focus
              </span>
              <span class="text-sm text-tm-txt-light font-500">2024</span>
            </div>
            <div
              class="w-12 h-12 bg-tm-pri-0/10 text-tm-pri-0 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                />
              </svg>
            </div>
          </div>

          <div class="flex-1 mb-6">
            <h3 class="text-lg font-600 text-tm-txt-primary mb-3 leading-tight">
              Banking & Finance Industry Report - Wealth Management
            </h3>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Global wealth management sector analysis covering HNWI growth, digital platform
              adoption, and alternative investment trends.
            </p>

            <!-- Wealth Stats -->
            <div class="space-y-3">
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <span class="block text-base font-700 text-tm-pri-0 mb-1">$500T</span>
                <span class="text-xs text-tm-txt-light">Global wealth pool by 2025</span>
              </div>
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <span class="block text-sm font-600 text-tm-pri-0 mb-1">Asia-Pacific</span>
                <span class="text-xs text-tm-txt-light">Leading growth region</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <NuxtLink
              to="/industries/banking-finance/wealth-management"
              class="w-full inline-flex items-center justify-center px-6 py-3 bg-tm-bg-primary dark:bg-tm-bg-secondary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              View Wealth Report
            </NuxtLink>
          </div>
        </div>

        <!-- Investment Banking -->
        <div
          class="lg:col-span-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 flex flex-col"
        >
          <div class="flex justify-between items-start mb-5">
            <div class="flex flex-col gap-2">
              <span
                class="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-tm-txt-white text-xs font-600 uppercase tracking-wider rounded-full w-fit"
              >
                Investment Banking
              </span>
              <span class="text-sm text-tm-txt-light font-500">2024</span>
            </div>
            <div
              class="w-12 h-12 bg-tm-pri-0/10 text-tm-pri-0 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
          </div>

          <div class="flex-1 mb-6">
            <h3 class="text-lg font-600 text-tm-txt-primary mb-3 leading-tight">
              Banking & Finance Industry Report - Investment Banking
            </h3>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Investment banking sector analysis covering M&A activity, IPO market recovery, and
              sustainable finance growth trends.
            </p>

            <!-- Investment Metrics -->
            <div class="space-y-3">
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-xs text-tm-txt-secondary">M&A Deal Values (2025)</span>
                <span class="text-sm font-600 text-tm-pri-0">$4T+</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-xs text-tm-txt-secondary">Leading Markets</span>
                <span class="text-sm font-600 text-tm-pri-0">HK, Dubai, SG</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <NuxtLink
              to="/industries/banking-finance/investment-banking"
              class="w-full inline-flex items-center justify-center px-6 py-3 bg-tm-bg-primary dark:bg-tm-bg-secondary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              View IB Report
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Complete Package CTA -->
      <div
        class="relative p-12 bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary dark:from-tm-bg-primary dark:to-tm-bg-secondary rounded-3xl border border-tm-bd-card overflow-hidden"
      >
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div
            class="w-full h-full bg-gradient-conic from-tm-pri-0 via-transparent to-tm-pri-1 animate-spin animate-duration-20s"
          ></div>
        </div>

        <div class="relative z-1 text-center">
          <h3 class="text-2xl md:text-3xl font-600 text-tm-txt-primary mb-4">
            Complete Banking & Finance Intelligence Package
          </h3>
          <p
            class="text-base md:text-lg text-tm-txt-secondary max-w-700px mx-auto mb-8 leading-relaxed"
          >
            Access all five comprehensive reports with over 250 pages of market analysis, strategic
            insights, and industry forecasts. Includes quarterly updates and exclusive data access.
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-600px mx-auto mb-8">
            <div class="flex flex-col items-center gap-2">
              <span class="text-2xl">📊</span>
              <span class="text-sm text-tm-txt-primary font-500">250+ pages analysis</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <span class="text-2xl">📄</span>
              <span class="text-sm text-tm-txt-primary font-500">Quarterly updates</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <span class="text-2xl">💡</span>
              <span class="text-sm text-tm-txt-primary font-500">Strategic insights</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <span class="text-2xl">📈</span>
              <span class="text-sm text-tm-txt-primary font-500">Exclusive data</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 text-tm-txt-white text-base font-600 rounded-full border-2 border-tm-bd-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-w-60 justify-center"
              @click="openConsultationModal"
            >
              Get Complete Package
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-4 bg-tm-bg-primary dark:bg-tm-bg-secondary text-tm-txt-primary text-base font-600 rounded-full border-2 border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 min-w-60"
              @click="openExpertModal"
            >
              Request Custom Analysis
            </button>
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
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'

  // 弹出框状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // 简化版专家咨询弹出框控制
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整版咨询表单弹出框控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }
</script>

<style scoped>
  .animate-duration-20s {
    animation-duration: 20s;
  }
</style>
