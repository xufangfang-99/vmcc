<template>
  <div class="cybersecurity-ai-defense-page min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative py-20 md:py-32 bg-gradient-to-br from-red-600 to-red-800 overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 right-20 w-32 h-32 bg-[var(--tm-bg-white-alpha10)] rounded-full blur-xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 left-20 w-24 h-24 bg-[var(--tm-bg-white-alpha10)] rounded-full blur-xl animate-pulse animation-delay-1000"
        ></div>
        <!-- Security Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="grid grid-cols-8 h-full w-full">
            <div
              v-for="i in 64"
              :key="i"
              class="border border-white/10"
            ></div>
          </div>
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
          <span class="opacity-70">Cybersecurity & AI Defense</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-light leading-tight mb-6">
          Cybersecurity & AI Defense
          <span class="block font-normal">Market Report 2025</span>
        </h1>

        <p class="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
          Cybersecurity is entering a new era in 2025 as enterprises adopt AI both as a defense
          mechanism and as a target of malicious exploitation.
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">$200B+</div>
            <div class="text-sm opacity-90">Global Cybersecurity Spending</div>
          </div>
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">$4.5M</div>
            <div class="text-sm opacity-90">Average Breach Cost</div>
          </div>
          <div
            class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)]"
          >
            <div class="text-3xl font-bold mb-2">Critical</div>
            <div class="text-sm opacity-90">Threat Level</div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
            @click="scrollToContent"
          >
            <span>Read Security Analysis</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </button>
          <button
            class="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-colors duration-300"
            @click="openConsultationModal"
          >
            <span>Security Consultation</span>
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
          <div class="bg-red-50 border-l-4 border-red-500 rounded-6 p-8">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Cybersecurity is entering a new era in 2025 as enterprises adopt AI both as a defense
              mechanism and as a target of malicious exploitation. Global cybersecurity spending is
              projected to surpass
              <strong>USD 200 billion</strong>
              , with AI-driven tools accounting for a significant share.
            </p>
            <div class="bg-white rounded-4 p-6">
              <h3 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Critical Challenge</h3>
              <p class="text-[var(--tm-txt-secondary)]">
                While AI strengthens threat detection and response, attackers are also weaponizing
                AI for sophisticated cyberattacks, creating an escalating arms race in
                cybersecurity.
              </p>
            </div>
          </div>
        </div>

        <!-- Key Updates Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-8">
            Key Security Developments
          </h2>

          <!-- AI-Powered Threat Detection -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              1. AI-Powered Threat Detection
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] mb-6"
            >
              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Enterprises are deploying machine learning models to detect anomalies in real time,
                revolutionizing how organizations identify and respond to security threats.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  class="bg-[var(--tm-bg-primary)] rounded-4 p-6 text-center border border-green-200"
                >
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Financial Institutions
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    AI identifies fraudulent transactions within milliseconds
                  </p>
                </div>

                <div
                  class="bg-[var(--tm-bg-primary)] rounded-4 p-6 text-center border border-blue-200"
                >
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Healthcare Providers
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    AI-driven monitoring protects sensitive patient data
                  </p>
                </div>

                <div
                  class="bg-[var(--tm-bg-primary)] rounded-4 p-6 text-center border border-purple-200"
                >
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
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Enterprise Networks
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Real-time anomaly detection across IT infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Generative AI in Cybercrime -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              2. Generative AI in Cybercrime
            </h3>
            <div class="bg-red-50 border border-red-200 rounded-6 p-8">
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-red-100 rounded-3 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Rising Threat Landscape
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    Malicious actors are leveraging AI capabilities to create more sophisticated and
                    harder-to-detect attacks, fundamentally changing the cybersecurity landscape.
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    AI-Enabled Attack Vectors
                  </h4>
                  <div class="space-y-4">
                    <div class="border-l-4 border-red-400 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">
                        Phishing Campaigns
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Hackers leverage generative AI to create convincing phishing emails and
                        social engineering attacks
                      </p>
                    </div>

                    <div class="border-l-4 border-orange-400 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">
                        Adaptive Malware
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        AI-powered malware adapts dynamically, bypassing traditional firewalls and
                        antivirus tools
                      </p>
                    </div>

                    <div class="border-l-4 border-yellow-400 pl-4">
                      <h5 class="font-medium text-[var(--tm-txt-primary)] mb-1">
                        Deepfake Attacks
                      </h5>
                      <p class="text-sm text-[var(--tm-txt-secondary)]">
                        Deepfake technology increasingly used in social engineering attacks against
                        executives
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Attack Sophistication Metrics
                  </h4>
                  <div class="space-y-4">
                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          AI-Generated Phishing
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">340% ↑</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[85%] bg-red-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">Adaptive Malware</span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">220% ↑</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[70%] bg-orange-500 rounded-2 h-2"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-[var(--tm-txt-secondary)]">
                          Deepfake Incidents
                        </span>
                        <span class="text-sm font-medium text-[var(--tm-txt-primary)]">180% ↑</span>
                      </div>
                      <div class="w-full bg-[var(--tm-bg-tertiary)] rounded-2 h-2">
                        <div class="w-[60%] bg-yellow-500 rounded-2 h-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Zero Trust Architecture Expansion -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              3. Zero Trust Architecture Expansion
            </h3>
            <div
              class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)]"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                    Organizations accelerate adoption of zero trust frameworks to reduce insider
                    risks and strengthen security posture against evolving threats. This approach
                    assumes no implicit trust and requires verification for every access request.
                  </p>

                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Cloud-native security tools integrated into DevSecOps pipelines
                      </span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Governments require critical infrastructure operators to enforce zero trust
                      </span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Continuous verification and least-privilege access models
                      </span>
                    </div>
                  </div>
                </div>

                <div class="bg-[var(--tm-bg-primary)] rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-4">
                    Zero Trust Adoption Progress
                  </h4>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-[var(--tm-txt-secondary)]">Large Enterprises</span>
                      <span class="text-sm font-medium text-[var(--tm-txt-primary)]">78%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-[var(--tm-txt-secondary)]">
                        Government Agencies
                      </span>
                      <span class="text-sm font-medium text-[var(--tm-txt-primary)]">65%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-[var(--tm-txt-secondary)]">Financial Services</span>
                      <span class="text-sm font-medium text-[var(--tm-txt-primary)]">82%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-[var(--tm-txt-secondary)]">Healthcare</span>
                      <span class="text-sm font-medium text-[var(--tm-txt-primary)]">58%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Rising Geopolitical Risks -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              4. Rising Geopolitical Cyber Risks
            </h3>
            <div class="bg-orange-50 border border-orange-200 rounded-6 p-8">
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-3 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-orange-600"
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
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Nation-State Threats Intensify
                  </h4>
                  <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                    The Russia-Ukraine conflict and U.S.-China competition are intensifying cyber
                    defense budgets worldwide, as critical infrastructure becomes a primary target
                    for state-sponsored attacks.
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Critical Targets</h4>
                  <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Energy grids and utilities</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Financial systems</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Defense contractors</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Government networks</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Attack Methods</h4>
                  <ul class="space-y-2 text-sm text-[var(--tm-txt-secondary)]">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Advanced persistent threats</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Supply chain compromises</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Zero-day exploits</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Ransomware campaigns</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white rounded-4 p-6">
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-3">Defense Spending</h4>
                  <div class="space-y-3">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-orange-600 mb-1">+35%</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Cyber defense budgets increase
                      </div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                      <div class="text-xs text-[var(--tm-txt-secondary)]">
                        Threat monitoring operations
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
            Cybersecurity Talent Demand
          </h2>

          <div
            class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] mb-8"
          >
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              Critical Skills Shortage
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Strong demand for
              <strong>
                AI security specialists, ethical hackers, SOC analysts, and cloud security
                architects
              </strong>
              . Organizations will prioritize cross-training employees to handle AI-driven threats
              as the cybersecurity skills gap continues to widen.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-red-100 rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-red-600"
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
                  AI Security Specialists
                </h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">AI Threat Detection & Response</p>
              </div>

              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-3 flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path d="M8 9l3 3-3 3m13 0h-6m-2-5a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Ethical Hackers</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">
                  Penetration Testing & Vulnerability Assessment
                </p>
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
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">SOC Analysts</h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Security Operations Center</p>
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
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    ></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Cloud Security Architects
                </h4>
                <p class="text-xs text-[var(--tm-txt-secondary)]">Cloud Infrastructure Security</p>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 rounded-6 p-8">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Future Resilience Strategy
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Companies combining AI-powered defense with regulatory compliance (GDPR, NIST, ISO
              27001) will strengthen resilience against evolving cyber threats. The focus shifts
              from reactive to proactive, predictive security models that can anticipate and
              neutralize threats before they cause damage.
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div
          class="bg-gradient-to-r from-red-600 to-red-700 rounded-6 p-8 md:p-12 text-white text-center"
        >
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">
            Strengthen Your Cybersecurity Posture
          </h3>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with cybersecurity experts to build resilient defense strategies and recruit
            top-tier security talent to protect your organization against evolving threats.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
              @click="openExpertModal"
            >
              <span>Security Consultation</span>
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-colors duration-300"
              @click="openConsultationModal"
            >
              <span>Talent Assessment</span>
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
    title: 'Cybersecurity & AI Defense Report 2025 | Security Threat Analysis | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive cybersecurity and AI defense analysis for 2025. Global cybersecurity spending surpasses USD 200 billion with AI-driven tools. Expert insights on threat detection, generative AI in cybercrime, zero trust architecture, and geopolitical cyber risks.',
      },
      {
        name: 'keywords',
        content:
          'cybersecurity AI defense, cyber threat detection, generative AI cybercrime, zero trust architecture, nation-state cyberattacks, AI security specialists, SOC analysts, cloud security, cyber defense spending',
      },
      {
        property: 'og:title',
        content: 'Cybersecurity & AI Defense Report 2025 | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Critical analysis of cybersecurity threats and AI defense strategies. $200B+ global spending, $4.5M average breach cost, and emerging AI-powered attack vectors.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
      {
        name: 'twitter:title',
        content: 'Cybersecurity & AI Defense Report 2025 | Critical Security Analysis',
      },
      {
        name: 'twitter:description',
        content:
          'In-depth cybersecurity analysis: AI-powered threats, zero trust adoption, nation-state attacks, and critical talent demands in the $200B+ security market.',
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
        href: 'https://www.vmmcae.com/industries/technology-ai/cybersecurity-ai-defense',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Report',
          name: 'Cybersecurity & AI Defense Report 2025',
          description:
            'Comprehensive analysis of cybersecurity threats, AI defense strategies, and market trends in the global security landscape.',
          author: {
            '@type': 'Organization',
            name: 'Victor Meridian Management Consultancies',
            url: 'https://www.vmmcae.com',
          },
          datePublished: '2025-01-15',
          url: 'https://www.vmmcae.com/industries/technology-ai/cybersecurity-ai-defense',
          about: ['Cybersecurity', 'AI Defense', 'Threat Detection', 'Security Talent'],
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
  .w-\[85\%\] {
    width: 85%;
  }
  .w-\[70\%\] {
    width: 70%;
  }
  .w-\[60\%\] {
    width: 60%;
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
