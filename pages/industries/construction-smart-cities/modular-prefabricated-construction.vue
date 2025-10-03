<template>
  <div class="modular-construction-page min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-25 md:py-30 bg-[var(--tm-bg-secondary)]">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1920&q=80"
          alt="Modular and Prefabricated Construction"
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
            Modular & Prefabricated Construction
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
              Market Growth
            </span>
          </div>

          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--tm-txt-primary)] mb-6 leading-tight"
          >
            Modular &
            <span class="block text-[var(--tm-accent-primary)] font-semibold">
              Prefabricated Construction
            </span>
          </h1>

          <p
            class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed mb-12"
          >
            Modular and prefabricated construction are gaining momentum in 2025 as the industry
            seeks cost efficiency, sustainability, and faster project delivery, expanding from
            housing to commercial buildings and large-scale infrastructure.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-250 mx-auto">
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$160B</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Market Size by 2030
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">6-7%</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Annual Growth Rate
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">30-50%</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Construction Time Reduction
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
                <path d="M12 3v12M3 12l9-9 9 9"></path>
                <path
                  d="M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                ></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Headline Insight
              </h2>
              <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
                Modular and prefabricated construction are gaining momentum in 2025 as the industry
                seeks cost efficiency, sustainability, and faster project delivery. These methods
                are no longer confined to small-scale housing but are expanding into commercial
                buildings, healthcare facilities, and large-scale infrastructure projects.
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
            Key Market Updates
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Critical developments driving modular and prefabricated construction transformation
          </p>
        </div>

        <div class="space-y-12">
          <!-- Market Growth -->
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
                  <path d="M3 3v18h18"></path>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  1. Market Growth
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  The global modular construction market is expected to reach USD 160 billion by
                  2030, with annual growth of 6–7%. Asia-Pacific leads adoption, particularly in
                  China and Japan, where urban density drives demand. North America is scaling
                  modular solutions in healthcare and affordable housing.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Global Market</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      USD 160 billion by 2030 with 6-7% annual growth
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Asia-Pacific</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Leading adoption in China and Japan driven by urban density
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">North America</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Scaling solutions in healthcare and affordable housing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Efficiency & Cost Benefits -->
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
                  2. Efficiency & Cost Benefits
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Prefabricated methods reduce construction time by 30–50% compared to traditional
                  models. Waste reduction and lower energy use make modular solutions attractive
                  under ESG frameworks. Off-site manufacturing ensures higher quality control and
                  safety standards.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Prefabricated methods reduce construction time by
                      <strong>30–50%</strong>
                      compared to traditional models
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Waste reduction and lower energy use make modular solutions attractive under
                      ESG frameworks
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Off-site manufacturing ensures higher quality control and safety standards
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Sustainability & Green Integration -->
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
                  3. Sustainability & Green Integration
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Modular designs integrate solar panels, recycled materials, and energy-efficient
                  insulation. Prefabricated housing supports net-zero energy goals in urban
                  development. Circular construction principles allow components to be reused in
                  future projects.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Modular designs integrate
                      <strong>
                        solar panels, recycled materials, and energy-efficient insulation
                      </strong>
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Prefabricated housing supports net-zero energy goals in urban development
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Circular construction principles allow components to be reused in future
                      projects
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Applications Across Sectors -->
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
                  4. Applications Across Sectors
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Healthcare modular hospitals provide rapid response to emergencies. Education
                  sector adopts prefabricated classrooms for cost efficiency. Commercial & offices
                  use flexible modular layouts to support hybrid work environments.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Healthcare</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Modular hospitals provide rapid response to emergencies
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Education</h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Schools adopt prefabricated classrooms for cost efficiency
                    </p>
                  </div>
                  <div
                    class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)]"
                  >
                    <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Commercial & Offices
                    </h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Flexible modular layouts support hybrid work environments
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
            Critical barriers facing modular and prefabricated construction adoption
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
                <path d="M8 17l4 4 4-4M12 12v9"></path>
                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Logistics Complexity
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Logistics complexity in transporting large prefabricated units creates challenges for
              project planning and delivery coordination.
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
              Regulatory Barriers
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Regulatory barriers in regions with outdated building codes create obstacles for
              modular construction adoption and implementation.
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
              Perception Issues
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Perception issues as modular buildings still face stigma compared to traditional
              construction, affecting market acceptance and adoption.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Market Outlook -->
    <section class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-300 mx-auto px-6">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-12 text-white"
        >
          <div class="text-center mb-12">
            <h2 class="text-4xl font-semibold mb-6 text-white">Market Outlook & Projections</h2>
            <p class="text-xl opacity-90 text-white max-w-200 mx-auto">
              Future projections for modular and prefabricated construction market transformation
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-semibold mb-8 text-white">Key Market Projections</h3>
              <div class="space-y-6">
                <div
                  class="flex items-center justify-between p-4 bg-white/10 rounded-4 backdrop-blur-sm"
                >
                  <div>
                    <h4 class="font-semibold text-white">Market Size by 2030</h4>
                    <p class="text-sm text-white/80">Global modular construction market</p>
                  </div>
                  <div class="text-2xl font-bold text-white">$160B</div>
                </div>
                <div
                  class="flex items-center justify-between p-4 bg-white/10 rounded-4 backdrop-blur-sm"
                >
                  <div>
                    <h4 class="font-semibold text-white">Annual Growth Rate</h4>
                    <p class="text-sm text-white/80">Expected market expansion</p>
                  </div>
                  <div class="text-2xl font-bold text-white">6-7%</div>
                </div>
                <div
                  class="flex items-center justify-between p-4 bg-white/10 rounded-4 backdrop-blur-sm"
                >
                  <div>
                    <h4 class="font-semibold text-white">Global Market Share</h4>
                    <p class="text-sm text-white/80">Of new construction by 2030</p>
                  </div>
                  <div class="text-2xl font-bold text-white">20%</div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <div class="mb-8">
                <div class="text-6xl font-bold text-white mb-4">20%</div>
                <p class="text-xl text-white opacity-90">
                  By 2030, modular and prefabricated methods could represent 20% of new construction
                  globally, reshaping industry practices
                </p>
              </div>
              <div class="p-6 bg-white/10 rounded-6 backdrop-blur-sm">
                <h4 class="text-lg font-semibold text-white mb-2">Industry Transformation</h4>
                <p class="text-white opacity-90">
                  Modular construction evolving from niche solution to mainstream practice across
                  healthcare, education, and commercial sectors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Talent & Outlook -->
    <section class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-6">
            Talent & Industry Requirements
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Specialized professionals needed to drive modular and prefabricated construction
            transformation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Modular Design Architects
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Specialists in designing flexible, efficient modular building systems and components
            </p>
          </div>

          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M8 17l4 4 4-4M12 12v9"></path>
                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Logistics Coordinators
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Experts in managing complex transportation and delivery of prefabricated units
            </p>
          </div>

          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                ></circle>
                <path d="M12 1v6m0 6v6"></path>
                <path d="m15.5 7.5-3 3-3-3"></path>
                <path d="m15.5 16.5-3-3-3 3"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Prefab Manufacturing Specialists
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Professionals in off-site manufacturing processes and quality control systems
            </p>
          </div>

          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              ESG-Focused Project Managers
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Leaders ensuring sustainability and circular economy principles in modular projects
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & CTA Section -->
    <section class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-6">
            Ready to Scale Modular Construction Innovation?
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Connect with VMMC's modular and prefabricated construction experts to discuss your
            talent needs and market opportunities.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
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
                class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
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
                class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
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
                class="p-4 bg-[var(--tm-bg-secondary)] rounded-4 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
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
          <div class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
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
                  Connect with our modular construction experts today
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
                    <h4 class="font-semibold text-white">
                      Schedule Modular Construction Consultation
                    </h4>
                    <p class="text-sm text-white/80">
                      Discuss your prefabricated construction talent needs and opportunities
                    </p>
                  </div>
                </div>
              </button>

              <button
                class="w-full p-6 bg-[var(--tm-bg-secondary)] border-2 border-[var(--tm-accent-primary)] text-[var(--tm-accent-primary)] rounded-6 hover:bg-[var(--tm-accent-primary)] hover:text-white transition-all duration-300 text-left group"
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
                      Speak with Modular Design Specialists
                    </h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)] group-hover:text-white/80">
                      Connect with prefabricated construction experts
                    </p>
                  </div>
                </div>
              </button>

              <div
                class="p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-light)]"
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
    title: 'Modular & Prefabricated Construction Report | Cost Efficiency & Sustainability | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of modular and prefabricated construction market growth. Industry report covering cost efficiency, sustainability benefits, and market expansion from housing to commercial buildings and healthcare facilities.',
      },
      {
        name: 'keywords',
        content:
          'modular construction, prefabricated building, construction efficiency, off-site manufacturing, modular housing, prefab commercial buildings, construction time reduction, sustainable building',
      },
      {
        property: 'og:title',
        content: 'Modular & Prefabricated Construction Report | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Industry report analyzing modular construction market expected to reach USD 160 billion by 2030, with 30-50% construction time reduction and expanding applications across sectors.',
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
        href: 'https://www.vmmcae.com/industries/construction-smart-cities/modular-prefabricated-construction',
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

  .modular-construction-page {
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
