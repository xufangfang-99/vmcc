<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div
      class="absolute top--30 right--30 w-100 h-100 rounded-full opacity-10 pointer-events-none bg-gradient-radial from-[var(--tm-accent-gradient-from)] to-transparent"
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
            <div class="i-carbon-user-multiple w-4 h-4"></div>
          </div>
          <span class="text-3.5 font-medium text-[var(--tm-txt-primary)]">Join Our Team</span>
        </div>

        <h2 class="text-10 lg:text-14 font-light text-[var(--tm-txt-primary)] mb-6">
          Open
          <span
            class="text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent"
          >
            Positions
          </span>
        </h2>

        <p class="text-5 text-[var(--tm-txt-secondary)] leading-relaxed max-w-220 mx-auto">
          Discover opportunities to shape the future of talent solutions. From experienced
          professionals to emerging leaders, we offer diverse career paths across our global network
          of offices.
        </p>
      </div>

      <!-- 职位搜索过滤器 -->
      <div class="mb-16">
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-6 border border-[var(--tm-bd-card)] shadow-[var(--tm-shadow-card)]"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 职位类型筛选 -->
            <div class="filter-group">
              <label class="block text-3.5 font-medium text-[var(--tm-txt-primary)] mb-2">
                Role Type
              </label>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="type in roleTypes"
                  :key="type"
                  :class="[
                    'px-3 py-1.5 rounded-full text-3.5 font-medium transition-all duration-300',
                    selectedRoleType === type
                      ? 'bg-[var(--tm-accent-primary)] text-white'
                      : 'bg-[var(--tm-bg-badge)] text-[var(--tm-txt-secondary)] hover:bg-[var(--tm-accent-primary)] hover:text-white',
                  ]"
                  @click="selectedRoleType = type"
                >
                  {{ type }}
                </button>
              </div>
            </div>

            <!-- 地点筛选 -->
            <div class="filter-group">
              <label class="block text-3.5 font-medium text-[var(--tm-txt-primary)] mb-2">
                Location
              </label>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="location in locations"
                  :key="location"
                  :class="[
                    'px-3 py-1.5 rounded-full text-3.5 font-medium transition-all duration-300',
                    selectedLocation === location
                      ? 'bg-[var(--tm-accent-secondary)] text-white'
                      : 'bg-[var(--tm-bg-badge)] text-[var(--tm-txt-secondary)] hover:bg-[var(--tm-accent-secondary)] hover:text-white',
                  ]"
                  @click="selectedLocation = location"
                >
                  {{ location }}
                </button>
              </div>
            </div>

            <!-- 经验水平 -->
            <div class="filter-group">
              <label class="block text-3.5 font-medium text-[var(--tm-txt-primary)] mb-2">
                Experience Level
              </label>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="level in experienceLevels"
                  :key="level"
                  :class="[
                    'px-3 py-1.5 rounded-full text-3.5 font-medium transition-all duration-300',
                    selectedExperience === level
                      ? 'bg-[var(--tm-accent-tertiary)] text-white'
                      : 'bg-[var(--tm-bg-badge)] text-[var(--tm-txt-secondary)] hover:bg-[var(--tm-accent-tertiary)] hover:text-white',
                  ]"
                  @click="selectedExperience = level"
                >
                  {{ level }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 职位列表 -->
      <div class="space-y-6 mb-16">
        <!-- Senior Consultant -->
        <div
          class="position-card group bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
        >
          <div class="flex flex-col lg:flex-row lg:items-start gap-6">
            <div class="flex-1">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-7 font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Senior Recruitment Consultant
                  </h3>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span
                      class="px-3 py-1 bg-[var(--tm-accent-primary)] text-white rounded-full text-3 font-medium"
                    >
                      Senior Level
                    </span>
                    <span
                      class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                    >
                      Multiple Locations
                    </span>
                    <span
                      class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-3 font-medium"
                    >
                      Full-time
                    </span>
                  </div>
                </div>
                <div
                  class="w-12 h-12 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-3 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <div class="i-carbon-search w-6 h-6"></div>
                </div>
              </div>

              <p class="text-4 text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Lead complex recruitment projects for C-level and senior executive positions. Work
                with multinational clients across Asia-Pacific and Middle East to identify and
                attract top-tier talent for transformational roles.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 class="text-4 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Key Responsibilities
                  </h4>
                  <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Executive search and assessment</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Client relationship management</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Market research and insights</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Team leadership and mentoring</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-4 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Requirements
                  </h4>
                  <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>8+ years recruitment experience</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Executive search expertise</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Cross-cultural communication</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Business fluency in English</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">
                  <span class="font-medium">Locations:</span>
                  Singapore, Dubai, Kuala Lumpur
                </div>
              </div>
            </div>

            <div class="lg:w-48 flex flex-col gap-3">
              <button
                class="w-full px-6 py-3 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white rounded-full font-medium transition-all duration-300 hover:shadow-[var(--tm-shadow-accent)] hover:scale-105"
              >
                Apply Now
              </button>
              <button
                class="w-full px-6 py-3 bg-transparent text-[var(--tm-accent-primary)] rounded-full font-medium border border-[var(--tm-accent-primary)] transition-all duration-300 hover:bg-[var(--tm-accent-primary)] hover:text-white"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <!-- HR Business Partner -->
        <div
          class="position-card group bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
        >
          <div class="flex flex-col lg:flex-row lg:items-start gap-6">
            <div class="flex-1">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-7 font-semibold text-[var(--tm-txt-primary)] mb-2">
                    HR Business Partner
                  </h3>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span
                      class="px-3 py-1 bg-[var(--tm-accent-secondary)] text-white rounded-full text-3 font-medium"
                    >
                      Mid-Senior Level
                    </span>
                    <span
                      class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                    >
                      Regional Hubs
                    </span>
                    <span
                      class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-3 font-medium"
                    >
                      Full-time
                    </span>
                  </div>
                </div>
                <div
                  class="w-12 h-12 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-3 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <div class="i-carbon-partnership w-6 h-6"></div>
                </div>
              </div>

              <p class="text-4 text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Partner with business leaders to drive organizational effectiveness, talent
                development, and cultural transformation. Support VMMC's growth across diverse
                markets while ensuring alignment with our global HR strategy.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 class="text-4 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Key Responsibilities
                  </h4>
                  <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Strategic HR partnership</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Talent development programs</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Performance management</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-secondary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Change management support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-4 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Requirements
                  </h4>
                  <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>5+ years HR business partnering</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Organizational development skills</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Data-driven approach</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-tertiary)] mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Regional market knowledge</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">
                  <span class="font-medium">Locations:</span>
                  Dubai, Beijing, Shanghai
                </div>
              </div>
            </div>

            <div class="lg:w-48 flex flex-col gap-3">
              <button
                class="w-full px-6 py-3 bg-gradient-to-r from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] text-white rounded-full font-medium transition-all duration-300 hover:shadow-[var(--tm-shadow-accent)] hover:scale-105"
              >
                Apply Now
              </button>
              <button
                class="w-full px-6 py-3 bg-transparent text-[var(--tm-accent-secondary)] rounded-full font-medium border border-[var(--tm-accent-secondary)] transition-all duration-300 hover:bg-[var(--tm-accent-secondary)] hover:text-white"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <!-- Talent Acquisition Specialist -->
        <div
          class="position-card group bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
        >
          <div class="flex flex-col lg:flex-row lg:items-start gap-6">
            <div class="flex-1">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-7 font-semibold text-[var(--tm-txt-primary)] mb-2">
                    Talent Acquisition Specialist
                  </h3>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="px-3 py-1 bg-green-500 text-white rounded-full text-3 font-medium">
                      Mid Level
                    </span>
                    <span
                      class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                    >
                      All Locations
                    </span>
                    <span
                      class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-3 font-medium"
                    >
                      Full-time
                    </span>
                  </div>
                </div>
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <div class="i-carbon-user-identification w-6 h-6"></div>
                </div>
              </div>

              <p class="text-4 text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                Drive talent acquisition strategies for mid to senior-level positions across various
                industries. Utilize innovative sourcing techniques and build strong candidate
                relationships to deliver exceptional recruitment outcomes.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 class="text-4 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Key Responsibilities
                  </h4>
                  <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                    <li class="flex items-start gap-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                      <span>End-to-end recruitment process</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                      <span>Candidate sourcing and screening</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                      <span>Interview coordination</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                      <span>Market intelligence gathering</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-4 font-semibold text-[var(--tm-txt-primary)] mb-3">
                    Requirements
                  </h4>
                  <ul class="space-y-2 text-3.5 text-[var(--tm-txt-secondary)]">
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"
                      ></div>
                      <span>3+ years recruitment experience</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Strong networking abilities</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Tech-savvy approach</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div
                        class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"
                      ></div>
                      <span>Results-oriented mindset</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">
                  <span class="font-medium">Locations:</span>
                  All VMMC Offices
                </div>
              </div>
            </div>

            <div class="lg:w-48 flex flex-col gap-3">
              <button
                class="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Apply Now
              </button>
              <button
                class="w-full px-6 py-3 bg-transparent text-green-600 rounded-full font-medium border border-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 职业发展路径 -->
      <div class="mb-16">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8 text-center">
          Your Career Journey at VMMC
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Entry Level -->
          <div
            class="career-path bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-user-identification w-8 h-8"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">Associate Level</h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
              Start your consulting career with comprehensive training and mentorship
            </p>
            <ul class="text-3 text-[var(--tm-txt-secondary)] space-y-1">
              <li>• Recruitment Associate</li>
              <li>• Research Analyst</li>
              <li>• HR Coordinator</li>
            </ul>
          </div>

          <!-- Mid Level -->
          <div
            class="career-path bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-growth w-8 h-8"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">Senior Level</h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
              Lead projects and develop specialized expertise in your chosen domain
            </p>
            <ul class="text-3 text-[var(--tm-txt-secondary)] space-y-1">
              <li>• Senior Consultant</li>
              <li>• Team Leader</li>
              <li>• Specialist Roles</li>
            </ul>
          </div>

          <!-- Leadership -->
          <div
            class="career-path bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-partnership w-8 h-8"></div>
            </div>
            <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-3">Leadership</h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
              Drive business strategy and lead global teams across regions
            </p>
            <ul class="text-3 text-[var(--tm-txt-secondary)] space-y-1">
              <li>• Principal Consultant</li>
              <li>• Regional Director</li>
              <li>• Practice Lead</li>
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
          <h3 class="text-8 font-semibold mb-4">Ready to Start Your Journey?</h3>
          <p class="text-4.5 mb-8 opacity-90 max-w-180 mx-auto">
            Don't see the perfect role? We're always looking for exceptional talent. Send us your
            resume and let us know how you'd like to contribute to VMMC's mission.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <button
              class="px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 flex items-center gap-2"
            >
              <span>Submit General Application</span>
              <div class="i-carbon-arrow-right w-4 h-4"></div>
            </button>
            <NuxtLink
              to="/careers#application-process"
              class="px-8 py-3 bg-transparent text-white rounded-full font-medium border-2 border-white/30 transition-all duration-300 hover:border-white hover:bg-white/10 no-underline"
            >
              Learn About Our Process
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // 筛选器状态
  const selectedRoleType = ref('All')
  const selectedLocation = ref('All')
  const selectedExperience = ref('All')

  // 筛选器选项
  const roleTypes = ['All', 'Consulting', 'HR Services', 'Business Support', 'Leadership']
  const locations = ['All', 'Singapore', 'Dubai', 'Malaysia', 'China', 'Remote']
  const experienceLevels = ['All', 'Entry Level', 'Mid Level', 'Senior Level', 'Executive']
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
  .position-card,
  .career-path {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .position-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .position-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .position-card:nth-child(3) {
    animation-delay: 0.3s;
  }

  .career-path:nth-child(1) {
    animation-delay: 0.1s;
  }
  .career-path:nth-child(2) {
    animation-delay: 0.2s;
  }
  .career-path:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
