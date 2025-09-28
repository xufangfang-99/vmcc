<template>
  <div class="min-h-screen bg-tm-bg-primary">
    <!-- Report Header -->
    <section class="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
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
          <span class="text-white">Healthcare Industry Report</span>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span class="text-sm font-500 uppercase tracking-wider">Industry Analysis 2025</span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-300 mb-6 leading-tight">
            Healthcare Industry
            <span class="block font-600">Comprehensive Report</span>
          </h1>

          <p class="text-xl text-white/90 max-w-200 mx-auto mb-8 leading-relaxed">
            The healthcare industry in 2025 stands at the intersection of demographic shifts,
            technological innovation, and global health challenges, representing over 10% of global
            GDP and continuing to attract investment from both governments and private capital.
          </p>

          <!-- Key Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-175 mx-auto">
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">>10%</div>
              <div class="text-xs text-white/80">Global GDP Share</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$1.8T</div>
              <div class="text-xs text-white/80">Pharma Market</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$650B</div>
              <div class="text-xs text-white/80">Medical Devices</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$1.5T</div>
              <div class="text-xs text-white/80">Biotech Projection</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Table of Contents -->
    <section class="py-12 bg-tm-bg-secondary border-b border-tm-bd-card">
      <div class="max-w-300 mx-auto px-5">
        <h2 class="text-2xl font-600 text-tm-txt-primary mb-8 text-center">Report Contents</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="#industry-overview"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              I
            </div>
            <span class="text-tm-txt-primary font-500">Industry Overview</span>
          </a>
          <a
            href="#key-trends"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              II
            </div>
            <span class="text-tm-txt-primary font-500">Key Trends & Drivers</span>
          </a>
          <a
            href="#challenges-risks"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              III
            </div>
            <span class="text-tm-txt-primary font-500">Challenges & Risks</span>
          </a>
          <a
            href="#talent-outlook"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-tm-pri-0 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              IV
            </div>
            <span class="text-tm-txt-primary font-500">Outlook & Talent Implications</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Report Content -->
    <div class="max-w-300 mx-auto px-5 py-16">
      <!-- Section I: Industry Overview -->
      <section
        id="industry-overview"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-tm-pri-0 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            I
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Industry Overview</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            The healthcare industry in 2025 stands at the intersection of demographic shifts,
            technological innovation, and global health challenges. Aging populations, rising
            chronic diseases, and post-pandemic resilience are fueling demand for advanced
            healthcare solutions. At the same time, digital health, biotechnology, and personalized
            medicine are reshaping the delivery of care.
          </p>
          <p class="text-lg leading-relaxed mb-6">
            The sector represents over 10% of global GDP and continues to attract investment from
            both governments and private capital. This convergence of demographic pressure and
            technological opportunity creates unprecedented demand for skilled healthcare
            professionals across all specialties.
          </p>
        </div>

        <!-- Market Overview Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Global Market Scale</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Healthcare Sector GDP Share</span>
                <span class="text-xl font-700 text-tm-pri-0">>10%</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Investment Flow</span>
                <span class="text-xl font-700 text-green-500">Growing</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Government + Private Capital</span>
                <span class="text-xl font-700 text-tm-pri-0">Strong</span>
              </div>
            </div>
          </div>

          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Demographic Drivers</h3>
            <div class="space-y-3">
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-tm-pri-0">
                <div class="text-sm font-500 text-tm-txt-primary">Aging Populations</div>
                <div class="text-xs text-tm-txt-secondary">
                  Increased demand for healthcare services globally
                </div>
              </div>
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-orange-500">
                <div class="text-sm font-500 text-tm-txt-primary">Rising Chronic Diseases</div>
                <div class="text-xs text-tm-txt-secondary">
                  Growing prevalence requiring long-term care solutions
                </div>
              </div>
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-green-500">
                <div class="text-sm font-500 text-tm-txt-primary">Post-Pandemic Resilience</div>
                <div class="text-xs text-tm-txt-secondary">
                  Enhanced focus on healthcare infrastructure and preparedness
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section II: Key Trends and Drivers -->
      <section
        id="key-trends"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-tm-pri-0 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            II
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Key Trends and Drivers</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Digital Health Expansion -->
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
              <h3 class="text-lg font-600 text-tm-txt-primary">Digital Health Expansion</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              Telemedicine, AI diagnostics, and wearable devices are becoming standard in patient
              care.
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">
                  Telemedicine adoption accelerating
                </span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">
                  AI diagnostics becoming mainstream
                </span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">
                  Wearable health devices proliferating
                </span>
              </div>
            </div>
          </div>

          <!-- Biotech Innovation -->
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center"
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
              <h3 class="text-lg font-600 text-tm-txt-primary">Biotech Innovation</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              Breakthroughs in gene therapies, mRNA technologies, and oncology treatments are
              accelerating.
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Gene therapy breakthroughs</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">mRNA technology expansion</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Advanced oncology treatments</span>
              </div>
            </div>
          </div>

          <!-- Emerging Markets Infrastructure -->
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
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
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  ></circle>
                  <path d="M2 12h20"></path>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Emerging Markets Infrastructure</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              Asia, the Middle East, and Africa are expanding hospital networks and investing
              heavily in medical technology.
            </p>
            <div class="grid grid-cols-3 gap-2 mt-4">
              <div class="text-center p-2 bg-tm-bg-primary rounded">
                <div class="text-sm font-600 text-purple-500">Asia</div>
              </div>
              <div class="text-center p-2 bg-tm-bg-primary rounded">
                <div class="text-sm font-600 text-purple-500">Middle East</div>
              </div>
              <div class="text-center p-2 bg-tm-bg-primary rounded">
                <div class="text-sm font-600 text-purple-500">Africa</div>
              </div>
            </div>
          </div>

          <!-- Preventive Care -->
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Shift Toward Preventive Care</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              Governments and insurers emphasize early detection and wellness programs to control
              costs.
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Early detection programs</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Wellness initiatives</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Cost control focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section III: Challenges and Risks -->
      <section
        id="challenges-risks"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-tm-pri-0 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            III
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Challenges and Risks</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Rising Costs -->
          <div class="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-red-700">Rising Costs</h3>
            </div>
            <p class="text-red-600 text-sm mb-3">
              Healthcare expenditure is outpacing GDP growth in most countries.
            </p>
            <div class="text-center p-3 bg-white rounded-lg border border-red-200">
              <div class="text-lg font-700 text-red-500">Critical Issue</div>
              <div class="text-xs text-red-600">Global cost control challenge</div>
            </div>
          </div>

          <!-- Talent Shortages -->
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                  ></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 010 7.75"></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-orange-700">Talent Shortages</h3>
            </div>
            <p class="text-orange-600 text-sm mb-3">
              Shortfalls in skilled doctors, nurses, and biotech specialists are worsening globally.
            </p>
            <div class="space-y-2">
              <div class="text-xs text-orange-600">• Doctors shortage</div>
              <div class="text-xs text-orange-600">• Nurses deficit</div>
              <div class="text-xs text-orange-600">• Biotech specialists gap</div>
            </div>
          </div>

          <!-- Regulatory Barriers -->
          <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center"
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
              <h3 class="text-lg font-600 text-blue-700">Regulatory Barriers</h3>
            </div>
            <p class="text-blue-600 text-sm mb-3">
              Drug approval processes and data privacy laws create obstacles for innovation.
            </p>
            <div class="space-y-2">
              <div class="text-xs text-blue-600">• Complex approval processes</div>
              <div class="text-xs text-blue-600">• Data privacy regulations</div>
              <div class="text-xs text-blue-600">• Innovation delays</div>
            </div>
          </div>

          <!-- Health Inequality -->
          <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  ></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line
                    x1="9"
                    y1="9"
                    x2="9.01"
                    y2="9"
                  ></line>
                  <line
                    x1="15"
                    y1="9"
                    x2="15.01"
                    y2="9"
                  ></line>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-purple-700">Health Inequality</h3>
            </div>
            <p class="text-purple-600 text-sm mb-3">
              Access to quality healthcare remains uneven between developed and developing regions.
            </p>
            <div class="text-center p-3 bg-white rounded-lg border border-purple-200">
              <div class="text-sm font-600 text-purple-500">Global Challenge</div>
              <div class="text-xs text-purple-600">Regional disparities persist</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section IV: Outlook and Talent Implications -->
      <section
        id="talent-outlook"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-tm-pri-0 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            IV
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Outlook and Talent Implications</h2>
        </div>

        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card"
        >
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">Industry Growth Outlook</h3>
          <p class="text-tm-txt-secondary leading-relaxed mb-8">
            The healthcare industry will continue to grow robustly, especially in biotechnology,
            digital health, and elderly care. This growth creates unprecedented opportunities for
            healthcare professionals and creates new career pathways at the intersection of
            technology and medicine.
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- Talent Demand Focus Areas -->
            <div>
              <h4 class="text-xl font-600 text-tm-txt-primary mb-4">High-Demand Talent Areas</h4>
              <div class="space-y-3">
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-tm-pri-0">
                  <div class="font-semibold text-tm-txt-primary">AI in Healthcare</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Machine learning, diagnostics, personalized medicine
                  </div>
                </div>
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-green-500">
                  <div class="font-semibold text-tm-txt-primary">Bioengineering</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Genetic engineering, tissue engineering, biomaterials
                  </div>
                </div>
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-blue-500">
                  <div class="font-semibold text-tm-txt-primary">Clinical Research</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Drug development, clinical trials, regulatory affairs
                  </div>
                </div>
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-purple-500">
                  <div class="font-semibold text-tm-txt-primary">
                    Cross-border Healthcare Management
                  </div>
                  <div class="text-sm text-tm-txt-secondary">
                    International health systems, medical tourism
                  </div>
                </div>
              </div>
            </div>

            <!-- Global Competition for Talent -->
            <div>
              <h4 class="text-xl font-600 text-tm-txt-primary mb-4">Medical Hub Competition</h4>
              <p class="text-tm-txt-secondary mb-4">
                Countries aiming to become medical hubs will increasingly compete for global
                healthcare professionals.
              </p>
              <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-tm-pri-0">Singapore</div>
                  <div class="text-xs text-tm-txt-light">Regional hub</div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-tm-pri-0">UAE</div>
                  <div class="text-xs text-tm-txt-light">Medical tourism</div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-tm-pri-0">China</div>
                  <div class="text-xs text-tm-txt-light">Innovation center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
      <div
        class="text-center py-12 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 text-white rounded-3xl mb-12"
      >
        <h3 class="text-2xl font-600 mb-4">Download Complete Healthcare Industry Report</h3>
        <p class="text-lg mb-6 max-w-150 mx-auto">
          Access the full healthcare industry analysis with detailed market data, talent strategies,
          and future projections for healthcare professionals and organizations.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-tm-pri-0 font-600 rounded-full hover:bg-white/95 transition-colors"
            @click="openExpertModal"
          >
            Request Report Summary
          </button>
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-600 rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors"
            @click="openConsultationModal"
          >
            Request Healthcare Consultation
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
    title: 'Healthcare Industry Report 2025 - Digital Health & Biotech Innovation Analysis | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive Healthcare Industry Report 2025. Analysis of digital health expansion, biotechnology innovation, emerging markets growth, and talent implications. Over 10% of global GDP with growing investment from governments and private capital.',
      },
      {
        name: 'keywords',
        content:
          'healthcare industry 2025, digital health, biotechnology innovation, medical technology, healthcare talent, AI healthcare, gene therapy, mRNA technology, emerging markets healthcare, preventive care',
      },
      {
        property: 'og:title',
        content: 'Healthcare Industry Report 2025 - Digital Health & Biotech Innovation Analysis',
      },
      {
        property: 'og:description',
        content:
          'In-depth analysis of the healthcare industry covering digital health expansion, biotechnology breakthroughs, and talent demand across emerging markets.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/industries/healthcare-medical-tourism/healthcare-industry',
      },
    ],
  })
</script>
