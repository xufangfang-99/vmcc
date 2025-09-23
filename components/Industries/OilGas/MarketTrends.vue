<template>
  <section
    class="market-trends py-20 md:py-32 bg-[var(--tm-bg-secondary)] relative overflow-hidden"
  >
    <!-- Background Decoration -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
        style="
          background: linear-gradient(135deg, var(--tm-accent-primary), var(--tm-accent-secondary));
        "
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style="
          background: linear-gradient(
            135deg,
            var(--tm-accent-secondary),
            var(--tm-accent-tertiary)
          );
        "
      ></div>
    </div>

    <div class="container mx-auto max-w-[1400px] px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg"
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
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
          </div>
          <span
            class="text-sm font-medium text-[var(--tm-accent-primary)] uppercase tracking-wider"
          >
            Report 1
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl font-light mb-6 text-[var(--tm-txt-primary)]">
          Global Oil & Gas
          <span class="block text-amber-600 font-medium">Market Trends 2025</span>
        </h2>

        <p
          class="text-lg md:text-xl leading-relaxed text-[var(--tm-txt-secondary)] max-w-4xl mx-auto"
        >
          Comprehensive analysis of global market dynamics, supply-demand balance, price trends, and
          geopolitical factors shaping the industry landscape in 2024-2025.
        </p>
      </div>

      <!-- Executive Summary Card -->
      <div
        class="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden mb-16"
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
          <h3 class="text-3xl font-bold mb-6">Executive Summary</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p class="text-lg leading-relaxed mb-4">
                The global oil and gas industry in 2024 faced a complex environment characterized by
                moderate economic growth and strategic production management by OPEC+.
              </p>
              <p class="text-base leading-relaxed opacity-90">
                Despite production controls, oil prices experienced slight decline with Brent crude
                averaging $79.86 per barrel, reflecting market stability within a $70-$90 range.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-center bg-white/20 rounded-lg p-3">
                <span class="font-medium">Global Economic Growth</span>
                <span class="text-2xl font-bold">3.1%</span>
              </div>
              <div class="flex justify-between items-center bg-white/20 rounded-lg p-3">
                <span class="font-medium">Growth Rate Decline</span>
                <span class="text-2xl font-bold text-red-300">-0.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Insights Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Market Dynamics Card -->
        <div
          class="group bg-[var(--tm-bg-primary)] rounded-2xl p-8 border border-[var(--tm-bd-card)] hover:border-amber-500 hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] transition-all duration-500 hover:-translate-y-2"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Market Dynamics</h3>
          </div>

          <div class="space-y-4">
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Brent Crude Average 2024</span>
              <span class="text-2xl font-bold text-amber-600">$79.86</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Global Economic Growth</span>
              <span class="text-2xl font-bold text-red-500">3.1% ↓</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Oil Price Range</span>
              <span class="text-2xl font-bold text-green-500">$70-$90</span>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-[var(--tm-bd-card)]">
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Key Factors</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Asia-Pacific region drives emerging economy energy demand growth</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>US shale oil production continues growth at slower pace</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>OPEC+ production cuts effective in first half of 2024</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Supply & Demand Card -->
        <div
          class="group bg-[var(--tm-bg-primary)] rounded-2xl p-8 border border-[var(--tm-bd-card)] hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
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
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9M12 5l3-9"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
              Supply-Demand Balance
            </h3>
          </div>

          <div class="space-y-4">
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Global Oil Demand</span>
              <span class="text-2xl font-bold text-blue-600">100M BPD</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Demand Growth Rate</span>
              <span class="text-2xl font-bold text-green-500">0.9% ↑</span>
            </div>
            <div
              class="flex justify-between items-center p-4 bg-[var(--tm-bg-secondary)] rounded-xl"
            >
              <span class="text-[var(--tm-txt-secondary)]">Natural Gas Demand</span>
              <span class="text-2xl font-bold text-cyan-500">4.09T m³</span>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-[var(--tm-bd-card)]">
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Growth Drivers</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Transportation sector drives oil demand in emerging economies</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Natural gas growth (2.0%) driven by power generation and industry</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Shift to cleaner energy increases gas substitution for coal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Price Trends & Geopolitical Impact -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <!-- Price Stability -->
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">Price Stability</h4>
          </div>

          <ul class="space-y-3 text-[var(--tm-txt-secondary)]">
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Brent crude stabilized within $70-$90 range throughout 2024</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Effective OPEC+ production cuts maintained market balance</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Relatively stable global economic growth supported prices</span>
            </li>
          </ul>
        </div>

        <!-- Natural Gas Trends -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <div class="mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-4"
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
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Gas Price Decline
            </h4>
          </div>

          <ul class="space-y-3 text-[var(--tm-txt-secondary)]">
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Henry Hub (HH) prices decreased compared to previous year</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Europe TTF prices showed downward trend in 2024</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>LNG market oversupply was main reason for price decline</span>
            </li>
          </ul>
        </div>

        <!-- Geopolitical Impact -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <div class="mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white mb-4"
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Geopolitical Factors
            </h4>
          </div>

          <ul class="space-y-3 text-[var(--tm-txt-secondary)]">
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Middle East conflicts raised supply disruption concerns</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Diversified supply sources limited actual impact on prices</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Trade disputes indirectly affected global economic growth</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 2025 Market Outlook Section -->
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
          <h3 class="text-3xl font-bold mb-6">2025 Market Outlook</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-semibold mb-4">Challenges Ahead</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg
                      class="w-3 h-3 text-red-400"
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
                  <span>Continued OPEC+ production policy adjustments needed</span>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg
                      class="w-3 h-3 text-red-400"
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
                  <span>Alternative energy development poses long-term threats</span>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg
                      class="w-3 h-3 text-red-400"
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
                  <span>Increasing climate change awareness and regulations</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-4">Growth Opportunities</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg
                      class="w-3 h-3 text-green-400"
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
                  <span>Growing energy demand in emerging economies continues</span>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg
                      class="w-3 h-3 text-green-400"
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
                  <span>Natural gas positioned as transition fuel opportunity</span>
                </li>
                <li class="flex items-start gap-3">
                  <div
                    class="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg
                      class="w-3 h-3 text-green-400"
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
                  <span>
                    Technology-driven efficiency improvements provide competitive advantage
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <h4 class="text-lg font-semibold mb-3 text-amber-300">Key Conclusion</h4>
            <p class="text-base leading-relaxed opacity-90">
              Looking ahead to 2025, the global oil and gas market will continue to face both
              challenges and opportunities. The industry must balance traditional energy supply with
              energy transition demands while maintaining competitiveness in a changing global
              energy landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic for market trends
</script>

<style scoped>
  /* Custom animations for enhanced user experience */
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Apply animations to grid items */
  .grid > div:nth-child(odd) {
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .grid > div:nth-child(even) {
    animation: slideInRight 0.6s ease-out forwards;
  }

  /* Dark mode adaptations */
  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
  }

  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
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
