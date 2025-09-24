<template>
  <section class="py-20 bg-tm-bg-secondary dark:bg-tm-bg-primary">
    <div class="max-w-1400px mx-auto px-5">
      <!-- Section Header -->
      <div class="text-center mb-15">
        <h2 class="text-3xl md:text-4xl font-300 text-tm-txt-primary mb-4 leading-tight">
          Banking & Finance Industry
          <span
            class="font-600 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 bg-clip-text text-transparent"
          >
            Overview
          </span>
        </h2>
        <p class="text-lg md:text-xl text-tm-txt-secondary max-w-800px mx-auto leading-relaxed">
          Comprehensive insights into the evolving landscape of banking and financial services
          across the GCC region and globally
        </p>
      </div>

      <!-- Overview Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
        <!-- UAE Market Card - Featured (Spans 2 rows on large screens) -->
        <div
          class="lg:col-span-6 lg:row-span-2 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 relative overflow-hidden"
        >
          <!-- Background decoration -->
          <div
            class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-tm-pri-0/10 to-tm-pri-1/10 rounded-bl-full"
          ></div>

          <div class="relative z-1">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center gap-4">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-tm-pri-0 to-tm-pri-1 rounded-2xl flex items-center justify-center text-white"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-600 text-tm-txt-primary mb-1">UAE Banking Sector</h3>
                  <span
                    class="px-3 py-1 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 text-white text-xs font-600 uppercase tracking-wider rounded-full"
                  >
                    Market Leader
                  </span>
                </div>
              </div>
            </div>

            <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
              The UAE banking sector continues to demonstrate robust growth with AED 895 billion in
              wealth management assets and 90% digital adoption across core banking services,
              positioning itself as the regional financial hub.
            </p>

            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="text-center p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl">
                <div class="text-2xl font-700 text-tm-pri-0 mb-1">AED 895B</div>
                <div class="text-xs text-tm-txt-light font-500">Wealth Management Assets</div>
              </div>
              <div class="text-center p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl">
                <div class="text-2xl font-700 text-tm-pri-0 mb-1">42</div>
                <div class="text-xs text-tm-txt-light font-500">Banks & Institutions</div>
              </div>
              <div class="text-center p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl">
                <div class="text-2xl font-700 text-tm-pri-0 mb-1">90%</div>
                <div class="text-xs text-tm-txt-light font-500">Digital Adoption</div>
              </div>
            </div>

            <!-- Market Structure Breakdown -->
            <div class="space-y-3">
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl"
              >
                <span class="text-sm font-500 text-tm-txt-primary">Local Bank Market Share</span>
                <span class="text-sm font-700 text-tm-pri-0">78.5%</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl"
              >
                <span class="text-sm font-500 text-tm-txt-primary">Foreign Bank Market Share</span>
                <span class="text-sm font-700 text-tm-pri-0">21.5%</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl"
              >
                <span class="text-sm font-500 text-tm-txt-primary">Annual Growth Rate</span>
                <span class="text-sm font-700 text-green-500">+9.2%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Digital Transformation Card -->
        <div
          class="lg:col-span-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300"
        >
          <div class="flex items-start gap-4 mb-5">
            <div
              class="w-12 h-12 bg-tm-pri-0/10 text-tm-pri-0 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line
                  x1="12"
                  y1="22"
                  x2="12"
                  y2="12"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-600 text-tm-txt-primary mb-2">Digital Innovation</h3>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
                AED 4.5 billion invested in fintech solutions, with 82% mobile banking penetration
                and AED 12 trillion processed through digital channels.
              </p>

              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm text-tm-txt-secondary">
                  <div class="w-1.5 h-1.5 bg-tm-pri-0 rounded-full flex-shrink-0"></div>
                  <span>AI-powered customer service (85% deployment)</span>
                </li>
                <li class="flex items-center gap-2 text-sm text-tm-txt-secondary">
                  <div class="w-1.5 h-1.5 bg-tm-pri-0 rounded-full flex-shrink-0"></div>
                  <span>Blockchain cross-border settlements</span>
                </li>
                <li class="flex items-center gap-2 text-sm text-tm-txt-secondary">
                  <div class="w-1.5 h-1.5 bg-tm-pri-0 rounded-full flex-shrink-0"></div>
                  <span>Biometric security systems (70% adoption)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Global Market Card -->
        <div
          class="lg:col-span-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300"
        >
          <div class="flex items-start gap-4 mb-5">
            <div
              class="w-12 h-12 bg-tm-pri-0/10 text-tm-pri-0 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <path d="m4.9 4.9 14.2 14.2" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-600 text-tm-txt-primary mb-2">Global Market</h3>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
                Global banking assets exceed USD 180 trillion, with financial services contributing
                20% of worldwide GDP and rapid growth in digital payments.
              </p>

              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <span class="text-lg">📈</span>
                  <span class="text-sm text-tm-txt-secondary">
                    Digital payments to reach $19T by 2027
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-lg">🌱</span>
                  <span class="text-sm text-tm-txt-secondary">
                    Green bonds exceed $500B annually
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Challenges Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div
          class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-14 h-14 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-600 text-tm-txt-primary">Key Market Challenges</h3>
          </div>

          <p class="text-sm text-tm-txt-secondary leading-relaxed mb-6">
            Industry faces critical challenges including cybersecurity threats, regulatory
            compliance complexity, and significant talent shortages in emerging technologies.
          </p>

          <div class="space-y-4">
            <div
              class="flex items-center justify-between p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl border-l-4 border-red-500"
            >
              <span class="text-sm font-500 text-tm-txt-primary">Cybersecurity Attacks</span>
              <span class="text-sm font-700 text-red-500">+38% increase</span>
            </div>
            <div
              class="flex items-center justify-between p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl border-l-4 border-orange-500"
            >
              <span class="text-sm font-500 text-tm-txt-primary">FinTech Talent Gap</span>
              <span class="text-sm font-700 text-orange-500">1M+ shortage</span>
            </div>
            <div
              class="flex items-center justify-between p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl border-l-4 border-yellow-500"
            >
              <span class="text-sm font-500 text-tm-txt-primary">Regulatory Complexity</span>
              <span class="text-sm font-700 text-yellow-600">Increasing</span>
            </div>
          </div>
        </div>

        <!-- Islamic Finance & Regional Opportunities -->
        <div
          class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-14 h-14 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 class="text-xl font-600 text-tm-txt-primary">Regional Opportunities</h3>
          </div>

          <p class="text-sm text-tm-txt-secondary leading-relaxed mb-6">
            Strong growth in Islamic finance, green wealth management, and cross-border GCC
            financial integration creating new market opportunities.
          </p>

          <div class="grid grid-cols-1 gap-4">
            <div class="p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-500 text-tm-txt-primary">Islamic Finance Market</span>
                <span class="text-sm font-700 text-green-500">AED 320B</span>
              </div>
              <div class="text-xs text-tm-txt-light">35.8% of total wealth management</div>
            </div>
            <div class="p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-500 text-tm-txt-primary">Green Wealth Management</span>
                <span class="text-sm font-700 text-green-500">AED 120B</span>
              </div>
              <div class="text-xs text-tm-txt-light">45% year-over-year growth</div>
            </div>
            <div class="p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-500 text-tm-txt-primary">Cross-border Transactions</span>
                <span class="text-sm font-700 text-green-500">Growing</span>
              </div>
              <div class="text-xs text-tm-txt-light">GCC financial integration</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Strategic Focus Areas -->
      <div class="text-center mb-10">
        <h3 class="text-2xl font-600 text-tm-txt-primary mb-10">Our Strategic Focus Areas</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div
            class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 group"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🏦
            </div>
            <h4 class="text-base font-600 text-tm-txt-primary mb-2">Wealth Management</h4>
            <p class="text-xs text-tm-txt-secondary leading-tight">
              Private banking & investment advisory
            </p>
          </div>
          <div
            class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 group"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              💳
            </div>
            <h4 class="text-base font-600 text-tm-txt-primary mb-2">Digital Banking</h4>
            <p class="text-xs text-tm-txt-secondary leading-tight">
              Fintech innovation & mobile payments
            </p>
          </div>
          <div
            class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 group"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              ⚖️
            </div>
            <h4 class="text-base font-600 text-tm-txt-primary mb-2">Compliance & Risk</h4>
            <p class="text-xs text-tm-txt-secondary leading-tight">AML, KYC & risk management</p>
          </div>
          <div
            class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 group"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🌱
            </div>
            <h4 class="text-base font-600 text-tm-txt-primary mb-2">Sustainable Finance</h4>
            <p class="text-xs text-tm-txt-secondary leading-tight">ESG investing & green bonds</p>
          </div>
          <div
            class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 group"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              📊
            </div>
            <h4 class="text-base font-600 text-tm-txt-primary mb-2">Investment Banking</h4>
            <p class="text-xs text-tm-txt-secondary leading-tight">
              M&A advisory & capital markets
            </p>
          </div>
          <div
            class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-pri-0 transition-all duration-300 group"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🕌
            </div>
            <h4 class="text-base font-600 text-tm-txt-primary mb-2">Islamic Finance</h4>
            <p class="text-xs text-tm-txt-secondary leading-tight">
              Sharia-compliant banking & sukuk
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic can be added here if needed
</script>
