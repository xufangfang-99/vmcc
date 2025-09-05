<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[60vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
          alt="Banking & Finance Services"
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
            @click="handleHomeClick"
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
            @click="handleHomeClick"
          >
            Banking & Finance
          </NuxtLink>
          <span class="font-light text-white/50">/</span>
          <span class="font-semibold text-blue-400">Our Services</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-8 md:px-0 md:text-6xl lg:text-7xl"
        >
          Banking & Finance Services
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-white/90 drop-shadow-lg sm:text-lg md:mb-12 md:px-0 md:text-xl lg:text-2xl"
        >
          Comprehensive talent solutions designed specifically for the financial services sector's
          evolving needs across global markets and regulatory environments.
        </p>
      </div>
    </div>

    <!-- Services Overview Section -->
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
            Financial Services Expertise
          </div>
          <h2 class="mb-6 text-4xl lg:text-5xl font-light text-[var(--tm-txt-primary)]">
            Specialized Services for Financial Institutions
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed">
            With 20+ years of deep financial services experience, VMMC delivers comprehensive talent
            and consulting solutions across investment banking, retail banking, fintech, and asset
            management throughout global financial centers.
          </p>
        </div>

        <!-- Three Service Pillars -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <!-- Pillar 1: Executive Recruitment -->
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
                Executive Recruitment
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Strategic leadership talent acquisition from entry-level to C-suite positions across
                all financial service verticals.
              </p>
            </div>
          </div>

          <!-- Pillar 2: Financial Consulting -->
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Financial Consulting
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Strategic financial advisory including regulatory compliance, risk management, and
                digital transformation consulting.
              </p>
            </div>
          </div>

          <!-- Pillar 3: Training & Development -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-10 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6"
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
                Financial Training
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Industry-specific development programs for financial competencies, regulatory
                knowledge, and leadership capabilities.
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
            Comprehensive Banking & Finance Solutions
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            From investment banking to fintech, wealth management to regulatory compliance - we
            provide specialized services across the entire financial services ecosystem.
          </p>
        </div>

        <!-- Service Categories -->
        <div class="space-y-16">
          <!-- Recruitment Services -->
          <div>
            <h3 class="text-3xl font-light text-[var(--tm-txt-primary)] mb-12 text-center">
              Financial Services Recruitment
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Investment Banking -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
                @click="openExpertModal"
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
                      <path d="M3 3v18h18"></path>
                      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                    </svg>
                  </div>
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Investment Banking
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    M&A specialists, capital markets professionals, and securities trading experts
                    for global investment banks.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• M&A Advisory & Execution</li>
                  <li>• Capital Markets Specialists</li>
                  <li>• Securities Trading & Sales</li>
                  <li>• Equity & Debt Research</li>
                </ul>
              </div>

              <!-- Corporate Banking -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
                @click="openExpertModal"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Corporate Banking
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Commercial lending experts, corporate finance specialists, and relationship
                    managers for enterprise banking.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Commercial Lending Officers</li>
                  <li>• Corporate Finance Managers</li>
                  <li>• Relationship Management</li>
                  <li>• Trade Finance Specialists</li>
                </ul>
              </div>

              <!-- Wealth Management -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
                @click="openExpertModal"
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
                      <path d="M12 2v20"></path>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Wealth Management
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Private banking advisors, portfolio managers, and wealth advisory specialists
                    for HNWI client services.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Private Banking Advisors</li>
                  <li>• Portfolio Managers</li>
                  <li>• Investment Consultants</li>
                  <li>• Family Office Specialists</li>
                </ul>
              </div>

              <!-- FinTech & Digital -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
                @click="openExpertModal"
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
                    FinTech & Digital Banking
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Digital transformation specialists, blockchain developers, and fintech
                    innovation experts.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Blockchain Developers</li>
                  <li>• Digital Product Managers</li>
                  <li>• Payment Systems Engineers</li>
                  <li>• RegTech Specialists</li>
                </ul>
              </div>

              <!-- Risk Management -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
                @click="openExpertModal"
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Risk Management
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Credit risk analysts, market risk specialists, and operational risk management
                    professionals.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Credit Risk Analysts</li>
                  <li>• Market Risk Specialists</li>
                  <li>• Operational Risk Managers</li>
                  <li>• Compliance Officers</li>
                </ul>
              </div>

              <!-- Quantitative Analysis -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
                @click="openExpertModal"
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
                    Quantitative Analysis
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Quantitative analysts, algorithmic trading specialists, and financial modeling
                    experts.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Quantitative Analysts (Quants)</li>
                  <li>• Algorithmic Trading Developers</li>
                  <li>• Financial Modeling Experts</li>
                  <li>• Data Scientists</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Financial Consulting Services -->
          <div>
            <h3 class="text-3xl font-light text-[var(--tm-txt-primary)] mb-12 text-center">
              Strategic Financial Consulting
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Regulatory Compliance -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
                @click="openConsultationModal"
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
                    Regulatory Compliance
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Basel III compliance, AML/KYC frameworks, and regulatory reporting across global
                    financial jurisdictions.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Basel III Implementation</li>
                  <li>• AML/KYC Compliance</li>
                  <li>• Regulatory Reporting</li>
                  <li>• MiFID II & GDPR Compliance</li>
                </ul>
              </div>

              <!-- Digital Transformation -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
                @click="openConsultationModal"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Digital Transformation
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Banking digitization strategies, fintech integration, and technology adoption
                    roadmaps.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• Digital Banking Strategy</li>
                  <li>• FinTech Integration</li>
                  <li>• API & Open Banking</li>
                  <li>• Cloud Migration</li>
                </ul>
              </div>

              <!-- ESG & Sustainable Finance -->
              <div
                class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
                @click="openConsultationModal"
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
                  <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                    ESG & Sustainable Finance
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Environmental, social, and governance frameworks for sustainable banking and
                    investment strategies.
                  </p>
                </div>
                <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                  <li>• ESG Risk Assessment</li>
                  <li>• Green Bond Structuring</li>
                  <li>• Sustainable Finance Strategy</li>
                  <li>• Climate Risk Analysis</li>
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
            Why Choose VMMC for Financial Services
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)]">
            Proven expertise delivering results for the world's leading financial institutions
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Global Financial Centers -->
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
                20+ Years Financial Focus
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Deep understanding of investment banking, retail banking, asset management, and
                emerging fintech across major financial centers.
              </p>
            </div>
          </div>

          <!-- Global Network -->
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
                Global Financial Network
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Comprehensive coverage across New York, London, Hong Kong, Singapore, Dubai, and
                other major financial hubs.
              </p>
            </div>
          </div>

          <!-- Regulatory Excellence -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4"
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
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Regulatory Expertise
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                90% compliance success rate with deep knowledge of Basel III, MiFID II, and global
                financial regulations.
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
        <h2 class="mb-6 text-4xl font-light">Ready to Transform Your Financial Services Team?</h2>
        <p class="mb-8 text-xl leading-relaxed opacity-95">
          Let VMMC's financial services specialists help you build exceptional teams and achieve
          your strategic objectives across global markets.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            class="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-[var(--tm-accent-primary)] shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]"
            @click="openExpertModal"
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
            Contact Finance Team
          </button>
          <button
            class="inline-flex items-center gap-3 rounded-full border-2 border-white/60 bg-transparent px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            @click="openConsultationModal"
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
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />

    <!-- 专家咨询弹窗（简化版） -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- 完整咨询表单弹窗 -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'
  import { useMenuHandler } from '~/composables/useMenuHandler'

  // 获取统一的菜单处理方法
  const { resetToHome } = useMenuHandler()

  // 处理 Home 点击，使用统一的重置方法
  const handleHomeClick = resetToHome

  // 弹窗状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // 简化版专家咨询弹窗控制
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整版咨询表单弹窗控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // SEO设置
  useHead({
    title: 'Our Services - Banking & Finance Solutions | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive banking & finance services including executive recruitment, financial consulting, and professional development. Specialized in investment banking, wealth management, fintech, and regulatory compliance.',
      },
      {
        name: 'keywords',
        content:
          'banking finance services, investment banking recruitment, fintech talent, wealth management, executive search, financial consulting, regulatory compliance, quantitative analysis, digital banking',
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
