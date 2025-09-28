<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-200 h-200 opacity-5 pointer-events-none"
    >
      <div
        class="w-full h-full bg-gradient-radial from-[var(--tm-accent-primary)] to-transparent"
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
            <path d="M3 3v18h18"></path>
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
          </svg>
        </div>
        <h2 class="text-5xl md:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Market Intelligence & Trends
        </h2>
        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          Real-time analysis of construction market dynamics, regional developments, and emerging
          technology adoption across global infrastructure projects.
        </p>
      </div>

      <!-- Global Market Overview -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-12 border border-[var(--tm-bd-light)] mb-15 hover:shadow-[var(--tm-shadow-card)] transition-all duration-300"
      >
        <div class="text-center mb-10">
          <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Global Construction Market Overview
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-150 mx-auto">
            Market transformation driven by sustainability mandates and digital innovation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-light)]"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">8%+</div>
            <div class="text-lg font-medium text-[var(--tm-txt-primary)] mb-2">Annual Growth</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">
              Green building materials market
            </div>
          </div>
          <div
            class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-light)]"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">40%</div>
            <div class="text-lg font-medium text-[var(--tm-txt-primary)] mb-2">Market Share</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">
              Green materials in new construction by 2030
            </div>
          </div>
          <div
            class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-light)]"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">20%</div>
            <div class="text-lg font-medium text-[var(--tm-txt-primary)] mb-2">Global Adoption</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">
              Modular construction methods by 2030
            </div>
          </div>
        </div>
      </div>

      <!-- Regional Trends Analysis -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-15">
        <!-- Middle East Trends -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-center gap-4 mb-6">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Middle East</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">Mega-Projects Focus</p>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <h5 class="font-medium text-[var(--tm-txt-primary)] mb-2">NEOM & Masdar City</h5>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                Mega-projects emphasizing sustainability and AI-driven design, setting new standards
                for smart city development.
              </p>
            </div>
            <div class="pt-4 border-t border-[var(--tm-bd-light)]">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">$2T+</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">
                Smart city investments by 2030
              </div>
            </div>
          </div>
        </div>

        <!-- Asia-Pacific Trends -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-center gap-4 mb-6">
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
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Asia-Pacific</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">Urbanization Leaders</p>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <h5 class="font-medium text-[var(--tm-txt-primary)] mb-2">Rapid Urbanization</h5>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                China, Singapore, and India driving demand for affordable yet eco-friendly housing
                and smart housing projects.
              </p>
            </div>
            <div class="pt-4 border-t border-[var(--tm-bd-light)]">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">6-7%</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">
                Annual modular construction growth
              </div>
            </div>
          </div>
        </div>

        <!-- Europe Trends -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-center gap-4 mb-6">
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
                <path d="M12 3v12M21 12H9"></path>
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Europe</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">Regulation Leaders</p>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <h5 class="font-medium text-[var(--tm-txt-primary)] mb-2">Carbon Neutrality Push</h5>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                Strict green regulations and climate-resilient infrastructure integration with
                renewable energy models.
              </p>
            </div>
            <div class="pt-4 border-t border-[var(--tm-bd-light)]">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">LEED</div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">
                Mandatory green certification standards
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology Innovation Timeline -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-12 border border-[var(--tm-bd-light)] mb-15"
      >
        <div class="text-center mb-10">
          <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Technology Innovation Timeline
          </h3>
          <p class="text-[var(--tm-txt-secondary)]">
            Key technological developments reshaping construction practices
          </p>
        </div>

        <div class="space-y-8">
          <!-- BIM & Digital Twins -->
          <div
            class="flex items-start gap-6 p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">
                  BIM & Digital Twins
                </h4>
                <span
                  class="text-sm font-medium text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
                >
                  Current
                </span>
              </div>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                Building Information Modeling and digital twins improve efficiency, cost management,
                and risk reduction across construction projects.
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Cost Management
                </span>
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Risk Reduction
                </span>
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Efficiency
                </span>
              </div>
            </div>
          </div>

          <!-- 3D Printing & Modular -->
          <div
            class="flex items-start gap-6 p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">
                  3D Printing & Modular Construction
                </h4>
                <span
                  class="text-sm font-medium text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
                >
                  Expanding
                </span>
              </div>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                3D printing and modular construction reduce waste and speed up project delivery,
                with applications expanding beyond housing to commercial and infrastructure.
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Waste Reduction
                </span>
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Speed Delivery
                </span>
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Quality Control
                </span>
              </div>
            </div>
          </div>

          <!-- IoT & AI Analytics -->
          <div
            class="flex items-start gap-6 p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">
                  IoT & AI Analytics
                </h4>
                <span
                  class="text-sm font-medium text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
                >
                  Emerging
                </span>
              </div>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                IoT sensors and AI-driven analytics support predictive maintenance and smart
                facility management, optimizing building operations.
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Predictive Maintenance
                </span>
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Smart Management
                </span>
                <span
                  class="text-xs bg-[var(--tm-bg-white-alpha10)] text-[var(--tm-txt-secondary)] px-3 py-1 rounded-full border border-[var(--tm-bd-light)]"
                >
                  Operations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- In-Demand Talent Spotlight -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 md:p-12 text-white mb-15"
      >
        <div class="text-center mb-10">
          <h3 class="text-3xl md:text-4xl font-semibold mb-4 text-white">
            In-Demand Construction Talent
          </h3>
          <p class="text-xl opacity-90 text-white">
            High-growth roles driving industry transformation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-3 flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
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
            <h4 class="font-semibold text-white mb-2">Green Architects</h4>
            <p class="text-sm text-white/80">Sustainable design specialists</p>
          </div>

          <div
            class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-3 flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-white mb-2">Digital Engineers</h4>
            <p class="text-sm text-white/80">BIM and IoT specialists</p>
          </div>

          <div
            class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-3 flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
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
            <h4 class="font-semibold text-white mb-2">ESG Project Managers</h4>
            <p class="text-sm text-white/80">Sustainability compliance experts</p>
          </div>

          <div
            class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-3 flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
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
            <h4 class="font-semibold text-white mb-2">Smart Infrastructure Engineers</h4>
            <p class="text-sm text-white/80">Urban planning and IoT development</p>
          </div>
        </div>
      </div>

      <!-- Industry Policy & Regulatory Landscape -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Policy Drivers -->
        <div class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)]">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Policy Drivers</h3>
              <p class="text-[var(--tm-txt-secondary)]">Regulatory framework evolution</p>
            </div>
          </div>

          <div class="space-y-6">
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                EU Green Deal & US Inflation Reduction Act
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                Providing subsidies for sustainable construction and green certification mandates
                for public projects.
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                Carbon Taxes & Reporting Standards
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                Pushing construction firms toward greener procurement and transparent environmental
                impact reporting.
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                Green Certification Requirements
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                LEED, BREEAM, and WELL standards becoming mandatory for public infrastructure
                projects globally.
              </p>
            </div>
          </div>
        </div>

        <!-- Investment Trends -->
        <div class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)]">
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
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Investment Trends</h3>
              <p class="text-[var(--tm-txt-secondary)]">Capital allocation patterns</p>
            </div>
          </div>

          <div class="space-y-6">
            <div
              class="flex items-center justify-between p-4 bg-[var(--tm-bg-secondary)] rounded-4"
            >
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Green Building Materials
                </h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Market reach by 2030</p>
              </div>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">$570B</div>
            </div>
            <div
              class="flex items-center justify-between p-4 bg-[var(--tm-bg-secondary)] rounded-4"
            >
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Modular Construction
                </h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Expected market size by 2030</p>
              </div>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">$160B</div>
            </div>
            <div
              class="flex items-center justify-between p-4 bg-[var(--tm-bg-secondary)] rounded-4"
            >
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">Smart City Projects</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Global investment projection</p>
              </div>
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">$2T</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Call Banner -->
      <div class="text-center mt-15">
        <div
          class="bg-[var(--tm-bg-feature)] border border-[var(--tm-bd-accentAlpha15)] rounded-6 p-8"
        >
          <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Ready to Navigate Construction Industry Transformation?
          </h3>
          <p class="text-[var(--tm-txt-secondary)] mb-6 max-w-150 mx-auto">
            Access detailed market intelligence and connect with industry experts to position your
            organization for success in the sustainable construction economy.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--tm-accent-secondary)] transition-all duration-300"
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
              Schedule Strategy Session
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-[var(--tm-accent-primary)] text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-[var(--tm-accent-primary)] hover:text-white transition-all duration-300"
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
              Talk to Construction Experts
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
  /* Background gradient utilities */
  .bg-gradient-radial {
    background: radial-gradient(
      circle,
      var(--first-color, transparent) 0%,
      var(--second-color, transparent) 50%
    );
  }

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
