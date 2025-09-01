<template>
  <section
    class="outsourcing-services-section py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden"
  >
    <!-- 背景装饰 -->
    <div class="absolute bottom-0 left-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-tr from-[var(--tm-accent-gradient-to)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-5 relative z-1">
      <!-- 标题区域 -->
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
              d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"
            ></path>
          </svg>
        </div>
        <h2 class="text-3xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Outsourcing Services
        </h2>
        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          Whether you are a multinational or a local company, we can support you with hiring of
          staff on a contract basis. We cater to all types of industry requirements by understanding
          your company's environment and required business skills to place the right talent in your
          firm.
        </p>
      </div>

      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-25">
        <!-- 左侧图片 -->
        <div class="relative">
          <div class="relative rounded-6 overflow-hidden shadow-xl">
            <OptImage
              src="/images/comm/satffing/banner001.jpeg"
              alt="Contract staffing solutions"
              class="w-full h-120 lg:h-150 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-br from-[var(--tm-accent-primary)]/20 to-transparent"
            ></div>
          </div>

          <!-- 灵活性徽章 -->
          <div
            class="absolute -bottom-6 -left-6 bg-[var(--tm-bg-primary)] rounded-6 p-6 shadow-2xl border border-[var(--tm-bd-light)]"
          >
            <div class="text-center">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">100%</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">Contract Flexibility</div>
              <div class="text-xs text-[var(--tm-txt-secondary)] opacity-75 mt-1">
                All industries
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧内容 -->
        <div class="space-y-8">
          <div
            class="bg-[var(--tm-bg-primary)] p-8 rounded-6 border border-[var(--tm-bd-light)] shadow-lg"
          >
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              Comprehensive Contract Solutions
            </h3>

            <!-- 服务特点列表 -->
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-[var(--tm-bg-accentLight)] rounded-2 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Industry Agnostic</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                    Support for multinational and local companies across all industry sectors and
                    business requirements
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-[var(--tm-bg-accentLight)] rounded-2 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Contract Basis Hiring
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                    Flexible staffing arrangements tailored to your specific project timelines and
                    business cycles
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-[var(--tm-bg-accentLight)] rounded-2 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Cultural Integration
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                    Deep understanding of company environment and culture to ensure perfect talent
                    fit
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-[var(--tm-bg-accentLight)] rounded-2 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-[var(--tm-accent-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Skills Matching</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                    Precise alignment of candidate business skills with your specific operational
                    requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 服务类型 -->
      <div class="bg-[var(--tm-bg-primary)] rounded-8 p-8 md:p-12 mb-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Outsourcing Service Models
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            Flexible engagement models designed to meet diverse business needs and operational
            requirements.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 项目外包 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Project-Based Outsourcing
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Complete project teams with defined deliverables, timelines, and success metrics
            </p>
          </div>

          <!-- 功能外包 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Functional Outsourcing
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Entire business functions managed by specialized teams with domain expertise
            </p>
          </div>

          <!-- 增强外包 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Staff Augmentation
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Additional skilled resources integrated seamlessly with your existing teams
            </p>
          </div>
        </div>
      </div>

      <!-- 行业应用 -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Industry Applications
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            Contract staffing solutions across diverse industries, from traditional sectors to
            emerging technologies.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- IT服务 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
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
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">IT & Technology</h4>
          </div>

          <!-- 金融服务 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Financial Services</h4>
          </div>

          <!-- 医疗健康 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Healthcare</h4>
          </div>

          <!-- 制造工程 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
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
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Manufacturing</h4>
          </div>

          <!-- 零售消费 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path>
              </svg>
            </div>
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Retail & FMCG</h4>
          </div>

          <!-- 能源公用 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Energy & Utilities</h4>
          </div>

          <!-- 教育培训 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Education & Training</h4>
          </div>

          <!-- 政府公共 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
              </svg>
            </div>
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Government & Public</h4>
          </div>
        </div>
      </div>

      <!-- 核心优势 -->
      <div class="bg-[var(--tm-bg-primary)] rounded-8 p-8 md:p-12 mb-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Why Choose Our Outsourcing Services
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            Strategic advantages that deliver measurable business value through optimized talent
            solutions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start gap-6">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                Cost Efficiency
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                Significant reduction in operational costs, overhead expenses, and long-term
                employment commitments while maintaining quality standards.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-6">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                Scalability & Flexibility
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                Rapid scaling up or down based on business demands, market conditions, and project
                requirements without long-term commitments.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-6">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                Specialized Expertise
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                Access to specialized skills and domain knowledge that may not be available
                internally or cost-effective to develop in-house.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-6">
            <div
              class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line
                  x1="9"
                  y1="9"
                  x2="9.01"
                  y2="9"
                ></line>
                <line
                  x1="15"
                  y1="9"
                  x2="15.01"
                  y2="9"
                ></line>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                Risk Mitigation
              </h4>
              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                Reduced hiring risks, compliance management, and performance accountability through
                established service level agreements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 统计数据 -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-8 p-8 md:p-12 text-white"
      >
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Outsourcing Excellence Metrics
          </h3>
          <p class="text-lg opacity-90 max-w-150 mx-auto text-white">
            Measurable results that demonstrate our commitment to delivering exceptional outsourcing
            value.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">180+</div>
            <div class="text-sm opacity-90">Active Contracts</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">40%</div>
            <div class="text-sm opacity-90">Avg Cost Savings</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">99.2%</div>
            <div class="text-sm opacity-90">Service Uptime</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">60</div>
            <div class="text-sm opacity-90">Days Avg Setup</div>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div class="mt-20 text-center">
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 md:p-12 border border-[var(--tm-bd-light)]"
        >
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Ready to Optimize Your Operations?
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 max-w-150 mx-auto">
            Discover how our contract staffing solutions can transform your business efficiency and
            reduce operational costs.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <span>Explore Outsourcing</span>
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-[var(--tm-accent-primary)] text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-[var(--tm-bg-accentLight)] transition-colors duration-300"
            >
              <span>Request Proposal</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style>
  /* 深色模式适配 */
  .dark .outsourcing-services-section {
    background: var(--tm-bg-primary);
  }
</style>
