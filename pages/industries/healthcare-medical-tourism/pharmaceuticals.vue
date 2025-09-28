<template>
  <div class="min-h-screen bg-tm-bg-primary">
    <!-- Report Header -->
    <section class="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
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
          <span class="text-white">Pharmaceuticals Report</span>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span class="text-sm font-500 uppercase tracking-wider">
              Pharmaceuticals Industry 2025
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-300 mb-6 leading-tight">
            Pharmaceuticals Industry
            <span class="block font-600">Transformation Report</span>
          </h1>

          <p class="text-xl text-white/90 max-w-200 mx-auto mb-8 leading-relaxed">
            The pharmaceuticals industry is undergoing significant transformation in 2025, driven by
            scientific innovation, global health demands, and regulatory evolution. Market size
            expected to surpass USD 1.8 trillion.
          </p>

          <!-- Key Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-175 mx-auto">
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$1.8T</div>
              <div class="text-xs text-white/80">Market Size</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">$2B+</div>
              <div class="text-xs text-white/80">Avg Drug Development</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">Biologics</div>
              <div class="text-xs text-white/80">Growing Share</div>
            </div>
            <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div class="text-2xl font-700 mb-1">AI-Driven</div>
              <div class="text-xs text-white/80">Drug Discovery</div>
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
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
              class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-600"
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
            class="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            I
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Industry Overview</h2>
        </div>

        <div class="prose prose-lg max-w-none text-tm-txt-secondary mb-8">
          <p class="text-lg leading-relaxed mb-6">
            The pharmaceuticals industry is undergoing significant transformation in 2025, driven by
            scientific innovation, global health demands, and regulatory evolution. The market size
            is expected to surpass USD 1.8 trillion, with growth concentrated in biotechnology,
            specialty drugs, and emerging markets.
          </p>
          <p class="text-lg leading-relaxed mb-6">
            Pharmaceutical companies are balancing the need for innovation with pricing pressures,
            while also navigating complex supply chain challenges. The industry stands at a critical
            juncture where technological advancement meets regulatory complexity.
          </p>
        </div>

        <!-- Market Overview Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Market Scale & Growth</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Market Size (2025)</span>
                <span class="text-xl font-700 text-purple-500">$1.8T</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Growth Concentration</span>
                <span class="text-xl font-700 text-green-500">Biotech</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
                <span class="text-tm-txt-primary font-500">Specialty Drugs</span>
                <span class="text-xl font-700 text-purple-500">Expanding</span>
              </div>
            </div>
          </div>

          <div class="bg-tm-bg-secondary rounded-2xl p-6 border border-tm-bd-card">
            <h3 class="text-xl font-600 text-tm-txt-primary mb-4">Industry Dynamics</h3>
            <div class="space-y-3">
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-purple-500">
                <div class="text-sm font-500 text-tm-txt-primary">Innovation vs Pricing</div>
                <div class="text-xs text-tm-txt-secondary">
                  Balancing breakthrough research with affordability demands
                </div>
              </div>
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-blue-500">
                <div class="text-sm font-500 text-tm-txt-primary">Supply Chain Complexity</div>
                <div class="text-xs text-tm-txt-secondary">
                  Navigating global manufacturing and distribution challenges
                </div>
              </div>
              <div class="p-3 bg-tm-bg-primary rounded-lg border-l-4 border-green-500">
                <div class="text-sm font-500 text-tm-txt-primary">Regulatory Evolution</div>
                <div class="text-xs text-tm-txt-secondary">
                  Adapting to changing approval processes worldwide
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
            class="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            II
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Key Trends and Drivers</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Biopharmaceutical Growth -->
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
              <h3 class="text-lg font-600 text-tm-txt-primary">Biopharmaceutical Growth</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              Biologics and biosimilars are taking larger market shares, especially in oncology,
              autoimmune diseases, and rare conditions.
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Oncology biologics expanding</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Autoimmune treatments growing</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Rare disease focus</span>
              </div>
            </div>
          </div>

          <!-- mRNA and Gene Therapies -->
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
              <h3 class="text-lg font-600 text-tm-txt-primary">mRNA and Gene Therapies</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              Following the success of mRNA vaccines, companies are expanding applications into
              cancer and infectious disease treatments.
            </p>
            <div class="grid grid-cols-2 gap-3 mt-4">
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <div class="text-sm font-600 text-blue-500">Cancer</div>
                <div class="text-xs text-tm-txt-light">mRNA therapies</div>
              </div>
              <div class="text-center p-3 bg-tm-bg-primary rounded-lg">
                <div class="text-sm font-600 text-blue-500">Infectious</div>
                <div class="text-xs text-tm-txt-light">Disease treatments</div>
              </div>
            </div>
          </div>

          <!-- Global R&D Hubs -->
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
              <h3 class="text-lg font-600 text-tm-txt-primary">Global R&D Hubs</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              The U.S., EU, and China continue to dominate pharmaceutical research, with increasing
              contributions from India and the Middle East.
            </p>
            <div class="grid grid-cols-2 gap-2">
              <div class="text-center p-2 bg-tm-bg-primary rounded text-xs">
                <div class="font-600 text-orange-500">US & EU</div>
                <div class="text-tm-txt-light">Dominance</div>
              </div>
              <div class="text-center p-2 bg-tm-bg-primary rounded text-xs">
                <div class="font-600 text-orange-500">China</div>
                <div class="text-tm-txt-light">Growing</div>
              </div>
              <div class="text-center p-2 bg-tm-bg-primary rounded text-xs">
                <div class="font-600 text-orange-500">India</div>
                <div class="text-tm-txt-light">Emerging</div>
              </div>
              <div class="text-center p-2 bg-tm-bg-primary rounded text-xs">
                <div class="font-600 text-orange-500">Middle East</div>
                <div class="text-tm-txt-light">Rising</div>
              </div>
            </div>
          </div>

          <!-- Digital Transformation -->
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
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                  ></rect>
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                  ></line>
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                  ></line>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Digital Transformation</h3>
            </div>
            <p class="text-tm-txt-secondary mb-4">
              AI-driven drug discovery and real-world data analytics are shortening R&D cycles.
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">AI drug discovery</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Real-world data analytics</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-tm-txt-secondary">Shortened R&D cycles</span>
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
            class="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            III
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Challenges and Risks</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Rising R&D Costs -->
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
              <h3 class="text-lg font-600 text-red-700">Rising R&D Costs</h3>
            </div>
            <p class="text-red-600 text-sm mb-3">
              Drug development remains expensive, with average costs exceeding USD 2 billion per new
              therapy.
            </p>
            <div class="text-center p-3 bg-white rounded-lg border border-red-200">
              <div class="text-lg font-700 text-red-500">$2B+</div>
              <div class="text-xs text-red-600">Average drug development cost</div>
            </div>
          </div>

          <!-- Pricing Pressure -->
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
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-orange-700">Pricing Pressure</h3>
            </div>
            <p class="text-orange-600 text-sm mb-3">
              Governments and insurers are demanding more affordable drugs, impacting profitability.
            </p>
            <div class="space-y-2">
              <div class="text-xs text-orange-600">• Government price controls</div>
              <div class="text-xs text-orange-600">• Insurer negotiations</div>
              <div class="text-xs text-orange-600">• Profitability impact</div>
            </div>
          </div>

          <!-- Supply Chain Vulnerabilities -->
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
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-blue-700">Supply Chain Vulnerabilities</h3>
            </div>
            <p class="text-blue-600 text-sm mb-3">
              Dependence on limited regions for active pharmaceutical ingredients (APIs) creates
              risks.
            </p>
            <div class="space-y-2">
              <div class="text-xs text-blue-600">• Limited API suppliers</div>
              <div class="text-xs text-blue-600">• Geographic concentration</div>
              <div class="text-xs text-blue-600">• Supply disruption risks</div>
            </div>
          </div>

          <!-- Regulatory Complexity -->
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
                  <path d="M9 12l2 2 4-4"></path>
                  <path
                    d="M21 12c.552 0 1-.448 1-1V5a2 2 0 00-2-2H4a2 2 0 00-2 2v6c0 .552.448 1 1 1h18z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-600 text-purple-700">Regulatory Complexity</h3>
            </div>
            <p class="text-purple-600 text-sm mb-3">
              Compliance with diverse regional standards delays global drug launches.
            </p>
            <div class="text-center p-3 bg-white rounded-lg border border-purple-200">
              <div class="text-sm font-600 text-purple-500">Global Challenge</div>
              <div class="text-xs text-purple-600">Multi-regional compliance</div>
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
            class="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center text-lg font-600"
          >
            IV
          </div>
          <h2 class="text-3xl font-600 text-tm-txt-primary">Outlook and Talent Implications</h2>
        </div>

        <div
          class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary rounded-2xl p-8 border border-tm-bd-card"
        >
          <h3 class="text-2xl font-600 text-tm-txt-primary mb-6">Industry Expansion Outlook</h3>
          <p class="text-tm-txt-secondary leading-relaxed mb-8">
            The pharmaceuticals industry will expand steadily, with breakthroughs in precision
            medicine and digital therapeutics. This growth creates demand for cross-disciplinary
            professionals combining life sciences expertise with digital and data skills.
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- Talent Demand Focus Areas -->
            <div>
              <h4 class="text-xl font-600 text-tm-txt-primary mb-4">High-Demand Talent Areas</h4>
              <div class="space-y-3">
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-purple-500">
                  <div class="font-semibold text-tm-txt-primary">Biostatistics</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Data analysis, clinical trial design, statistical modeling
                  </div>
                </div>
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-blue-500">
                  <div class="font-semibold text-tm-txt-primary">Regulatory Affairs</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Global compliance, submission strategies, regulatory science
                  </div>
                </div>
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-green-500">
                  <div class="font-semibold text-tm-txt-primary">Clinical Research</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Clinical operations, protocol development, patient safety
                  </div>
                </div>
                <div class="p-4 bg-tm-bg-primary rounded-lg border-l-4 border-orange-500">
                  <div class="font-semibold text-tm-txt-primary">AI in Drug Discovery</div>
                  <div class="text-sm text-tm-txt-secondary">
                    Machine learning, computational biology, data science
                  </div>
                </div>
              </div>
            </div>

            <!-- Cross-Disciplinary Skills -->
            <div>
              <h4 class="text-xl font-600 text-tm-txt-primary mb-4">
                Cross-Disciplinary Professionals
              </h4>
              <p class="text-tm-txt-secondary mb-4">
                Firms will increasingly seek professionals combining life sciences expertise with
                digital and data skills.
              </p>
              <div class="space-y-3">
                <div class="p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-sm font-600 text-tm-txt-primary">Life Sciences + Digital</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Biology background with tech skills
                  </div>
                </div>
                <div class="p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-sm font-600 text-tm-txt-primary">Data Science + Pharma</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Analytics applied to drug development
                  </div>
                </div>
                <div class="p-3 bg-tm-bg-primary rounded-lg">
                  <div class="text-sm font-600 text-tm-txt-primary">Precision Medicine</div>
                  <div class="text-xs text-tm-txt-secondary">
                    Personalized therapeutics expertise
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
        <h3 class="text-2xl font-600 mb-4">Download Complete Pharmaceuticals Industry Report</h3>
        <p class="text-lg mb-6 max-w-150 mx-auto">
          Access the full pharmaceuticals industry analysis with detailed market projections, R&D
          trends, and talent strategies for pharmaceutical professionals and organizations.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-600 rounded-full hover:bg-white/95 transition-colors"
            @click="openExpertModal"
          >
            Request Report Summary
          </button>
          <button
            class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-600 rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors"
            @click="openConsultationModal"
          >
            Request Pharma Consultation
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
      'Pharmaceuticals Industry Report 2025 - $1.8T Market Analysis | Biotech & mRNA Innovation | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive Pharmaceuticals Industry Report 2025. Analysis of $1.8 trillion market, biopharmaceutical growth, mRNA therapies, AI-driven drug discovery, and talent implications for biostatistics, regulatory affairs, and clinical research.',
      },
      {
        name: 'keywords',
        content:
          'pharmaceuticals industry 2025, biotech market, mRNA therapies, drug discovery AI, regulatory affairs, clinical research, biostatistics careers, precision medicine, pharmaceutical talent',
      },
      {
        property: 'og:title',
        content:
          'Pharmaceuticals Industry Report 2025 - $1.8T Market Analysis | Biotech Innovation',
      },
      {
        property: 'og:description',
        content:
          'In-depth analysis of the pharmaceuticals industry covering biopharmaceutical growth, mRNA technologies, digital transformation, and talent demand across global markets.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/industries/healthcare-medical-tourism/pharmaceuticals',
      },
    ],
  })
</script>
