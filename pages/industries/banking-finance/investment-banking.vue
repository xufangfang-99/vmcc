<template>
  <div class="min-h-screen bg-tm-bg-primary dark:bg-tm-bg-secondary">
    <!-- Report Header -->
    <section class="py-16 bg-gradient-to-br from-red-600 to-pink-700 text-white">
      <div class="max-w-1200px mx-auto px-5">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-6 text-white/80 text-sm">
          <NuxtLink
            to="/"
            class="hover:text-white transition-colors no-underline"
          >
            Home
          </NuxtLink>
          <span>/</span>
          <NuxtLink
            to="/industries"
            class="hover:text-white transition-colors no-underline"
          >
            Industries
          </NuxtLink>
          <span>/</span>
          <NuxtLink
            to="/industries/banking-finance"
            class="hover:text-white transition-colors no-underline"
          >
            Banking & Finance
          </NuxtLink>
          <span>/</span>
          <span class="text-white">Investment Banking Report</span>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span class="text-sm font-500 uppercase tracking-wider">
              Global Market Analysis 2025
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-300 mb-6 leading-tight">
            Banking & Finance Industry Report
            <span class="block font-600">Investment Banking</span>
          </h1>

          <p class="text-xl text-white/90 max-w-800px mx-auto mb-8 leading-relaxed">
            Comprehensive analysis of global investment banking sector covering M&A activity, IPO
            market recovery, private capital growth, and sustainable finance trends
          </p>

          <!-- Key Global Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-800px mx-auto">
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$4T+</div>
              <div class="text-xs text-white/80">M&A Deal Values 2025</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">IPO</div>
              <div class="text-xs text-white/80">Market Recovery</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">HK/Dubai</div>
              <div class="text-xs text-white/80">Leading Markets</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">ESG</div>
              <div class="text-xs text-white/80">Green Finance</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Table of Contents -->
    <section class="py-12 bg-tm-bg-secondary dark:bg-tm-bg-primary border-b border-tm-bd-card">
      <div class="max-w-1200px mx-auto px-5">
        <h2 class="text-2xl font-600 text-tm-txt-primary mb-8 text-center">Report Contents</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="#industry-overview"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              I
            </div>
            <span class="text-tm-txt-primary font-500">Industry Overview</span>
          </a>
          <a
            href="#key-trends"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              II
            </div>
            <span class="text-tm-txt-primary font-500">Key Trends & Drivers</span>
          </a>
          <a
            href="#challenges-risks"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              III
            </div>
            <span class="text-tm-txt-primary font-500">Challenges & Risks</span>
          </a>
          <a
            href="#outlook-implications"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              IV
            </div>
            <span class="text-tm-txt-primary font-500">Outlook & Talent Implications</span>
          </a>
          <a
            href="#regional-markets"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              V
            </div>
            <span class="text-tm-txt-primary font-500">Regional Markets</span>
          </a>
          <a
            href="#future-outlook"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              VI
            </div>
            <span class="text-tm-txt-primary font-500">Future Outlook</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Report Content -->
    <div class="max-w-1200px mx-auto px-5 py-16">
      <!-- Section I: Industry Overview -->
      <section
        id="industry-overview"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            I
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Industry Overview</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            Investment banking remains a critical pillar of global finance, providing services such
            as capital raising, mergers and acquisitions (M&A), and advisory. In 2025, the sector is
            experiencing mixed momentum: while equity capital markets show strong activity driven by
            technology and energy transition companies, debt issuance is slowing under high interest
            rates. Regional shifts are also evident, with Asia and the Middle East gaining
            prominence.
          </p>
        </div>

        <!-- Market Activity Overview -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Market Activity Indicators</h3>
            <div class="space-y-4">
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">M&A Deal Values (2025)</span>
                <div class="text-right">
                  <div class="text-xl font-700 text-red-500">$4T+</div>
                  <div class="text-xs text-tm-txt-light">Expected volume</div>
                </div>
              </div>
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">IPO Market Status</span>
                <div class="text-right">
                  <div class="text-xl font-700 text-green-500">Recovery</div>
                  <div class="text-xs text-tm-txt-light">Post 2022-23 slowdown</div>
                </div>
              </div>
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">Debt Issuance</span>
                <div class="text-right">
                  <div class="text-xl font-700 text-orange-500">Slowing</div>
                  <div class="text-xs text-tm-txt-light">High interest rates</div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Leading Sectors</h3>
            <div class="grid grid-cols-1 gap-4">
              <div
                class="p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border-l-4 border-red-500"
              >
                <h4 class="text-sm font-600 text-tm-txt-primary mb-1">Technology</h4>
                <p class="text-xs text-tm-txt-secondary">Strong equity capital market activity</p>
              </div>
              <div
                class="p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border-l-4 border-green-500"
              >
                <h4 class="text-sm font-600 text-tm-txt-primary mb-1">Healthcare</h4>
                <p class="text-xs text-tm-txt-secondary">M&A and consolidation trends</p>
              </div>
              <div
                class="p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border-l-4 border-blue-500"
              >
                <h4 class="text-sm font-600 text-tm-txt-primary mb-1">Renewable Energy</h4>
                <p class="text-xs text-tm-txt-secondary">Energy transition financing surge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section II: Key Trends & Drivers -->
      <section
        id="key-trends"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            II
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Key Trends and Drivers</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- M&A Activity -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white"
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
              <h3 class="text-xl font-600 text-tm-txt-primary">M&A Activity</h3>
            </div>

            <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
              Technology, healthcare, and renewable energy are leading sectors for global mergers
              and acquisitions, with deal values expected to exceed USD 4 trillion in 2025, driven
              by digital transformation and energy transition needs.
            </p>

            <div class="space-y-4">
              <div class="p-4 bg-red-500/5 rounded-xl border-l-4 border-red-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Technology Consolidation</h4>
                <p class="text-xs text-tm-txt-secondary">
                  AI, cloud computing, and cybersecurity sector M&A acceleration
                </p>
              </div>

              <div class="p-4 bg-pink-500/5 rounded-xl border-l-4 border-pink-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Healthcare Integration</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Pharmaceutical and biotech companies seeking scale and innovation
                </p>
              </div>

              <div class="p-4 bg-purple-500/5 rounded-xl border-l-4 border-purple-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Energy Transition</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Renewable energy and clean tech M&A driving sector transformation
                </p>
              </div>
            </div>
          </div>

          <!-- IPO Market Recovery -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white"
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
              <h3 class="text-xl font-600 text-tm-txt-primary">IPO Market Recovery</h3>
            </div>

            <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
              After a slowdown in 2022-2023, initial public offerings (IPOs) are rebounding,
              particularly in Hong Kong, Dubai, and Singapore, with strong investor appetite for
              quality companies with sustainable business models.
            </p>

            <div class="space-y-4">
              <div class="text-center p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl">
                <div class="text-lg font-700 text-green-500 mb-1">Hong Kong</div>
                <div class="text-xs text-tm-txt-light">Leading IPO market recovery</div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-base font-600 text-green-500">Dubai</div>
                  <div class="text-xs text-tm-txt-light">Regional hub</div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-base font-600 text-green-500">Singapore</div>
                  <div class="text-xs text-tm-txt-light">ASEAN gateway</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Private Capital Growth & Sustainable Finance -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Private Capital Growth -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white"
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
                    r="3"
                  />
                  <path d="M12 1v6m0 6v6" />
                </svg>
              </div>
              <h3 class="text-xl font-600 text-tm-txt-primary">Private Capital Growth</h3>
            </div>

            <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
              Private equity firms are increasingly competing with investment banks for large-scale
              transactions, bringing significant capital and operational expertise to deal-making
              processes.
            </p>

            <div class="space-y-3">
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">PE Competition</span>
                <span class="text-sm font-600 text-blue-500">Increasing</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Deal Expertise</span>
                <span class="text-sm font-600 text-blue-500">Operational</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Capital Scale</span>
                <span class="text-sm font-600 text-blue-500">Large</span>
              </div>
            </div>
          </div>

          <!-- Sustainable Finance -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M12 15v6" />
                </svg>
              </div>
              <h3 class="text-xl font-600 text-tm-txt-primary">Sustainable Finance</h3>
            </div>

            <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
              Investment banks are structuring more green bonds and transition finance products to
              support ESG goals, creating new revenue streams while addressing environmental and
              social challenges.
            </p>

            <div class="space-y-4">
              <div class="p-4 bg-green-500/5 rounded-xl border-l-4 border-green-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-1">Green Bonds</h4>
                <p class="text-xs text-tm-txt-secondary">Environmental project financing surge</p>
              </div>
              <div class="p-4 bg-emerald-500/5 rounded-xl border-l-4 border-emerald-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-1">ESG Advisory</h4>
                <p class="text-xs text-tm-txt-secondary">Corporate sustainability consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section III: Challenges & Risks -->
      <section
        id="challenges-risks"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            III
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Challenges and Risks</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <!-- High Interest Rates -->
            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
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
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <h3 class="text-lg font-600 text-tm-txt-primary">High Interest Rates</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-3">
                Elevated borrowing costs make leveraged buyouts and debt-driven deals more
                difficult, impacting deal structures and valuations across the industry.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Higher financing costs</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Leveraged buyout challenges</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Valuation pressures</span>
                </div>
              </div>
            </div>

            <!-- Geopolitical Uncertainty -->
            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center"
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
                <h3 class="text-lg font-600 text-tm-txt-primary">Geopolitical Uncertainty</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-3">
                Trade tensions, sanctions, and regional conflicts impact cross-border deal-making,
                creating complexity in international transactions.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Cross-border complexity</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Regulatory uncertainties</span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <!-- Regulatory Pressure -->
            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center"
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
                <h3 class="text-lg font-600 text-tm-txt-primary">Regulatory Pressure</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
                Stricter rules on capital requirements and disclosure increase operational
                complexity and compliance costs for investment banking operations.
              </p>
              <div class="space-y-3">
                <div
                  class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
                >
                  <span class="text-xs text-tm-txt-secondary">Capital Requirements</span>
                  <span class="text-sm font-600 text-purple-500">Stricter</span>
                </div>
                <div
                  class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
                >
                  <span class="text-xs text-tm-txt-secondary">Disclosure Rules</span>
                  <span class="text-sm font-600 text-purple-500">Enhanced</span>
                </div>
              </div>
            </div>

            <!-- Competition from Private Equity -->
            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                    />
                    <path d="m22 21-3-3" />
                  </svg>
                </div>
                <h3 class="text-lg font-600 text-tm-txt-primary">PE Competition</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
                Private equity and direct lending funds increasingly compete with traditional
                investment banks for large transactions and client relationships.
              </p>
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-lg font-700 text-blue-500">Direct Competition</div>
                <div class="text-xs text-tm-txt-light">Large-scale deals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section IV: Outlook & Talent Implications -->
      <section
        id="outlook-implications"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            IV
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Outlook and Talent Implications</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            Investment banking is set to consolidate further, with global firms expanding in
            high-growth regions. Skills in cross-border deal structuring, ESG advisory, and digital
            capital markets will be in high demand. The sector will face ongoing talent competition
            from private equity and fintech firms.
          </p>
        </div>

        <!-- Future Outlook -->
        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary dark:from-tm-bg-primary dark:to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card mb-8"
        >
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">Industry Consolidation Trends</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
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
                </svg>
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Global Expansion</h4>
              <p class="text-sm text-tm-txt-secondary">
                Focus on high-growth regions including Asia and Middle East markets
              </p>
            </div>

            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
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
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Technology Integration</h4>
              <p class="text-sm text-tm-txt-secondary">
                Digital capital markets and automated deal processing platforms
              </p>
            </div>

            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                  />
                </svg>
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Specialized Advisory</h4>
              <p class="text-sm text-tm-txt-secondary">
                ESG consulting and sustainable finance product development
              </p>
            </div>
          </div>
        </div>

        <!-- Talent Implications -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- High-Demand Skills -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Critical Skills in Demand</h3>
            <div class="space-y-4">
              <div class="p-4 bg-red-500/5 rounded-xl border-l-4 border-red-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">
                  Cross-border Deal Structuring
                </h4>
                <p class="text-xs text-tm-txt-secondary">
                  Complex international transaction management and regulatory navigation
                </p>
              </div>

              <div class="p-4 bg-green-500/5 rounded-xl border-l-4 border-green-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">ESG Advisory</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Sustainable finance consulting and green bond structuring expertise
                </p>
              </div>

              <div class="p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Digital Capital Markets</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Technology platform knowledge and automated trading systems
                </p>
              </div>
            </div>
          </div>

          <!-- Career Opportunities -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Career Growth Areas</h3>
            <div class="space-y-4">
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">M&A Directors</span>
                <span class="text-sm font-600 text-red-500">High Demand</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Capital Markets Heads</span>
                <span class="text-sm font-600 text-green-500">Growing</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">ESG Specialists</span>
                <span class="text-sm font-600 text-blue-500">Premium +30%</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Corporate Finance VPs</span>
                <span class="text-sm font-600 text-purple-500">Competitive</span>
              </div>
            </div>

            <div class="mt-6 p-4 bg-red-500/5 rounded-xl">
              <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Talent Competition</h4>
              <p class="text-xs text-tm-txt-secondary">
                Ongoing competition from private equity and fintech firms for top talent
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
      <div
        class="text-center py-12 bg-gradient-to-r from-red-600 to-pink-700 text-white rounded-3xl mb-12"
      >
        <h3 class="text-2xl font-600 mb-4">Download Complete Investment Banking Report</h3>
        <p class="text-lg mb-6 max-w-600px mx-auto">
          Access comprehensive investment banking industry analysis with M&A trends, market
          forecasts, and strategic talent recommendations for the evolving sector.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-600 rounded-full hover:bg-white/95 transition-colors"
          >
            Request Report Summary
          </button>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-600 rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors no-underline"
          >
            Request Investment Banking Consultation
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import FooterSection from '~/components/Home/FooterSection.vue'

  // Set page layout
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Investment Banking Industry Report 2025 - $4T M&A Market Analysis | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive Investment Banking Industry Report 2025. Analysis of $4T+ M&A deal values, IPO market recovery, sustainable finance trends, and talent implications for the sector.',
      },
      {
        name: 'keywords',
        content:
          'investment banking report, M&A activity 2025, IPO market recovery, private capital growth, sustainable finance, ESG advisory, cross-border deals, Hong Kong Dubai Singapore',
      },
      {
        property: 'og:title',
        content: 'Investment Banking Industry Report 2025 - $4T M&A Market Analysis',
      },
      {
        property: 'og:description',
        content:
          'In-depth analysis of global investment banking trends covering M&A activity, capital markets recovery, sustainable finance growth, and critical talent requirements.',
      },
    ],
  })
</script>
