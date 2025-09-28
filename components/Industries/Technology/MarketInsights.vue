<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 left-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-br from-[var(--tm-accent-secondary)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>
    <div class="absolute bottom-0 right-0 w-80 h-80 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-tl from-[var(--tm-accent-primary)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-1">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-[var(--tm-bg-accentLight)] rounded-5 mb-6"
        >
          <svg
            class="w-10 h-10 text-[var(--tm-accent-primary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M3 3v18h18"></path>
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
          </svg>
        </div>
        <h2 class="text-4xl md:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Market Insights & Trends
        </h2>
        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed"
        >
          Strategic intelligence on technology market dynamics, talent demands, and emerging
          opportunities that shape competitive advantage in the digital transformation era.
        </p>
      </div>

      <!-- Key Market Indicators -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 text-center"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mx-auto mb-6"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M12 2v20m8-10H4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Market Growth</h3>
          <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">20%</div>
          <p class="text-sm text-[var(--tm-txt-secondary)]">
            Cloud spending growth projection for 2025 according to Gartner estimates
          </p>
        </div>

        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 text-center"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mx-auto mb-6"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle
                cx="9"
                cy="7"
                r="4"
              ></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Talent Demand</h3>
          <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">60%</div>
          <p class="text-sm text-[var(--tm-txt-secondary)]">
            Large enterprises adopting FinOps teams for cloud cost optimization
          </p>
        </div>

        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 text-center"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mx-auto mb-6"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Security Focus</h3>
          <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">$4.5M</div>
          <p class="text-sm text-[var(--tm-txt-secondary)]">
            Average cost of cloud security breaches driving investment in AI defense
          </p>
        </div>
      </div>

      <!-- Industry Adoption Trends -->
      <div class="mb-20">
        <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] text-center mb-12">
          Industry Adoption Patterns
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Industry Sectors -->
          <div class="space-y-6">
            <div
              class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">
                  Banking & Finance
                </h4>
                <span class="text-sm text-[var(--tm-accent-primary)] font-medium">Leading</span>
              </div>
              <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed mb-4">
                Banks deploying AI-driven chatbots for personalized services and using machine
                learning for fraud detection within milliseconds.
              </p>
              <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                <div class="w-4/5 bg-[var(--tm-accent-primary)] rounded-2 h-2"></div>
              </div>
            </div>

            <div
              class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Healthcare</h4>
                <span class="text-sm text-[var(--tm-accent-primary)] font-medium">
                  Accelerating
                </span>
              </div>
              <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed mb-4">
                Healthcare firms using generative AI for diagnostics and drug discovery, with edge
                AI enabling real-time patient monitoring.
              </p>
              <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                <div class="w-3/4 bg-[var(--tm-accent-primary)] rounded-2 h-2"></div>
              </div>
            </div>

            <div
              class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Manufacturing</h4>
                <span class="text-sm text-[var(--tm-accent-primary)] font-medium">Growing</span>
              </div>
              <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed mb-4">
                Smart manufacturing adopting AI at the edge for equipment monitoring, predictive
                maintenance, and real-time quality control.
              </p>
              <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                <div class="w-3/5 bg-[var(--tm-accent-primary)] rounded-2 h-2"></div>
              </div>
            </div>

            <div
              class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Retail</h4>
                <span class="text-sm text-[var(--tm-accent-primary)] font-medium">Emerging</span>
              </div>
              <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed mb-4">
                Retailers integrating AI into supply chain forecasting, hyper-personalized
                marketing, and smart store automation with edge-AI analytics.
              </p>
              <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                <div class="w-2/5 bg-[var(--tm-accent-primary)] rounded-2 h-2"></div>
              </div>
            </div>
          </div>

          <!-- Right Side - Key Statistics -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)]"
          >
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              Market Transformation Metrics
            </h4>

            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Multi-cloud adoption</span>
                <span class="text-lg font-semibold text-[var(--tm-txt-primary)]">85%</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Zero trust implementation</span>
                <span class="text-lg font-semibold text-[var(--tm-txt-primary)]">72%</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[var(--tm-txt-secondary)]">AI ethics board establishment</span>
                <span class="text-lg font-semibold text-[var(--tm-txt-primary)]">58%</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Edge processing adoption</span>
                <span class="text-lg font-semibold text-[var(--tm-txt-primary)]">43%</span>
              </div>
            </div>

            <div class="mt-8 p-4 bg-[var(--tm-bg-accentLight)] rounded-4">
              <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Key Insight</h5>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Organizations combining AI innovation with cost-efficient, secure cloud strategies
                are gaining long-term market leadership in 2025.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Emerging Challenges & Opportunities -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <!-- Challenges -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)]"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-red-500/10 rounded-3 flex items-center justify-center">
              <svg
                class="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Market Challenges</h3>
          </div>

          <div class="space-y-4">
            <div class="border-l-4 border-red-500/30 pl-4">
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">Skills Gap Crisis</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Skills gaps in cloud cost management and AI security limiting adoption of advanced
                practices across industries.
              </p>
            </div>

            <div class="border-l-4 border-red-500/30 pl-4">
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                Regulatory Fragmentation
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Fragmented AI regulations increasing compliance costs for global companies, with EU
                AI Act setting 6% revenue fines.
              </p>
            </div>

            <div class="border-l-4 border-red-500/30 pl-4">
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">Hidden Cloud Costs</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Data transfer fees and shadow IT subscriptions inflating total cloud expenses
                despite FinOps implementations.
              </p>
            </div>

            <div class="border-l-4 border-red-500/30 pl-4">
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                Geopolitical Cyber Risks
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Nation-state cyberattacks escalating, targeting energy grids and financial systems
                amid global competition.
              </p>
            </div>
          </div>
        </div>

        <!-- Opportunities -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)]"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-green-500/10 rounded-3 flex items-center justify-center">
              <svg
                class="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Growth Opportunities</h3>
          </div>

          <div class="space-y-4">
            <div class="border-l-4 border-green-500/30 pl-4">
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">Edge-AI Convergence</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                By 2026, over 50% of enterprise data will be processed at the edge, creating massive
                opportunities for real-time AI applications.
              </p>
            </div>

            <div class="border-l-4 border-green-500/30 pl-4">
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                5G Infrastructure Integration
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Telecom operators integrating edge computing into 5G infrastructure for
                ultra-low-latency AI services and smart cities.
              </p>
            </div>

            <div class="border-l-4 border-green-500/30 pl-4">
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                Responsible AI Leadership
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Companies embedding compliance and transparency into AI strategy gaining trust and
                competitive advantage in regulated markets.
              </p>
            </div>

            <div class="border-l-4 border-green-500/30 pl-4">
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">FinOps Cost Savings</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Organizations reporting 15-25% cost savings through FinOps implementation and
                AI-driven workload optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Talent Market Outlook -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-8 md:p-12 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] mb-20"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Technology Talent Market Outlook
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Organizations are restructuring teams to combine domain expertise with AI capabilities,
            creating unprecedented demand for specialized technology professionals across all
            sectors.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
          >
            <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-2">Critical</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">MLOps Engineers</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)]">Data Engineering & AI Ethics</p>
          </div>

          <div
            class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
          >
            <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-2">High</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Cloud Security</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)]">SOC Analysts & Architects</p>
          </div>

          <div
            class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
          >
            <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-2">Growing</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">FinOps Specialists</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)]">Cost Engineers & Analysts</p>
          </div>

          <div
            class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
          >
            <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-2">Emerging</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">AI Compliance</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)]">Policy & Legal Advisors</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-6 p-8 md:p-12 text-white"
        >
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">
            Navigate Technology Market Dynamics
          </h3>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Stay ahead of market trends and talent demands with our strategic insights. Connect with
            our technology experts to discuss how these dynamics impact your business strategy.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
              @click="openExpertModal"
            >
              <span>Market Strategy Discussion</span>
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-colors duration-300"
              @click="openConsultationModal"
            >
              <span>Request Insights Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Expert Consultation Modal -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- Full Consultation Form Modal -->
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

  // Modal state management
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // Expert consultation modal controls
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // Full consultation form modal controls
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }
</script>

<style scoped>
  /* Custom animations and responsive adjustments */
  @media (max-width: 768px) {
    .grid-cols-3 {
      grid-template-columns: 1fr;
    }

    .lg\:grid-cols-2 {
      grid-template-columns: 1fr;
    }

    .lg\:grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }

    .text-6xl {
      font-size: 3rem;
    }
  }

  @media (max-width: 640px) {
    .md\:grid-cols-2 {
      grid-template-columns: 1fr;
    }

    .lg\:grid-cols-4 {
      grid-template-columns: 1fr;
    }
  }
</style>
