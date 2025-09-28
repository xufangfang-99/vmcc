<template>
  <div class="ai-regulation-governance-page min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative py-20 md:py-32 bg-gradient-to-br from-purple-600 to-indigo-700 overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 right-20 w-32 h-32 bg-[var(--tm-bg-white-alpha10)] rounded-full blur-xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 left-20 w-24 h-24 bg-[var(--tm-bg-white-alpha10)] rounded-full blur-xl animate-pulse animation-delay-1000"
        ></div>
        <!-- Legal Pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg
            class="w-full h-full"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="legal-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M10 5l5 5-5 5-5-5z"
                  fill="none"
                  stroke="white"
                  stroke-width="0.3"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#legal-pattern)"
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
          <span class="opacity-70">AI Regulation & Governance</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-light leading-tight mb-6">
          AI Regulation & Governance
          <span class="block font-normal">Framework Report 2025</span>
        </h1>

        <p class="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
          AI regulation is becoming a defining issue in 2025 as governments worldwide introduce new
          laws to ensure transparency, safety, and accountability.
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">6%</div>
            <div class="text-sm opacity-90">Global Revenue Fines</div>
          </div>
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">2025</div>
            <div class="text-sm opacity-90">EU AI Act Implementation</div>
          </div>
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">Global</div>
            <div class="text-sm opacity-90">Regulatory Fragmentation</div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
            @click="scrollToContent"
          >
            <span>Read Compliance Guide</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
            </svg>
          </button>
          <button
            class="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-colors duration-300"
            @click="openConsultationModal"
          >
            <span>Compliance Consultation</span>
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
          <div class="bg-purple-50 border-l-4 border-purple-500 rounded-6 p-8">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              AI regulation is becoming a defining issue in 2025 as governments worldwide introduce
              new laws to ensure transparency, safety, and accountability. Enterprises adopting AI
              at scale must balance innovation with compliance.
            </p>
            <div class="bg-white rounded-4 p-6">
              <h3 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Critical Challenge</h3>
              <p class="text-[var(--tm-txt-secondary)]">
                The global regulatory landscape is fragmenting, making cross-border AI governance a
                top priority for multinational companies facing compliance costs and operational
                complexity.
              </p>
            </div>
          </div>
        </div>

        <!-- Key Updates Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-8">
            Regulatory Developments
          </h2>

          <!-- EU AI Act Implementation -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              1. EU AI Act Implementation
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
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    World's First Comprehensive AI Framework
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    The EU AI Act takes effect in 2025, setting the world's first comprehensive AI
                    regulatory framework that will influence global standards and compliance
                    requirements.
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    High-Risk AI Systems Requirements
                  </h4>
                  <div class="space-y-4">
                    <div class="border-l-4 border-red-400 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">Healthcare AI</h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Medical diagnostics and treatment systems must meet strict transparency and
                        audit requirements
                      </p>
                    </div>

                    <div class="border-l-4 border-orange-400 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">Financial AI</h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Credit scoring and risk assessment algorithms require explainability and
                        bias testing
                      </p>
                    </div>

                    <div class="border-l-4 border-yellow-400 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">
                        Critical Infrastructure
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        AI systems controlling essential services must demonstrate safety and
                        reliability
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Compliance Penalties
                  </h4>
                  <div class="space-y-4">
                    <div class="text-center p-4 bg-red-50 rounded-3 border border-red-200">
                      <div class="text-2xl font-bold text-red-600 mb-2">6%</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Maximum fine of annual global revenue
                      </div>
                    </div>

                    <div class="text-center p-4 bg-orange-50 rounded-3 border border-orange-200">
                      <div class="text-2xl font-bold text-orange-600 mb-2">€30M</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Alternative maximum penalty
                      </div>
                    </div>

                    <p class="text-xs text-[var(--tm-txt-secondary)] text-center">
                      Non-compliance may result in fines of up to 6% of annual global revenue or
                      €30M, whichever is higher
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- U.S. and Asia Frameworks -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              2. U.S. and Asia Regulatory Frameworks
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]"
            >
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Different regions are developing distinct approaches to AI governance, creating a
                complex compliance landscape for global organizations operating across multiple
                jurisdictions.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- United States -->
                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-blue-200">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 bg-blue-100 rounded-2 flex items-center justify-center">
                      <svg
                        class="w-4 h-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                        ></path>
                      </svg>
                    </div>
                    <h4 class="font-semibold text-[var(--tm-txt-primary)]">United States</h4>
                  </div>
                  <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Sector-specific AI guidelines</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Ethical use and federal oversight</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Industry self-regulation emphasis</span>
                    </li>
                  </ul>
                </div>

                <!-- China -->
                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-red-200">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 bg-red-100 rounded-2 flex items-center justify-center">
                      <svg
                        class="w-4 h-4 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 class="font-semibold text-[var(--tm-txt-primary)]">China</h4>
                  </div>
                  <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Generative AI platform regulation</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Algorithmic recommendation systems</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Data security and localization</span>
                    </li>
                  </ul>
                </div>

                <!-- Asia-Pacific -->
                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-green-200">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 bg-green-100 rounded-2 flex items-center justify-center">
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 class="font-semibold text-[var(--tm-txt-primary)]">Singapore & Japan</h4>
                  </div>
                  <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>"Trustworthy AI" frameworks</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Innovation-regulation balance</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Sandbox environments for testing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Corporate Governance in AI Adoption -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              3. Corporate Governance in AI Adoption
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]"
            >
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Enterprises are establishing AI ethics boards and appointing Chief AI Officers as
                responsible AI becomes a customer expectation and influences brand reputation across
                all industries.
              </p>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Governance Structure Evolution
                  </h4>
                  <div class="space-y-4">
                    <div class="bg-[var(--tm-bg-primary)] rounded-4 p-4 border border-purple-200">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-2">
                        AI Ethics Boards
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Cross-functional committees overseeing AI development and deployment
                        decisions
                      </p>
                    </div>

                    <div class="bg-[var(--tm-bg-primary)] rounded-4 p-4 border border-indigo-200">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-2">
                        Chief AI Officers
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        C-level executives responsible for AI strategy, governance, and risk
                        management
                      </p>
                    </div>

                    <div class="bg-[var(--tm-bg-primary)] rounded-4 p-4 border border-blue-200">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-2">
                        Third-Party Audits
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        External assessments and explainability tools to ensure compliance
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Corporate Adoption Metrics
                  </h4>
                  <div class="space-y-4">
                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">AI Ethics Boards</span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">58%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[58%] bg-purple-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          Chief AI Officers
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">32%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[32%] bg-indigo-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          Third-Party Audits
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">41%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[41%] bg-blue-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          Explainability Tools
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">67%</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[67%] bg-green-500 rounded-2 h-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Challenges and Risks -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              4. Compliance Challenges and Risks
            </h3>
            <div class="bg-orange-50 border border-orange-200 rounded-6 p-8">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Major Compliance Challenges
                  </h4>
                  <div class="space-y-4">
                    <div class="border-l-4 border-red-500 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">
                        Fragmented Regulations
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Different requirements across jurisdictions increase compliance costs for
                        global companies
                      </p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">
                        Standardization Gap
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Lack of standardized audit tools makes governance inconsistent across
                        organizations
                      </p>
                    </div>

                    <div class="border-l-4 border-yellow-500 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">
                        Ethical Dilemmas
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Data usage and algorithmic bias issues remain unresolved in many
                        implementations
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Compliance Cost Impact
                  </h4>
                  <div class="space-y-4">
                    <div class="text-center p-4 bg-red-50 rounded-3">
                      <div class="text-2xl font-bold text-red-600 mb-2">25-40%</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Increase in compliance costs
                      </div>
                    </div>

                    <div class="text-center p-4 bg-orange-50 rounded-3">
                      <div class="text-2xl font-bold text-orange-600 mb-2">18 months</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Average implementation timeline
                      </div>
                    </div>

                    <div class="text-center p-4 bg-yellow-50 rounded-3">
                      <div class="text-2xl font-bold text-yellow-600 mb-2">3-5 FTE</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Additional compliance staff needed
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
            AI Governance Talent Demand
          </h2>

          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] mb-8"
          >
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              Critical Roles in High Demand
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Strong demand for
              <strong>
                AI compliance officers, policy analysts, legal advisors, and AI ethicists
              </strong>
              . Companies that embed compliance and transparency into AI strategy will gain trust
              and competitive advantage.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  AI Compliance Officers
                </h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">
                  Regulatory Framework Implementation
                </p>
              </div>

              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-indigo-100 rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Policy Analysts</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Regulatory Impact Assessment</p>
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
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Legal Advisors</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">AI Law & Compliance Expertise</p>
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">AI Ethicists</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Responsible AI Development</p>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 border-l-4 border-purple-500 rounded-6 p-8">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Future of AI Governance
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              The next phase of AI governance will focus on
              <strong>global interoperability</strong>
              , shaping how AI is adopted across industries. Organizations that proactively invest
              in compliance infrastructure and governance expertise will be positioned to navigate
              the evolving regulatory landscape while maintaining competitive advantage through
              responsible AI deployment.
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div
          class="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-6 p-8 md:p-12 text-white text-center"
        >
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">Navigate AI Regulatory Complexity</h3>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with our AI governance experts to build compliant, trustworthy AI systems and
            recruit specialized compliance talent for your organization.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
              @click="openExpertModal"
            >
              <span>Compliance Strategy</span>
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
              </svg>
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-colors duration-300"
              @click="openConsultationModal"
            >
              <span>Governance Assessment</span>
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
    title: 'AI Regulation & Governance Report 2025 | Compliance Framework Guide | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive AI regulation and governance analysis for 2025. EU AI Act implementation with 6% revenue fines, fragmented global frameworks, and corporate governance requirements. Expert insights on compliance challenges and talent demands.',
      },
      {
        name: 'keywords',
        content:
          'AI regulation governance, EU AI Act 2025, AI compliance officers, AI ethics boards, Chief AI Officer, AI legal framework, responsible AI, AI policy analysts, regulatory compliance, AI governance talent',
      },
      {
        property: 'og:title',
        content: 'AI Regulation & Governance Report 2025 | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Navigate AI regulatory complexity with expert insights on EU AI Act, global frameworks, corporate governance, and compliance strategies. Critical analysis for business leaders.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
      {
        name: 'twitter:title',
        content: 'AI Regulation & Governance Report 2025 | Compliance Framework Analysis',
      },
      {
        name: 'twitter:description',
        content:
          'Essential guide to AI regulation: EU AI Act implementation, 6% revenue fines, corporate governance requirements, and critical compliance talent demands.',
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
        href: 'https://www.vmmcae.com/industries/technology-ai/ai-regulation-governance',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Report',
          name: 'AI Regulation & Governance Report 2025',
          description:
            'Comprehensive analysis of AI regulatory frameworks, compliance requirements, and governance strategies for global organizations.',
          author: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            url: 'https://www.vmmcae.com',
          },
          datePublished: '2025-01-15',
          url: 'https://www.vmmcae.com/industries/technology-ai/ai-regulation-governance',
          about: ['AI Regulation', 'AI Governance', 'Compliance Framework', 'Legal Technology'],
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
  .w-\[58\%\] {
    width: 58%;
  }
  .w-\[32\%\] {
    width: 32%;
  }
  .w-\[41\%\] {
    width: 41%;
  }
  .w-\[67\%\] {
    width: 67%;
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
