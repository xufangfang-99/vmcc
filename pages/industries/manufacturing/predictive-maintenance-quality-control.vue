<template>
  <div class="report-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-80vh flex items-center bg-[var(--tm-bg-primary)]"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
          alt="Predictive Maintenance and Quality Control"
          class="h-full w-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 w-full max-w-350 mx-auto px-6">
        <!-- Breadcrumb -->
        <div
          class="mb-8 flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 w-fit mx-auto"
        >
          <NuxtLink
            to="/"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Home
          </NuxtLink>
          <span class="text-white/50">/</span>
          <NuxtLink
            to="/industries"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Industries
          </NuxtLink>
          <span class="text-white/50">/</span>
          <NuxtLink
            to="/industries/manufacturing"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Manufacturing
          </NuxtLink>
          <span class="text-white/50">/</span>
          <span class="text-[var(--tm-accent-primary)] font-semibold text-sm">
            Predictive Maintenance Report
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 text-center leading-tight">
          Predictive Maintenance &
          <br />
          <span class="text-[var(--tm-accent-primary)] font-semibold">Smart Quality Control</span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
        >
          AI-Driven Excellence in Equipment Reliability and Product Quality
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Zero</div>
            <div class="text-sm text-white/80">Unplanned Downtime Goal</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Real-Time</div>
            <div class="text-sm text-white/80">Quality Monitoring</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">AI/ML</div>
            <div class="text-sm text-white/80">Predictive Analytics</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Executive Summary -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-12 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)]"
        >
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
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
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Executive Summary</h2>
              <p class="text-[var(--tm-txt-secondary)]">
                Core Capabilities in Modern Manufacturing
              </p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Driven by Industry 4.0, predictive maintenance and smart quality control are becoming
              core capabilities in manufacturing. Leveraging IoT sensors, artificial intelligence
              (AI), and machine learning (ML), manufacturers can intervene before equipment failures
              occur and monitor quality in real-time during production.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              This shift reduces downtime, improves product consistency, and enhances customer
              satisfaction. This report examines key trends, technology enablers, case applications,
              and future outlook for predictive maintenance and intelligent quality control systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Trends -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Industry Trends
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Key developments in predictive maintenance and quality control
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Trend 1: Predictive over Reactive -->
          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Predictive Maintenance over Reactive Repair
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Unlike scheduled maintenance or unexpected breakdowns, predictive approaches use
                  data analytics to forecast failures, reducing costs and downtime.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 2: Automation in Quality Inspection -->
          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Automation and Intelligence in Quality Inspection
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  AI-powered computer vision systems are widely adopted in electronics, automotive,
                  and semiconductor sectors, enabling real-time quality monitoring.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 3: In-Process Control -->
          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Shift from End-of-Line to In-Process Control
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Smart quality control integrates into the production process, identifying defects
                  earlier and enabling faster corrective actions.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 4: Data-Driven Improvement -->
          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Data-Driven Continuous Improvement
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Factories use feedback loops to refine product design and optimize manufacturing
                  processes based on quality data insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Technology Drivers -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Key Technology Drivers
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Core technologies enabling predictive maintenance and smart quality control
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Tech 1: IoT Sensors -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
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
              IoT Sensor Networks
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Collect real-time equipment and production data for comprehensive monitoring.
            </p>
          </div>

          <!-- Tech 2: AI/ML Algorithms -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
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
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              AI/ML Algorithms
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Predict failure patterns and optimize maintenance schedules with advanced analytics.
            </p>
          </div>

          <!-- Tech 3: Computer Vision -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Computer Vision</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Applied to defect detection, dimensional measurement, and assembly verification.
            </p>
          </div>

          <!-- Tech 4: Digital Twins -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
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
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Digital Twins</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Virtual models of machines simulate operations to detect risks before they occur.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges and Opportunities -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Challenges & Opportunities
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)]">
            Navigating predictive maintenance and quality control transformation
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Challenges -->
          <div class="bg-[var(--tm-bg-card)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
            <div class="flex items-center gap-4 mb-8">
              <div
                class="w-14 h-14 bg-red-100 dark:bg-red-900/20 rounded-4 flex items-center justify-center"
              >
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
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Challenges</h3>
            </div>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    High Upfront Costs
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Significant investment in IoT infrastructure and AI systems
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Fragmented Data Silos
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Integration challenges across legacy systems
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Algorithm Accuracy Limitations
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Model training requires extensive historical data
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Opportunities -->
          <div class="bg-[var(--tm-bg-card)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
            <div class="flex items-center gap-4 mb-8">
              <div
                class="w-14 h-14 bg-green-100 dark:bg-green-900/20 rounded-4 flex items-center justify-center"
              >
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
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Opportunities</h3>
            </div>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Significant Downtime Reduction
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Predictive maintenance minimizes unplanned stoppages
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Lower Scrap Rates</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Real-time quality control catches defects early
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Improved Product Quality
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Consistent output builds customer confidence
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Stronger Customer Trust
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Enhanced reliability and product consistency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conclusion -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="bg-[var(--tm-bg-primary)] rounded-8 p-12 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Conclusion</h2>
              <p class="text-[var(--tm-txt-secondary)]">The future of manufacturing excellence</p>
            </div>
          </div>

          <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
            Predictive maintenance and smart quality control are evolving into critical pillars of
            manufacturing competitiveness. Companies that achieve "zero unplanned downtime" and
            "zero-defect production" through AI and data integration will lead the next era of
            global manufacturing.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-25 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)]"
    >
      <div class="max-w-300 mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-semibold text-white mb-6">
          Achieve Zero-Defect Manufacturing
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-180 mx-auto">
          Partner with VMMC to recruit AI specialists, IoT engineers, and data scientists who can
          implement predictive maintenance and intelligent quality control systems.
        </p>
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <button
            class="inline-flex items-center justify-center px-10 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
            @click="openConsultationModal"
          >
            Schedule Consultation
          </button>
          <button
            class="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/15 transition-all duration-300"
            @click="openExpertModal"
          >
            Talk to Experts
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />

    <!-- Modals -->
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

  // Modal state
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Page meta
  definePageMeta({
    layout: 'default',
  })

  // SEO
  useHead({
    title:
      'Predictive Maintenance & Smart Quality Control | Manufacturing Intelligence Report | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive report on predictive maintenance, smart quality control, IoT sensors, AI/ML algorithms, computer vision, and zero-defect production in intelligent manufacturing.',
      },
    ],
  })
</script>

<style scoped>
  .report-page {
    min-height: 100vh;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-5xl {
      font-size: 2.5rem;
    }
    .text-7xl {
      font-size: 3.5rem;
    }
  }
</style>
