<template>
  <section class="bulk-hiring-section py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-1/2 right-0 w-80 h-80 opacity-10 transform -translate-y-1/2">
      <div
        class="w-full h-full bg-gradient-to-l from-[var(--tm-accent-gradient-from)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-5 relative z-1">
      <!-- 标题区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-25">
        <!-- 左侧内容 -->
        <div>
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle
                cx="9"
                cy="7"
                r="4"
              ></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            </svg>
          </div>

          <h2 class="text-3xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Bulk Hiring
          </h2>

          <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 leading-relaxed">
            We can assist you to hire a mass number of candidates in the shortest possible time
            taking into consideration the quality of talent needed in a cost-effective manner.
          </p>

          <!-- 核心优势 -->
          <div class="space-y-6">
            <div class="flex items-start gap-4 group">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-badge)] rounded-3 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Rapid Scale-Up
                </h3>
                <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed">
                  Deploy large teams quickly to meet project deadlines and business expansion
                  requirements
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-badge)] rounded-3 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Cost Optimization
                </h3>
                <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed">
                  Achieve significant cost savings through economies of scale and streamlined
                  processes
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-badge)] rounded-3 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
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
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Quality Assurance
                </h3>
                <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed">
                  Maintain high standards even at scale with proven screening and assessment
                  processes
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="relative">
          <div class="relative rounded-6 overflow-hidden shadow-xl">
            <OptImage
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Large team meeting"
              class="w-full h-120 lg:h-150 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-tl from-[var(--tm-accent-primary)]/20 to-transparent"
            ></div>
          </div>

          <!-- 容量徽章 -->
          <div
            class="absolute -top-6 -right-6 bg-[var(--tm-bg-primary)] rounded-6 p-6 shadow-2xl border border-[var(--tm-bd-light)]"
          >
            <div class="text-center">
              <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">500+</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">Max Capacity</div>
              <div class="text-xs text-[var(--tm-txt-secondary)] opacity-75 mt-1">Per project</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 服务类型 -->
      <div class="bg-[var(--tm-bg-secondary)] rounded-8 p-8 md:p-12 mb-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Bulk Hiring Solutions
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            Tailored approaches for different bulk hiring scenarios, ensuring the right talent at
            the right scale.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 项目制招聘 -->
          <div
            class="bg-[var(--tm-bg-primary)] p-8 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
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
              Project-Based Teams
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Large teams for specific projects with defined timelines and deliverables
            </p>
            <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
              🎯 50-500 candidates
            </div>
          </div>

          <!-- 运营扩展 -->
          <div
            class="bg-[var(--tm-bg-primary)] p-8 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M3 3v18h18V3M8 12h8M12 8v8"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Operational Scaling
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Rapid expansion of operational teams for business growth and new market entry
            </p>
            <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
              📈 Flexible scaling
            </div>
          </div>

          <!-- 设施启动 -->
          <div
            class="bg-[var(--tm-bg-primary)] p-8 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 mb-6 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Facility Launch</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
              Complete staffing solutions for new facility openings and manufacturing plants
            </p>
            <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
              🏭 Full setup support
            </div>
          </div>
        </div>
      </div>

      <!-- 流程优势 -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Our Bulk Hiring Process
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            Streamlined methodology to efficiently manage large-scale recruitment while maintaining
            quality standards.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 需求分析 -->
          <div class="text-center relative">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-5 flex items-center justify-center text-white shadow-lg"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Requirements Planning
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Detailed analysis of volume, timeline, skills, and budget requirements
            </p>
            <!-- 连接线 -->
            <div
              class="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-[var(--tm-accent-primary)] to-transparent transform -translate-x-4"
            ></div>
          </div>

          <!-- 资源动员 -->
          <div class="text-center relative">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-5 flex items-center justify-center text-white shadow-lg"
            >
              <svg
                class="w-8 h-8"
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
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Resource Mobilization
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Deploy dedicated teams and leverage multiple sourcing channels simultaneously
            </p>
            <!-- 连接线 -->
            <div
              class="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-[var(--tm-accent-primary)] to-transparent transform -translate-x-4"
            ></div>
          </div>

          <!-- 批量筛选 -->
          <div class="text-center relative">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-5 flex items-center justify-center text-white shadow-lg"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Batch Processing
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Efficient screening and assessment processes designed for high-volume throughput
            </p>
            <!-- 连接线 -->
            <div
              class="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-[var(--tm-accent-primary)] to-transparent transform -translate-x-4"
            ></div>
          </div>

          <!-- 集中部署 -->
          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-5 flex items-center justify-center text-white shadow-lg"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Coordinated Deployment
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Synchronized onboarding and integration to ensure seamless team formation
            </p>
          </div>
        </div>
      </div>

      <!-- 成功案例统计 -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-8 p-8 md:p-12 text-white mb-20"
      >
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">Bulk Hiring Track Record</h3>
          <p class="text-lg opacity-90 max-w-150 mx-auto">
            Proven success in delivering large-scale recruitment solutions across various industries
            and project types.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">250+</div>
            <div class="text-sm opacity-90">Bulk Projects Completed</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">15,000+</div>
            <div class="text-sm opacity-90">Candidates Placed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2">30</div>
            <div class="text-sm opacity-90">Days Avg Completion</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">94%</div>
            <div class="text-sm opacity-90">Client Satisfaction</div>
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
            Bulk hiring solutions tailored to meet the specific demands of different industry
            sectors.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- 制造业 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-accent-primary)]"
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
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Manufacturing</h4>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
              Production operators, quality control, maintenance technicians, and supervisory staff
            </p>
            <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
              🏭 200+ per facility
            </div>
          </div>

          <!-- 建筑工程 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Construction</h4>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
              Skilled trades, project coordinators, safety officers, and engineering support staff
            </p>
            <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
              🏗️ Project-based teams
            </div>
          </div>

          <!-- 零售服务 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">
                Retail & Hospitality
              </h4>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
              Sales associates, customer service, food service, and management trainees
            </p>
            <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
              🛍️ Seasonal scaling
            </div>
          </div>

          <!-- IT科技 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-accent-primary)]"
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
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Technology</h4>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
              Software developers, QA testers, technical support, and IT infrastructure teams
            </p>
            <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
              💻 Rapid deployment
            </div>
          </div>

          <!-- 物流运输 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M1 3h15l1.9 5.4a2 2 0 01-.9 2.6L9 15H1z"></path>
                  <circle
                    cx="5"
                    cy="19"
                    r="2"
                  ></circle>
                  <circle
                    cx="17"
                    cy="19"
                    r="2"
                  ></circle>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">
                Logistics & Transport
              </h4>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
              Drivers, warehouse operators, logistics coordinators, and fleet management staff
            </p>
            <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
              🚛 Supply chain focus
            </div>
          </div>

          <!-- 客服中心 -->
          <div
            class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 20.01 20z"
                  ></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Call Centers</h4>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
              Customer service representatives, technical support agents, and team supervisors
            </p>
            <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
              📞 Multi-language support
            </div>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div class="text-center">
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-8 p-8 md:p-12 border border-[var(--tm-bd-light)]"
        >
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Planning a Large-Scale Hiring Initiative?
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 max-w-150 mx-auto">
            Let us help you build the team you need, when you need it. Our bulk hiring expertise
            ensures quality at scale.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <span>Start Planning Now</span>
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
              <span>Discuss Volume Requirements</span>
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
  .dark .bulk-hiring-section {
    background: var(--tm-bg-secondary);
  }
</style>
