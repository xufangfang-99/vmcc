<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-1/4 left-0 w-100 h-100 bg-gradient-to-r from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
    ></div>

    <div class="max-w-350 mx-auto px-6 relative z-1">
      <!-- Section Header -->
      <div class="text-center mb-15">
        <div
          class="inline-flex items-center gap-2 bg-[var(--tm-bg-accentLight)] text-[var(--tm-accent-primary)] px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          INTELLIGENCE REPORTS
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Deep Dive into
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Hospitality Trends
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Comprehensive analysis of key transformations shaping the future of hospitality and
          tourism
        </p>
      </div>

      <!-- Reports Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Report 1: Global Tourism Recovery -->
        <NuxtLink
          to="/industries/hospitality/global-tourism-recovery"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
              alt="Global Tourism Recovery"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-[var(--tm-accent-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              TRENDING
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>15 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                RECOVERY TRENDS
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Global Tourism Recovery: Current Status and Outlook
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Comprehensive analysis of international travel acceleration, domestic tourism growth,
              and hotel occupancy trends as the industry recovers to 84% of pre-pandemic levels.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>International Travel Acceleration</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Border Reopenings & Visa Facilitation</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Digital Marketing Impact</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 2: Experience Economy -->
        <NuxtLink
          to="/industries/hospitality/experience-economy-personalized-travel"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
              alt="Experience Economy"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-[var(--tm-accent-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              FEATURED
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>18 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                CONSUMER TRENDS
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Experience Economy and Personalized Travel
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Explore the shift from sightseeing to immersive experiences, personalization
              strategies, and the rise of premium niche markets in modern tourism.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Immersive Experience Demand</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Data-Driven Personalization</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Boutique & Private Travel Rise</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 3: Digital Transformation -->
        <NuxtLink
          to="/industries/hospitality/digital-transformation-smart-tourism"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
              alt="Digital Transformation"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              INNOVATION
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>20 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                TECHNOLOGY
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Digital Transformation & Smart Tourism
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Discover how AI, IoT, VR/AR, and big data are revolutionizing hospitality operations,
              from contactless services to intelligent recommendations.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Smart Services & Contactless Tech</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>VR/AR Immersive Experiences</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>AI-Powered Personalization</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 4: Workforce Transformation -->
        <NuxtLink
          to="/industries/hospitality/workforce-transformation-talent-development"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80"
              alt="Workforce Transformation"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              TALENT FOCUS
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>16 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                WORKFORCE
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Workforce Transformation & Talent Development
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Understand the evolving talent landscape, digital skill requirements, new role
              creation, and strategies for building resilient hospitality teams.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Digital Skills & Training Needs</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Experience Designer Roles</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-4 h-4 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Flexible Workforce Models</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-15 text-center">
        <p class="text-[var(--tm-txt-secondary)] mb-6">
          Need customized insights for your organization?
        </p>
        <button
          class="inline-flex items-center justify-center px-8 py-3 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--tm-accent-secondary)] transition-all duration-300"
          @click="openConsultationModal"
        >
          Request Custom Research
          <svg
            class="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Inject modal controls from parent
  const openConsultationModal = inject('openConsultationModal') as (() => void) | undefined
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
