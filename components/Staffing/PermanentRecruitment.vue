<template>
  <section
    class="permanent-recruitment-section py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden"
  >
    <!-- 背景装饰 -->
    <div class="absolute top-1/2 left-0 w-80 h-80 opacity-10 transform -translate-y-1/2">
      <div
        class="w-full h-full bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-5 relative z-1">
      <!-- 标题区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-25">
        <!-- 左侧内容 -->
        <div class="order-2 lg:order-1">
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
              <path d="M9 14l2 2 4-4"></path>
            </svg>
          </div>

          <h2 class="text-3xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Permanent Recruitment
          </h2>

          <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 leading-relaxed">
            Providing recruitment and executive search solutions is one of our major
            specializations. We offer quality and value by shortlisting professionals with
            exceptional abilities that not only fit the client's business needs but are mindful of
            the social and cultural environment of the UAE and GCC region.
          </p>

          <!-- 核心特点 -->
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
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                  ></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Executive Search Excellence
                </h3>
                <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed">
                  Specialized in identifying and recruiting C-level executives and senior management
                  positions across all industries
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
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  ></circle>
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Cultural Intelligence
                </h3>
                <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed">
                  Deep understanding of regional business culture ensuring perfect candidate-company
                  fit
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
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Quality Assurance
                </h3>
                <p class="text-[var(--tm-txt-secondary)] text-sm leading-relaxed">
                  Rigorous screening process ensuring only the most qualified professionals reach
                  your shortlist
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="order-1 lg:order-2 relative">
          <div class="relative rounded-6 overflow-hidden shadow-xl">
            <OptImage
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
              alt="Professional team meeting"
              class="w-full h-120 lg:h-150 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-br from-[var(--tm-accent-primary)]/20 to-transparent"
            ></div>
          </div>

          <!-- 成功率徽章 -->
          <div
            class="absolute -bottom-6 -left-6 rounded-6 p-6 shadow-2xl border"
            :style="{
              backgroundColor: 'var(--tm-bg-accent-light)',
              border: '1px solid var(--tm-bd-card)',
            }"
          >
            <div class="text-center">
              <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-1">92%</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">Client Satisfaction</div>
              <div class="text-xs text-[var(--tm-txt-secondary)] opacity-75 mt-1">
                Based on 500+ placements
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 服务流程 -->
      <div class="bg-[var(--tm-bg-secondary)] rounded-8 p-8 md:p-12 mb-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Our Recruitment Process
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            A proven methodology that ensures we find the perfect match for your organization's
            needs and culture.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 步骤 1 -->
          <div class="text-center relative">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-4 flex items-center justify-center text-white font-bold text-xl shadow-lg"
            >
              01
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Requirements Analysis
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Deep dive into your organizational needs, company culture, and specific role
              requirements
            </p>
            <!-- 连接线 -->
            <div
              class="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-[var(--tm-accent-primary)] to-transparent transform -translate-x-4"
            ></div>
          </div>

          <!-- 步骤 2 -->
          <div class="text-center relative">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-4 flex items-center justify-center text-white font-bold text-xl shadow-lg"
            >
              02
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Talent Sourcing</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Leverage our extensive network and database to identify qualified candidates globally
            </p>
            <!-- 连接线 -->
            <div
              class="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-[var(--tm-accent-primary)] to-transparent transform -translate-x-4"
            ></div>
          </div>

          <!-- 步骤 3 -->
          <div class="text-center relative">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-4 flex items-center justify-center text-white font-bold text-xl shadow-lg"
            >
              03
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Screening & Assessment
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Comprehensive evaluation including skills assessment and cultural fit analysis
            </p>
            <!-- 连接线 -->
            <div
              class="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-[var(--tm-accent-primary)] to-transparent transform -translate-x-4"
            ></div>
          </div>

          <!-- 步骤 4 -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-4 flex items-center justify-center text-white font-bold text-xl shadow-lg"
            >
              04
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Placement & Follow-up
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Facilitate interviews, negotiate offers, and provide ongoing support for successful
              integration
            </p>
          </div>
        </div>
      </div>

      <!-- 专业领域 -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Industry Expertise
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            Specialized recruitment solutions across key industries in the UAE and GCC region.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <!-- 行业卡片 -->
          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
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
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Banking & Finance</h4>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Technology</h4>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </div>
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Healthcare</h4>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
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
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Energy & Oil</h4>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
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
            <h4 class="text-sm font-semibold text-[var(--tm-txt-primary)]">Construction</h4>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-4 text-center border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
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
        </div>
      </div>

      <!-- 统计数据 -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-8 p-8 md:p-12 text-white"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">3000+</div>
            <div class="text-sm opacity-90">Permanent Placements</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">150+</div>
            <div class="text-sm opacity-90">Fortune 500 Clients</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">45</div>
            <div class="text-sm opacity-90">Days Avg Fill Time</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">96%</div>
            <div class="text-sm opacity-90">Retention Rate</div>
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
  .dark .permanent-recruitment-section {
    background: var(--tm-bg-secondary);
  }
</style>
