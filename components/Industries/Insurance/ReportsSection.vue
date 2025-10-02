<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-1/4 left-0 w-100 h-100 bg-gradient-to-r from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
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
            <path
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          INTELLIGENCE REPORTS
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Deep Dive into
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Insurance Innovation Trends
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Comprehensive analysis of key transformations shaping the future of insurance and risk
          management
        </p>
      </div>

      <!-- Reports Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Report 1: Insurtech Risk Transformation -->
        <NuxtLink
          to="/industries/insurance/insurtech-risk-transformation"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              alt="Insurtech Risk Transformation"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-[var(--tm-accent-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              TRENDING
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>16 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                INSURTECH
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Insurtech Driving Risk Management Transformation
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              AI, big data, blockchain, and IoT reshaping product design, pricing, risk assessment,
              and claims processes.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>AI and Big Data for Pricing</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>IoT Real-Time Risk Monitoring</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Blockchain Applications</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 2: Cyber Insurance -->
        <NuxtLink
          to="/industries/insurance/cyber-insurance-strategic-value"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
              alt="Cyber Insurance"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              CRITICAL
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>14 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                CYBER RISK
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Rising Cyber Risks and the Strategic Value of Cyber Insurance
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Cyberattacks, data breaches, and ransomware making cyber insurance a core risk
              management component.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Increased Cyber Risk Frequency</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Cyber Insurance Market Expansion</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Tech-Driven Risk Assessment</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 3: Climate & Natural Disaster Insurance -->
        <NuxtLink
          to="/industries/insurance/climate-natural-disaster-insurance"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80"
              alt="Climate Insurance"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              SUSTAINABILITY
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>15 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                CLIMATE RISK
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Climate Change Driving Innovation in Natural Disaster Insurance
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Parametric insurance, satellite monitoring, and climate modeling transforming disaster
              risk management.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Rise of Parametric Insurance</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Satellite & Climate Modeling</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Public-Private Partnerships</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 4: Personalized & On-Demand Insurance -->
        <NuxtLink
          to="/industries/insurance/personalized-ondemand-insurance"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
              alt="Personalized Insurance"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              INNOVATION
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>13 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                PERSONALIZATION
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              The Rise of Personalized and On-Demand Insurance Models
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              AI, data analytics, and mobile platforms enabling flexible, scenario-based insurance
              solutions.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Personalized Product Customization</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>On-Demand Insurance Adoption</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Embedded Insurance Platforms</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 5: Blockchain & Smart Contracts -->
        <NuxtLink
          to="/industries/insurance/blockchain-smart-contracts-innovation"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 lg:col-span-2"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
              alt="Blockchain Smart Contracts"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              FUTURE TECH
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>17 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                BLOCKCHAIN
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Blockchain and Smart Contracts Driving Innovation in Insurance
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Decentralized ledgers, automated execution, and immutable data transforming insurance
              operations and trust.
            </p>

            <!-- Key Topics -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Automated Claims Processing</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Decentralized Risk Management</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Customer Data Sovereignty</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-15 text-center">
        <p class="text-[var(--tm-txt-secondary)] mb-6">
          Need customized insights for your insurance practice?
        </p>
        <button
          class="inline-flex items-center justify-center px-8 py-3 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--tm-accent-secondary)] transition-all duration-300"
          @click="openConsultationModal"
        >
          Request Custom Research
          <svg
            class="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { inject } from 'vue'

  // Inject modal controls from parent
  const openConsultationModal = inject<(() => void) | undefined>('openConsultationModal')
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
