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
          Retail & E-commerce
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Market Landscape
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          The retail industry is entering a new phase where e-commerce evolution, consumer behavior
          shifts, and technology innovation converge to reshape the future of commerce.
        </p>
      </div>

      <!-- Key Insights Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
        <!-- Insight 1: Omnichannel Integration -->
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
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Omnichannel Integration
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Boundaries between online and offline retail are blurring, with click-and-mortar models
            becoming the norm for modern retailers.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Seamless experience</span>
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

        <!-- Insight 2: Mobile-first Shopping -->
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
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Mobile-first Shopping
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Mobile commerce continues to grow, with social commerce and live-stream shopping driving
            new consumer demand.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>73% mobile growth</span>
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

        <!-- Insight 3: Social Commerce -->
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
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Social Commerce Rise
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Content-driven shopping through short videos, live streams, and KOL influence reshaping
            consumer discovery and purchase.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Interest-driven</span>
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

        <!-- Insight 4: Personalization -->
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
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Personalized Experiences
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            AI and big data enable precise recommendations, leading consumers to prefer tailored
            shopping experiences.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>AI-powered</span>
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

        <!-- Insight 5: Cross-border E-commerce -->
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
            Cross-border Expansion
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Global platforms expanding reach with improved logistics, payment solutions, and
            localization strategies.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Global reach</span>
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

        <!-- Insight 6: Sustainability -->
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
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Sustainable Consumption
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Shoppers increasingly concerned about sustainability, green supply chains, and corporate
            responsibility.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Green retail</span>
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
              <div class="text-4xl md:text-5xl font-bold mb-2">$5.8T</div>
              <div class="text-sm text-white/80">Global E-commerce Market</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">2.7B</div>
              <div class="text-sm text-white/80">Digital Shoppers Worldwide</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">73%</div>
              <div class="text-sm text-white/80">Mobile Commerce Share</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">+18%</div>
              <div class="text-sm text-white/80">Annual Growth Rate</div>
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
                Intense Price Competition
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Price wars and margin pressure affecting profitability
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
                Supply Chain Disruptions
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Logistics challenges and inventory management complexity
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
                Consumer Trust & Data Privacy
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Building trust while managing sensitive customer data
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
                Platform Traffic Dependency
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                High operational costs across multiple channels
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
