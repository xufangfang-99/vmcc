<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden scroll-mt-80px">
    <!-- 背景装饰 -->
    <div
      class="absolute top--30 left--40 w-120 h-120 rounded-full opacity-10 pointer-events-none bg-gradient-radial from-[var(--tm-accent-gradient-from)] to-transparent"
    ></div>
    <div
      class="absolute bottom--20 right--30 w-100 h-100 rounded-full opacity-15 pointer-events-none bg-gradient-radial from-[var(--tm-accent-secondary)] to-transparent"
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
            <div class="i-carbon-education w-4 h-4"></div>
          </div>
          <span class="text-3.5 font-medium text-[var(--tm-txt-primary)]">Grow with Us</span>
        </div>

        <h2 class="text-10 lg:text-14 font-light text-[var(--tm-txt-primary)] mb-6">
          Professional
          <span
            class="text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent"
          >
            Development
          </span>
        </h2>

        <p class="text-5 text-[var(--tm-txt-secondary)] leading-relaxed max-w-220 mx-auto">
          At VMMC, we believe in investing in our people. Our comprehensive professional development
          programs are designed to accelerate your career growth and enhance your expertise in the
          rapidly evolving world of talent solutions.
        </p>
      </div>

      <!-- 学习路径概览 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          Your Learning Journey at VMMC
        </h3>

        <div class="relative">
          <!-- 连接线 - 仅在大屏幕显示 -->
          <div
            class="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] via-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] opacity-30"
          ></div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- 入职培训 -->
            <div
              class="learning-path-item text-center p-6 bg-[var(--tm-bg-primary)] rounded-8 border border-[var(--tm-bd-card)] relative transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2 hover:border-[var(--tm-accent-primary)]"
            >
              <div
                class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--tm-bg-primary)] border-2 border-[var(--tm-accent-primary)] rounded-full flex items-center justify-center"
              >
                <div class="w-3 h-3 bg-[var(--tm-accent-primary)] rounded-full"></div>
              </div>
              <div
                class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-7 font-bold"
              >
                1
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">
                Onboarding Excellence
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                Comprehensive 90-day onboarding program covering VMMC culture, industry knowledge,
                and role-specific training
              </p>
              <div class="text-3 text-[var(--tm-accent-primary)] font-medium">
                Duration: 3 months
              </div>
            </div>

            <!-- 核心技能 -->
            <div
              class="learning-path-item text-center p-6 bg-[var(--tm-bg-primary)] rounded-8 border border-[var(--tm-bd-card)] relative transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2 hover:border-[var(--tm-accent-secondary)]"
            >
              <div
                class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--tm-bg-primary)] border-2 border-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center"
              >
                <div class="w-3 h-3 bg-[var(--tm-accent-secondary)] rounded-full"></div>
              </div>
              <div
                class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-7 font-bold"
              >
                2
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">
                Core Skills Development
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                Build essential consulting and recruitment skills through hands-on training and
                mentorship programs
              </p>
              <div class="text-3 text-[var(--tm-accent-secondary)] font-medium">
                Duration: 6-12 months
              </div>
            </div>

            <!-- 专业认证 -->
            <div
              class="learning-path-item text-center p-6 bg-[var(--tm-bg-primary)] rounded-8 border border-[var(--tm-bd-card)] relative transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2 hover:border-[var(--tm-accent-tertiary)]"
            >
              <div
                class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--tm-bg-primary)] border-2 border-[var(--tm-accent-tertiary)] rounded-full flex items-center justify-center"
              >
                <div class="w-3 h-3 bg-[var(--tm-accent-tertiary)] rounded-full"></div>
              </div>
              <div
                class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-tertiary)] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-7 font-bold"
              >
                3
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">
                Specialization & Certification
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                Pursue advanced certifications and develop expertise in specialized areas of HR
                consulting
              </p>
              <div class="text-3 text-[var(--tm-accent-tertiary)] font-medium">
                Duration: 1-2 years
              </div>
            </div>

            <!-- 领导力发展 -->
            <div
              class="learning-path-item text-center p-6 bg-[var(--tm-bg-primary)] rounded-8 border border-[var(--tm-bd-card)] relative transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-2 hover:border-orange-500"
            >
              <div
                class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--tm-bg-primary)] border-2 border-orange-500 rounded-full flex items-center justify-center"
              >
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div
                class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-7 font-bold"
              >
                4
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">
                Leadership Excellence
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                Advanced leadership development programs to prepare for senior roles and global
                responsibilities
              </p>
              <div class="text-3 text-orange-500 font-medium">Duration: Ongoing</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 培训项目详情 -->
      <div class="mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- 左侧 - 培训项目 -->
          <div>
            <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8">
              Key Training Programs
            </h3>

            <div class="space-y-6">
              <!-- VMMC Academy -->
              <div
                class="training-program bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-14 h-14 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-4 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <div class="i-carbon-education w-7 h-7"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
                      VMMC Academy
                    </h4>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                      Our flagship internal university offering 200+ courses covering recruitment
                      mastery, client management, and industry expertise
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                      >
                        Online Learning
                      </span>
                      <span
                        class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                      >
                        Interactive Modules
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 导师制度 -->
              <div
                class="training-program bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-4 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <div class="i-carbon-user-speaker w-7 h-7"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Mentorship Program
                    </h4>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                      One-on-one guidance from senior consultants with 10+ years of experience,
                      providing personalized career development
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 bg-[var(--tm-bg-badge)] text-green-600 rounded-full text-3 font-medium"
                      >
                        Senior Mentors
                      </span>
                      <span
                        class="px-3 py-1 bg-[var(--tm-bg-badge)] text-green-600 rounded-full text-3 font-medium"
                      >
                        Career Planning
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 全球轮岗 -->
              <div
                class="training-program bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-4 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <div class="i-carbon-earth-filled w-7 h-7"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Global Exchange Program
                    </h4>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                      Opportunity to work in our international offices across Singapore, Dubai,
                      Malaysia, and China
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 bg-[var(--tm-bg-badge)] text-purple-600 rounded-full text-3 font-medium"
                      >
                        7 Global Offices
                      </span>
                      <span
                        class="px-3 py-1 bg-[var(--tm-bg-badge)] text-purple-600 rounded-full text-3 font-medium"
                      >
                        Cross-Cultural Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 外部认证 -->
              <div
                class="training-program bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-4 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <div class="i-carbon-certificate w-7 h-7"></div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
                      Professional Certifications
                    </h4>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                      Support for industry certifications including SHRM, CIPD, PMI, and specialized
                      HR technology platforms
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 bg-[var(--tm-bg-badge)] text-blue-600 rounded-full text-3 font-medium"
                      >
                        SHRM Certified
                      </span>
                      <span
                        class="px-3 py-1 bg-[var(--tm-bg-badge)] text-blue-600 rounded-full text-3 font-medium"
                      >
                        CIPD Qualified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧 - 学习统计与成果 -->
          <div>
            <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8">
              Learning Impact & Results
            </h3>

            <!-- 统计数据 -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div
                class="stat-card text-center p-6 bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-badge)] rounded-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="text-8 font-bold text-[var(--tm-accent-primary)] mb-2">200+</div>
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">Training Courses</div>
              </div>

              <div
                class="stat-card text-center p-6 bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-badge)] rounded-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="text-8 font-bold text-[var(--tm-accent-secondary)] mb-2">50K+</div>
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">Learning Hours</div>
              </div>

              <div
                class="stat-card text-center p-6 bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-badge)] rounded-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="text-8 font-bold text-[var(--tm-accent-tertiary)] mb-2">95%</div>
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">Completion Rate</div>
              </div>

              <div
                class="stat-card text-center p-6 bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-badge)] rounded-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
              >
                <div class="text-8 font-bold text-green-600 mb-2">85%</div>
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">Internal Promotion</div>
              </div>
            </div>

            <!-- 成功案例 -->
            <div
              class="success-story bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-secondary)] rounded-8 p-8 border border-[var(--tm-bd-card)] relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full opacity-5 transform translate-x-16 -translate-y-16"
              ></div>
              <div class="relative z-1">
                <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Success Story Spotlight
                </h4>

                <div class="flex items-start gap-4 mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center text-white font-bold text-lg"
                  >
                    SL
                  </div>
                  <div>
                    <h5 class="text-5 font-semibold text-[var(--tm-txt-primary)]">Sarah Lim</h5>
                    <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                      Senior Consultant → Regional Director
                    </p>
                    <p class="text-3 text-[var(--tm-accent-primary)] font-medium">
                      Singapore Office
                    </p>
                  </div>
                </div>

                <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4 italic">
                  "VMMC's professional development programs transformed my career. From the
                  comprehensive onboarding to the mentorship program and global exchange opportunity
                  in Dubai, every step prepared me for leadership. I'm now leading a team of 15
                  consultants across the APAC region."
                </p>

                <div class="flex items-center gap-4">
                  <div class="text-3 text-[var(--tm-txt-secondary)]">
                    <span class="font-medium">Journey:</span>
                    3.5 years
                  </div>
                  <div class="text-3 text-[var(--tm-txt-secondary)]">
                    <span class="font-medium">Programs:</span>
                    8 completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 技能发展轨道 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          Skill Development Tracks
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 招聘专精轨道 -->
          <div
            class="skill-track bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)] group relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-primary)] opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-1">
              <div
                class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-4 flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform"
              >
                <div class="i-carbon-search w-8 h-8"></div>
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4 text-center">
                Recruitment Mastery
              </h4>
              <ul class="space-y-3 text-3.5 text-[var(--tm-txt-secondary)]">
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Executive Search Techniques</span>
                </li>
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Candidate Assessment & Evaluation</span>
                </li>
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Market Intelligence & Research</span>
                </li>
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Digital Sourcing Strategies</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- 客户关系轨道 -->
          <div
            class="skill-track bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-secondary)] group relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-secondary)] opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-1">
              <div
                class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-4 flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform"
              >
                <div class="i-carbon-user-favorite w-8 h-8"></div>
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4 text-center">
                Client Excellence
              </h4>
              <ul class="space-y-3 text-3.5 text-[var(--tm-txt-secondary)]">
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Relationship Building & Management</span>
                </li>
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Solution-Based Selling</span>
                </li>
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Stakeholder Communication</span>
                </li>
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Account Growth Strategies</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- 领导力轨道 -->
          <div
            class="skill-track bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-tertiary)] group relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-tertiary)] opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-1">
              <div
                class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-tertiary)] to-purple-500 rounded-4 flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform"
              >
                <div class="i-carbon-user-speaker w-8 h-8"></div>
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4 text-center">
                Leadership Development
              </h4>
              <ul class="space-y-3 text-3.5 text-[var(--tm-txt-secondary)]">
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Team Management & Coaching</span>
                </li>
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Strategic Thinking & Planning</span>
                </li>
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Change Management</span>
                </li>
                <li class="flex items-start gap-2">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                  ></div>
                  <span>Cross-Cultural Leadership</span>
                </li>
              </ul>
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
          <h3 class="text-8 font-semibold mb-4">Accelerate Your Career Growth</h3>
          <p class="text-4.5 mb-8 opacity-90 max-w-180 mx-auto">
            Join VMMC and unlock your potential with world-class training programs, mentorship
            opportunities, and global career advancement paths. Your professional development
            journey starts here.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <NuxtLink
              to="/careers#open-positions"
              class="px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 no-underline flex items-center gap-2"
            >
              <span>Explore Career Opportunities</span>
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
    background: var(--tm-bg-primary);
  }

  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  /* 入场动画 */
  .learning-path-item,
  .training-program,
  .stat-card,
  .skill-track {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .learning-path-item:nth-child(1) {
    animation-delay: 0.1s;
  }
  .learning-path-item:nth-child(2) {
    animation-delay: 0.2s;
  }
  .learning-path-item:nth-child(3) {
    animation-delay: 0.3s;
  }
  .learning-path-item:nth-child(4) {
    animation-delay: 0.4s;
  }

  .training-program:nth-child(1) {
    animation-delay: 0.1s;
  }
  .training-program:nth-child(2) {
    animation-delay: 0.2s;
  }
  .training-program:nth-child(3) {
    animation-delay: 0.3s;
  }
  .training-program:nth-child(4) {
    animation-delay: 0.4s;
  }

  .skill-track:nth-child(1) {
    animation-delay: 0.1s;
  }
  .skill-track:nth-child(2) {
    animation-delay: 0.2s;
  }
  .skill-track:nth-child(3) {
    animation-delay: 0.3s;
  }

  .stat-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .stat-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .stat-card:nth-child(3) {
    animation-delay: 0.3s;
  }
  .stat-card:nth-child(4) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 学习路径连接线动画 */
  @keyframes flowingGradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  .learning-path-item:hover ~ .learning-path-item::before {
    animation: flowingGradient 2s ease-in-out infinite;
  }

  /* 成功案例特殊样式 */
  .success-story {
    position: relative;
  }

  .success-story::before {
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
