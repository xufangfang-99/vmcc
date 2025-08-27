<template>
  <section
    id="employee-benefits"
    class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden scroll-mt-80px"
  >
    <!-- 背景装饰 -->
    <div
      class="absolute top--40 right--20 w-120 h-120 rounded-full opacity-10 pointer-events-none bg-gradient-radial from-[var(--tm-accent-gradient-from)] to-transparent"
    ></div>
    <div
      class="absolute bottom--30 left--40 w-100 h-100 rounded-full opacity-15 pointer-events-none bg-gradient-radial from-[var(--tm-accent-secondary)] to-transparent"
    ></div>

    <div class="max-w-320 mx-auto px-5 relative z-1">
      <!-- 标题区域 -->
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-feature)]"
        >
          <div
            class="w-8 h-8 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center text-white"
          >
            <div class="i-carbon-favorite w-4 h-4"></div>
          </div>
          <span class="text-3.5 font-medium text-[var(--tm-txt-primary)]">Total Rewards</span>
        </div>

        <h2 class="text-10 lg:text-14 font-light text-[var(--tm-txt-primary)] mb-6">
          Employee
          <span
            class="text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent"
          >
            Benefits
          </span>
        </h2>

        <p class="text-5 text-[var(--tm-txt-secondary)] leading-relaxed max-w-220 mx-auto">
          At VMMC, we believe that exceptional talent deserves exceptional rewards. Our
          comprehensive benefits package is designed to support your wellbeing, career growth, and
          life goals across all stages of your journey with us.
        </p>
      </div>

      <!-- 福利概览 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          Comprehensive Benefits Package
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 健康保障 -->
          <div
            class="benefit-overview-card bg-[var(--tm-bg-secondary)] rounded-8 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)] group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform"
            >
              <div class="i-carbon-health-cross w-9 h-9"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
              Health & Wellness
            </h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Comprehensive medical, dental, and mental health coverage for you and your family
            </p>
          </div>

          <!-- 财务安全 -->
          <div
            class="benefit-overview-card bg-[var(--tm-bg-secondary)] rounded-8 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-secondary)] group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform"
            >
              <div class="i-carbon-money w-9 h-9"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
              Financial Security
            </h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Competitive salary, performance bonuses, and retirement planning support
            </p>
          </div>

          <!-- 工作生活平衡 -->
          <div
            class="benefit-overview-card bg-[var(--tm-bg-secondary)] rounded-8 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-tertiary)] group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-tertiary)] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform"
            >
              <div class="i-carbon-time w-9 h-9"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
              Work-Life Balance
            </h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Flexible working arrangements, generous time off, and family support programs
            </p>
          </div>

          <!-- 成长机会 -->
          <div
            class="benefit-overview-card bg-[var(--tm-bg-secondary)] rounded-8 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-blue-500 group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform"
            >
              <div class="i-carbon-growth w-9 h-9"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
              Growth Opportunities
            </h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Professional development budget, certifications, and global mobility programs
            </p>
          </div>
        </div>
      </div>

      <!-- 详细福利内容 -->
      <div class="mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 左侧 - 核心福利 -->
          <div>
            <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8">
              Core Benefits & Compensation
            </h3>

            <div class="space-y-6">
              <!-- 薪酬福利 -->
              <div
                class="benefit-detail-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform"
                  >
                    <div class="i-carbon-piggy-bank w-6 h-6"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                      Competitive Compensation
                    </h4>
                    <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Market-leading base salary with annual reviews</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Performance-based bonuses up to 30% of base salary</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Long-term incentive plans for senior positions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- 医疗保障 -->
              <div
                class="benefit-detail-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform"
                  >
                    <div class="i-carbon-health-cross w-6 h-6"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                      Premium Healthcare
                    </h4>
                    <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"
                        ></div>
                        <span>100% premium coverage for employees and dependents</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Global medical insurance with international coverage</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Annual health check-ups and wellness programs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- 退休计划 -->
              <div
                class="benefit-detail-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-3 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform"
                  >
                    <div class="i-carbon-finance w-6 h-6"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                      Retirement & Savings
                    </h4>
                    <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Company-matched retirement contributions up to 6%</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Financial planning consultation services</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Employee stock purchase program (where applicable)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- 假期政策 -->
              <div
                class="benefit-detail-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform"
                  >
                    <div class="i-carbon-calendar w-6 h-6"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                      Time Off & Leave
                    </h4>
                    <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"
                        ></div>
                        <span>25 days annual leave + public holidays</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Sabbatical opportunities after 5 years of service</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"
                        ></div>
                        <span>Extended parental leave policies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧 - 生活方式福利 -->
          <div>
            <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8">
              Lifestyle & Wellbeing Benefits
            </h3>

            <!-- 工作灵活性 -->
            <div
              class="flexibility-highlight bg-gradient-to-br from-[var(--tm-bg-secondary)] to-[var(--tm-bg-badge)] rounded-8 p-8 border border-[var(--tm-bd-card)] mb-6 relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full opacity-5 transform translate-x-16 -translate-y-16"
              ></div>
              <div class="relative z-1">
                <div class="flex items-center gap-4 mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-4 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-home w-8 h-8"></div>
                  </div>
                  <div>
                    <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)]">
                      Flexible Working
                    </h4>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                      Work where and when you perform best
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                    <span class="text-3.5 text-[var(--tm-txt-secondary)]">Hybrid work model</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                    <span class="text-3.5 text-[var(--tm-txt-secondary)]">Flexible hours</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                    <span class="text-3.5 text-[var(--tm-txt-secondary)]">Remote work stipend</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                    <span class="text-3.5 text-[var(--tm-txt-secondary)]">Co-working spaces</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <!-- 学习发展 -->
              <div
                class="lifestyle-benefit bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-3 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-education w-6 h-6"></div>
                  </div>
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)]">
                    Learning & Development
                  </h4>
                </div>
                <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                  <li>• $5,000 annual professional development budget</li>
                  <li>• Conference attendance and industry certifications</li>
                  <li>• Internal VMMC Academy with 200+ courses</li>
                </ul>
              </div>

              <!-- 健康生活 -->
              <div
                class="lifestyle-benefit bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-pedestrian w-6 h-6"></div>
                  </div>
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)]">
                    Wellness Programs
                  </h4>
                </div>
                <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                  <li>• Gym membership reimbursement</li>
                  <li>• Mental health support and counseling</li>
                  <li>• Wellness challenges and team activities</li>
                </ul>
              </div>

              <!-- 家庭支持 -->
              <div
                class="lifestyle-benefit bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-[var(--tm-accent-tertiary)] to-purple-500 rounded-3 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-user-multiple w-6 h-6"></div>
                  </div>
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)]">Family Support</h4>
                </div>
                <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                  <li>• Childcare assistance and support</li>
                  <li>• Elder care resources and referrals</li>
                  <li>• Family-friendly company events</li>
                </ul>
              </div>

              <!-- 额外津贴 -->
              <div
                class="lifestyle-benefit bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-gift w-6 h-6"></div>
                  </div>
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)]">
                    Additional Perks
                  </h4>
                </div>
                <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                  <li>• Annual team retreats and social events</li>
                  <li>• Employee referral bonuses</li>
                  <li>• Technology allowance for personal devices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 全球福利对比 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          Benefits by Region
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 新加坡 -->
          <div
            class="regional-benefits bg-[var(--tm-bg-secondary)] rounded-8 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)] group"
          >
            <div class="text-center mb-6">
              <div
                class="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-105 transition-transform"
              >
                <div class="text-7 font-bold">SG</div>
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)]">Singapore</h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)]">Asia-Pacific Headquarters</p>
            </div>

            <ul class="space-y-3 text-3.5 text-[var(--tm-txt-secondary)]">
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <span>CPF contributions as per Singapore regulations</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <span>Private healthcare with international coverage</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <span>18 days annual leave + 11 public holidays</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                <span>Transport allowance for public transit</span>
              </li>
            </ul>
          </div>

          <!-- 阿联酋 -->
          <div
            class="regional-benefits bg-[var(--tm-bg-secondary)] rounded-8 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-secondary)] group"
          >
            <div class="text-center mb-6">
              <div
                class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-105 transition-transform"
              >
                <div class="text-6 font-bold">UAE</div>
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)]">Dubai</h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)]">Middle East Hub</p>
            </div>

            <ul class="space-y-3 text-3.5 text-[var(--tm-txt-secondary)]">
              <li class="flex items-start gap-2">
                <div
                  class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                ></div>
                <span>End of service gratuity as per UAE law</span>
              </li>
              <li class="flex items-start gap-2">
                <div
                  class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                ></div>
                <span>Comprehensive health insurance coverage</span>
              </li>
              <li class="flex items-start gap-2">
                <div
                  class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                ></div>
                <span>30 days annual leave + UAE public holidays</span>
              </li>
              <li class="flex items-start gap-2">
                <div
                  class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                ></div>
                <span>Annual flight tickets to home country</span>
              </li>
            </ul>
          </div>

          <!-- 马来西亚 -->
          <div
            class="regional-benefits bg-[var(--tm-bg-secondary)] rounded-8 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-green-500 group"
          >
            <div class="text-center mb-6">
              <div
                class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-105 transition-transform"
              >
                <div class="text-6 font-bold">MY</div>
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)]">Malaysia</h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)]">ASEAN Operations</p>
            </div>

            <ul class="space-y-3 text-3.5 text-[var(--tm-txt-secondary)]">
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                <span>EPF contributions as per Malaysian law</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                <span>Group medical and hospitalization coverage</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                <span>16 days annual leave + Malaysian holidays</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                <span>Performance-linked bonus structure</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div
        class="text-center bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-8 p-12 text-white relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-pattern opacity-10"></div>
        <div class="relative z-1">
          <h3 class="text-8 font-semibold mb-4">Experience the VMMC Advantage</h3>
          <p class="text-4.5 mb-8 opacity-90 max-w-180 mx-auto">
            Join a company that truly values its people. Our comprehensive benefits package is just
            the beginning of what makes VMMC an exceptional place to build your career.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <NuxtLink
              to="/careers#open-positions"
              class="px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 no-underline flex items-center gap-2"
            >
              <span>View Current Openings</span>
              <div class="i-carbon-arrow-right w-4 h-4"></div>
            </NuxtLink>
            <NuxtLink
              to="/careers#application-process"
              class="px-8 py-3 bg-transparent text-white rounded-full font-medium border-2 border-white/30 transition-all duration-300 hover:border-white hover:bg-white/10 no-underline"
            >
              Learn Application Process
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
  /* 渐变径向背景 */
  .bg-gradient-radial {
    background: radial-gradient(
      circle,
      var(--first-color, transparent) 0%,
      var(--second-color, transparent) 50%
    );
  }

  /* 背景图案 */
  .bg-pattern {
    background-image:
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%);
  }

  /* 深色模式适配 */
  .dark section {
    background: var(--tm-bg-secondary);
  }

  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-primary);
  }

  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  /* 入场动画 */
  .benefit-overview-card,
  .benefit-detail-card,
  .lifestyle-benefit,
  .regional-benefits {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .benefit-overview-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .benefit-overview-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .benefit-overview-card:nth-child(3) {
    animation-delay: 0.3s;
  }
  .benefit-overview-card:nth-child(4) {
    animation-delay: 0.4s;
  }

  .benefit-detail-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .benefit-detail-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .benefit-detail-card:nth-child(3) {
    animation-delay: 0.3s;
  }
  .benefit-detail-card:nth-child(4) {
    animation-delay: 0.4s;
  }

  .lifestyle-benefit:nth-child(1) {
    animation-delay: 0.2s;
  }
  .lifestyle-benefit:nth-child(2) {
    animation-delay: 0.3s;
  }
  .lifestyle-benefit:nth-child(3) {
    animation-delay: 0.4s;
  }
  .lifestyle-benefit:nth-child(4) {
    animation-delay: 0.5s;
  }

  .regional-benefits:nth-child(1) {
    animation-delay: 0.1s;
  }
  .regional-benefits:nth-child(2) {
    animation-delay: 0.2s;
  }
  .regional-benefits:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 灵活性亮点特殊样式 */
  .flexibility-highlight {
    position: relative;
  }

  .flexibility-highlight::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      var(--tm-accent-gradient-from) 0%,
      var(--tm-accent-gradient-to) 100%
    );
    border-radius: 2rem;
    z-index: -1;
    opacity: 0.1;
  }
</style>
