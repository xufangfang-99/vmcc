<template>
  <div class="min-h-screen bg-tm-bg-primary">
    <!-- Report Header -->
    <section class="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
      <div class="max-w-300 mx-auto px-5">
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
            to="/industries/healthcare-medical-tourism"
            class="hover:text-white transition-colors no-underline"
          >
            Healthcare & Medical Tourism
          </NuxtLink>
          <span>/</span>
          <span class="text-white">Biotechnology Report</span>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span class="text-sm font-500 uppercase tracking-wider">
              Biotechnology Industry 2025
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-300 mb-6 leading-tight">
            Biotechnology Industry
            <span class="block font-600">Innovation Report</span>
          </h1>

          <p class="text-xl text-white/90 max-w-200 mx-auto mb-8 leading-relaxed">
            The biotechnology industry in 2025 continues to be one of the most dynamic sectors in
            global healthcare and life sciences. With applications spanning pharmaceuticals,
            agriculture, and industrial processes, biotech is reshaping economies and societies.
          </p>

          <!-- Key Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-175 mx-auto">
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$1.5T</div>
              <div class="text-xs text-white/80">Market Projection</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">CRISPR</div>
              <div class="text-xs text-white/80">Gene Editing Leader</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">CAR-T</div>
              <div class="text-xs text-white/80">Cell Therapy</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">Global</div>
              <div class="text-xs text-white/80">Innovation Hubs</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Table of Contents -->
    <section class="py-12 bg-tm-bg-secondary border-b border-tm-bd-card">
      <div class="max-w-300 mx-auto px-5">
        <h2 class="text-2xl font-600 text-tm-txt-primary mb-8 text-center">Report Contents</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="#industry-overview"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              I
            </div>
            <span class="text-tm-txt-primary font-500">Industry Overview</span>
          </a>
          <a
            href="#key-trends"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              II
            </div>
            <span class="text-tm-txt-primary font-500">Key Trends & Drivers</span>
          </a>
          <a
            href="#challenges-risks"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              III
            </div>
            <span class="text-tm-txt-primary font-500">Challenges & Risks</span>
          </a>
          <a
            href="#talent-outlook"
            class="flex items-center gap-3 p-4 bg-tm-bg-primary rounded-xl hover:bg-tm-bg-hover transition-colors no-underline"
          >
            <div
              class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
            >
              IV
            </div>
            <span class="text-tm-txt-primary font-500">Outlook & Talent Implications</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Report Content -->
    <div class="max-w-300 mx-auto px-5 py-16">
      <!-- Section I: Industry Overview -->
      <section
        id="industry-overview"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            I
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Industry Overview</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            The biotechnology industry in 2025 continues to be one of the most dynamic sectors in
            global healthcare and life sciences. With applications spanning pharmaceuticals,
            agriculture, and industrial processes, biotech is reshaping economies and societies. The
            global biotech market is projected to exceed USD 1.5 trillion, driven by gene editing,
            synthetic biology, and advanced therapeutics.
          </p>
          <p class="text-lg leading-relaxed mb-6">
            Investment flows remain strong, with venture capital and government funding fueling
            innovation. The convergence of biology, data science, and engineering is creating
            unprecedented opportunities for breakthrough treatments and sustainable solutions.
          </p>
        </div>

        <!-- Market Overview Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Market Scale & Applications</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Market Projection (2025)</span>
                <span class="text-xl font-700 text-emerald-500">$1.5T</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Key Applications</span>
                <span class="text-xl font-700 text-emerald-500">Multi-sector</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Investment Flow</span>
                <span class="text-xl font-700 text-green-500">Strong</span>
              </div>
            </div>
          </div>

          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Innovation Drivers</h3>
            <div class="space-y-3">
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-emerald-500">
                <div class="text-sm font-500 text-tm-txt-primary">Gene Editing Revolution</div>
                <div class="text-xs text-tm-txt-secondary">
                  CRISPR and advanced editing technologies transforming medicine
                </div>
              </div>
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-blue-500">
                <div class="text-sm font-500 text-tm-txt-primary">Synthetic Biology</div>
                <div class="text-xs text-tm-txt-secondary">
                  Engineering organisms for sustainable materials and biofuels
                </div>
              </div>
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-purple-500">
                <div class="text-sm font-500 text-tm-txt-primary">Data-Biology Convergence</div>
                <div class="text-xs text-tm-txt-secondary">
                  AI and bioinformatics accelerating discovery and development
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section II: Key Trends and Drivers -->
      <section
        id="key-trends"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            II
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Key Trends and Drivers</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Gene Editing and CRISPR -->
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Gene Editing and CRISPR</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              CRISPR-based therapies are advancing into late-stage clinical trials, with potential
              applications in rare genetic disorders and oncology.
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">
                  Late-stage clinical trials advancing
                </span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Rare genetic disorders treatment</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Oncology applications expanding</span>
              </div>
            </div>
          </div>

          <!-- Cell and Gene Therapy -->
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  ></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m15.5 7.5-3 3-3-3"></path>
                  <path d="m15.5 16.5-3-3-3 3"></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Cell and Gene Therapy</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              Commercialization of CAR-T and other advanced therapies is accelerating, creating new
              treatment paradigms.
            </p>
            <div class="grid grid-cols-2 gap-3 mt-4">
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <div class="text-sm font-600 text-blue-500">CAR-T</div>
                <div class="text-xs text-tm-txt-light">Commercializing</div>
              </div>
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <div class="text-sm font-600 text-blue-500">New Paradigms</div>
                <div class="text-xs text-tm-txt-light">Treatment models</div>
              </div>
            </div>
          </div>

          <!-- Synthetic Biology -->
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <h3 class="text-lg font-600 text-tm-txt-primary">Synthetic Biology</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              Startups are engineering microorganisms for applications in biofuels, sustainable
              materials, and food production.
            </p>
            <div class="grid grid-cols-3 gap-2">
              <div class="text-center p-2 bg-tm-bg-primary rounded text-xs">
                <div class="font-600 text-purple-500">Biofuels</div>
              </div>
              <div class="text-center p-2 bg-tm-bg-primary rounded text-xs">
                <div class="font-600 text-purple-500">Materials</div>
              </div>
              <div class="text-center p-2 bg-tm-bg-primary rounded text-xs">
                <div class="font-600 text-purple-500">Food Tech</div>
              </div>
            </div>
          </div>

          <!-- Global Biotech Hubs -->
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  ></circle>
                  <path d="M2 12h20"></path>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Globalization of Biotech Hubs</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              The U.S. and Europe remain dominant, while China, Singapore, and Israel are rising as
              biotech innovation centers.
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">US & Europe dominance</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">China, Singapore rising</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Israel innovation center</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section III: Challenges and Risks -->
      <section
        id="challenges-risks"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            III
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Challenges and Risks</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- High Development Costs -->
          <div class="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-red-700">High Development Costs</h3>
            </div>
            <p class="text-red-600 text-sm mb-3">
              Biotech R&D is capital intensive, with long timelines to commercialization.
            </p>
            <div class="text-center p-3 bg-white rounded-lg border border-red-200">
              <div class="text-lg font-700 text-red-500">Capital Intensive</div>
              <div class="text-xs text-red-600">Long development cycles</div>
            </div>
          </div>

          <!-- Regulatory Uncertainty -->
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4"></path>
                  <path
                    d="M21 12c.552 0 1-.448 1-1V5a2 2 0 00-2-2H4a2 2 0 00-2 2v6c0 .552.448 1 1 1h18z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-orange-700">Regulatory Uncertainty</h3>
            </div>
            <p class="text-orange-600 text-sm mb-3">
              Differing approval standards across markets create hurdles for global launches.
            </p>
            <div class="space-y-2">
              <div class="text-xs text-orange-600">• Varying approval standards</div>
              <div class="text-xs text-orange-600">• Cross-market compliance</div>
              <div class="text-xs text-orange-600">• Global launch delays</div>
            </div>
          </div>

          <!-- Ethical Concerns -->
          <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center"
              >
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
              </div>
              <h3 class="text-lg font-600 text-blue-700">Ethical Concerns</h3>
            </div>
            <p class="text-blue-600 text-sm mb-3">
              Gene editing and synthetic biology raise societal debates on safety and ethics.
            </p>
            <div class="space-y-2">
              <div class="text-xs text-blue-600">• Gene editing ethics</div>
              <div class="text-xs text-blue-600">• Safety considerations</div>
              <div class="text-xs text-blue-600">• Societal acceptance</div>
            </div>
          </div>

          <!-- Talent Bottlenecks -->
          <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                  ></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 010 7.75"></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-purple-700">Talent Bottlenecks</h3>
            </div>
            <p class="text-purple-600 text-sm mb-3">
              Shortages in bioinformatics, molecular biology, and regulatory affairs constrain
              growth.
            </p>
            <div class="text-center p-3 bg-white rounded-lg border border-purple-200">
              <div class="text-sm font-600 text-purple-500">Critical Shortage</div>
              <div class="text-xs text-purple-600">Specialized skills gap</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section IV: Outlook and Talent Implications -->
      <section
        id="talent-outlook"
        class="mb-20"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            IV
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Outlook and Talent Implications</h2>
        </div>

        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card"
        >
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">Industry Growth Outlook</h3>
          <p class="text-tm-txt-secondary leading-relaxed mb-8">
            The biotechnology sector is expected to grow rapidly, with breakthroughs in precision
            medicine, agricultural biotech, and sustainable industrial applications. Talent demand
            will center on genetic engineering, bioinformatics, clinical trial management, and
            cross-disciplinary innovation combining biology with digital technologies.
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- Talent Demand Focus Areas -->
            <div>
              <h4 class="text-xl font-600 text-tm-txt-primary mb-4">High-Demand Talent Areas</h4>
              <div class="space-y-3">
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-emerald-500">
                  <div class="font-semibold text-tm-txt-primary">Genetic Engineering</div>
                  <div class="text-sm text-tm-txt-secondary">
                    CRISPR technologies, gene therapy development, synthetic biology
                  </div>
                </div>
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-blue-500">
                  <div class="font-semibold text-tm-txt-primary">Bioinformatics</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Computational biology, data analysis, AI-driven discovery
                  </div>
                </div>
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-purple-500">
                  <div class="font-semibold text-tm-txt-primary">Clinical Trial Management</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Protocol design, regulatory compliance, patient safety
                  </div>
                </div>
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-orange-500">
                  <div class="font-semibold text-tm-txt-primary">Cross-Disciplinary Innovation</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Biology + digital technologies, data science applications
                  </div>
                </div>
              </div>
            </div>

            <!-- Global Competition for Talent -->
            <div>
              <h4 class="text-xl font-600 text-tm-txt-primary mb-4">Global Biotech Ecosystem</h4>
              <p class="text-tm-txt-secondary mb-4">
                Countries investing in biotech ecosystems will attract top global talent and
                research collaborations.
              </p>
              <div class="grid grid-cols-2 gap-3">
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-emerald-500">USA</div>
                  <div class="text-xs text-tm-txt-light">Innovation leader</div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-emerald-500">China</div>
                  <div class="text-xs text-tm-txt-light">Rapid growth</div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-emerald-500">Singapore</div>
                  <div class="text-xs text-tm-txt-light">Asian hub</div>
                </div>
                <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-lg font-700 text-emerald-500">Europe</div>
                  <div class="text-xs text-tm-txt-light">Research excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
      <div
        class="text-center py-12 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl mb-12"
      >
        <h3 class="text-2xl font-600 mb-4">Download Complete Biotechnology Industry Report</h3>
        <p class="text-lg mb-6 max-w-150 mx-auto">
          Access the full biotechnology industry analysis with detailed market projections,
          innovation trends, and talent strategies for biotech professionals and organizations.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-600 rounded-full hover:bg-white/95 transition-colors"
            @click="openExpertModal"
          >
            Request Report Summary
          </button>
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-600 rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors"
            @click="openConsultationModal"
          >
            Request Biotech Consultation
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />

    <!-- 专家咨询弹出框 (简化版) -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- 完整咨询表单弹出框 -->
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

  // 弹出框状态管理
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

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title:
      'Biotechnology Industry Report 2025 - $1.5T Market Projection | Gene Editing & Synthetic Biology | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive Biotechnology Industry Report 2025. Analysis of $1.5 trillion market projection, CRISPR gene editing, cell therapy commercialization, synthetic biology applications, and talent implications for genetic engineering, bioinformatics, and cross-disciplinary innovation.',
      },
      {
        name: 'keywords',
        content:
          'biotechnology industry 2025, CRISPR gene editing, CAR-T cell therapy, synthetic biology, bioinformatics careers, genetic engineering, biotech talent, precision medicine, agricultural biotech',
      },
      {
        property: 'og:title',
        content:
          'Biotechnology Industry Report 2025 - $1.5T Market Projection | Gene Editing Innovation',
      },
      {
        property: 'og:description',
        content:
          'In-depth analysis of the biotechnology industry covering gene editing breakthroughs, cell therapy commercialization, synthetic biology applications, and global talent demand.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/industries/healthcare-medical-tourism/biotechnology',
      },
    ],
  })
</script>
