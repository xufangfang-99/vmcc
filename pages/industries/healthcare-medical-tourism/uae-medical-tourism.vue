<template>
  <div class="min-h-screen bg-tm-bg-primary">
    <!-- Report Header -->
    <section class="py-16 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
      <div class="max-w-300 mx-auto px-5">
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
            to="/industries/healthcare-medical-tourism"
            class="hover:text-white transition-colors no-underline"
          >
            Healthcare & Medical Tourism
          </NuxtLink>
          <span>/</span>
          <span class="text-white">UAE Medical Tourism Report</span>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span class="text-sm font-500 uppercase tracking-wider">UAE Medical Tourism 2025</span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-300 mb-6 leading-tight">
            UAE Medical Tourism
            <span class="block font-600">Development Report</span>
          </h1>

          <p class="text-xl text-white/90 max-w-200 mx-auto mb-8 leading-relaxed">
            In 2024, the UAE medical tourism market generated $8.5 billion in revenue, up 12% from
            the previous year, accounting for 25% of the country's total healthcare revenue.
            Approximately 1.3 million international patients were received annually.
          </p>

          <!-- Key Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-175 mx-auto">
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$8.5B</div>
              <div class="text-xs text-white/80">Revenue 2024</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">1.3M</div>
              <div class="text-xs text-white/80">International Patients</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">25%</div>
              <div class="text-xs text-white/80">Healthcare Revenue Share</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">12%</div>
              <div class="text-xs text-white/80">Annual Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Table of Contents -->
    <section class="py-12 bg-tm-bg-secondary border-b border-tm-bd-card">
      <div class="max-w-300 mx-auto px-5">
        <h2 class="text-2xl font-600 text-tm-txt-primary mb-8 text-center">Report Contents</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="#market-size"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              I
            </div>
            <span class="text-tm-txt-primary font-500">Market Size & Growth</span>
          </a>
          <a
            href="#popular-projects"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              II
            </div>
            <span class="text-tm-txt-primary font-500">Popular Projects & Destinations</span>
          </a>
          <a
            href="#competitive-advantages"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              III
            </div>
            <span class="text-tm-txt-primary font-500">Advantages & Challenges</span>
          </a>
          <a
            href="#policy-future"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              IV
            </div>
            <span class="text-tm-txt-primary font-500">Policy Support & Future</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Report Content -->
    <div class="max-w-300 mx-auto px-5 py-16">
      <!-- Section I: Market Size and Growth Drivers -->
      <section
        id="market-size"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            I
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Market Size and Growth Drivers</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            In 2024, the UAE medical tourism market generated $8.5 billion in revenue, up 12% from
            the previous year, accounting for 25% of the country's total healthcare revenue.
            Approximately 1.3 million international patients were received annually, mainly from
            Russia (28%), India (22%), the UK (15%), and African countries (18%).
          </p>
        </div>

        <!-- Patient Origin & Market Stats -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Patient Origin Distribution</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Russia</span>
                <span class="text-xl font-700 text-amber-500">28%</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">India</span>
                <span class="text-xl font-700 text-amber-500">22%</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">United Kingdom</span>
                <span class="text-xl font-700 text-amber-500">15%</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">African Countries</span>
                <span class="text-xl font-700 text-amber-500">18%</span>
              </div>
            </div>
          </div>

          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Key Growth Drivers</h3>
            <div class="space-y-3">
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-amber-500">
                <div class="text-sm font-500 text-tm-txt-primary">
                  Medical Technology Leadership
                </div>
                <div class="text-xs text-tm-txt-secondary">
                  70% penetration rate of advanced technologies like Da Vinci robots
                </div>
              </div>
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-blue-500">
                <div class="text-sm font-500 text-tm-txt-primary">Tourism Integration</div>
                <div class="text-xs text-tm-txt-secondary">
                  60% medical-tourism packages, 8-10 days average stay
                </div>
              </div>
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-green-500">
                <div class="text-sm font-500 text-tm-txt-primary">Policy Convenience</div>
                <div class="text-xs text-tm-txt-secondary">
                  Visa-on-arrival, 3-5 days preparation period in free zones
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Statistics -->
        <div class="bg-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card">
          <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Market Performance Indicators</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-3xl font-700 text-amber-500 mb-2">$3,000+</div>
              <div class="text-sm text-tm-txt-secondary">
                Average Derivative Consumption per Person
              </div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-700 text-amber-500 mb-2">8-10</div>
              <div class="text-sm text-tm-txt-secondary">Days Average Stay Duration</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-700 text-amber-500 mb-2">60%</div>
              <div class="text-sm text-tm-txt-secondary">Medical-Tourism Package Share</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section II: Popular Projects and Destination Distribution -->
      <section
        id="popular-projects"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            II
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">
            Popular Projects and Destination Distribution
          </h2>
        </div>

        <!-- High-Demand Medical Projects -->
        <div class="mb-12">
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">High-Demand Medical Projects</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Cosmetic Surgery -->
            <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-12 h-12 bg-pink-500/10 text-pink-500 rounded-xl flex items-center justify-center"
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
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    ></path>
                  </svg>
                </div>
                <h4 class="text-lg font-600 text-tm-txt-primary">Cosmetic Surgery</h4>
              </div>
              <p class="text-tm-txt-secondary mb-4 text-sm">
                Accounts for 35% of medical tourism business. Breast augmentation, liposuction, and
                facial rejuvenation are popular.
              </p>
              <div class="space-y-2">
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-pink-500">35%</div>
                  <div class="text-xs text-tm-txt-light">Market Share</div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-sm font-600 text-pink-500">20-30%</div>
                  <div class="text-xs text-tm-txt-light">Lower than Europe</div>
                </div>
              </div>
            </div>

            <!-- Specialized Treatment -->
            <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
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
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-600 text-tm-txt-primary">Specialized Treatment</h4>
              </div>
              <p class="text-tm-txt-secondary mb-4 text-sm">
                Heart bypass surgery, cancer targeted therapy, and IVF attract numerous patients.
              </p>
              <div class="space-y-2">
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-red-500">98.5%</div>
                  <div class="text-xs text-tm-txt-light">Cardiac Success Rate</div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-sm font-600 text-red-500">Cleveland</div>
                  <div class="text-xs text-tm-txt-light">Clinic Abu Dhabi</div>
                </div>
              </div>
            </div>

            <!-- Health Check-ups -->
            <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
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
                    <path d="M9 12l2 2 4-4"></path>
                    <path
                      d="M21 12c.552 0 1-.448 1-1V5a2 2 0 00-2-2H4a2 2 0 00-2 2v6c0 .552.448 1 1 1h18z"
                    ></path>
                  </svg>
                </div>
                <h4 class="text-lg font-600 text-tm-txt-primary">Health Check-ups</h4>
              </div>
              <p class="text-tm-txt-secondary mb-4 text-sm">
                High-end customized packages favored by high-net-worth individuals.
              </p>
              <div class="space-y-2">
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-blue-500">50,000+</div>
                  <div class="text-xs text-tm-txt-light">Yearly Patients</div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-sm font-600 text-blue-500">$10K-$50K</div>
                  <div class="text-xs text-tm-txt-light">Package Range</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Core Destinations -->
        <div class="mb-8">
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">Core Destinations</h3>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Dubai -->
            <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-xl font-600 text-tm-txt-primary">Dubai</h4>
                <span class="px-3 py-1 bg-amber-500 text-white text-sm font-600 rounded-full">
                  60%
                </span>
              </div>
              <p class="text-tm-txt-secondary mb-4 text-sm">
                Hosting over 300 internationally accredited institutions, focusing on high-end
                aesthetics and comprehensive treatment.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span class="text-sm text-tm-txt-secondary">American Hospital Dubai</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span class="text-sm text-tm-txt-secondary">Saudi German Hospital</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span class="text-sm text-tm-txt-secondary">300+ JCI Accredited</span>
                </div>
              </div>
            </div>

            <!-- Abu Dhabi -->
            <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-xl font-600 text-tm-txt-primary">Abu Dhabi</h4>
                <span class="px-3 py-1 bg-emerald-500 text-white text-sm font-600 rounded-full">
                  70%
                </span>
              </div>
              <p class="text-tm-txt-secondary mb-4 text-sm">
                Specializes in specialized treatment. Institutions attract severe cases, accounting
                for 70% of critical medical tourism.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span class="text-sm text-tm-txt-secondary">Cleveland Clinic</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span class="text-sm text-tm-txt-secondary">Johns Hopkins Medicine</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span class="text-sm text-tm-txt-secondary">Critical Care Focus</span>
                </div>
              </div>
            </div>

            <!-- Sharjah -->
            <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-xl font-600 text-tm-txt-primary">Sharjah</h4>
                <span class="px-3 py-1 bg-blue-500 text-white text-sm font-600 rounded-full">
                  Mid-Range
                </span>
              </div>
              <p class="text-tm-txt-secondary mb-4 text-sm">
                Focuses on the mid-range market. Dental and ophthalmic surgery prices are 30% lower
                than in Dubai.
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-sm text-tm-txt-secondary">30% Lower Prices</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-sm text-tm-txt-secondary">Dental & Ophthalmic</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-sm text-tm-txt-secondary">South Asia & Africa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section III: Competitive Advantages and Industry Shortcomings -->
      <section
        id="competitive-advantages"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            III
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">
            Competitive Advantages and Industry Shortcomings
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Competitive Advantages -->
          <div>
            <h3 class="text-2xl font-semibold text-tm-txt-primary mb-6 flex items-center gap-3">
              <div
                class="w-8 h-8 bg-green-500/10 text-green-500 rounded-2 flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4"></path>
                  <path
                    d="M21 12c.552 0 1-.448 1-1V5a2 2 0 00-2-2H4a2 2 0 00-2 2v6c0 .552.448 1 1 1h18z"
                  ></path>
                </svg>
              </div>
              Competitive Advantages
            </h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">
                    High International Certification
                  </h4>
                  <p class="text-sm text-tm-txt-secondary">
                    85% of private hospitals are JCI-accredited, with medical quality on par with
                    Europe and the US
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Multilingual Services</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Medical staff master English and Arabic, with Russian and Hindi translators
                    available
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Strict Privacy Protection</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Laws prohibit patient information leakage, preferred by high-net-worth clients
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Shortcomings -->
          <div>
            <h3 class="text-2xl font-semibold text-tm-txt-primary mb-6 flex items-center gap-3">
              <div
                class="w-8 h-8 bg-red-500/10 text-red-500 rounded-2 flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  ></path>
                </svg>
              </div>
              Main Shortcomings
            </h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Higher Costs</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    50-80% higher than Turkey and Thailand, diverting mid-to-low-end clients
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Resource Strain</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    2-3 week waiting lists for surgeries during peak seasons (Nov-Mar)
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Talent Shortage</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    60% of specialists are expatriates, with risks of short-term mobility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section IV: Policy Support and Future Plans -->
      <section
        id="policy-future"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            IV
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Policy Support and Future Plans</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <!-- Policy Measures -->
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Policy Measures</h3>
            <div class="space-y-4">
              <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-blue-500">
                <div class="font-semibold text-tm-txt-primary mb-1">Visa Facilitation</div>
                <div class="text-sm text-tm-txt-secondary">
                  Medical tourism e-visa launched in 2024, 48 hours approval, 90 days stay
                </div>
              </div>
              <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-green-500">
                <div class="font-semibold text-tm-txt-primary mb-1">Financial Support</div>
                <div class="text-sm text-tm-txt-secondary">
                  1 billion AED fund, 5% tax reduction for institutions with 10,000+ patients
                </div>
              </div>
              <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-purple-500">
                <div class="font-semibold text-tm-txt-primary mb-1">Industry Alliance</div>
                <div class="text-sm text-tm-txt-secondary">
                  UAE Medical Tourism Association integrating hospitals, hotels, airlines
                </div>
              </div>
            </div>
          </div>

          <!-- Future Trends -->
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Future Trends</h3>
            <div class="space-y-4">
              <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-amber-500">
                <div class="font-semibold text-tm-txt-primary mb-1">Niche Markets</div>
                <div class="text-sm text-tm-txt-secondary">
                  5 rehabilitation centers planned for 2025, targeting European elderly patients
                </div>
              </div>
              <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-cyan-500">
                <div class="font-semibold text-tm-txt-primary mb-1">Digital Services</div>
                <div class="text-sm text-tm-txt-secondary">
                  Medical tourism APP with remote consultation, medical record translation
                </div>
              </div>
              <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-orange-500">
                <div class="font-semibold text-tm-txt-primary mb-1">Regional Cooperation</div>
                <div class="text-sm text-tm-txt-secondary">
                  Mutual recognition mechanisms with Saudi Arabia, Qatar for Gulf medical tourism
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Policy Statistics -->
        <div class="bg-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card">
          <h3 class="text-xl font-600 text-tm-txt-primary mb-6">Policy Impact Metrics</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-700 text-amber-500 mb-2">48h</div>
              <div class="text-sm text-tm-txt-secondary">E-Visa Approval Time</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-700 text-amber-500 mb-2">90</div>
              <div class="text-sm text-tm-txt-secondary">Days Maximum Stay</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-700 text-amber-500 mb-2">1B AED</div>
              <div class="text-sm text-tm-txt-secondary">Government Investment Fund</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-700 text-amber-500 mb-2">5%</div>
              <div class="text-sm text-tm-txt-secondary">Tax Reduction Incentive</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
      <div
        class="text-center py-12 bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-3xl mb-12"
      >
        <h3 class="text-2xl font-600 mb-4">Download Complete UAE Medical Tourism Report</h3>
        <p class="text-lg mb-6 max-w-150 mx-auto">
          Access the full UAE medical tourism analysis with detailed market data, policy frameworks,
          destination insights, and strategic recommendations for healthcare and tourism
          professionals.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-600 rounded-full hover:bg-white/95 transition-colors"
            @click="openExpertModal"
          >
            Request Report Summary
          </button>
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-600 rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors"
            @click="openConsultationModal"
          >
            Request Tourism Consultation
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />

    <!-- 专家咨询弹出框 (简化版) -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- 完整咨询表单弹出框 -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'

  // 弹出框状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title:
      'UAE Medical Tourism Development Report 2025 - $8.5B Market Revenue | Dubai Abu Dhabi Healthcare | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'UAE Medical Tourism Development Report 2025. Analysis of $8.5 billion revenue market, 1.3 million international patients, destination distribution across Dubai, Abu Dhabi, Sharjah, policy support, and future growth trends in Gulf medical tourism.',
      },
      {
        name: 'keywords',
        content:
          'UAE medical tourism 2025, Dubai healthcare, Abu Dhabi medical tourism, Sharjah medical services, medical tourism UAE, international patients UAE, cosmetic surgery Dubai, Cleveland Clinic Abu Dhabi',
      },
      {
        property: 'og:title',
        content:
          'UAE Medical Tourism Development Report 2025 - $8.5B Market Revenue | Dubai Healthcare',
      },
      {
        property: 'og:description',
        content:
          'Comprehensive analysis of UAE medical tourism market covering Dubai, Abu Dhabi, and Sharjah healthcare destinations, patient demographics, policy support, and industry growth prospects.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/industries/healthcare-medical-tourism/uae-medical-tourism',
      },
    ],
  })
</script>
