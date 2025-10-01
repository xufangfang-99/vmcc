<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 right-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-br from-[var(--tm-accent-primary)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>
    <div class="absolute bottom-20 left-20 w-60 h-60 opacity-3">
      <div
        class="w-full h-full bg-gradient-to-tr from-[var(--tm-accent-secondary)] to-transparent rounded-full blur-2xl"
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
        <h2 class="text-5xl md:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Industry 4.0 Transformation
        </h2>
        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          The global manufacturing sector is undergoing the Fourth Industrial Revolution,
          characterized by deep integration of digitalization, intelligence, and automation,
          transforming traditional production into smart, connected systems.
        </p>
      </div>

      <!-- Key Transformation Areas Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-15 mb-25">
        <!-- Smart Factories as Competitive Advantage -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
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
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Smart Factories as Competitive Advantage
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Smart factories utilize real-time data collection and machine-to-machine
                communication to increase transparency and efficiency. Pilot factories have
                demonstrated 30%–50% improvements in production efficiency.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Real-time data collection and analytics
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Machine-to-machine communication systems
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Enhanced production transparency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Flexible Production Systems -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
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
                <path d="M12 3v12M3 12l9-9 9 9"></path>
                <path
                  d="M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                ></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Shift Toward Flexible Production
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Rising demand for customization and small-batch manufacturing is pushing factories
                to adopt modular equipment and automated flexible production lines to meet diverse
                customer requirements.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Customization and small-batch manufacturing
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Modular equipment adoption
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Automated flexible production lines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cross-Industry Technology Convergence -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
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
                <path d="M12 2v20M2 12h20"></path>
                <path d="m19 9-7 7-7-7"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Cross-Industry Technology Convergence
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Integration with 5G, cloud, edge computing, and blockchain enhances real-time supply
                chain visibility and intelligent decision-making across manufacturing operations.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    5G and edge computing integration
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Cloud and blockchain technologies
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Real-time supply chain visibility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Green and Sustainable Manufacturing -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
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
                <path d="M12 3v12M21 12H9"></path>
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Green and Sustainable Manufacturing
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Industry 4.0 aligns with sustainability goals by using energy-monitoring systems and
                optimization algorithms to reduce emissions and waste while improving environmental
                performance.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Energy-monitoring systems
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Optimization algorithms for waste reduction
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    ESG-driven investment attraction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Technology Drivers Section -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-12 text-white mb-25"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-semibold mb-4 text-white">Key Technology Drivers</h3>
          <p class="text-xl opacity-90 text-white">
            Core technologies enabling Industry 4.0 transformation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Industrial IoT -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-4 flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-8 h-8 text-white"
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
            <h4 class="text-lg font-semibold text-white mb-3">Industrial IoT (IIoT)</h4>
            <p class="text-sm text-white/80 leading-relaxed">
              Enables end-to-end monitoring of production processes, supporting predictive
              maintenance and energy management
            </p>
          </div>

          <!-- AI & Machine Learning -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-4 flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white mb-3">AI & Machine Learning</h4>
            <p class="text-sm text-white/80 leading-relaxed">
              Applied in quality control, defect detection, and predictive maintenance to minimize
              downtime and improve yield rates
            </p>
          </div>

          <!-- Collaborative Robots -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-4 flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-8 h-8 text-white"
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
            <h4 class="text-lg font-semibold text-white mb-3">Collaborative Robots (Cobots)</h4>
            <p class="text-sm text-white/80 leading-relaxed">
              Work safely alongside human workers, handling repetitive or hazardous tasks while
              improving human-machine synergy
            </p>
          </div>

          <!-- Digital Twins -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-4 flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 2v20M2 12h20"></path>
                <path d="m19 9-7 7-7-7"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white mb-3">Digital Twins</h4>
            <p class="text-sm text-white/80 leading-relaxed">
              Virtual replicas of factories and processes enable risk-free testing, process
              optimization, and equipment utilization improvements
            </p>
          </div>

          <!-- Autonomous Mobile Robots -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-4 flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M8 17l4 4 4-4M12 12v9"></path>
                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white mb-3">Autonomous Mobile Robots (AMRs)</h4>
            <p class="text-sm text-white/80 leading-relaxed">
              Widely adopted in warehouses and production lines to enhance material handling and
              supply chain agility
            </p>
          </div>

          <!-- Edge Computing & Cloud -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-4 flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white mb-3">Edge Computing & Cloud</h4>
            <p class="text-sm text-white/80 leading-relaxed">
              Edge computing provides real-time responsiveness, while cloud platforms centralize
              data management and analytics
            </p>
          </div>
        </div>
      </div>

      <!-- Challenges & Opportunities -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Challenges -->
        <div class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-14 h-14 bg-red-100 rounded-4 flex items-center justify-center">
              <svg
                class="w-7 h-7 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                Industry Challenges
              </h3>
              <p class="text-[var(--tm-txt-secondary)]">Barriers to Industry 4.0 adoption</p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div
                class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  High Upfront Investment
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Particularly burdensome for SMEs requiring significant capital for technology
                  adoption
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">Cybersecurity Risks</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Increased threats to operational continuity from connected systems
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Workforce Skill Transition
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Global challenge in bridging digital skills gap and training workforce
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Opportunities -->
        <div class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-14 h-14 bg-green-100 rounded-4 flex items-center justify-center">
              <svg
                class="w-7 h-7 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                Strategic Opportunities
              </h3>
              <p class="text-[var(--tm-txt-secondary)]">Benefits for Industry 4.0 leaders</p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div
                class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Smart Manufacturing Efficiency
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Can boost overall efficiency by 20%–30% through intelligent automation
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Supply Chain Transparency
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Enhanced agility supports global operations and risk management
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  ESG-Driven Investment
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Integration with sustainable practices attracts long-term capital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic can be added here if needed
</script>

<style scoped>
  /* Deep color mode adaptations */
  .dark .bg-red-100 {
    background: var(--tm-bg-whiteAlpha10);
  }

  .dark .text-red-600 {
    color: #ef4444;
  }

  .dark .bg-green-100 {
    background: var(--tm-bg-whiteAlpha10);
  }

  .dark .text-green-600 {
    color: #22c55e;
  }
</style>
