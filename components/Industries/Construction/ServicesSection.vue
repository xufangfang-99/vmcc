<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-20 right-20 w-80 h-80 opacity-3">
      <div
        class="w-full h-full bg-gradient-to-br from-[var(--tm-accent-primary)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>
    <div class="absolute bottom-0 left-0 w-60 h-60 opacity-4">
      <div
        class="w-full h-full bg-gradient-to-tr from-[var(--tm-accent-secondary)] to-transparent rounded-full blur-2xl"
      ></div>
    </div>

    <div class="max-w-450 mx-auto px-6 relative z-1">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-[var(--tm-bg-accentLight)] rounded-5 mb-6"
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
        <h2 class="text-5xl md:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Construction Talent Solutions
        </h2>
        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          Comprehensive recruitment and consulting services for the construction industry
          transformation, connecting organizations with skilled professionals in sustainable
          building, smart cities, and digital construction.
        </p>
      </div>

      <!-- Core Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Executive Search & Leadership -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3
                class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                Executive Search & Leadership
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Identifying and placing senior construction executives, project directors, and
                transformation leaders who drive sustainable building practices and digital
                innovation initiatives.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Chief Construction Officers & Project Directors
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Sustainability & ESG Leadership
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Digital Transformation Executives
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Specialized Technical Recruitment -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
            <div class="flex-1">
              <h3
                class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                Specialized Technical Recruitment
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Sourcing skilled professionals in BIM technology, green building design, modular
                construction, and smart infrastructure development for complex construction
                projects.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    BIM Specialists & Digital Twin Engineers
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Green Building Architects & Sustainable Engineers
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Modular Construction & Prefab Specialists
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Management & ESG Compliance -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
            <div class="flex-1">
              <h3
                class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                Project Management & ESG Compliance
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Recruiting project managers with ESG expertise, sustainability consultants, and
                compliance specialists who ensure construction projects meet environmental and
                social governance standards.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    ESG Project Managers & Sustainability Consultants
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Green Certification Specialists (LEED, BREEAM)
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Environmental Compliance & Reporting Experts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Smart Cities & Infrastructure Technology -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
            <div class="flex-1">
              <h3
                class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                Smart Cities & Infrastructure Technology
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Placing experts in IoT integration, AI-powered infrastructure management, and smart
                city development to support next-generation urban planning and digital
                infrastructure projects.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Smart Infrastructure Engineers & IoT Developers
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Urban Planners with Digital Skills
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Data Security & Cybersecurity Specialists
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Specialized Expertise Areas -->
      <div class="bg-[var(--tm-bg-secondary)] rounded-8 p-12 mb-20">
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Specialized Construction Expertise
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Deep domain knowledge across critical construction industry transformation areas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Green Materials & Sustainability -->
          <div class="text-center group">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-[var(--tm-bg-primary)] rounded-5 flex items-center justify-center border border-[var(--tm-bd-light)] group-hover:border-[var(--tm-accent-primary)] group-hover:scale-110 transition-all duration-300"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Green Materials & Sustainability
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Material scientists, sustainability engineers, and green procurement specialists for
              low-carbon cement, recycled materials, and energy-efficient building solutions.
            </p>
          </div>

          <!-- Construction Automation -->
          <div class="text-center group">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-[var(--tm-bg-primary)] rounded-5 flex items-center justify-center border border-[var(--tm-bd-light)] group-hover:border-[var(--tm-accent-primary)] group-hover:scale-110 transition-all duration-300"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Construction Automation
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Robotics engineers, 3D printing specialists, and automation experts developing
              construction robots, automated management systems, and digital workflow optimization.
            </p>
          </div>

          <!-- Regional Mega-Projects -->
          <div class="text-center group">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-[var(--tm-bg-primary)] rounded-5 flex items-center justify-center border border-[var(--tm-bd-light)] group-hover:border-[var(--tm-accent-primary)] group-hover:scale-110 transition-all duration-300"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Regional Mega-Projects
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Specialized talent for NEOM, Masdar City, and other transformational projects
              requiring expertise in mega-scale sustainable construction and smart city integration.
            </p>
          </div>

          <!-- Modular Design & Logistics -->
          <div class="text-center group">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-[var(--tm-bg-primary)] rounded-5 flex items-center justify-center border border-[var(--tm-bd-light)] group-hover:border-[var(--tm-accent-primary)] group-hover:scale-110 transition-all duration-300"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Modular Design & Logistics
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Modular design architects, prefab manufacturing specialists, and logistics
              coordinators managing complex transportation and assembly of prefabricated
              construction units.
            </p>
          </div>

          <!-- Workforce Transformation -->
          <div class="text-center group">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-[var(--tm-bg-primary)] rounded-5 flex items-center justify-center border border-[var(--tm-bd-light)] group-hover:border-[var(--tm-accent-primary)] group-hover:scale-110 transition-all duration-300"
            >
              <svg
                class="w-10 h-10 text-[var(--tm-accent-primary)]"
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
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Workforce Transformation
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Training specialists, digital operations managers, and change management experts
              leading the industry transition from manual labor to digital operations and equipment
              management.
            </p>
          </div>

          <!-- Policy & Regulatory Compliance -->
          <div class="text-center group">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-[var(--tm-bg-primary)] rounded-5 flex items-center justify-center border border-[var(--tm-bd-light)] group-hover:border-[var(--tm-accent-primary)] group-hover:scale-110 transition-all duration-300"
            >
              <svg
                class="w-10 h-10 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Policy & Regulatory Compliance
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Regulatory affairs specialists, policy analysts, and compliance managers ensuring
              adherence to evolving green building codes, carbon reporting standards, and ESG
              frameworks.
            </p>
          </div>
        </div>
      </div>

      <!-- Global Reach & Regional Expertise -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Global Presence -->
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
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Global Network</h3>
              <p class="text-[var(--tm-txt-secondary)]">Strategic presence across key markets</p>
            </div>
          </div>

          <div class="space-y-6">
            <div
              class="flex items-center justify-between p-4 bg-[var(--tm-bg-secondary)] rounded-4"
            >
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)]">Dubai Office</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Aspin Commercial Tower, DIFC</p>
              </div>
              <span class="text-sm font-medium text-[var(--tm-accent-primary)]">
                +971-55-829-6351
              </span>
            </div>

            <div
              class="flex items-center justify-between p-4 bg-[var(--tm-bg-secondary)] rounded-4"
            >
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)]">Singapore HQ</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">The Guoco Tower, Office1801</p>
              </div>
              <span class="text-sm font-medium text-[var(--tm-accent-primary)]">+65-6386-8322</span>
            </div>

            <div
              class="flex items-center justify-between p-4 bg-[var(--tm-bg-secondary)] rounded-4"
            >
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)]">Malaysia Office</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">Aspire Tower, KL Eco City</p>
              </div>
              <span class="text-sm font-medium text-[var(--tm-accent-primary)]">
                +60-322-469-000
              </span>
            </div>
          </div>
        </div>

        <!-- Success Metrics -->
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
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Proven Results</h3>
              <p class="text-[var(--tm-txt-secondary)]">Construction industry track record</p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6">
              <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">850+</div>
              <div class="text-sm font-medium text-[var(--tm-txt-primary)] mb-1">
                Construction Professionals Placed
              </div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">
                Across sustainable building and smart cities projects
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-[var(--tm-bg-secondary)] rounded-4">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">95%</div>
                <div class="text-xs text-[var(--tm-txt-secondary)]">Placement Success Rate</div>
              </div>
              <div class="text-center p-4 bg-[var(--tm-bg-secondary)] rounded-4">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">15</div>
                <div class="text-xs text-[var(--tm-txt-secondary)]">Years Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-12 text-white"
        >
          <h3 class="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Ready to Build the Future of Construction?
          </h3>
          <p class="text-xl opacity-90 mb-8 max-w-200 mx-auto text-white">
            Partner with VMMC's construction industry experts to identify and recruit the
            specialized talent needed for your sustainable building, smart cities, and digital
            transformation initiatives.
          </p>
          <div class="flex flex-col md:flex-row gap-6 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              @click="openConsultationModal"
            >
              <svg
                class="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 4.5v15m7.5-7.5h-15"></path>
              </svg>
              Start Your Construction Transformation
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              @click="openExpertModal"
            >
              <svg
                class="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M17 8l4 4-4 4M7 8l-4 4 4 4"></path>
              </svg>
              Speak with Industry Specialists
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Inject modal controls from parent
  const openExpertModal = inject('openExpertModal') as (() => void) | undefined
  const openConsultationModal = inject('openConsultationModal') as (() => void) | undefined

  // // Fallback handlers if injection fails
  // const handleExpertModal = () => {
  //   if (openExpertModal) {
  //     openExpertModal()
  //   } else {
  //     console.warn('Expert modal handler not available')
  //   }
  // }

  // const handleConsultationModal = () => {
  //   if (openConsultationModal) {
  //     openConsultationModal()
  //   } else {
  //     console.warn('Consultation modal handler not available')
  //   }
  // }
</script>

<style scoped>
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-5xl {
      font-size: 2.5rem;
    }
    .text-6xl {
      font-size: 3rem;
    }
    .py-25 {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
</style>
