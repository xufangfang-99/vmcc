<template>
  <div class="min-h-screen bg-tm-bg-primary dark:bg-tm-bg-secondary">
    <!-- Report Header -->
    <section class="py-16 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
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
          <span class="text-white">Wealth Management Report</span>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span class="text-sm font-500 uppercase tracking-wider">
              Global Industry Analysis 2024
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-300 mb-6 leading-tight">
            Banking & Finance Industry Report
            <span class="block font-600">Wealth Management</span>
          </h1>

          <p class="text-xl text-white/90 max-w-800px mx-auto mb-8 leading-relaxed">
            Comprehensive analysis of the global wealth management sector covering HNWI growth,
            digital platform adoption, alternative investment trends, and ESG investment evolution
          </p>

          <!-- Key Global Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-700px mx-auto">
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$500T</div>
              <div class="text-xs text-white/80">Global Wealth Pool</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">1/3+</div>
              <div class="text-xs text-white/80">Asia Growth Share</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">HNWI</div>
              <div class="text-xs text-white/80">Rising Numbers</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">ESG</div>
              <div class="text-xs text-white/80">Mainstream</div>
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
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
            class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            I
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Industry Overview</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            Wealth management has become one of the fastest-growing segments within the banking and
            finance sector. Rising numbers of high-net-worth individuals (HNWIs) and
            ultra-high-net-worth individuals (UHNWIs), especially in Asia and the Middle East, are
            fueling demand for diversified investment solutions. Traditional banks are expanding
            their private banking arms, while fintech platforms are democratizing wealth management
            services.
          </p>
        </div>

        <!-- Global Wealth Pool Expansion -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Global Wealth Expansion</h3>
            <div class="text-center mb-4">
              <div class="text-4xl font-700 text-amber-500 mb-2">$500T</div>
              <div class="text-sm text-tm-txt-primary font-500">Global Wealth Pool by 2025</div>
              <div class="text-xs text-tm-txt-light">Asia accounts for over 1/3 of growth</div>
            </div>
            <div class="space-y-3">
              <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-sm font-500 text-tm-txt-primary">Primary Growth Drivers</div>
                <div class="text-xs text-tm-txt-secondary">Emerging market wealth creation</div>
              </div>
              <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-sm font-500 text-tm-txt-primary">Regional Leaders</div>
                <div class="text-xs text-tm-txt-secondary">Asia-Pacific, Middle East expansion</div>
              </div>
            </div>
          </div>

          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">HNWI & UHNWI Growth</h3>
            <div class="space-y-4">
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">Asia-Pacific HNWIs</span>
                <div class="text-right">
                  <div class="text-xl font-700 text-amber-500">Leading</div>
                  <div class="text-xs text-tm-txt-light">Growth region</div>
                </div>
              </div>
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">Middle East HNWIs</span>
                <div class="text-right">
                  <div class="text-xl font-700 text-amber-500">Rising</div>
                  <div class="text-xs text-tm-txt-light">Significant growth</div>
                </div>
              </div>
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">Global UHNWIs</span>
                <div class="text-right">
                  <div class="text-xl font-700 text-amber-500">Expanding</div>
                  <div class="text-xs text-tm-txt-light">Complex needs</div>
                </div>
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
            class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            II
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Key Trends and Drivers</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Digital Platforms Revolution -->
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
              <h3 class="text-xl font-600 text-tm-txt-primary">Digital Platforms</h3>
            </div>

            <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
              Robo-advisory and AI-driven investment tools are becoming standard, offering scalable
              and cost-efficient solutions for wealth management across different client segments.
            </p>

            <div class="space-y-4">
              <div class="p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Robo-Advisory Growth</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Automated portfolio management and rebalancing services
                </p>
              </div>

              <div class="p-4 bg-indigo-500/5 rounded-xl border-l-4 border-indigo-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">AI-Driven Tools</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Personalized investment recommendations and risk assessment
                </p>
              </div>

              <div class="p-4 bg-purple-500/5 rounded-xl border-l-4 border-purple-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Cost Efficiency</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Lower management fees and accessible minimum investments
                </p>
              </div>
            </div>
          </div>

          <!-- Alternative Investments -->
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
              <h3 class="text-xl font-600 text-tm-txt-primary">Alternative Investments</h3>
            </div>

            <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
              Demand for private equity, venture capital, and real estate funds is increasing as
              investors seek higher returns and portfolio diversification beyond traditional assets.
            </p>

            <div class="space-y-4">
              <div class="p-4 bg-green-500/5 rounded-xl border-l-4 border-green-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Private Equity Growth</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Institutional and HNWI allocation increases
                </p>
              </div>

              <div class="p-4 bg-emerald-500/5 rounded-xl border-l-4 border-emerald-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Real Estate Funds</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Commercial and residential property investment vehicles
                </p>
              </div>

              <div class="p-4 bg-teal-500/5 rounded-xl border-l-4 border-teal-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Venture Capital</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Tech and innovation-focused investment opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sustainable Investing -->
        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary dark:from-tm-bg-primary dark:to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                <path d="M12 15v6" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-600 text-tm-txt-primary">Sustainable Investing</h3>
              <p class="text-sm text-tm-txt-secondary">
                ESG-focused portfolios mainstream adoption
              </p>
            </div>
          </div>

          <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
            ESG-focused portfolios are now mainstream, especially among younger investors who
            prioritize environmental, social, and governance factors alongside financial returns.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl"
              >
                🌍
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Environmental Focus</h4>
              <p class="text-sm text-tm-txt-secondary">
                Climate change, renewable energy, and sustainable technology investments
              </p>
            </div>

            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl"
              >
                👥
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Social Impact</h4>
              <p class="text-sm text-tm-txt-secondary">
                Diversity, labor practices, and community development initiatives
              </p>
            </div>

            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl"
              >
                ⚖️
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Governance Standards</h4>
              <p class="text-sm text-tm-txt-secondary">
                Corporate transparency, executive compensation, and shareholder rights
              </p>
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
            class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            III
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Challenges and Risks</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <!-- Market Volatility -->
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
                <h3 class="text-lg font-600 text-tm-txt-primary">Market Volatility</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-3">
                Geopolitical shocks, inflation, and interest rate fluctuations make portfolio
                stability difficult to maintain across different market cycles.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Geopolitical uncertainties</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Interest rate volatility</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Inflation pressures</span>
                </div>
              </div>
            </div>

            <!-- Talent Shortages -->
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                    />
                    <path d="m22 21-3-3" />
                  </svg>
                </div>
                <h3 class="text-lg font-600 text-tm-txt-primary">Talent Shortages</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-3">
                Professionals with expertise in ESG investing, cross-border tax planning, and
                digital platforms are in high demand but short supply.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">ESG investment specialists</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Digital platform experts</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span class="text-xs text-tm-txt-secondary">Cross-border tax advisors</span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <!-- Regulatory Complexity -->
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
                <h3 class="text-lg font-600 text-tm-txt-primary">Regulatory Complexity</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
                Wealth managers face stricter compliance obligations across different jurisdictions,
                increasing operational complexity and costs.
              </p>
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-lg font-700 text-purple-500">Multi-jurisdiction</div>
                <div class="text-xs text-tm-txt-light">Compliance requirements</div>
              </div>
            </div>

            <!-- Technology Integration -->
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
                <h3 class="text-lg font-600 text-tm-txt-primary">Technology Integration</h3>
              </div>
              <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
                Balancing human advisory services with digital automation while maintaining
                personalized client relationships presents ongoing challenges.
              </p>
              <div class="space-y-3">
                <div
                  class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
                >
                  <span class="text-xs text-tm-txt-secondary">Digital Integration</span>
                  <span class="text-sm font-600 text-blue-500">Complex</span>
                </div>
                <div
                  class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
                >
                  <span class="text-xs text-tm-txt-secondary">Client Experience</span>
                  <span class="text-sm font-600 text-blue-500">Critical</span>
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
            class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            IV
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Outlook and Talent Implications</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            The wealth management industry will continue to grow, driven by digital transformation
            and global wealth expansion. Firms that can integrate technology with personalized
            advisory will gain a competitive edge. Talent needs will center on financial advisors
            skilled in ESG, multi-asset strategies, and digital client engagement.
          </p>
        </div>

        <!-- Future Growth Drivers -->
        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary dark:from-tm-bg-primary dark:to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card mb-8"
        >
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">Future Growth Drivers</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
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
                AI-powered advisory and automated portfolio management
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
                Asia-Pacific leading growth with emerging market opportunities
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
              <h4 class="text-lg font-600 text-tm-txt-primary mb-2">Personalized Advisory</h4>
              <p class="text-sm text-tm-txt-secondary">
                Technology-enhanced human advisory services integration
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
            <h3 class="text-xl font-600 text-tm-txt-primary mb-6">High-Demand Skills</h3>
            <div class="space-y-4">
              <div class="p-4 bg-amber-500/5 rounded-xl border-l-4 border-amber-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">ESG Investment Expertise</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Sustainable investing knowledge and impact measurement
                </p>
              </div>

              <div class="p-4 bg-green-500/5 rounded-xl border-l-4 border-green-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Multi-Asset Strategies</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Alternative investments and diversified portfolio management
                </p>
              </div>

              <div class="p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Digital Client Engagement</h4>
                <p class="text-xs text-tm-txt-secondary">
                  Technology-enhanced advisory and digital communication skills
                </p>
              </div>
            </div>
          </div>

          <!-- Career Opportunities -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Career Opportunities</h3>
            <div class="space-y-4">
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Digital Wealth Advisors</span>
                <span class="text-sm font-600 text-amber-500">High Growth</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">ESG Analysts</span>
                <span class="text-sm font-600 text-green-500">Premium +25%</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Alternative Investment Specialists</span>
                <span class="text-sm font-600 text-blue-500">Expanding</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg"
              >
                <span class="text-sm text-tm-txt-primary">Relationship Managers</span>
                <span class="text-sm font-600 text-purple-500">Tech-Enhanced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
      <div
        class="text-center py-12 bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-3xl mb-12"
      >
        <h3 class="text-2xl font-600 mb-4">Download Complete Wealth Management Report</h3>
        <p class="text-lg mb-6 max-w-600px mx-auto">
          Access comprehensive wealth management industry analysis with market forecasts, talent
          insights, and strategic recommendations for the evolving landscape.
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
            Request Wealth Management Consultation
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
    title: 'Wealth Management Industry Report 2024 - $500T Global Pool Analysis | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive Wealth Management Industry Report 2024. Analysis of $500T global wealth pool, HNWI growth trends, digital platform adoption, ESG investing, and talent implications.',
      },
      {
        name: 'keywords',
        content:
          'wealth management industry, global wealth pool, HNWI growth, digital platforms, ESG investing, alternative investments, robo-advisory, private banking, Asia-Pacific wealth',
      },
      {
        property: 'og:title',
        content: 'Wealth Management Industry Report 2024 - $500T Global Pool Analysis',
      },
      {
        property: 'og:description',
        content:
          'Deep analysis of global wealth management trends covering digital transformation, sustainable investing, alternative assets, and talent requirements for the evolving industry.',
      },
    ],
  })
</script>
