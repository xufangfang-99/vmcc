<!-- components/Industries/Logistics/IndustryOverview.vue -->
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
            <path
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            ></path>
          </svg>
          INDUSTRY OVERVIEW
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Logistics Industry
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Market Landscape
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          As global trade becomes increasingly complex and market demands rise, supply chain
          management and logistics technology are emerging as key drivers of competitiveness.
        </p>
      </div>

      <!-- Key Insights Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
        <!-- Insight 1: Supply Chain Optimization -->
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
            Global Supply Chain Optimization
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Digital platforms, automated warehousing, and real-time data analytics accelerating
            transformation to reduce costs and improve efficiency.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>End-to-end visibility</span>
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

        <!-- Insight 2: Digital Platforms -->
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
            Digital Platform Transparency
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Data-driven decision-making tools enabling companies to break down silos and achieve
            end-to-end visibility.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Real-time control</span>
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

        <!-- Insight 3: Smart Warehousing -->
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Automation & Smart Warehousing
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Robotic picking systems, automated conveyors, WMS, and unmanned delivery vehicles
            reshaping operations.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Autonomous systems</span>
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

        <!-- Insight 4: Green Logistics -->
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
            Green Logistics & Sustainability
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Electric fleets, green-fuel vessels, solar warehouses, and eco-friendly packaging
            driving carbon reduction.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Carbon neutral</span>
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

        <!-- Insight 5: Risk Management -->
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Supply Chain Resilience
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Risk management, supplier diversification, digital twins, and early warning systems
            building resilience.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Crisis-ready</span>
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

        <!-- Insight 6: IoT & Blockchain -->
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
              <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            IoT & Blockchain Integration
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Real-time cargo tracking, equipment monitoring, and blockchain transparency enhancing
            cross-border trade.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Connected supply chain</span>
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

      <!-- Current Challenges Banner -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] mb-15"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-4 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-orange-600"
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
              Current Industry Challenges
            </h3>
            <p class="text-[var(--tm-txt-secondary)]">
              Critical issues facing global supply chains
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="flex items-start gap-4">
            <div
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            >
              <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                Geopolitical Uncertainty
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Trade tensions and political instability disrupting global supply chains
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
                Energy Price Volatility
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Fluctuating fuel costs impacting transportation and operational expenses
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
                Shifting Consumer Demands
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                E-commerce growth requiring faster delivery and flexible fulfillment
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
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Information Asymmetry</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Siloed data leading to inefficiencies in inventory and transportation
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
                Manual Labor Dependency
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Traditional warehouses struggling with efficiency and error rates
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
                Single Supplier Vulnerability
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Over-reliance on single regions creating disruption risks
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Industry Leaders -->
      <div
        class="bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 md:p-12 text-white relative overflow-hidden"
      >
        <div
          class="absolute -right-1/4 -top-1/4 w-100 h-100 bg-white/10 rounded-full blur-3xl"
        ></div>

        <div class="relative z-1">
          <h3 class="text-2xl md:text-3xl font-semibold mb-8 text-center">Industry Benchmarks</h3>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-sm text-white/80 mb-2">Amazon & Alibaba</div>
              <div class="font-semibold">Intelligent Warehousing</div>
            </div>
            <div class="text-center">
              <div class="text-sm text-white/80 mb-2">SAP & Oracle</div>
              <div class="font-semibold">Digital Platforms</div>
            </div>
            <div class="text-center">
              <div class="text-sm text-white/80 mb-2">UPS & DHL</div>
              <div class="font-semibold">Green Logistics Leaders</div>
            </div>
            <div class="text-center">
              <div class="text-sm text-white/80 mb-2">Maersk</div>
              <div class="font-semibold">Sustainable Shipping</div>
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
