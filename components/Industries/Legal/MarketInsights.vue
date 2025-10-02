<!-- components/Industries/Legal/MarketInsights.vue -->
<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 left-0 w-120 h-120 bg-gradient-to-br from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-100 h-100 bg-gradient-to-tl from-[var(--tm-accent-secondary)]/5 to-transparent rounded-full blur-3xl"
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
          Legal Services
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Market Intelligence
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Data-driven insights into the rapidly evolving legal compliance and regulatory technology
          landscape
        </p>
      </div>

      <!-- Key Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-15">
        <!-- Metric 1 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div class="flex items-center gap-1 text-green-600 text-sm font-semibold">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <span>+5.2%</span>
            </div>
          </div>
          <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">$936B</div>
          <div class="text-sm text-[var(--tm-txt-secondary)]">Global Legal Services Market</div>
          <div class="text-xs text-[var(--tm-txt-tertiary)] mt-2">Projected 2025</div>
        </div>

        <!-- Metric 2 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
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
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div class="flex items-center gap-1 text-green-600 text-sm font-semibold">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <span>+23%</span>
            </div>
          </div>
          <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">$16.2B</div>
          <div class="text-sm text-[var(--tm-txt-secondary)]">RegTech Market Size</div>
          <div class="text-xs text-[var(--tm-txt-tertiary)] mt-2">CAGR 2024-2030</div>
        </div>

        <!-- Metric 3 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <div class="flex items-center gap-1 text-green-600 text-sm font-semibold">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <span>+18%</span>
            </div>
          </div>
          <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">72%</div>
          <div class="text-sm text-[var(--tm-txt-secondary)]">Firms Using Legal Tech</div>
          <div class="text-xs text-[var(--tm-txt-tertiary)] mt-2">Up from 54% in 2022</div>
        </div>

        <!-- Metric 4 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
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
            <div class="flex items-center gap-1 text-green-600 text-sm font-semibold">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <span>+35%</span>
            </div>
          </div>
          <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">$4.2M</div>
          <div class="text-sm text-[var(--tm-txt-secondary)]">Avg. GDPR Fine 2024</div>
          <div class="text-xs text-[var(--tm-txt-tertiary)] mt-2">Enforcement growing</div>
        </div>
      </div>

      <!-- Market Trends -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-15">
        <!-- Trend Analysis 1 -->
        <div class="bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-light)]">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                RegTech Acceleration
              </h3>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                AI-powered compliance transformation
              </p>
            </div>
          </div>

          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Regulatory Technology is transforming legal services through AI, blockchain, and
            automation. Companies are reducing compliance costs by 40-60% while improving accuracy
            and real-time monitoring capabilities.
          </p>

          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-[var(--tm-txt-secondary)]">AI Compliance Monitoring</span>
              <span class="text-sm font-semibold text-[var(--tm-accent-primary)]">68%</span>
            </div>
            <div class="h-2 bg-[var(--tm-bg-secondary)] rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full"
                style="width: 68%"
              ></div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm text-[var(--tm-txt-secondary)]">Blockchain for Compliance</span>
              <span class="text-sm font-semibold text-[var(--tm-accent-primary)]">45%</span>
            </div>
            <div class="h-2 bg-[var(--tm-bg-secondary)] rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full"
                style="width: 45%"
              ></div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm text-[var(--tm-txt-secondary)]">Automated Reporting</span>
              <span class="text-sm font-semibold text-[var(--tm-accent-primary)]">81%</span>
            </div>
            <div class="h-2 bg-[var(--tm-bg-secondary)] rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full"
                style="width: 81%"
              ></div>
            </div>
          </div>
        </div>

        <!-- Trend Analysis 2 -->
        <div class="bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-light)]">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                Data Privacy Enforcement
              </h3>
              <p class="text-sm text-[var(--tm-txt-secondary)]">Global regulatory tightening</p>
            </div>
          </div>

          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            GDPR, CCPA, and PIPL enforcement is intensifying globally. Average fines have increased
            35% year-over-year, with stricter cross-border data transfer requirements driving demand
            for specialized legal expertise.
          </p>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-[var(--tm-bg-secondary)] rounded-4 p-4">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">€1.2B</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">Total GDPR Fines 2024</div>
            </div>
            <div class="bg-[var(--tm-bg-secondary)] rounded-4 p-4">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">89%</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">
                Companies Investing in Privacy
              </div>
            </div>
            <div class="bg-[var(--tm-bg-secondary)] rounded-4 p-4">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">137</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">Countries with Data Laws</div>
            </div>
            <div class="bg-[var(--tm-bg-secondary)] rounded-4 p-4">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">62%</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">Data Breach Incidents Up</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Drivers -->
      <div
        class="bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 text-white mb-15 relative overflow-hidden"
      >
        <div
          class="absolute -right-1/4 -bottom-1/4 w-100 h-100 bg-white/10 rounded-full blur-3xl"
        ></div>

        <div class="relative z-1">
          <h3 class="text-2xl md:text-3xl font-semibold mb-8 text-center">Key Market Drivers</h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-white/20 rounded-4 flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold mb-2">Global Data Flows</h4>
              <p class="text-sm text-white/80">
                Rapid growth of digital trade and cross-border transactions
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-white/20 rounded-4 flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8"
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
              <h4 class="text-lg font-semibold mb-2">Stricter Penalties</h4>
              <p class="text-sm text-white/80">
                Government enforcement actions and compliance violations
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-white/20 rounded-4 flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold mb-2">Transparency Demand</h4>
              <p class="text-sm text-white/80">
                Investor and consumer expectations for accountability
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ESG Compliance Growth -->
      <div class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
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
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
              ESG Compliance Surge
            </h3>
            <p class="text-[var(--tm-txt-secondary)]">Mandatory disclosure driving legal demand</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6">
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">78%</div>
            <div class="text-sm text-[var(--tm-txt-primary)] font-semibold mb-1">
              Mandatory Disclosure
            </div>
            <div class="text-xs text-[var(--tm-txt-secondary)]">By 2026 globally</div>
          </div>

          <div class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6">
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">$53B</div>
            <div class="text-sm text-[var(--tm-txt-primary)] font-semibold mb-1">
              ESG Consulting
            </div>
            <div class="text-xs text-[var(--tm-txt-secondary)]">Market size 2024</div>
          </div>

          <div class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6">
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">92%</div>
            <div class="text-sm text-[var(--tm-txt-primary)] font-semibold mb-1">
              Investor Priority
            </div>
            <div class="text-xs text-[var(--tm-txt-secondary)]">ESG in decisions</div>
          </div>

          <div class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6">
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">45%</div>
            <div class="text-sm text-[var(--tm-txt-primary)] font-semibold mb-1">CSRD Impact</div>
            <div class="text-xs text-[var(--tm-txt-secondary)]">EU companies affected</div>
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
