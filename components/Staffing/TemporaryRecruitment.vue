<template>
  <section
    class="temporary-recruitment-section py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden"
  >
    <!-- 背景装饰 -->
    <div class="absolute bottom-0 right-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-tl from-[var(--tm-accent-gradient-to)] to-transparent rounded-full blur-3xl"
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
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-3xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Temporary Recruitment
        </h2>
        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          With our extensive knowledge, market data and candidate network, we can support you with
          temporarily filling a gap requirement, staff going for their annual leaves or maternity,
          or even facilitating additional staff required for major projects.
        </p>
      </div>

      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-25">
        <!-- 左侧图片 -->
        <div class="relative">
          <div class="relative rounded-6 overflow-hidden shadow-xl">
            <OptImage
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Flexible workforce solutions"
              class="w-full h-120 lg:h-150 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-tr from-[var(--tm-accent-primary)]/20 to-transparent"
            ></div>
          </div>

          <!-- 灵活性徽章 -->
          <div
            class="absolute -top-6 -right-6 bg-white rounded-6 p-6 shadow-2xl border border-gray-100"
          >
            <div class="text-center">
              <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-1">24/7</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">Support Available</div>
              <div class="text-xs text-[var(--tm-txt-secondary)] opacity-75 mt-1">
                Flexible solutions
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
              Flexible Staffing Solutions
            </h3>

            <!-- 服务类型列表 -->
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
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Gap Coverage</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                    Immediate staffing solutions to fill unexpected vacancies and maintain business
                    continuity
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
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Leave Coverage</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                    Qualified professionals to cover annual leave, maternity leave, and extended
                    absences
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
                    Project-Based Staffing
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                    Additional skilled resources for major projects with defined timelines and
                    deliverables
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
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Seasonal Support</h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
                    Flexible workforce scaling for peak business periods and seasonal demands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 核心优势 -->
      <div class="bg-[var(--tm-bg-primary)] rounded-8 p-8 md:p-12 mb-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Why Choose Our Temporary Solutions
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            Leverage our extensive network and proven processes to access qualified temporary
            professionals quickly and efficiently.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 快速响应 -->
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
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Rapid Response</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Quick deployment within 24-48 hours for urgent staffing requirements
            </p>
          </div>

          <!-- 质量保证 -->
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
                <path d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Pre-Screened Talent
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              All candidates undergo thorough screening and skills assessment before placement
            </p>
          </div>

          <!-- 灵活期限 -->
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
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Flexible Terms</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Contract periods from days to months, with extension options based on needs
            </p>
          </div>

          <!-- 成本效益 -->
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
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Cost Effective</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Reduce overhead costs while maintaining productivity and operational efficiency
            </p>
          </div>

          <!-- 专业匹配 -->
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
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Skills Matching</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Precise matching of candidate skills with your specific requirements and culture
            </p>
          </div>

          <!-- 持续支持 -->
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
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Ongoing Support</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Continuous monitoring and support throughout the assignment period
            </p>
          </div>
        </div>
      </div>

      <!-- 适用场景 -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Common Temporary Staffing Scenarios
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            Our flexible solutions adapt to various business situations and workforce challenges.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 紧急需求 -->
          <div class="bg-[var(--tm-bg-secondary)] p-8 rounded-6 border border-[var(--tm-bd-light)]">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-red-100 rounded-3 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
                  Emergency Coverage
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                  Sudden employee departure, unexpected illness, or urgent business requirements
                </p>
                <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
                  ⚡ 24-48 hour deployment
                </div>
              </div>
            </div>
          </div>

          <!-- 计划性需求 -->
          <div class="bg-[var(--tm-bg-secondary)] p-8 rounded-6 border border-[var(--tm-bd-light)]">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-blue-100 rounded-3 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                  ></rect>
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                  ></line>
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                  ></line>
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                  ></line>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
                  Planned Absences
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                  Maternity leave, sabbaticals, training programs, or planned extended vacation
                </p>
                <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
                  📅 Advance planning available
                </div>
              </div>
            </div>
          </div>

          <!-- 项目需求 -->
          <div class="bg-[var(--tm-bg-secondary)] p-8 rounded-6 border border-[var(--tm-bd-light)]">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-green-100 rounded-3 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-6 h-6 text-green-600"
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
              <div>
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
                  Special Projects
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                  Major initiatives, system implementations, or specialized expertise requirements
                </p>
                <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
                  🚀 Project-based terms
                </div>
              </div>
            </div>
          </div>

          <!-- 季节性需求 -->
          <div class="bg-[var(--tm-bg-secondary)] p-8 rounded-6 border border-[var(--tm-bd-light)]">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-orange-100 rounded-3 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M3 3v18h18V3M8 12h8M12 8v8"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
                  Seasonal Demands
                </h4>
                <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                  Holiday periods, peak business seasons, or cyclical workload increases
                </p>
                <div class="text-xs text-[var(--tm-accent-primary)] font-semibold">
                  📈 Scalable solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div class="text-center">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-6 p-8 md:p-12 text-white"
        >
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">
            Need Temporary Staffing Solutions?
          </h3>
          <p class="text-lg opacity-90 mb-8 max-w-150 mx-auto">
            Get qualified professionals deployed quickly with our extensive candidate network and
            proven processes.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              <span>Request Staff Now</span>
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
              class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              <span>Discuss Requirements</span>
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
  .dark .temporary-recruitment-section {
    background: var(--tm-bg-primary);
  }
</style>
