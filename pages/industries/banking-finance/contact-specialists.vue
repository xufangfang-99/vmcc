<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[60vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80"
          alt="Financial Services Team"
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
            to="/industries/banking-finance"
            class="font-medium text-white/80 transition-colors duration-300 hover:text-blue-400"
          >
            Banking & Finance
          </NuxtLink>
          <span class="font-light text-white/50">/</span>
          <span class="font-semibold text-blue-400">Contact Specialists</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-8 md:px-0 md:text-6xl lg:text-7xl"
        >
          Meet Our Financial Services Experts
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-4xl px-4 text-base leading-relaxed text-white/90 drop-shadow-lg sm:text-lg md:mb-12 md:px-0 md:text-xl lg:text-2xl"
        >
          Connect directly with VMMC's specialized consultants who understand the complexities of
          global financial markets and deliver exceptional talent solutions across banking, fintech,
          and capital markets.
        </p>

        <!-- Key Stats -->
        <div
          class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12 lg:gap-16"
        >
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">20+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">12</div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Average Consultant Tenure
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">24/7</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Global Coverage</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Leadership Team Section -->
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
            Leadership Team
          </div>
          <h2 class="mb-6 text-4xl lg:text-5xl font-light text-[var(--tm-txt-primary)]">
            Senior Leadership & Practice Directors
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed">
            Our executive team combines decades of financial services experience with deep market
            knowledge across global financial centers to drive strategic initiatives and client
            success.
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
                <h3 class="text-2xl font-semibold mb-2">Michael Chen</h3>
                <p class="text-lg opacity-90">Managing Director, Financial Services</p>
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
                <div>
                  <div class="font-semibold text-[var(--tm-txt-primary)]">22+ Years Experience</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">
                    Financial Services Leadership
                  </div>
                </div>
              </div>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Former Chief Operating Officer at leading investment bank with extensive experience
                across capital markets, wealth management, and digital banking initiatives across
                Asia-Pacific and Middle East.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    C-Suite Executive Search
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Digital Transformation Strategy
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Cross-Border Banking Solutions
                  </span>
                </div>
              </div>

              <div class="flex gap-3">
                <a
                  href="mailto:michael.chen@vmmc.com"
                  class="flex-1 bg-[var(--tm-accent-primary)] text-white px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-secondary)] hover:-translate-y-1"
                >
                  Contact Michael
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

          <!-- FinTech Practice Director -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-4"
          >
            <div class="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="FinTech Practice Director"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h3 class="text-2xl font-semibold mb-2">Dr. Sarah Williams</h3>
                <p class="text-lg opacity-90">Director, FinTech & Innovation</p>
              </div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white"
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
                <div>
                  <div class="font-semibold text-[var(--tm-txt-primary)]">18+ Years Experience</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">
                    FinTech & Digital Banking Expert
                  </div>
                </div>
              </div>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Computer scientist turned financial technology specialist with PhD in Blockchain
                Systems. Expert in placing digital banking talent from blockchain developers to
                chief digital officers across major fintech initiatives and traditional bank
                transformations.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Blockchain & Cryptocurrency
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Digital Banking Platforms
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">AI & Machine Learning</span>
                </div>
              </div>

              <div class="flex gap-3">
                <a
                  href="mailto:sarah.williams@vmmc.com"
                  class="flex-1 bg-[var(--tm-accent-primary)] text-white px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-secondary)] hover:-translate-y-1"
                >
                  Contact Sarah
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

          <!-- Islamic Finance Specialist -->
          <div
            class="group bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl overflow-hidden border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-4"
          >
            <div class="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                alt="Islamic Finance Specialist"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h3 class="text-2xl font-semibold mb-2">Omar Al-Hashimi</h3>
                <p class="text-lg opacity-90">Senior Director, Islamic Finance</p>
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
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9,22 9,12 15,12 15,22"></polyline>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-[var(--tm-txt-primary)]">16+ Years Experience</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">Islamic Banking Expert</div>
                </div>
              </div>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                GCC national with deep expertise in Islamic finance and Sharia-compliant banking
                solutions. Specializes in building teams for Islamic banks, takaful companies, and
                sukuk markets across Middle East and Southeast Asia.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Sharia-Compliant Banking
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Sukuk & Islamic Capital Markets
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></span>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">Takaful & Insurance</span>
                </div>
              </div>

              <div class="flex gap-3">
                <a
                  href="mailto:omar.hashimi@vmmc.com"
                  class="flex-1 bg-[var(--tm-accent-primary)] text-white px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:bg-[var(--tm-accent-secondary)] hover:-translate-y-1"
                >
                  Contact Omar
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
            experience across all financial services sectors.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Investment Banking Specialist -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-2xl p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
          >
            <div class="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                alt="Investment Banking Specialist"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-semibold text-[var(--tm-txt-primary)] text-center mb-2">
              James Anderson
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] text-center mb-4">
              Senior Consultant, Investment Banking
            </p>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">M&A Specialists</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Capital Markets</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span class="text-xs text-[var(--tm-txt-secondary)]">Equity Research</span>
              </div>
            </div>
            <div class="flex gap-2">
              <a
                href="mailto:james.anderson@vmmc.com"
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
                <span class="text-sm text-[var(--tm-txt-secondary)]">+65 6386 8322</span>
              </a>
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

          <!-- Hong Kong Office -->
          <div
            class="bg-white dark:bg-[var(--tm-bg-card)] rounded-3xl p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white"
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
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Hong Kong</h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Greater China Financial Gateway
                </p>
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
                  International Commerce Centre, 38F, Central
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
                <span class="text-sm text-[var(--tm-txt-secondary)]">+852 2801 6328</span>
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
                <span class="text-sm text-[var(--tm-txt-secondary)]">hongkong@vmmc.com</span>
              </div>
            </div>

            <div class="p-4 bg-[var(--tm-bg-secondary)] rounded-xl">
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                <strong>Business Hours:</strong>
                Monday - Friday, 9:00 AM - 6:00 PM HKT
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
          We understand that financial services talent needs are often time-sensitive. Our team is
          committed to providing rapid, professional responses to all inquiries with deep market
          expertise.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div
              class="text-6xl font-bold mb-4 bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto"
            >
              1
            </div>
            <h3 class="text-xl font-semibold mb-3">Hour</h3>
            <p class="text-white/90">
              Initial response and requirement clarification via preferred channel
            </p>
          </div>
          <div class="text-center">
            <div
              class="text-6xl font-bold mb-4 bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto"
            >
              4
            </div>
            <h3 class="text-xl font-semibold mb-3">Hours</h3>
            <p class="text-white/90">
              Market analysis and preliminary candidate shortlist with compensation benchmarks
            </p>
          </div>
          <div class="text-center">
            <div
              class="text-6xl font-bold mb-4 bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto"
            >
              24
            </div>
            <h3 class="text-xl font-semibold mb-3">Hours</h3>
            <p class="text-white/90">
              Comprehensive proposal with detailed candidate profiles and timeline
            </p>
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
            Call Our Financial Services Team
          </a>
          <a
            href="mailto:finance@vmmc.com"
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
    title: 'Contact Financial Services Specialists - Expert Banking & Finance Consultants | VMMC',
    meta: [
      {
        name: 'description',
        content:
          "Connect with VMMC's specialized banking & finance consultants across Dubai, Singapore, and Hong Kong. Expert recruiters with 20+ years experience in financial services, fintech, and Islamic banking talent acquisition.",
      },
      {
        name: 'keywords',
        content:
          'banking finance consultants, fintech recruiters, investment banking specialists, Islamic finance experts, wealth management consultants, risk compliance recruiters, financial services talent',
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

  /* Financial services theme enhancements */
  .bg-gradient-to-br:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }

  /* Enhanced card interactions */
  .hover\:-translate-y-4:hover {
    transform: translateY(-1rem);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  /* Button enhancements */
  .hover\:-translate-y-1:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
</style>
