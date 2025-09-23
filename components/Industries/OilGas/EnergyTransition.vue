<template>
  <section
    class="energy-transition py-20 md:py-32 bg-[var(--tm-bg-primary)] relative overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style="background: linear-gradient(135deg, #10b981, #059669)"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl animate-pulse"
        style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); animation-delay: 1s"
      ></div>
    </div>

    <div class="container mx-auto max-w-[1400px] px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg"
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span
            class="text-sm font-medium text-[var(--tm-accent-primary)] uppercase tracking-wider"
          >
            Report 2
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl font-light mb-6 text-[var(--tm-txt-primary)]">
          Energy Transition Impact
          <span class="block text-green-600 font-medium">on Oil & Gas Industry</span>
        </h2>

        <p
          class="text-lg md:text-xl leading-relaxed text-[var(--tm-txt-secondary)] max-w-4xl mx-auto"
        >
          Exploring how the global shift towards renewable energy and carbon neutrality is reshaping
          the traditional oil and gas landscape, driven by greenhouse gas reduction needs and
          achieving carbon neutrality goals.
        </p>
      </div>

      <!-- Challenges vs Opportunities -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Challenges Section -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-2xl p-8 border border-[var(--tm-bd-card)] relative overflow-hidden"
        >
          <!-- Warning gradient overlay -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"
          ></div>

          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white"
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-red-600">Major Challenges</h3>
          </div>

          <div class="space-y-6">
            <!-- Demand Peak Challenge -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-red-200 hover:border-red-400 transition-colors duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-red-600"
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
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Demand Peak & Decline
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-3">
                    According to McKinsey Global Energy Perspective 2024, oil demand is projected to
                    plateau in the next 5-7 years and then decline.
                  </p>
                  <div class="space-y-2 text-xs text-[var(--tm-txt-secondary)]">
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-red-500 rounded-full"></span>
                      <span>Increasing adoption of electric vehicles</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-red-500 rounded-full"></span>
                      <span>Growth of sustainable fuels</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-red-500 rounded-full"></span>
                      <span>Improvement of energy efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Alternative Energy Competition -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-orange-200 hover:border-orange-400 transition-colors duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-orange-600"
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
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Alternative Energy Competition
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-3">
                    Renewable energy sources becoming more cost-competitive and gradually replacing
                    fossil fuels in the energy mix.
                  </p>
                  <div class="space-y-2 text-xs text-[var(--tm-txt-secondary)]">
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-orange-500 rounded-full"></span>
                      <span>Solar, wind, and hydro power acceleration</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-orange-500 rounded-full"></span>
                      <span>Energy storage technology development</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-orange-500 rounded-full"></span>
                      <span>Battery technology promoting renewable usage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Carbon Emission Pressure -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-red-200 hover:border-red-400 transition-colors duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-red-600"
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
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Carbon Emission Reduction Pressure
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-3">
                    Industry faces increasing pressure to reduce carbon emissions with ambitious
                    targets requiring significant investments.
                  </p>
                  <div class="space-y-2 text-xs text-[var(--tm-txt-secondary)]">
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-red-500 rounded-full"></span>
                      <span>Improving energy efficiency requirements</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-red-500 rounded-full"></span>
                      <span>Developing CCS technologies</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-red-500 rounded-full"></span>
                      <span>Investing in low-carbon energy projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Opportunities Section -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-2xl p-8 border border-[var(--tm-bd-card)] relative overflow-hidden"
        >
          <!-- Success gradient overlay -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
          ></div>

          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white"
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-green-600">Strategic Opportunities</h3>
          </div>

          <div class="space-y-6">
            <!-- Natural Gas Bridge -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-green-200 hover:border-green-400 transition-colors duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-green-600"
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
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Natural Gas as Bridge Fuel
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-3">
                    Natural gas positioned as a relatively clean fossil fuel playing a crucial role
                    during energy transition.
                  </p>
                  <div class="space-y-2 text-xs text-[var(--tm-txt-secondary)]">
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-green-500 rounded-full"></span>
                      <span>Replacing coal-fired power plants in power generation</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-green-500 rounded-full"></span>
                      <span>LNG development expanding market share opportunities</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-green-500 rounded-full"></span>
                      <span>Cleaner alternative to reduce carbon emissions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Low-Carbon Technologies -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-blue-200 hover:border-blue-400 transition-colors duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Low-Carbon Technology Investment
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-3">
                    Industry can invest in low-carbon technologies creating new business
                    opportunities and revenue streams.
                  </p>
                  <div class="space-y-2 text-xs text-[var(--tm-txt-secondary)]">
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                      <span>Carbon Capture and Storage (CCS) technology</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                      <span>Blue hydrogen production from natural gas</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                      <span>Biofuels development and production</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Diversification -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-xl p-6 border border-emerald-200 hover:border-emerald-400 transition-colors duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Business Model Diversification
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-3">
                    Energy transition forces industry to diversify business models and adapt to
                    changing energy markets.
                  </p>
                  <div class="space-y-2 text-xs text-[var(--tm-txt-secondary)]">
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-emerald-500 rounded-full"></span>
                      <span>Investing in renewable energy projects</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-emerald-500 rounded-full"></span>
                      <span>Solar and wind farm development</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-emerald-500 rounded-full"></span>
                      <span>
                        Comprehensive energy solutions combining traditional and renewable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Industry Case Studies -->
      <div class="mb-16">
        <h3 class="text-3xl font-light text-center mb-12 text-[var(--tm-txt-primary)]">
          Leading Industry
          <span class="text-green-600 font-medium">Transformation Examples</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- ExxonMobil Case -->
          <div
            class="bg-[var(--tm-bg-secondary)] rounded-xl p-8 border border-[var(--tm-bd-card)] hover:border-blue-400 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              >
                E
              </div>
              <div>
                <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">ExxonMobil</h4>
                <p class="text-sm text-blue-600 font-medium">Low-Carbon Technology Investment</p>
              </div>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              ExxonMobil has announced plans to invest in low-carbon technologies, exploring CCS
              project development and investing in biofuels R&D, while seeking opportunities in the
              hydrogen market.
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
                  Carbon Capture and Storage projects
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
                  Biofuels research and development
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
                  Hydrogen market participation opportunities
                </span>
              </div>
            </div>
          </div>

          <!-- TotalEnergies Case -->
          <div
            class="bg-[var(--tm-bg-secondary)] rounded-xl p-8 border border-[var(--tm-bd-card)] hover:border-green-400 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              >
                T
              </div>
              <div>
                <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  TotalEnergies
                </h4>
                <p class="text-sm text-green-600 font-medium">Renewable Energy Transformation</p>
              </div>
            </div>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              TotalEnergies has made a significant shift towards renewable energy, investing heavily
              in solar and wind energy projects worldwide, along with biofuels and energy storage
              technologies.
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
                  Global solar and wind energy projects
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
                <span class="text-[var(--tm-txt-secondary)]">Biofuels production involvement</span>
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
                  Energy storage technology development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Conclusion Section -->
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
          <h3 class="text-3xl font-bold mb-6">Industry Transformation Conclusion</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-semibold mb-4 text-green-300">Strategic Adaptation</h4>
              <p class="leading-relaxed opacity-90 mb-4">
                The energy transition is an inevitable trend, and the oil and gas industry needs to
                adapt to this change through strategic transformation and innovation.
              </p>
              <p class="leading-relaxed opacity-90">
                By investing in low-carbon technologies, diversifying business models, and
                leveraging natural gas as a bridge fuel, the industry can play an important role in
                the global energy transition.
              </p>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-4 text-blue-300">Future Outlook</h4>
              <p class="leading-relaxed opacity-90 mb-4">
                Although the industry faces many challenges, there are also significant
                opportunities for companies that can successfully navigate the transition.
              </p>
              <p class="leading-relaxed opacity-90">
                The key is to balance traditional energy business with new energy investments while
                maintaining operational excellence and financial performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic for energy transition
</script>

<style scoped>
  /* Custom animations for enhanced user experience */
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.05;
      transform: scale(1);
    }
    50% {
      opacity: 0.1;
      transform: scale(1.02);
    }
  }

  /* Dark mode adaptations */
  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-secondary);
  }

  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .border-red-200 {
    border-color: rgba(239, 68, 68, 0.2);
  }

  .dark .border-green-200 {
    border-color: rgba(34, 197, 94, 0.2);
  }

  .dark .border-blue-200 {
    border-color: rgba(59, 130, 246, 0.2);
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
    .hover\:border-red-400:hover,
    .hover\:border-green-400:hover,
    .hover\:border-blue-400:hover,
    .hover\:shadow-lg:hover {
      transform: none;
    }

    .transition-colors,
    .transition-all {
      transition: none;
    }

    .animate-pulse {
      animation: none;
      opacity: 0.1;
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
