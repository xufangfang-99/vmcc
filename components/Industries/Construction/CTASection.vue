<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-100 h-100 opacity-5">
        <div
          class="w-full h-full bg-gradient-to-br from-[var(--tm-accent-primary)] to-transparent rounded-full blur-3xl"
        ></div>
      </div>
      <div class="absolute bottom-20 right-20 w-80 h-80 opacity-4">
        <div
          class="w-full h-full bg-gradient-to-tl from-[var(--tm-accent-secondary)] to-transparent rounded-full blur-2xl"
        ></div>
      </div>
    </div>

    <div class="max-w-350 mx-auto px-6 relative z-1">
      <!-- Main CTA Content -->
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-[var(--tm-bg-accentLight)] rounded-5 mb-8"
        >
          <svg
            class="w-10 h-10 text-[var(--tm-accent-primary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>

        <h2
          class="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--tm-txt-primary)] mb-8 leading-tight"
        >
          Transform Your Construction
          <span class="block text-[var(--tm-accent-primary)] font-semibold">Future Today</span>
        </h2>

        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed mb-12"
        >
          Partner with VMMC's construction industry specialists to navigate the 2025 transformation.
          Access expert talent in sustainable building, smart cities, and digital construction
          technologies.
        </p>

        <!-- Key Transformation Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-15">
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$570B</div>
            <div
              class="text-sm uppercase tracking-wider text-[var(--tm-txt-secondary)] font-medium"
            >
              Green Materials Market by 2030
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">30%</div>
            <div
              class="text-sm uppercase tracking-wider text-[var(--tm-txt-secondary)] font-medium"
            >
              Sustainable Construction Share
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">50%</div>
            <div
              class="text-sm uppercase tracking-wider text-[var(--tm-txt-secondary)] font-medium"
            >
              Time Reduction via Modular
            </div>
          </div>
        </div>

        <!-- Primary Action Buttons -->
        <div class="flex flex-col md:flex-row gap-6 justify-center mb-15">
          <button
            class="inline-flex items-center justify-center px-10 py-4 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold text-lg hover:bg-[var(--tm-accent-secondary)] transition-all duration-300 hover:-translate-y-1 shadow-[var(--tm-shadow-accent)]"
            @click="openConsultationModal"
          >
            <svg
              class="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
            Get Construction Intelligence
          </button>

          <button
            class="inline-flex items-center justify-center px-10 py-4 border-2 border-[var(--tm-accent-primary)] text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-[var(--tm-accent-primary)] hover:text-white transition-all duration-300 hover:-translate-y-1"
            @click="openExpertModal"
          >
            <svg
              class="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M17 8l4 4-4 4M7 8l-4 4 4 4"></path>
            </svg>
            Speak with Specialists
          </button>
        </div>
      </div>

      <!-- Why Choose VMMC for Construction -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-12 border border-[var(--tm-bd-light)] mb-20"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Why Choose VMMC for Construction Transformation
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            15 years of proven expertise in construction industry recruitment and strategic
            consulting
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Sustainable Building Expertise -->
          <div class="text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Sustainable Building Expertise
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Deep knowledge in green materials, net-zero buildings, and ESG compliance across
              construction projects.
            </p>
          </div>

          <!-- Smart Cities Specialization -->
          <div class="text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"
                ></path>
                <path d="M12 5L8 21l4-7 4 7-4-16"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Smart Cities Specialization
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Proven experience with NEOM, Masdar City, and other mega-projects requiring IoT and AI
              integration.
            </p>
          </div>

          <!-- Digital Construction Technology -->
          <div class="text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Digital Construction Technology
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Specialized talent in BIM, digital twins, 3D printing, and modular construction
              automation.
            </p>
          </div>

          <!-- GCC Regional Leadership -->
          <div class="text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                ></circle>
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              GCC Regional Leadership
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Strategic presence in Dubai, with deep understanding of Middle East construction
              transformation.
            </p>
          </div>
        </div>
      </div>

      <!-- Industry Transformation Timeline -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-12 border border-[var(--tm-bd-light)] mb-20"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Construction Industry Transformation Timeline
          </h3>
          <p class="text-[var(--tm-txt-secondary)]">
            The industry turning point is now - position your organization for success
          </p>
        </div>

        <div class="space-y-8">
          <!-- 2025 Current State -->
          <div
            class="flex items-start gap-6 p-6 bg-[var(--tm-bg-secondary)] rounded-6 border-l-4 border-[var(--tm-accent-primary)]"
          >
            <div
              class="w-12 h-12 bg-[var(--tm-accent-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
            >
              2025
            </div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                Industry Turning Point
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-3">
                Sustainable building practices moving from optional to mandatory. Digital
                construction technologies and smart materials reshaping the global landscape.
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs bg-[var(--tm-bg-accentLight)] text-[var(--tm-accent-primary)] px-3 py-1 rounded-full"
                >
                  Current Focus
                </span>
              </div>
            </div>
          </div>

          <!-- 2027 Mid-Term -->
          <div
            class="flex items-start gap-6 p-6 bg-[var(--tm-bg-secondary)] rounded-6 border-l-4 border-[var(--tm-accent-secondary)]"
          >
            <div
              class="w-12 h-12 bg-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
            >
              2027
            </div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                Market Acceleration
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-3">
                Modular construction expected to reach 15% market adoption. Smart city projects
                scaling globally with IoT and AI integration becoming standard.
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Scaling Phase
                </span>
              </div>
            </div>
          </div>

          <!-- 2030 Future State -->
          <div
            class="flex items-start gap-6 p-6 bg-[var(--tm-bg-secondary)] rounded-6 border-l-4 border-[var(--tm-accent-tertiary)]"
          >
            <div
              class="w-12 h-12 bg-[var(--tm-accent-tertiary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
            >
              2030
            </div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                Transformation Complete
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-3">
                Sustainable construction representing 30% of global market. Modular methods reaching
                20% adoption. $570B green materials market fully established.
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Target Vision
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Global Offices -->
        <div class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
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
                  r="10"
                ></circle>
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Global Reach</h3>
              <p class="text-[var(--tm-txt-secondary)]">Connect with our regional experts</p>
            </div>
          </div>

          <div class="space-y-6">
            <div
              class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 hover:border-[var(--tm-accent-primary)] border border-transparent transition-all duration-300"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)]">Dubai Office</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Aspin Commercial Tower, Office2818, DIFC
                  </p>
                </div>
                <a
                  href="tel:+971558296351"
                  class="text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300 font-medium"
                >
                  +971-55-829-6351
                </a>
              </div>
            </div>

            <div
              class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 hover:border-[var(--tm-accent-primary)] border border-transparent transition-all duration-300"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)]">Singapore HQ</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">The Guoco Tower, Office1801</p>
                </div>
                <a
                  href="tel:+6563868322"
                  class="text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300 font-medium"
                >
                  +65-6386-8322
                </a>
              </div>
            </div>

            <div
              class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 hover:border-[var(--tm-accent-primary)] border border-transparent transition-all duration-300"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)]">Malaysia Office</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Aspire Tower, 07-05, KL Eco City, 59200 Kuala Lumpur
                  </p>
                </div>
                <a
                  href="tel:+60322469000"
                  class="text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300 font-medium"
                >
                  +60-322-469-000
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Connect -->
        <div class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
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
            <div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Quick Connect</h3>
              <p class="text-[var(--tm-txt-secondary)]">Get started immediately</p>
            </div>
          </div>

          <div class="space-y-6">
            <button
              class="w-full p-4 bg-[var(--tm-bg-accentLight)] rounded-4 border border-[var(--tm-bd-accentAlpha15)] hover:bg-[var(--tm-accent-primary)] hover:text-white transition-all duration-300 text-left group"
              @click="openConsultationModal"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-[var(--tm-accent-primary)] group-hover:bg-white rounded-3 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white group-hover:text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path d="M12 4.5v15m7.5-7.5h-15"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] group-hover:text-white">
                    Schedule Consultation
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] group-hover:text-white/80">
                    Discuss your construction talent needs
                  </p>
                </div>
              </div>
            </button>

            <button
              class="w-full p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 text-left group"
              @click="openExpertModal"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--tm-accent-primary)]"
                >
                  <svg
                    class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path d="M17 8l4 4-4 4M7 8l-4 4 4 4"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)]">Speak with Experts</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Connect with construction industry specialists
                  </p>
                </div>
              </div>
            </button>

            <div
              class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)]">Email Inquiry</h4>
                  <a
                    href="mailto:info@vmmcglobal.com"
                    class="text-sm text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
                  >
                    info@vmmcglobal.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Final Call to Action -->
      <div class="text-center">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-12 text-white relative overflow-hidden"
        >
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div
              class="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full"
            ></div>
            <div
              class="absolute bottom-10 left-10 w-16 h-16 border-2 border-white rounded-full"
            ></div>
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full"
            ></div>
          </div>

          <div class="relative z-1">
            <h3 class="text-3xl md:text-4xl font-semibold mb-4 text-white">
              The Construction Industry Transformation Starts Now
            </h3>
            <p class="text-xl opacity-90 mb-8 max-w-200 mx-auto text-white">
              Don't wait for the industry to change around you. Partner with VMMC to build the
              construction teams and capabilities needed for sustainable success in the digital
              economy.
            </p>
            <button
              class="inline-flex items-center justify-center px-12 py-5 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 shadow-xl"
              @click="openConsultationModal"
            >
              <svg
                class="w-6 h-6 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Start Your Construction Transformation
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Inject modal controls from parent
  const openExpertModal = inject('openExpertModal') as (() => void) | undefined
  const openConsultationModal = inject('openConsultationModal') as (() => void) | undefined

  // // Fallback handlers if injection fails
  // const handleExpertModal = () => {
  //   if (openExpertModal) {
  //     openExpertModal()
  //   } else {
  //     console.warn('Expert modal handler not available')
  //   }
  // }

  // const handleConsultationModal = () => {
  //   if (openConsultationModal) {
  //     openConsultationModal()
  //   } else {
  //     console.warn('Consultation modal handler not available')
  //   }
  // }
</script>

<style scoped>
  /* Custom animations for enhanced visual appeal */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(2deg);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-5xl {
      font-size: 2.5rem;
    }
    .text-6xl {
      font-size: 3rem;
    }
    .text-7xl {
      font-size: 3.5rem;
    }
    .py-25 {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
</style>
