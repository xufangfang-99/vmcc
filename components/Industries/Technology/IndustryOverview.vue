<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 right-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-br from-[var(--tm-accent-primary)] to-transparent rounded-full blur-3xl"
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
            <path d="M9 19c-5 0-8-3-8-7s3-7 8-7 8 3 8 7-3 7-8 7z"></path>
            <path d="M15 12h6m-3-3v6"></path>
          </svg>
        </div>
        <h2 class="text-4xl md:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Technology Industry Landscape
        </h2>
        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed"
        >
          The technology sector is experiencing unprecedented transformation in 2025, driven by AI
          acceleration, cloud infrastructure expansion, and emerging security challenges that
          reshape how businesses operate globally.
        </p>
      </div>

      <!-- Market Overview Stats -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 text-center"
        >
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$500B+</div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider mb-2">
            Global AI Spending
          </div>
          <div class="text-xs text-[var(--tm-txt-light)]">Projected for 2025</div>
        </div>
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 text-center"
        >
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$1.2T</div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider mb-2">
            Cloud Services
          </div>
          <div class="text-xs text-[var(--tm-txt-light)]">Market Size 2025</div>
        </div>
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 text-center"
        >
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$200B+</div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider mb-2">
            Cybersecurity
          </div>
          <div class="text-xs text-[var(--tm-txt-light)]">Global Spending</div>
        </div>
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 text-center"
        >
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">50%</div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider mb-2">
            Edge Processing
          </div>
          <div class="text-xs text-[var(--tm-txt-light)]">By 2026 (Gartner)</div>
        </div>
      </div>

      <!-- Core Technology Areas -->
      <div class="mb-20">
        <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] text-center mb-12">
          Five Pillars of Technology Transformation
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- AI/ML & Cloud Infrastructure -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 group"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              AI/ML & Cloud Infrastructure
            </h4>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Generative AI adoption accelerates with banks deploying AI-driven chatbots, healthcare
              firms using AI for diagnostics, and retailers integrating AI into supply chain
              forecasting.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-light)]">
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>20% cloud spending growth in 2025</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Multi-cloud strategy adoption</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Hybrid cloud in regulated industries</span>
              </li>
            </ul>
          </div>

          <!-- Cybersecurity & AI Defense -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 group"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Cybersecurity & AI Defense
            </h4>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              AI-powered threat detection and zero trust architecture expansion address rising cyber
              threats, with average breach costs reaching USD 4.5 million per incident.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-light)]">
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Real-time anomaly detection</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Zero trust architecture adoption</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>AI-powered malware defense</span>
              </li>
            </ul>
          </div>

          <!-- Cloud Cost Optimization -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 group"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Cloud Cost Optimization
            </h4>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              FinOps becomes standard practice with over 60% of large enterprises adopting
              specialized teams, achieving 15-25% cost savings through real-time monitoring.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-light)]">
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>FinOps team implementation</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>AI-driven workload optimization</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Multi-cloud cost management</span>
              </li>
            </ul>
          </div>

          <!-- AI Regulation & Governance -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 group"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              AI Regulation & Governance
            </h4>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              EU AI Act implementation in 2025 sets global standards, while enterprises establish AI
              ethics boards and appoint Chief AI Officers for responsible AI adoption.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-light)]">
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>EU AI Act compliance</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>AI ethics board establishment</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Third-party audit requirements</span>
              </li>
            </ul>
          </div>

          <!-- Edge Computing + AI -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300 hover:-translate-y-1 group md:col-span-2 lg:col-span-1"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Edge Computing + AI
            </h4>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Edge-AI convergence reshapes data processing with telecom operators integrating edge
              computing into 5G infrastructure for ultra-low-latency AI services.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-light)]">
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>5G edge AI integration</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Industrial IoT automation</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span>Real-time healthcare monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Talent Demands -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-8 md:p-12 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] mb-20"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            High-Demand Technology Roles
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Organizations are restructuring teams to combine domain expertise with AI capabilities,
            creating unprecedented demand for specialized technology professionals.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">AI/ML Specialists</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">MLOps, Data Engineering, AI Ethics</p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Security Architects</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Cloud Security, SOC Analysts, Ethical Hackers
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">FinOps Engineers</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Cloud Cost Analysts, Financial Architects
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Compliance Officers</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">AI Policy Analysts, Legal Advisors</p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
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
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Edge-AI Engineers</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">IoT Specialists, System Architects</p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 19c-5 0-8-3-8-7s3-7 8-7 8 3 8 7-3 7-8 7z"></path>
                <path d="M15 12h6m-3-3v6"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">DevOps Engineers</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">Cloud Infrastructure, Automation</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-6 p-8 md:p-12 text-white"
        >
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Lead Technology Transformation?
          </h3>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Connect with our technology experts to explore how we can help you build future-ready
            teams and navigate the evolving landscape of AI, cloud, and emerging technologies.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
              @click="openExpertModal"
            >
              <span>Explore Solutions</span>
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
              <span>Schedule Consultation</span>
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
  /* Custom animations and styles */
  .animation-delay-300 {
    animation-delay: 0.3s;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
  }

  .animation-delay-900 {
    animation-delay: 0.9s;
  }

  /* Responsive grid adjustments */
  @media (max-width: 768px) {
    .grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }

    .grid-cols-3 {
      grid-template-columns: 1fr;
    }

    .md\:col-span-2 {
      grid-column: span 1;
    }
  }

  @media (max-width: 640px) {
    .grid-cols-4 {
      grid-template-columns: 1fr;
    }
  }
</style>
