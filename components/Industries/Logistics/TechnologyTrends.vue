<!-- components/Industries/Logistics/TechnologyTrends.vue -->
<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 left-0 w-120 h-120 bg-gradient-to-br from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-100 h-100 bg-gradient-to-tl from-[var(--tm-accent-secondary)]/5 to-transparent rounded-full blur-3xl"
    ></div>

    <div class="max-w-350 mx-auto px-6 relative z-1">
      <!-- Section Header -->
      <div class="text-center mb-15">
        <div
          class="inline-flex items-center gap-2 bg-[var(--tm-bg-accentLight)] text-[var(--tm-accent-primary)] px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          TECHNOLOGY TRENDS
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Logistics Technology
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Innovation Drivers
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Key technologies transforming supply chain operations and logistics management
        </p>
      </div>

      <!-- Main Technology Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-15">
        <!-- Technology 1: Blockchain -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <div class="flex items-start gap-6 mb-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Blockchain Technology
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Enhancing transparency and anti-counterfeiting in cross-border transactions through
                immutable ledgers and smart contracts.
              </p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">
                Transparent supply chain tracking
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">
                Anti-counterfeiting verification
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">
                Automated smart contract execution
              </span>
            </div>
          </div>
        </div>

        <!-- Technology 2: AI and Machine Learning -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <div class="flex items-start gap-6 mb-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                AI and Machine Learning
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Improving demand forecasting, transport routing, and warehouse management through
                intelligent algorithms and predictive analytics.
              </p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">
                Predictive demand forecasting
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">Optimized route planning</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">
                Intelligent warehouse operations
              </span>
            </div>
          </div>
        </div>

        <!-- Technology 3: Internet of Things (IoT) -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <div class="flex items-start gap-6 mb-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Internet of Things (IoT)
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Enabling real-time cargo tracking and equipment monitoring throughout the entire
                supply chain journey.
              </p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">Real-time GPS tracking</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">
                Environmental condition monitoring
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">
                Equipment health diagnostics
              </span>
            </div>
          </div>
        </div>

        <!-- Technology 4: Automation and Robotics -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <div class="flex items-start gap-6 mb-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-3">
                Automation and Robotics
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                Increasingly applied in warehouse sorting and last-mile delivery, reducing labor
                costs and improving efficiency.
              </p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">
                Robotic picking and sorting
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">
                Autonomous guided vehicles (AGVs)
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span class="text-sm text-[var(--tm-txt-secondary)]">Drone and robot delivery</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology Impact Stats -->
      <div
        class="bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 md:p-12 text-white mb-15 relative overflow-hidden"
      >
        <div
          class="absolute -right-1/4 -bottom-1/4 w-100 h-100 bg-white/10 rounded-full blur-3xl"
        ></div>

        <div class="relative z-1">
          <h3 class="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Technology Impact Metrics
          </h3>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">40%</div>
              <div class="text-sm text-white/80">Cost Reduction via Automation</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">60%</div>
              <div class="text-sm text-white/80">Faster Warehouse Operations</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">85%</div>
              <div class="text-sm text-white/80">Improved Forecast Accuracy</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div class="text-sm text-white/80">Real-Time Tracking Coverage</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Technologies -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Digital Twins -->
        <div class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)]">
          <div
            class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-4"
          >
            <svg
              class="w-6 h-6 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              ></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Digital Twins</h4>
          <p class="text-sm text-[var(--tm-txt-secondary)]">
            Virtual replicas simulating supply chain operations to predict bottlenecks and
            disruption risks
          </p>
        </div>

        <!-- Big Data Analytics -->
        <div class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)]">
          <div
            class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-4"
          >
            <svg
              class="w-6 h-6 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
            Big Data Analytics
          </h4>
          <p class="text-sm text-[var(--tm-txt-secondary)]">
            Leveraging massive datasets to improve demand forecasting and inventory optimization
          </p>
        </div>

        <!-- Carbon Monitoring -->
        <div class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)]">
          <div
            class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-4"
          >
            <svg
              class="w-6 h-6 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Carbon Monitoring</h4>
          <p class="text-sm text-[var(--tm-txt-secondary)]">
            Data tracking and reporting tools helping companies meet emission reduction targets
          </p>
        </div>
      </div>

      <!-- Future Outlook Section -->
      <div
        class="mt-15 bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]"
      >
        <div class="flex items-center gap-4 mb-6">
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
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
              Future of Logistics Technology
            </h3>
            <p class="text-[var(--tm-txt-secondary)]">Advanced intelligence and sustainability</p>
          </div>
        </div>

        <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
          The future of supply chains lies in advanced intelligence and sustainability. Companies
          will focus on building resilient and eco-friendly supply networks while leveraging
          technology to achieve end-to-end collaboration from suppliers to end consumers.
        </p>

        <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
          Those with strong digital and logistics technology capabilities will gain a significant
          edge in global competition, combining operational efficiency with environmental
          responsibility.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // No props needed for this component
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
