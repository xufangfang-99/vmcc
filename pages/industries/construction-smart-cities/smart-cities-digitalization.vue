<template>
  <div class="smart-cities-page min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-25 md:py-30 bg-[var(--tm-bg-secondary)]">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80"
          alt="Smart Cities and Digital Infrastructure"
          class="h-full w-full object-cover object-center opacity-30"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-[var(--tm-bg-primary)]/80 via-[var(--tm-bg-primary)]/60 to-[var(--tm-bg-primary)]/90"
        ></div>
      </div>

      <div class="relative z-10 max-w-300 mx-auto px-6">
        <!-- Breadcrumb -->
        <div class="mb-8 flex items-center gap-3 text-sm">
          <NuxtLink
            to="/"
            class="text-[var(--tm-txt-secondary)] hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
          >
            Home
          </NuxtLink>
          <span class="text-[var(--tm-txt-light)]">/</span>
          <NuxtLink
            to="/industries"
            class="text-[var(--tm-txt-secondary)] hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
          >
            Industries
          </NuxtLink>
          <span class="text-[var(--tm-txt-light)]">/</span>
          <NuxtLink
            to="/industries/construction-smart-cities"
            class="text-[var(--tm-txt-secondary)] hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
          >
            Construction & Smart Cities
          </NuxtLink>
          <span class="text-[var(--tm-txt-light)]">/</span>
          <span class="text-[var(--tm-accent-primary)] font-medium">
            Smart Cities & Infrastructure Digitalization
          </span>
        </div>

        <div class="text-center">
          <div
            class="inline-flex items-center gap-3 bg-[var(--tm-bg-accentLight)] border border-[var(--tm-bd-accentAlpha15)] rounded-full px-6 py-3 mb-8"
          >
            <div class="w-3 h-3 bg-[var(--tm-accent-primary)] rounded-full animate-pulse"></div>
            <span
              class="text-[var(--tm-accent-primary)] font-semibold text-sm uppercase tracking-wider"
            >
              Strategic Priority
            </span>
          </div>

          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--tm-txt-primary)] mb-6 leading-tight"
          >
            Smart Cities &
            <span class="block text-[var(--tm-accent-primary)] font-semibold">
              Infrastructure Digitalization
            </span>
          </h1>

          <p
            class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed mb-12"
          >
            Smart cities are no longer futuristic concepts—in 2025, they are becoming a strategic
            priority for governments and investors worldwide, transforming urban energy, mobility,
            and public services through digital innovation.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-250 mx-auto">
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$2T</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Smart City Investments by 2030
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">IoT</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Enabled Smart Grids
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">AI</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Powered Traffic Management
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Executive Summary -->
    <section class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="max-w-300 mx-auto px-6">
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-8 p-10 md:p-12 border border-[var(--tm-bd-light)]"
        >
          <div class="flex items-start gap-6 mb-8">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-5 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"
                ></path>
                <path d="M12 5L8 21l4-7 4 7-4-16"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Headline Insight
              </h2>
              <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
                Smart cities are no longer a futuristic concept—in 2025, they are becoming a
                strategic priority for governments and investors worldwide. Infrastructure
                digitalization, supported by IoT, AI, and big data, is transforming how cities
                manage energy, mobility, and public services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Updates Section -->
    <section class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Key Smart Cities Updates
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Critical developments driving smart cities and infrastructure digitalization
            transformation
          </p>
        </div>

        <div class="space-y-12">
          <!-- Global Smart City Projects Accelerating -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div class="flex items-start gap-8">
              <div
                class="w-20 h-20 bg-[var(--tm-bg-accentLight)] rounded-6 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-10 h-10 text-[var(--tm-accent-primary)]"
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
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  1. Global Smart City Projects Accelerating
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Asia leads with large-scale projects in China, Singapore, and India, focusing on
                  mobility and digital governance. Middle East mega-developments (Saudi Arabia's
                  NEOM, Dubai's Smart City initiatives) emphasize sustainability and AI-driven
                  design. Europe prioritizes climate-resilient infrastructure, integrating renewable
                  energy and circular economy models.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Asia Pacific</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Large-scale projects in China, Singapore, and India focusing on mobility and
                      digital governance
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Middle East</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      NEOM and Dubai Smart City initiatives emphasizing sustainability and AI-driven
                      design
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Europe</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Climate-resilient infrastructure integrating renewable energy and circular
                      economy models
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Digital Infrastructure Core -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div class="flex items-start gap-8">
              <div
                class="w-20 h-20 bg-[var(--tm-bg-accentLight)] rounded-6 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-10 h-10 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 2v20M2 12h20"></path>
                  <path d="m19 9-7 7-7-7"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  2. Digital Infrastructure Core
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  IoT-enabled smart grids optimize energy distribution and reduce carbon emissions.
                  AI-powered traffic management cuts congestion and improves urban mobility. Digital
                  twins of cities allow planners to simulate and optimize urban development in real
                  time.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      <strong>IoT-enabled smart grids</strong>
                      optimize energy distribution and reduce carbon emissions
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      <strong>AI-powered traffic management</strong>
                      cuts congestion and improves urban mobility
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      <strong>Digital twins</strong>
                      of cities allow planners to simulate and optimize urban development in real
                      time
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Sustainability & ESG Integration -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div class="flex items-start gap-8">
              <div
                class="w-20 h-20 bg-[var(--tm-bg-accentLight)] rounded-6 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-10 h-10 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 3v12M21 12H9"></path>
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  3. Sustainability & ESG Integration
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Green building codes are integrated into smart city planning. Water conservation,
                  waste recycling, and energy efficiency are monitored through digital platforms.
                  ESG performance increasingly drives investor funding for smart city projects.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Green building codes integrated into smart city planning
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Water conservation, waste recycling, and energy efficiency monitored through
                      digital platforms
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      ESG performance increasingly drives investor funding for smart city projects
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Regional Innovation Hubs -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div class="flex items-start gap-8">
              <div
                class="w-20 h-20 bg-[var(--tm-bg-accentLight)] rounded-6 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-10 h-10 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  4. Regional Innovation Hubs
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  North America focuses on smart mobility and EV charging networks expanding
                  rapidly. Asia-Pacific emphasizes smart housing projects for affordable urban
                  living. Middle East develops AI-driven surveillance and smart governance tools
                  scaling up.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">North America</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Smart mobility and EV charging networks expanding rapidly
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Asia-Pacific</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Smart housing projects for affordable urban living
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Middle East</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      AI-driven surveillance and smart governance tools scaling up
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges & Risks -->
    <section class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Challenges & Risks
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Critical barriers facing smart cities and infrastructure digitalization development
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 9v4M12 17h.01"></path>
                <path d="M8.21 4.73A8 8 0 1 1 4.73 8.21"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              High Infrastructure Costs
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              High infrastructure costs limit adoption in developing regions, creating digital
              divides between advanced and emerging markets.
            </p>
          </div>

          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Data Privacy & Cybersecurity
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Concerns over data privacy and cybersecurity in connected cities pose significant
              challenges for citizen acceptance and government implementation.
            </p>
          </div>

          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                ></path>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
                <line
                  x1="12"
                  y1="22.08"
                  x2="12"
                  y2="12"
                ></line>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Digital Infrastructure Divide
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Unequal access to digital infrastructure could deepen the urban-rural divide, limiting
              smart city benefits to metropolitan areas only.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Talent & Outlook -->
    <section class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-300 mx-auto px-6">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-12 text-white"
        >
          <div class="text-center mb-12">
            <h2 class="text-4xl font-semibold mb-6 text-white">Talent & Industry Outlook</h2>
            <p class="text-xl opacity-90 text-white max-w-200 mx-auto">
              Demand is rising for specialized professionals driving smart cities and digital
              infrastructure transformation
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-semibold mb-6 text-white">High-Demand Roles</h3>
              <div class="space-y-4">
                <div class="flex items-center gap-4 p-4 bg-white/10 rounded-4 backdrop-blur-sm">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                  <span class="text-white font-medium">Urban Planners with Digital Skills</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 rounded-4 backdrop-blur-sm">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                  <span class="text-white font-medium">Smart Infrastructure Engineers</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 rounded-4 backdrop-blur-sm">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                  <span class="text-white font-medium">IoT Developers</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 rounded-4 backdrop-blur-sm">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                  <span class="text-white font-medium">Data Security Specialists</span>
                </div>
              </div>
            </div>

            <div class="text-center">
              <div class="mb-8">
                <div class="text-6xl font-bold text-white mb-4">$2T</div>
                <p class="text-xl text-white opacity-90">
                  By 2030, smart city investments are projected to exceed USD 2 trillion globally,
                  reshaping the construction and infrastructure ecosystem
                </p>
              </div>
              <div class="p-6 bg-white/10 rounded-6 backdrop-blur-sm">
                <h4 class="text-lg font-semibold text-white mb-2">Market Transformation</h4>
                <p class="text-white opacity-90">
                  Digital infrastructure creating new opportunities for sustainable urban
                  development and citizen services enhancement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & CTA Section -->
    <section class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-6">
            Ready to Lead Smart Cities Innovation?
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Connect with VMMC's smart cities and digital infrastructure experts to discuss your
            talent needs and transformation opportunities.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div
            class="bg-[var(--tm-bg-secondary)] rounded-8 p-10 border border-[var(--tm-bd-light)]"
          >
            <div class="flex items-center gap-4 mb-8">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Global Offices</h3>
                <p class="text-[var(--tm-txt-secondary)]">Connect with our regional experts</p>
              </div>
            </div>

            <div class="space-y-6">
              <div
                class="p-4 bg-[var(--tm-bg-primary)] rounded-4 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold text-[var(--tm-txt-primary)]">Dubai Office</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Aspin Commercial Tower, Office2818, DIFC
                    </p>
                  </div>
                  <a
                    href="tel:+971558296351"
                    class="text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] font-medium transition-colors duration-300"
                  >
                    +971-55-829-6351
                  </a>
                </div>
              </div>

              <div
                class="p-4 bg-[var(--tm-bg-primary)] rounded-4 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold text-[var(--tm-txt-primary)]">Singapore HQ</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      The Guoco Tower, Office1801
                    </p>
                  </div>
                  <a
                    href="tel:+6563868322"
                    class="text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] font-medium transition-colors duration-300"
                  >
                    +65-6386-8322
                  </a>
                </div>
              </div>

              <div
                class="p-4 bg-[var(--tm-bg-primary)] rounded-4 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold text-[var(--tm-txt-primary)]">Malaysia Office</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Aspire Tower, 07-05, KL Eco City, 59200 Kuala Lumpur
                    </p>
                  </div>
                  <a
                    href="tel:+60322469000"
                    class="text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] font-medium transition-colors duration-300"
                  >
                    +60-322-469-000
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div
            class="bg-[var(--tm-bg-secondary)] rounded-8 p-10 border border-[var(--tm-bd-light)]"
          >
            <div class="flex items-center gap-4 mb-8">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Get Started</h3>
                <p class="text-[var(--tm-txt-secondary)]">
                  Connect with our smart cities experts today
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <button
                class="w-full p-6 bg-[var(--tm-accent-primary)] text-white rounded-6 hover:bg-[var(--tm-accent-secondary)] transition-all duration-300 text-left group"
                @click="openConsultationModal"
              >
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-white/20 rounded-3 flex items-center justify-center">
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path d="M12 4.5v15m7.5-7.5h-15"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-white">Schedule Smart Cities Consultation</h4>
                    <p class="text-sm text-white/80">
                      Discuss your digital infrastructure talent needs and opportunities
                    </p>
                  </div>
                </div>
              </button>

              <button
                class="w-full p-6 bg-[var(--tm-bg-primary)] border-2 border-[var(--tm-accent-primary)] text-[var(--tm-accent-primary)] rounded-6 hover:bg-[var(--tm-accent-primary)] hover:text-white transition-all duration-300 text-left group"
                @click="openExpertModal"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 bg-[var(--tm-bg-accentLight)] group-hover:bg-white/20 rounded-3 flex items-center justify-center"
                  >
                    <svg
                      class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path d="M17 8l4 4-4 4M7 8l-4 4 4 4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold group-hover:text-white">
                      Speak with IoT & AI Specialists
                    </h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)] group-hover:text-white/80">
                      Connect with digital infrastructure experts
                    </p>
                  </div>
                </div>
              </button>

              <div
                class="p-6 bg-[var(--tm-bg-primary)] rounded-6 border border-[var(--tm-bd-light)]"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center"
                  >
                    <svg
                      class="w-6 h-6 text-[var(--tm-accent-primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      ></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[var(--tm-txt-primary)]">Email Inquiry</h4>
                    <a
                      href="mailto:info@vmmcglobal.com"
                      class="text-sm text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
                    >
                      info@vmmcglobal.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />

    <!-- Modal Components -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

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

  // 简化版专家咨询弹出框控制
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整版咨询表单弹出框控制
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
    title: 'Smart Cities & Infrastructure Digitalization Report | IoT AI Urban Planning | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of smart cities becoming strategic priority worldwide. Industry report covering IoT-enabled smart grids, AI-powered traffic management, digital twins, and infrastructure digitalization transforming urban services.',
      },
      {
        name: 'keywords',
        content:
          'smart cities, infrastructure digitalization, IoT smart grids, AI traffic management, digital twins, urban planning, smart city investments, digital infrastructure, urban technology',
      },
      {
        property: 'og:title',
        content: 'Smart Cities & Infrastructure Digitalization Report | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Industry report analyzing smart cities transformation through IoT, AI, and big data. Covering global projects, digital infrastructure core, and sustainability integration.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'author',
        content: 'VMMC - Victor Meridian Management Consultancies',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/industries/construction-smart-cities/smart-cities-digitalization',
      },
    ],
  })
</script>

<style scoped>
  /* Deep color mode adaptations */
  .dark .bg-red-100 {
    background: var(--tm-bg-whiteAlpha10);
  }

  .dark .text-red-600 {
    color: #ef4444;
  }

  /* Page transition animation */
  @keyframes pageEnter {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .smart-cities-page {
    animation: pageEnter 0.6s ease-out;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-5xl {
      font-size: 2.5rem;
    }
    .text-6xl {
      font-size: 3rem;
    }
    .text-7xl {
      font-size: 3.5rem;
    }
    .py-25 {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .py-30 {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }
</style>
