<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[60vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          alt="Professional Consultants Team"
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
          <span class="font-semibold text-blue-400">Contact Specialists</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-8 md:px-0 md:text-6xl lg:text-7xl"
        >
          Meet Our Energy Experts
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-white/90 drop-shadow-lg sm:text-lg md:mb-12 md:px-0 md:text-xl lg:text-2xl"
        >
          Connect directly with VMMC's specialized consultants who understand the intricacies of GCC
          energy markets and deliver exceptional talent solutions.
        </p>

        <!-- Key Stats -->
        <div
          class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12 lg:gap-16"
        >
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">15+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">8</div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Average Consultant Tenure
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-orange-400 drop-shadow-lg">24/7</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Global Support</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Leadership Team Section -->
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
            Leadership Team
          </div>
          <h2 class="mb-6 text-4xl lg:text-5xl font-light text-[var(--tm-txt-primary)]">
            Senior Leadership & Directors
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed">
            Our executive team combines decades of energy sector experience with deep GCC market
            knowledge to drive strategic initiatives and client success.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Managing Director -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-4"
          >
            <div class="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80"
                alt="Managing Director"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h3 class="text-2xl font-semibold mb-2">Ahmed Al-Rashid</h3>
                <p class="text-lg opacity-90">Managing Director, GCC Operations</p>
              </div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="m2 17 10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-[var(--tm-txt-primary)]">18+ Years Experience</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">Energy Sector Leadership</div>
                </div>
              </div>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Former VP at major NOC with extensive upstream operations experience. Leads
                strategic initiatives across UAE, Saudi Arabia, and Qatar markets.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Executive Search & Board Advisory
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Strategic Emiratisation Planning
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    C-Suite Talent Acquisition
                  </span>
                </div>
              </div>

              <div class="flex gap-3">
                <a
                  href="mailto:ahmed.rashid@vmmc.com"
                  class="flex-1 bg-[var(--tm-accent-primary)] text-white px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-secondary)] hover:-translate-y-1"
                >
                  Contact Ahmed
                </a>
                <a
                  href="tel:+971501234567"
                  class="w-12 h-12 bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-card)] rounded-xl flex items-center justify-center text-[var(--tm-accent-primary)] transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Energy Practice Director -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-4"
          >
            <div class="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Energy Practice Director"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h3 class="text-2xl font-semibold mb-2">Dr. Elena Rodriguez</h3>
                <p class="text-lg opacity-90">Director, Energy Practice</p>
              </div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white"
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
                    <path d="M12 1v6m0 6v6"></path>
                    <path d="m15 9-3 3-3-3"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-[var(--tm-txt-primary)]">15+ Years Experience</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">
                    Technical Recruitment Expert
                  </div>
                </div>
              </div>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Chemical engineer turned recruitment specialist with PhD in Petroleum Engineering.
                Expert in placing technical talent from drilling engineers to reservoir specialists
                across major energy projects.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Technical & Engineering Roles
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Upstream Operations Specialists
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Project-Based Recruitment
                  </span>
                </div>
              </div>

              <div class="flex gap-3">
                <a
                  href="mailto:elena.rodriguez@vmmc.com"
                  class="flex-1 bg-[var(--tm-accent-primary)] text-white px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-secondary)] hover:-translate-y-1"
                >
                  Contact Elena
                </a>
                <a
                  href="tel:+971502345678"
                  class="w-12 h-12 bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-card)] rounded-xl flex items-center justify-center text-[var(--tm-accent-primary)] transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Emiratisation Specialist -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-4"
          >
            <div class="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                alt="Emiratisation Specialist"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h3 class="text-2xl font-semibold mb-2">Khalid Al-Mansoori</h3>
                <p class="text-lg opacity-90">Senior Director, Emiratisation</p>
              </div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white"
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
                  <div class="font-semibold text-[var(--tm-txt-primary)]">12+ Years Experience</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">UAE Nationals Expert</div>
                </div>
              </div>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                UAE national with deep government relations and local talent network. Specializes in
                meeting emiratisation targets while maintaining operational excellence.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    UAE National Talent Development
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Compliance & Regulatory Affairs
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">Government Relations</span>
                </div>
              </div>

              <div class="flex gap-3">
                <a
                  href="mailto:khalid.mansoori@vmmc.com"
                  class="flex-1 bg-[var(--tm-accent-primary)] text-white px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-secondary)] hover:-translate-y-1"
                >
                  Contact Khalid
                </a>
                <a
                  href="tel:+971503456789"
                  class="w-12 h-12 bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-card)] rounded-xl flex items-center justify-center text-[var(--tm-accent-primary)] transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Specialized Consultants Section -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Specialized Consultants
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Industry-specific experts with deep functional knowledge and extensive placement
            experience across all energy sectors.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Upstream Specialist -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                alt="Upstream Specialist"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-2">
              Marcus Johnson
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] text-center mb-4">
              Senior Consultant, Upstream
            </p>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Drilling Engineers</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Reservoir Specialists</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Production Engineers</span>
              </div>
            </div>
            <div class="flex gap-2">
              <a
                href="mailto:marcus.johnson@vmmc.com"
                class="flex-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] px-3 py-2 rounded-lg text-xs font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
              >
                Email
              </a>
              <a
                href="tel:+971504567890"
                class="w-8 h-8 bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-card)] rounded-lg flex items-center justify-center text-[var(--tm-accent-primary)] transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Downstream Specialist -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80"
                alt="Downstream Specialist"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-2">
              Fatima Al-Zahra
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] text-center mb-4">
              Principal Consultant, Downstream
            </p>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Process Engineers</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Refinery Operations</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Petrochemicals</span>
              </div>
            </div>
            <div class="flex gap-2">
              <a
                href="mailto:fatima.zahra@vmmc.com"
                class="flex-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] px-3 py-2 rounded-lg text-xs font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
              >
                Email
              </a>
              <a
                href="tel:+971505678901"
                class="w-8 h-8 bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-card)] rounded-lg flex items-center justify-center text-[var(--tm-accent-primary)] transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- HSE Specialist -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80"
                alt="HSE Specialist"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-2">
              David Thompson
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] text-center mb-4">
              Senior Consultant, HSE & Safety
            </p>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">HSE Managers</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Safety Engineers</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">
                  Environmental Specialists
                </span>
              </div>
            </div>
            <div class="flex gap-2">
              <a
                href="mailto:david.thompson@vmmc.com"
                class="flex-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] px-3 py-2 rounded-lg text-xs font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
              >
                Email
              </a>
              <a
                href="tel:+971506789012"
                class="w-8 h-8 bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-card)] rounded-lg flex items-center justify-center text-[var(--tm-accent-primary)] transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Digital Transformation -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&q=80"
                alt="Digital Specialist"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-2">
              Priya Sharma
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] text-center mb-4">
              Lead Consultant, Digital & Tech
            </p>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Data Scientists</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">AI/ML Engineers</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Digital Leaders</span>
              </div>
            </div>
            <div class="flex gap-2">
              <a
                href="mailto:priya.sharma@vmmc.com"
                class="flex-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] px-3 py-2 rounded-lg text-xs font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
              >
                Email
              </a>
              <a
                href="tel:+971507890123"
                class="w-8 h-8 bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-card)] rounded-lg flex items-center justify-center text-[var(--tm-accent-primary)] transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Methods Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Multiple Ways to Connect
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Choose the communication method that works best for your timeline and preferences.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Direct Phone -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
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
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Direct Call</h3>
            <p class="text-[var(--tm-txt-secondary)] mb-6">
              Speak directly with our consultants for immediate assistance and personalized
              guidance.
            </p>
            <a
              href="tel:+971558296351"
              class="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-green-600"
            >
              Call Now
            </a>
          </div>

          <!-- Email -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
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
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Email Us</h3>
            <p class="text-[var(--tm-txt-secondary)] mb-6">
              Send detailed requirements and receive comprehensive proposals within 24 hours.
            </p>
            <a
              href="mailto:energy@vmmc.com"
              class="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-blue-600"
            >
              Send Email
            </a>
          </div>

          <!-- WhatsApp -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white mx-auto mb-6"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.473 3.516"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">WhatsApp</h3>
            <p class="text-[var(--tm-txt-secondary)] mb-6">
              Quick messages and real-time updates on your recruitment requirements.
            </p>
            <a
              href="https://wa.me/971558296351"
              class="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-green-700"
            >
              Chat Now
            </a>
          </div>

          <!-- Schedule Meeting -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-8 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-6"
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
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                ></rect>
                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                ></line>
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                ></line>
                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                ></line>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Schedule Meeting
            </h3>
            <p class="text-[var(--tm-txt-secondary)] mb-6">
              Book a dedicated consultation to discuss complex requirements and strategic planning.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-purple-600 no-underline"
            >
              Book Meeting
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Office Locations -->
    <div class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="text-center mb-16">
          <h2 class="mb-4 text-4xl font-light text-[var(--tm-txt-primary)]">
            Global Office Network
          </h2>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            VMMC operates from strategic locations across key energy markets, ensuring local
            expertise and global reach.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Dubai Office -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Dubai, UAE</h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Regional Headquarters</p>
              </div>
            </div>

            <div class="space-y-4 mb-6">
              <div class="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-[var(--tm-txt-secondary)] mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
                <span class="text-sm text-[var(--tm-txt-secondary)]">
                  Aspin Commercial Tower, Office 2818, DIFC
                </span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-[var(--tm-txt-secondary)]"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
                <span class="text-sm text-[var(--tm-txt-secondary)]">+971 55 829 6351</span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-[var(--tm-txt-secondary)]"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span class="text-sm text-[var(--tm-txt-secondary)]">dubai@vmmc.com</span>
              </div>
            </div>

            <div class="p-4 bg-[var(--tm-bg-secondary)] rounded-xl">
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                <strong>Business Hours:</strong>
                Sunday - Thursday, 8:00 AM - 6:00 PM GST
              </p>
            </div>
          </div>

          <!-- Singapore Office -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Singapore</h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Asia-Pacific Hub</p>
              </div>
            </div>

            <div class="space-y-4 mb-6">
              <div class="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-[var(--tm-txt-secondary)] mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
                <span class="text-sm text-[var(--tm-txt-secondary)]">
                  The Guoco Tower, Office 1801
                </span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-[var(--tm-txt-secondary)]"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
                <span class="text-sm text-[var(--tm-txt-secondary)]">+65 6386 8322</span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-[var(--tm-txt-secondary)]"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span class="text-sm text-[var(--tm-txt-secondary)]">singapore@vmmc.com</span>
              </div>
            </div>

            <div class="p-4 bg-[var(--tm-bg-secondary)] rounded-xl">
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                <strong>Business Hours:</strong>
                Monday - Friday, 9:00 AM - 6:00 PM SGT
              </p>
            </div>
          </div>

          <!-- Malaysia Office -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                  Kuala Lumpur, Malaysia
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Southeast Asia Operations</p>
              </div>
            </div>

            <div class="space-y-4 mb-6">
              <div class="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-[var(--tm-txt-secondary)] mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
                <span class="text-sm text-[var(--tm-txt-secondary)]">
                  Aspire Tower, 07-05, KL Eco City, 59200
                </span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-[var(--tm-txt-secondary)]"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
                <span class="text-sm text-[var(--tm-txt-secondary)]">+60 322 469 000</span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-[var(--tm-txt-secondary)]"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span class="text-sm text-[var(--tm-txt-secondary)]">malaysia@vmmc.com</span>
              </div>
            </div>

            <div class="p-4 bg-[var(--tm-bg-secondary)] rounded-xl">
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                <strong>Business Hours:</strong>
                Monday - Friday, 9:00 AM - 6:00 PM MYT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Response Promise -->
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

      <div class="container relative z-1 mx-auto max-w-[1200px] px-8 text-center">
        <h2 class="mb-6 text-4xl font-light">Our Response Commitment</h2>
        <p class="mb-12 text-xl leading-relaxed opacity-95 max-w-3xl mx-auto">
          We understand that talent needs are often urgent. Our team is committed to providing
          rapid, professional responses to all inquiries.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div
              class="text-6xl font-bold mb-4 bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto"
            >
              1
            </div>
            <h3 class="text-xl font-semibold mb-3">Hour</h3>
            <p class="text-white/90">Phone call acknowledgment and initial response via email</p>
          </div>
          <div class="text-center">
            <div
              class="text-6xl font-bold mb-4 bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto"
            >
              4
            </div>
            <h3 class="text-xl font-semibold mb-3">Hours</h3>
            <p class="text-white/90">
              Detailed requirement analysis and preliminary candidate suggestions
            </p>
          </div>
          <div class="text-center">
            <div
              class="text-6xl font-bold mb-4 bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto"
            >
              24
            </div>
            <h3 class="text-xl font-semibold mb-3">Hours</h3>
            <p class="text-white/90">Complete proposal with shortlisted candidates and timeline</p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+971558296351"
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
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            Call Our Energy Team Now
          </a>
          <a
            href="mailto:energy@vmmc.com"
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
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              ></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Send Detailed Requirements
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
    title: 'Contact Energy Specialists - Expert Oil & Gas Consultants | VMMC',
    meta: [
      {
        name: 'description',
        content:
          "Connect with VMMC's specialized oil & gas consultants across Dubai, Singapore, and Malaysia. Expert recruiters with 15+ years experience in energy sector talent acquisition and emiratisation.",
      },
      {
        name: 'keywords',
        content:
          'oil gas consultants, energy recruiters, emiratisation specialists, GCC talent experts, petroleum engineers recruiters, HSE specialists consultants, Dubai energy office',
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

  /* Card hover animations */
  .group:hover img {
    transform: scale(1.05);
  }

  /* Dark mode adjustments */
  .dark .bg-white {
    background: var(--tm-bg-card);
  }

  .dark .border-\[var\(--tm-bd-card\)\] {
    border-color: var(--tm-bd-secondary);
  }

  .dark .bg-\[var\(--tm-bg-badge\)\] {
    background: var(--tm-bg-whiteAlpha10);
    border-color: var(--tm-bd-transparent);
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

    .grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .p-8 {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-4 {
      grid-template-columns: 1fr;
    }

    .text-3xl.md\:text-4xl {
      font-size: 1.875rem;
    }
  }
</style>
