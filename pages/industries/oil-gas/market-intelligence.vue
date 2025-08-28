<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[60vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80"
          alt="Oil & Gas Market Analysis"
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
            to="/industries/oil-gas"
            class="font-medium text-white/80 transition-colors duration-300 hover:text-blue-400"
          >
            Oil & Gas
          </NuxtLink>
          <span class="font-light text-white/50">/</span>
          <span class="font-semibold text-blue-400">Market Intelligence</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-8 md:px-0 md:text-6xl lg:text-7xl"
        >
          GCC Energy Market Intelligence
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-white/90 drop-shadow-lg sm:text-lg md:mb-12 md:px-0 md:text-xl lg:text-2xl"
        >
          Comprehensive market insights, salary benchmarks, and talent trends driving strategic
          decisions in the GCC energy sector.
        </p>

        <!-- Key Metrics -->
        <div
          class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12 lg:gap-16"
        >
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">$2.1T</div>
            <div class="text-sm uppercase tracking-wider text-white/80">GCC Energy Market</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">40%</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Global Oil Reserves</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">2M+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Energy Workforce</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Market Overview Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-full px-6 py-3 text-sm font-medium text-orange-700 dark:text-orange-300 mb-6"
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
            GCC Energy Market Dynamics
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed">
            Real-time insights into talent demand, salary trends, and market movements across all
            six GCC countries, powered by VMMC's 15+ years of industry data.
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
                <div class="text-sm font-medium text-green-600">+12%</div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
              Talent Demand Index
            </h3>
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">145</div>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Strong demand across all energy sectors, driven by mega-projects and digital
              transformation.
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
                <div class="text-sm font-medium text-blue-600">+8.5%</div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
              Salary Growth Rate
            </h3>
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">8.5%</div>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Above-average salary increases reflecting talent scarcity and competitive market
              conditions.
            </p>
          </div>

          <!-- Emiratisation Progress -->
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                  ></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div class="text-right">
                <div class="text-xs text-[var(--tm-txt-secondary)]">Target Progress</div>
                <div class="text-sm font-medium text-purple-600">78%</div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
              Emiratisation Rate
            </h3>
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">32%</div>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Current UAE nationals representation in energy sector, with accelerating growth in
              technical roles.
            </p>
          </div>

          <!-- Skills Premium Index -->
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
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
              </div>
              <div class="text-right">
                <div class="text-xs text-[var(--tm-txt-secondary)]">Premium Range</div>
                <div class="text-sm font-medium text-orange-600">25-40%</div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">Skills Premium</h3>
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">35%</div>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Average salary premium for specialized roles in digital transformation and energy
              transition.
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
            2025 GCC Energy Salary Benchmarks
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Comprehensive salary data based on 15+ years of placement data and ongoing market
            research across all GCC countries.
          </p>
        </div>

        <!-- Salary Ranges by Role Category -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <!-- Executive Leadership -->
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
                  Executive Leadership
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">C-Suite & Senior Management</p>
              </div>
            </div>

            <div class="space-y-6">
              <!-- CEO/Managing Director -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">
                    CEO/Managing Director
                  </span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$180K - $350K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full"
                    style="width: 85%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                  High demand - Limited supply
                </div>
              </div>

              <!-- Operations Director -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">Operations Director</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$120K - $220K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full"
                    style="width: 75%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">Strong market demand</div>
              </div>

              <!-- VP Engineering -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">VP Engineering</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$100K - $180K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                    style="width: 70%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">Growing opportunities</div>
              </div>
            </div>
          </div>

          <!-- Technical Specialists -->
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
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  ></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m15 9-3 3-3-3"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                  Technical Specialists
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Engineers & Geoscientists</p>
              </div>
            </div>

            <div class="space-y-6">
              <!-- Petroleum Engineer -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">Petroleum Engineer</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$65K - $120K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                    style="width: 90%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                  Critical shortage - Premium pay
                </div>
              </div>

              <!-- Reservoir Engineer -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">Reservoir Engineer</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$70K - $130K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style="width: 85%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">High technical demand</div>
              </div>

              <!-- Process Engineer -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-[var(--tm-txt-primary)]">Process Engineer</span>
                  <span class="text-[var(--tm-accent-primary)] font-semibold">$55K - $100K</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full"
                    style="width: 65%"
                  ></div>
                </div>
                <div class="text-xs text-[var(--tm-txt-secondary)] mt-1">Steady market demand</div>
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
              5-Year Salary Trend Analysis
            </h3>
            <p class="text-lg text-[var(--tm-txt-secondary)]">
              Average salary growth across key energy roles in the GCC region
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Upstream Roles -->
            <div class="text-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4"
              >
                <span class="text-2xl font-bold">+42%</span>
              </div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Upstream Roles</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
                Exploration & Production specialists leading salary growth
              </p>
              <div class="flex justify-center">
                <div
                  class="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full"
                >
                  Drilling Engineers: +48%
                </div>
              </div>
            </div>

            <!-- Midstream/Downstream -->
            <div class="text-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-4"
              >
                <span class="text-2xl font-bold">+35%</span>
              </div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                Midstream & Downstream
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
                Refining and processing roles showing consistent growth
              </p>
              <div class="flex justify-center">
                <div
                  class="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full"
                >
                  Process Engineers: +38%
                </div>
              </div>
            </div>

            <!-- Digital & Innovation -->
            <div class="text-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4"
              >
                <span class="text-2xl font-bold">+65%</span>
              </div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Digital & Innovation</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
                Technology roles commanding highest premiums
              </p>
              <div class="flex justify-center">
                <div
                  class="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full"
                >
                  Data Scientists: +72%
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
            Regional Market Insights
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Country-specific market dynamics and opportunities across the GCC energy landscape
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- UAE -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-8 rounded-md overflow-hidden border border-gray-300">
                <div class="h-1/3 bg-green-500"></div>
                <div class="h-1/3 bg-white"></div>
                <div class="h-1/3 bg-red-500"></div>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">UAE</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Energy Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">350K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Emiratisation Target</span>
                <span class="font-semibold text-green-600">50% by 2026</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Salary Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+9.2%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">Energy Transition</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <p class="text-sm text-green-700 dark:text-green-300">
                Leading in renewable energy investments with major hydrogen and solar projects
                driving talent demand.
              </p>
            </div>
          </div>

          <!-- Saudi Arabia -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-8 rounded-md overflow-hidden border border-gray-300 bg-green-600 flex items-center justify-center text-white text-sm font-bold"
              >
                SA
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Saudi Arabia</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Energy Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">450K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Vision 2030 Jobs</span>
                <span class="font-semibold text-green-600">200K+ New</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Salary Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+11.5%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">NEOM & Giga-projects</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <p class="text-sm text-blue-700 dark:text-blue-300">
                Massive infrastructure projects creating unprecedented demand for specialized talent
                across all energy sectors.
              </p>
            </div>
          </div>

          <!-- Qatar -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-8 rounded-md overflow-hidden border border-gray-300 bg-red-900 flex items-center justify-center text-white text-sm font-bold"
              >
                QA
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Qatar</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Energy Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">120K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">LNG Leadership</span>
                <span class="font-semibold text-green-600">#1 Global Exporter</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Salary Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+8.8%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">LNG Expansion</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <p class="text-sm text-purple-700 dark:text-purple-300">
                North Field expansion project driving demand for LNG specialists and process
                engineers.
              </p>
            </div>
          </div>

          <!-- Kuwait -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-8 rounded-md overflow-hidden border border-gray-300">
                <div class="h-1/3 bg-green-500"></div>
                <div class="h-1/3 bg-white"></div>
                <div class="h-1/3 bg-red-500"></div>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Kuwait</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Energy Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">180K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Refining Capacity</span>
                <span class="font-semibold text-green-600">1.5M bpd</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Salary Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+7.3%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">
                  Downstream Excellence
                </span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <p class="text-sm text-orange-700 dark:text-orange-300">
                Major refinery upgrades and petrochemical expansions driving technical talent
                demand.
              </p>
            </div>
          </div>

          <!-- Oman -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-8 rounded-md overflow-hidden border border-gray-300">
                <div class="h-1/3 bg-red-500"></div>
                <div class="h-1/3 bg-white"></div>
                <div class="h-1/3 bg-green-500"></div>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Oman</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Energy Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">95K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Vision 2040</span>
                <span class="font-semibold text-green-600">Economic Diversification</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Salary Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+6.5%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">Green Hydrogen</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
              <p class="text-sm text-teal-700 dark:text-teal-300">
                Emerging as regional leader in green hydrogen with major investment in renewable
                energy infrastructure.
              </p>
            </div>
          </div>

          <!-- Bahrain -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-8 rounded-md overflow-hidden border border-gray-300">
                <div class="h-1/2 bg-red-500"></div>
                <div class="h-1/2 bg-red-500"></div>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Bahrain</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Energy Workforce</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">65K+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Refining Hub</span>
                <span class="font-semibold text-green-600">Regional Center</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Avg. Salary Growth</span>
                <span class="font-semibold text-[var(--tm-accent-primary)]">+5.8%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--tm-txt-secondary)]">Key Focus</span>
                <span class="font-semibold text-[var(--tm-txt-primary)]">Energy Efficiency</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <p class="text-sm text-red-700 dark:text-red-300">
                Focus on energy efficiency and smart grid technologies creating new technical roles.
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
            Market Outlook 2025-2027
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Strategic insights and forecasts for the evolving GCC energy talent landscape
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Emerging Roles in High Demand
            </h3>
            <ul class="space-y-3 text-[var(--tm-txt-secondary)]">
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                Carbon Capture Engineers
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                Hydrogen Technology Specialists
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                Energy Storage Engineers
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                Sustainability Managers
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                Digital Twin Specialists
              </li>
            </ul>
            <div class="mt-6 p-4 bg-white/60 dark:bg-black/20 rounded-xl">
              <p class="text-sm text-green-700 dark:text-green-300 font-medium">
                Expected 150% growth in energy transition roles by 2027
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
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="m2 17 10 5 10-5"></path>
                <path d="m2 12 10 5 10-5"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Critical Skills Evolution
            </h3>
            <ul class="space-y-3 text-[var(--tm-txt-secondary)]">
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                AI/ML for Energy Operations
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                IoT & Sensor Technologies
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Cybersecurity for OT
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Data Analytics & Visualization
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                Cloud Infrastructure
              </li>
            </ul>
            <div class="mt-6 p-4 bg-white/60 dark:bg-black/20 rounded-xl">
              <p class="text-sm text-blue-700 dark:text-blue-300 font-medium">
                Digital skills premium increasing 15-20% annually
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
                <span class="text-[var(--tm-txt-secondary)]">Salary Growth Rate</span>
                <span class="font-semibold text-purple-600">12-15%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[var(--tm-txt-secondary)]">New Roles Created</span>
                <span class="font-semibold text-purple-600">200K+</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[var(--tm-txt-secondary)]">Skills Premium</span>
                <span class="font-semibold text-purple-600">45-60%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[var(--tm-txt-secondary)]">Remote Work Adoption</span>
                <span class="font-semibold text-purple-600">35%</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-white/60 dark:bg-black/20 rounded-xl">
              <p class="text-sm text-purple-700 dark:text-purple-300 font-medium">
                Energy transition investments driving unprecedented talent demand
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
        <h2 class="mb-6 text-4xl font-light">Need Custom Market Intelligence?</h2>
        <p class="mb-8 text-xl leading-relaxed opacity-95">
          Access VMMC's proprietary market research and salary benchmarking services. Get the
          insights you need to make strategic talent decisions.
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
    title: 'Market Intelligence - GCC Oil & Gas Talent Insights | VMMC',
    meta: [
      {
        name: 'description',
        content:
          "Comprehensive GCC energy market intelligence including salary benchmarks, talent demand trends, and regional insights. Based on VMMC's 15+ years of industry data and placement analytics.",
      },
      {
        name: 'keywords',
        content:
          'GCC energy market intelligence, oil gas salary benchmarks, emiratisation trends, talent demand analysis, energy sector insights, petroleum engineer salaries, Middle East energy jobs',
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

  /* Custom flag colors for countries */
  .bg-maroon-700 {
    background-color: #7c2d12;
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
</style>
