<template>
  <div class="success-stories py-20 md:py-32 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-0 right-0 w-100 h-100 rounded-full opacity-5 bg-gradient-to-br from-[var(--tm-accent-primary)] to-transparent transform translate-x-20 -translate-y-20"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-3 bg-gradient-to-tr from-[var(--tm-accent-secondary)] to-transparent transform -translate-x-10 translate-y-10"
      ></div>
    </div>

    <div class="max-w-1400px mx-auto px-4 md:px-8 relative z-1">
      <!-- 标题区域 -->
      <div class="text-center mb-16 md:mb-20">
        <div
          class="inline-flex items-center gap-3 bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-feature)] rounded-full px-6 py-3 text-sm font-medium text-[var(--tm-txt-primary)] mb-6 backdrop-blur-10px"
        >
          <div
            class="w-8 h-8 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              ></path>
            </svg>
          </div>
          成功案例展示
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--tm-txt-primary)] mb-6">
          Transforming Organizations,
          <span
            class="block md:inline text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] bg-clip-text text-transparent"
          >
            Shaping Careers
          </span>
        </h2>

        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] leading-relaxed max-w-4xl mx-auto"
        >
          Over 15 years, VMMC has delivered exceptional talent solutions across the GCC region. Here
          are some of our most impactful success stories that showcase our commitment to excellence.
        </p>
      </div>

      <!-- 统计数据概览 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        <div class="text-center">
          <div
            class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-[var(--tm-shadow-accent)]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
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
          <div class="text-3xl md:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">
            170K+
          </div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
            Jobs Placed
          </div>
        </div>

        <div class="text-center">
          <div
            class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-[var(--tm-shadow-accent)]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
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
              <path d="m9 14 2 2 4-4"></path>
            </svg>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">
            20K+
          </div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
            Satisfied Clients
          </div>
        </div>

        <div class="text-center">
          <div
            class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
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
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              ></path>
            </svg>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">
            210K+
          </div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
            Professionals Trained
          </div>
        </div>

        <div class="text-center">
          <div
            class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              ></path>
            </svg>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">
            50K+
          </div>
          <div class="text-sm text-[var(--tm-txt-secondary)] uppercase tracking-wider">
            Courses Delivered
          </div>
        </div>
      </div>

      <!-- 成功案例卡片 -->
      <div class="space-y-16 md:space-y-20">
        <!-- 案例1: 大型石油公司本土化项目 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div
              class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 md:p-10 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
            >
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="m2 17 10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                    Oil & Gas Giant
                  </h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Emiratisation Excellence Program
                  </p>
                </div>
              </div>

              <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                UAE's Largest Emiratisation Success Story
              </h4>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                VMMC partnered with a leading multinational oil & gas company to achieve 45%
                emiratisation across technical and managerial roles within 18 months, exceeding
                government mandates by 15%.
              </p>

              <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">850+</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">UAE Nationals Recruited</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">45%</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">
                    Emiratisation Rate Achieved
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  Executive Search
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  Bulk Hiring
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  Training Programs
                </span>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 relative">
            <div class="relative rounded-3xl overflow-hidden shadow-[var(--tm-shadow-hero)]">
              <OptImage
                src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&q=80"
                alt="Oil & Gas Facility"
                class="w-full h-80 md:h-96 object-cover"
                :auto-dark-mode="true"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h5 class="text-lg font-semibold mb-2">Result Highlights</h5>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ 18-month completion</div>
                  <div>✓ 95% retention rate</div>
                  <div>✓ Government recognition</div>
                  <div>✓ Industry benchmark</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 案例2: 银行业数字化转型人才 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <div class="relative rounded-3xl overflow-hidden shadow-[var(--tm-shadow-hero)]">
              <OptImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Banking Technology"
                class="w-full h-80 md:h-96 object-cover"
                :auto-dark-mode="true"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h5 class="text-lg font-semibold mb-2">Digital Innovation Team</h5>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ 120 specialists placed</div>
                  <div>✓ 6-month timeline</div>
                  <div>✓ Multi-country sourcing</div>
                  <div>✓ 85% senior roles</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 md:p-10 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
            >
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white"
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
                <div>
                  <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Major GCC Bank</h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Digital Transformation Initiative
                  </p>
                </div>
              </div>

              <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Building the Future of Banking Technology
              </h4>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Assembled a world-class fintech team including Chief Digital Officer, blockchain
                specialists, and AI engineers to drive the bank's $200M digital transformation
                across 5 GCC countries.
              </p>

              <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">120</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">
                    Tech Professionals Placed
                  </div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">$200M</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">Project Value Supported</div>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  Fintech Leadership
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  AI & Blockchain
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  Cross-border Team
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 案例3: 医疗集团扩张人才支持 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div
              class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 md:p-10 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2"
            >
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white"
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
                <div>
                  <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                    Healthcare Group
                  </h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">Regional Expansion Project</p>
                </div>
              </div>

              <h4 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                Scaling Healthcare Excellence Across GCC
              </h4>

              <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Supported a leading healthcare provider's expansion into 3 new GCC markets by
                recruiting 300+ medical professionals, including specialist doctors, nurses, and
                healthcare administrators.
              </p>

              <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">300+</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">Medical Professionals</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">12</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">Months Timeline</div>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  Medical Licensing
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  Multi-country Hiring
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-xs font-medium"
                >
                  Compliance Management
                </span>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 relative">
            <div class="relative rounded-3xl overflow-hidden shadow-[var(--tm-shadow-hero)]">
              <OptImage
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                alt="Healthcare Professionals"
                class="w-full h-80 md:h-96 object-cover"
                :auto-dark-mode="true"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h5 class="text-lg font-semibold mb-2">Project Outcomes</h5>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ 3 new markets entered</div>
                  <div>✓ 100% licensing success</div>
                  <div>✓ Award-winning project</div>
                  <div>✓ Ongoing partnership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 客户证言 -->
      <div class="mt-20 text-center">
        <h3 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] mb-12">
          What Our Clients Say
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 证言1 -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="text-[var(--tm-accent-primary)] text-4xl mb-4">"</div>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              "VMMC's deep understanding of the GCC energy sector and their ability to source UAE
              nationals with technical expertise was game-changing for our emiratisation targets."
            </p>
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-badge)] rounded-full flex items-center justify-center"
              >
                <span class="text-[var(--tm-accent-primary)] font-semibold">AH</span>
              </div>
              <div>
                <div class="font-semibold text-[var(--tm-txt-primary)]">Ahmed Hassan</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">
                  HR Director, Major Oil Company
                </div>
              </div>
            </div>
          </div>

          <!-- 证言2 -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="text-[var(--tm-accent-primary)] text-4xl mb-4">"</div>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              "The quality of candidates VMMC provided for our digital transformation was
              exceptional. Their understanding of fintech requirements exceeded our expectations."
            </p>
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-badge)] rounded-full flex items-center justify-center"
              >
                <span class="text-[var(--tm-accent-primary)] font-semibold">SK</span>
              </div>
              <div>
                <div class="font-semibold text-[var(--tm-txt-primary)]">Sarah Khan</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">CTO, Leading GCC Bank</div>
              </div>
            </div>
          </div>

          <!-- 证言3 -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-3xl p-8 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] md:col-span-2 lg:col-span-1"
          >
            <div class="text-[var(--tm-accent-primary)] text-4xl mb-4">"</div>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              "VMMC's support during our regional expansion was instrumental. They handled complex
              multi-country recruitment with remarkable efficiency and compliance."
            </p>
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-[var(--tm-bg-badge)] rounded-full flex items-center justify-center"
              >
                <span class="text-[var(--tm-accent-primary)] font-semibold">DR</span>
              </div>
              <div>
                <div class="font-semibold text-[var(--tm-txt-primary)]">Dr. Rashid</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">CEO, Healthcare Group</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div class="mt-20 text-center">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
        >
          <!-- 背景装饰 -->
          <div class="absolute inset-0 opacity-10">
            <div
              class="absolute top-4 right-4 w-32 h-32 rounded-full bg-white transform rotate-45"
            ></div>
            <div
              class="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white transform -rotate-12"
            ></div>
          </div>

          <div class="relative z-1">
            <h3 class="text-3xl md:text-4xl font-light mb-6">
              Ready to Create Your Success Story?
            </h3>
            <p class="text-xl mb-8 max-w-3xl mx-auto opacity-95">
              Join 20,000+ companies who have achieved their talent goals with VMMC. Let us help you
              build exceptional teams and drive transformational growth.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-3 bg-white text-[var(--tm-accent-primary)] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 shadow-lg hover:shadow-xl no-underline"
              >
                <span>Start Your Success Story</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </NuxtLink>

              <NuxtLink
                to="/about#case-studies"
                class="inline-flex items-center gap-3 border-2 border-white/60 bg-transparent text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-white hover:bg-white/10 no-underline"
              >
                <span>View More Cases</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import FooterSection from '~/components/Home/FooterSection.vue'
  // 组件逻辑可在此添加
</script>

<style>
  /* 只保留无法用 UnoCSS 表达的复杂样式 */

  /* 背景装饰动画 */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  .success-stories .absolute:first-child {
    animation: float 8s ease-in-out infinite;
  }

  .success-stories .absolute:nth-child(2) {
    animation: float 10s ease-in-out infinite reverse;
  }

  /* 卡片入场动画 */
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .success-stories > div > div:nth-child(n + 3) {
    animation: slideInUp 0.8s ease-out forwards;
  }

  /* 深色模式适配 */
  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-card);
  }

  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
  }

  .dark .border-\[var\(--tm-bd-card\)\] {
    border-color: var(--tm-bd-secondary);
  }

  .dark .bg-\[var\(--tm-bg-badge\)\] {
    background: var(--tm-bg-whiteAlpha10);
    border-color: var(--tm-bd-transparent);
  }

  /* 响应式优化 */
  @media (max-width: 768px) {
    .success-stories .grid.grid-cols-1.lg\:grid-cols-2 {
      gap: 2rem;
    }

    .success-stories .text-4xl.md\:text-5xl.lg\:text-6xl {
      font-size: 2.5rem;
      line-height: 1.2;
    }

    .success-stories .p-8.md\:p-10 {
      padding: 1.5rem;
    }
  }
</style>
