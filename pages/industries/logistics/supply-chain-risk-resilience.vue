<!-- pages/industries/logistics/supply-chain-risk-resilience.vue -->
<template>
  <div class="report-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-80vh flex items-center bg-[var(--tm-bg-primary)]"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
          alt="Supply Chain Risk Management"
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
            to="/industries/logistics"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Logistics
          </NuxtLink>
          <span class="text-white/50">/</span>
          <span class="text-[var(--tm-accent-primary)] font-semibold text-sm">
            Risk & Resilience
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 text-center leading-tight">
          Supply Chain Risk Management
          <br />
          <span class="text-[var(--tm-accent-primary)] font-semibold">and Resilience Building</span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
        >
          Early Warning Systems, Supplier Diversification, and Business Continuity
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Proactive</div>
            <div class="text-sm text-white/80">Risk Identification</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Adaptive</div>
            <div class="text-sm text-white/80">Response Systems</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Resilient</div>
            <div class="text-sm text-white/80">Network Design</div>
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Executive Summary</h2>
              <p class="text-[var(--tm-txt-secondary)]">Navigating an uncertain world</p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Global supply chains are increasingly exposed to risks—from geopolitical conflicts and
              natural disasters to pandemics and cyber-attacks. Building resilient supply chains has
              become essential not just for continuity but for gaining competitive advantage in
              uncertain times.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Companies are enhancing resilience through supplier diversification, digital twins,
              and early warning systems to maintain business continuity. The ability to anticipate,
              absorb, and rapidly recover from disruptions has become a defining characteristic of
              successful organizations in the modern global economy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Industry Landscape -->
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
                <path
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">
                Current Industry Landscape
              </h2>
              <p class="text-[var(--tm-txt-secondary)]">Vulnerabilities and wake-up calls</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Recent years have exposed the vulnerabilities of global supply chains. The COVID-19
              pandemic, trade tensions between the US and China, the Russia-Ukraine conflict, and
              regional instabilities have all revealed the fragility of just-in-time supply models
              and single-source dependencies.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Major companies like Apple, Toyota, and Nike have experienced significant disruptions,
              prompting a strategic shift from cost optimization to resilience building. These
              experiences have demonstrated that the true cost of supply chain fragility far exceeds
              the savings from lean operations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Risk Categories -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Supply Chain Risk Categories
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Understanding the diverse threats to supply continuity
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Risk 1: Geopolitical -->
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Geopolitical Risks
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Trade tensions, sanctions, conflicts, and policy changes affecting cross-border
              operations
            </p>
          </div>

          <!-- Risk 2: Natural Disasters -->
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
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Natural Disasters
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Earthquakes, floods, hurricanes, and climate events disrupting logistics
              infrastructure
            </p>
          </div>

          <!-- Risk 3: Pandemics -->
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Public Health Crises
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Pandemics and health emergencies causing labor shortages and operational shutdowns
            </p>
          </div>

          <!-- Risk 4: Cyber Attacks -->
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
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">Cyber Threats</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Ransomware, data breaches, and system failures compromising supply chain operations
            </p>
          </div>

          <!-- Risk 5: Supplier Failures -->
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Supplier Failures
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Bankruptcy, quality issues, or capacity constraints from key suppliers
            </p>
          </div>

          <!-- Risk 6: Demand Volatility -->
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
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Demand Fluctuations
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Unexpected market changes and consumer behavior shifts creating inventory challenges
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resilience Strategies -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Resilience Building Strategies
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Key approaches to strengthen supply chain resilience
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Strategy 1: Risk Analysis -->
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
                  Risk Analysis and Early Warning Systems
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Using AI and big data to monitor supply chain health in real-time, identifying
                  potential disruptions before they escalate.
                </p>
              </div>
            </div>
          </div>

          <!-- Strategy 2: Supplier Diversification -->
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
                  Supplier Diversification and Multi-Sourcing
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Reducing reliance on single suppliers or geographic regions by developing
                  alternative sourcing strategies and backup suppliers.
                </p>
              </div>
            </div>
          </div>

          <!-- Strategy 3: Digital Twins -->
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
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Digital Twins and Scenario Planning
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Creating virtual replicas of supply chains to simulate disruptions and test
                  response strategies before real crises occur.
                </p>
              </div>
            </div>
          </div>

          <!-- Strategy 4: Collaboration -->
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Cross-Industry Collaboration Platforms
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Sharing risk intelligence and coordinating responses across partners to create
                  ecosystem-wide resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Leaders -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Resilience Pioneers
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">Companies leading the way in risk management</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">Apple</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
              Diversified manufacturing across multiple countries after experiencing China-dependent
              disruptions
            </p>
            <div class="text-sm font-semibold text-[var(--tm-accent-primary)]">
              Geographic Diversification
            </div>
          </div>

          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
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
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">Toyota</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
              Implemented advanced early warning systems and supplier resilience programs after
              earthquake disruptions
            </p>
            <div class="text-sm font-semibold text-[var(--tm-accent-primary)]">
              Predictive Risk Systems
            </div>
          </div>

          <div class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">Nike</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
              Built multi-tier supplier visibility and backup manufacturing capacity across regions
            </p>
            <div class="text-sm font-semibold text-[var(--tm-accent-primary)]">
              Supplier Network Resilience
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Metrics -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Resilience Impact Metrics
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">The business value of robust risk management</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-6 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">70%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Faster Recovery Time</div>
          </div>

          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-6 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">60%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Reduced Disruption Impact</div>
          </div>

          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-6 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">45%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Lower Total Risk Cost</div>
          </div>

          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-6 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">85%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Business Continuity Rate</div>
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
              <p class="text-[var(--tm-txt-secondary)]">Resilience as competitive advantage</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              In the future, supply chain resilience will not just be a defensive measure but a
              source of competitive advantage. Companies that can quickly adapt to disruptions,
              maintain operational stability, and respond flexibly to market changes will outperform
              their peers and win customer trust.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              The integration of AI-powered early warning systems, digital twins for scenario
              planning, and collaborative risk-sharing platforms will create supply chains that are
              not only reactive but proactive—anticipating disruptions before they occur and
              automatically adapting to changing conditions. Organizations that view resilience as a
              strategic investment rather than a cost center will be best positioned to thrive in an
              increasingly uncertain world.
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
          Build Your Risk Management Team
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-180 mx-auto">
          Partner with VMMC to recruit supply chain risk analysts, resilience planners, digital twin
          specialists, and business continuity experts.
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
      'Supply Chain Risk Management and Resilience Building | Logistics Intelligence Report | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of risk identification, supplier diversification, digital twins, early warning systems, and collaboration platforms building supply chain resilience.',
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
