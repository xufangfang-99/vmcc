<template>
  <section
    class="advisory-services-section py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden"
  >
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-transparent rounded-full blur-3xl"
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        </div>

        <h2 class="text-3xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Advisory Services
        </h2>

        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          We offer a broad spectrum of HR solutions that will assist you in strengthening your
          brand, organization, and work culture.
        </p>
      </div>

      <!-- 服务介绍卡片 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-25">
        <!-- 左侧图片 -->
        <div class="relative order-2 lg:order-1">
          <div class="relative rounded-6 overflow-hidden shadow-xl">
            <OptImage
              src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80"
              alt="HR advisory consultation"
              class="w-full h-120 lg:h-150 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-tl from-[var(--tm-accent-primary)]/20 to-transparent"
            ></div>
          </div>

          <!-- 专业度徽章 -->
          <div
            class="absolute -bottom-6 -left-6 bg-[var(--tm-bg-primary)] rounded-6 p-6 shadow-2xl border border-[var(--tm-bd-light)]"
          >
            <div class="text-center">
              <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">360°</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">HR Assessment</div>
              <div class="text-xs text-[var(--tm-txt-secondary)] opacity-75 mt-1">
                Complete analysis
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧内容 -->
        <div class="order-1 lg:order-2">
          <div
            class="bg-[var(--tm-bg-secondary)] p-8 rounded-6 border border-[var(--tm-bd-light)] shadow-lg"
          >
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              Comprehensive HR Solutions
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-8">
              Our advisory services encompass strategic HR planning, organizational development, and
              cultural transformation initiatives designed to enhance your competitive advantage.
            </p>

            <div class="grid grid-cols-2 gap-4">
              <div
                class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4 border border-[var(--tm-bd-light)]"
              >
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">4</div>
                <div class="text-xs text-[var(--tm-txt-secondary)]">Core Services</div>
              </div>
              <div
                class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4 border border-[var(--tm-bd-light)]"
              >
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">120+</div>
                <div class="text-xs text-[var(--tm-txt-secondary)]">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 四大核心服务 -->
      <div class="mb-25">
        <div class="text-center mb-16">
          <h3 class="text-2xl md:text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Our Advisory Expertise
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto text-lg">
            Strategic HR consulting services designed to optimize your human capital and
            organizational effectiveness.
          </p>
        </div>

        <div class="space-y-20">
          <!-- Market Intelligence -->
          <div class="relative">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div class="lg:col-span-2">
                <div class="flex items-center gap-4 mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-4 flex items-center justify-center text-white shadow-lg"
                  >
                    <svg
                      class="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path d="M9 19c-5 0-8-1.5-8-4s3-4 8-4 8 1.5 8 4-3 4-8 4z"></path>
                      <path
                        d="M17 9c0 1.16-1.6 3-5 3s-5-1.84-5-3v3c0 1.16 1.6 3 5 3s5-1.84 5-3V9z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                      Market Intelligence
                    </h4>
                    <div class="text-sm text-[var(--tm-accent-primary)] font-medium">
                      Salary Benchmarking & Analysis
                    </div>
                  </div>
                </div>

                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  We develop full fledged surveys to help our clients see a complete breakdown of
                  the compensation packages in the market per industry and enable them to compare
                  with their own salary and benefits schemes for improvement and understanding
                  purposes and to be in line with similar business pay.
                </p>

                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                    <span class="text-sm text-[var(--tm-txt-secondary)]">
                      Industry-specific compensation analysis
                    </span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                    <span class="text-sm text-[var(--tm-txt-secondary)]">
                      Benefits and perks benchmarking
                    </span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                    <span class="text-sm text-[var(--tm-txt-secondary)]">
                      Market trends and forecasting
                    </span>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-3">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-colors duration-300"
                  >
                    <div
                      class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mb-4"
                    >
                      <svg
                        class="w-6 h-6 text-[var(--tm-accent-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Salary Benchmarking
                    </h5>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Comprehensive market analysis across industries and positions
                    </p>
                  </div>

                  <div
                    class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-colors duration-300"
                  >
                    <div
                      class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mb-4"
                    >
                      <svg
                        class="w-6 h-6 text-[var(--tm-accent-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path d="M3 3v18h18V3M8 12h8M12 8v8"></path>
                      </svg>
                    </div>
                    <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Benefits Analysis
                    </h5>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Complete breakdown of compensation packages and perks
                    </p>
                  </div>

                  <div
                    class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-colors duration-300"
                  >
                    <div
                      class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mb-4"
                    >
                      <svg
                        class="w-6 h-6 text-[var(--tm-accent-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path d="M3 3v18h18"></path>
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                      </svg>
                    </div>
                    <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Market Trends</h5>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Forward-looking compensation and benefits forecasting
                    </p>
                  </div>

                  <div
                    class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-colors duration-300"
                  >
                    <div
                      class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mb-4"
                    >
                      <svg
                        class="w-6 h-6 text-[var(--tm-accent-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path d="M9 11H3v10h6V11zM21 11h-6v10h6V11zM15 3H9v6h6V3z"></path>
                      </svg>
                    </div>
                    <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Industry Comparisons
                    </h5>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Detailed sector-specific compensation insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Talent Assessments -->
          <div class="relative">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div class="lg:col-span-3 order-2 lg:order-1">
                <div class="space-y-6">
                  <div
                    class="bg-[var(--tm-bg-secondary)] p-8 rounded-6 border border-[var(--tm-bd-light)]"
                  >
                    <div class="flex items-start gap-4">
                      <div
                        class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          class="w-6 h-6 text-[var(--tm-accent-primary)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                        >
                          <path d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                          360 Feedback Reports
                        </h5>
                        <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                          Conducted with complete fairness and sensitivity, avoiding any
                          discriminatory behavior to ensure accurate and truthful results. Our 360
                          Feedback Report allows you to pinpoint gaps between all levels of
                          employees and help them identify weaknesses while encouraging them to
                          utilize their strengths for better productivity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="bg-[var(--tm-bg-secondary)] p-8 rounded-6 border border-[var(--tm-bd-light)]"
                  >
                    <div class="flex items-start gap-4">
                      <div
                        class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          class="w-6 h-6 text-[var(--tm-accent-primary)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                        >
                          <path
                            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                          ></path>
                          <rect
                            x="8"
                            y="2"
                            width="8"
                            height="4"
                            rx="1"
                            ry="1"
                          ></rect>
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                          Psychometric Assessment
                        </h5>
                        <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                          Developed for career guidance and employment processes to match talents,
                          abilities, and personalities to suitable positions. It helps you
                          understand employee behavior patterns and enhance their communication
                          style for higher productivity and team engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-2 order-1 lg:order-2">
                <div class="flex items-center gap-4 mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-4 flex items-center justify-center text-white shadow-lg"
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
                  <div>
                    <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                      Talent Assessments
                    </h4>
                    <div class="text-sm text-[var(--tm-accent-primary)] font-medium">
                      Employee Evaluation & Development
                    </div>
                  </div>
                </div>

                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                  Our proficient team develops comprehensive reports to support you in evaluating
                  employees' skills, performance, knowledge, and workplace relationships, guiding
                  accurate decisions on promotions and improving employee productivity.
                </p>

                <div
                  class="bg-[var(--tm-bg-primary)] p-6 rounded-4 border border-[var(--tm-bd-light)]"
                >
                  <div class="text-sm text-[var(--tm-accent-primary)] font-semibold mb-2">
                    Key Features:
                  </div>
                  <ul class="text-sm text-[var(--tm-txt-secondary)] space-y-2">
                    <li>• Complete fairness and sensitivity approach</li>
                    <li>• Skills and performance evaluation</li>
                    <li>• Career guidance recommendations</li>
                    <li>• Team engagement enhancement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- HR Policies & Procedures -->
          <div class="relative">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div class="lg:col-span-2">
                <div class="flex items-center gap-4 mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-4 flex items-center justify-center text-white shadow-lg"
                  >
                    <svg
                      class="w-8 h-8"
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
                  <div>
                    <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
                      HR Policies & Procedures
                    </h4>
                    <div class="text-sm text-[var(--tm-accent-primary)] font-medium">
                      Policy Development & Implementation
                    </div>
                  </div>
                </div>

                <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-8">
                  We support all types of growing businesses and companies to define their
                  processes, place their policies and procedures into a formalized system, and
                  outline their business requirements and needs.
                </p>

                <div
                  class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)]"
                >
                  <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Employee Handbook Creation
                  </h5>
                  <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
                    Our expert team assists in crafting comprehensive employee handbooks with all
                    core details to ensure company policies are reviewed and all employees are aware
                    of their rights and responsibilities.
                  </p>
                  <div
                    class="flex items-center gap-2 text-xs text-[var(--tm-accent-primary)] font-medium"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path d="M9 12l2 2 4-4"></path>
                    </svg>
                    <span>Complete policy documentation included</span>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-3">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-colors duration-300"
                  >
                    <div
                      class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mb-4"
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
                    <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Policy Development
                    </h5>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Create comprehensive HR policies aligned with local regulations and
                      international best practices
                    </p>
                  </div>

                  <div
                    class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-colors duration-300"
                  >
                    <div
                      class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mb-4"
                    >
                      <svg
                        class="w-6 h-6 text-[var(--tm-accent-primary)]"
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
                    <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Process Optimization
                    </h5>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Streamline HR processes to improve efficiency and ensure consistent
                      application
                    </p>
                  </div>

                  <div
                    class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-colors duration-300"
                  >
                    <div
                      class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mb-4"
                    >
                      <svg
                        class="w-6 h-6 text-[var(--tm-accent-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Compliance Management
                    </h5>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Ensure all policies meet legal requirements and industry standards
                    </p>
                  </div>

                  <div
                    class="bg-[var(--tm-bg-secondary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] transition-colors duration-300"
                  >
                    <div
                      class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-3 flex items-center justify-center mb-4"
                    >
                      <svg
                        class="w-6 h-6 text-[var(--tm-accent-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </div>
                    <h5 class="font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Training & Implementation
                    </h5>
                    <p class="text-sm text-[var(--tm-txt-secondary)]">
                      Comprehensive training programs for policy rollout and adoption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 成功案例统计 -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-8 p-8 md:p-12 text-white mb-20"
      >
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">Advisory Impact Metrics</h3>
          <p class="text-lg opacity-90 max-w-150 mx-auto">
            Measurable outcomes from our comprehensive HR advisory and consulting services.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">120+</div>
            <div class="text-sm opacity-90">Advisory Projects</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">85%</div>
            <div class="text-sm opacity-90">Employee Satisfaction Increase</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">95%</div>
            <div class="text-sm opacity-90">Policy Compliance Rate</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">30%</div>
            <div class="text-sm opacity-90">HR Process Efficiency Gain</div>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div class="text-center">
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-8 p-8 md:p-12 border border-[var(--tm-bd-light)]"
        >
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Transform Your HR Strategy Today
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 max-w-150 mx-auto">
            Partner with our HR experts to build stronger organizational foundations, enhance
            employee engagement, and drive sustainable business growth.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <span>Book HR Assessment</span>
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
              <span>Schedule Consultation</span>
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
  .dark .advisory-services-section {
    background: var(--tm-bg-secondary);
  }
</style>
