<template>
  <section class="py-20 bg-tm-bg-primary relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-br from-tm-accent-primary to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-5 relative z-1">
      <!-- 标题区域 -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-tm-bg-accentLight rounded-4 mb-6"
        >
          <svg
            class="w-8 h-8 text-tm-accent-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M3 3v18h18"></path>
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-light text-tm-txt-primary mb-6">
          Healthcare Market Insights
        </h2>
        <p class="text-lg md:text-xl text-tm-txt-secondary max-w-200 mx-auto leading-relaxed">
          Key market trends, growth drivers, and strategic insights across healthcare sectors. From
          digital transformation to emerging market opportunities, explore the data shaping the
          future of healthcare.
        </p>
      </div>

      <!-- 主要市场指标 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div
          class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-tm-accent-primary/10 text-tm-accent-primary rounded-2xl flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <span class="text-xs text-tm-txt-light bg-tm-bg-primary px-2 py-1 rounded-full">
              Overall
            </span>
          </div>
          <div class="text-2xl font-700 text-tm-txt-primary mb-1">>10%</div>
          <div class="text-sm text-tm-txt-secondary">Global GDP Healthcare Share</div>
          <div class="mt-3 text-xs text-green-500 font-500">↗ Growing steadily</div>
        </div>

        <div
          class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
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
            <span class="text-xs text-tm-txt-light bg-tm-bg-primary px-2 py-1 rounded-full">
              Pharma
            </span>
          </div>
          <div class="text-2xl font-700 text-tm-txt-primary mb-1">$1.8T</div>
          <div class="text-sm text-tm-txt-secondary">Pharmaceuticals Market</div>
          <div class="mt-3 text-xs text-green-500 font-500">↗ Biotech growth</div>
        </div>

        <div
          class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
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
            <span class="text-xs text-tm-txt-light bg-tm-bg-primary px-2 py-1 rounded-full">
              Devices
            </span>
          </div>
          <div class="text-2xl font-700 text-tm-txt-primary mb-1">$650B</div>
          <div class="text-sm text-tm-txt-secondary">Medical Devices Market</div>
          <div class="mt-3 text-xs text-green-500 font-500">↗ IoMT expansion</div>
        </div>

        <div
          class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <span class="text-xs text-tm-txt-light bg-tm-bg-primary px-2 py-1 rounded-full">
              Biotech
            </span>
          </div>
          <div class="text-2xl font-700 text-tm-txt-primary mb-1">$1.5T</div>
          <div class="text-sm text-tm-txt-secondary">Biotech Projection</div>
          <div class="mt-3 text-xs text-green-500 font-500">↗ CRISPR breakthrough</div>
        </div>
      </div>

      <!-- 区域市场洞察 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- 新兴市场增长 -->
        <div class="bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
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
            <h3 class="text-xl font-600 text-tm-txt-primary">Emerging Markets Growth</h3>
          </div>
          <p class="text-tm-txt-secondary mb-6 leading-relaxed">
            Asia, the Middle East, and Africa are driving global healthcare expansion with massive
            infrastructure investments and technology adoption.
          </p>

          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span class="text-tm-txt-primary font-500">Asia-Pacific</span>
              </div>
              <span class="text-sm font-600 text-orange-500">Leading Growth</span>
            </div>
            <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span class="text-tm-txt-primary font-500">Middle East</span>
              </div>
              <span class="text-sm font-600 text-amber-500">Hub Development</span>
            </div>
            <div class="flex items-center justify-between p-4 bg-tm-bg-primary rounded-xl">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <span class="text-tm-txt-primary font-500">Africa</span>
              </div>
              <span class="text-sm font-600 text-red-500">Infrastructure Focus</span>
            </div>
          </div>
        </div>

        <!-- UAE医疗旅游亮点 -->
        <div class="bg-tm-bg-secondary rounded-3xl p-8 border border-tm-bd-card">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                ></circle>
              </svg>
            </div>
            <h3 class="text-xl font-600 text-tm-txt-primary">UAE Medical Tourism Hub</h3>
          </div>
          <p class="text-tm-txt-secondary mb-6 leading-relaxed">
            UAE has emerged as a leading medical tourism destination with $8.5B revenue and 1.3M
            international patients annually.
          </p>

          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-tm-bg-primary rounded-xl">
                <div class="text-xl font-700 text-amber-500 mb-1">$8.5B</div>
                <div class="text-xs text-tm-txt-secondary">Annual Revenue</div>
              </div>
              <div class="text-center p-4 bg-tm-bg-primary rounded-xl">
                <div class="text-xl font-700 text-amber-500 mb-1">1.3M</div>
                <div class="text-xs text-tm-txt-secondary">Int'l Patients</div>
              </div>
            </div>
            <div class="p-3 bg-tm-bg-primary rounded-lg">
              <div class="text-sm font-500 text-tm-txt-primary mb-1">Top Markets</div>
              <div class="text-xs text-tm-txt-secondary">
                Russia 28% • India 22% • UK 15% • Africa 18%
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 技术创新趋势 -->
      <div class="mb-16">
        <h3 class="text-2xl md:text-3xl font-600 text-tm-txt-primary mb-8 text-center">
          Technology Innovation Trends
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- 数字健康 -->
          <div
            class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-tm-bg-accentLight rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-tm-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Digital Health</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Telemedicine, AI diagnostics, and wearables becoming standard in patient care delivery
            </p>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-tm-accent-primary rounded-full"></div>
              <span class="text-xs text-tm-txt-secondary">Mainstream adoption accelerating</span>
            </div>
          </div>

          <!-- mRNA技术 -->
          <div
            class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-blue-500/10 rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-blue-500"
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
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">mRNA Technologies</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Expanding from vaccines into cancer treatments and infectious disease therapies
            </p>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span class="text-xs text-tm-txt-secondary">Cancer applications expanding</span>
            </div>
          </div>

          <!-- 基因编辑 -->
          <div
            class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-emerald-500/10 rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">CRISPR Gene Editing</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Late-stage clinical trials for rare genetic disorders and oncology applications
            </p>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span class="text-xs text-tm-txt-secondary">Clinical trials advancing</span>
            </div>
          </div>

          <!-- 机器人手术 -->
          <div
            class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-purple-500/10 rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Robotic Surgery</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Robotic-assisted systems becoming standard in orthopedics, cardiology, and oncology
            </p>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span class="text-xs text-tm-txt-secondary">70% penetration in UAE</span>
            </div>
          </div>

          <!-- 3D打印 -->
          <div
            class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-cyan-500/10 rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-cyan-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
              </svg>
            </div>
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">3D Printing</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Customized implants and prosthetics reducing recovery time and improving outcomes
            </p>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span class="text-xs text-tm-txt-secondary">Personalized devices growing</span>
            </div>
          </div>

          <!-- 合成生物学 -->
          <div
            class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-pink-500/10 rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-pink-500"
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
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Synthetic Biology</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Engineering microorganisms for biofuels, sustainable materials, and food production
            </p>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span class="text-xs text-tm-txt-secondary">Startup ecosystem expanding</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 投资和增长预测 -->
      <div
        class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary rounded-3xl p-8 md:p-12 border border-tm-bd-card"
      >
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-600 text-tm-txt-primary mb-4">
            Investment & Growth Outlook
          </h3>
          <p class="text-tm-txt-secondary max-w-175 mx-auto">
            Global healthcare investment flows remain strong with venture capital and government
            funding driving innovation across all sectors. Countries are increasingly competing to
            become medical hubs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 投资趋势 -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-tm-bg-accentLight rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-tm-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <line
                  x1="12"
                  y1="1"
                  x2="12"
                  y2="23"
                ></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h4 class="text-xl font-600 text-tm-txt-primary mb-3">Strong Investment</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Venture capital and government funding continue to fuel healthcare innovation with
              record investments in biotech and digital health.
            </p>
          </div>

          <!-- 市场竞争 -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-emerald-500/10 rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            <h4 class="text-xl font-600 text-tm-txt-primary mb-3">Global Competition</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Countries like Singapore, UAE, and China are investing heavily to become global
              medical hubs and attract international patients.
            </p>
          </div>

          <!-- 人才需求 -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-purple-500"
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
            <h4 class="text-xl font-600 text-tm-txt-primary mb-3">Talent Demand</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Critical shortages in AI healthcare, bioengineering, clinical research, and
              cross-border healthcare management creating opportunities.
            </p>
          </div>
        </div>

        <!-- 关键统计数据 -->
        <div class="mt-12 pt-8 border-t border-tm-bd-card">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-2xl font-700 text-tm-accent-primary mb-1">85%</div>
              <div class="text-sm text-tm-txt-secondary">UAE JCI Accreditation</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-700 text-tm-accent-primary mb-1">70%</div>
              <div class="text-sm text-tm-txt-secondary">Advanced Tech Penetration</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-700 text-tm-accent-primary mb-1">$2B+</div>
              <div class="text-sm text-tm-txt-secondary">Avg Drug Development Cost</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-700 text-tm-accent-primary mb-1">98.5%</div>
              <div class="text-sm text-tm-txt-secondary">Cardiac Surgery Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style scoped>
  /* 深色模式适配 */
  .dark .market-insights-section {
    background: var(--tm-bg-primary);
  }
</style>
