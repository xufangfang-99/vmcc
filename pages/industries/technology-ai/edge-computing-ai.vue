<template>
  <div class="edge-computing-ai-page min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative py-20 md:py-32 bg-gradient-to-br from-cyan-600 to-blue-700 overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 right-20 w-32 h-32 bg-[var(--tm-bg-white-alpha10)] rounded-full blur-xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 left-20 w-24 h-24 bg-[var(--tm-bg-white-alpha10)] rounded-full blur-xl animate-pulse animation-delay-1000"
        ></div>
        <!-- Network Pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg
            class="w-full h-full"
            viewBox="0 0 400 400"
          >
            <defs>
              <pattern
                id="network-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="2"
                  fill="white"
                  opacity="0.5"
                />
                <line
                  x1="20"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="white"
                  stroke-width="0.5"
                  opacity="0.3"
                />
                <line
                  x1="20"
                  y1="20"
                  x2="20"
                  y2="40"
                  stroke="white"
                  stroke-width="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#network-pattern)"
            />
          </svg>
        </div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <!-- Breadcrumb -->
        <div class="flex items-center justify-center gap-2 mb-8 text-sm opacity-90">
          <NuxtLink
            to="/"
            class="hover:opacity-80 transition-opacity duration-300"
          >
            Home
          </NuxtLink>
          <span>/</span>
          <NuxtLink
            to="/industries"
            class="hover:opacity-80 transition-opacity duration-300"
          >
            Industries
          </NuxtLink>
          <span>/</span>
          <NuxtLink
            to="/industries/technology-ai"
            class="hover:opacity-80 transition-opacity duration-300"
          >
            Technology & AI
          </NuxtLink>
          <span>/</span>
          <span class="opacity-70">Edge Computing + AI</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-light leading-tight mb-6">
          Edge Computing + AI
          <span class="block font-normal">Use Cases Report 2025</span>
        </h1>

        <p class="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
          The convergence of edge computing and AI reshapes how enterprises process, analyze, and
          act on data by shifting computation closer to the data source.
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">50%</div>
            <div class="text-sm opacity-90">Enterprise Data at Edge by 2026</div>
          </div>
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">Ultra-Low</div>
            <div class="text-sm opacity-90">Latency AI Services</div>
          </div>
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">5G</div>
            <div class="text-sm opacity-90">Infrastructure Integration</div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-3 bg-white text-cyan-600 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
            @click="scrollToContent"
          >
            <span>Explore Use Cases</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              ></path>
            </svg>
          </button>
          <button
            class="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-colors duration-300"
            @click="openConsultationModal"
          >
            <span>Edge AI Strategy</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Report Content -->
    <section
      id="report-content"
      class="py-20"
    >
      <div class="max-w-4xl mx-auto px-6">
        <!-- Executive Summary -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-6">Headline Insight</h2>
          <div class="bg-cyan-50 border-l-4 border-cyan-500 rounded-6 p-8">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              The convergence of edge computing and AI is reshaping how enterprises process,
              analyze, and act on data. By shifting computation closer to the data source,
              organizations reduce latency, improve real-time decision-making, and unlock new
              business models across industries.
            </p>
            <div class="bg-white rounded-4 p-6">
              <h3 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Transformation Scale</h3>
              <p class="text-[var(--tm-txt-secondary)]">
                In 2025, edge-AI is moving from pilot projects to scaled deployments. By 2026,
                Gartner predicts that
                <strong>
                  over 50% of enterprise data will be processed outside traditional data centers and
                  clouds
                </strong>
                .
              </p>
            </div>
          </div>
        </div>

        <!-- Key Use Cases Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-8">
            Industry Applications
          </h2>

          <!-- Telecom and 5G Expansion -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              1. Telecom and 5G Expansion
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] mb-6"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-3 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    5G Infrastructure Integration
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Telecom operators are integrating edge computing into 5G infrastructure to
                    enable ultra-low-latency AI services, supporting critical applications that
                    require real-time processing and response.
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  class="bg-[var(--tm-bg-primary)] rounded-4 p-6 text-center border border-blue-200"
                >
                  <div
                    class="w-10 h-10 bg-blue-100 rounded-2 flex items-center justify-center mx-auto mb-3"
                  >
                    <svg
                      class="w-5 h-5 text-blue-600"
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
                  <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Smart Cities</h5>
                  <p class="text-xs text-[var(--tm-txt-secondary)]">
                    Traffic management, surveillance, and IoT coordination
                  </p>
                </div>

                <div
                  class="bg-[var(--tm-bg-primary)] rounded-4 p-6 text-center border border-green-200"
                >
                  <div
                    class="w-10 h-10 bg-green-100 rounded-2 flex items-center justify-center mx-auto mb-3"
                  >
                    <svg
                      class="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </div>
                  <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Autonomous Vehicles
                  </h5>
                  <p class="text-xs text-[var(--tm-txt-secondary)]">
                    Real-time navigation and safety systems
                  </p>
                </div>

                <div
                  class="bg-[var(--tm-bg-primary)] rounded-4 p-6 text-center border border-purple-200"
                >
                  <div
                    class="w-10 h-10 bg-purple-100 rounded-2 flex items-center justify-center mx-auto mb-3"
                  >
                    <svg
                      class="w-5 h-5 text-purple-600"
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
                  <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Industrial IoT</h5>
                  <p class="text-xs text-[var(--tm-txt-secondary)]">
                    Process optimization and predictive maintenance
                  </p>
                </div>
              </div>

              <div class="mt-6 bg-blue-50 rounded-4 p-4">
                <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Partnership Acceleration
                </h5>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Partnerships between telcos and cloud providers are accelerating adoption, with
                  major operators deploying edge infrastructure to support latency-critical
                  applications across multiple verticals.
                </p>
              </div>
            </div>
          </div>

          <!-- Manufacturing & Industrial IoT -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              2. Manufacturing & Industrial IoT
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                    AI-enabled edge systems monitor equipment health and predict failures, while
                    real-time quality control with computer vision reduces waste and downtime.
                    Edge-driven robotics enhance automation in factories across global manufacturing
                    operations.
                  </p>

                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Equipment health monitoring and predictive maintenance
                      </span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Real-time quality control with computer vision
                      </span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Edge-driven robotics and factory automation
                      </span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Supply chain optimization and inventory management
                      </span>
                    </div>
                  </div>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Manufacturing Impact Metrics
                  </h4>
                  <div class="space-y-4">
                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          Downtime Reduction
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">35%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[35%] bg-green-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          Quality Improvement
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">28%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[28%] bg-blue-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          Energy Efficiency
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">22%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[22%] bg-orange-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">Cost Reduction</span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">18%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[18%] bg-purple-500 rounded-2 h-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Healthcare Applications -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              3. Healthcare Applications
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]"
            >
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Edge AI in medical devices allows real-time monitoring of patient vitals, while
                hospitals use edge computing for medical imaging, reducing reliance on centralized
                cloud infrastructure and strengthening data privacy by processing sensitive health
                data locally.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-red-200">
                  <div
                    class="w-12 h-12 bg-red-100 rounded-3 flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Patient Monitoring
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Real-time vitals monitoring with AI-powered edge devices for critical care and
                    remote patient management
                  </p>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-blue-200">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-3 flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-blue-600"
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
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Medical Imaging</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Edge computing for CT, MRI, and X-ray analysis, reducing cloud dependency and
                    improving diagnosis speed
                  </p>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-green-200">
                  <div
                    class="w-12 h-12 bg-green-100 rounded-3 flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Data Privacy</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Local processing of sensitive health data ensuring HIPAA compliance and reducing
                    privacy risks
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Retail & Consumer Experience -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              4. Retail & Consumer Experience
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Smart Retail Innovation
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                    Smart retail stores deploy edge-AI for personalized recommendations and
                    automated checkout. Video analytics at the edge improve security and optimize
                    customer flow through intelligent space management and behavioral analysis.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-start gap-3">
                      <div
                        class="w-6 h-6 bg-[var(--tm-bg-accentLight)] rounded-2 flex items-center justify-center flex-shrink-0 mt-0.5"
                      >
                        <svg
                          class="w-3 h-3 text-[var(--tm-accent-primary)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <span class="font-medium text-[var(--tm-txt-primary)]">
                          Personalized Recommendations
                        </span>
                        <p class="text-xs text-[var(--tm-txt-secondary)]">
                          Real-time AI-driven product suggestions
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <div
                        class="w-6 h-6 bg-[var(--tm-bg-accentLight)] rounded-2 flex items-center justify-center flex-shrink-0 mt-0.5"
                      >
                        <svg
                          class="w-3 h-3 text-[var(--tm-accent-primary)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <span class="font-medium text-[var(--tm-txt-primary)]">
                          Automated Checkout
                        </span>
                        <p class="text-xs text-[var(--tm-txt-secondary)]">
                          Frictionless shopping with computer vision
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <div
                        class="w-6 h-6 bg-[var(--tm-bg-accentLight)] rounded-2 flex items-center justify-center flex-shrink-0 mt-0.5"
                      >
                        <svg
                          class="w-3 h-3 text-[var(--tm-accent-primary)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <span class="font-medium text-[var(--tm-txt-primary)]">
                          Video Analytics
                        </span>
                        <p class="text-xs text-[var(--tm-txt-secondary)]">
                          Customer flow optimization and security
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Retail Performance Gains
                  </h4>
                  <div class="space-y-4">
                    <div class="text-center p-4 bg-blue-50 rounded-3">
                      <div class="text-2xl font-bold text-blue-600 mb-1">45%</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Increase in customer engagement
                      </div>
                    </div>

                    <div class="text-center p-4 bg-green-50 rounded-3">
                      <div class="text-2xl font-bold text-green-600 mb-1">32%</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Reduction in checkout time
                      </div>
                    </div>

                    <div class="text-center p-4 bg-purple-50 rounded-3">
                      <div class="text-2xl font-bold text-purple-600 mb-1">28%</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Improvement in inventory accuracy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Challenges & Risks Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-8">
            Implementation Challenges
          </h2>

          <div class="bg-orange-50 border border-orange-200 rounded-6 p-8">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              Key Implementation Barriers
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-white rounded-4 p-6 border border-red-200">
                <div class="w-10 h-10 bg-red-100 rounded-2 flex items-center justify-center mb-4">
                  <svg
                    class="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Security Vulnerabilities
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Distributed edge nodes create more attack surfaces and require enhanced security
                  protocols
                </p>
              </div>

              <div class="bg-white rounded-4 p-6 border border-orange-200">
                <div
                  class="w-10 h-10 bg-orange-100 rounded-2 flex items-center justify-center mb-4"
                >
                  <svg
                    class="w-5 h-5 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Infrastructure Costs
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Higher upfront infrastructure costs compared to centralized cloud computing
                  solutions
                </p>
              </div>

              <div class="bg-white rounded-4 p-6 border border-yellow-200">
                <div
                  class="w-10 h-10 bg-yellow-100 rounded-2 flex items-center justify-center mb-4"
                >
                  <svg
                    class="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Platform Standardization
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Lack of standardized platforms across vendors creates integration and
                  interoperability challenges
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Talent & Outlook Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-8">
            Edge-AI Talent Demand
          </h2>

          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] mb-8"
          >
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              Critical Skills in High Demand
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Rising demand for
              <strong>
                edge-AI engineers, IoT specialists, cybersecurity experts, and system architects
              </strong>
              . Companies combining edge and AI will lead in autonomous systems, smart healthcare,
              and digital retail innovation.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Edge-AI Engineers</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Distributed AI Architecture</p>
              </div>

              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">IoT Specialists</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Connected Device Integration</p>
              </div>

              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-green-600"
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
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Cybersecurity Experts
                </h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Edge Security & Privacy</p>
              </div>

              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">System Architects</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Edge Infrastructure Design</p>
              </div>
            </div>
          </div>

          <div class="bg-cyan-50 border-l-4 border-cyan-500 rounded-6 p-8">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Market Leadership Outlook
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              By 2026, Gartner predicts that over 50% of enterprise data will be processed outside
              traditional data centers and clouds. Companies combining edge and AI will lead in
              autonomous systems, smart healthcare, and digital retail innovation, creating new
              competitive advantages through real-time intelligence and reduced operational costs.
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div
          class="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-6 p-8 md:p-12 text-white text-center"
        >
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Deploy Edge-AI Solutions?
          </h3>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Connect with our edge computing and AI experts to design distributed intelligence
            strategies that unlock real-time decision-making and competitive advantage.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-cyan-600 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
              @click="openExpertModal"
            >
              <span>Edge-AI Strategy</span>
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-colors duration-300"
              @click="openConsultationModal"
            >
              <span>Architecture Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />

    <!-- Expert Consultation Modal -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- Full Consultation Form Modal -->
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

  // Modal state management
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // Expert consultation modal controls
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // Full consultation form modal controls
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Utility functions
  const scrollToContent = () => {
    const element = document.getElementById('report-content')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Page metadata
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'Edge Computing + AI Use Cases Report 2025 | Distributed Intelligence Solutions | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive edge computing and AI convergence analysis for 2025. 50% of enterprise data processed at edge by 2026. Expert insights on 5G integration, industrial IoT, healthcare applications, smart retail, and implementation challenges.',
      },
      {
        name: 'keywords',
        content:
          'edge computing AI, distributed intelligence, 5G edge integration, industrial IoT, edge healthcare, smart retail, edge AI engineers, IoT specialists, real-time processing, autonomous systems',
      },
      {
        property: 'og:title',
        content: 'Edge Computing + AI Use Cases Report 2025 | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Discover how edge computing and AI convergence is reshaping industries. 50% of data processed at edge by 2026, ultra-low latency services, and revolutionary use cases.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
      {
        name: 'twitter:title',
        content: 'Edge Computing + AI Report 2025 | Distributed Intelligence Use Cases',
      },
      {
        name: 'twitter:description',
        content:
          'Essential guide to edge-AI convergence: 5G integration, industrial IoT, healthcare applications, smart retail innovation, and critical talent demands.',
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
        href: 'https://www.vmmcae.com/industries/technology-ai/edge-computing-ai',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Report',
          name: 'Edge Computing + AI Use Cases Report 2025',
          description:
            'Comprehensive analysis of edge computing and AI convergence, covering industry applications, implementation challenges, and talent requirements.',
          author: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            url: 'https://www.vmmcae.com',
          },
          datePublished: '2025-01-15',
          url: 'https://www.vmmcae.com/industries/technology-ai/edge-computing-ai',
          about: [
            'Edge Computing',
            'AI Applications',
            'Distributed Intelligence',
            'IoT Technology',
          ],
        }),
      },
    ],
  })
</script>

<style scoped>
  /* Custom animations */
  .animation-delay-1000 {
    animation-delay: 1s;
  }

  /* Progress bar widths */
  .w-\[35\%\] {
    width: 35%;
  }
  .w-\[28\%\] {
    width: 28%;
  }
  .w-\[22\%\] {
    width: 22%;
  }
  .w-\[18\%\] {
    width: 18%;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-6xl {
      font-size: 3rem;
    }

    .grid-cols-3 {
      grid-template-columns: 1fr;
    }

    .lg\:grid-cols-2 {
      grid-template-columns: 1fr;
    }

    .lg\:grid-cols-3 {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .md\:grid-cols-2 {
      grid-template-columns: 1fr;
    }

    .md\:grid-cols-3 {
      grid-template-columns: 1fr;
    }

    .sm\:flex-row {
      flex-direction: column;
    }
  }
</style>
