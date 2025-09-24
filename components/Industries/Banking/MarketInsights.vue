<template>
  <section class="py-20 bg-tm-bg-secondary dark:bg-tm-bg-primary">
    <div class="max-w-1400px mx-auto px-5">
      <!-- Section Header -->
      <div class="text-center mb-15">
        <h2 class="text-3xl md:text-4xl font-300 text-tm-txt-primary mb-4 leading-tight">
          Market Insights &
          <span
            class="font-600 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 bg-clip-text text-transparent"
          >
            Trends Analysis
          </span>
        </h2>
        <p class="text-lg md:text-xl text-tm-txt-secondary max-w-800px mx-auto leading-relaxed">
          Deep dive into digital transformation trends, regulatory dynamics, and emerging
          opportunities shaping the future of banking and finance
        </p>
      </div>

      <!-- Digital Transformation Trends -->
      <div class="mb-20">
        <h3 class="text-2xl font-600 text-tm-txt-primary mb-8 text-center">
          Digital Transformation Landscape
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Investment & Adoption Stats -->
          <div
            class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card hover:shadow-tm-shadow-hover transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white"
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
              <h4 class="text-xl font-600 text-tm-txt-primary">Investment & Adoption</h4>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="text-center p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl">
                <div class="text-2xl font-700 text-blue-500 mb-1">AED 4.5B</div>
                <div class="text-xs text-tm-txt-light">Annual FinTech Investment (+30% YoY)</div>
              </div>
              <div class="text-center p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl">
                <div class="text-2xl font-700 text-blue-500 mb-1">82%</div>
                <div class="text-xs text-tm-txt-light">Mobile Banking Penetration (+7pp)</div>
              </div>
            </div>

            <div class="space-y-3">
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Core Business Digitization</span>
                <span class="text-sm font-600 text-blue-500">90%</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Digital Transaction Volume</span>
                <span class="text-sm font-600 text-blue-500">AED 12T (68%)</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Traditional Branches Reduction</span>
                <span class="text-sm font-600 text-red-500">-35% since 2020</span>
              </div>
            </div>
          </div>

          <!-- Technology Applications -->
          <div
            class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card hover:shadow-tm-shadow-hover transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white"
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
              <h4 class="text-xl font-600 text-tm-txt-primary">Core Technology Stack</h4>
            </div>

            <div class="space-y-4">
              <div class="p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-500 text-tm-txt-primary">AI & Chatbots</span>
                  <span
                    class="px-2 py-1 bg-green-500/20 text-green-600 text-xs font-600 rounded-full"
                  >
                    85% Deployed
                  </span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  DIB's Sharia Smart Assistant handles 70% of daily inquiries
                </p>
              </div>

              <div class="p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-500 text-tm-txt-primary">Blockchain Settlements</span>
                  <span
                    class="px-2 py-1 bg-blue-500/20 text-blue-600 text-xs font-600 rounded-full"
                  >
                    AED 80B Processed
                  </span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  UAE-Saudi cross-border: 2hrs → 5mins, -40% costs
                </p>
              </div>

              <div class="p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-500 text-tm-txt-primary">Biometric Security</span>
                  <span
                    class="px-2 py-1 bg-purple-500/20 text-purple-600 text-xs font-600 rounded-full"
                  >
                    70% Adoption
                  </span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  Emirates NBD's iris scanning: 1M+ users in 2024
                </p>
              </div>

              <div class="p-4 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-xl">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-500 text-tm-txt-primary">Digital Currency Pilots</span>
                  <span
                    class="px-2 py-1 bg-orange-500/20 text-orange-600 text-xs font-600 rounded-full"
                  >
                    3 Banks Licensed
                  </span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  ADCB crypto custody: AED 1.2B assets under management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Regulatory Dynamics -->
      <div class="mb-20">
        <h3 class="text-2xl font-600 text-tm-txt-primary mb-8 text-center">
          Regulatory Framework Evolution
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- CBUAE Initiatives -->
          <div
            class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary">CBUAE Compliance</h4>
            </div>

            <ul class="space-y-3">
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1.5"></div>
                <span class="text-sm text-tm-txt-secondary">
                  Monthly disclosure requirements for net-value products
                </span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1.5"></div>
                <span class="text-sm text-tm-txt-secondary">
                  30% derivative exposure cap for structured products
                </span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1.5"></div>
                <span class="text-sm text-tm-txt-secondary">
                  Enhanced risk mitigation for complex instruments
                </span>
              </li>
            </ul>
          </div>

          <!-- Cross-border Regulations -->
          <div
            class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
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
                </svg>
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary">Cross-border Capital</h4>
            </div>

            <div class="space-y-3">
              <div class="p-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-lg">
                <div class="text-sm font-500 text-tm-txt-primary mb-1">
                  Overseas Investment Limit
                </div>
                <div class="text-lg font-700 text-blue-500">40%</div>
                <div class="text-xs text-tm-txt-light">For qualified wealth managers</div>
              </div>
              <p class="text-sm text-tm-txt-secondary">
                Expanded access to emerging market bonds and developed market equities
              </p>
            </div>
          </div>

          <!-- Green Finance Regulation -->
          <div
            class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M12 15v6" />
                </svg>
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary">Green Certification</h4>
            </div>

            <div class="space-y-3">
              <div class="p-3 bg-green-500/5 rounded-lg border-l-4 border-green-500">
                <div class="text-sm font-500 text-tm-txt-primary mb-1">
                  UAE Net Zero 2050 Alignment
                </div>
                <div class="text-lg font-700 text-green-500">70% Minimum</div>
                <div class="text-xs text-tm-txt-light">Asset allocation requirement</div>
              </div>
              <div class="text-center p-2 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-lg">
                <div class="text-base font-600 text-green-500">AED 120B</div>
                <div class="text-xs text-tm-txt-light">Green wealth (+45% YoY)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Innovation Trends -->
      <div class="mb-20">
        <h3 class="text-2xl font-600 text-tm-txt-primary mb-8 text-center">
          Product Innovation & Market Dynamics
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Islamic Finance Growth -->
          <div
            class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card hover:shadow-tm-shadow-hover transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-xl"
              >
                🕌
              </div>
              <div>
                <h4 class="text-xl font-600 text-tm-txt-primary">Islamic Finance Innovation</h4>
                <p class="text-sm text-tm-txt-secondary">35.8% of total wealth management market</p>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 mb-6">
              <div class="p-4 bg-emerald-500/5 rounded-xl border-l-4 border-emerald-500">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-500 text-tm-txt-primary">
                    Sharia-compliant Products
                  </span>
                  <span class="text-lg font-700 text-emerald-500">AED 320B</span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  Strong performance across retail and institutional segments
                </p>
              </div>
            </div>

            <div class="space-y-3">
              <div class="p-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-lg">
                <div class="text-sm font-500 text-tm-txt-primary mb-1">
                  DIB Profit-Sharing Real Estate Fund
                </div>
                <div class="text-sm text-emerald-500 font-600">5.8% annual dividend rate</div>
              </div>
              <div class="p-3 bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-lg">
                <div class="text-sm font-500 text-tm-txt-primary mb-1">
                  RAKBank Sukuk + Ijarah Hybrid
                </div>
                <div class="text-sm text-emerald-500 font-600">Stable cash flow model</div>
              </div>
            </div>
          </div>

          <!-- Thematic Investment Products -->
          <div
            class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card hover:shadow-tm-shadow-hover transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-600 text-tm-txt-primary">Thematic Products</h4>
                <p class="text-sm text-tm-txt-secondary">Energy transition & cross-border focus</p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="p-4 bg-indigo-500/5 rounded-xl">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-500 text-tm-txt-primary">
                    ADCB Hydrogen Industry Chain
                  </span>
                  <span
                    class="px-2 py-1 bg-indigo-500/20 text-indigo-600 text-xs font-600 rounded-full"
                  >
                    6.8% Expected
                  </span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  Investment in UAE hydrogen projects and equipment suppliers
                </p>
              </div>

              <div class="p-4 bg-blue-500/5 rounded-xl">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-500 text-tm-txt-primary">
                    DIB India-UAE Trade Bridge
                  </span>
                  <span
                    class="px-2 py-1 bg-blue-500/20 text-blue-600 text-xs font-600 rounded-full"
                  >
                    Cross-border
                  </span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  Linked to Dubai-Mumbai freight indices and Indian export bills
                </p>
              </div>

              <div class="p-4 bg-green-500/5 rounded-xl">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-500 text-tm-txt-primary">Structured Products</span>
                  <span
                    class="px-2 py-1 bg-green-500/20 text-green-600 text-xs font-600 rounded-full"
                  >
                    42% Share
                  </span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  Core local industries: oil, infrastructure focus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Global Trends Impact -->
      <div
        class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary dark:from-tm-bg-primary dark:to-tm-bg-secondary rounded-3xl p-8 md:p-12 border border-tm-bd-card relative overflow-hidden"
      >
        <!-- Background decoration -->
        <div
          class="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-tm-pri-0/5 to-tm-pri-1/5 rounded-bl-full"
        ></div>

        <div class="relative z-1">
          <div class="text-center mb-8">
            <h3 class="text-2xl md:text-3xl font-600 text-tm-txt-primary mb-4">
              Global Trends Shaping Regional Markets
            </h3>
            <p class="text-base text-tm-txt-secondary max-w-600px mx-auto">
              International developments creating opportunities and challenges for GCC banking
              sector
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
              >
                📈
              </div>
              <div class="text-lg font-700 text-blue-500 mb-1">$19T by 2027</div>
              <div class="text-sm text-tm-txt-primary font-500 mb-2">Digital Payments</div>
              <div class="text-xs text-tm-txt-secondary">Double current volume</div>
            </div>

            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
              >
                🌱
              </div>
              <div class="text-lg font-700 text-green-500 mb-1">$500B+</div>
              <div class="text-sm text-tm-txt-primary font-500 mb-2">Green Bond Issuance</div>
              <div class="text-xs text-tm-txt-secondary">15%+ annual growth</div>
            </div>

            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
              >
                👥
              </div>
              <div class="text-lg font-700 text-orange-500 mb-1">1M+</div>
              <div class="text-sm text-tm-txt-primary font-500 mb-2">FinTech Talent Gap</div>
              <div class="text-xs text-tm-txt-secondary">AI, blockchain, cybersecurity</div>
            </div>

            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-2xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
              >
                ⚖️
              </div>
              <div class="text-lg font-700 text-purple-500 mb-1">$27B</div>
              <div class="text-sm text-tm-txt-primary font-500 mb-2">RegTech Market</div>
              <div class="text-xs text-tm-txt-secondary">By 2027 projection</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic can be added here if needed
</script>
