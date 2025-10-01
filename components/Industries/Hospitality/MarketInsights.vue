<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div
      class="absolute top-0 left-1/4 w-100 h-100 bg-gradient-to-br from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[var(--tm-accent-secondary)]/5 to-transparent rounded-full blur-3xl"
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            ></path>
          </svg>
          MARKET INSIGHTS
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Strategic Intelligence for
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Hospitality Leaders
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Data-driven insights and emerging trends shaping the future of hotels, resorts, and
          tourism enterprises
        </p>
      </div>

      <!-- Main Insights Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Featured Insight 1: Regional Recovery Patterns -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
        >
          <div class="flex items-start justify-between mb-6">
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
                <path
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <span
              class="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold px-3 py-1 rounded-full"
            >
              TRENDING UP
            </span>
          </div>

          <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Regional Recovery Patterns
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Europe and Asia-Pacific lead global tourism recovery, with select regions exceeding 2019
            levels. Middle East luxury travel surges as high-net-worth travelers seek exclusive
            experiences.
          </p>

          <!-- Statistics -->
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="text-center bg-[var(--tm-bg-secondary)] rounded-4 p-3">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">112%</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">Middle East Growth</div>
            </div>
            <div class="text-center bg-[var(--tm-bg-secondary)] rounded-4 p-3">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">98%</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">Europe Recovery</div>
            </div>
            <div class="text-center bg-[var(--tm-bg-secondary)] rounded-4 p-3">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">88%</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">Asia-Pacific</div>
            </div>
          </div>

          <div
            class="flex items-center gap-2 text-sm text-[var(--tm-accent-primary)] font-semibold"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
            <span>View Regional Analysis</span>
          </div>
        </div>

        <!-- Featured Insight 2: Traveler Demographics Shift -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
        >
          <div class="flex items-start justify-between mb-6">
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
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <span
              class="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-semibold px-3 py-1 rounded-full"
            >
              KEY SHIFT
            </span>
          </div>

          <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Traveler Demographics Evolution
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Gen Z and Millennials now account for 60% of global travelers, prioritizing
            sustainability, authenticity, and digital-first booking experiences.
          </p>

          <!-- Key Demographics -->
          <div class="space-y-3 mb-6">
            <div class="flex items-center justify-between">
              <span class="text-sm text-[var(--tm-txt-secondary)]">Gen Z (18-27)</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-[var(--tm-bg-secondary)] rounded-full overflow-hidden">
                  <div
                    class="h-full bg-[var(--tm-accent-primary)] rounded-full"
                    style="width: 28%"
                  ></div>
                </div>
                <span class="text-sm font-semibold text-[var(--tm-txt-primary)]">28%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-[var(--tm-txt-secondary)]">Millennials (28-43)</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-[var(--tm-bg-secondary)] rounded-full overflow-hidden">
                  <div
                    class="h-full bg-[var(--tm-accent-primary)] rounded-full"
                    style="width: 32%"
                  ></div>
                </div>
                <span class="text-sm font-semibold text-[var(--tm-txt-primary)]">32%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-[var(--tm-txt-secondary)]">Gen X & Boomers</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-[var(--tm-bg-secondary)] rounded-full overflow-hidden">
                  <div
                    class="h-full bg-[var(--tm-accent-secondary)] rounded-full"
                    style="width: 40%"
                  ></div>
                </div>
                <span class="text-sm font-semibold text-[var(--tm-txt-primary)]">40%</span>
              </div>
            </div>
          </div>

          <div
            class="flex items-center gap-2 text-sm text-[var(--tm-accent-primary)] font-semibold"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
            <span>Explore Demographics Data</span>
          </div>
        </div>
      </div>

      <!-- Secondary Insights -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Insight 3: Booking Trends -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="text-xs font-semibold text-green-600 dark:text-green-400">+24%</span>
          </div>
          <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
            Last-Minute Bookings Surge
          </h4>
          <p class="text-sm text-[var(--tm-txt-secondary)]">
            45% of travelers now book within 2 weeks of travel, driven by flexible work
            arrangements.
          </p>
        </div>

        <!-- Insight 4: Sustainability -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <span class="text-xs font-semibold text-green-600 dark:text-green-400">+31%</span>
          </div>
          <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
            Eco-Conscious Travel
          </h4>
          <p class="text-sm text-[var(--tm-txt-secondary)]">
            73% of travelers prioritize sustainable accommodations and eco-friendly practices.
          </p>
        </div>

        <!-- Insight 5: Bleisure Travel -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <span class="text-xs font-semibold text-green-600 dark:text-green-400">+18%</span>
          </div>
          <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
            Bleisure Travel Growth
          </h4>
          <p class="text-sm text-[var(--tm-txt-secondary)]">
            Business+leisure trips account for 37% of hotel stays, extending trip durations.
          </p>
        </div>
      </div>

      <!-- Technology Adoption Insights -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] mb-12"
      >
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
              <path
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
              Technology Adoption in Hospitality
            </h3>
            <p class="text-[var(--tm-txt-secondary)]">
              How hotels are leveraging digital innovation
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-2xl font-bold text-white">68%</span>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Mobile Check-in</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Hotels offering contactless arrival
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-2xl font-bold text-white">52%</span>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">AI Chatbots</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">24/7 guest service automation</p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-2xl font-bold text-white">41%</span>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">IoT Smart Rooms</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">Connected room controls</p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-2xl font-bold text-white">35%</span>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">VR Previews</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">Virtual property tours</p>
          </div>
        </div>
      </div>

      <!-- CTA Banner -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 text-white text-center"
      >
        <h3 class="text-2xl md:text-3xl font-semibold mb-4">Need Deeper Market Intelligence?</h3>
        <p class="text-lg text-white/90 mb-8 max-w-150 mx-auto">
          Access our comprehensive hospitality intelligence platform with real-time data, competitor
          analysis, and strategic insights.
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <button
            class="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
            @click="openConsultationModal"
          >
            Request Intelligence Brief
          </button>
          <button
            class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/15 transition-all duration-300"
            @click="openExpertModal"
          >
            Speak with Analyst
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Inject modal controls from parent
  const openExpertModal = inject('openExpertModal') as (() => void) | undefined
  const openConsultationModal = inject('openConsultationModal') as (() => void) | undefined
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
