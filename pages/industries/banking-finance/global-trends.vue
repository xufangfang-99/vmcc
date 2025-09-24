<template>
  <div class="min-h-screen bg-tm-bg-primary dark:bg-tm-bg-secondary">
    <!-- Report Header -->
    <section class="py-16 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
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
          <span class="text-white">Global Trends Report</span>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span class="text-sm font-500 uppercase tracking-wider">
              Global Market Analysis 2024
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-300 mb-6 leading-tight">
            Global Banking & Finance
            <span class="block font-600">Development Trends Report</span>
          </h1>

          <p class="text-xl text-white/90 max-w-800px mx-auto mb-8 leading-relaxed">
            Comprehensive analysis of worldwide banking industry trends, covering USD 180 trillion
            in global banking assets, digital payment evolution, and emerging market dynamics
          </p>

          <!-- Key Global Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-800px mx-auto">
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$180T</div>
              <div class="text-xs text-white/80">Global Banking Assets</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">20%</div>
              <div class="text-xs text-white/80">Global GDP Share</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$19T</div>
              <div class="text-xs text-white/80">Digital Payments by 2027</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$500B+</div>
              <div class="text-xs text-white/80">Green Bond Issuance</div>
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
            href="#industry-status"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              I
            </div>
            <span class="text-tm-txt-primary font-500">Industry Status & Market Size</span>
          </a>
          <a
            href="#key-trends"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              IV
            </div>
            <span class="text-tm-txt-primary font-500">Outlook & Talent Implications</span>
          </a>
          <a
            href="#regional-analysis"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              V
            </div>
            <span class="text-tm-txt-primary font-500">Regional Market Analysis</span>
          </a>
          <a
            href="#future-outlook"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
      <!-- Section I: Industry Status & Market Size -->
      <section
        id="industry-status"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-cyan-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            I
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Industry Status & Market Size</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            The global banking and finance industry remains the backbone of the world economy. In
            2023,
            <strong class="text-cyan-600">global banking assets exceeded USD 180 trillion</strong>
            , and financial services contributed roughly
            <strong class="text-cyan-600">20% of global GDP</strong>
            . China holds the largest banking sector with assets around USD 55 trillion, while the
            U.S. leads in capital markets, and the EU maintains strength in cross-border banking and
            regulatory integration.
          </p>
        </div>

        <!-- Regional Market Leaders -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center text-xl"
              >
                🇨🇳
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">China</h3>
            </div>
            <div class="space-y-3">
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-2xl font-700 text-red-500 mb-1">$55T</div>
                <div class="text-sm text-tm-txt-primary font-500">Banking Assets</div>
                <div class="text-xs text-tm-txt-light">Largest banking sector globally</div>
              </div>
              <p class="text-sm text-tm-txt-secondary">
                Dominates in banking asset size with strong domestic market presence and growing
                international expansion.
              </p>
            </div>
          </div>

          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center text-xl"
              >
                🇺🇸
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">United States</h3>
            </div>
            <div class="space-y-3">
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-lg font-700 text-blue-500 mb-1">Capital Markets</div>
                <div class="text-sm text-tm-txt-primary font-500">Global Leader</div>
                <div class="text-xs text-tm-txt-light">NYSE, NASDAQ dominance</div>
              </div>
              <p class="text-sm text-tm-txt-secondary">
                Leads in capital markets sophistication, investment banking, and financial
                innovation ecosystems.
              </p>
            </div>
          </div>

          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center text-xl"
              >
                🇪🇺
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">European Union</h3>
            </div>
            <div class="space-y-3">
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-lg font-700 text-yellow-500 mb-1">Cross-border</div>
                <div class="text-sm text-tm-txt-primary font-500">Integration Leader</div>
                <div class="text-xs text-tm-txt-light">Regulatory harmonization</div>
              </div>
              <p class="text-sm text-tm-txt-secondary">
                Strength in cross-border banking integration and comprehensive regulatory
                frameworks.
              </p>
            </div>
          </div>
        </div>

        <!-- Digital Transformation Scale -->
        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary dark:from-tm-bg-primary dark:to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card"
        >
          <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Digital Transformation Impact</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                  />
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                  />
                </svg>
              </div>
              <div class="text-2xl font-700 text-blue-500 mb-2">$9.5T</div>
              <div class="text-sm font-500 text-tm-txt-primary mb-2">Digital Payments (2022)</div>
              <div class="text-xs text-tm-txt-secondary">Growing to $19T by 2027</div>
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
              <div class="text-2xl font-700 text-green-500 mb-2">8 Licenses</div>
              <div class="text-sm font-500 text-tm-txt-primary mb-2">Hong Kong Virtual Banks</div>
              <div class="text-xs text-tm-txt-secondary">Rapid user adoption</div>
            </div>

            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
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
              <div class="text-2xl font-700 text-purple-500 mb-2">Blockchain</div>
              <div class="text-sm font-500 text-tm-txt-primary mb-2">Cross-border Settlements</div>
              <div class="text-xs text-tm-txt-secondary">Speed & efficiency gains</div>
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
            class="w-12 h-12 bg-cyan-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            II
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Key Trends & Drivers</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Digitalization & FinTech -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                  />
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-600 text-tm-txt-primary">Digitalization & FinTech</h3>
            </div>

            <div class="space-y-4">
              <div class="p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">
                  Mobile & Cashless Payments
                </h4>
                <p class="text-xs text-tm-txt-secondary mb-3">
                  Alipay, WeChat Pay, and Apple Pay dominate global markets
                </p>
                <div class="grid grid-cols-2 gap-3">
                  <div class="text-center p-2 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                    <div class="text-sm font-600 text-blue-500">$9.5T</div>
                    <div class="text-xs text-tm-txt-light">2022 Volume</div>
                  </div>
                  <div class="text-center p-2 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                    <div class="text-sm font-600 text-green-500">$19T</div>
                    <div class="text-xs text-tm-txt-light">2027 Projection</div>
                  </div>
                </div>
              </div>

              <div class="p-4 bg-green-500/5 rounded-xl border-l-4 border-green-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Virtual Banking</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Hong Kong issued 8 digital banking licenses with rapid user adoption
                </p>
              </div>

              <div class="p-4 bg-purple-500/5 rounded-xl border-l-4 border-purple-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Blockchain Implementation</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Banks adopting blockchain for cross-border settlements to improve speed and
                  efficiency
                </p>
              </div>
            </div>
          </div>

          <!-- Regulation & Compliance -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white"
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
              <h3 class="text-xl font-600 text-tm-txt-primary">Regulation & Compliance</h3>
            </div>

            <div class="space-y-4">
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
                Post-crisis regulatory environment with stricter rules on capital adequacy, AML, and
                data protection (e.g., GDPR).
              </p>

              <div class="p-4 bg-red-500/5 rounded-xl border-l-4 border-red-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">RegTech Market Growth</h4>
                <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-lg font-700 text-red-500">$27B by 2027</div>
                  <div class="text-xs text-tm-txt-light">
                    Expanding compliance technology market
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">
                    Enhanced capital adequacy requirements
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Strengthened AML/KYC frameworks</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">
                    Data protection compliance (GDPR)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sustainable Finance & Interest Rate Environment -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <h3 class="text-xl font-600 text-tm-txt-primary">
                Sustainable Finance & Green Investment
              </h3>
            </div>

            <div class="space-y-4">
              <div class="text-center p-4 bg-green-500/5 rounded-xl">
                <div class="text-2xl font-700 text-green-500 mb-1">$500B+</div>
                <div class="text-sm font-500 text-tm-txt-primary">Green Bond Issuance (2022)</div>
                <div class="text-xs text-tm-txt-light">15%+ annual growth expected</div>
              </div>

              <p class="text-sm text-tm-txt-secondary leading-relaxed">
                Demand for ESG products is surging globally. Green bond issuance exceeded USD 500
                billion in 2022, with annual growth expected at 15%+ over the next five years.
              </p>

              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">
                    ESG investing mainstream adoption
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Carbon markets expansion</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">
                    Sustainability-focused funds growth
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Interest Rate Environment -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white"
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
              <h3 class="text-xl font-600 text-tm-txt-primary">Interest Rates & Monetary Policy</h3>
            </div>

            <div class="space-y-4">
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
                The Fed's tightening cycle has created global liquidity pressures, with emerging
                markets facing capital outflows. Interest rate management is increasingly critical
                for financial institutions.
              </p>

              <div class="space-y-3">
                <div class="p-3 bg-indigo-500/5 rounded-lg border-l-4 border-indigo-500">
                  <div class="text-sm font-500 text-tm-txt-primary">Global Liquidity Impact</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Fed tightening cycle affecting worldwide markets
                  </div>
                </div>

                <div class="p-3 bg-purple-500/5 rounded-lg border-l-4 border-purple-500">
                  <div class="text-sm font-500 text-tm-txt-primary">Emerging Market Pressures</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Capital outflows and currency volatility
                  </div>
                </div>

                <div class="p-3 bg-blue-500/5 rounded-lg border-l-4 border-blue-500">
                  <div class="text-sm font-500 text-tm-txt-primary">Rate Management Priority</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Critical for institutional balance sheets
                  </div>
                </div>
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
            class="w-12 h-12 bg-cyan-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            III
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Challenges & Risks</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <!-- Macroeconomic Uncertainty -->
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
                <h3 class="text-lg font-600 text-tm-txt-primary">Macroeconomic Uncertainty</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-3">
                Inflation, geopolitical conflicts, and slowing growth create market volatility and
                operational challenges.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Global inflation pressures</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Geopolitical risk factors</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Economic growth deceleration</span>
                </div>
              </div>
            </div>

            <!-- Interest Rate Risk -->
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
                      r="3"
                    />
                    <path d="M12 1v6m0 6v6" />
                  </svg>
                </div>
                <h3 class="text-lg font-600 text-tm-txt-primary">Interest Rate Risk</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-3">
                Higher financing costs and balance sheet mismatches pose significant challenges for
                financial institutions.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Elevated borrowing costs</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Asset-liability mismatches</span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <!-- Cybersecurity Threats -->
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
                <h3 class="text-lg font-600 text-tm-txt-primary">Cybersecurity Threats</h3>
              </div>
              <div class="space-y-4">
                <div class="p-3 bg-purple-500/5 rounded-lg border-l-4 border-purple-500">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-sm font-500 text-tm-txt-primary">Attack Growth (2023)</span>
                    <span class="text-lg font-700 text-purple-500">+38%</span>
                  </div>
                  <div class="text-xs text-tm-txt-secondary">
                    Year-over-year increase in attacks on financial institutions
                  </div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-lg font-700 text-red-500">$10B+</div>
                  <div class="text-xs text-tm-txt-light">Annual losses from cyber attacks</div>
                </div>
              </div>
            </div>

            <!-- Competitive Pressure -->
            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                    />
                    <path d="m22 21-3-3" />
                  </svg>
                </div>
                <h3 class="text-lg font-600 text-tm-txt-primary">Competitive Pressure</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-3">
                Tech firms (Ant Group, Stripe, Square) are entering financial services, competing
                with traditional banks.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">
                    Big Tech financial services entry
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">FinTech innovation pressure</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Traditional banking disruption</span>
                </div>
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
            class="w-12 h-12 bg-cyan-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            IV
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Outlook & Talent Implications</h2>
        </div>

        <!-- Future Outlook -->
        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary dark:from-tm-bg-primary dark:to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card mb-8"
        >
          <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Next Decade Outlook</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Digital Transformation</h4>
              <p class="text-sm text-tm-txt-secondary">
                AI, blockchain, and big data embedded in risk, payments, and investment
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
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M12 15v6" />
                </svg>
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Sustainable Finance</h4>
              <p class="text-sm text-tm-txt-secondary">
                Green bonds, carbon markets, and ESG-focused funds mainstream adoption
              </p>
            </div>

            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
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
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Asia-Pacific Growth</h4>
              <p class="text-sm text-tm-txt-secondary">
                China, India, Southeast Asia as major growth engines
              </p>
            </div>
          </div>
        </div>

        <!-- Talent Implications -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Critical Talent Shortages -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Critical Talent Shortages</h3>
            <div class="space-y-4">
              <div class="p-4 bg-red-500/5 rounded-xl border-l-4 border-red-500">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-500 text-tm-txt-primary">FinTech Talent Shortage</span>
                  <span class="text-lg font-700 text-red-500">1M+ in 5 years</span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  AI, blockchain, and cybersecurity experts in critical shortage
                </p>
              </div>

              <div class="p-4 bg-orange-500/5 rounded-xl border-l-4 border-orange-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">
                  Risk & Compliance Professionals
                </h4>
                <p class="text-xs text-tm-txt-secondary">
                  Rising demand for AML, KYC, and regulatory compliance expertise
                </p>
              </div>

              <div class="p-4 bg-green-500/5 rounded-xl border-l-4 border-green-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Green Finance Talent</h4>
                <p class="text-xs text-tm-txt-secondary">
                  ESG and carbon market experts commanding premium salaries
                </p>
              </div>
            </div>
          </div>

          <!-- High-Demand Skills -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Highest Demand Skills</h3>
            <div class="space-y-4">
              <div class="p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Hybrid Skillsets</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Finance knowledge combined with tech expertise - highest demand for headhunters
                </p>
              </div>

              <div class="space-y-3">
                <div
                  class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
                >
                  <span class="text-sm text-tm-txt-primary">AI/ML + Finance</span>
                  <span class="text-sm font-600 text-blue-500">Premium +40%</span>
                </div>
                <div
                  class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
                >
                  <span class="text-sm text-tm-txt-primary">Blockchain + Banking</span>
                  <span class="text-sm font-600 text-purple-500">Premium +35%</span>
                </div>
                <div
                  class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
                >
                  <span class="text-sm text-tm-txt-primary">Cybersecurity + FinTech</span>
                  <span class="text-sm font-600 text-green-500">Premium +45%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
      <div
        class="text-center py-12 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-3xl mb-12"
      >
        <h3 class="text-2xl font-600 mb-4">Download Complete Global Trends Report</h3>
        <p class="text-lg mb-6 max-w-600px mx-auto">
          Access comprehensive global banking and finance industry analysis with market forecasts,
          talent insights, and strategic recommendations.
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
            Request Market Analysis
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
    title: 'Global Banking & Finance Development Trends Report 2024 - $180T Market Analysis | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive Global Banking & Finance Development Trends Report 2024. Analysis of $180T banking assets, digital payments growth to $19T by 2027, sustainable finance trends, and talent shortages.',
      },
      {
        name: 'keywords',
        content:
          'global banking trends, financial services 2024, digital payments growth, sustainable finance, RegTech market, FinTech talent shortage, banking industry analysis',
      },
      {
        property: 'og:title',
        content: 'Global Banking & Finance Development Trends Report 2024 - $180T Market Analysis',
      },
      {
        property: 'og:description',
        content:
          'Deep analysis of global banking industry trends covering digitalization, sustainable finance, regulatory changes, and critical talent implications for the next decade.',
      },
    ],
  })
</script>
