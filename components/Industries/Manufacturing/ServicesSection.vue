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
          Manufacturing Talent Solutions
        </h2>
        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          Comprehensive recruitment and consulting services for manufacturing Industry 4.0
          transformation, connecting organizations with skilled professionals in smart factories,
          automation integration, and digital manufacturing technologies.
        </p>
      </div>

      <!-- Core Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Executive Search & Digital Leadership -->
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
                Executive Search & Digital Leadership
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Identifying and placing senior manufacturing executives, digital transformation
                leaders, and Industry 4.0 visionaries who drive smart factory implementations and
                automation integration initiatives across global operations.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Chief Manufacturing Officers & Operations Directors
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Digital Transformation & Industry 4.0 Leadership
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Smart Factory & Automation Executives
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- AI & Data Science Recruitment -->
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
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3
                class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                AI & Data Science Recruitment
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Sourcing skilled professionals in artificial intelligence, machine learning, and
                data analytics for manufacturing applications including predictive maintenance,
                quality control, and intelligent production optimization.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Manufacturing Data Scientists & AI Specialists
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Machine Learning & Predictive Analytics Engineers
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Computer Vision & Quality Control Specialists
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Automation & Robotics Engineering -->
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
              <h3
                class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                Automation & Robotics Engineering
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Recruiting automation engineers, robotics specialists, and collaborative robot
                (cobot) experts who design and implement advanced manufacturing automation systems
                and human-machine collaboration solutions.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Automation Engineers & Control Systems Specialists
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Collaborative Robotics (Cobot) Engineers
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    AMR & Mobile Robotics Specialists
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Digital Manufacturing & IoT Integration -->
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
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <h3
                class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                Digital Manufacturing & IoT Integration
              </h3>
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Placing experts in Industrial IoT (IIoT), digital twins, cloud platforms, and edge
                computing to support smart factory infrastructure and real-time manufacturing data
                analytics and connectivity solutions.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Industrial IoT (IIoT) Engineers & Architects
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Digital Twin & Simulation Specialists
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-sm text-[var(--tm-txt-secondary)]">
                    Edge Computing & Cloud Platform Engineers
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
            Specialized Manufacturing Expertise
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Deep domain knowledge across critical Industry 4.0 transformation areas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Supply Chain Digitalization -->
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
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Supply Chain Digitalization
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Supply chain visibility specialists, blockchain experts, and logistics automation
              professionals for end-to-end digitalization and real-time collaboration systems.
            </p>
          </div>

          <!-- Predictive Maintenance -->
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
              Predictive Maintenance
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              IoT sensor specialists, condition monitoring experts, and reliability engineers
              developing predictive maintenance systems for zero unplanned downtime manufacturing.
            </p>
          </div>

          <!-- Human-Machine Collaboration -->
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
              Human-Machine Collaboration
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              AR/VR specialists, collaborative robotics engineers, and workforce transformation
              experts enabling effective human-robot collaboration in smart factories.
            </p>
          </div>

          <!-- Smart Quality Control -->
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
              Smart Quality Control
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Computer vision engineers, AI quality specialists, and statistical process control
              experts implementing zero-defect production and intelligent quality monitoring.
            </p>
          </div>

          <!-- Cybersecurity & Risk Management -->
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
              Cybersecurity & Risk Management
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Industrial cybersecurity specialists, operational technology (OT) security experts,
              and risk management professionals protecting connected manufacturing environments.
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
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Workforce Transformation
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Change management specialists, digital training experts, and organizational
              development professionals leading the transition to data-driven manufacturing roles.
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
              <p class="text-[var(--tm-txt-secondary)]">
                Strategic presence across key manufacturing markets
              </p>
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
              <p class="text-[var(--tm-txt-secondary)]">Manufacturing Industry 4.0 track record</p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6">
              <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">1,200+</div>
              <div class="text-sm font-medium text-[var(--tm-txt-primary)] mb-1">
                Manufacturing Professionals Placed
              </div>
              <div class="text-xs text-[var(--tm-txt-secondary)]">
                Across Industry 4.0 and smart factory projects
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-[var(--tm-bg-secondary)] rounded-4">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">96%</div>
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
            Ready to Lead Manufacturing's Digital Future?
          </h3>
          <p class="text-xl opacity-90 mb-8 max-w-200 mx-auto text-white">
            Partner with VMMC's manufacturing industry experts to identify and recruit the
            specialized talent needed for your Industry 4.0 transformation, smart factory
            implementation, and digital manufacturing initiatives.
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
              Start Your Manufacturing Transformation
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
              Speak with Industry 4.0 Specialists
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
