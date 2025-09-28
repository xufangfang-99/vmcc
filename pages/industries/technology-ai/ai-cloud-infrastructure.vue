<template>
  <div class="ai-cloud-infrastructure-page min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative py-20 md:py-32 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 right-20 w-32 h-32 bg-[var(--tm-bg-white-alpha10)] rounded-full blur-xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 left-20 w-24 h-24 bg-[var(--tm-bg-white-alpha10)] rounded-full blur-xl animate-pulse animation-delay-1000"
        ></div>
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
          <span class="opacity-70">AI/ML & Cloud Infrastructure</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-light leading-tight mb-6">
          AI/ML & Cloud Infrastructure
          <span class="block font-normal">Expansion Report 2025</span>
        </h1>

        <p class="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
          AI and cloud infrastructure remain at the core of digital transformation in 2025.
          Companies are moving from experimental pilots to large-scale deployments.
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">$500B+</div>
            <div class="text-sm opacity-90">Global AI Spending</div>
          </div>
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">$1.2T</div>
            <div class="text-sm opacity-90">Cloud Services Market</div>
          </div>
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">20%</div>
            <div class="text-sm opacity-90">Cloud Growth Rate</div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
            @click="scrollToContent"
          >
            <span>Read Full Report</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
          <button
            class="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-colors duration-300"
            @click="openConsultationModal"
          >
            <span>Discuss Insights</span>
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
          <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-6">
            Executive Summary
          </h2>
          <div class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              AI and cloud infrastructure remain at the core of digital transformation in 2025.
              Companies are moving from experimental pilots to large-scale deployments, with
              generative AI and cloud-native modernization shaping business competitiveness.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                <h3 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Market Size</h3>
                <p class="text-[var(--tm-txt-secondary)]">
                  Global AI spending is projected to exceed
                  <strong>USD 500 billion</strong>
                  , while cloud services are expected to surpass
                  <strong>USD 1.2 trillion</strong>
                  this year.
                </p>
              </div>
              <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                <h3 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Growth Rate</h3>
                <p class="text-[var(--tm-txt-secondary)]">
                  Gartner estimates global cloud spending will grow by
                  <strong>20% in 2025</strong>
                  , driven by multi-cloud strategies and hybrid adoption.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Updates Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-8">
            Key Market Updates
          </h2>

          <!-- Generative AI Adoption -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              1. Generative AI Adoption Accelerates
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] mb-6"
            >
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Organizations across industries are rapidly deploying generative AI solutions to
                enhance customer experience, automate processes, and drive innovation.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6 text-center">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Banking</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    AI-driven chatbots for personalized services
                  </p>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6 text-center">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Healthcare</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Generative AI for diagnostics and drug discovery
                  </p>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6 text-center">
                  <div
                    class="w-12 h-12 bg-purple-100 rounded-3 flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Retail</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    AI in supply chain forecasting and marketing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Cloud Spending and Multi-Cloud Strategy -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              2. Cloud Spending and Multi-Cloud Strategy
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                    Enterprises are shifting to multi-cloud strategies to avoid vendor lock-in and
                    enhance resilience, while hybrid cloud adoption rises in regulated industries
                    such as finance and healthcare.
                  </p>

                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Gartner estimates 20% cloud spending growth in 2025
                      </span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Multi-cloud adoption to avoid vendor lock-in
                      </span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Hybrid cloud growth in regulated industries
                      </span>
                    </div>
                  </div>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Cloud Adoption Drivers
                  </h4>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-[var(--tm-txt-secondary)]">Cost Optimization</span>
                      <span class="text-sm font-medium text-[var(--tm-txt-primary)]">85%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-[var(--tm-txt-secondary)]">Scalability</span>
                      <span class="text-sm font-medium text-[var(--tm-txt-primary)]">78%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-[var(--tm-txt-secondary)]">Innovation Speed</span>
                      <span class="text-sm font-medium text-[var(--tm-txt-primary)]">72%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Remote Work Support
                      </span>
                      <span class="text-sm font-medium text-[var(--tm-txt-primary)]">68%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Edge AI Growth -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              3. Edge AI Growth
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]"
            >
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Edge AI is transforming how organizations process data by bringing computation
                closer to the source, enabling real-time decision-making and reducing latency for
                critical applications.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Automotive</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    AI chips embedded into autonomous vehicles for real-time decision-making and
                    navigation
                  </p>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Manufacturing</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Smart manufacturing and logistics adopt AI at the edge to optimize operations
                  </p>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Telecommunications
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Telecom operators use edge AI to support low-latency 5G services
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Security and Compliance Challenges -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              4. Security and Compliance Challenges
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">Security Concerns</h4>
                  <div class="space-y-4">
                    <div class="border-l-4 border-red-400 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">
                        Rising Breach Costs
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Enterprises face rising costs of cloud security breaches, averaging
                        <strong>USD 4.5 million per incident</strong>
                      </p>
                    </div>

                    <div class="border-l-4 border-orange-400 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">
                        Regulatory Pressure
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Governments in the U.S., EU, and Asia are pushing stricter AI governance and
                        compliance frameworks
                      </p>
                    </div>

                    <div class="border-l-4 border-blue-400 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">Responsible AI</h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        "Responsible AI" practices are becoming a key requirement for enterprise
                        adoption
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Security Investment Priorities
                  </h4>
                  <div class="space-y-4">
                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          AI Security Tools
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">92%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[92%] bg-red-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">Cloud Security</span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">88%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[88%] bg-orange-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          Compliance Automation
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">75%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[75%] bg-blue-500 rounded-2 h-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Talent & Outlook Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-8">
            Talent Demand & Market Outlook
          </h2>

          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] mb-8"
          >
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              High-Demand Skills
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Skills in
              <strong>MLOps, data engineering, cloud security architecture, and AI ethics</strong>
              are in highest demand as organizations restructure teams to combine domain expertise
              with AI capabilities.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path d="M9 19c-5 0-8-3-8-7s3-7 8-7 8 3 8 7-3 7-8 7z"></path>
                    <path d="M15 12h6m-3-3v6"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">MLOps Engineers</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Machine Learning Operations</p>
              </div>

              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Data Engineers</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Data Pipeline Architecture</p>
              </div>

              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-3"
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
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Cloud Security</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Security Architecture</p>
              </div>

              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">AI Ethics</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Responsible AI Governance</p>
              </div>
            </div>
          </div>

          <div
            class="bg-[var(--tm-bg-accentLight)] rounded-6 p-8 border border-[var(--tm-accent-primary)]/20"
          >
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Market Leadership Outlook
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Companies that align AI innovation with cost-efficient, secure cloud strategies will
              gain long-term market leadership. Organizations are restructuring teams to combine
              domain expertise with AI capabilities, creating unprecedented opportunities for
              technology professionals who can bridge business needs with technical implementation.
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-6 p-8 md:p-12 text-white text-center"
        >
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Lead AI & Cloud Transformation?
          </h3>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Connect with our technology experts to discuss how these insights can shape your talent
            strategy and accelerate your digital transformation journey.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
              @click="openExpertModal"
            >
              <span>Speak with Experts</span>
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-colors duration-300"
              @click="openConsultationModal"
            >
              <span>Request Consultation</span>
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
    title: 'AI/ML & Cloud Infrastructure Expansion Report 2025 | Technology Insights | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of AI/ML and cloud infrastructure expansion in 2025. Global AI spending projected to exceed USD 500 billion while cloud services surpass USD 1.2 trillion. Expert insights on generative AI adoption, multi-cloud strategies, edge AI growth, and talent demand.',
      },
      {
        name: 'keywords',
        content:
          'AI ML cloud infrastructure, generative AI adoption, cloud spending 2025, multi-cloud strategy, edge AI growth, MLOps engineers, data engineering, cloud security architecture, AI ethics, technology talent demand',
      },
      {
        property: 'og:title',
        content: 'AI/ML & Cloud Infrastructure Expansion Report 2025 | VMMC',
      },
      {
        property: 'og:description',
        content:
          'In-depth analysis of the $500B AI market and $1.2T cloud services expansion. Discover key trends in generative AI, multi-cloud adoption, edge computing, and high-demand technology skills.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
      {
        name: 'twitter:title',
        content: 'AI/ML & Cloud Infrastructure Report 2025 | Technology Market Insights',
      },
      {
        name: 'twitter:description',
        content:
          'Comprehensive analysis of AI/ML and cloud infrastructure trends: $500B AI spending, 20% cloud growth, edge AI adoption, and critical talent demands.',
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
        href: 'https://www.vmmcae.com/industries/technology-ai/ai-cloud-infrastructure',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Report',
          name: 'AI/ML & Cloud Infrastructure Expansion Report 2025',
          description:
            'Comprehensive analysis of AI/ML and cloud infrastructure expansion covering global market trends, technology adoption, and talent demand.',
          author: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            url: 'https://www.vmmcae.com',
          },
          datePublished: '2025-01-15',
          url: 'https://www.vmmcae.com/industries/technology-ai/ai-cloud-infrastructure',
          about: [
            'AI/ML Technology',
            'Cloud Infrastructure',
            'Digital Transformation',
            'Technology Talent',
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

  /* Progress bar widths */
  .w-\[92\%\] {
    width: 92%;
  }
  .w-\[88\%\] {
    width: 88%;
  }
  .w-\[75\%\] {
    width: 75%;
  }
</style>
