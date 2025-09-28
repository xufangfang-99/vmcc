<template>
  <div class="infrastructure-page min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-25 md:py-30 bg-[var(--tm-bg-secondary)]">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
          alt="Sustainable Infrastructure Development"
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
            Infrastructure & Sustainable Building
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
              Industry Report
            </span>
          </div>

          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--tm-txt-primary)] mb-6 leading-tight"
          >
            Infrastructure &
            <span class="block text-[var(--tm-accent-primary)] font-semibold">
              Sustainable Building
            </span>
          </h1>

          <p
            class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed mb-12"
          >
            Comprehensive analysis of infrastructure investment surge and the transition from
            optional to mandatory sustainable building practices in 2025.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-250 mx-auto">
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$2T+</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Infrastructure Investment
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">30%</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Net-Zero Buildings by 2030
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">PPP</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Preferred Financing Model
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Executive Summary
              </h2>
              <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
                The construction industry is at a turning point in 2025. Governments and private
                investors are accelerating infrastructure spending to support economic recovery,
                while sustainable building practices are moving from optional to mandatory. Green
                standards, smart materials, and digital construction technologies are reshaping the
                global landscape.
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
            Key Industry Updates
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Critical developments driving the infrastructure and sustainable building transformation
          </p>
        </div>

        <div class="space-y-12">
          <!-- Infrastructure Investment Surge -->
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
                  <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  1. Infrastructure Investment Surge
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Major economies, including the U.S., EU, and China, are increasing spending on
                  transportation, energy, and digital infrastructure. Public-private partnerships
                  (PPPs) are becoming a preferred financing model for large-scale projects.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Major economies increasing transportation and energy infrastructure spending
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Public-private partnerships becoming preferred financing model for large-scale
                      projects
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Digital infrastructure investment accelerating across all regions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Sustainable Building Practices -->
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
                  <path d="M12 3v12M3 12l9-9 9 9"></path>
                  <path
                    d="M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  2. Sustainable Building Practices
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Regulations are pushing adoption of low-carbon cement, recycled materials, and
                  renewable energy integration. Net-zero buildings are gaining momentum, especially
                  in Europe and North America. ESG metrics are increasingly tied to real estate
                  investment decisions.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Regulations pushing adoption of low-carbon cement, recycled materials, and
                      renewable energy integration
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Net-zero buildings gaining momentum, especially in Europe and North America
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      ESG metrics increasingly tied to real estate investment decisions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Technology Transformation -->
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
                  3. Technology Transformation
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Building Information Modeling (BIM) and digital twins improve efficiency, cost
                  management, and risk reduction. 3D printing and modular construction reduce waste
                  and speed up project delivery. IoT sensors and AI-driven analytics support
                  predictive maintenance and smart facility management.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Building Information Modeling (BIM) and digital twins improve efficiency, cost
                      management, and risk reduction
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      3D printing and modular construction reduce waste and speed up project
                      delivery
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      IoT sensors and AI-driven analytics support predictive maintenance and smart
                      facility management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Regional Trends -->
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
                  4. Regional Trends
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Middle East mega-projects in Saudi Arabia and UAE (e.g., NEOM, Masdar City)
                  emphasize sustainability. Asia-Pacific rapid urbanization drives demand for
                  affordable yet eco-friendly housing. Europe's strict green regulations push the
                  industry toward carbon neutrality.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Middle East</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Mega-projects like NEOM and Masdar City emphasizing sustainability
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Asia-Pacific</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Rapid urbanization drives demand for affordable eco-friendly housing
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Europe</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Strict green regulations push industry toward carbon neutrality
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
            Critical barriers facing infrastructure and sustainable building development
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
              Rising Material Costs
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Rising costs of sustainable materials pose budget challenges for construction projects
              adopting green building practices.
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
              Skilled Labor Shortages
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Skilled labor shortages in digital construction and green engineering create
              bottlenecks in project delivery and innovation adoption.
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
              Regulatory Fragmentation
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Regulatory fragmentation across countries and regions creates complexity in
              implementing consistent sustainable building standards.
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
              The sector is seeing strong demand for specialized professionals driving sustainable
              construction transformation
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-semibold mb-6 text-white">High-Demand Roles</h3>
              <div class="space-y-4">
                <div class="flex items-center gap-4 p-4 bg-white/10 rounded-4 backdrop-blur-sm">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                  <span class="text-white font-medium">Green Architects</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 rounded-4 backdrop-blur-sm">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                  <span class="text-white font-medium">Sustainability Consultants</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 rounded-4 backdrop-blur-sm">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                  <span class="text-white font-medium">Civil Engineers with Digital Skills</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white/10 rounded-4 backdrop-blur-sm">
                  <div class="w-3 h-3 bg-white rounded-full"></div>
                  <span class="text-white font-medium">Project Managers with ESG Expertise</span>
                </div>
              </div>
            </div>

            <div class="text-center">
              <div class="mb-8">
                <div class="text-6xl font-bold text-white mb-4">30%</div>
                <p class="text-xl text-white opacity-90">
                  By 2030, sustainable construction is expected to represent over 30% of the global
                  construction market
                </p>
              </div>
              <div class="p-6 bg-white/10 rounded-6 backdrop-blur-sm">
                <h4 class="text-lg font-semibold text-white mb-2">Early Adopter Advantage</h4>
                <p class="text-white opacity-90">
                  Organizations positioning for long-term growth through sustainable construction
                  practices and digital innovation
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
            Ready to Build the Future of Infrastructure?
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Connect with VMMC's infrastructure and sustainable building experts to discuss your
            talent needs and strategic opportunities.
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
                <p class="text-[var(--tm-txt-secondary)]">Connect with our experts today</p>
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
                    <h4 class="font-semibold text-white">Schedule Strategy Consultation</h4>
                    <p class="text-sm text-white/80">
                      Discuss your infrastructure talent needs and opportunities
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
                      Speak with Industry Specialists
                    </h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)] group-hover:text-white/80">
                      Connect with sustainable building experts
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
                      href="mailto:infrastructure@vmmcae.com"
                      class="text-sm text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
                    >
                      infrastructure@vmmcae.com
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
    title: 'Infrastructure & Sustainable Building Report | Construction Industry Analysis | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of infrastructure investment surge and sustainable building practices transformation. Industry report covering PPP financing, green standards, and digital construction technologies reshaping the global construction landscape.',
      },
      {
        name: 'keywords',
        content:
          'infrastructure investment, sustainable building, green construction, PPP financing, net-zero buildings, ESG construction, BIM technology, digital construction, construction industry report',
      },
      {
        property: 'og:title',
        content: 'Infrastructure & Sustainable Building Report | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Industry report analyzing the transformation from optional to mandatory sustainable building practices, infrastructure investment trends, and green construction technologies.',
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
        href: 'https://www.vmmcae.com/industries/construction-smart-cities/infrastructure-sustainable-building',
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

  .infrastructure-page {
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
