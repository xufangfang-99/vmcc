<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 right-0 w-120 h-120 bg-gradient-to-bl from-[var(--tm-accent-secondary)]/5 to-transparent rounded-full blur-3xl"
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
          Retail Market
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Intelligence & Data
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Real-time insights and data-driven analysis of global retail and e-commerce trends
        </p>
      </div>

      <!-- Main Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-15">
        <!-- Stat 1 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <span
              class="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full"
            >
              +18%
            </span>
          </div>
          <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">$5.8T</div>
          <div class="text-sm text-[var(--tm-txt-secondary)]">Global E-commerce Market Size</div>
        </div>

        <!-- Stat 2 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <span
              class="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full"
            >
              +73%
            </span>
          </div>
          <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">2.7B</div>
          <div class="text-sm text-[var(--tm-txt-secondary)]">Digital Shoppers Worldwide</div>
        </div>

        <!-- Stat 3 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
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
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                ></path>
              </svg>
            </div>
            <span
              class="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full"
            >
              +89%
            </span>
          </div>
          <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">$1.2T</div>
          <div class="text-sm text-[var(--tm-txt-secondary)]">Social Commerce Revenue</div>
        </div>

        <!-- Stat 4 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
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
            <span
              class="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full"
            >
              +24%
            </span>
          </div>
          <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">$900B</div>
          <div class="text-sm text-[var(--tm-txt-secondary)]">Cross-border E-commerce</div>
        </div>
      </div>

      <!-- Regional Insights -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-15">
        <!-- GCC Market Insights -->
        <div class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-6">
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
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">GCC Retail Market</h3>
              <p class="text-sm text-[var(--tm-txt-secondary)]">Regional growth trends</p>
            </div>
          </div>

          <div class="space-y-6">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-[var(--tm-txt-secondary)]">
                  UAE E-commerce
                </span>
                <span class="text-sm font-semibold text-[var(--tm-accent-primary)]">$27.1B</span>
              </div>
              <div class="w-full bg-[var(--tm-bg-secondary)] rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] h-2 rounded-full"
                  style="width: 85%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-[var(--tm-txt-secondary)]">Saudi Arabia</span>
                <span class="text-sm font-semibold text-[var(--tm-accent-primary)]">$33.6B</span>
              </div>
              <div class="w-full bg-[var(--tm-bg-secondary)] rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] h-2 rounded-full"
                  style="width: 92%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-[var(--tm-txt-secondary)]">Qatar</span>
                <span class="text-sm font-semibold text-[var(--tm-accent-primary)]">$4.8B</span>
              </div>
              <div class="w-full bg-[var(--tm-bg-secondary)] rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] h-2 rounded-full"
                  style="width: 65%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-[var(--tm-txt-secondary)]">Kuwait</span>
                <span class="text-sm font-semibold text-[var(--tm-accent-primary)]">$3.2B</span>
              </div>
              <div class="w-full bg-[var(--tm-bg-secondary)] rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] h-2 rounded-full"
                  style="width: 58%"
                ></div>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-[var(--tm-bd-light)]">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-[var(--tm-txt-secondary)]">
                Total GCC Market
              </span>
              <span class="text-xl font-bold text-[var(--tm-accent-primary)]">$78.5B</span>
            </div>
            <p class="text-xs text-[var(--tm-txt-secondary)] mt-2">
              Expected CAGR: 23% (2024-2028)
            </p>
          </div>
        </div>

        <!-- Key Growth Drivers -->
        <div class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-6">
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
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Growth Drivers</h3>
              <p class="text-sm text-[var(--tm-txt-secondary)]">Key market accelerators</p>
            </div>
          </div>

          <div class="space-y-5">
            <div class="flex items-start gap-4">
              <div
                class="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-3 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Technology Innovation
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  AI, AR/VR, and cloud computing transforming retail experiences
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-3 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Mobile-first Adoption
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  73% mobile commerce share driving convenience demand
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-3 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-green-600"
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
              <div class="flex-1">
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Emerging Market Growth
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Southeast Asia and Middle East leading expansion
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-3 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-orange-600"
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
              <div class="flex-1">
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">Gen Z Influence</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Value brand stories and immersive experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Emerging Trends Banner -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 text-white"
      >
        <h3 class="text-2xl font-semibold mb-6">Emerging Retail Trends 2024-2025</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div class="text-3xl font-bold mb-2">89%</div>
            <p class="text-sm text-white/90">Retailers investing in AI personalization</p>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">$1.2T</div>
            <p class="text-sm text-white/90">Social commerce market by 2025</p>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">67%</div>
            <p class="text-sm text-white/90">Consumers prefer sustainable brands</p>
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
