<template>
  <section class="emiratisation-section py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-0 right-0 w-100 h-100 opacity-5">
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
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        </div>
        <h2 class="text-3xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Emiratisation
        </h2>
        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed"
        >
          Leading UAE nationalization initiatives with our extensive local network and proven
          expertise in connecting Emirati talent with career opportunities.
        </p>
      </div>

      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
        <!-- 左侧内容 -->
        <div class="space-y-8">
          <div
            class="bg-[var(--tm-bg-primary)] p-8 rounded-6 border border-[var(--tm-bd-light)] shadow-lg"
          >
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Our Emiratisation Expertise
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Our extensive network within the local business and higher education community
              combined with our reputation and recruitment expertise makes us the leader in
              providing the best local talent to fulfill your national hiring strategy and comply
              with the emiratisation program.
            </p>

            <!-- 核心优势列表 -->
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-[var(--tm-accent-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                    Extensive Local Network
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Deep connections with UAE universities, government institutions, and local
                    business community
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-[var(--tm-accent-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                    Compliance Expertise
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Full understanding of UAE labor laws and emiratisation requirements across all
                    sectors
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-6 h-6 bg-[var(--tm-accent-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-1">
                    Proven Track Record
                  </h4>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">
                    Successfully placed thousands of Emiratis across various industries and
                    seniority levels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="relative">
          <div class="relative rounded-6 overflow-hidden shadow-xl">
            <OptImage
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
              alt="UAE professionals in modern office"
              class="w-full h-120 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <!-- 统计徽章 -->
          <div
            class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-4 shadow-lg border border-white/20"
          >
            <div class="flex items-center gap-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">85%</div>
                <div class="text-xs text-[var(--tm-txt-secondary)]">Success Rate</div>
              </div>
              <div class="w-px h-10 bg-gray-200"></div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)]">2000+</div>
                <div class="text-xs text-[var(--tm-txt-secondary)]">Emiratis Placed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 服务范围 -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-8 md:p-12 border border-[var(--tm-bd-light)] shadow-lg"
      >
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Comprehensive Emiratisation Services
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            End-to-end solutions to help your organization achieve and exceed emiratisation targets
            while building a sustainable local workforce.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 人才招聘 -->
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
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                ></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">Talent Sourcing</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Identify and recruit qualified Emirati candidates from our extensive database and
              partner network
            </p>
          </div>

          <!-- 技能发展 -->
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
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Skills Development
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Training and development programs to bridge skill gaps and prepare candidates for
              specific roles
            </p>
          </div>

          <!-- 合规咨询 -->
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
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Compliance Consulting
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Strategic guidance on emiratisation policies, quotas, and reporting requirements
            </p>
          </div>

          <!-- 继任规划 -->
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
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Succession Planning
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Long-term workforce planning to ensure sustainable emiratisation and career
              progression
            </p>
          </div>

          <!-- 导师计划 -->
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                ></circle>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Mentorship Programs
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Structured mentoring and coaching to support Emirati employees' professional growth
            </p>
          </div>

          <!-- 绩效跟踪 -->
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
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
              Performance Tracking
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed">
              Monitoring and reporting tools to track emiratisation progress and ROI metrics
            </p>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div class="mt-20 text-center">
        <div
          class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-6 p-8 md:p-12 text-white"
        >
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Accelerate Your Emiratisation Journey?
          </h3>
          <p class="text-lg opacity-90 mb-8 max-w-150 mx-auto">
            Let our experts help you build a comprehensive emiratisation strategy that drives
            compliance and business success.
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              <span>Get Started Today</span>
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
  .dark .emiratisation-section {
    background: var(--tm-bg-primary);
  }
</style>
