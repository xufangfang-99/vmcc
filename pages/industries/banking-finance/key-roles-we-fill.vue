<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[60vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
          alt="Banking & Finance Professionals"
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
          <span class="font-semibold text-blue-400">Key Roles We Fill</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-8 md:px-0 md:text-6xl lg:text-7xl"
        >
          Key Roles We Fill
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-white/90 drop-shadow-lg sm:text-lg md:mb-12 md:px-0 md:text-xl lg:text-2xl"
        >
          From entry-level analysts to C-suite executives, we place top financial talent across all
          banking sectors and career levels in global financial centers.
        </p>

        <!-- Key Stats -->
        <div
          class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12 lg:gap-16"
        >
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">800+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Finance Professionals Placed
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">75+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Different Role Categories
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">20+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Years Industry Experience
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Roles Overview Section -->
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle
                cx="9"
                cy="7"
                r="4"
              ></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Financial Services Excellence
          </div>
          <h2 class="mb-6 text-4xl lg:text-5xl font-light text-[var(--tm-txt-primary)]">
            Complete Financial Services Workforce Solutions
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed">
            VMMC places exceptional financial talent across all banking disciplines - from front
            office trading to back office operations, covering investment banking, retail banking,
            asset management, and emerging fintech.
          </p>
        </div>

        <!-- Financial Services Overview -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <!-- Front Office -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
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
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">Front Office</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Revenue-generating roles in trading, sales, investment banking, and client
              relationship management.
            </p>
            <div class="text-3xl font-bold text-blue-600 mb-2">300+</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">
              Front Office Professionals Placed
            </div>
          </div>

          <!-- Middle Office -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
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
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">Middle Office</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Risk management, compliance, and control functions ensuring regulatory adherence and
              operational integrity.
            </p>
            <div class="text-3xl font-bold text-green-600 mb-2">250+</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">
              Middle Office Professionals Placed
            </div>
          </div>

          <!-- Back Office -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
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
                  r="3"
                ></circle>
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">Back Office</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Operations, settlement, technology, and support functions enabling seamless financial
              services delivery.
            </p>
            <div class="text-3xl font-bold text-purple-600 mb-2">250+</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">
              Back Office Professionals Placed
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Executive Leadership Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Executive Leadership Roles
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            C-suite executives and senior management positions for major financial institutions and
            fintech companies across global markets.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- CEO & Senior Management -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2 cursor-pointer"
            @click="openExpertModal"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Financial CEO Executive"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <h3 class="text-xl font-semibold mb-2">CEO & Senior Management</h3>
                <p class="text-sm opacity-90">Executive leadership for financial institutions</p>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3 text-sm text-[var(--tm-txt-secondary)]">
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Chief Executive Officers
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Chief Financial Officers
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Managing Directors
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Regional Heads
                </li>
              </ul>
            </div>
          </div>

          <!-- Investment Banking Leaders -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2 cursor-pointer"
            @click="openExpertModal"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80"
                alt="Investment Banking Director"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <h3 class="text-xl font-semibold mb-2">Investment Banking Leaders</h3>
                <p class="text-sm opacity-90">M&A and capital markets leadership</p>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3 text-sm text-[var(--tm-txt-secondary)]">
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Investment Banking Directors
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  M&A Managing Directors
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Capital Markets Heads
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Coverage Group Heads
                </li>
              </ul>
            </div>
          </div>

          <!-- Functional Leadership -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2 cursor-pointer"
            @click="openExpertModal"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
                alt="Financial Functional Leadership"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <h3 class="text-xl font-semibold mb-2">Functional Leadership</h3>
                <p class="text-sm opacity-90">Department heads and senior VPs</p>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3 text-sm text-[var(--tm-txt-secondary)]">
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Chief Risk Officers
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Chief Technology Officers
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Head of Compliance
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Head of Digital Banking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Investment Banking & Capital Markets Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Investment Banking & Capital Markets
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Front office professionals driving revenue generation through trading, sales, M&A
            advisory, and capital markets activities.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <!-- Trading & Sales -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openExpertModal"
          >
            <div class="mb-6">
              <div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80"
                  alt="Trading Professional"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-3">
                Trading & Sales
              </h3>
            </div>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Equity Traders</li>
              <li>• Fixed Income Traders</li>
              <li>• FX & Derivatives Traders</li>
              <li>• Sales Specialists</li>
              <li>• Structuring Experts</li>
              <li>• Electronic Trading</li>
            </ul>
          </div>

          <!-- M&A Advisory -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openExpertModal"
          >
            <div class="mb-6">
              <div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                  alt="M&A Advisor"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-3">
                M&A Advisory
              </h3>
            </div>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• M&A Associates</li>
              <li>• Vice Presidents</li>
              <li>• Directors</li>
              <li>• Sector Coverage</li>
              <li>• Execution Specialists</li>
              <li>• Financial Modeling</li>
            </ul>
          </div>

          <!-- Research -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openExpertModal"
          >
            <div class="mb-6">
              <div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80"
                  alt="Research Analyst"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-3">Research</h3>
            </div>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Equity Research Analysts</li>
              <li>• Credit Research</li>
              <li>• Economic Research</li>
              <li>• Strategy Research</li>
              <li>• Quantitative Research</li>
              <li>• ESG Research</li>
            </ul>
          </div>

          <!-- Capital Markets -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openExpertModal"
          >
            <div class="mb-6">
              <div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80"
                  alt="Capital Markets Professional"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-3">
                Capital Markets
              </h3>
            </div>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• DCM Specialists</li>
              <li>• ECM Specialists</li>
              <li>• Syndicate Managers</li>
              <li>• Origination</li>
              <li>• Execution Trading</li>
              <li>• Prime Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Risk, Compliance & Middle Office -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Risk, Compliance & Middle Office
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Critical control functions ensuring regulatory compliance, risk management, and
            operational integrity across financial institutions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Risk Management -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openExpertModal"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto"
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
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3 text-center">
              Risk Management
            </h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Credit Risk Analysts</li>
              <li>• Market Risk Managers</li>
              <li>• Operational Risk</li>
              <li>• Model Validation</li>
              <li>• Stress Testing</li>
              <li>• Basel III Specialists</li>
            </ul>
          </div>

          <!-- Compliance -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openExpertModal"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto"
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
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3 text-center">Compliance</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• AML/KYC Specialists</li>
              <li>• Regulatory Reporting</li>
              <li>• Trade Surveillance</li>
              <li>• MiFID II Compliance</li>
              <li>• GDPR Officers</li>
              <li>• Financial Crime</li>
            </ul>
          </div>

          <!-- Technology -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openExpertModal"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto"
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
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3 text-center">Technology</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• FinTech Developers</li>
              <li>• Data Scientists</li>
              <li>• Blockchain Engineers</li>
              <li>• Cybersecurity Experts</li>
              <li>• Solution Architects</li>
              <li>• DevOps Engineers</li>
            </ul>
          </div>

          <!-- Operations -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openExpertModal"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto"
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
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3 text-center">Operations</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Trade Settlement</li>
              <li>• Fund Administration</li>
              <li>• Client Onboarding</li>
              <li>• Payment Processing</li>
              <li>• Reconciliation</li>
              <li>• Process Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Specialized Expertise Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Specialized Expertise Areas
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            VMMC's deep financial services knowledge enables us to source talent for specialized and
            emerging roles in the rapidly evolving financial sector.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Quantitative Finance -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openConsultationModal"
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
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Quantitative Finance
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Mathematical and statistical experts developing models for pricing, risk, and
              algorithmic trading.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Quantitative Analysts</li>
              <li>• Algorithmic Traders</li>
              <li>• Risk Modelers</li>
              <li>• Derivatives Specialists</li>
              <li>• Portfolio Optimizers</li>
            </ul>
          </div>

          <!-- Digital Banking -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openConsultationModal"
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
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Digital Banking</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Technology professionals revolutionizing banking through digital channels and
              innovative solutions.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Digital Product Managers</li>
              <li>• Mobile Banking Experts</li>
              <li>• API Specialists</li>
              <li>• UX/UI Designers</li>
              <li>• Customer Journey Experts</li>
            </ul>
          </div>

          <!-- ESG & Sustainable Finance -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openConsultationModal"
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
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              ESG & Sustainable Finance
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Specialists in environmental, social, and governance factors driving sustainable
              financial solutions.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• ESG Analysts</li>
              <li>• Green Bond Specialists</li>
              <li>• Sustainability Officers</li>
              <li>• Climate Risk Analysts</li>
              <li>• Impact Measurement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Metrics Section -->
    <div
      class="py-20 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] text-white relative overflow-hidden"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          style="
            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=');
          "
        ></div>
      </div>

      <div class="container mx-auto max-w-[1400px] px-8 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-light mb-4">Our Placement Success</h2>
          <p class="text-xl opacity-95">
            Proven track record of matching exceptional financial talent with leading institutions
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">800+</div>
            <div class="text-sm opacity-90 uppercase tracking-wider">
              Finance Professionals Placed
            </div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">92%</div>
            <div class="text-sm opacity-90 uppercase tracking-wider">Placement Success Rate</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">75+</div>
            <div class="text-sm opacity-90 uppercase tracking-wider">Different Role Types</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">25</div>
            <div class="text-sm opacity-90 uppercase tracking-wider">Days Average Time-to-Fill</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1000px] px-8 text-center">
        <h2 class="mb-6 text-4xl font-light text-[var(--tm-txt-primary)]">
          Find Your Next Financial Professional
        </h2>
        <p class="mb-8 text-xl leading-relaxed text-[var(--tm-txt-secondary)]">
          Partner with VMMC to access the world's most comprehensive network of financial services
          talent. From quantitative analysts to executive leadership, we deliver the professionals
          who drive financial excellence.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            class="inline-flex items-center gap-3 rounded-full bg-[var(--tm-accent-primary)] px-8 py-4 font-medium text-white shadow-[0_4px_20px_rgba(24,144,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(24,144,255,0.4)]"
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
            Contact Our Finance Specialists
          </button>
          <button
            class="inline-flex items-center gap-3 rounded-full border-2 border-[var(--tm-bd-primary)] bg-transparent px-8 py-4 font-medium text-[var(--tm-txt-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--tm-accent-primary)] hover:bg-[var(--tm-bg-hover)]"
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
    title: 'Key Roles We Fill - Banking & Finance | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive overview of banking & finance roles VMMC fills - from CEOs and traders to risk analysts and compliance officers. 800+ financial professionals placed across front office, middle office, and back office.',
      },
      {
        name: 'keywords',
        content:
          'banking finance jobs, investment banking careers, trading positions, risk management roles, compliance officers, financial executives, quantitative analysts, fintech jobs, global finance recruitment',
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
