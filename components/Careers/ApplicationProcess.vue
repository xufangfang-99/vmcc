<template>
  <section
    id="application-process"
    class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden scroll-mt-80px"
  >
    <!-- 背景装饰 -->
    <div
      class="absolute top--20 right--30 w-100 h-100 rounded-full opacity-10 pointer-events-none bg-gradient-radial from-[var(--tm-accent-gradient-from)] to-transparent"
    ></div>
    <div
      class="absolute bottom--40 left--20 w-80 h-80 rounded-full opacity-15 pointer-events-none bg-gradient-radial from-[var(--tm-accent-secondary)] to-transparent"
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
            <div class="i-carbon-document w-4 h-4"></div>
          </div>
          <span class="text-3.5 font-medium text-[var(--tm-txt-primary)]">Join Our Journey</span>
        </div>

        <h2 class="text-10 lg:text-14 font-light text-[var(--tm-txt-primary)] mb-6">
          Application
          <span
            class="text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent"
          >
            Process
          </span>
        </h2>

        <p class="text-5 text-[var(--tm-txt-secondary)] leading-relaxed max-w-220 mx-auto">
          Our streamlined application process is designed to identify exceptional talent while
          providing candidates with a comprehensive understanding of VMMC's culture and
          expectations.
        </p>
      </div>

      <!-- 申请流程步骤 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          How to Apply: 4 Simple Steps
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div
            class="process-step text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-card)] relative overflow-hidden group hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[var(--tm-accent-primary)] opacity-0 group-hover:opacity-5 transition-opacity"
            ></div>
            <div class="relative z-1">
              <div
                class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-6 font-bold group-hover:scale-110 transition-transform"
              >
                1
              </div>
              <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                Submit Application
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                Apply online through our careers portal with your updated resume and cover letter
              </p>
              <div class="flex items-center justify-center">
                <span class="text-3 text-[var(--tm-accent-primary)] font-medium">
                  ⏱ 5-10 minutes
                </span>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div
            class="process-step text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-card)] relative overflow-hidden group hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[var(--tm-accent-secondary)] opacity-0 group-hover:opacity-5 transition-opacity"
            ></div>
            <div class="relative z-1">
              <div
                class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-6 font-bold group-hover:scale-110 transition-transform"
              >
                2
              </div>
              <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                Initial Screening
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                HR team reviews your application and conducts a preliminary phone screening
              </p>
              <div class="flex items-center justify-center">
                <span class="text-3 text-[var(--tm-accent-secondary)] font-medium">
                  ⏱ 2-3 days
                </span>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div
            class="process-step text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-card)] relative overflow-hidden group hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[var(--tm-accent-tertiary)] opacity-0 group-hover:opacity-5 transition-opacity"
            ></div>
            <div class="relative z-1">
              <div
                class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-tertiary)] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-6 font-bold group-hover:scale-110 transition-transform"
              >
                3
              </div>
              <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                Assessment & Interview
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                Complete skills assessment and participate in multiple interview rounds
              </p>
              <div class="flex items-center justify-center">
                <span class="text-3 text-[var(--tm-accent-tertiary)] font-medium">
                  ⏱ 1-2 weeks
                </span>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div
            class="process-step text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-card)] relative overflow-hidden group hover:shadow-[var(--tm-shadow-hover)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-green-500 opacity-0 group-hover:opacity-5 transition-opacity"
            ></div>
            <div class="relative z-1">
              <div
                class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-6 font-bold group-hover:scale-110 transition-transform"
              >
                4
              </div>
              <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">Final Decision</h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                Receive offer letter and complete onboarding documentation
              </p>
              <div class="flex items-center justify-center">
                <span class="text-3 text-green-600 font-medium">⏱ 3-5 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 面试流程详情 -->
      <div class="mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- 左侧 - 面试流程 -->
          <div>
            <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8">
              Interview Process Overview
            </h3>

            <div class="space-y-6">
              <!-- 电话面试 -->
              <div
                class="interview-stage bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <div class="i-carbon-phone w-6 h-6"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Phone/Video Screening
                    </h4>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-3">
                      Initial conversation with HR to discuss your background, motivations, and role
                      expectations
                    </p>
                    <div class="text-3 text-[var(--tm-accent-primary)] font-medium">
                      Duration: 30-45 minutes
                    </div>
                  </div>
                </div>
              </div>

              <!-- 技能评估 -->
              <div
                class="interview-stage bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-3 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <div class="i-carbon-skill-level w-6 h-6"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Skills Assessment
                    </h4>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-3">
                      Role-specific evaluation including case studies, technical tests, or
                      presentation tasks
                    </p>
                    <div class="text-3 text-[var(--tm-accent-secondary)] font-medium">
                      Duration: 1-2 hours
                    </div>
                  </div>
                </div>
              </div>

              <!-- 团队面试 -->
              <div
                class="interview-stage bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <div class="i-carbon-user-multiple w-6 h-6"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Panel Interview
                    </h4>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-3">
                      Meet with potential team members and direct supervisor to assess cultural fit
                    </p>
                    <div class="text-3 text-purple-600 font-medium">Duration: 45-60 minutes</div>
                  </div>
                </div>
              </div>

              <!-- 高级面试 -->
              <div
                class="interview-stage bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-3 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <div class="i-carbon-user-speaker w-6 h-6"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Senior Leadership Interview
                    </h4>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-3">
                      Final interview with senior management to discuss strategic alignment and
                      career goals
                    </p>
                    <div class="text-3 text-orange-600 font-medium">Duration: 30-45 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧 - 准备建议 -->
          <div>
            <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8">
              Interview Preparation Tips
            </h3>

            <div
              class="preparation-guide bg-gradient-to-br from-[var(--tm-bg-secondary)] to-[var(--tm-bg-badge)] rounded-8 p-8 border border-[var(--tm-bd-card)]"
            >
              <!-- 研究公司 -->
              <div class="mb-8">
                <h4
                  class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4 flex items-center gap-3"
                >
                  <div
                    class="w-8 h-8 bg-[var(--tm-accent-primary)] rounded-2 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-search w-4 h-4"></div>
                  </div>
                  Research VMMC
                </h4>
                <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                    ></div>
                    <span>Review our company history and global presence</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                    ></div>
                    <span>Understand our core values and mission</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                    ></div>
                    <span>Familiarize yourself with our service offerings</span>
                  </li>
                </ul>
              </div>

              <!-- 准备案例 -->
              <div class="mb-8">
                <h4
                  class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4 flex items-center gap-3"
                >
                  <div
                    class="w-8 h-8 bg-[var(--tm-accent-secondary)] rounded-2 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-notebook w-4 h-4"></div>
                  </div>
                  Prepare Examples
                </h4>
                <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                    ></div>
                    <span>STAR method examples of your achievements</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                    ></div>
                    <span>Client relationship management successes</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                    ></div>
                    <span>Problem-solving and analytical scenarios</span>
                  </li>
                </ul>
              </div>

              <!-- 技术准备 -->
              <div>
                <h4
                  class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4 flex items-center gap-3"
                >
                  <div
                    class="w-8 h-8 bg-[var(--tm-accent-tertiary)] rounded-2 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-tools w-4 h-4"></div>
                  </div>
                  Technical Readiness
                </h4>
                <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                    ></div>
                    <span>Test video call setup and internet connection</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                    ></div>
                    <span>Prepare questions about the role and team</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                    ></div>
                    <span>Have copies of documents ready (digital & physical)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 评估标准 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          What We Look For: Assessment Criteria
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 专业技能 -->
          <div
            class="criteria-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-skill-level-advanced w-8 h-8"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">
              Technical Expertise
            </h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Deep knowledge in your field with proven track record of delivering results and
              solving complex challenges
            </p>
          </div>

          <!-- 领导力 -->
          <div
            class="criteria-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-user-speaker w-8 h-8"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">
              Leadership Potential
            </h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Ability to inspire teams, drive change, and take ownership of outcomes while fostering
              collaboration
            </p>
          </div>

          <!-- 客户导向 -->
          <div
            class="criteria-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-user-favorite w-8 h-8"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">
              Client-Centric Mindset
            </h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Passion for understanding client needs and delivering exceptional service that creates
              lasting value
            </p>
          </div>

          <!-- 学习能力 -->
          <div
            class="criteria-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-growth w-8 h-8"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">Growth Mindset</h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Continuous learning attitude with adaptability to new challenges and emerging industry
              trends
            </p>
          </div>

          <!-- 沟通技巧 -->
          <div
            class="criteria-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-chat w-8 h-8"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">
              Communication Skills
            </h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Clear, persuasive communication across all levels with cultural sensitivity in global
              markets
            </p>
          </div>

          <!-- 文化契合 -->
          <div
            class="criteria-card bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-earth-filled w-8 h-8"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">Cultural Fit</h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Alignment with VMMC values and ability to thrive in our diverse, collaborative
              environment
            </p>
          </div>
        </div>
      </div>

      <!-- FAQ 区域 -->
      <div class="mb-16">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          Frequently Asked Questions
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- FAQ 左列 -->
          <div class="space-y-6">
            <div
              class="faq-item bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                >
                  <div class="i-carbon-time text-white w-5 h-5"></div>
                </div>
                <div class="flex-1">
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    How long does the entire recruitment process take?
                  </h4>
                  <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                    The complete process typically takes 3-4 weeks from application submission to
                    final decision. This timeline may vary based on role complexity and candidate
                    availability.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="faq-item bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                >
                  <div class="i-carbon-feedback text-white w-5 h-5"></div>
                </div>
                <div class="flex-1">
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Do you provide feedback after interviews?
                  </h4>
                  <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                    Yes, we provide constructive feedback to all candidates who complete the
                    interview process. This helps candidates understand areas of strength and
                    potential improvement.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="faq-item bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                >
                  <div class="i-carbon-renew text-white w-5 h-5"></div>
                </div>
                <div class="flex-1">
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    What happens if I'm not selected for a current role?
                  </h4>
                  <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                    We maintain a talent pipeline and may consider you for future opportunities.
                    Exceptional candidates are often reconsidered when suitable positions become
                    available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ 右列 -->
          <div class="space-y-6">
            <div
              class="faq-item bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                >
                  <div class="i-carbon-document-add text-white w-5 h-5"></div>
                </div>
                <div class="flex-1">
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    What should I include in my application?
                  </h4>
                  <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                    Submit an updated resume, tailored cover letter, and relevant portfolio/work
                    samples. Ensure your application clearly demonstrates how your experience aligns
                    with the role requirements.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="faq-item bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                >
                  <div class="i-carbon-copy text-white w-5 h-5"></div>
                </div>
                <div class="flex-1">
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Can I apply for multiple positions simultaneously?
                  </h4>
                  <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                    Yes, you may apply for multiple roles that match your qualifications. However,
                    please ensure each application is specifically tailored to the respective
                    position.
                  </p>
                </div>
              </div>
            </div>

            <!-- 额外的FAQ项目，让右列更充实 -->
            <div
              class="faq-item bg-gradient-to-br from-[var(--tm-bg-secondary)] to-[var(--tm-bg-badge)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] group relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full opacity-5 transform translate-x-8 -translate-y-8"
              ></div>
              <div class="flex items-start gap-4 relative z-1">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                >
                  <div class="i-carbon-help text-white w-5 h-5"></div>
                </div>
                <div class="flex-1">
                  <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Need More Information?
                  </h4>
                  <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                    Have questions not covered here? Our recruitment team is available to provide
                    additional guidance and support throughout your application journey.
                  </p>
                  <button
                    class="text-3.5 font-medium text-[var(--tm-accent-primary)] hover:text-[var(--tm-accent-secondary)] transition-colors flex items-center gap-1"
                  >
                    <span>Contact HR Team</span>
                    <div class="i-carbon-arrow-right w-3 h-3"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div
        class="text-center bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-8 p-12 text-white relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-pattern opacity-10"></div>
        <div class="relative z-1">
          <h3 class="text-8 font-semibold mb-4">Ready to Begin Your Application?</h3>
          <p class="text-4.5 mb-8 opacity-90 max-w-180 mx-auto">
            Join VMMC's mission to transform talent solutions across Asia-Pacific and Middle East.
            Start your application today and take the first step toward an impactful career.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <NuxtLink
              to="/careers#open-positions"
              class="px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 no-underline flex items-center gap-2"
            >
              <span>View Open Positions</span>
              <div class="i-carbon-arrow-right w-4 h-4"></div>
            </NuxtLink>
            <NuxtLink
              to="/careers#why-vmmc"
              class="px-8 py-3 bg-transparent text-white rounded-full font-medium border-2 border-white/30 transition-all duration-300 hover:border-white hover:bg-white/10 no-underline"
            >
              Learn More About VMMC
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
  .process-step,
  .interview-stage,
  .criteria-card,
  .faq-item {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .process-step:nth-child(1) {
    animation-delay: 0.1s;
  }
  .process-step:nth-child(2) {
    animation-delay: 0.2s;
  }
  .process-step:nth-child(3) {
    animation-delay: 0.3s;
  }
  .process-step:nth-child(4) {
    animation-delay: 0.4s;
  }

  .interview-stage:nth-child(1) {
    animation-delay: 0.1s;
  }
  .interview-stage:nth-child(2) {
    animation-delay: 0.2s;
  }
  .interview-stage:nth-child(3) {
    animation-delay: 0.3s;
  }
  .interview-stage:nth-child(4) {
    animation-delay: 0.4s;
  }

  .criteria-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .criteria-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .criteria-card:nth-child(3) {
    animation-delay: 0.3s;
  }
  .criteria-card:nth-child(4) {
    animation-delay: 0.4s;
  }
  .criteria-card:nth-child(5) {
    animation-delay: 0.5s;
  }
  .criteria-card:nth-child(6) {
    animation-delay: 0.6s;
  }

  .faq-item:nth-child(1) {
    animation-delay: 0.1s;
  }
  .faq-item:nth-child(2) {
    animation-delay: 0.2s;
  }
  .faq-item:nth-child(3) {
    animation-delay: 0.3s;
  }
  .faq-item:nth-child(4) {
    animation-delay: 0.4s;
  }
  .faq-item:nth-child(5) {
    animation-delay: 0.5s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 准备指南特殊样式 */
  .preparation-guide {
    position: relative;
  }

  .preparation-guide::before {
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
