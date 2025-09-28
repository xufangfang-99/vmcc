<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 right-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-br from-[var(--tm-accent-primary)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>
    <div class="absolute bottom-20 left-20 w-60 h-60 opacity-3">
      <div
        class="w-full h-full bg-gradient-to-tr from-[var(--tm-accent-secondary)] to-transparent rounded-full blur-2xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-6 relative z-1">
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
            <path
              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"
            ></path>
            <path d="M12 5L8 21l4-7 4 7-4-16"></path>
          </svg>
        </div>
        <h2 class="text-5xl md:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Industry at a Turning Point
        </h2>
        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          The construction industry is accelerating toward mandatory sustainable practices, with
          digital technologies and smart infrastructure reshaping the global landscape in 2025.
        </p>
      </div>

      <!-- Key Transformation Areas Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-15 mb-25">
        <!-- Infrastructure Investment Surge -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
                Infrastructure Investment Surge
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Major economies including the U.S., EU, and China are increasing spending on
                transportation, energy, and digital infrastructure. Public-private partnerships
                (PPPs) are becoming the preferred financing model for large-scale projects.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Transportation & Energy Infrastructure
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Public-Private Partnership Models
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Digital Infrastructure Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sustainable Building Practices -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Sustainable Building Practices
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Regulations are pushing adoption of low-carbon cement, recycled materials, and
                renewable energy integration. Net-zero buildings are gaining momentum, with ESG
                metrics increasingly tied to investment decisions.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Low-Carbon Cement & Recycled Materials
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Net-Zero Building Standards
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    ESG-Driven Investment Decisions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Technology Transformation -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Technology Transformation
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Building Information Modeling (BIM) and digital twins improve efficiency, cost
                management, and risk reduction. 3D printing and modular construction reduce waste
                and speed up project delivery.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    BIM & Digital Twin Technology
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    3D Printing & Modular Construction
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    IoT Sensors & AI Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Regional Mega-Projects -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
                  r="10"
                ></circle>
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Regional Mega-Projects
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Middle East mega-projects like NEOM and Masdar City emphasize sustainability.
                Asia-Pacific rapid urbanization drives eco-friendly housing demand, while Europe's
                strict regulations push carbon neutrality.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Middle East: NEOM & Masdar City
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Asia-Pacific: Eco-Friendly Urbanization
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Europe: Carbon Neutrality Standards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Market Statistics -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-12 text-white mb-25"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Market Transformation by Numbers
          </h3>
          <p class="text-xl opacity-90 text-white">
            Key metrics driving the construction industry's sustainable future
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl font-bold mb-3 text-white">$570B</div>
            <div class="text-lg font-medium mb-2 text-white">Green Building Materials</div>
            <div class="text-sm opacity-80 text-white">Market size by 2030</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold mb-3 text-white">$160B</div>
            <div class="text-lg font-medium mb-2 text-white">Modular Construction</div>
            <div class="text-sm opacity-80 text-white">Expected market reach by 2030</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold mb-3 text-white">30%</div>
            <div class="text-lg font-medium mb-2 text-white">Sustainable Construction</div>
            <div class="text-sm opacity-80 text-white">Of global market by 2030</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold mb-3 text-white">50%</div>
            <div class="text-lg font-medium mb-2 text-white">Time Reduction</div>
            <div class="text-sm opacity-80 text-white">Through prefabricated methods</div>
          </div>
        </div>
      </div>

      <!-- Challenges & Opportunities -->
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
              <p class="text-[var(--tm-txt-secondary)]">Critical barriers to transformation</p>
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
                  Rising Material Costs
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Sustainable materials command premium pricing, impacting project budgets
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
                  Skilled Labor Shortages
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Critical need for digital construction and green engineering expertise
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
                  Regulatory Fragmentation
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Inconsistent standards across countries and regions create complexity
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
                Growth Opportunities
              </h3>
              <p class="text-[var(--tm-txt-secondary)]">Strategic advantages for early adopters</p>
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
                  ESG Investment Growth
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Sustainable projects attract premium funding and investor interest
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
                  Technology Efficiency Gains
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Digital tools deliver measurable improvements in time and cost management
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
                  Regulatory Incentives
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Government subsidies and tax benefits support green construction adoption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic can be added here if needed
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
</style>
