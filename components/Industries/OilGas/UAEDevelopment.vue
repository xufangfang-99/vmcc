<template>
  <section
    class="uae-development py-20 md:py-32 bg-[var(--tm-bg-primary)] relative overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
        style="background: linear-gradient(135deg, #f59e0b, #d97706)"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl"
        style="background: linear-gradient(135deg, #059669, #047857)"
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
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span
            class="text-sm font-medium text-[var(--tm-accent-primary)] uppercase tracking-wider"
          >
            Report 4
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl font-light mb-6 text-[var(--tm-txt-primary)]">
          UAE Oil & Gas Development
          <span class="block text-amber-600 font-medium">& Future Outlook</span>
        </h2>

        <p
          class="text-lg md:text-xl leading-relaxed text-[var(--tm-txt-secondary)] max-w-4xl mx-auto"
        >
          Comprehensive analysis of the UAE's position as a global energy powerhouse, examining
          current status, challenges, and future prospects in the context of energy transition and
          digital transformation.
        </p>
      </div>

      <!-- UAE Energy Overview -->
      <div
        class="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden mb-16"
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
          <h3 class="text-3xl font-bold mb-6">UAE Energy Powerhouse</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-4xl font-bold mb-2 text-yellow-200">113B</div>
              <div class="text-base opacity-90">Barrels Oil Reserves</div>
              <div class="text-sm opacity-75 mt-1">6th largest globally</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2 text-blue-200">215T</div>
              <div class="text-base opacity-90">Cubic Feet Gas</div>
              <div class="text-sm opacity-75 mt-1">7th largest reserves</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2 text-green-200">3.2M</div>
              <div class="text-base opacity-90">BPD Production</div>
              <div class="text-sm opacity-75 mt-1">Current capacity</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2 text-pink-200">5M</div>
              <div class="text-base opacity-90">BPD Target</div>
              <div class="text-sm opacity-75 mt-1">By 2030</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resource Reserves & Production -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Reserves Overview -->
        <div
          class="group bg-[var(--tm-bg-secondary)] rounded-2xl p-8 border border-[var(--tm-bd-card)] hover:border-amber-500 hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] transition-all duration-500 hover:-translate-y-2"
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Resource Reserves</h3>
          </div>

          <div class="space-y-4 mb-6">
            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-xl border border-amber-200">
              <div class="flex justify-between items-center mb-2">
                <span class="text-[var(--tm-txt-secondary)]">Oil Reserves</span>
                <span class="text-2xl font-bold text-amber-600">113B barrels</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-amber-500 h-2 rounded-full"
                  style="width: 96%"
                ></div>
              </div>
              <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                96% concentrated in Abu Dhabi
              </p>
            </div>

            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-xl border border-blue-200">
              <div class="flex justify-between items-center mb-2">
                <span class="text-[var(--tm-txt-secondary)]">Natural Gas</span>
                <span class="text-2xl font-bold text-blue-600">215T ft³</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-blue-500 h-2 rounded-full"
                  style="width: 87%"
                ></div>
              </div>
              <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">7th largest globally</p>
            </div>
          </div>

          <div class="pt-6 border-t border-[var(--tm-bd-card)]">
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Key Discoveries</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>2020: Over 80T ft³ gas resources discovered at Jebel Ali, Dubai</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Distributed across Abu Dhabi onshore/offshore and other emirates</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Production Capacity -->
        <div
          class="group bg-[var(--tm-bg-secondary)] rounded-2xl p-8 border border-[var(--tm-bd-card)] hover:border-green-500 hover:shadow-[0_20px_60px_rgba(34,197,94,0.15)] transition-all duration-500 hover:-translate-y-2"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Production Growth</h3>
          </div>

          <div class="space-y-4 mb-6">
            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-xl border border-green-200">
              <div class="flex justify-between items-center mb-2">
                <span class="text-[var(--tm-txt-secondary)]">Current Production</span>
                <span class="text-2xl font-bold text-green-600">3.2M BPD</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-green-500 h-2 rounded-full"
                  style="width: 64%"
                ></div>
              </div>
              <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                Petroleum and liquids average
              </p>
            </div>

            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-xl border border-blue-200">
              <div class="flex justify-between items-center mb-2">
                <span class="text-[var(--tm-txt-secondary)]">2030 Target</span>
                <span class="text-2xl font-bold text-blue-600">5M BPD</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-blue-500 h-2 rounded-full"
                  style="width: 100%"
                ></div>
              </div>
              <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">
                Maximum sustainable capacity
              </p>
            </div>
          </div>

          <div class="pt-6 border-t border-[var(--tm-bd-card)]">
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Major Projects</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Hail and Ghasha offshore super-acidic gas project development</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Ruwais LNG project: 9.6M tons/year capacity by 2028</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ADNOC Leadership -->
      <div class="mb-16">
        <div class="bg-[var(--tm-bg-secondary)] rounded-2xl p-8 border border-[var(--tm-bd-card)]">
          <div class="flex items-center gap-6 mb-8">
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
            >
              A
            </div>
            <div>
              <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                ADNOC Leadership
              </h3>
              <p class="text-lg text-blue-600 font-medium">Abu Dhabi National Oil Company</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center p-6 bg-[var(--tm-bg-primary)] rounded-xl">
              <div class="text-3xl font-bold text-blue-600 mb-2">14</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">Subsidiary Companies</div>
            </div>
            <div class="text-center p-6 bg-[var(--tm-bg-primary)] rounded-xl">
              <div class="text-3xl font-bold text-green-600 mb-2">5M</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">BPD Target by 2030</div>
            </div>
            <div class="text-center p-6 bg-[var(--tm-bg-primary)] rounded-xl">
              <div class="text-3xl font-bold text-purple-600 mb-2">600K</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">LNG Tons/Year Current</div>
            </div>
          </div>

          <div
            class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
          >
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              ADNOC operates through 14 subsidiary companies, with ADNOC Onshore and ADNOC Offshore
              being key players in oil and gas extraction. The company is working towards gas
              self-sufficiency by 2030.
            </p>
          </div>
        </div>
      </div>

      <!-- Market Supply and Demand -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Domestic Demand -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-xl p-8 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
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
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
            Domestic Demand Drivers
          </h4>

          <div class="space-y-4">
            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-lg border border-orange-200">
              <h5 class="font-medium text-orange-700 dark:text-orange-400 mb-2">
                Energy-Intensive Industries
              </h5>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Petrochemicals and manufacturing sectors consume substantial amounts of oil and gas
                for production processes.
              </p>
            </div>

            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-lg border border-blue-200">
              <h5 class="font-medium text-blue-700 dark:text-blue-400 mb-2">
                Urban Infrastructure Growth
              </h5>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Smart cities like Masdar City in Abu Dhabi increase demand for reliable and clean
                energy sources, including natural gas for power generation.
              </p>
            </div>

            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-lg border border-green-200">
              <h5 class="font-medium text-green-700 dark:text-green-400 mb-2">
                Transportation Sector
              </h5>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Despite push towards electrification, oil-based fuels still dominate transportation
                sector energy consumption.
              </p>
            </div>
          </div>
        </div>

        <!-- International Markets -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-xl p-8 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <h4
            class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6 flex items-center gap-3"
          >
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            International Export Markets
          </h4>

          <div class="space-y-4">
            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-lg border border-purple-200">
              <h5 class="font-medium text-purple-700 dark:text-purple-400 mb-2">
                Global Oil Exports
              </h5>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                UAE ranks among the world's largest oil exporters, supplying to countries across
                Asia, Europe, and the Americas.
              </p>
            </div>

            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-lg border border-cyan-200">
              <h5 class="font-medium text-cyan-700 dark:text-cyan-400 mb-2">
                LNG Market Expansion
              </h5>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Natural gas, especially as LNG, increasingly sought after by emerging economies in
                Asia and Europe for cleaner energy targets.
              </p>
            </div>

            <div class="p-4 bg-[var(--tm-bg-primary)] rounded-lg border border-green-200">
              <h5 class="font-medium text-green-700 dark:text-green-400 mb-2">
                Strategic Pipeline Network
              </h5>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Abu Dhabi Crude Oil Pipeline (ADCOP) and extensive network transport oil from
                onshore fields to export terminals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Policy Environment -->
      <div class="mb-16">
        <h3 class="text-3xl font-light text-center mb-12 text-[var(--tm-txt-primary)]">
          Strategic Policy
          <span class="text-amber-600 font-medium">Environment</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Energy Security Policy -->
          <div
            class="bg-[var(--tm-bg-secondary)] rounded-xl p-8 border border-[var(--tm-bd-card)] hover:border-blue-400 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              >
                🛡️
              </div>
              <div>
                <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Energy Security Strategy
                </h4>
                <p class="text-sm text-blue-600 font-medium">2050 National Energy Strategy</p>
              </div>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              UAE government focuses on energy security through the 2050 National Energy Strategy,
              aiming to diversify energy mix, increase clean energy share, and enhance efficiency.
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Gas self-sufficiency target by 2030
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Strategic energy reserves construction
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Diversified energy mix development
                </span>
              </div>
            </div>
          </div>

          <!-- Sustainability Policy -->
          <div
            class="bg-[var(--tm-bg-secondary)] rounded-xl p-8 border border-[var(--tm-bd-card)] hover:border-green-400 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              >
                🌱
              </div>
              <div>
                <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Net-Zero Commitment
                </h4>
                <p class="text-sm text-green-600 font-medium">First Arab State Net-Zero Target</p>
              </div>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              UAE was the first Arab state to set net-zero emissions target, launching the Oil and
              Gas Decarbonization Charter with Saudi Arabia during COP28 in 2023.
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">Net-zero emissions by 2050</span>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Methane zero-emissions commitment
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-[var(--tm-txt-secondary)]">
                  Eliminate routine flaring by 2030
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technological Innovation -->
      <div class="mb-16">
        <h3 class="text-3xl font-light text-center mb-12 text-[var(--tm-txt-primary)]">
          Technological
          <span class="text-blue-600 font-medium">Innovation Leadership</span>
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Digital Transformation -->
          <div class="bg-[var(--tm-bg-secondary)] rounded-xl p-8 border border-[var(--tm-bd-card)]">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                AI-Driven Digital Command Center
              </h4>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              ADNOC established AI-driven Panoramic Digital Command Center since 2017, monitoring
              and collecting data across entire business chain from upstream to downstream.
            </p>

            <div class="space-y-3">
              <div class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)]">
                    AR360 Solution:
                  </span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    AI visualizes reservoirs, reduces planning time, optimizes development
                  </span>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)]">
                    Neuron 5 Technology:
                  </span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Autonomous monitoring and preventive maintenance
                  </span>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)]">
                    Big Data Analytics:
                  </span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Intelligent analysis models optimize operations
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- CCUS Technology -->
          <div class="bg-[var(--tm-bg-secondary)] rounded-xl p-8 border border-[var(--tm-bd-card)]">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                Carbon Capture & Storage
              </h4>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              UAE invests in CCUS technologies to reduce carbon emissions, with ADNOC exploring
              applications across operations despite current challenges.
            </p>

            <div class="space-y-3">
              <div class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)]">
                    Emission X Platform:
                  </span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Real-time data collection from emission sources
                  </span>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)]">
                    Predictive Analytics:
                  </span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Advance emission source prediction and prevention
                  </span>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)]">
                    Strategic Investment:
                  </span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Commitment to sustainable development despite challenges
                  </span>
                </div>
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
          <h3 class="text-3xl font-bold mb-6">UAE Energy Future Outlook</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-semibold mb-4 text-amber-300">Production & Transformation</h4>
              <p class="leading-relaxed opacity-90 mb-4">
                UAE's oil production expected to increase gradually as ADNOC works towards 2030
                target. Gas sector likely to achieve self-sufficiency through ongoing projects like
                Hail and Ghasha.
              </p>
              <p class="leading-relaxed opacity-90">
                Industry transformation through low-carbon technologies, renewable energy
                integration, and comprehensive energy solutions combining traditional and renewable
                sources.
              </p>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-4 text-green-300">Global Energy Leadership</h4>
              <p class="leading-relaxed opacity-90 mb-4">
                UAE positioned to maintain competitiveness in global energy market through
                digitalization, decarbonization, and capacity expansion initiatives.
              </p>
              <p class="leading-relaxed opacity-90">
                Contributions to global energy transition and carbon neutrality goals while ensuring
                sustainable development of oil and gas industry.
              </p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <h4 class="text-lg font-semibold mb-3 text-cyan-300">Strategic Conclusion</h4>
            <p class="text-base leading-relaxed opacity-90">
              UAE's oil and gas industry has strong foundation with abundant resources and advanced
              production capabilities. Through continuous technological innovation, policy support,
              and strategic transformation, the industry is positioned to maintain global leadership
              while contributing to sustainable energy transition.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic for UAE development
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

  .dark .bg-blue-50 {
    background: rgba(59, 130, 246, 0.1);
  }

  .dark .border-blue-200,
  .dark .border-orange-200,
  .dark .border-green-200,
  .dark .border-purple-200,
  .dark .border-cyan-200,
  .dark .border-amber-200 {
    border-color: rgba(var(--color-rgb), 0.3);
  }

  /* Progress bar animations */
  .bg-amber-500,
  .bg-blue-500,
  .bg-green-500 {
    animation: progressLoad 2s ease-out;
  }

  @keyframes progressLoad {
    from {
      width: 0%;
    }
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

    @keyframes progressLoad {
      from,
      to {
        width: var(--progress-width);
      }
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
