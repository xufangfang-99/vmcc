<template>
  <section class="py-20 bg-tm-bg-primary reports-section">
    <div class="max-w-350 mx-auto px-5">
      <!-- Section Header -->
      <div class="text-center mb-15">
        <h2 class="text-3xl md:text-4xl font-300 text-tm-txt-primary mb-4 leading-tight">
          Healthcare Industry Reports &
          <span
            class="font-600 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 bg-clip-text text-transparent"
          >
            Analysis
          </span>
        </h2>
        <p class="text-lg md:text-xl text-tm-txt-secondary max-w-200 mx-auto leading-relaxed">
          Comprehensive healthcare sector insights covering digital health, biotechnology,
          pharmaceuticals, medical devices, and UAE medical tourism with detailed analysis and
          strategic recommendations
        </p>
      </div>

      <!-- Main Reports Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-15">
        <!-- Healthcare Industry Report - Featured (2x2 span) -->
        <div
          class="lg:col-span-6 lg:row-span-2 bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 relative overflow-hidden flex flex-col"
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
                  Healthcare Industry
                </span>
                <span class="text-sm text-tm-txt-light font-500">2025 Edition</span>
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
            </div>

            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-600 text-tm-txt-primary mb-4 leading-tight">
                Healthcare Industry Report - Digital Health & Innovation
              </h3>
              <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
                Comprehensive analysis of the global healthcare industry standing at the
                intersection of demographic shifts, technological innovation, and health challenges.
                Covering digital health expansion, biotechnology breakthroughs, and talent demand
                across emerging markets.
              </p>

              <!-- Key Insights Grid -->
              <div class="mb-6">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-3 uppercase tracking-wider">
                  Key Industry Insights
                </h4>
                <div class="grid grid-cols-2 gap-3">
                  <div
                    class="flex flex-col items-center p-3 bg-tm-bg-primary rounded-xl text-center"
                  >
                    <span class="text-xs text-tm-txt-light mb-1">Global GDP Share</span>
                    <span class="text-lg font-700 text-tm-pri-0">>10%</span>
                  </div>
                  <div
                    class="flex flex-col items-center p-3 bg-tm-bg-primary rounded-xl text-center"
                  >
                    <span class="text-xs text-tm-txt-light mb-1">AI in Healthcare</span>
                    <span class="text-lg font-700 text-tm-pri-0">Growing</span>
                  </div>
                  <div
                    class="flex flex-col items-center p-3 bg-tm-bg-primary rounded-xl text-center"
                  >
                    <span class="text-xs text-tm-txt-light mb-1">Talent Demand</span>
                    <span class="text-lg font-700 text-tm-pri-0">Critical</span>
                  </div>
                  <div
                    class="flex flex-col items-center p-3 bg-tm-bg-primary rounded-xl text-center"
                  >
                    <span class="text-xs text-tm-txt-light mb-1">Innovation Rate</span>
                    <span class="text-lg font-700 text-tm-pri-0">High</span>
                  </div>
                </div>
              </div>

              <!-- Highlights -->
              <div class="flex flex-col gap-3 mb-6">
                <div class="flex items-center gap-3">
                  <span class="text-base">🏥</span>
                  <span class="text-sm text-tm-txt-primary font-500">
                    Digital health becoming standard in patient care
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-base">🧬</span>
                  <span class="text-sm text-tm-txt-primary font-500">
                    Gene therapies and mRNA technologies accelerating
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-base">🌍</span>
                  <span class="text-sm text-tm-txt-primary font-500">
                    Asia, Middle East investing heavily in medical technology
                  </span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 mt-auto">
              <NuxtLink
                to="/industries/healthcare-medical-tourism/healthcare-industry"
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
                class="flex-1 px-6 py-3 bg-tm-bg-primary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300"
                @click="openExpertModal"
              >
                Get Report Summary
              </button>
            </div>
          </div>
        </div>

        <!-- Pharmaceuticals Report -->
        <div
          class="lg:col-span-3 bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 flex flex-col"
        >
          <div class="flex justify-between items-start mb-5">
            <div class="flex flex-col gap-2">
              <span
                class="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-tm-txt-white text-xs font-600 uppercase tracking-wider rounded-full w-fit"
              >
                Pharmaceuticals
              </span>
              <span class="text-sm text-tm-txt-light font-500">2025</span>
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line
                  x1="16"
                  y1="13"
                  x2="8"
                  y2="13"
                ></line>
                <line
                  x1="16"
                  y1="17"
                  x2="8"
                  y2="17"
                ></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
            </div>
          </div>

          <div class="flex-1 mb-6">
            <h3 class="text-lg font-600 text-tm-txt-primary mb-3 leading-tight">
              Pharmaceuticals Industry Report
            </h3>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Analysis of USD 1.8 trillion pharmaceuticals market with biopharmaceutical growth,
              mRNA expansion, and digital transformation reducing R&D cycles.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-1 gap-3 mb-4">
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <span class="block text-base font-700 text-tm-pri-0 mb-1">$1.8T</span>
                <span class="text-xs text-tm-txt-light">Market Size</span>
              </div>
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <span class="block text-base font-700 text-tm-pri-0 mb-1">$2B+</span>
                <span class="text-xs text-tm-txt-light">Avg Drug Development</span>
              </div>
            </div>

            <!-- Features -->
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-tm-pri-0 rounded-full flex-shrink-0"></div>
                <span class="text-xs text-tm-txt-secondary">Biologics market share growing</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-tm-pri-0 rounded-full flex-shrink-0"></div>
                <span class="text-xs text-tm-txt-secondary">mRNA cancer treatments</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-tm-pri-0 rounded-full flex-shrink-0"></div>
                <span class="text-xs text-tm-txt-secondary">AI-driven drug discovery</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <NuxtLink
              to="/industries/healthcare-medical-tourism/pharmaceuticals"
              class="w-full inline-flex items-center justify-center px-6 py-3 bg-tm-bg-primary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              View Pharma Report
            </NuxtLink>
          </div>
        </div>

        <!-- Medical Devices Report -->
        <div
          class="lg:col-span-3 bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 flex flex-col"
        >
          <div class="flex justify-between items-start mb-5">
            <div class="flex flex-col gap-2">
              <span
                class="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-tm-txt-white text-xs font-600 uppercase tracking-wider rounded-full w-fit"
              >
                Medical Devices
              </span>
              <span class="text-sm text-tm-txt-light font-500">2025</span>
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
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="14"
                  rx="2"
                  ry="2"
                ></rect>
                <line
                  x1="8"
                  y1="21"
                  x2="16"
                  y2="21"
                ></line>
                <line
                  x1="12"
                  y1="17"
                  x2="12"
                  y2="21"
                ></line>
              </svg>
            </div>
          </div>

          <div class="flex-1 mb-6">
            <h3 class="text-lg font-600 text-tm-txt-primary mb-3 leading-tight">
              Medical Devices Industry Report
            </h3>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Global medical devices industry reaching USD 650 billion, driven by IoMT devices,
              robotic surgery, and 3D printing innovations.
            </p>

            <!-- Trends -->
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-tm-bg-primary rounded-lg">
                <span class="text-sm font-600 text-tm-pri-0">$650B</span>
                <span class="text-xs text-tm-txt-secondary">Market Value 2025</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-tm-bg-primary rounded-lg">
                <span class="text-sm font-600 text-tm-pri-0">IoMT</span>
                <span class="text-xs text-tm-txt-secondary">Connected devices growth</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-tm-bg-primary rounded-lg">
                <span class="text-sm font-600 text-tm-pri-0">3D Print</span>
                <span class="text-xs text-tm-txt-secondary">Personalized implants</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <NuxtLink
              to="/industries/healthcare-medical-tourism/medical-devices"
              class="w-full inline-flex items-center justify-center px-6 py-3 bg-tm-bg-primary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              View Devices Report
            </NuxtLink>
          </div>
        </div>

        <!-- Biotechnology Report -->
        <div
          class="lg:col-span-3 bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 flex flex-col"
        >
          <div class="flex justify-between items-start mb-5">
            <div class="flex flex-col gap-2">
              <span
                class="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-tm-txt-white text-xs font-600 uppercase tracking-wider rounded-full w-fit"
              >
                Biotechnology
              </span>
              <span class="text-sm text-tm-txt-light font-500">2025</span>
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
          </div>

          <div class="flex-1 mb-6">
            <h3 class="text-lg font-600 text-tm-txt-primary mb-3 leading-tight">
              Biotechnology Industry Report
            </h3>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              USD 1.5 trillion biotech market projection with CRISPR therapies, synthetic biology,
              and global biotech hub emergence.
            </p>

            <!-- Biotech Stats -->
            <div class="space-y-3">
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <span class="block text-base font-700 text-tm-pri-0 mb-1">$1.5T</span>
                <span class="text-xs text-tm-txt-light">Market projection</span>
              </div>
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <span class="block text-sm font-600 text-tm-pri-0 mb-1">CRISPR</span>
                <span class="text-xs text-tm-txt-light">Gene editing advances</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <NuxtLink
              to="/industries/healthcare-medical-tourism/biotechnology"
              class="w-full inline-flex items-center justify-center px-6 py-3 bg-tm-bg-primary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              View Biotech Report
            </NuxtLink>
          </div>
        </div>

        <!-- UAE Medical Tourism Report -->
        <div
          class="lg:col-span-3 bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 flex flex-col"
        >
          <div class="flex justify-between items-start mb-5">
            <div class="flex flex-col gap-2">
              <span
                class="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-tm-txt-white text-xs font-600 uppercase tracking-wider rounded-full w-fit"
              >
                UAE Medical Tourism
              </span>
              <span class="text-sm text-tm-txt-light font-500">2025</span>
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
                ></circle>
                <path d="M2 12h20"></path>
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
          </div>

          <div class="flex-1 mb-6">
            <h3 class="text-lg font-600 text-tm-txt-primary mb-3 leading-tight">
              UAE Medical Tourism Development Report
            </h3>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              UAE medical tourism generating $8.5B revenue with 1.3M international patients. Dubai
              leads with 60% market share, specialized treatment growth.
            </p>

            <!-- Medical Tourism Stats -->
            <div class="space-y-3">
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <span class="block text-base font-700 text-tm-pri-0 mb-1">$8.5B</span>
                <span class="text-xs text-tm-txt-light">UAE medical tourism revenue</span>
              </div>
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <span class="block text-sm font-600 text-tm-pri-0 mb-1">1.3M</span>
                <span class="text-xs text-tm-txt-light">International patients</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <NuxtLink
              to="/industries/healthcare-medical-tourism/uae-medical-tourism"
              class="w-full inline-flex items-center justify-center px-6 py-3 bg-tm-bg-primary text-tm-txt-primary text-sm font-600 rounded-full border border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              View Tourism Report
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Complete Package CTA -->
      <div
        class="relative p-12 bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary rounded-3xl border border-tm-bd-card overflow-hidden"
      >
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div
            class="w-full h-full bg-gradient-conic from-tm-pri-0 via-transparent to-tm-pri-1 animate-spin animate-duration-20s"
          ></div>
        </div>

        <div class="relative z-1 text-center">
          <h3 class="text-2xl md:text-3xl font-600 text-tm-txt-primary mb-4">
            Complete Healthcare Industry Intelligence Package
          </h3>
          <p
            class="text-base md:text-lg text-tm-txt-secondary max-w-175 mx-auto mb-8 leading-relaxed"
          >
            Access all five comprehensive healthcare reports with over 300 pages of market analysis,
            strategic insights, and industry forecasts. Includes quarterly updates and exclusive
            healthcare talent market data.
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-150 mx-auto mb-8">
            <div class="flex flex-col items-center gap-2">
              <span class="text-2xl">🏥</span>
              <span class="text-sm text-tm-txt-primary font-500">300+ pages analysis</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <span class="text-2xl">🔄</span>
              <span class="text-sm text-tm-txt-primary font-500">Quarterly updates</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <span class="text-2xl">💡</span>
              <span class="text-sm text-tm-txt-primary font-500">Strategic insights</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <span class="text-2xl">📈</span>
              <span class="text-sm text-tm-txt-primary font-500">Talent market data</span>
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
              class="inline-flex items-center justify-center px-8 py-4 bg-tm-bg-primary text-tm-txt-primary text-base font-600 rounded-full border-2 border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-pri-0 hover:-translate-y-1 transition-all duration-300 min-w-60"
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
