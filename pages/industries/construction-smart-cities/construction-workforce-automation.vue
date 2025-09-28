<template>
  <div class="workforce-automation-page min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-25 md:py-30 bg-[var(--tm-bg-secondary)]">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1920&q=80"
          alt="Construction Workforce and Automation"
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
            Construction Workforce & Automation
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
              Industry Transformation
            </span>
          </div>

          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--tm-txt-primary)] mb-6 leading-tight"
          >
            Construction Workforce &
            <span class="block text-[var(--tm-accent-primary)] font-semibold">Automation</span>
          </h1>

          <p
            class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed mb-12"
          >
            As the construction industry faces global labor shortages and rising costs, automation
            and digitalization are emerging as key drivers of transformation, reshaping workforce
            structures and elevating skill requirements.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-250 mx-auto">
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">50%</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Productivity Improvement
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">30%</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Workplace Injury Reduction
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">70%</div>
              <div class="text-sm text-[var(--tm-txt-secondary)] font-medium">
                Material Waste Reduction
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                ></circle>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Executive Summary
              </h2>
              <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
                As the construction industry faces global labor shortages and rising costs,
                automation and digitalization are emerging as key drivers of transformation. The
                adoption of construction robots, artificial intelligence, and automated management
                systems is reshaping workforce structures, boosting productivity, and elevating
                skill requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Trends Section -->
    <section class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Industry Transformation Trends
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Critical developments driving construction workforce and automation evolution
          </p>
        </div>

        <div class="space-y-12">
          <!-- Labor Shortages -->
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
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  1. Worsening Labor Shortages
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Skilled worker shortages are widespread across global construction markets. Aging
                  demographics in developed countries are intensifying the supply gap, driving
                  urgent need for automation solutions and workforce transformation.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Aging workforce in developed markets creating critical skill gaps
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Rising demand for specialized digital construction skills
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Competition with tech industry for automation expertise
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Automation Penetration -->
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
                    r="3"
                  ></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m15.5 7.5-3 3-3-3"></path>
                  <path d="m15.5 16.5-3-3-3 3"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  2. Rapid Penetration of Automation and Robotics
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Bricklaying robots, 3D-printed buildings, and drone-based site monitoring are
                  being deployed on construction sites, transforming traditional building methods
                  and creating new operational efficiencies.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <div class="flex items-start gap-3">
                      <div
                        class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <div>
                        <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                          Construction Robotics
                        </h4>
                        <p class="text-sm text-[var(--tm-txt-secondary)]">
                          Bricklaying, welding, painting, and material handling automation
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div
                        class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <div>
                        <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                          3D Printing Construction
                        </h4>
                        <p class="text-sm text-[var(--tm-txt-secondary)]">
                          Accelerated building with reduced material waste
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="flex items-start gap-3">
                      <div
                        class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <div>
                        <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                          Drone Site Monitoring
                        </h4>
                        <p class="text-sm text-[var(--tm-txt-secondary)]">
                          Real-time progress tracking and safety oversight
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div
                        class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <div>
                        <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                          AI-Powered Analytics
                        </h4>
                        <p class="text-sm text-[var(--tm-txt-secondary)]">
                          Predictive maintenance and risk assessment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Skill Requirements Shift -->
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
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  3. Shift in Skill Requirements
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Workers are moving from manual labor to digital operations and equipment
                  management, increasing demand for higher-skilled talent with technology expertise
                  and multi-disciplinary capabilities.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Transition from manual labor to
                      <strong>digital operations management</strong>
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Growing demand for automation equipment specialists
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div
                      class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-[var(--tm-txt-secondary)]">
                      Need for tech-savvy talent with multi-disciplinary skills
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Drivers Section -->
    <section class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Key Technology Drivers
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Revolutionary technologies transforming construction workforce dynamics
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Construction Robots -->
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
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Construction Robots
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Applied in bricklaying, welding, painting, and material handling, enhancing safety and
              productivity while reducing workplace injuries.
            </p>
            <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">50%+</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Productivity boost</div>
          </div>

          <!-- 3D Printing -->
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
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              3D Printing in Construction
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Accelerates residential and infrastructure development while reducing material waste
              and enabling complex architectural designs.
            </p>
            <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">70%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Waste reduction</div>
          </div>

          <!-- BIM & AI -->
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
                <path d="M12 2v20M2 12h20"></path>
                <path d="m19 9-7 7-7-7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              BIM & Automated Management
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Combined with AI for schedule prediction and risk assessment, improving project
              management and reducing delays.
            </p>
            <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">30%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Time savings</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges & Opportunities -->
    <section class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Challenges & Opportunities
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Balancing transformation challenges with strategic opportunities
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Challenges -->
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)]">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-14 bg-red-100 rounded-4 flex items-center justify-center">
                <svg
                  class="w-7 h-7 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                  Industry Challenges
                </h3>
                <p class="text-[var(--tm-txt-secondary)]">Barriers to automation adoption</p>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                    High Initial Investment
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Automation equipment requires significant upfront capital investment
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                    Skill Transition Difficulties
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Workforce retraining and adaptation to digital technologies
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                    Uneven Industry Adoption
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Varying rates of technology adoption across companies and regions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Opportunities -->
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)]">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-14 bg-green-100 rounded-4 flex items-center justify-center">
                <svg
                  class="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                  Strategic Opportunities
                </h3>
                <p class="text-[var(--tm-txt-secondary)]">Benefits for early adopters</p>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                    Reduced Workplace Injuries
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Automation significantly improves safety standards and reduces accidents
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                    Improved Construction Speed
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Faster project delivery and enhanced productivity metrics
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                    Attracts Tech-Savvy Talent
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Modern technology draws younger professionals into the industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Talent & Skills Outlook -->
    <section class="py-20 bg-[var(--tm-bg-primary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-6">
            Future Talent & Skills Requirements
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Next-generation professionals needed for construction automation transformation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Automation Specialists -->
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
              Automation Specialists
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Experts in construction robotics, automated equipment operation, and digital systems
              integration
            </p>
          </div>

          <!-- Digital Operations Managers -->
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
                <path d="M12 2v20M2 12h20"></path>
                <path d="m19 9-7 7-7-7"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Digital Operations Managers
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Leaders managing digital construction workflows and coordinating human-machine
              collaboration
            </p>
          </div>

          <!-- Training Specialists -->
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
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Training Specialists
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Professionals developing workforce transformation programs and digital skills training
              curricula
            </p>
          </div>

          <!-- Change Management Experts -->
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                ></circle>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Change Management Experts
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Leaders guiding organizational transformation and workforce adaptation to automation
              technologies
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Outlook -->
    <section class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-300 mx-auto px-6">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-12 text-white"
        >
          <div class="text-center mb-12">
            <h2 class="text-4xl font-semibold mb-6 text-white">Industry Transformation Outlook</h2>
            <p class="text-xl opacity-90 text-white max-w-200 mx-auto">
              The integration of workforce transformation and automation reshaping construction's
              future
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-semibold mb-8 text-white">Next Decade Projections</h3>
              <div class="space-y-6">
                <div
                  class="flex items-center justify-between p-4 bg-white/10 rounded-4 backdrop-blur-sm"
                >
                  <div>
                    <h4 class="font-semibold text-white">Industry Competitiveness</h4>
                    <p class="text-sm text-white/80">Automation expertise advantage</p>
                  </div>
                  <div class="text-2xl font-bold text-white">Long-term</div>
                </div>
                <div
                  class="flex items-center justify-between p-4 bg-white/10 rounded-4 backdrop-blur-sm"
                >
                  <div>
                    <h4 class="font-semibold text-white">Workforce Evolution</h4>
                    <p class="text-sm text-white/80">Multi-disciplinary skills priority</p>
                  </div>
                  <div class="text-2xl font-bold text-white">Continuous</div>
                </div>
                <div
                  class="flex items-center justify-between p-4 bg-white/10 rounded-4 backdrop-blur-sm"
                >
                  <div>
                    <h4 class="font-semibold text-white">Technology Integration</h4>
                    <p class="text-sm text-white/80">Human-machine collaboration</p>
                  </div>
                  <div class="text-2xl font-bold text-white">2025+</div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <div class="mb-8">
                <div class="text-6xl font-bold text-white mb-4">10 Years</div>
                <p class="text-xl text-white opacity-90">
                  The integration of workforce transformation and automation is set to be a
                  long-term trend in construction over the next decade
                </p>
              </div>
              <div class="p-6 bg-white/10 rounded-6 backdrop-blur-sm">
                <h4 class="text-lg font-semibold text-white mb-2">Industry Transformation</h4>
                <p class="text-white opacity-90">
                  Professionals with automation expertise and multi-disciplinary skills will hold
                  the key to industry competitiveness
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
            Ready to Lead Construction Workforce Transformation?
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Connect with VMMC's construction automation experts to discuss your workforce
            transformation needs and strategic automation initiatives.
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
                <p class="text-[var(--tm-txt-secondary)]">Connect with our automation experts</p>
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
                  Connect with our workforce transformation experts today
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
                      Schedule Workforce Transformation Consultation
                    </h4>
                    <p class="text-sm text-white/80">
                      Discuss your automation talent needs and digital transformation strategy
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
                      Speak with Automation Specialists
                    </h4>
                    <p class="text-sm text-[var(--tm-txt-secondary)] group-hover:text-white/80">
                      Connect with construction robotics and digital operations experts
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
                      href="mailto:automation@vmmcae.com"
                      class="text-sm text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
                    >
                      automation@vmmcae.com
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
    title: 'Construction Workforce & Automation Report | Robotics & Digital Transformation | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of construction workforce transformation and automation adoption. Industry report covering construction robots, 3D printing, AI-powered analytics, and digital skills requirements reshaping the construction industry.',
      },
      {
        name: 'keywords',
        content:
          'construction automation, construction robots, workforce transformation, 3D printing construction, BIM automation, digital construction skills, construction AI, robotics engineering',
      },
      {
        property: 'og:title',
        content: 'Construction Workforce & Automation Report | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Industry report analyzing construction workforce transformation through automation, robotics, and AI technologies addressing global labor shortages and productivity challenges.',
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
        href: 'https://www.vmmcae.com/industries/construction-smart-cities/construction-workforce-automation',
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

  .dark .bg-green-100 {
    background: var(--tm-bg-whiteAlpha10);
  }

  .dark .text-green-600 {
    color: #22c55e;
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

  .workforce-automation-page {
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
