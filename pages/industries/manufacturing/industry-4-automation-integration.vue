<template>
  <div class="report-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-80vh flex items-center bg-[var(--tm-bg-primary)]"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
          alt="Industry 4.0 Manufacturing"
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
            Industry 4.0 Report
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 text-center leading-tight">
          Industry 4.0 &
          <br />
          <span class="text-[var(--tm-accent-primary)] font-semibold">Automation Integration</span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
        >
          Driving Forces of the Fourth Industrial Revolution in Manufacturing
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">30-50%</div>
            <div class="text-sm text-white/80">Production Efficiency Improvement</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">20-30%</div>
            <div class="text-sm text-white/80">Overall Efficiency Boost</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">ESG</div>
            <div class="text-sm text-white/80">Sustainable Integration</div>
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
                The Fourth Industrial Revolution Overview
              </p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              The global manufacturing sector is undergoing the Fourth Industrial Revolution
              (Industry 4.0), characterized by the deep integration of digitalization, intelligence,
              and automation. By leveraging Industrial IoT, AI, big data analytics, robotics, and
              cloud infrastructure, manufacturing is shifting from traditional assembly lines to
              highly connected, flexible, and adaptive smart production systems.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              This transformation not only boosts productivity but also drives cost optimization,
              enhances supply chain transparency, and creates new business models. This report
              explores key trends, enabling technologies, workforce challenges, and market
              opportunities shaping the future of manufacturing.
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
            Key transformations driving Industry 4.0 adoption across global manufacturing
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Trend 1 -->
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
                  <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Smart Factories as Competitive Advantage
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Smart factories utilize real-time data collection and machine-to-machine
                  communication to increase transparency and efficiency. Pilot factories have
                  demonstrated 30%–50% improvements in production efficiency.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 2 -->
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
                  <path d="M12 3v12M3 12l9-9 9 9"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Shift Toward Flexible Production
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Rising demand for customization and small-batch manufacturing is pushing factories
                  to adopt modular equipment and automated flexible production lines.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 3 -->
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
                  <path d="M12 2v20M2 12h20"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Cross-Industry Technology Convergence
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Integration with 5G, cloud, edge computing, and blockchain enhances real-time
                  supply chain visibility and intelligent decision-making.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 4 -->
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
                  <path d="M12 3v12M21 12H9"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Green and Sustainable Manufacturing
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Industry 4.0 aligns with sustainability goals by using energy-monitoring systems
                  and optimization algorithms to reduce emissions and waste.
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
            Core technologies enabling the Industry 4.0 transformation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Tech 1: IIoT -->
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
              Industrial IoT (IIoT)
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Enables end-to-end monitoring of production processes, supporting predictive
              maintenance and energy management.
            </p>
          </div>

          <!-- Tech 2: AI/ML -->
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
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              AI and Machine Learning
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Applied in quality control, defect detection, and predictive maintenance to minimize
              downtime and improve yield rates.
            </p>
          </div>

          <!-- Tech 3: Cobots -->
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                ></circle>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Collaborative Robots (Cobots)
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Work safely alongside human workers, handling repetitive or hazardous tasks while
              improving human-machine synergy.
            </p>
          </div>

          <!-- Tech 4: AMRs -->
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
                <path d="M8 17l4 4 4-4M12 12v9"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Autonomous Mobile Robots (AMRs)
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Widely adopted in warehouses and production lines to enhance material handling and
              supply chain agility.
            </p>
          </div>

          <!-- Tech 5: Digital Twins -->
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
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Digital Twins</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Virtual replicas of factories and processes enable risk-free testing, process
              optimization, and equipment utilization improvements.
            </p>
          </div>

          <!-- Tech 6: Edge Computing -->
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
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Edge Computing and Cloud
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Edge computing provides real-time responsiveness, while cloud platforms centralize
              data management and analytics.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Workforce Transformation -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="bg-[var(--tm-bg-card)] rounded-8 p-12 border border-[var(--tm-bd-light)]">
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
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">
                Workforce Transformation
              </h2>
              <p class="text-[var(--tm-txt-secondary)]">
                Reshaping labor structures and skill requirements
              </p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Industry 4.0 is reshaping labor structures, reducing traditional manual roles while
              increasing demand for data scientists, automation engineers, and AI specialists.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Companies must invest in workforce training to bridge the digital skills gap and
              create a talent ecosystem that complements automation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges and Opportunities -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Challenges & Opportunities
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)]">
            Navigating the transformation landscape
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Challenges -->
          <div class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
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
                    High Upfront Investment
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Particularly burdensome for SMEs requiring significant capital
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
                    Cybersecurity Risks
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Increased threats to operational continuity
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
                    Lack of Standardization
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    System integration complexities across vendors
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
                    Workforce Skill Transition
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Global challenge in bridging digital skills gap
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Opportunities -->
          <div class="bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
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
                    Efficiency Gains (20-30%)
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Smart manufacturing boosts overall operational efficiency
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
                    Supply Chain Transparency
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Enhanced visibility supports global operations
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
                    ESG-Driven Investment
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Sustainable practices attract long-term capital
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
                    Industrial Upgrading
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Automation accelerates development in emerging markets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conclusion -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="bg-[var(--tm-bg-card)] rounded-8 p-12 border border-[var(--tm-bd-light)]">
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
              <p class="text-[var(--tm-txt-secondary)]">The path forward</p>
            </div>
          </div>

          <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
            Industry 4.0 and automation integration are shaping the long-term trajectory of
            manufacturing. In the coming decade, competitive advantage will depend on digital
            capabilities, automation maturity, and sustainable integration. Manufacturers that
            achieve flexible production and intelligent decision-making will lead the evolving
            global supply chain landscape.
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
          Ready to Lead Industry 4.0 Transformation?
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-180 mx-auto">
          Connect with VMMC's manufacturing experts to identify top talent for your smart factory
          and automation integration initiatives.
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
    title: 'Industry 4.0 & Automation Integration | Manufacturing Intelligence Report | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive report on Industry 4.0 transformation, smart factories, automation integration, and digital manufacturing technologies. Expert insights on IIoT, AI, robotics, and workforce transformation.',
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
