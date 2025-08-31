<template>
  <section class="relative overflow-hidden bg-[var(--tm-bg-primary)] py-20 md:py-24 transition-all">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
        :style="{ backgroundColor: 'var(--tm-accent-primary)', opacity: 0.3 }"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
        :style="{ backgroundColor: 'var(--tm-accent-gradient-to)', opacity: 0.3 }"
      ></div>
    </div>

    <div class="container relative z-10 max-w-7xl mx-auto px-5">
      <!-- 标题区域 -->
      <div class="text-center mb-16 lg:mb-20">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-light mb-5 text-[var(--tm-txt-primary)]">
          Our Core Expertise
        </h2>
        <p
          class="text-lg md:text-xl leading-relaxed text-[var(--tm-txt-secondary)] max-w-3xl mx-auto"
        >
          Comprehensive service portfolio designed to address every aspect of your human capital and
          business development needs
        </p>
      </div>

      <!-- 服务概览卡片 - 2列布局 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- 人才解决方案卡片 -->
        <div
          class="group relative bg-[var(--tm-bg-card)] rounded-2xl p-8 lg:p-10 border border-[var(--tm-bd-card)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
          ></div>

          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-badge)] rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[var(--tm-accent-feature-from)] group-hover:to-[var(--tm-accent-feature-to)] transition-all duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Talent Solutions</h3>
          </div>

          <p class="text-[var(--tm-txt-secondary)] mb-6 leading-relaxed">
            With deep industry insights and professional expertise, we provide customized talent
            strategy services for enterprises, helping organizations achieve sustainable
            development.
          </p>

          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-medium cursor-pointer group/link"
          >
            <span>Explore Services</span>
            <svg
              class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <!-- 全球业务支持卡片 -->
        <div
          class="group relative bg-[var(--tm-bg-card)] rounded-2xl p-8 lg:p-10 border border-[var(--tm-bd-card)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
          ></div>

          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-badge)] rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[var(--tm-accent-feature-from)] group-hover:to-[var(--tm-accent-feature-to)] transition-all duration-300"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Global Business</h3>
          </div>

          <p class="text-[var(--tm-txt-secondary)] mb-6 leading-relaxed">
            Providing comprehensive support for enterprise internationalization, including
            cross-border compliance, cultural integration, and localization strategies.
          </p>

          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-medium cursor-pointer group/link"
          >
            <span>Learn More</span>
            <svg
              class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- 详细服务网格 - 原有的6个服务 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <!-- Executive Search -->
        <div
          class="group bg-[var(--tm-bg-card)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            <!-- 使用计算属性动态切换布局 -->
            <div :class="serviceCardClass">
              <div :class="iconWrapperClass">
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                  ></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Executive Search</h3>
            </div>
            <p
              class="text-sm text-[var(--tm-txt-secondary)] mb-4 leading-relaxed"
              :class="textAlignClass"
            >
              Premium headhunting services for C-level and senior leadership positions across
              industries
            </p>
            <ul class="text-sm text-[var(--tm-txt-secondary)] space-y-2 w-full md:text-left">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                C-Suite Recruitment
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Board Directors
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Senior Management
              </li>
            </ul>
          </div>
        </div>

        <!-- HR Outsourcing -->
        <div
          class="group bg-[var(--tm-bg-card)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            <div :class="serviceCardClass">
              <div :class="iconWrapperClass">
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">HR Outsourcing</h3>
            </div>
            <p
              class="text-sm text-[var(--tm-txt-secondary)] mb-4 leading-relaxed"
              :class="textAlignClass"
            >
              Comprehensive human resources management solutions to streamline operations
            </p>
            <ul class="text-sm text-[var(--tm-txt-secondary)] space-y-2 w-full md:text-left">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Payroll Management
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Benefits Administration
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Compliance Support
              </li>
            </ul>
          </div>
        </div>

        <!-- Flexible Staffing -->
        <div
          class="group bg-[var(--tm-bg-card)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            <div :class="serviceCardClass">
              <div :class="iconWrapperClass">
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Flexible Staffing</h3>
            </div>
            <p
              class="text-sm text-[var(--tm-txt-secondary)] mb-4 leading-relaxed"
              :class="textAlignClass"
            >
              Rapidly respond to changing business needs with professional talent solutions
            </p>
            <ul class="text-sm text-[var(--tm-txt-secondary)] space-y-2 w-full md:text-left">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Rapid Deployment
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Skills Matching
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Cost Optimization
              </li>
            </ul>
          </div>
        </div>

        <!-- Immigration Services -->
        <div
          class="group bg-[var(--tm-bg-card)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            <div :class="serviceCardClass">
              <div :class="iconWrapperClass">
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                Immigration Services
              </h3>
            </div>
            <p
              class="text-sm text-[var(--tm-txt-secondary)] mb-4 leading-relaxed"
              :class="textAlignClass"
            >
              Expert immigration consultation and processing for individuals and corporations
            </p>
            <ul class="text-sm text-[var(--tm-txt-secondary)] space-y-2 w-full md:text-left">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Work Permits
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Residency Applications
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Corporate Immigration
              </li>
            </ul>
          </div>
        </div>

        <!-- Study Abroad -->
        <div
          class="group bg-[var(--tm-bg-card)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            <div :class="serviceCardClass">
              <div :class="iconWrapperClass">
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">Study Abroad</h3>
            </div>
            <p
              class="text-sm text-[var(--tm-txt-secondary)] mb-4 leading-relaxed"
              :class="textAlignClass"
            >
              Complete educational consulting for international study opportunities
            </p>
            <ul class="text-sm text-[var(--tm-txt-secondary)] space-y-2 w-full md:text-left">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                University Applications
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Scholarship Guidance
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Student Visas
              </li>
            </ul>
          </div>
        </div>

        <!-- Organizational Performance -->
        <div
          class="group bg-[var(--tm-bg-card)] rounded-xl p-6 border border-[var(--tm-bd-card)] hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            <div :class="serviceCardClass">
              <div :class="iconWrapperClass">
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
                Organizational Performance
              </h3>
            </div>
            <p
              class="text-sm text-[var(--tm-txt-secondary)] mb-4 leading-relaxed"
              :class="textAlignClass"
            >
              Through scientific diagnosis and change management, we help build high-performance
              teams
            </p>
            <ul class="text-sm text-[var(--tm-txt-secondary)] space-y-2 w-full md:text-left">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Organizational Diagnosis
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Change Management
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--tm-accent-primary)]"></span>
                Team Development
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Strategic Consulting - 特色服务卡片 -->
      <div class="mt-12 max-w-4xl mx-auto">
        <div
          class="group relative rounded-2xl p-8 lg:p-12 text-white overflow-hidden"
          :style="{
            background: `linear-gradient(135deg, var(--tm-accent-hero-from) 0%, var(--tm-accent-hero-to) 100%)`,
          }"
        >
          <div
            class="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-10 group-hover:opacity-20 blur-3xl bg-[var(--tm-bg-whiteAlpha10)] transition-opacity duration-700"
          ></div>

          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-16 h-16 bg-[var(--tm-bg-whiteAlpha20)] backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl lg:text-3xl font-bold text-white">Strategic Consulting</h3>
              </div>

              <p class="mb-6 text-lg leading-relaxed text-[var(--tm-txt-whiteAlpha90)]">
                Based on data-driven insights, we develop forward-looking talent strategies for
                enterprises, building sustainable competitive advantages.
              </p>

              <button
                class="inline-flex items-center px-6 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-[var(--tm-bg-hover)] transition-all group/btn"
              >
                Start Consultation
                <svg
                  class="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-[var(--tm-bg-whiteAlpha10)] backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <span class="font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-1 text-white">Talent Planning</h4>
                  <p class="text-sm text-[var(--tm-txt-whiteAlpha70)]">
                    Tailored workforce strategies for your growth
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-[var(--tm-bg-whiteAlpha10)] backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <span class="font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-1 text-white">Succession Planning</h4>
                  <p class="text-sm text-[var(--tm-txt-whiteAlpha70)]">
                    Ensure leadership continuity and stability
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-[var(--tm-bg-whiteAlpha10)] backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <span class="font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-1 text-white">Capability Building</h4>
                  <p class="text-sm text-[var(--tm-txt-whiteAlpha70)]">
                    Develop core competencies for the future
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-[var(--tm-bg-whiteAlpha10)] backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <span class="font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-1 text-white">Digital Transformation</h4>
                  <p class="text-sm text-[var(--tm-txt-whiteAlpha70)]">
                    Leverage technology for HR innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 综合解决方案 CTA -->
      <div class="mt-16 text-center">
        <div
          class="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full cursor-pointer hover:shadow-[var(--tm-shadow-accent)] hover:scale-105 transition-all duration-300"
          :style="{
            background: `linear-gradient(to right, var(--tm-accent-gradient-from), var(--tm-accent-gradient-to))`,
          }"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            ></path>
          </svg>
          <span class="text-lg font-semibold">Explore Integrated Solutions</span>
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useDevice } from '~/composables/useDevice'

  const device = useDevice()

  // 根据设备类型动态调整样式
  const serviceCardClass = computed(() => {
    return device.isMobile
      ? 'flex items-center gap-3 mb-4'
      : 'flex flex-col items-center text-center gap-0'
  })

  const iconWrapperClass = computed(() => {
    return device.isMobile
      ? 'w-14 h-14 bg-[var(--tm-bg-badge)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0'
      : 'w-14 h-14 bg-[var(--tm-bg-badge)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'
  })

  const textAlignClass = computed(() => {
    return device.isMobile ? '' : 'text-center'
  })
</script>

<style scoped>
  /* 保留必要的动画关键帧 */
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  /* 深色模式调整 */
  .dark section {
    background: var(--tm-bg-secondary);
  }

  .dark .bg-\[var\(--tm-bg-card\)\] {
    background: var(--tm-bg-primary);
  }
</style>
