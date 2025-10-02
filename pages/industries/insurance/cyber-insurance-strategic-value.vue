<!-- pages/industries/insurance/cyber-insurance-strategic-value.vue -->
<template>
  <div class="report-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-80vh flex items-center bg-[var(--tm-bg-primary)]"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80"
          alt="Cyber Insurance"
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
          <span class="text-[var(--tm-accent-primary)] font-semibold text-sm">Cyber Insurance</span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 text-center leading-tight">
          Rising Cyber Risks and
          <br />
          <span class="text-[var(--tm-accent-primary)] font-semibold">
            Strategic Value of Cyber Insurance
          </span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
        >
          Addressing Cyberattacks, Data Breaches, and Ransomware Threats
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$20.4B</div>
            <div class="text-sm text-white/80">Cyber Insurance Market</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">38%</div>
            <div class="text-sm text-white/80">Annual Growth Rate</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$4.5M</div>
            <div class="text-sm text-white/80">Avg. Data Breach Cost</div>
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Executive Summary</h2>
              <p class="text-[var(--tm-txt-secondary)]">The critical role of cyber insurance</p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              With the rise of digitalization and remote work, cyberattacks, data breaches, and
              ransomware incidents have surged, making cyber risk one of the most critical global
              business concerns. Traditional insurance products are ill-equipped to cover these
              complex threats, fueling rapid growth in cyber insurance as a core component of risk
              management.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Insurers are partnering with technology and cybersecurity firms to improve risk
              quantification and innovate product offerings, transforming cyber insurance from a
              reactive payout mechanism into a proactive defense strategy.
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
            Key developments in cyber insurance landscape
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Trend 1: Increased Frequency and Severity -->
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Increased Frequency and Severity of Cyber Risks
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Businesses face more frequent and sophisticated cyberattacks and data breaches,
                  with ransomware incidents doubling year-over-year.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 2: Market Expansion -->
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
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Expansion of the Cyber Insurance Market
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Initially adopted by large corporations, demand is now growing rapidly among SMEs
                  who recognize their vulnerability to cyber threats.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 3: Tech-Driven Risk Assessment -->
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Tech-Driven Risk Assessment
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  AI and big data are being leveraged to analyze attack pathways and potential
                  financial losses, enabling more accurate pricing.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 4: Cross-Industry Collaboration -->
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
                  Cross-Industry Collaboration
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Insurers and cybersecurity firms are co-developing solutions, combining "insurance
                  + prevention" to reduce overall risk exposure.
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
            Forces accelerating cyber insurance adoption
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Driver 1: Data Value -->
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
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Immense Data Value
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Data and digital assets represent immense value and high exposure, making protection
              critical.
            </p>
          </div>

          <!-- Driver 2: Regulations -->
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Data Protection Regulations
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Strengthening of regulations like GDPR and PIPL increases compliance burdens and
              liability.
            </p>
          </div>

          <!-- Driver 3: Reputational Damage -->
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Severe Financial Impact
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Cyber incidents cause severe reputational and financial damage to affected
              organizations.
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
              <p class="text-[var(--tm-txt-secondary)]">Critical obstacles in cyber insurance</p>
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
                  Risk Quantification Difficulty
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Difficulty in quantifying cyber risks; pricing models remain underdeveloped and
                  inconsistent.
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
                  Limited Reinsurance Capacity
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Limited capacity in the reinsurance market restrains cyber insurance expansion and
                  coverage limits.
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
                  Customer Awareness Gap
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Lack of customer awareness regarding coverage scope and value of cyber insurance
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cyber Insurance Statistics -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Cyber Insurance Market Statistics
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">
            Understanding the scale of cyber risk and insurance demand
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$14.8B</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Ransomware Losses 2024</div>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">67%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">SMEs Buying Cyber Coverage</div>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">3,200</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Data Breaches Daily</div>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">$4.5M</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Avg. Breach Cost</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Outlook -->
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
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Future Outlook</h2>
              <p class="text-[var(--tm-txt-secondary)]">Protective shield for the digital age</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Cyber insurance will increasingly integrate into broader corporate cybersecurity
              strategies. Insurers will evolve beyond payout providers, offering risk prevention,
              incident response, and compliance advisory services. Industry-wide adoption of
              standardized risk assessment frameworks will enhance transparency and market
              penetration.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Cyber insurance is set to become a "protective shield" for businesses in the digital
              age, combining financial protection with proactive security measures to create
              comprehensive cyber resilience.
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
          Build Your Cyber Insurance Team
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-180 mx-auto">
          Partner with VMMC to recruit cyber risk underwriters, incident response specialists,
          cybersecurity advisors, and risk quantification experts.
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
      'Rising Cyber Risks and Strategic Value of Cyber Insurance | Insurance Intelligence Report | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of cyberattacks, data breaches, ransomware, and the strategic role of cyber insurance in risk management.',
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
