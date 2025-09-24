<template>
  <div class="min-h-screen bg-tm-bg-primary dark:bg-tm-bg-secondary">
    <!-- Report Header -->
    <section class="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <div class="max-w-1200px mx-auto px-5">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-6 text-white/80 text-sm">
          <NuxtLink
            to="/"
            class="hover:text-white transition-colors no-underline"
          >
            Home
          </NuxtLink>
          <span>/</span>
          <NuxtLink
            to="/industries"
            class="hover:text-white transition-colors no-underline"
          >
            Industries
          </NuxtLink>
          <span>/</span>
          <NuxtLink
            to="/industries/banking-finance"
            class="hover:text-white transition-colors no-underline"
          >
            Banking & Finance
          </NuxtLink>
          <span>/</span>
          <span class="text-white">Digital Transformation Report</span>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span class="text-sm font-500 uppercase tracking-wider">
              Technology Innovation 2024
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-300 mb-6 leading-tight">
            UAE Banking Sector
            <span class="block font-600">Digital Transformation Report</span>
          </h1>

          <p class="text-xl text-white/90 max-w-800px mx-auto mb-8 leading-relaxed">
            Comprehensive analysis of AED 4.5B fintech investments, 90% core business digitization,
            and transformative technology adoption across UAE banking sector
          </p>

          <!-- Key Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-700px mx-auto">
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">AED 4.5B</div>
              <div class="text-xs text-white/80">FinTech Investment</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">90%</div>
              <div class="text-xs text-white/80">Digitization Rate</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">82%</div>
              <div class="text-xs text-white/80">Mobile Banking</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">AED 12T</div>
              <div class="text-xs text-white/80">Digital Transactions</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Table of Contents -->
    <section class="py-12 bg-tm-bg-secondary dark:bg-tm-bg-primary border-b border-tm-bd-card">
      <div class="max-w-1200px mx-auto px-5">
        <h2 class="text-2xl font-600 text-tm-txt-primary mb-8 text-center">Report Contents</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="#current-status"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              I
            </div>
            <span class="text-tm-txt-primary font-500">Current Status & Scale</span>
          </a>
          <a
            href="#core-technology"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              II
            </div>
            <span class="text-tm-txt-primary font-500">Core Technology Applications</span>
          </a>
          <a
            href="#digital-strategies"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              III
            </div>
            <span class="text-tm-txt-primary font-500">Digital Strategies</span>
          </a>
          <a
            href="#regulatory-framework"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              IV
            </div>
            <span class="text-tm-txt-primary font-500">Regulatory Framework</span>
          </a>
          <a
            href="#challenges"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              V
            </div>
            <span class="text-tm-txt-primary font-500">Challenges & Recommendations</span>
          </a>
          <a
            href="#future-trends"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              VI
            </div>
            <span class="text-tm-txt-primary font-500">Future Trends</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Report Content -->
    <div class="max-w-1200px mx-auto px-5 py-16">
      <!-- Section I: Current Status & Scale -->
      <section
        id="current-status"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            I
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">
            Current Status and Scale of Digital Transformation
          </h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            In 2024, the digital transformation of the UAE banking sector accelerated, with annual
            fintech investments reaching
            <strong class="text-purple-600">AED 4.5 billion</strong>
            , a 30% increase from the previous year. By the end of the year,
            <strong class="text-purple-600">90% of banks' core businesses were digitized</strong>
            , and mobile banking user penetration reached 82%, up 7 percentage points from the start
            of the year.
          </p>
        </div>

        <!-- Digital Metrics Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Transaction Volume Analysis</h3>
            <div class="space-y-4">
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">Digital Channel Transactions</span>
                <div class="text-right">
                  <div class="text-xl font-700 text-purple-600">AED 12T</div>
                  <div class="text-xs text-tm-txt-light">68% of total volume</div>
                </div>
              </div>
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">Mobile Payment Growth</span>
                <div class="text-right">
                  <div class="text-xl font-700 text-green-600">+45%</div>
                  <div class="text-xs text-tm-txt-light">AED 3.2T volume</div>
                </div>
              </div>
              <div
                class="flex items-center justify-between p-4 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-xl"
              >
                <span class="text-tm-txt-primary font-500">Traditional Branch Reduction</span>
                <div class="text-right">
                  <div class="text-xl font-700 text-red-500">-35%</div>
                  <div class="text-xs text-tm-txt-light">Since 2020</div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
          >
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Smart Branch Evolution</h3>
            <div class="text-center mb-4">
              <div class="text-3xl font-700 text-purple-600 mb-2">210</div>
              <div class="text-sm text-tm-txt-primary font-500">Smart Branches</div>
              <div class="text-xs text-tm-txt-light">28% of total branches</div>
            </div>
            <div class="space-y-3">
              <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-sm font-500 text-tm-txt-primary">Video Teller Machines</div>
                <div class="text-xs text-tm-txt-secondary">Real-time remote banking assistance</div>
              </div>
              <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-sm font-500 text-tm-txt-primary">Biometric Devices</div>
                <div class="text-xs text-tm-txt-secondary">
                  Enhanced security and user experience
                </div>
              </div>
              <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                <div class="text-sm font-500 text-tm-txt-primary">Self-Service Kiosks</div>
                <div class="text-xs text-tm-txt-secondary">24/7 automated banking services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section II: Core Technology Applications -->
      <section
        id="core-technology"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            II
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">
            Core Technology Applications and Scenario Innovation
          </h2>
        </div>

        <!-- AI & Big Data -->
        <div class="mb-12">
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">
            1. Artificial Intelligence and Big Data
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div
                class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  />
                </svg>
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Customer Service</h4>
              <div class="space-y-3">
                <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-sm font-500 text-tm-txt-primary mb-1">AI Chatbot Deployment</div>
                  <div class="text-lg font-700 text-blue-500">85% of banks</div>
                </div>
                <div class="p-3 bg-blue-500/5 rounded-lg border-l-4 border-blue-500">
                  <div class="text-sm font-500 text-tm-txt-primary">
                    DIB "Sharia Smart Assistant"
                  </div>
                  <div class="text-xs text-tm-txt-secondary">
                    Handles 70% of daily inquiries including Sharia-compliant finance queries
                  </div>
                  <div class="text-xs text-blue-500 font-600 mt-1">
                    Response time: &lt; 10 seconds
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div
                class="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center mb-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Risk Control</h4>
              <div class="space-y-3">
                <div class="p-3 bg-red-500/5 rounded-lg border-l-4 border-red-500">
                  <div class="text-sm font-500 text-tm-txt-primary">NBAD Big Data Analytics</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Cross-border transaction pattern analysis
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3 mt-3">
                  <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                    <div class="text-lg font-700 text-red-500">92%</div>
                    <div class="text-xs text-tm-txt-light">Fraud Detection Accuracy</div>
                  </div>
                  <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                    <div class="text-lg font-700 text-green-500">-28%</div>
                    <div class="text-xs text-tm-txt-light">Fraud Losses (2024)</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div
                class="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Investment Advisory</h4>
              <div class="space-y-3">
                <div class="p-3 bg-green-500/5 rounded-lg border-l-4 border-green-500">
                  <div class="text-sm font-500 text-tm-txt-primary">
                    HSBC "Smart Wealth Planning"
                  </div>
                  <div class="text-xs text-tm-txt-secondary">
                    AI-driven portfolio recommendations including crude oil and gold ETFs
                  </div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-lg font-700 text-green-500">65%</div>
                  <div class="text-xs text-tm-txt-light">User Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Blockchain & Digital Currencies -->
        <div class="mb-12">
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">
            2. Blockchain and Digital Currencies
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-12 h-12 bg-indigo-500/10 text-indigo-500 rounded-xl flex items-center justify-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line
                      x1="12"
                      y1="22"
                      x2="12"
                      y2="12"
                    />
                  </svg>
                </div>
                <h4 class="text-lg font-600 text-tm-txt-primary">Cross-border Settlement</h4>
              </div>
              <div class="space-y-4">
                <div class="p-4 bg-indigo-500/5 rounded-lg border-l-4 border-indigo-500">
                  <div class="text-sm font-500 text-tm-txt-primary mb-2">
                    UAE-Saudi Arabia Blockchain System
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <div class="text-xs text-tm-txt-light">Processing Time</div>
                      <div class="text-sm font-600 text-indigo-500">2 hours → 5 minutes</div>
                    </div>
                    <div>
                      <div class="text-xs text-tm-txt-light">Cost Reduction</div>
                      <div class="text-sm font-600 text-green-500">-40%</div>
                    </div>
                  </div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-xl font-700 text-indigo-500">AED 80B</div>
                  <div class="text-xs text-tm-txt-light">Processed in 2024</div>
                </div>
              </div>
            </div>

            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center text-xl"
                >
                  ₿
                </div>
                <h4 class="text-lg font-600 text-tm-txt-primary">Digital Currency Pilots</h4>
              </div>
              <div class="space-y-4">
                <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-sm font-500 text-tm-txt-primary mb-1">DFSA Approved Banks</div>
                  <div class="text-lg font-700 text-orange-500">3 Banks</div>
                  <div class="text-xs text-tm-txt-light">Digital currency custody services</div>
                </div>
                <div class="p-4 bg-orange-500/5 rounded-lg border-l-4 border-orange-500">
                  <div class="text-sm font-500 text-tm-txt-primary">ADCB Crypto Custody</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Bitcoin and Ethereum storage for institutional clients
                  </div>
                  <div class="text-sm font-600 text-orange-500 mt-1">AUM: AED 1.2B</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Biometrics & Security -->
        <div class="mb-12">
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">
            3. Biometrics and Security Technology
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-12 h-12 bg-teal-500/10 text-teal-500 rounded-xl flex items-center justify-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path
                      d="M21 12c.552 0 1-.448 1-1V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6c0 .552.448 1 1 1h18z"
                    />
                  </svg>
                </div>
                <h4 class="text-lg font-600 text-tm-txt-primary">Identity Verification</h4>
              </div>
              <div class="space-y-4">
                <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-sm font-500 text-tm-txt-primary mb-1">
                    Biometric Login Support
                  </div>
                  <div class="text-lg font-700 text-teal-500">70% of banks</div>
                  <div class="text-xs text-tm-txt-light">Fingerprint or facial recognition</div>
                </div>
                <div class="p-4 bg-teal-500/5 rounded-lg border-l-4 border-teal-500">
                  <div class="text-sm font-500 text-tm-txt-primary">
                    Emirates NBD "Blink Payment"
                  </div>
                  <div class="text-xs text-tm-txt-secondary">
                    Transfers via iris scanning technology
                  </div>
                  <div class="text-sm font-600 text-teal-500 mt-1">1M+ users in 2024</div>
                </div>
              </div>
            </div>

            <div
              class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-6 border border-tm-bd-card"
            >
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h4 class="text-lg font-600 text-tm-txt-primary">Security Protection</h4>
              </div>
              <div class="space-y-4">
                <div class="p-3 bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg">
                  <div class="text-sm font-500 text-tm-txt-primary mb-1">
                    Zero-Trust Architecture
                  </div>
                  <div class="text-lg font-700 text-red-500">60% of banks</div>
                  <div class="text-xs text-tm-txt-light">Enhanced security framework</div>
                </div>
                <div class="p-4 bg-red-500/5 rounded-lg border-l-4 border-red-500">
                  <div class="text-sm font-500 text-tm-txt-primary">
                    Standard Chartered Behavioral Biometrics
                  </div>
                  <div class="text-xs text-tm-txt-secondary">
                    Typing speed analysis for abnormal login detection
                  </div>
                  <div class="text-sm font-600 text-red-500 mt-1">+35% interception rates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section III: Digital Strategies -->
      <section
        id="digital-strategies"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            III
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">
            Digital Strategies of Local and Foreign Banks
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Local Banks Strategy -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl"
              >
                🏦
              </div>
              <h3 class="text-xl font-600 text-tm-txt-primary">
                Local Banks: Scenario Integration & Policy Benefits
              </h3>
            </div>

            <div class="space-y-6">
              <!-- Dubai Islamic Bank -->
              <div class="p-4 bg-emerald-500/5 rounded-xl border-l-4 border-emerald-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Dubai Islamic Bank</h4>
                <p class="text-xs text-tm-txt-secondary mb-3">
                  Integrated digitization with Islamic finance principles
                </p>
                <div class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg p-3">
                  <div class="text-sm font-500 text-tm-txt-primary">"Digital Waqf" Platform</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Online charitable trust donations with transparent fund tracking
                  </div>
                  <div class="text-sm font-600 text-emerald-500 mt-1">
                    AED 500M processed in 2024
                  </div>
                </div>
              </div>

              <!-- Abu Dhabi Commercial Bank -->
              <div class="p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Abu Dhabi Commercial Bank</h4>
                <p class="text-xs text-tm-txt-secondary mb-3">
                  Partnership with local e-commerce integration
                </p>
                <div class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg p-3">
                  <div class="text-sm font-500 text-tm-txt-primary">Noon "Buy Now Pay Later"</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Embedded payment scenarios with major e-commerce platform
                  </div>
                  <div class="grid grid-cols-2 gap-2 mt-2">
                    <div class="text-center">
                      <div class="text-sm font-600 text-blue-500">800K users</div>
                      <div class="text-xs text-tm-txt-light">6 months</div>
                    </div>
                    <div class="text-center">
                      <div class="text-sm font-600 text-blue-500">AED 1.2B</div>
                      <div class="text-xs text-tm-txt-light">Processed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Foreign Banks Strategy -->
          <div
            class="bg-tm-bg-secondary dark:bg-tm-bg-primary rounded-2xl p-8 border border-tm-bd-card"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl"
              >
                🌍
              </div>
              <h3 class="text-xl font-600 text-tm-txt-primary">
                Foreign Banks: Global Technology & Cross-border Linkages
              </h3>
            </div>

            <div class="space-y-6">
              <!-- HSBC -->
              <div class="p-4 bg-blue-500/5 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">HSBC</h4>
                <p class="text-xs text-tm-txt-secondary mb-3">
                  Global "Digital Wealth Hub" established in Dubai
                </p>
                <div class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg p-3">
                  <div class="text-sm font-500 text-tm-txt-primary">
                    Multi-currency Digital Accounts
                  </div>
                  <div class="text-xs text-tm-txt-secondary">
                    Real-time exchange supporting 15 currencies
                  </div>
                  <div class="text-sm font-600 text-blue-500 mt-1">
                    2,000 new HNWI clients (2024)
                  </div>
                </div>
              </div>

              <!-- Citibank -->
              <div class="p-4 bg-indigo-500/5 rounded-xl border-l-4 border-indigo-500">
                <h4 class="text-sm font-600 text-tm-txt-primary mb-2">Citibank</h4>
                <p class="text-xs text-tm-txt-secondary mb-3">
                  API open platform integration with local fintech
                </p>
                <div class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-lg p-3">
                  <div class="text-sm font-500 text-tm-txt-primary">Local Payment Integration</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Connected with 30 payment service providers
                  </div>
                  <div class="text-sm font-600 text-indigo-500 mt-1">
                    Ride-hailing & food delivery apps
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
      <div
        class="text-center py-12 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-3xl mb-12"
      >
        <h3 class="text-2xl font-600 mb-4">Download Complete Digital Transformation Report</h3>
        <p class="text-lg mb-6 max-w-600px mx-auto">
          Access the full analysis of UAE banking digital transformation with detailed case studies,
          implementation strategies, and future projections.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-600 rounded-full hover:bg-white/95 transition-colors"
          >
            Request Report Summary
          </button>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-600 rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors no-underline"
          >
            Request Digital Strategy Consultation
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import FooterSection from '~/components/Home/FooterSection.vue'

  // Set page layout
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'UAE Banking Digital Transformation Report 2024 - AED 4.5B Investment Analysis | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive UAE Banking Digital Transformation Report 2024. Analysis of AED 4.5B fintech investments, 90% digitization, AI implementation, blockchain adoption, and biometric security across UAE banks.',
      },
      {
        name: 'keywords',
        content:
          'UAE banking digitization, fintech investment 2024, AI chatbots, blockchain banking, biometric security, mobile banking penetration, digital transformation UAE banks',
      },
      {
        property: 'og:title',
        content: 'UAE Banking Digital Transformation Report 2024 - AED 4.5B Investment Analysis',
      },
      {
        property: 'og:description',
        content:
          'Deep dive into UAE banking sector digital transformation covering AI, blockchain, biometrics, and innovative strategies from local and foreign banks.',
      },
    ],
  })
</script>
