<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[60vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=1920&q=80"
          alt="Oil & Gas Services"
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
          <span class="font-semibold text-blue-400">Our Services</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-8 md:px-0 md:text-6xl lg:text-7xl"
        >
          Oil & Gas Services
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-white/90 drop-shadow-lg sm:text-lg md:mb-12 md:px-0 md:text-xl lg:text-2xl"
        >
          Comprehensive talent solutions designed specifically for the energy sector's unique
          challenges and opportunities across the GCC region.
        </p>
      </div>
    </div>

    <!-- Services Overview Section -->
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
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="m2 17 10 5 10-5"></path>
            </svg>
            Energy Sector Expertise
          </div>
          <h2 class="mb-6 text-4xl lg:text-5xl font-light text-[var(--tm-txt-primary)]">
            Specialized Services for Energy Companies
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed">
            With 15+ years of deep energy sector experience, VMMC delivers comprehensive talent and
            consulting solutions across upstream, midstream, and downstream operations throughout
            the GCC.
          </p>
        </div>

        <!-- Three Service Pillars -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <!-- Pillar 1: Global Recruitment Services -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-10 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6"
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
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Global Recruitment Services
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Strategic talent acquisition from entry-level to C-suite positions across all energy
                value chains.
              </p>
            </div>
          </div>

          <!-- Pillar 2: HR Consulting -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-10 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                HR Consulting Services
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Strategic HR solutions including organizational design, compensation planning, and
                compliance management.
              </p>
            </div>
          </div>

          <!-- Pillar 3: Training & Development -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-10 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Training & Development
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Industry-specific skill development programs for technical competencies and
                leadership capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Services Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Comprehensive Oil & Gas Solutions
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            From exploration to production, refining to distribution - we provide specialized
            services across the entire energy value chain.
          </p>
        </div>

        <!-- Service Categories -->
        <div class="space-y-16">
          <!-- Recruitment Services -->
          <div>
            <h3 class="text-3xl font-light text-[var(--tm-txt-primary)] mb-12 text-center">
              Energy Recruitment Services
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Emiratisation -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Emiratisation Programs
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Specialized UAE nationals recruitment and development programs to meet
                    government mandates while ensuring operational excellence.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Local talent identification & screening</li>
                  <li>• Technical competency assessment</li>
                  <li>• Career progression planning</li>
                  <li>• Compliance reporting & tracking</li>
                </ul>
              </div>

              <!-- Executive Search -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Executive Search
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    C-suite and senior leadership recruitment for major energy projects and
                    operations across the GCC.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• CEO & Senior Management</li>
                  <li>• Operations Directors</li>
                  <li>• Country/Regional Managers</li>
                  <li>• Functional Leadership</li>
                </ul>
              </div>

              <!-- Technical Specialists -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Technical Specialists
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Engineers, geologists, and specialized technicians across upstream, midstream,
                    and downstream operations.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Petroleum & Process Engineers</li>
                  <li>• Reservoir & Drilling Engineers</li>
                  <li>• Geologists & Geophysicists</li>
                  <li>• HSE & Safety Specialists</li>
                </ul>
              </div>

              <!-- Bulk Hiring -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Bulk Hiring Solutions
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Large-scale recruitment for major energy projects, refinery expansions, and
                    operational ramp-ups.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Project-based mass recruitment</li>
                  <li>• Multi-disciplinary team assembly</li>
                  <li>• Rapid deployment capabilities</li>
                  <li>• Quality-focused volume hiring</li>
                </ul>
              </div>

              <!-- Temporary & Contract -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Temporary & Contract Staff
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Flexible staffing solutions for maintenance shutdowns, project peaks, and
                    seasonal operations.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Shutdown & turnaround support</li>
                  <li>• Project-specific expertise</li>
                  <li>• Flexible engagement models</li>
                  <li>• Rapid mobilization</li>
                </ul>
              </div>

              <!-- Outsourcing Services -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Outsourcing Services
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Complete workforce management solutions for non-core functions and specialized
                    operations.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Administrative & support functions</li>
                  <li>• Maintenance & operations</li>
                  <li>• IT & technical services</li>
                  <li>• Payroll & HR administration</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- HR Consulting Services -->
          <div>
            <h3 class="text-3xl font-light text-[var(--tm-txt-primary)] mb-12 text-center">
              Strategic HR Consulting
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Market Intelligence -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Market Intelligence
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Comprehensive salary benchmarking and market analysis specific to GCC energy
                    sector trends.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• GCC energy salary surveys</li>
                  <li>• Emiratisation benchmarking</li>
                  <li>• Skills demand forecasting</li>
                  <li>• Competitor analysis</li>
                </ul>
              </div>

              <!-- Talent Assessments -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M9 12l2 2 4-4"></path>
                      <path
                        d="M21 12c.552 0 1-.448 1-1V8c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v3c0 .552.448 1 1 1h4z"
                      ></path>
                      <path
                        d="M3 12c.552 0 1-.448 1-1V8c0-.552-.448-1-1-1H2c-.552 0-1 .448-1 1v3c0 .552.448 1 1 1h1z"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Talent Assessments
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Comprehensive evaluation tools for technical competencies and leadership
                    capabilities in energy roles.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Technical competency testing</li>
                  <li>• 360-degree feedback reports</li>
                  <li>• Psychometric assessments</li>
                  <li>• Performance evaluations</li>
                </ul>
              </div>

              <!-- HR Policies & Procedures -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14,2 14,8 20,8"></polyline>
                      <line
                        x1="16"
                        y1="13"
                        x2="8"
                        y2="13"
                      ></line>
                      <line
                        x1="16"
                        y1="17"
                        x2="8"
                        y2="17"
                      ></line>
                      <polyline points="10,9 9,9 8,9"></polyline>
                    </svg>
                  </div>
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    HR Policies & Procedures
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Customized HR frameworks designed for energy sector compliance and operational
                    excellence.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Employee handbook development</li>
                  <li>• GCC compliance frameworks</li>
                  <li>• Safety policy integration</li>
                  <li>• Performance management systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Choose VMMC Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Why Choose VMMC for Energy Services
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)]">
            Proven expertise delivering results for the GCC's leading energy companies
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Deep Industry Knowledge -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-4"
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
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                15+ Years Energy Focus
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Deep understanding of upstream, midstream, and downstream operations across major
                NOCs and IOCs in the region.
              </p>
            </div>
          </div>

          <!-- GCC Expertise -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-4"
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
                  <path d="M2 12h20"></path>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                GCC Market Leadership
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Comprehensive coverage across all six GCC countries with local expertise and
                regulatory knowledge.
              </p>
            </div>
          </div>

          <!-- Emiratisation Excellence -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-4"
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
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Emiratisation Specialists
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                85% success rate in UAE nationals placement with comprehensive development programs
                and compliance tracking.
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
        <h2 class="mb-6 text-4xl font-light">Ready to Transform Your Energy Workforce?</h2>
        <p class="mb-8 text-xl leading-relaxed opacity-95">
          Let VMMC's energy sector specialists help you build exceptional teams and achieve your
          operational goals.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:energy@vmmc.com"
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
            Contact Energy Team
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
            Call Dubai Office
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
    title: 'Our Services - Oil & Gas Industry Solutions | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive oil & gas industry services including recruitment, HR consulting, and training solutions. Specialized in emiratisation, executive search, and technical talent for GCC energy sector.',
      },
      {
        name: 'keywords',
        content:
          'oil gas services, emiratisation, executive search, technical recruitment, HR consulting, bulk hiring, GCC energy, petroleum engineers, UAE nationals, oil gas training',
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

  /* Dark mode adjustments */
  .dark .bg-gradient-to-br {
    background: linear-gradient(135deg, var(--tm-bg-card) 0%, var(--tm-bg-secondary) 100%);
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
  }
</style>
