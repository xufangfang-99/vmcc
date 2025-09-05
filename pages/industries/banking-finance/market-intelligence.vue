<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[60vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80"
          alt="Banking & Finance Market Analysis"
          class="h-full w-full object-cover object-center"
        />
        <!-- Gradient Overlays -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <div class="relative z-10 mx-auto w-full max-w-[1400px] px-4 text-center md:px-8">
        <!-- Breadcrumb Navigation -->
        <div
          class="mx-auto mb-8 flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs backdrop-blur-md md:gap-3 md:px-6 md:py-3 sm:text-sm"
        >
          <NuxtLink
            to="/"
            class="font-medium text-white/80 transition-colors duration-300 hover:text-blue-400"
          >
            Home
          </NuxtLink>
          <span class="font-light text-white/50">/</span>
          <NuxtLink
            to="/industries"
            class="font-medium text-white/80 transition-colors duration-300 hover:text-blue-400"
          >
            Industries
          </NuxtLink>
          <span class="font-light text-white/50">/</span>
          <NuxtLink
            to="/industries/banking-finance"
            class="font-medium text-white/80 transition-colors duration-300 hover:text-blue-400"
          >
            Banking & Finance
          </NuxtLink>
          <span class="font-light text-white/50">/</span>
          <span class="font-semibold text-blue-400">Market Intelligence</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-8 md:px-0 md:text-6xl lg:text-7xl"
        >
          Global Banking & Finance Market Intelligence
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-white/90 drop-shadow-lg sm:text-lg md:mb-12 md:px-0 md:text-xl lg:text-2xl"
        >
          Deep market insights, compensation benchmarks, and talent trends shaping the future of
          global financial services and fintech innovation.
        </p>

        <!-- Key Metrics -->
        <div
          class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12 lg:gap-16"
        >
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">$180T</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Global Banking Assets</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">$7.5T</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Annual Revenue</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">65M+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Financial Professionals
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Market Overview Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full px-6 py-3 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
            </svg>
            Market Overview
          </div>
          <h2 class="mb-6 text-4xl lg:text-5xl font-light text-[var(--tm-txt-primary)]">
            Global Financial Services Market Dynamics
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed">
            Real-time insights into talent demand, compensation trends, and market movements across
            global financial centers, powered by VMMC's comprehensive industry intelligence and
            placement analytics.
          </p>
        </div>

        <!-- Market Indicators Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <!-- Talent Demand Index -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <div class="text-right">
                <div class="text-xs text-[var(--tm-txt-secondary)]">This Month</div>
                <div class="text-sm font-medium text-green-600">+15%</div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
              FinTech Talent Demand
            </h3>
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">165</div>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Exceptional demand across fintech, digital banking, and blockchain sectors driven by
              transformation initiatives.
            </p>
          </div>

          <!-- Average Salary Growth -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div class="text-right">
                <div class="text-xs text-[var(--tm-txt-secondary)]">YoY Growth</div>
                <div class="text-sm font-medium text-blue-600">+12.8%</div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
              Compensation Growth
            </h3>
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">12.8%</div>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Strong compensation increases reflecting digital skills premium and competitive talent
              market.
            </p>
          </div>

          <!-- RegTech Adoption -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div class="text-right">
                <div class="text-xs text-[var(--tm-txt-secondary)]">Adoption Rate</div>
                <div class="text-sm font-medium text-purple-600">+25%</div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
              RegTech Integration
            </h3>
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">68%</div>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Financial institutions implementing RegTech solutions, driving demand for compliance
              and technology professionals.
            </p>
          </div>

          <!-- Digital Banking Growth -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white"
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
                  ></rect>
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                  ></line>
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                  ></line>
                </svg>
              </div>
              <div class="text-right">
                <div class="text-xs text-[var(--tm-txt-secondary)]">Skills Premium</div>
                <div class="text-sm font-medium text-orange-600">35-50%</div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">Digital Premium</h3>
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">42%</div>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Average salary premium for digital banking, AI, and blockchain specialists in
              financial services.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Salary Benchmarks Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            2025 Global Financial Services Compensation Benchmarks
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Comprehensive compensation data across major financial centers, powered by real-time
            market intelligence and placement analytics from leading institutions.
          </p>
        </div>

        <!-- Salary Ranges by Role Category -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <!-- C-Suite & Executive Leadership -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="m2 17 10 5 10-5"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                  C-Suite & Executive
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Senior Leadership & Strategy</p>
              </div>
            </div>

            <div class="space-y-6">
              <!-- Chief Digital Officer -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">
                    Chief Digital Officer
                  </span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$250K - $450K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full"
                    style="width: 95%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                  Critical shortage - Premium positioning
                </div>
              </div>

              <!-- Chief Risk Officer -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">Chief Risk Officer</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$200K - $380K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full"
                    style="width: 85%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                  High regulatory demand
                </div>
              </div>

              <!-- Head of FinTech -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">Head of FinTech</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$180K - $320K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                    style="width: 80%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">Growing market demand</div>
              </div>
            </div>
          </div>

          <!-- Technology & Innovation -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white"
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
                  ></rect>
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                  ></line>
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                  ></line>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                  Technology & Innovation
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Digital & Blockchain Specialists
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <!-- Blockchain Developer -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">Blockchain Developer</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$90K - $180K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                    style="width: 92%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                  Extreme shortage - Top compensation
                </div>
              </div>

              <!-- Quantitative Analyst -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">Quantitative Analyst</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$85K - $160K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style="width: 88%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                  High algorithmic trading demand
                </div>
              </div>

              <!-- Data Scientist -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">Data Scientist</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$75K - $140K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full"
                    style="width: 75%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                  Strong AI/ML market demand
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Salary Trends Chart Section -->
        <div
          class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-12 border border-blue-200/50 dark:border-blue-800/30"
        >
          <div class="text-center mb-8">
            <h3 class="text-3xl font-light text-[var(--tm-txt-primary)] mb-4">
              5-Year Compensation Trend Analysis
            </h3>
            <p class="text-lg text-[var(--tm-txt-secondary)]">
              Average compensation growth across key financial services roles globally
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- FinTech & Digital -->
            <div class="text-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4"
              >
                <span class="text-2xl font-bold">+68%</span>
              </div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">FinTech & Digital</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
                Digital banking and cryptocurrency specialists leading compensation growth
              </p>
              <div class="flex justify-center">
                <div
                  class="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full"
                >
                  Blockchain Devs: +85%
                </div>
              </div>
            </div>

            <!-- Risk & Compliance -->
            <div class="text-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-4"
              >
                <span class="text-2xl font-bold">+45%</span>
              </div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Risk & Compliance</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
                Regulatory technology and compliance roles showing consistent premium growth
              </p>
              <div class="flex justify-center">
                <div
                  class="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full"
                >
                  Risk Analysts: +52%
                </div>
              </div>
            </div>

            <!-- Investment & Trading -->
            <div class="text-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4"
              >
                <span class="text-2xl font-bold">+38%</span>
              </div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Investment & Trading</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
                Algorithmic trading and quantitative analysis roles maintaining strong premiums
              </p>
              <div class="flex justify-center">
                <div
                  class="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full"
                >
                  Quant Analysts: +42%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Regional Market Analysis -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Global Financial Centers Analysis
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Market dynamics and opportunities across major financial hubs worldwide
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- New York -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-8 rounded-md overflow-hidden border border-gray-300 bg-blue-600 flex items-center justify-center text-white text-sm font-bold"
              >
                NY
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">New York</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Financial Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">850K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">FinTech Funding</span>
                <span class="font-semibold text-green-600">$12.8B in 2024</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Compensation Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+14.2%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">Capital Markets Tech</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <p class="text-sm text-blue-700 dark:text-blue-300">
                Leading global hub for investment banking and capital markets technology innovation.
              </p>
            </div>
          </div>

          <!-- London -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-8 rounded-md overflow-hidden border border-gray-300">
                <div class="h-1/3 bg-blue-600"></div>
                <div class="h-1/3 bg-white"></div>
                <div class="h-1/3 bg-red-600"></div>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">London</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Financial Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">750K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Global FX Trading</span>
                <span class="font-semibold text-green-600">43% Market Share</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Compensation Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+11.8%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">RegTech & ESG</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <p class="text-sm text-green-700 dark:text-green-300">
                Europe's financial capital driving innovation in sustainable finance and regulatory
                technology.
              </p>
            </div>
          </div>

          <!-- Singapore -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-8 rounded-md overflow-hidden border border-gray-300">
                <div class="h-1/2 bg-red-500"></div>
                <div class="h-1/2 bg-red-500"></div>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Singapore</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Financial Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">280K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Digital Banking Licenses</span>
                <span class="font-semibold text-green-600">5 New Licenses</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Compensation Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+13.5%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">Digital Banking</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <p class="text-sm text-purple-700 dark:text-purple-300">
                Asia-Pacific's digital banking hub with strong government support for fintech
                innovation.
              </p>
            </div>
          </div>

          <!-- Hong Kong -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-8 rounded-md overflow-hidden border border-gray-300 bg-red-600 flex items-center justify-center text-white text-sm font-bold"
              >
                HK
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Hong Kong</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Financial Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">420K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">IPO Market</span>
                <span class="font-semibold text-green-600">Global Top 3</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Compensation Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+10.3%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">Wealth Management</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <p class="text-sm text-orange-700 dark:text-orange-300">
                Gateway to China's markets with strong focus on wealth management and private
                banking.
              </p>
            </div>
          </div>

          <!-- Dubai -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-8 rounded-md overflow-hidden border border-gray-300">
                <div class="h-1/3 bg-green-500"></div>
                <div class="h-1/3 bg-white"></div>
                <div class="h-1/3 bg-red-500"></div>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Dubai</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Financial Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">180K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Islamic Finance Hub</span>
                <span class="font-semibold text-green-600">Global Leader</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Compensation Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+15.8%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">Islamic FinTech</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
              <p class="text-sm text-teal-700 dark:text-teal-300">
                Middle East's financial gateway specializing in Islamic finance and cross-border
                payments.
              </p>
            </div>
          </div>

          <!-- Frankfurt -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-8 rounded-md overflow-hidden border border-gray-300">
                <div class="h-1/3 bg-black"></div>
                <div class="h-1/3 bg-red-500"></div>
                <div class="h-1/3 bg-yellow-500"></div>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Frankfurt</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Financial Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">165K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">ECB Headquarters</span>
                <span class="font-semibold text-green-600">Eurozone Hub</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Compensation Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+9.2%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">Central Banking Tech</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <p class="text-sm text-red-700 dark:text-red-300">
                Continental Europe's banking center with focus on central banking technology and
                regulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Future Outlook Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Financial Services Outlook 2025-2027
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Strategic insights and forecasts for the evolving global financial services talent
            landscape
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Emerging Roles -->
          <div
            class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200/50 dark:border-green-800/30"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              High-Demand Emerging Roles
            </h3>
            <ul class="space-y-3 text-[var(--tm-txt-secondary)]">
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                DeFi Protocol Architects
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                Central Bank Digital Currency Specialists
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                ESG Data Scientists
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                AI Ethics Compliance Officers
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                Embedded Finance Developers
              </li>
            </ul>
            <div class="mt-6 p-4 bg-white/60 dark:bg-black/20 rounded-xl">
              <p class="text-sm text-green-700 dark:text-green-300 font-medium">
                Expected 200% growth in digital finance roles by 2027
              </p>
            </div>
          </div>

          <!-- Skills Evolution -->
          <div
            class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/30"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6"
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
                ></rect>
                <line
                  x1="8"
                  y1="21"
                  x2="16"
                  y2="21"
                ></line>
                <line
                  x1="12"
                  y1="17"
                  x2="12"
                  y2="21"
                ></line>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Critical Technology Skills
            </h3>
            <ul class="space-y-3 text-[var(--tm-txt-secondary)]">
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Smart Contract Development
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Machine Learning for Trading
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                RegTech Automation
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Open Banking APIs
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Quantum-Safe Cryptography
              </li>
            </ul>
            <div class="mt-6 p-4 bg-white/60 dark:bg-black/20 rounded-xl">
              <p class="text-sm text-blue-700 dark:text-blue-300 font-medium">
                Technology skills premium increasing 20-25% annually
              </p>
            </div>
          </div>

          <!-- Market Predictions -->
          <div
            class="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-800/30"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              2027 Market Predictions
            </h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-[var(--tm-txt-secondary)]">Compensation Growth</span>
                <span class="font-semibold text-purple-600">15-20%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[var(--tm-txt-secondary)]">New FinTech Roles</span>
                <span class="font-semibold text-purple-600">500K+</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[var(--tm-txt-secondary)]">Digital Skills Premium</span>
                <span class="font-semibold text-purple-600">50-75%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[var(--tm-txt-secondary)]">Remote Work Standard</span>
                <span class="font-semibold text-purple-600">60%</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-white/60 dark:bg-black/20 rounded-xl">
              <p class="text-sm text-purple-700 dark:text-purple-300 font-medium">
                Digital transformation investments creating unprecedented talent opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="py-20 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] text-white relative overflow-hidden"
    >
      <div
        class="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] animate-[rotate_30s_linear_infinite]"
      >
        <div
          class="h-full w-full"
          style="background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
        ></div>
      </div>

      <div class="container relative z-1 mx-auto max-w-[1000px] px-8 text-center">
        <h2 class="mb-6 text-4xl font-light">Need Custom Financial Services Intelligence?</h2>
        <p class="mb-8 text-xl leading-relaxed opacity-95">
          Access VMMC's proprietary financial services market research and compensation
          benchmarking. Get the strategic insights you need for talent decisions in banking,
          fintech, and capital markets.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:research@vmmc.com"
            class="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-[var(--tm-accent-primary)] shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]"
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
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              ></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Request Custom Research
          </a>
          <a
            href="tel:+971558296351"
            class="inline-flex items-center gap-3 rounded-full border-2 border-white/60 bg-transparent px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
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
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            Discuss Market Insights
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
  import FooterSection from '~/components/Home/FooterSection.vue'

  // SEO设置
  useHead({
    title: 'Market Intelligence - Global Banking & Finance Talent Insights | VMMC',
    meta: [
      {
        name: 'description',
        content:
          "Comprehensive global financial services market intelligence including compensation benchmarks, fintech talent trends, and regional insights. Powered by VMMC's extensive banking and finance industry expertise.",
      },
      {
        name: 'keywords',
        content:
          'financial services market intelligence, banking salary benchmarks, fintech talent trends, digital banking compensation, blockchain developer salaries, quantitative analyst pay, global financial centers',
      },
    ],
  })

  definePageMeta({
    layout: 'default',
  })
</script>

<style>
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Progress bar animations */
  @keyframes fillProgress {
    from {
      width: 0;
    }
    to {
      width: var(--progress-width);
    }
  }

  .hover\:shadow-\[var\(--tm-shadow-hover\)\]:hover .w-full.bg-gray-200 > div {
    animation: fillProgress 0.8s ease-out;
  }

  /* Dark mode adjustments */
  .dark .bg-gradient-to-br {
    background: linear-gradient(135deg, var(--tm-bg-card) 0%, var(--tm-bg-secondary) 100%);
  }

  .dark .bg-white {
    background: var(--tm-bg-card);
  }

  .dark .border-\[var\(--tm-bd-card\)\] {
    border-color: var(--tm-bd-secondary);
  }

  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2.5rem;
    }

    .text-6xl {
      font-size: 3.5rem;
    }

    .text-7xl {
      font-size: 4rem;
    }

    .grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .p-8.md\:p-10 {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-4 {
      grid-template-columns: 1fr;
    }

    .text-3xl.md\:text-4xl {
      font-size: 1.875rem;
    }
  }

  /* Financial theme enhancements */
  .bg-gradient-to-br:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }

  /* Country flag styling improvements */
  .w-12.h-8 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Enhanced progress bars for financial data */
  .w-full.bg-gray-200 {
    position: relative;
    overflow: hidden;
  }

  .w-full.bg-gray-200::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
    width: 30%;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(300%);
    }
  }
</style>
