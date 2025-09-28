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
          Industry Intelligence Reports
        </h2>
        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          Comprehensive analysis of construction industry transformation, covering sustainable
          building, smart cities, and technological innovation across global markets.
        </p>
      </div>

      <!-- Reports Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-15">
        <!-- Infrastructure & Sustainable Building Report -->
        <div class="group">
          <NuxtLink
            to="/industries/construction-smart-cities/infrastructure-sustainable-building"
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
                  <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
                </svg>
              </div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Infrastructure
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Infrastructure & Sustainable Building
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              Major economies accelerating infrastructure spending with sustainable building
              practices moving from optional to mandatory. Analysis of green standards and digital
              construction technologies.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Public-Private Partnership Models
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Net-Zero Building Momentum
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">ESG-Driven Investment</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-[var(--tm-accent-primary)] font-medium">
                Read Full Report →
              </span>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">$2T+</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Smart Cities & Infrastructure Digitalization Report -->
        <div class="group">
          <NuxtLink
            to="/industries/construction-smart-cities/smart-cities-digitalization"
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
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"
                  ></path>
                  <path d="M12 5L8 21l4-7 4 7-4-16"></path>
                </svg>
              </div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Smart Cities
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Smart Cities & Infrastructure Digitalization
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              Smart cities becoming strategic priority for governments worldwide. Infrastructure
              digitalization through IoT, AI, and big data transforming urban energy, mobility, and
              public services.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">IoT-Enabled Smart Grids</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  AI-Powered Traffic Management
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Digital Twins of Cities</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-[var(--tm-accent-primary)] font-medium">
                Read Full Report →
              </span>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">NEOM</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Modular & Prefabricated Construction Report -->
        <div class="group">
          <NuxtLink
            to="/industries/construction-smart-cities/modular-prefabricated-construction"
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
                  <path d="M12 3v12M3 12l9-9 9 9"></path>
                  <path
                    d="M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                  ></path>
                </svg>
              </div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Modular
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Modular & Prefabricated Construction
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              Modular construction gaining momentum for cost efficiency, sustainability, and faster
              delivery. Expanding from housing to commercial buildings, healthcare facilities, and
              infrastructure projects.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">30-50% Time Reduction</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Higher Quality Control</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Circular Construction Principles
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-[var(--tm-accent-primary)] font-medium">
                Read Full Report →
              </span>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">$160B</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Green Building Materials Report -->
        <div class="group">
          <NuxtLink
            to="/industries/construction-smart-cities/green-building-materials"
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
                  <path d="M12 3v12M21 12H9"></path>
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Green Materials
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Green Building Materials Market
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              Rapid growth driven by environmental regulations and ESG investment. Low-carbon
              cement, recycled steel, and energy-efficient materials moving from niche to mainstream
              essentials.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Low-Carbon Cement & Concrete
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Recycled Steel & Aluminum
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Smart Coatings & Glazing</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-[var(--tm-accent-primary)] font-medium">
                Read Full Report →
              </span>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">$570B</div>
            </div>
          </NuxtLink>
        </div>

        <!-- Construction Workforce & Automation Report -->
        <div class="group lg:col-span-2 xl:col-span-1">
          <NuxtLink
            to="/industries/construction-smart-cities/construction-workforce-automation"
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
                  <path d="M12 2v20M2 12h20"></path>
                  <path d="m19 9-7 7-7-7"></path>
                </svg>
              </div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-[var(--tm-txt-light)] bg-[var(--tm-bg-secondary)] px-3 py-1 rounded-full"
              >
                Workforce
              </span>
            </div>

            <h3
              class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Construction Workforce & Automation
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6 text-sm">
              Industry transformation addressing global labor shortages through automation and
              digitalization. Construction robots, AI, and automated systems reshaping workforce
              structures and skill requirements.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Construction Robots & 3D Printing
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  BIM & Automated Management
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Digital Operations Skills
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
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 text-white"
      >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div class="lg:col-span-2">
            <h3 class="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Construction Industry Talent Intelligence
            </h3>
            <p class="text-lg opacity-90 mb-6 text-white">
              Access comprehensive reports covering sustainable building practices, smart city
              development, and construction technology innovation. Essential insights for industry
              leaders navigating the 2025 transformation.
            </p>
            <div class="flex flex-wrap gap-4">
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
              >
                Green Architects
              </span>
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
              >
                Digital Engineers
              </span>
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
              >
                ESG Specialists
              </span>
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
              >
                Smart Infrastructure Experts
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
