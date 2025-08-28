<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section with Background Image -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[75vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
          alt="Oil & Gas Industry"
          class="h-full w-full object-cover object-center"
        />
        <!-- Gradient Overlays -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"
        ></div>
      </div>

      <!-- Background Decorations -->
      <div class="absolute inset-0">
        <div
          class="absolute right-20 top-20 h-40 w-40 rounded-full opacity-10"
          style="background-color: var(--tm-accent-primary)"
        ></div>
        <div
          class="absolute bottom-32 left-20 h-24 w-24 rounded-full opacity-10"
          style="background-color: var(--tm-accent-secondary)"
        ></div>
      </div>

      <div class="relative z-10 mx-auto w-full max-w-[1400px] px-4 text-center md:px-8">
        <!-- Breadcrumb Navigation -->
        <div
          class="mx-auto mb-8 flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs backdrop-blur-md animate-[fade-in-up_0.8s_ease-out_forwards] md:gap-3 md:px-6 md:py-3 sm:text-sm"
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
          <span class="font-semibold text-blue-400">Oil & Gas</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl animate-[fade-in-up_0.8s_ease-out_0.2s_forwards] opacity-0 sm:text-5xl md:mb-8 md:px-0 md:text-6xl lg:text-7xl"
        >
          Oil & Gas Industry Solutions
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-white/90 drop-shadow-lg animate-[fade-in-up_0.8s_ease-out_0.4s_forwards] opacity-0 sm:text-lg md:mb-12 md:px-0 md:text-xl lg:text-2xl"
        >
          Specialized executive search, emiratisation programs, and comprehensive talent solutions
          for upstream, midstream, and downstream energy operations across the GCC region.
        </p>

        <!-- Key Stats -->
        <div
          class="flex flex-col items-center justify-center gap-6 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards] opacity-0 sm:flex-row sm:gap-12 lg:gap-16"
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
              Oil & Gas Companies Served
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">85%</div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Emiratisation Success Rate
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Industry Overview Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="mb-6 text-4xl font-light text-[var(--tm-txt-primary)]">
              Leading Energy Sector Recruitment in the GCC
            </h2>
            <p class="mb-6 text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              With over 15 years of specialized experience in the energy sector, VMMC understands
              the unique challenges facing oil & gas companies in the GCC region. From major NOCs to
              international oil companies and service providers, we deliver comprehensive talent
              solutions that drive operational excellence.
            </p>
            <p class="mb-8 text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Our deep industry knowledge spans upstream exploration and production, midstream
              processing and transportation, downstream refining and marketing, plus emerging energy
              transition technologies.
            </p>

            <!-- Key Specializations -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-xl flex items-center justify-center text-white"
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
                <div>
                  <h3 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Executive Search</h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    C-suite and senior leadership recruitment for energy companies
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-xl flex items-center justify-center text-white"
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
                <div>
                  <h3 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Emiratisation Programs
                  </h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Specialized UAE nationals recruitment and development
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-xl flex items-center justify-center text-white"
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
                <div>
                  <h3 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Safety & Compliance
                  </h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    HSE professionals and regulatory compliance experts
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-xl flex items-center justify-center text-white"
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
                <div>
                  <h3 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Technical Talent</h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Engineers, geologists, and specialized technicians
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Image -->
          <div class="relative">
            <div class="relative rounded-3xl overflow-hidden shadow-[var(--tm-shadow-hero)]">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80"
                alt="Oil & Gas Operations"
                class="w-full h-96 object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-br from-[var(--tm-accent-primary)]/20 to-transparent"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Services Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Comprehensive Oil & Gas Recruitment Services
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            From exploration to production, refining to distribution - we provide specialized talent
            solutions across the entire energy value chain.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div
            class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <path d="m2 12 10 5 10-5"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Executive Leadership
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                C-suite executives, general managers, and senior leadership for major energy
                projects and operations.
              </p>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Chief Executive Officers
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Operations Directors
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Country Managers
              </div>
            </div>
          </div>

          <!-- Service Card 2 -->
          <div
            class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
              >
                <svg
                  width="32"
                  height="32"
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
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Technical Specialists
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                Petroleum engineers, geologists, drilling specialists, and technical experts across
                all energy disciplines.
              </p>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Petroleum Engineers
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Reservoir Engineers
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Process Engineers
              </div>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div
            class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                HSE & Compliance
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                Health, safety, environment specialists and regulatory compliance experts ensuring
                operational safety standards.
              </p>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                HSE Managers
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Safety Engineers
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Environmental Specialists
              </div>
            </div>
          </div>

          <!-- Service Card 4 -->
          <div
            class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line
                    x1="12"
                    y1="22.08"
                    x2="12"
                    y2="12"
                  ></line>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Project Management
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                Experienced project managers and coordinators for complex energy infrastructure
                projects.
              </p>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Project Managers
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Construction Managers
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Operations Coordinators
              </div>
            </div>
          </div>

          <!-- Service Card 5 -->
          <div
            class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Maintenance & Operations
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                Maintenance engineers, operators, and technicians for continuous operations and
                asset integrity.
              </p>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Maintenance Engineers
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Plant Operators
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Instrumentation Technicians
              </div>
            </div>
          </div>

          <!-- Service Card 6 -->
          <div
            class="group relative rounded-3xl border border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Energy Transition
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                Renewable energy specialists, carbon management experts, and sustainability
                professionals for energy transition initiatives.
              </p>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Sustainability Managers
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Carbon Specialists
              </div>
              <div class="flex items-center text-sm text-[var(--tm-txt-secondary)]">
                <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mr-3"></span>
                Renewable Energy Engineers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Industry Expertise Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Deep Oil & Gas Industry Knowledge
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)]">
            15+ years serving major energy companies across the GCC region
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <!-- Upstream -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
            >
              <svg
                width="40"
                height="40"
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
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Exploration, drilling, and production operations. We place geophysicists, drilling
              engineers, production engineers, and field operations specialists.
            </p>
          </div>

          <!-- Midstream -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
            >
              <svg
                width="40"
                height="40"
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
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Transportation, storage, and processing. We recruit pipeline engineers, logistics
              coordinators, terminal operators, and processing specialists.
            </p>
          </div>

          <!-- Downstream -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
            >
              <svg
                width="40"
                height="40"
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
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Refining, petrochemicals, and marketing. We source refinery managers, process
              engineers, chemical engineers, and marketing professionals.
            </p>
          </div>
        </div>

        <!-- Success Metrics -->
        <div
          class="bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-3xl p-12 text-white text-center"
        >
          <h3 class="text-3xl font-light mb-8">Our Track Record in Energy</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div class="text-4xl font-bold mb-2">500+</div>
              <div class="text-sm opacity-90 uppercase tracking-wider">Energy Professionals</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">50+</div>
              <div class="text-sm opacity-90 uppercase tracking-wider">Oil & Gas Companies</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">15</div>
              <div class="text-sm opacity-90 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">85%</div>
              <div class="text-sm opacity-90 uppercase tracking-wider">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Key Roles Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Key Roles We Fill in Oil & Gas
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)]">
            From entry-level positions to C-suite executives across all energy sectors
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Engineering</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Petroleum Engineers</li>
              <li>• Reservoir Engineers</li>
              <li>• Drilling Engineers</li>
              <li>• Process Engineers</li>
              <li>• Pipeline Engineers</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Geosciences</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Geologists</li>
              <li>• Geophysicists</li>
              <li>• Reservoir Analysts</li>
              <li>• Seismic Interpreters</li>
              <li>• Petrophysicists</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Operations</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Operations Managers</li>
              <li>• Production Supervisors</li>
              <li>• Field Operators</li>
              <li>• Control Room Operators</li>
              <li>• Shift Supervisors</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">HSE</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• HSE Managers</li>
              <li>• Safety Engineers</li>
              <li>• Environmental Specialists</li>
              <li>• Risk Assessors</li>
              <li>• Emergency Response</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Commercial</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Business Development</li>
              <li>• Trading Specialists</li>
              <li>• Commercial Analysts</li>
              <li>• Contract Managers</li>
              <li>• Supply Chain Managers</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Finance & Strategy</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Financial Analysts</li>
              <li>• Cost Controllers</li>
              <li>• Strategic Planners</li>
              <li>• Investment Analysts</li>
              <li>• Risk Managers</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Technology</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• Digital Transformation</li>
              <li>• Data Scientists</li>
              <li>• IT Specialists</li>
              <li>• Automation Engineers</li>
              <li>• Cybersecurity Experts</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Support Functions</h4>
            <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
              <li>• HR Professionals</li>
              <li>• Legal Advisors</li>
              <li>• Administrative Staff</li>
              <li>• Procurement Specialists</li>
              <li>• Quality Assurance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Emiratisation Focus Section -->
    <div
      class="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden"
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <span class="w-2 h-2 bg-white rounded-full"></span>
              Emiratisation Excellence
            </div>

            <h2 class="text-4xl font-light mb-6">UAE Nationals Development in Energy Sector</h2>
            <p class="text-lg leading-relaxed opacity-95 mb-8">
              As leaders in emiratisation for the energy industry, we have successfully placed
              hundreds of UAE nationals in technical and managerial roles across major oil and gas
              companies. Our comprehensive approach includes talent identification, skills
              development, and long-term career progression planning.
            </p>

            <div class="grid grid-cols-2 gap-8">
              <div>
                <div class="text-3xl font-bold mb-2">85%</div>
                <div class="text-sm opacity-80 uppercase tracking-wider">Success Rate</div>
              </div>
              <div>
                <div class="text-3xl font-bold mb-2">200+</div>
                <div class="text-sm opacity-80 uppercase tracking-wider">UAE Nationals Placed</div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
              <h3 class="text-2xl font-semibold mb-6">Our Emiratisation Process</h3>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div
                    class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0"
                  >
                    1
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Talent Identification</h4>
                    <p class="text-sm opacity-90">
                      Comprehensive screening of UAE national candidates through our extensive local
                      network
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0"
                  >
                    2
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Skills Assessment</h4>
                    <p class="text-sm opacity-90">
                      Technical evaluation and competency mapping aligned with industry requirements
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0"
                  >
                    3
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Training & Development</h4>
                    <p class="text-sm opacity-90">
                      Customized training programs to bridge skill gaps and ensure job readiness
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0"
                  >
                    4
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Placement & Follow-up</h4>
                    <p class="text-sm opacity-90">
                      Successful integration and ongoing career progression support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Market Intelligence Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            GCC Energy Market Intelligence
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)]">
            Stay informed with our latest insights and trends in the oil & gas sector
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Market Insight 1 -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-4"
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
              Salary Trends 2025
            </h3>
            <p class="text-[var(--tm-txt-secondary)] mb-4 leading-relaxed">
              Latest compensation analysis for oil & gas professionals across the GCC, including
              emiratisation premium insights.
            </p>
            <a
              href="#"
              class="text-[var(--tm-accent-primary)] font-medium hover:text-[var(--tm-accent-secondary)] transition-colors"
            >
              View Report →
            </a>
          </div>

          <!-- Market Insight 2 -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4"
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
              Energy Transition Skills
            </h3>
            <p class="text-[var(--tm-txt-secondary)] mb-4 leading-relaxed">
              How oil & gas professionals can transition into renewable energy and sustainability
              roles in the evolving energy landscape.
            </p>
            <a
              href="#"
              class="text-[var(--tm-accent-primary)] font-medium hover:text-[var(--tm-accent-secondary)] transition-colors"
            >
              Read More →
            </a>
          </div>

          <!-- Market Insight 3 -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-4"
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
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Talent Shortage Analysis
            </h3>
            <p class="text-[var(--tm-txt-secondary)] mb-4 leading-relaxed">
              Critical skill gaps in the GCC energy sector and strategic recommendations for talent
              acquisition and development.
            </p>
            <a
              href="#"
              class="text-[var(--tm-accent-primary)] font-medium hover:text-[var(--tm-accent-secondary)] transition-colors"
            >
              Download →
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Stories Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Success Stories in Energy
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)]">
            Real results from our oil & gas recruitment partnerships
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Success Story 1 -->
          <div
            class="bg-gradient-to-br from-white to-gray-50 dark:from-[var(--tm-bg-card)] dark:to-[var(--tm-bg-secondary)] rounded-3xl p-8 border border-[var(--tm-bd-card)]"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Major NOC Leadership Search
                </h3>
                <div class="text-sm text-[var(--tm-txt-light)] uppercase tracking-wider">
                  Upstream Operations
                </div>
              </div>
            </div>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Successfully recruited a General Manager for Upstream Operations for a leading GCC
              national oil company, delivering a UAE national candidate with 20+ years international
              experience within 45 days.
            </p>
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--tm-bd-light)]">
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">45</div>
                <div class="text-xs text-[var(--tm-txt-light)] uppercase tracking-wider">Days</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">UAE</div>
                <div class="text-xs text-[var(--tm-txt-light)] uppercase tracking-wider">
                  National
                </div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">GM</div>
                <div class="text-xs text-[var(--tm-txt-light)] uppercase tracking-wider">Level</div>
              </div>
            </div>
          </div>

          <!-- Success Story 2 -->
          <div
            class="bg-gradient-to-br from-white to-gray-50 dark:from-[var(--tm-bg-card)] dark:to-[var(--tm-bg-secondary)] rounded-3xl p-8 border border-[var(--tm-bd-card)]"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
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
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Bulk Engineering Recruitment
                </h3>
                <div class="text-sm text-[var(--tm-txt-light)] uppercase tracking-wider">
                  Refinery Expansion Project
                </div>
              </div>
            </div>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Delivered 50 petroleum and process engineers for a major refinery expansion project,
              including 30% UAE nationals, completing the recruitment drive 2 weeks ahead of
              schedule.
            </p>
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--tm-bd-light)]">
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">50</div>
                <div class="text-xs text-[var(--tm-txt-light)] uppercase tracking-wider">
                  Engineers
                </div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">30%</div>
                <div class="text-xs text-[var(--tm-txt-light)] uppercase tracking-wider">
                  Emirates
                </div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">-2</div>
                <div class="text-xs text-[var(--tm-txt-light)] uppercase tracking-wider">
                  Weeks Early
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Specialists Section -->
    <div
      class="py-20 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] text-white relative overflow-hidden"
    >
      <!-- Animated Background -->
      <div
        class="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] animate-[rotate_30s_linear_infinite]"
      >
        <div
          class="h-full w-full"
          style="background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
        ></div>
      </div>

      <div class="container relative z-1 mx-auto max-w-[1000px] px-8 text-center">
        <h2 class="mb-6 text-4xl font-light">Connect with Our Energy Specialists</h2>
        <p class="mb-8 text-xl leading-relaxed opacity-95">
          Ready to discuss your oil & gas recruitment needs? Our specialized consultants understand
          the unique challenges of the energy sector and are here to help you build exceptional
          teams.
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
            Email Our Energy Team
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

        <div class="mt-12 text-center">
          <p class="text-white/80 text-sm">
            <strong>Dubai Office:</strong>
            Aspin Commercial Tower, Office 2818, DIFC
            <br />
            <strong>Singapore Office:</strong>
            The Guoco Tower, Office 1801
            <br />
            <strong>Malaysia Office:</strong>
            Aspire Tower, 07-05, KL Eco City
          </p>
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
    title: 'Oil & Gas Recruitment Services - Executive Search & Emiratisation | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading oil & gas recruitment services in GCC. Executive search, emiratisation programs, and technical talent solutions for upstream, midstream, and downstream operations. 500+ energy professionals placed.',
      },
      {
        name: 'keywords',
        content:
          'oil gas recruitment GCC, petroleum engineers UAE, emiratisation energy sector, executive search oil gas, HSE specialists, drilling engineers, reservoir engineers, energy transition recruitment',
      },
    ],
  })

  definePageMeta({
    layout: 'default',
  })
</script>

<style>
  /* Custom animations */
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

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
