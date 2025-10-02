<!-- components/Industries/Insurance/ServicesSection.vue -->
<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-1/3 right-0 w-100 h-100 bg-gradient-to-l from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          OUR SERVICES
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Insurance
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Talent Solutions
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Comprehensive recruitment services for Insurtech, cyber insurance, climate risk, and
          digital transformation expertise
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
        <!-- Service 1: Insurtech Specialists -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Insurtech Innovation Leaders
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Recruit experts in AI-driven underwriting, predictive analytics, IoT integration, and
            digital product development.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Chief Innovation Officers</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>AI/ML Insurance Engineers</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Insurtech Product Managers</span>
            </li>
          </ul>
        </div>

        <!-- Service 2: Cyber Insurance Experts -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Cyber Insurance Specialists
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Source professionals in cyber risk assessment, incident response, ransomware coverage,
            and security compliance.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Cyber Risk Underwriters</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Cybersecurity Insurance Advisors</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Incident Response Specialists</span>
            </li>
          </ul>
        </div>

        <!-- Service 3: Climate Risk Professionals -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Climate & Catastrophe Risk
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Place experts in parametric insurance, climate modeling, natural disaster analytics, and
            sustainability risk.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Climate Risk Modelers</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Parametric Insurance Specialists</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Catastrophe Analysts</span>
            </li>
          </ul>
        </div>

        <!-- Service 4: Data Analytics & Actuaries -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Data Science & Actuaries
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Recruit talent in predictive modeling, risk pricing, big data analytics, and machine
            learning applications.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Chief Actuaries</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Insurance Data Scientists</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Predictive Modeling Experts</span>
            </li>
          </ul>
        </div>

        <!-- Service 5: Digital Transformation Leaders -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Digital Transformation
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Source leaders in digital strategy, customer experience design, mobile-first platforms,
            and legacy modernization.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Chief Digital Officers</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>CX/UX Design Directors</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Platform Modernization Leaders</span>
            </li>
          </ul>
        </div>

        <!-- Service 6: Blockchain & Smart Contracts -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
            Blockchain Innovation
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Place specialists in smart contracts, decentralized insurance, automated claims, and
            distributed ledger technology.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Blockchain Architects</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Smart Contract Developers</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>DeFi Insurance Experts</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Process Section -->
      <div class="bg-[var(--tm-bg-secondary)] rounded-8 p-10 md:p-12 mb-15">
        <div class="text-center mb-10">
          <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Our Recruitment Process
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-180 mx-auto">
            Streamlined approach to finding the best insurance and risk management talent
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-accent-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              1
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Needs Assessment
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Understand your risk management goals and specialized insurance requirements
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-accent-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              2
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Talent Sourcing</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Access our network of insurance and Insurtech professionals
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-accent-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              3
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Expert Vetting</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Rigorous assessment of technical and industry expertise
            </p>
          </div>

          <!-- Step 4 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-accent-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              4
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Integration Support
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Onboarding and ongoing placement success
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
          Ready to Build Your Insurance Team?
        </h3>
        <p class="text-[var(--tm-txt-secondary)] mb-8 max-w-180 mx-auto">
          Connect with our insurance recruitment specialists to discuss your Insurtech and risk
          management talent needs
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <button
            class="inline-flex items-center justify-center px-8 py-4 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--tm-accent-secondary)] transition-all duration-300"
            @click="openConsultationModal"
          >
            Schedule Consultation
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
          <button
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--tm-accent-primary)] text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-[var(--tm-bg-accentLight)] transition-all duration-300"
            @click="openExpertModal"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            Talk to Experts
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { inject } from 'vue'

  // Inject modal controls from parent
  const openExpertModal = inject<(() => void) | undefined>('openExpertModal')
  const openConsultationModal = inject<(() => void) | undefined>('openConsultationModal')
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
