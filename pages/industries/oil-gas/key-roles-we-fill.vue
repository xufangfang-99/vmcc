<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[60vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
          alt="Oil & Gas Professionals"
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
          From entry-level technicians to C-suite executives, we place top talent across all energy
          sector disciplines and career levels.
        </p>

        <!-- Key Stats -->
        <div
          class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12 lg:gap-16"
        >
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">500+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Energy Professionals Placed
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">50+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Different Role Categories
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">15+</div>
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle
                cx="9"
                cy="7"
                r="4"
              ></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Energy Talent Excellence
          </div>
          <h2 class="mb-6 text-4xl lg:text-5xl font-light text-[var(--tm-txt-primary)]">
            Complete Energy Workforce Solutions
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed">
            VMMC places exceptional talent across all energy sector disciplines - from field
            operations to corporate boardrooms, covering upstream exploration through downstream
            distribution.
          </p>
        </div>

        <!-- Value Chain Overview -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <!-- Upstream -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="m2 17 10 5 10-5"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">Upstream</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Exploration, drilling, and production specialists for oil and gas extraction
              operations.
            </p>
            <div class="text-3xl font-bold text-orange-600 mb-2">150+</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Upstream Professionals Placed</div>
          </div>

          <!-- Midstream -->
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
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">Midstream</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Transportation, storage, and processing experts for pipeline and terminal operations.
            </p>
            <div class="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Midstream Professionals Placed</div>
          </div>

          <!-- Downstream -->
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
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">Downstream</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Refining, petrochemicals, and marketing professionals for end-product operations.
            </p>
            <div class="text-3xl font-bold text-purple-600 mb-2">150+</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">
              Downstream Professionals Placed
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
            C-suite executives and senior management positions for major energy companies and
            projects across the GCC.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- CEO & Senior Management -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="CEO Executive"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <h3 class="text-xl font-semibold mb-2">CEO & Senior Management</h3>
                <p class="text-sm opacity-90">Executive leadership for energy companies</p>
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
                  Chief Operating Officers
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Managing Directors
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Country Managers
                </li>
              </ul>
            </div>
          </div>

          <!-- Operations Directors -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80"
                alt="Operations Director"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <h3 class="text-xl font-semibold mb-2">Operations Directors</h3>
                <p class="text-sm opacity-90">Strategic operations leadership</p>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3 text-sm text-[var(--tm-txt-secondary)]">
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Upstream Operations Directors
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Refinery Operations Directors
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Asset Managers
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  Regional Operations Heads
                </li>
              </ul>
            </div>
          </div>

          <!-- Functional Leadership -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
                alt="Functional Leadership"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <h3 class="text-xl font-semibold mb-2">Functional Leadership</h3>
                <p class="text-sm opacity-90">Department heads and VPs</p>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3 text-sm text-[var(--tm-txt-secondary)]">
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  VP Engineering
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  VP Human Resources
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  VP Business Development
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  VP HSE & Compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technical Professionals Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Technical Professionals
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Engineers, geologists, and specialized technicians driving innovation and operational
            excellence across energy operations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <!-- Engineering Roles -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/images/comm/avatar/petroleumengineer.jpeg"
                  alt="Petroleum Engineer"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-3">
                Engineering
              </h3>
            </div>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Petroleum Engineers</li>
              <li>• Reservoir Engineers</li>
              <li>• Drilling Engineers</li>
              <li>• Process Engineers</li>
              <li>• Pipeline Engineers</li>
              <li>• Chemical Engineers</li>
            </ul>
          </div>

          <!-- Geosciences -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                  alt="Geologist"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-3">
                Geosciences
              </h3>
            </div>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Geologists</li>
              <li>• Geophysicists</li>
              <li>• Reservoir Analysts</li>
              <li>• Seismic Interpreters</li>
              <li>• Petrophysicists</li>
              <li>• Geochemists</li>
            </ul>
          </div>

          <!-- Operations -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80"
                  alt="Operations Specialist"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-3">
                Operations
              </h3>
            </div>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Operations Managers</li>
              <li>• Production Supervisors</li>
              <li>• Field Operators</li>
              <li>• Control Room Operators</li>
              <li>• Shift Supervisors</li>
              <li>• Plant Operators</li>
            </ul>
          </div>

          <!-- HSE & Safety -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80"
                  alt="HSE Specialist"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-3">
                HSE & Safety
              </h3>
            </div>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• HSE Managers</li>
              <li>• Safety Engineers</li>
              <li>• Environmental Specialists</li>
              <li>• Risk Assessors</li>
              <li>• Emergency Response</li>
              <li>• Compliance Officers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Commercial & Support Functions -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Commercial & Support Functions
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Business development, finance, and support roles that drive commercial success and
            operational efficiency.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Commercial Roles -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
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
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3 text-center">Commercial</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Business Development</li>
              <li>• Trading Specialists</li>
              <li>• Commercial Analysts</li>
              <li>• Contract Managers</li>
              <li>• Supply Chain Managers</li>
              <li>• Marketing Managers</li>
            </ul>
          </div>

          <!-- Finance & Strategy -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
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
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3 text-center">
              Finance & Strategy
            </h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Financial Analysts</li>
              <li>• Cost Controllers</li>
              <li>• Strategic Planners</li>
              <li>• Investment Analysts</li>
              <li>• Risk Managers</li>
              <li>• Treasury Specialists</li>
            </ul>
          </div>

          <!-- Technology -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
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
              <li>• Digital Transformation</li>
              <li>• Data Scientists</li>
              <li>• IT Specialists</li>
              <li>• Automation Engineers</li>
              <li>• Cybersecurity Experts</li>
              <li>• Software Engineers</li>
            </ul>
          </div>

          <!-- Support Functions -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto"
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
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3 text-center">
              Support Functions
            </h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• HR Professionals</li>
              <li>• Legal Advisors</li>
              <li>• Administrative Staff</li>
              <li>• Procurement Specialists</li>
              <li>• Quality Assurance</li>
              <li>• Corporate Affairs</li>
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
            VMMC's deep industry knowledge enables us to source talent for specialized and emerging
            roles in the energy sector.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Energy Transition -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Energy Transition
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Professionals driving the shift toward sustainable and renewable energy solutions.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Sustainability Managers</li>
              <li>• Carbon Capture Specialists</li>
              <li>• Renewable Energy Engineers</li>
              <li>• Hydrogen Technology Experts</li>
              <li>• Energy Storage Specialists</li>
            </ul>
          </div>

          <!-- Digital & Innovation -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
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
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="m2 17 10 5 10-5"></path>
                <path d="m2 12 10 5 10-5"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Digital & Innovation
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Technology professionals revolutionizing energy operations through digital solutions.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Digital Transformation Leaders</li>
              <li>• AI/ML Specialists</li>
              <li>• IoT Engineers</li>
              <li>• Robotics & Automation</li>
              <li>• Innovation Managers</li>
            </ul>
          </div>

          <!-- Project Management -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
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
              Project Management
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Experienced leaders managing complex energy infrastructure and development projects.
            </p>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Project Directors</li>
              <li>• Construction Managers</li>
              <li>• EPCM Specialists</li>
              <li>• Commissioning Managers</li>
              <li>• PMO Leaders</li>
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
            Proven track record of matching exceptional talent with leading energy companies
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">500+</div>
            <div class="text-sm opacity-90 uppercase tracking-wider">
              Energy Professionals Placed
            </div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">85%</div>
            <div class="text-sm opacity-90 uppercase tracking-wider">Placement Success Rate</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">50+</div>
            <div class="text-sm opacity-90 uppercase tracking-wider">Different Role Types</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">30</div>
            <div class="text-sm opacity-90 uppercase tracking-wider">Days Average Time-to-Fill</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1000px] px-8 text-center">
        <h2 class="mb-6 text-4xl font-light text-[var(--tm-txt-primary)]">
          Find Your Next Energy Professional
        </h2>
        <p class="mb-8 text-xl leading-relaxed text-[var(--tm-txt-secondary)]">
          Partner with VMMC to access the region's most comprehensive network of energy sector
          talent. From technical specialists to executive leadership, we deliver the professionals
          who drive energy excellence.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:energy@vmmc.com"
            class="inline-flex items-center gap-3 rounded-full bg-[var(--tm-accent-primary)] px-8 py-4 font-medium text-white shadow-[0_4px_20px_rgba(24,144,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(24,144,255,0.4)]"
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
            Contact Our Energy Specialists
          </a>
          <a
            href="tel:+971558296351"
            class="inline-flex items-center gap-3 rounded-full border-2 border-[var(--tm-bd-primary)] bg-transparent px-8 py-4 font-medium text-[var(--tm-txt-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--tm-accent-primary)] hover:bg-[var(--tm-bg-hover)]"
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
    title: 'Key Roles We Fill - Oil & Gas Industry | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive overview of oil & gas roles VMMC fills - from CEOs and engineers to HSE specialists and operations managers. 500+ energy professionals placed across upstream, midstream, and downstream.',
      },
      {
        name: 'keywords',
        content:
          'oil gas jobs, petroleum engineers, energy executives, drilling engineers, HSE specialists, operations managers, reservoir engineers, UAE energy jobs, GCC oil gas careers',
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
