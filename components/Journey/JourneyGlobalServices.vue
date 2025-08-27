<template>
  <section class="py-60px lg:py-100px bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-3">
      <div
        class="absolute top-20% right-10% w-400px h-400px bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-transparent rounded-full blur-60px"
      ></div>
      <div
        class="absolute bottom-20% left-10% w-300px h-300px bg-gradient-to-tl from-[var(--tm-accent-gradient-to)] to-transparent rounded-full blur-50px"
      ></div>
    </div>

    <div class="max-w-1200px mx-auto px-20px relative z-10">
      <!-- 标题区域 -->
      <div class="text-center mb-50px lg:mb-80px">
        <h2 class="text-3xl lg:text-5xl font-light text-[var(--tm-txt-primary)] leading-tight">
          <span
            class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent font-semibold"
          >
            Global
          </span>
          <span class="ml-2">Services</span>
        </h2>
        <div
          class="w-80px h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] mx-auto mt-20px rounded-full"
        ></div>
        <p class="text-lg text-[var(--tm-txt-secondary)] max-w-600px mx-auto mt-20px">
          Tailored recruitment and training solutions across all industries and regions
        </p>
      </div>

      <!-- 核心服务介绍 -->
      <div class="mb-60px">
        <div
          class="bg-gradient-to-br from-[var(--tm-bg-secondary)] to-[var(--tm-bg-tertiary)] rounded-20px p-40px lg:p-50px border border-[var(--tm-bd-light)] shadow-lg"
        >
          <div class="grid lg:grid-cols-2 gap-40px items-center">
            <!-- 左侧内容 -->
            <div>
              <h3 class="text-2xl lg:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-25px">
                Our Strategic Approach
              </h3>
              <div class="space-y-20px text-base lg:text-lg leading-relaxed">
                <p class="text-[var(--tm-txt-primary)]">
                  We tailor our recruitment and advisory services for all industries, understanding
                  each region's unique employment market demands to provide the best professionals
                  for your specific needs.
                </p>
                <p class="text-[var(--tm-txt-secondary)]">
                  Our extensive database and training expertise ensure compliance with GCC
                  Nationalization Schemes while delivering comprehensive solutions from salary
                  benchmarking to successful employee onboarding.
                </p>
              </div>
            </div>

            <!-- 右侧统计数据 -->
            <div class="grid grid-cols-2 gap-25px">
              <div
                class="bg-[var(--tm-bg-primary)] rounded-15px p-25px text-center border border-[var(--tm-bd-light)] shadow-sm"
              >
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-5px">1.2M+</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">Candidate Database</div>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-15px p-25px text-center border border-[var(--tm-bd-light)] shadow-sm"
              >
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-5px">100K+</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">Corporate Clients</div>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-15px p-25px text-center border border-[var(--tm-bd-light)] shadow-sm"
              >
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-5px">50K+</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">Training Programs</div>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-15px p-25px text-center border border-[var(--tm-bd-light)] shadow-sm"
              >
                <div class="text-2xl font-bold text-[var(--tm-accent-primary)] mb-5px">99%</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 服务领域 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-30px">
        <!-- 招聘咨询 -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-20px p-35px border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
        >
          <div class="flex items-center gap-15px mb-25px">
            <div
              class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6.5"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
              Recruitment & Advisory
            </h3>
          </div>

          <ul class="space-y-12px text-sm text-[var(--tm-txt-secondary)]">
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Industry-specific talent sourcing</span>
            </li>
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Executive search and headhunting</span>
            </li>
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Market salary benchmarking</span>
            </li>
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Organizational restructuring</span>
            </li>
          </ul>
        </div>

        <!-- 培训发展 -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-20px p-35px border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
        >
          <div class="flex items-center gap-15px mb-25px">
            <div
              class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">
              Training & Development
            </h3>
          </div>

          <ul class="space-y-12px text-sm text-[var(--tm-txt-secondary)]">
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Corporate skills development</span>
            </li>
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Leadership training programs</span>
            </li>
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Professional certifications</span>
            </li>
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Career development pathways</span>
            </li>
          </ul>
        </div>

        <!-- GCC合规 -->
        <div
          class="bg-[var(--tm-bg-secondary)] rounded-20px p-35px border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
        >
          <div class="flex items-center gap-15px mb-25px">
            <div
              class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)]">GCC Compliance</h3>
          </div>

          <ul class="space-y-12px text-sm text-[var(--tm-txt-secondary)]">
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Nationalization scheme compliance</span>
            </li>
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Employment law advisory</span>
            </li>
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Visa and work permit support</span>
            </li>
            <li class="flex items-center gap-8px">
              <div class="w-1.5 h-1.5 bg-[var(--tm-accent-primary)] rounded-full"></div>
              <span>Onboarding and integration</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 全球服务组件逻辑
</script>

<style scoped>
  /* 背景模糊效果 */
  .blur-60px {
    filter: blur(60px);
  }

  .blur-50px {
    filter: blur(50px);
  }

  /* 卡片悬浮效果 */
  .group:hover {
    background: linear-gradient(135deg, var(--tm-bg-secondary) 0%, var(--tm-bg-tertiary) 100%);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .py-60px {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .lg\:py-100px {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .mb-50px {
      margin-bottom: 30px;
    }

    .gap-40px {
      gap: 25px;
    }

    .p-40px {
      padding: 25px;
    }

    .lg\:p-50px {
      padding: 25px;
    }

    .p-35px {
      padding: 25px;
    }

    .mb-60px {
      margin-bottom: 40px;
    }

    .gap-30px {
      gap: 20px;
    }

    .w-400px {
      width: 200px;
    }

    .h-400px {
      height: 200px;
    }

    .w-300px {
      width: 150px;
    }

    .h-300px {
      height: 150px;
    }
  }

  @media (max-width: 640px) {
    .text-3xl {
      font-size: 1.875rem;
    }

    .grid-cols-2 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>
