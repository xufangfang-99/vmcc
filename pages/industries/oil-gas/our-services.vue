<template>
  <div class="py-20 bg-[var(--tm-bg-secondary)]">
    <div class="container mx-auto max-w-[1400px] px-8">
      <!-- Section Header -->
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
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="m2 17 10 5 10-5"></path>
          </svg>
          Industry Overview
        </div>
        <h2 class="mb-6 text-4xl lg:text-5xl font-light text-[var(--tm-txt-primary)]">
          GCC Oil & Gas Market Landscape
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed">
          The Gulf Cooperation Council remains a global energy powerhouse, accounting for
          approximately 40% of the world's proven oil reserves and driving continuous innovation in
          energy technologies and operations.
        </p>
      </div>

      <!-- Market Overview Stats -->
      <div class="mb-20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                ></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">40%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
              Global Oil Reserves
            </div>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                ></path>
              </svg>
            </div>
            <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">25%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
              Global Gas Reserves
            </div>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">$2.1T</div>
            <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
              Annual Revenue
            </div>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
            >
              <svg
                width="32"
                height="32"
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
            <div class="text-3xl font-bold text-[var(--tm-txt-primary)] mb-2">2M+</div>
            <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
              Energy Workers
            </div>
          </div>
        </div>
      </div>

      <!-- Market Dynamics -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Left Content -->
        <div>
          <h3 class="text-3xl font-light text-[var(--tm-txt-primary)] mb-6">
            Current Market Dynamics
          </h3>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Energy Security Focus
                </h4>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  GCC nations continue investing heavily in energy infrastructure to maintain global
                  supply leadership while developing domestic capabilities.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white flex-shrink-0"
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
                  ></circle>
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Digital Transformation
                </h4>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Rapid adoption of AI, IoT, and automation technologies requires new technical
                  skills and digital competencies across all operational levels.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0"
              >
                <svg
                  width="20"
                  height="20"
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
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Nationalization Programs
                </h4>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Government-mandated emiratisation targets drive demand for skilled local talent
                  development and strategic workforce planning.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Energy Transition</h4>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Growing investment in renewable energy, carbon capture, and hydrogen technologies
                  creates new opportunities and skill requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Infographic -->
        <div class="relative">
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)]"
          >
            <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-8 text-center">
              GCC Energy Employment by Country
            </h4>

            <!-- Country Employment Data -->
            <div class="space-y-6">
              <!-- UAE -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-6 rounded-sm overflow-hidden border border-gray-300">
                    <div class="h-2 bg-green-500"></div>
                    <div class="h-2 bg-white"></div>
                    <div class="h-2 bg-red-500"></div>
                  </div>
                  <span class="font-medium text-[var(--tm-txt-primary)]">UAE</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-48 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="w-[75%] h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full"
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)] w-12 text-right">
                    350K
                  </span>
                </div>
              </div>

              <!-- Saudi Arabia -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div
                    class="w-8 h-6 rounded-sm overflow-hidden border border-gray-300 bg-green-600 flex items-center justify-center"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <text
                        x="12"
                        y="16"
                        text-anchor="middle"
                        font-size="10"
                        fill="white"
                      >
                        سع
                      </text>
                    </svg>
                  </div>
                  <span class="font-medium text-[var(--tm-txt-primary)]">Saudi Arabia</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-48 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="w-[90%] h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)] w-12 text-right">
                    450K
                  </span>
                </div>
              </div>

              <!-- Kuwait -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-6 rounded-sm overflow-hidden border border-gray-300">
                    <div class="h-2 bg-green-500"></div>
                    <div class="h-2 bg-white"></div>
                    <div class="h-2 bg-red-500"></div>
                  </div>
                  <span class="font-medium text-[var(--tm-txt-primary)]">Kuwait</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-48 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="w-[45%] h-full bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)] w-12 text-right">
                    180K
                  </span>
                </div>
              </div>

              <!-- Qatar -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-6 rounded-sm bg-maroon-700 border border-gray-300"></div>
                  <span class="font-medium text-[var(--tm-txt-primary)]">Qatar</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-48 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="w-[35%] h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)] w-12 text-right">
                    120K
                  </span>
                </div>
              </div>

              <!-- Oman -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-6 rounded-sm overflow-hidden border border-gray-300">
                    <div class="h-2 bg-red-500"></div>
                    <div class="h-2 bg-white"></div>
                    <div class="h-2 bg-green-500"></div>
                  </div>
                  <span class="font-medium text-[var(--tm-txt-primary)]">Oman</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-48 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="w-[30%] h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)] w-12 text-right">
                    95K
                  </span>
                </div>
              </div>

              <!-- Bahrain -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-6 rounded-sm overflow-hidden border border-gray-300">
                    <div class="h-2 bg-red-500"></div>
                    <div class="h-2 bg-white"></div>
                    <div class="h-2 bg-red-500"></div>
                  </div>
                  <span class="font-medium text-[var(--tm-txt-primary)]">Bahrain</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-48 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="w-[20%] h-full bg-gradient-to-r from-red-500 to-pink-600 rounded-full"
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-[var(--tm-txt-primary)] w-12 text-right">
                    65K
                  </span>
                </div>
              </div>
            </div>

            <div
              class="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border-l-4 border-[var(--tm-accent-primary)]"
            >
              <p class="text-sm text-[var(--tm-txt-secondary)] italic">
                * Employment figures represent direct energy sector workforce across upstream,
                midstream, and downstream operations
              </p>
            </div>
          </div>
        </div>

        <!-- Right Visual -->
        <div class="relative">
          <div class="relative rounded-3xl overflow-hidden shadow-[var(--tm-shadow-hero)]">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
              alt="Oil & Gas Facility in GCC"
              class="w-full h-96 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/20"
            ></div>

            <!-- Floating Stats -->
            <div
              class="absolute top-6 right-6 bg-white/90 dark:bg-black/80 rounded-2xl p-4 backdrop-blur-sm"
            >
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">1.3M+</div>
                <div class="text-xs text-[var(--tm-txt-secondary)] uppercase tracking-wider">
                  Total GCC Energy Jobs
                </div>
              </div>
            </div>

            <div
              class="absolute bottom-6 left-6 bg-white/90 dark:bg-black/80 rounded-2xl p-4 backdrop-blur-sm"
            >
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600 mb-1">15%</div>
                <div class="text-xs text-[var(--tm-txt-secondary)] uppercase tracking-wider">
                  Annual Growth Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Trends -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Trend 1 -->
        <div
          class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] group"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-110"
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
              ></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Mega Projects Pipeline
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            $500+ billion in planned energy infrastructure projects across the GCC creating
            unprecedented demand for specialized talent.
          </p>
          <div class="text-sm text-[var(--tm-accent-primary)] font-medium">
            Key drivers: NEOM, Qatar National Vision 2030, UAE Energy Strategy 2050
          </div>
        </div>

        <!-- Trend 2 -->
        <div
          class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] group"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-110"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Skills Premium</h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Specialized roles command 25-40% salary premiums due to talent scarcity, particularly in
            downstream processing and energy transition.
          </p>
          <div class="text-sm text-[var(--tm-accent-primary)] font-medium">
            Highest demand: Process Engineers, HSE Specialists, Digital Experts
          </div>
        </div>

        <!-- Trend 3 -->
        <div
          class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] group"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-110"
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
              ></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line
                x1="12"
                y1="22.08"
                x2="12"
                y2="12"
              ></line>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Operational Excellence
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Focus on operational efficiency and cost optimization drives demand for lean operations
            specialists and process improvement experts.
          </p>
          <div class="text-sm text-[var(--tm-accent-primary)] font-medium">
            Priority areas: Asset integrity, predictive maintenance, supply chain optimization
          </div>
        </div>
      </div>

      <!-- Industry Challenges -->
      <div
        class="mt-20 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-3xl p-12 border border-red-200/50 dark:border-red-800/30"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl font-light text-[var(--tm-txt-primary)] mb-4">
            Current Industry Challenges
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)]">
            Understanding market complexities to deliver better talent solutions
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Challenge 1 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                <path d="M12 15h.01"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Skills Shortage</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Critical shortage of experienced professionals in specialized roles, particularly UAE
              nationals with technical expertise.
            </p>
          </div>

          <!-- Challenge 2 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
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
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Regulatory Compliance</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Meeting emiratisation quotas while maintaining operational excellence requires
              strategic workforce planning.
            </p>
          </div>

          <!-- Challenge 3 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
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
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                ></path>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Technology Transition</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Rapid digitalization requires upskilling existing workforce while recruiting new
              talent with digital competencies.
            </p>
          </div>

          <!-- Challenge 4 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
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
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                ></path>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">
              Sustainability Integration
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Balancing traditional operations with environmental commitments requires professionals
              skilled in both domains.
            </p>
          </div>
        </div>
      </div>

      <!-- VMMC Solutions -->
      <div
        class="mt-16 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-3xl p-12 text-white"
      >
        <div class="text-center mb-8">
          <h3 class="text-3xl font-light mb-4">How VMMC Addresses These Challenges</h3>
          <p class="text-lg opacity-95">
            Our proven methodologies and extensive network deliver solutions
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white flex-shrink-0"
            >
              <svg
                width="20"
                height="20"
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
            <div>
              <h4 class="font-semibold mb-2">Local Talent Development</h4>
              <p class="text-sm opacity-90 leading-relaxed">
                Comprehensive UAE nationals training programs bridging the gap between education and
                industry requirements.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white flex-shrink-0"
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
                ></circle>
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Global Network Access</h4>
              <p class="text-sm opacity-90 leading-relaxed">
                Tap into our international database of 1M+ candidates to source specialized
                expertise quickly and efficiently.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white flex-shrink-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Compliance Expertise</h4>
              <p class="text-sm opacity-90 leading-relaxed">
                Deep understanding of GCC employment regulations and nationalization requirements
                ensuring full compliance.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white flex-shrink-0"
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
                ></circle>
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Strategic Consultation</h4>
              <p class="text-sm opacity-90 leading-relaxed">
                End-to-end workforce planning and talent strategy development aligned with business
                objectives and growth plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Component logic can be added here if needed
</script>

<style>
  /* Custom styles that complement UnoCSS */
  .bg-maroon-700 {
    background-color: #7c2d12;
  }

  /* Animation for rotating background */
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Hover effects for country employment bars */
  .group:hover .w-48 > div {
    animation: progress-fill 1s ease-out;
  }

  @keyframes progress-fill {
    from {
      width: 0;
    }
    to {
      width: var(--progress-width);
    }
  }

  /* Dark mode flag colors */
  .dark .bg-green-500 {
    background-color: #10b981;
  }
  .dark .bg-red-500 {
    background-color: #ef4444;
  }
  .dark .bg-white {
    background-color: #f8fafc;
  }

  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    .w-48 {
      width: 120px;
    }

    .text-3xl {
      font-size: 1.875rem;
    }

    .gap-16 {
      gap: 2rem;
    }
  }
</style>
