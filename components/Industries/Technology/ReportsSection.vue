<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-200 h-200 opacity-5 pointer-events-none"
    >
      <div
        class="w-full h-full bg-gradient-radial from-[var(--tm-accent-primary)] to-transparent"
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
          </svg>
        </div>
        <h2 class="text-4xl md:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Technology Daily Reports 2025
        </h2>
        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed"
        >
          Comprehensive insights into the latest technology trends, market developments, and
          strategic opportunities shaping the digital transformation landscape in 2025.
        </p>
      </div>

      <!-- Reports Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <!-- AI/ML & Cloud Infrastructure Report -->
        <NuxtLink
          to="/industries/technology-ai/ai-cloud-infrastructure"
          class="group bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] relative overflow-hidden"
        >
          <!-- Hover Effect Overlay -->
          <div
            class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--tm-bg-white-alpha05)] to-transparent transition-transform duration-600 group-hover:translate-x-full"
          ></div>

          <div class="relative z-1">
            <div class="flex items-start justify-between mb-6">
              <div
                class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-8 h-8 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 19c-5 0-8-3-8-7s3-7 8-7 8 3 8 7-3 7-8 7z"></path>
                  <path d="M15 12h6m-3-3v6"></path>
                </svg>
              </div>
              <span
                class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-txt-white)] text-xs font-medium rounded-full"
              >
                FEATURED
              </span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              AI/ML & Cloud Infrastructure Expansion
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Explore how generative AI adoption accelerates across industries, with global AI
              spending projected to exceed USD 500 billion and cloud services surpassing USD 1.2
              trillion in 2025.
            </p>

            <!-- Key Highlights -->
            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>20% cloud spending growth projection</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Multi-cloud strategy adoption trends</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Edge AI growth in autonomous vehicles</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span
                class="text-sm font-medium text-[var(--tm-accent-primary)] group-hover:translate-x-1 transition-transform duration-300"
              >
                Read Full Report →
              </span>
              <span class="text-xs text-[var(--tm-txt-light)]">15 min read</span>
            </div>
          </div>
        </NuxtLink>

        <!-- Cybersecurity & AI Defense Report -->
        <NuxtLink
          to="/industries/technology-ai/cybersecurity-ai-defense"
          class="group bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] relative overflow-hidden"
        >
          <div
            class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--tm-bg-white-alpha05)] to-transparent transition-transform duration-600 group-hover:translate-x-full"
          ></div>

          <div class="relative z-1">
            <div class="flex items-start justify-between mb-6">
              <div
                class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
              <span class="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full">
                CRITICAL
              </span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Cybersecurity & AI Defense
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Cybersecurity enters a new era with global spending surpassing USD 200 billion.
              Discover how AI strengthens defense while attackers weaponize AI for sophisticated
              cyberattacks.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>USD 4.5M average breach cost</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Zero trust architecture expansion</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>AI-powered malware adaptation</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span
                class="text-sm font-medium text-[var(--tm-accent-primary)] group-hover:translate-x-1 transition-transform duration-300"
              >
                Read Full Report →
              </span>
              <span class="text-xs text-[var(--tm-txt-light)]">12 min read</span>
            </div>
          </div>
        </NuxtLink>

        <!-- Cloud Cost Optimization Report -->
        <NuxtLink
          to="/industries/technology-ai/cloud-cost-optimization"
          class="group bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] relative overflow-hidden"
        >
          <div
            class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--tm-bg-white-alpha05)] to-transparent transition-transform duration-600 group-hover:translate-x-full"
          ></div>

          <div class="relative z-1">
            <div class="flex items-start justify-between mb-6">
              <div
                class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-8 h-8 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                </svg>
              </div>
              <span
                class="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full"
              >
                TRENDING
              </span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Cloud Cost Optimization
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              With global cloud spending expected to surpass USD 1.2 trillion, enterprises
              prioritize FinOps strategies and automation to balance innovation with financial
              discipline.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>15-25% cost savings through FinOps</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>60% enterprises adopt FinOps teams</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>AI-driven workload optimization</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span
                class="text-sm font-medium text-[var(--tm-accent-primary)] group-hover:translate-x-1 transition-transform duration-300"
              >
                Read Full Report →
              </span>
              <span class="text-xs text-[var(--tm-txt-light)]">10 min read</span>
            </div>
          </div>
        </NuxtLink>

        <!-- AI Regulation & Governance Report -->
        <NuxtLink
          to="/industries/technology-ai/ai-regulation-governance"
          class="group bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] relative overflow-hidden"
        >
          <div
            class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--tm-bg-white-alpha05)] to-transparent transition-transform duration-600 group-hover:translate-x-full"
          ></div>

          <div class="relative z-1">
            <div class="flex items-start justify-between mb-6">
              <div
                class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-8 h-8 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                </svg>
              </div>
              <span
                class="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full"
              >
                REGULATORY
              </span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              AI Regulation & Governance
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              AI regulation becomes defining in 2025 as governments introduce new laws. Navigate the
              fragmented global regulatory landscape with our comprehensive compliance guide.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>EU AI Act implementation</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>6% global revenue fines</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-[var(--tm-txt-light)]">
                <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Chief AI Officer appointments</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span
                class="text-sm font-medium text-[var(--tm-accent-primary)] group-hover:translate-x-1 transition-transform duration-300"
              >
                Read Full Report →
              </span>
              <span class="text-xs text-[var(--tm-txt-light)]">18 min read</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Edge Computing + AI Report (Full Width) -->
      <div class="mb-20">
        <NuxtLink
          to="/industries/technology-ai/edge-computing-ai"
          class="group block bg-gradient-to-r from-[var(--tm-bg-secondary)] to-[var(--tm-bg-primary)] rounded-6 p-8 md:p-12 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] relative overflow-hidden"
        >
          <div
            class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--tm-bg-white-alpha05)] to-transparent transition-transform duration-600 group-hover:translate-x-full"
          ></div>

          <div class="relative z-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-20 h-20 bg-[var(--tm-bg-accentLight)] rounded-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    class="w-10 h-10 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    ></path>
                  </svg>
                </div>
                <span
                  class="px-4 py-2 bg-[var(--tm-accent-primary)] text-white text-sm font-medium rounded-full"
                >
                  INNOVATION SPOTLIGHT
                </span>
              </div>

              <h3
                class="text-3xl md:text-4xl font-semibold text-[var(--tm-txt-primary)] mb-6 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                Edge Computing + AI Use Cases
              </h3>

              <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-8">
                The convergence of edge computing and AI reshapes data processing. By 2026, Gartner
                predicts over 50% of enterprise data will be processed outside traditional data
                centers.
              </p>

              <div class="flex items-center gap-6 mb-8">
                <span
                  class="text-sm font-medium text-[var(--tm-accent-primary)] group-hover:translate-x-1 transition-transform duration-300"
                >
                  Explore Innovation Cases →
                </span>
                <span class="text-xs text-[var(--tm-txt-light)]">20 min read</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div
                class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)]"
              >
                <div class="text-2xl mb-2">📡</div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">5G Integration</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Ultra-low-latency AI services</p>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)]"
              >
                <div class="text-2xl mb-2">🏭</div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Industrial IoT</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Real-time quality control</p>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)]"
              >
                <div class="text-2xl mb-2">🏥</div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Healthcare</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Patient vitals monitoring</p>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)]"
              >
                <div class="text-2xl mb-2">🛒</div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Smart Retail</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Personalized recommendations</p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 md:p-12 border border-[var(--tm-bd-light)]"
        >
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Stay Ahead of Technology Trends
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 max-w-2xl mx-auto">
            Subscribe to our technology insights or speak with our experts to understand how these
            trends impact your talent strategy and business transformation.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--tm-accent-secondary)] transition-colors duration-300"
              @click="openExpertModal"
            >
              <span>Discuss Tech Strategy</span>
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
              class="inline-flex items-center justify-center px-8 py-3 border border-[var(--tm-bd-primary)] text-[var(--tm-txt-primary)] rounded-full font-semibold hover:bg-[var(--tm-bg-hover)] transition-colors duration-300"
              @click="openConsultationModal"
            >
              <span>Download Reports</span>
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
  /* Background gradient utilities */
  .bg-gradient-radial {
    background: radial-gradient(
      circle,
      var(--first-color, transparent) 0%,
      var(--second-color, transparent) 50%
    );
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .lg\:grid-cols-2 {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .grid-cols-2 {
      grid-template-columns: 1fr;
    }

    .text-6xl {
      font-size: 3rem;
    }

    .text-4xl {
      font-size: 2.5rem;
    }
  }
</style>
