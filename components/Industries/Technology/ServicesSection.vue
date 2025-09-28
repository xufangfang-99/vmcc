<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-200 h-200 opacity-5 pointer-events-none"
    >
      <div
        class="w-full h-full bg-gradient-radial from-[var(--tm-accent-primary)] to-transparent"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-1">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-[var(--tm-bg-accentLight)] rounded-5 mb-6"
        >
          <svg
            class="w-10 h-10 text-[var(--tm-accent-primary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            ></path>
          </svg>
        </div>
        <h2 class="text-4xl md:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Technology Consulting Services
        </h2>
        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed"
        >
          Comprehensive talent solutions and strategic consulting to help organizations navigate AI
          transformation, cloud optimization, cybersecurity challenges, and regulatory compliance in
          2025.
        </p>
      </div>

      <!-- Core Technology Services -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <!-- AI/ML & Cloud Infrastructure Services -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] group"
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
              <path d="M9 19c-5 0-8-3-8-7s3-7 8-7 8 3 8 7-3 7-8 7z"></path>
              <path d="M15 12h6m-3-3v6"></path>
            </svg>
          </div>
          <h3
            class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
          >
            AI/ML & Cloud Strategy
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Navigate the USD 500 billion AI market with expert talent acquisition for MLOps, data
            engineering, and cloud architecture roles driving digital transformation.
          </p>
          <ul class="space-y-2 text-sm text-[var(--tm-txt-light)] mb-6">
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Generative AI implementation specialists</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Multi-cloud architecture experts</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Edge AI development teams</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Domain expertise integration</span>
            </li>
          </ul>
          <button
            class="text-sm font-medium text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
            @click="openServiceModal('ai-cloud')"
          >
            Learn More →
          </button>
        </div>

        <!-- Cybersecurity & AI Defense Services -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] group"
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <h3
            class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
          >
            Cybersecurity Excellence
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Address USD 200 billion cybersecurity market demands with AI security specialists, SOC
            analysts, and zero trust architecture experts.
          </p>
          <ul class="space-y-2 text-sm text-[var(--tm-txt-light)] mb-6">
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>AI-powered threat detection experts</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Zero trust implementation teams</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Cloud security architects</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Ethical hackers & SOC analysts</span>
            </li>
          </ul>
          <button
            class="text-sm font-medium text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
            @click="openServiceModal('cybersecurity')"
          >
            Learn More →
          </button>
        </div>

        <!-- Cloud Cost Optimization Services -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] group"
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
              <path d="M3 3v18h18"></path>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
            </svg>
          </div>
          <h3
            class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
          >
            FinOps & Cost Optimization
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Build FinOps teams achieving 15-25% cost savings in the USD 1.2 trillion cloud market
            through strategic talent placement and automation expertise.
          </p>
          <ul class="space-y-2 text-sm text-[var(--tm-txt-light)] mb-6">
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>FinOps analysts & cost engineers</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Cloud financial architects</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Automation & optimization specialists</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Real-time monitoring teams</span>
            </li>
          </ul>
          <button
            class="text-sm font-medium text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
            @click="openServiceModal('finops')"
          >
            Learn More →
          </button>
        </div>

        <!-- AI Governance & Compliance Services -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] group"
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <line
                x1="16"
                y1="13"
                x2="8"
                y2="13"
              ></line>
              <line
                x1="16"
                y1="17"
                x2="8"
                y2="17"
              ></line>
            </svg>
          </div>
          <h3
            class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
          >
            AI Governance & Compliance
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Navigate EU AI Act implementation and global regulatory frameworks with specialized
            compliance officers, policy analysts, and AI ethicists.
          </p>
          <ul class="space-y-2 text-sm text-[var(--tm-txt-light)] mb-6">
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>AI compliance officers</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Policy analysts & legal advisors</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>AI ethics board establishment</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Chief AI Officer placements</span>
            </li>
          </ul>
          <button
            class="text-sm font-medium text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
            @click="openServiceModal('governance')"
          >
            Learn More →
          </button>
        </div>

        <!-- Edge Computing & IoT Services -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] group"
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
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              ></path>
            </svg>
          </div>
          <h3
            class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
          >
            Edge Computing & IoT
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Prepare for the future where 50% of enterprise data will be processed at the edge by
            2026, with specialized IoT and system architecture talent.
          </p>
          <ul class="space-y-2 text-sm text-[var(--tm-txt-light)] mb-6">
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Edge-AI engineers</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>IoT specialists & architects</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>5G integration experts</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Industrial automation teams</span>
            </li>
          </ul>
          <button
            class="text-sm font-medium text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
            @click="openServiceModal('edge-iot')"
          >
            Learn More →
          </button>
        </div>

        <!-- Strategic Technology Consulting -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--tm-shadow-hover)] group"
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle
                cx="9"
                cy="7"
                r="4"
              ></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3
            class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
          >
            Strategic Consulting
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Transform organizational structures to combine domain expertise with AI capabilities,
            ensuring long-term market leadership in digital transformation.
          </p>
          <ul class="space-y-2 text-sm text-[var(--tm-txt-light)] mb-6">
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Team restructuring strategies</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Cross-training program design</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Technology roadmap planning</span>
            </li>
            <li class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Change management support</span>
            </li>
          </ul>
          <button
            class="text-sm font-medium text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors duration-300"
            @click="openServiceModal('strategic')"
          >
            Learn More →
          </button>
        </div>
      </div>

      <!-- Service Delivery Model -->
      <div
        class="bg-[var(--tm-bg-secondary)] rounded-8 p-8 md:p-12 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)] mb-20"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Our Technology Service Delivery Model
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-3xl mx-auto">
            Comprehensive approach combining market intelligence, talent acquisition, and strategic
            consulting to drive successful technology transformations across global markets.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-2xl font-bold text-[var(--tm-accent-primary)]">1</span>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Market Analysis</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Deep assessment of technology trends, talent demands, and competitive landscape based
              on our daily market intelligence.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-2xl font-bold text-[var(--tm-accent-primary)]">2</span>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Strategy Design</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Custom technology transformation roadmap addressing AI adoption, cloud optimization,
              and regulatory compliance requirements.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-2xl font-bold text-[var(--tm-accent-primary)]">3</span>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Talent Acquisition
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Precision recruitment of specialized professionals including MLOps engineers,
              cybersecurity experts, and AI compliance officers.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-2xl font-bold text-[var(--tm-accent-primary)]">4</span>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Implementation</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Ongoing support for team integration, performance optimization, and continuous
              adaptation to evolving technology landscapes.
            </p>
          </div>
        </div>
      </div>

      <!-- Industry Focus Areas -->
      <div class="mb-20">
        <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] text-center mb-12">
          Technology Services Across Industries
        </h3>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div
            class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div class="text-2xl mb-3">🏦</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] text-sm">Banking</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">AI Chatbots & Fraud Detection</p>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div class="text-2xl mb-3">🏥</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] text-sm">Healthcare</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">Diagnostics & Drug Discovery</p>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div class="text-2xl mb-3">🏭</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] text-sm">Manufacturing</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">Smart Factories & IoT</p>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div class="text-2xl mb-3">🛒</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] text-sm">Retail</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">
              Supply Chain & Personalization
            </p>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div class="text-2xl mb-3">📡</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] text-sm">Telecom</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">5G Edge & Smart Cities</p>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-4 p-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div class="text-2xl mb-3">🚗</div>
            <h4 class="font-semibold text-[var(--tm-txt-primary)] text-sm">Automotive</h4>
            <p class="text-xs text-[var(--tm-txt-secondary)] mt-1">Autonomous Vehicles & AI</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-6 p-8 md:p-12 text-white"
        >
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">
            Transform Your Technology Capabilities
          </h3>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with VMMC to build world-class technology teams and navigate the complexities of
            AI transformation, cloud optimization, and regulatory compliance in 2025.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <button
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
              @click="openExpertModal"
            >
              <span>Discuss Your Needs</span>
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
    </div>

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
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
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

  // Service modal handler (placeholder for future implementation)
  const openServiceModal = (_serviceType: string) => {
    // This could open specific service detail modals in the future
    // For now, we'll open the expert consultation modal
    openExpertModal()
  }
</script>

<style scoped>
  /* Background gradient utilities */
  .bg-gradient-radial {
    background: radial-gradient(
      circle,
      var(--first-color, transparent) 0%,
      var(--second-color, transparent) 50%
    );
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .lg\:grid-cols-3 {
      grid-template-columns: repeat(2, 1fr);
    }

    .lg\:grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }

    .lg\:grid-cols-6 {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .md\:grid-cols-2 {
      grid-template-columns: 1fr;
    }

    .lg\:grid-cols-3 {
      grid-template-columns: 1fr;
    }

    .md\:grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }

    .lg\:grid-cols-6 {
      grid-template-columns: repeat(2, 1fr);
    }

    .text-6xl {
      font-size: 3rem;
    }
  }

  @media (max-width: 640px) {
    .grid-cols-2 {
      grid-template-columns: 1fr;
    }

    .md\:grid-cols-4 {
      grid-template-columns: 1fr;
    }

    .lg\:grid-cols-6 {
      grid-template-columns: 1fr;
    }
  }
</style>
