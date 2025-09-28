<template>
  <section class="py-20 bg-tm-bg-primary relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-0 right-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-br from-tm-accent-primary to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-5 relative z-1">
      <!-- 标题区域 -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 mb-6"
        >
          <svg
            class="w-8 h-8 text-[var(--tm-accent-primary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M9 12l2 2 4-4"></path>
            <path
              d="M21 12c.552 0 1-.448 1-1V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6c0 .552.448 1 1 1h18z"
            ></path>
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] mb-6">
          Healthcare Industry Overview
        </h2>
        <p
          class="text-lg md:text-xl text-[var(--tm-txt-secondary)] max-w-3xl mx-auto leading-relaxed"
        >
          The healthcare industry in 2025 stands at the intersection of demographic shifts,
          technological innovation, and global health challenges, representing over 10% of global
          GDP and continuing to attract investment from both governments and private capital.
        </p>
      </div>

      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <!-- 左侧内容 -->
        <div class="space-y-8">
          <div
            class="bg-[var(--tm-bg-secondary)] p-8 rounded-6 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)]"
          >
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Industry at a Glance
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Aging populations, rising chronic diseases, and post-pandemic resilience are fueling
              demand for advanced healthcare solutions. Digital health, biotechnology, and
              personalized medicine are reshaping the delivery of care across all sectors.
            </p>

            <!-- 核心统计数据 -->
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div class="text-2xl font-700 text-[var(--tm-accent-primary)] mb-1">>10%</div>
                <div class="text-sm text-[var(--tm-txt-light)]">Global GDP Share</div>
              </div>
              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div class="text-2xl font-700 text-[var(--tm-accent-primary)] mb-1">$1.8T</div>
                <div class="text-sm text-[var(--tm-txt-light)]">Pharma Market Size</div>
              </div>
              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div class="text-2xl font-700 text-[var(--tm-accent-primary)] mb-1">$650B</div>
                <div class="text-sm text-[var(--tm-txt-light)]">Medical Devices</div>
              </div>
              <div class="text-center p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <div class="text-2xl font-700 text-[var(--tm-accent-primary)] mb-1">$1.5T</div>
                <div class="text-sm text-[var(--tm-txt-light)]">Biotech Projection</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="relative">
          <div class="relative rounded-6 overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
              alt="Healthcare innovation and technology"
              class="w-full h-96 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <!-- 浮动统计徽章 -->
          <div
            class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-4 shadow-lg border border-white/20"
          >
            <div class="text-center">
              <div class="text-xl font-bold text-[var(--tm-accent-primary)]">2025 Growth</div>
              <div class="text-sm text-[var(--tm-txt-secondary)]">Digital Health Expansion</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 关键趋势网格 -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-tm-txt-primary mb-4">
            Key Trends Driving the Industry
          </h3>
          <p class="text-tm-txt-secondary max-w-160 mx-auto">
            Four major trends are reshaping healthcare delivery and creating new opportunities for
            innovation and growth across the sector.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 数字健康扩展 -->
          <div
            class="text-center group p-6 bg-tm-bg-secondary rounded-6 border border-tm-bd-light hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-tm-bg-accentLight rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-tm-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            <h4 class="text-lg font-semibold text-tm-txt-primary mb-3">Digital Health Expansion</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Telemedicine, AI diagnostics, and wearable devices are becoming standard in patient
              care delivery
            </p>
          </div>

          <!-- 生物技术创新 -->
          <div
            class="text-center group p-6 bg-tm-bg-secondary rounded-6 border border-tm-bd-light hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-tm-bg-accentLight rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-tm-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-tm-txt-primary mb-3">Biotech Innovation</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Breakthroughs in gene therapies, mRNA technologies, and oncology treatments are
              accelerating rapidly
            </p>
          </div>

          <!-- 新兴市场基础设施 -->
          <div
            class="text-center group p-6 bg-tm-bg-secondary rounded-6 border border-tm-bd-light hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-tm-bg-accentLight rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-tm-accent-primary"
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
                <path d="M2 12h20"></path>
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-tm-txt-primary mb-3">Emerging Markets Growth</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Asia, Middle East, and Africa are expanding hospital networks and investing in medical
              technology
            </p>
          </div>

          <!-- 预防医疗 -->
          <div
            class="text-center group p-6 bg-tm-bg-secondary rounded-6 border border-tm-bd-light hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-tm-bg-accentLight rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-tm-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-tm-txt-primary mb-3">Preventive Care Focus</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Governments and insurers emphasize early detection and wellness programs to control
              costs
            </p>
          </div>
        </div>
      </div>

      <!-- 挑战与机遇区域 -->
      <div
        class="bg-tm-bg-secondary rounded-8 p-8 md:p-12 border border-tm-bd-light shadow-tm-shadow-card"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 挑战 -->
          <div>
            <h3 class="text-2xl font-semibold text-tm-txt-primary mb-6 flex items-center gap-3">
              <div
                class="w-8 h-8 bg-red-500/10 text-red-500 rounded-2 flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  ></path>
                </svg>
              </div>
              Key Challenges
            </h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Rising Costs</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Healthcare expenditure is outpacing GDP growth in most countries globally
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Talent Shortages</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Critical shortfalls in skilled doctors, nurses, and biotech specialists
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Regulatory Barriers</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Complex approval processes and data privacy laws create innovation obstacles
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 机遇 -->
          <div>
            <h3 class="text-2xl font-semibold text-tm-txt-primary mb-6 flex items-center gap-3">
              <div
                class="w-8 h-8 bg-green-500/10 text-green-500 rounded-2 flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              Growth Opportunities
            </h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">AI in Healthcare</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Artificial intelligence transforming diagnostics and personalized treatment
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Bioengineering</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Advanced bioengineering and clinical research driving innovation
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <h4 class="font-semibold text-tm-txt-primary mb-1">Medical Hubs</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Singapore, UAE, and China competing for global healthcare talent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style scoped>
  /* 深色模式适配 */
  .dark .healthcare-overview-section {
    background: var(--tm-bg-primary);
  }
</style>
