<!-- pages/industries/insurance/blockchain-smart-contracts-innovation.vue -->
<template>
  <div class="report-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-80vh flex items-center bg-[var(--tm-bg-primary)]"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
          alt="Blockchain Smart Contracts"
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
            to="/industries/insurance"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Insurance
          </NuxtLink>
          <span class="text-white/50">/</span>
          <span class="text-[var(--tm-accent-primary)] font-semibold text-sm">
            Blockchain Innovation
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 text-center leading-tight">
          Blockchain and Smart Contracts
          <br />
          <span class="text-[var(--tm-accent-primary)] font-semibold">
            Driving Insurance Innovation
          </span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
        >
          Decentralized Ledgers, Automated Execution, and Immutable Data
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">85%</div>
            <div class="text-sm text-white/80">Faster Claims Processing</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">60%</div>
            <div class="text-sm text-white/80">Cost Reduction</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">40%</div>
            <div class="text-sm text-white/80">Fraud Reduction</div>
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
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Executive Summary</h2>
              <p class="text-[var(--tm-txt-secondary)]">Transforming insurance operations</p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Blockchain technology and smart contracts are fundamentally transforming the business
              models and operational efficiency of the insurance industry. Through decentralized
              ledgers, automated contract execution, and immutable data, insurers can achieve
              greater transparency, efficiency, and lower costs in risk management.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Smart contracts automate claims processing, reduce manual intervention and fraud risk,
              and enhance customer trust. As blockchain ecosystems mature, insurers are exploring
              new models of inter-company and cross-industry collaboration and data sharing.
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
            Key developments in blockchain insurance
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Trend 1: Automated Claims via Smart Contracts -->
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
                  Automated Claims via Smart Contracts
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Claims are executed automatically when triggering conditions are met,
                  significantly improving speed and efficiency while eliminating manual processes.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 2: Decentralized Risk Management -->
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Decentralized Risk Management
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Shared multi-party data and on-chain records increase transparency and enable
                  innovative insurance products through collaborative risk pooling.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 3: Cross-Company Collaboration -->
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
                  <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Cross-Company Collaboration and Reinsurance Innovation
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Blockchain allows insurers to share risk pools and claims information, creating
                  new reinsurance and risk diversification models.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 4: Customer Data Sovereignty -->
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
                  Customer Data Sovereignty
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Blockchain gives customers greater control over personal data, enhancing privacy
                  and regulatory compliance through decentralized identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Drivers -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Key Drivers
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Forces accelerating blockchain adoption
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Driver 1: Efficiency Demand -->
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
              Efficiency and Transparency
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Continuous demand for efficiency, transparency, and security in claims processing.
            </p>
          </div>

          <!-- Driver 2: Platform Maturity -->
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
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Platform Maturity
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Increasing maturity of blockchain platforms and smart contract standards enabling
              production use.
            </p>
          </div>

          <!-- Driver 3: Investor Interest -->
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Investor Focus</h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Growing investor focus and funding for innovative Insurtech solutions leveraging
              blockchain.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
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
            <div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Key Challenges</h3>
              <p class="text-[var(--tm-txt-secondary)]">
                Critical obstacles in blockchain adoption
              </p>
            </div>
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
                  Regulatory and Legal Frameworks
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Regulatory and legal frameworks still struggle to adapt to blockchain technology
                  and smart contracts.
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
                  Lack of Industry Standards
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Lack of industry-wide standards; cross-platform compatibility remains an issue
                  limiting adoption.
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
                  High Implementation Costs
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  High implementation costs, particularly for on-chain data storage and processing
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Smart Contract Benefits -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Smart Contract Advantages
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">How automated execution transforms insurance</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Benefit 1 -->
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Instant Execution
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Claims processed automatically when conditions are met, eliminating waiting periods
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
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
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Fraud Reduction</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Immutable records and transparent execution reduce fraudulent claims by 40%
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Cost Savings</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              60% reduction in administrative costs through automated processes
            </p>
          </div>

          <!-- Benefit 4 -->
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
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
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Transparency</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              All parties can view and verify contract terms and execution history
            </p>
          </div>

          <!-- Benefit 5 -->
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Enhanced Trust</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Tamper-proof records build trust between insurers and customers
            </p>
          </div>

          <!-- Benefit 6 -->
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Data Portability
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Customers control their data and can easily switch providers
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Blockchain Insurance Use Cases
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">
            Real-world applications transforming the industry
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Use Case 1 -->
          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Flight Delay Insurance
            </h3>
            <p class="text-[var(--tm-txt-secondary)] mb-4">
              Smart contracts automatically trigger payouts when flight data confirms delays
              exceeding policy thresholds, with funds transferred within minutes.
            </p>
            <div
              class="flex items-center gap-2 text-sm text-[var(--tm-accent-primary)] font-semibold"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>85% faster payouts</span>
            </div>
          </div>

          <!-- Use Case 2 -->
          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Crop Insurance</h3>
            <p class="text-[var(--tm-txt-secondary)] mb-4">
              Parametric crop insurance uses IoT sensors and weather data on blockchain to
              automatically compensate farmers when conditions trigger coverage.
            </p>
            <div
              class="flex items-center gap-2 text-sm text-[var(--tm-accent-primary)] font-semibold"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Real-time verification</span>
            </div>
          </div>

          <!-- Use Case 3 -->
          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Health Insurance Claims
            </h3>
            <p class="text-[var(--tm-txt-secondary)] mb-4">
              Patient medical records on blockchain enable instant verification and automated claims
              processing while maintaining privacy through encryption.
            </p>
            <div
              class="flex items-center gap-2 text-sm text-[var(--tm-accent-primary)] font-semibold"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Secure data sharing</span>
            </div>
          </div>

          <!-- Use Case 4 -->
          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Reinsurance Settlements
            </h3>
            <p class="text-[var(--tm-txt-secondary)] mb-4">
              Blockchain-based reinsurance contracts streamline complex multi-party settlements with
              transparent risk sharing and automated reconciliation.
            </p>
            <div
              class="flex items-center gap-2 text-sm text-[var(--tm-accent-primary)] font-semibold"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Multi-party efficiency</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Outlook -->
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
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Future Outlook</h2>
              <p class="text-[var(--tm-txt-secondary)]">The trusted insurance ecosystem</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Blockchain and smart contracts are set to play a central role in insurance product
              innovation, risk management, and inter-company collaboration. Claims processes will
              become more automated and transparent, enhancing customer trust. Insurers will
              leverage on-chain data analytics for precise risk pricing.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              In the long term, blockchain could serve as the foundational infrastructure for a
              "trusted insurance ecosystem," advancing the industry toward a fully digital and
              collaborative future where data flows seamlessly, transactions are instant, and trust
              is built into the infrastructure itself.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-25 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)]"
    >
      <div class="max-w-300 mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-semibold text-white mb-6">
          Build Your Blockchain Insurance Team
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-180 mx-auto">
          Partner with VMMC to recruit blockchain architects, smart contract developers, DeFi
          insurance experts, and distributed ledger specialists.
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
      'Blockchain and Smart Contracts Driving Insurance Innovation | Insurance Intelligence Report | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of decentralized ledgers, automated claims, smart contracts, and customer data sovereignty transforming insurance operations.',
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
