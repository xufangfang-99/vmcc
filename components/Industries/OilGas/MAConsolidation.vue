<template>
  <section
    class="ma-consolidation py-20 md:py-32 bg-[var(--tm-bg-secondary)] relative overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 left-20 w-96 h-96 rounded-full blur-3xl"
        style="background: linear-gradient(135deg, #8b5cf6, #a855f7)"
      ></div>
      <div
        class="absolute bottom-10 right-20 w-80 h-80 rounded-full blur-3xl"
        style="background: linear-gradient(135deg, #06b6d4, #0891b2)"
      ></div>
    </div>

    <div class="container mx-auto max-w-[1400px] px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 text-white shadow-lg"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <span
            class="text-sm font-medium text-[var(--tm-accent-primary)] uppercase tracking-wider"
          >
            Report 3
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl font-light mb-6 text-[var(--tm-txt-primary)]">
          Consolidation & M&A
          <span class="block text-purple-600 font-medium">in Oil & Gas Industry</span>
        </h2>

        <p
          class="text-lg md:text-xl leading-relaxed text-[var(--tm-txt-secondary)] max-w-4xl mx-auto"
        >
          Analyzing the unprecedented surge in mergers and acquisitions that reshaped the oil and
          gas industry landscape in 2024, with strategic focus on future drilling potential and
          operational efficiency.
        </p>
      </div>

      <!-- Key Statistics Overview -->
      <div
        class="bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden mb-16"
      >
        <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.8,-0.2C89.6,15.9,86.6,31.8,78.9,45.2C71.2,58.6,58.8,69.5,44.7,76.4C30.6,83.3,15.3,86.2,0.1,86.1C-15.1,86,-30.2,83,-44.6,76.1C-59,69.2,-72.7,58.4,-80.5,45.1C-88.3,31.8,-90.2,15.9,-90.1,-0.1C-90,-16.1,-87.9,-32.2,-80.1,-45.6C-72.3,-59,-58.8,-69.7,-44.6,-76.6C-30.4,-83.5,-15.2,-86.6,-0.1,-86.5C15,-86.4,30,-83.1,44.7,-76.4Z"
            />
          </svg>
        </div>

        <div class="relative z-10">
          <h3 class="text-3xl font-bold mb-6">2024 M&A Activity Surge</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-5xl font-bold mb-2 text-yellow-300">$206.6B</div>
              <div class="text-lg opacity-90">Total M&A Value</div>
              <div class="text-sm opacity-75 mt-1">331% increase from 2023</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2 text-cyan-300">5</div>
              <div class="text-lg opacity-90">Mega Deals</div>
              <div class="text-sm opacity-75 mt-1">Each over $10 billion</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2 text-pink-300">42%</div>
              <div class="text-lg opacity-90">Unproved Properties</div>
              <div class="text-sm opacity-75 mt-1">Up from 18% in 2023</div>
            </div>
          </div>
        </div>
      </div>

      <!-- M&A Activity Trends -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Increased Activity Card -->
        <div
          class="group bg-[var(--tm-bg-primary)] rounded-2xl p-8 border border-[var(--tm-bd-card)] hover:border-purple-500 hover:shadow-[0_20px_60px_rgba(147,51,234,0.15)] transition-all duration-500 hover:-translate-y-2"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
              Unprecedented Growth
            </h3>
          </div>

          <div class="space-y-4 mb-6">
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">2024 M&A Value</span>
              <span class="text-2xl font-bold text-purple-600">$206.6B</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Growth Rate</span>
              <span class="text-2xl font-bold text-green-500">+331%</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Mega Deals</span>
              <span class="text-2xl font-bold text-blue-500">5 deals</span>
            </div>
          </div>

          <div class="pt-6 border-t border-[var(--tm-bd-card)]">
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Key Drivers</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Strategic focus on securing long-term production assets</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Capital reallocation from shareholder returns to M&A</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Market consolidation creating stronger competitive positions</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Future Drilling Focus Card -->
        <div
          class="group bg-[var(--tm-bg-primary)] rounded-2xl p-8 border border-[var(--tm-bd-card)] hover:border-cyan-500 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
              Strategic Asset Focus
            </h3>
          </div>

          <div class="space-y-4 mb-6">
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Unproved Properties 2024</span>
              <span class="text-2xl font-bold text-cyan-600">42%</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Previous Year (2023)</span>
              <span class="text-2xl font-bold text-orange-500">18%</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Strategic Shift</span>
              <span class="text-2xl font-bold text-green-500">+133%</span>
            </div>
          </div>

          <div class="pt-6 border-t border-[var(--tm-bd-card)]">
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Strategic Implications</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Companies prioritizing future drilling potential over current production
                </span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Long-term production security becoming key acquisition criteria</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Strategic positioning for future market conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Consolidation Drivers -->
      <div class="mb-16">
        <h3 class="text-3xl font-light text-center mb-12 text-[var(--tm-txt-primary)]">
          Key Drivers of
          <span class="text-purple-600 font-medium">Industry Consolidation</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Economies of Scale -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div class="mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white mb-4"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Economies of Scale
              </h4>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Larger companies achieve cost reduction across exploration, production, procurement,
              and marketing operations.
            </p>

            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span>Reduced exploration and production costs</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span>Enhanced procurement efficiency</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span>Improved competitive positioning</span>
              </li>
            </ul>
          </div>

          <!-- Resource Access -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div class="mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Access to Resources
              </h4>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Acquisitions provide access to new oil and gas reserves, valuable infrastructure, and
              advanced technologies.
            </p>

            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>New reserve acquisitions</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Advanced drilling technology access</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Critical infrastructure integration</span>
              </li>
            </ul>
          </div>

          <!-- Risk Diversification -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div class="mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Risk Diversification
              </h4>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Consolidation helps companies diversify risks by combining different assets and
              operations across markets.
            </p>

            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span>Reduced oil price volatility exposure</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span>Geographic diversification</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span>Regulatory risk mitigation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Industry Impact -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Positive Impacts -->
        <div class="bg-[var(--tm-bg-primary)] rounded-xl p-8 border border-[var(--tm-bd-card)]">
          <h4
            class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6 flex items-center gap-3"
          >
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            Positive Industry Impact
          </h4>

          <div class="space-y-4">
            <div
              class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
            >
              <h5 class="font-medium text-green-800 dark:text-green-400 mb-2">
                Market Concentration
              </h5>
              <p class="text-sm text-green-700 dark:text-green-300">
                Top 40 US E&P companies now account for 41% of total US oil and gas production,
                creating stronger market players.
              </p>
            </div>

            <div
              class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
            >
              <h5 class="font-medium text-green-800 dark:text-green-400 mb-2">
                Operational Efficiency
              </h5>
              <p class="text-sm text-green-700 dark:text-green-300">
                Streamlined operations, eliminated duplicate functions, and improved overall
                productivity through consolidation.
              </p>
            </div>

            <div
              class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
            >
              <h5 class="font-medium text-green-800 dark:text-green-400 mb-2">
                Resource Optimization
              </h5>
              <p class="text-sm text-green-700 dark:text-green-300">
                Better resource utilization and higher productivity through combined expertise and
                capabilities.
              </p>
            </div>
          </div>
        </div>

        <!-- Challenges -->
        <div class="bg-[var(--tm-bg-primary)] rounded-xl p-8 border border-[var(--tm-bd-card)]">
          <h4
            class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6 flex items-center gap-3"
          >
            <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            Integration Challenges
          </h4>

          <div class="space-y-4">
            <div
              class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
            >
              <h5 class="font-medium text-orange-800 dark:text-orange-400 mb-2">
                Post-Merger Integration
              </h5>
              <p class="text-sm text-orange-700 dark:text-orange-300">
                Despite expected synergies, cost per BOE rose 1% in 2024, highlighting operational
                challenges in early integration years.
              </p>
            </div>

            <div
              class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
            >
              <h5 class="font-medium text-orange-800 dark:text-orange-400 mb-2">
                Cultural Integration
              </h5>
              <p class="text-sm text-orange-700 dark:text-orange-300">
                Combining different corporate cultures, management styles, and operational
                procedures poses significant challenges.
              </p>
            </div>

            <div
              class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
            >
              <h5 class="font-medium text-orange-800 dark:text-orange-400 mb-2">
                Regulatory Complexity
              </h5>
              <p class="text-sm text-orange-700 dark:text-orange-300">
                Navigating complex regulatory approvals and compliance requirements across different
                jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Case Studies -->
      <div class="mb-16">
        <h3 class="text-3xl font-light text-center mb-12 text-[var(--tm-txt-primary)]">
          Major M&A
          <span class="text-purple-600 font-medium">Case Studies 2024</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Chevron Case -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-xl p-8 border border-[var(--tm-bd-card)] hover:border-blue-400 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              >
                C
              </div>
              <div>
                <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Chevron's Strategic Acquisition
                </h4>
                <p class="text-sm text-blue-600 font-medium">Permian Basin Expansion</p>
              </div>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Chevron completed a major acquisition in 2024, significantly expanding its shale oil
              production in the Permian Basin, providing access to additional reserves and
              operational optimization opportunities.
            </p>

            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm">
                <svg
                  class="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Expanded shale oil production capacity
                </span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <svg
                  class="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">Access to high-quality reserves</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <svg
                  class="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Optimized regional operations efficiency
                </span>
              </div>
            </div>
          </div>

          <!-- Occidental Petroleum Case -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-xl p-8 border border-[var(--tm-bd-card)] hover:border-green-400 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              >
                O
              </div>
              <div>
                <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Occidental Petroleum Deals
                </h4>
                <p class="text-sm text-green-600 font-medium">Diversified Strategic Approach</p>
              </div>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Occidental Petroleum was actively involved in M&A activities in 2024, making strategic
              acquisitions to strengthen its US shale oil market position and expand carbon capture
              business.
            </p>

            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm">
                <svg
                  class="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Strengthened US shale oil market position
                </span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <svg
                  class="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Expanded carbon capture and storage business
                </span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <svg
                  class="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Strategic diversification into low-carbon technologies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Future Outlook -->
      <div
        class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
      >
        <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.8,-0.2C89.6,15.9,86.6,31.8,78.9,45.2C71.2,58.6,58.8,69.5,44.7,76.4C30.6,83.3,15.3,86.2,0.1,86.1C-15.1,86,-30.2,83,-44.6,76.1C-59,69.2,-72.7,58.4,-80.5,45.1C-88.3,31.8,-90.2,15.9,-90.1,-0.1C-90,-16.1,-87.9,-32.2,-80.1,-45.6C-72.3,-59,-58.8,-69.7,-44.6,-76.6C-30.4,-83.5,-15.2,-86.6,-0.1,-86.5C15,-86.4,30,-83.1,44.7,-76.4Z"
            />
          </svg>
        </div>

        <div class="relative z-10">
          <h3 class="text-3xl font-bold mb-6">Industry Consolidation Outlook</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-semibold mb-4 text-purple-300">Continued Consolidation</h4>
              <p class="leading-relaxed opacity-90 mb-4">
                The consolidation and M&A activities in the oil and gas industry are expected to
                continue in the coming years, driven by the need for scale, efficiency, and
                strategic positioning.
              </p>
              <p class="leading-relaxed opacity-90">
                Companies will focus on acquiring assets with strong future drilling potential and
                operational synergies to maintain competitiveness.
              </p>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-4 text-cyan-300">Strategic Focus Areas</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Securing long-term production assets and reserves</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Achieving operational efficiencies through scale</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Managing post-merger integration challenges effectively</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <h4 class="text-lg font-semibold mb-3 text-yellow-300">Key Industry Transformation</h4>
            <p class="text-base leading-relaxed opacity-90">
              The wave of consolidation activities will reshape the industry landscape, leading to
              fewer but stronger players with enhanced operational capabilities and market
              positioning for future challenges and opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic for M&A consolidation trends
</script>

<style scoped>
  /* Dark mode adaptations */
  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-secondary);
  }

  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .bg-green-50 {
    background: rgba(34, 197, 94, 0.1);
  }

  .dark .bg-orange-50 {
    background: rgba(249, 115, 22, 0.1);
  }

  .dark .border-green-200 {
    border-color: rgba(34, 197, 94, 0.3);
  }

  .dark .border-orange-200 {
    border-color: rgba(249, 115, 22, 0.3);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2.5rem;
    }

    .grid {
      gap: 1.5rem;
    }

    .py-20 {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    .group:hover {
      transform: none;
    }

    .transition-all,
    .transition-transform {
      transition: none;
    }
  }

  /* High contrast support */
  @media (prefers-contrast: high) {
    .border-\[var\(--tm-bd-card\)\] {
      border-width: 2px;
    }

    .text-\[var\(--tm-txt-secondary\)\] {
      color: var(--tm-txt-primary);
    }
  }
</style>
