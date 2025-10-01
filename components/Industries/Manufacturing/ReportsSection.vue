<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-20 left-20 w-80 h-80 opacity-3">
      <div
        class="w-full h-full bg-gradient-to-br from-[var(--tm-accent-primary)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>
    <div class="absolute bottom-0 right-0 w-60 h-60 opacity-4">
      <div
        class="w-full h-full bg-gradient-to-tl from-[var(--tm-accent-secondary)] to-transparent rounded-full blur-2xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-6 relative z-1">
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
            <polyline points="10,9 9,9 8,9"></polyline>
          </svg>
        </div>
        <h2 class="text-5xl md:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Manufacturing Intelligence Reports
        </h2>
        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          Comprehensive analysis of manufacturing transformation, covering Industry 4.0 integration,
          smart factories, automation technologies, and digital supply chain evolution across global
          manufacturing sectors.
        </p>
      </div>

      <!-- Reports Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-15">
        <!-- Industry 4.0 & Automation Integration Report -->
        <div class="group">
          <NuxtLink
            to="/industries/manufacturing/industry-4-automation-integration"
            class="block bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-2 h-full"
          >
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  ></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m15.5 7.5-3 3-3-3"></path>
                  <path d="m15.5 16.5-3-3-3 3"></path>
                </svg>
              </div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Industry 4.0
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Industry 4.0 & Automation Integration
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              Deep integration of digitalization, intelligence, and automation transforming
              traditional assembly lines into highly connected, flexible, and adaptive smart
              production systems.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Smart Factory Competitive Advantage
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Cross-Industry Technology Convergence
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Green Manufacturing Integration
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-[var(--tm-accent-primary)] font-medium">
                Read Full Report →
              </span>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">30-50%</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Supply Chain Digitalization Report -->
        <div class="group">
          <NuxtLink
            to="/industries/manufacturing/supply-chain-digitalization"
            class="block bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-2 h-full"
          >
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Supply Chain
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Supply Chain Digitalization & Automation
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              Industry 4.0 technologies combining digitalization and automation enable manufacturers
              to achieve visibility, transparency, and intelligence across complex global supply
              chains.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  End-to-End Supply Visibility
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  AI-Powered Risk Prediction
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Automated Warehousing & Logistics
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-[var(--tm-accent-primary)] font-medium">
                Read Full Report →
              </span>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">IoT+AI</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Smart Factories & Human-Machine Collaboration Report -->
        <div class="group">
          <NuxtLink
            to="/industries/manufacturing/smart-factories-human-machine-collaboration"
            class="block bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-2 h-full"
          >
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                  ></circle>
                </svg>
              </div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Smart Factory
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Smart Factories & Human-Machine Collaboration
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              Evolution from traditional automated factories toward smart facilities emphasizing
              collaboration between humans and machines through AI, collaborative robots, and data
              analytics.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Human-Robot Collaboration (HRC)
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  AR/VR Training & Production
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Workforce Role Transformation
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-[var(--tm-accent-primary)] font-medium">
                Read Full Report →
              </span>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">HRC</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Predictive Maintenance & Quality Control Report -->
        <div class="group">
          <NuxtLink
            to="/industries/manufacturing/predictive-maintenance-quality-control"
            class="block bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-2 h-full"
          >
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Predictive
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Predictive Maintenance & Smart Quality Control
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              IoT sensors, AI, and machine learning enable manufacturers to intervene before
              equipment failures occur and monitor quality in real-time, reducing downtime and
              improving consistency.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Predictive over Reactive Maintenance
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  AI-Powered Computer Vision
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Data-Driven Continuous Improvement
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-[var(--tm-accent-primary)] font-medium">
                Read Full Report →
              </span>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">Zero</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Supply Chain Real-Time Collaboration Report -->
        <div class="group lg:col-span-2 xl:col-span-1">
          <NuxtLink
            to="/industries/manufacturing/supply-chain-real-time-collaboration"
            class="block bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-2 h-full"
          >
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Real-time
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Supply Chain Real-Time Collaboration
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              Manufacturing companies shifting focus beyond factory efficiency to supply chain
              digitalization and real-time collaboration using IoT, blockchain, cloud platforms, and
              AI technologies.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  End-to-End Visibility as Core Competence
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Smart Inventory & Demand Forecasting
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Decentralization & Resilience
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-[var(--tm-accent-primary)] font-medium">
                Read Full Report →
              </span>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">2025+</div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Featured Insights Banner -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 md:p-12 text-white"
      >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div class="lg:col-span-2">
            <h3 class="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Manufacturing Industry Intelligence
            </h3>
            <p class="text-lg opacity-90 mb-6 text-white">
              Access comprehensive reports covering Industry 4.0 transformation, smart factory
              evolution, automation integration, and digital supply chain advancement. Essential
              insights for manufacturing leaders navigating the digital transformation.
            </p>
            <div class="flex flex-wrap gap-4">
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
              >
                Automation Engineers
              </span>
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
              >
                AI Specialists
              </span>
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
              >
                Data Scientists
              </span>
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
              >
                Digital Transformation Leaders
              </span>
            </div>
          </div>

          <div class="text-center lg:text-right">
            <button
              class="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              @click="openConsultationModal"
            >
              <svg
                class="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 4.5v15m7.5-7.5h-15"></path>
              </svg>
              Get Full Access
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Inject modal controls from parent
  const openConsultationModal = inject('openConsultationModal') as (() => void) | undefined

  // // Fallback handler if injection fails
  // const handleConsultationModal = () => {
  //   if (openConsultationModal) {
  //     openConsultationModal()
  //   } else {
  //     console.warn('Consultation modal handler not available')
  //   }
  // }
</script>

<style scoped>
  /* Ensure consistent card heights in grid */
  .grid > .group > a {
    display: flex;
    flex-direction: column;
  }

  /* Responsive grid adjustments */
  @media (max-width: 1024px) {
    .xl\:col-span-1 {
      grid-column: span 1;
    }
  }

  @media (max-width: 768px) {
    .lg\:col-span-2 {
      grid-column: span 1;
    }
  }
</style>
