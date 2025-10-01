<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 right-0 w-100 h-100 bg-gradient-to-bl from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[var(--tm-accent-secondary)]/5 to-transparent rounded-full blur-3xl"
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
            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          INDUSTRY OVERVIEW
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Hospitality & Tourism
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Market Landscape
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          The global hospitality and tourism sector is experiencing unprecedented transformation,
          driven by recovery momentum, experience economy, and digital innovation.
        </p>
      </div>

      <!-- Key Insights Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
        <!-- Insight 1: Tourism Recovery -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Global Tourism Recovery
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            International tourist arrivals reached 84% of pre-pandemic levels in 2023, with some
            regions surpassing 2019 figures.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Strong rebound momentum</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 2: Experience Economy -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-7 h-7 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Experience Economy Rise
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Travelers increasingly seek immersive cultural interactions, adventure experiences, and
            personalized services over traditional sightseeing.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Shifting preferences</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 3: Digital Transformation -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Smart Tourism Innovation
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            AI, IoT, VR/AR, and big data are transforming operations, from contactless check-in to
            personalized recommendations.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Digital-first approach</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 4: Domestic Tourism -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-7 h-7 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Domestic Tourism Growth
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Domestic travel has outpaced international recovery, becoming a critical pillar
            supporting industry growth in many markets.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Local strength</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 5: Luxury & Boutique -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-7 h-7 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Premium Market Surge
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Luxury hotels, boutique properties, and private tours are experiencing strong demand
            from high-spending travelers.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>High-end revival</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 6: Workforce Evolution -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Talent Transformation
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Rising demand for digital skills, experience designers, and flexible workforce models to
            meet evolving industry needs.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Skills evolution</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Key Statistics Banner -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 md:p-12 text-white relative overflow-hidden"
      >
        <div
          class="absolute -right-1/4 -top-1/4 w-100 h-100 bg-white/10 rounded-full blur-3xl"
        ></div>

        <div class="relative z-1">
          <h3 class="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Industry by the Numbers
          </h3>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">$9.9T</div>
              <div class="text-sm text-white/80">Global Tourism GDP (2024)</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">330M</div>
              <div class="text-sm text-white/80">Tourism Jobs Worldwide</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">1.4B</div>
              <div class="text-sm text-white/80">International Arrivals (2023)</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">+12%</div>
              <div class="text-sm text-white/80">YoY Growth Rate (2024)</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Industry Challenges -->
      <div
        class="mt-15 bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]"
      >
        <div class="flex items-center gap-4 mb-8">
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
              Key Industry Challenges
            </h3>
            <p class="text-[var(--tm-txt-secondary)]">Critical areas requiring strategic focus</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex items-start gap-4">
            <div
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            >
              <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                Talent Shortage & High Turnover
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Critical staffing gaps in hotels, restaurants, and airlines
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            >
              <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                Economic Uncertainty & Inflation
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Rising costs impacting both operators and travelers
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            >
              <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Digital Skills Gap</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Need for tech-savvy professionals in smart tourism
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            >
              <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                Sustainability Pressures
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Growing demands for eco-friendly and responsible tourism
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // No props needed for this component
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
