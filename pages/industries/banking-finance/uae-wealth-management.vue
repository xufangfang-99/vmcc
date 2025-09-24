<template>
  <div class="min-h-screen bg-tm-bg-primary dark:bg-tm-bg-secondary">
    <!-- Report Header -->
    <section class="py-16 bg-gradient-to-br from-tm-pri-0 to-tm-pri-1 text-white">
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
          <span class="text-white">UAE Wealth Management Report</span>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <span class="w-2 h-2 bg-white rounded-full"></span>
            <span class="text-sm font-500 uppercase tracking-wider">2024 Edition</span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-300 mb-6 leading-tight">
            UAE Banking Wealth Management
            <span class="block font-600">Business Report & Yearbook</span>
          </h1>

          <p class="text-xl text-white/90 max-w-800px mx-auto mb-8 leading-relaxed">
            Comprehensive analysis of the AED 895 billion UAE wealth management market, covering
            industry scale, market structure, regulatory dynamics, and competitive landscape
          </p>

          <!-- Key Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-600px mx-auto">
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">AED 895B</div>
              <div class="text-xs text-white/80">Market Size</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">9.2%</div>
              <div class="text-xs text-white/80">YoY Growth</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">1.8M+</div>
              <div class="text-xs text-white/80">Investors</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">42</div>
              <div class="text-xs text-white/80">Institutions</div>
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
            href="#industry-scale"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              I
            </div>
            <span class="text-tm-txt-primary font-500">Industry Scale & Market Structure</span>
          </a>
          <a
            href="#regulatory-dynamics"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              II
            </div>
            <span class="text-tm-txt-primary font-500">Regulatory Dynamics & Policy</span>
          </a>
          <a
            href="#competition"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              III
            </div>
            <span class="text-tm-txt-primary font-500">Local vs Foreign Competition</span>
          </a>
          <a
            href="#product-innovation"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              IV
            </div>
            <span class="text-tm-txt-primary font-500">Product Innovation & Trends</span>
          </a>
          <a
            href="#risks-challenges"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              V
            </div>
            <span class="text-tm-txt-primary font-500">Risks & Challenges</span>
          </a>
          <a
            href="#future-outlook"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
      <!-- Section I: Industry Scale and Market Structure -->
      <section
        id="industry-scale"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-tm-pri-0 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            I
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Industry Scale and Market Structure</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            In 2024, the UAE banking wealth management market maintained steady growth driven by
            regional economic recovery and financial liberalization policies. By the end of the
            year, the outstanding scale reached
            <strong class="text-tm-pri-0">AED 895 billion (approximately USD 24.4 billion)</strong>
            , up 9.2% from the start of the year.
          </p>
        </div>

        <!-- Market Share Breakdown -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Market Share Distribution</h3>
            <div class="space-y-4">
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">Local Bank Subsidiaries</span>
                <span class="text-xl font-700 text-tm-pri-0">78.5%</span>
              </div>
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">Foreign Bank Branches</span>
                <span class="text-xl font-700 text-tm-pri-0">21.5%</span>
              </div>
            </div>
            <p class="text-sm text-tm-txt-secondary mt-4">
              Market concentration continues to favor local institutions with deeper regional
              networks and customer relationships.
            </p>
          </div>

          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Key Market Metrics</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl">
                <div class="text-2xl font-700 text-tm-pri-0 mb-1">42</div>
                <div class="text-xs text-tm-txt-light">Banks</div>
              </div>
              <div class="text-center p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl">
                <div class="text-2xl font-700 text-tm-pri-0 mb-1">11</div>
                <div class="text-xs text-tm-txt-light">Licensed WM Companies</div>
              </div>
              <div class="text-center p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl">
                <div class="text-2xl font-700 text-tm-pri-0 mb-1">1,280</div>
                <div class="text-xs text-tm-txt-light">New Products</div>
              </div>
              <div class="text-center p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl">
                <div class="text-2xl font-700 text-tm-pri-0 mb-1">AED 2.1T</div>
                <div class="text-xs text-tm-txt-light">Funds Raised</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Structure -->
        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary dark:from-tm-bg-primary dark:to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card"
        >
          <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Product Structure Analysis</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
              >
                🏭
              </div>
              <div class="text-3xl font-700 text-indigo-500 mb-2">42%</div>
              <div class="text-sm font-500 text-tm-txt-primary mb-2">Structured Products</div>
              <div class="text-xs text-tm-txt-secondary">
                Linked to core local industries (oil, infrastructure)
              </div>
            </div>
            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
              >
                📈
              </div>
              <div class="text-3xl font-700 text-green-500 mb-2">38%</div>
              <div class="text-sm font-500 text-tm-txt-primary mb-2">Fixed-Income Products</div>
              <div class="text-xs text-tm-txt-secondary">
                Government bonds and corporate debt instruments
              </div>
            </div>
            <div
              class="text-center p-6 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border border-tm-bd-card"
            >
              <div
                class="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
              >
                🌍
              </div>
              <div class="text-3xl font-700 text-blue-500 mb-2">20%</div>
              <div class="text-sm font-500 text-tm-txt-primary mb-2">Multi-Asset Products</div>
              <div class="text-xs text-tm-txt-secondary">
                Cross-border allocation for global diversification
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section II: Regulatory Dynamics -->
      <section
        id="regulatory-dynamics"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-tm-pri-0 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            II
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">
            Regulatory Dynamics and Policy Orientation
          </h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            <strong>
              The Central Bank of the UAE (CBUAE) and Dubai Financial Services Authority (DFSA)
            </strong>
            continued to refine regulatory frameworks across three key areas:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <!-- Compliance & Transparency -->
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Compliance & Transparency</h3>
            </div>
            <ul class="space-y-3 text-sm text-tm-txt-secondary">
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <span>
                  Mandated monthly disclosure of underlying assets for all net-value products
                </span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <span>Capped derivative exposure at 30% for structured products</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <span>Enhanced risk mitigation for complex instruments</span>
              </li>
            </ul>
          </div>

          <!-- Cross-border Capital Flows -->
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
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <path d="m4.9 4.9 14.2 14.2" />
                </svg>
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Cross-border Capital</h3>
            </div>
            <div class="space-y-4">
              <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-lg font-700 text-blue-500 mb-1">40%</div>
                <div class="text-sm text-tm-txt-primary">Overseas Investment Limit</div>
                <div class="text-xs text-tm-txt-light">For qualified wealth managers</div>
              </div>
              <p class="text-sm text-tm-txt-secondary">
                Expanded access to emerging market bonds and developed market equities promoting
                internationalization.
              </p>
            </div>
          </div>

          <!-- Sustainable Finance -->
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
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M12 15v6" />
                </svg>
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Green Finance Certification</h3>
            </div>
            <div class="space-y-4">
              <div class="p-3 bg-green-500/5 rounded-lg border-l-4 border-green-500">
                <div class="text-lg font-700 text-green-500 mb-1">70%</div>
                <div class="text-sm text-tm-txt-primary">Minimum Asset Allocation</div>
                <div class="text-xs text-tm-txt-light">UAE Net Zero 2050 Strategy alignment</div>
              </div>
              <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-base font-600 text-green-500">AED 120B (+45% YoY)</div>
                <div class="text-xs text-tm-txt-light">Green wealth management scale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section III: Competition Analysis -->
      <section
        id="competition"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-tm-pri-0 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            III
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">
            Competition Between Local and Foreign Institutions
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Local Banks -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl"
              >
                🏦
              </div>
              <h3 class="text-xl font-600 text-tm-txt-primary">
                Local Banks Dominate with Regional Integration
              </h3>
            </div>

            <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
              Leading institutions like National Bank of Abu Dhabi (NBAD) and Dubai Islamic Bank
              (DIB) leverage local network advantages to launch customized products linked to
              Emirati sovereign fund projects and free zone infrastructure.
            </p>

            <!-- Success Cases -->
            <div class="space-y-4">
              <div
                class="p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border-l-4 border-emerald-500"
              >
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">
                  NBAD "Abu Dhabi Vision 2030 Special Wealth Plan"
                </h4>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-tm-txt-secondary">Annual Returns</span>
                  <span class="text-sm font-600 text-emerald-500">4.2% - 5.5%</span>
                </div>
                <p class="text-xs text-tm-txt-light">
                  Focuses on local healthcare and education infrastructure investments
                </p>
              </div>

              <div class="p-4 bg-emerald-500/5 rounded-xl">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-3">
                  Islamic Wealth Management Performance
                </h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center">
                    <div class="text-lg font-700 text-emerald-500">AED 320B</div>
                    <div class="text-xs text-tm-txt-light">Sharia-compliant products</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-700 text-emerald-500">35.8%</div>
                    <div class="text-xs text-tm-txt-light">Market share</div>
                  </div>
                </div>
                <div class="mt-3 p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-sm font-500 text-tm-txt-primary">
                    DIB "Profit-Sharing Real Estate Fund"
                  </div>
                  <div class="text-sm text-emerald-500 font-600">5.8% annual dividend rate</div>
                  <div class="text-xs text-tm-txt-light">Dubai free zone commercial properties</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Foreign Banks -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl"
              >
                🌍
              </div>
              <h3 class="text-xl font-600 text-tm-txt-primary">
                Foreign Institutions: Cross-border & Digital Focus
              </h3>
            </div>

            <p class="text-base text-tm-txt-secondary leading-relaxed mb-6">
              HSBC, Standard Chartered, and other foreign branches target high-net-worth clients
              with "global allocation + local service" bundles, emphasizing digital channel
              innovation.
            </p>

            <!-- Digital Innovation -->
            <div class="space-y-4">
              <div
                class="p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl border-l-4 border-blue-500"
              >
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">
                  HSBC "Middle East-Asia Dual Core Plan"
                </h4>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-tm-txt-secondary">2024 Yield</span>
                  <span class="text-sm font-600 text-blue-500">6.3%</span>
                </div>
                <p class="text-xs text-tm-txt-light">
                  50% UAE blue chips + 50% Chinese new economy sectors
                </p>
              </div>

              <div class="p-4 bg-blue-500/5 rounded-xl">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-3">
                  Digital Channel Leadership
                </h4>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-tm-txt-secondary">Full Online Onboarding</span>
                    <span class="text-sm font-600 text-blue-500">85% of institutions</span>
                  </div>
                  <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                    <div class="text-sm font-500 text-tm-txt-primary">
                      Standard Chartered "Smart Wealth Manager"
                    </div>
                    <div class="text-sm text-blue-500 font-600">50,000 users in 6 months</div>
                    <div class="text-xs text-tm-txt-light">AI-powered portfolio optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section IV: Product Innovation -->
      <section
        id="product-innovation"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-tm-pri-0 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            IV
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">
            Product Innovation and Customer Demand Trends
          </h2>
        </div>

        <!-- Thematic Products -->
        <div class="mb-10">
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">
            Key Thematic Product Directions
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div
                class="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-4"
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
              <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Energy Transition</h4>
              <div class="space-y-3">
                <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-sm font-500 text-tm-txt-primary">
                    ADCB "Hydrogen Industry Chain Plan"
                  </div>
                  <div class="text-sm font-600 text-yellow-600">6.8% expected annual return</div>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  UAE hydrogen project equity and equipment supplier bonds
                </p>
              </div>
            </div>

            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div
                class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4"
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
              <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Cross-border Linkages</h4>
              <div class="space-y-3">
                <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-sm font-500 text-tm-txt-primary">
                    DIB "India-UAE Trade Bridge"
                  </div>
                  <div class="text-sm font-600 text-blue-500">Regional economic synergies</div>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  Dubai-Mumbai freight indices and Indian export bills
                </p>
              </div>
            </div>

            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div
                class="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-4 text-xl"
              >
                🕌
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Islamic Finance Innovation</h4>
              <div class="space-y-3">
                <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-sm font-500 text-tm-txt-primary">
                    RAKBank "Sukuk + Ijarah Hybrid"
                  </div>
                  <div class="text-sm font-600 text-emerald-500">Stable cash flow delivery</div>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  Islamic bonds and commercial property leases
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Customer Segments -->
        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary dark:from-tm-bg-primary dark:to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card"
        >
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">Divergent Customer Segments</h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="space-y-4">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-lg flex items-center justify-center"
                >
                  <svg
                    width="16"
                    height="16"
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
                <h4 class="text-lg font-600 text-tm-txt-primary">Retail Clients</h4>
              </div>
              <div class="p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-tm-txt-primary">Open-ended Schemes</span>
                  <span class="text-lg font-700 text-purple-500">62%</span>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-tm-txt-primary">Average Holding Period</span>
                  <span class="text-sm font-600 text-purple-500">3-6 months</span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  Prefer low-risk liquid products with flexible redemption
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 bg-indigo-500/10 text-indigo-500 rounded-lg flex items-center justify-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h4 class="text-lg font-600 text-tm-txt-primary">Institutional Clients</h4>
              </div>
              <div class="p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-tm-txt-primary">10-year+ Products Growth</span>
                  <span class="text-lg font-700 text-indigo-500">+28% YoY</span>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-tm-txt-primary">Primary Focus</span>
                  <span class="text-sm font-600 text-indigo-500">Long-term Infrastructure</span>
                </div>
                <p class="text-xs text-tm-txt-secondary">
                  Pension funds and family offices favor closed-ended products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
      <div
        class="text-center py-12 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 text-white rounded-3xl mb-12"
      >
        <h3 class="text-2xl font-600 mb-4">Download Complete Report</h3>
        <p class="text-lg mb-6 max-w-600px mx-auto">
          Get the full UAE Banking Wealth Management Report with detailed analysis, charts, and
          strategic recommendations.
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
            Request Custom Analysis
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
    title: 'UAE Banking Wealth Management Report 2024 - AED 895B Market Analysis | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive UAE Banking Wealth Management Report 2024. Analysis of AED 895B market, 9.2% growth, regulatory dynamics, and competitive landscape between local and foreign institutions.',
      },
      {
        name: 'keywords',
        content:
          'UAE wealth management, banking report 2024, AED 895 billion, CBUAE regulation, Dubai Islamic Bank, NBAD, foreign banks, Islamic finance, green wealth management',
      },
      {
        property: 'og:title',
        content: 'UAE Banking Wealth Management Report 2024 - AED 895B Market Analysis',
      },
      {
        property: 'og:description',
        content:
          'In-depth analysis of the UAE banking wealth management market covering industry scale, regulatory dynamics, and competition between local and foreign institutions.',
      },
    ],
  })
</script>
