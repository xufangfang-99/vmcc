<template>
  <section
    class="relative h-screen min-h-[600px] py-15 md:py-20 overflow-hidden bg-[var(--tm-bg-primary)] flex items-center"
  >
    <!-- 背景图片 -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img
        src="/images/comm/banner1.webp"
        alt="背景图片"
        class="absolute top-1/2 left-1/2 w-[110%] h-[110%] object-cover -translate-x-1/2 -translate-y-1/2 animate-slow-zoom"
      />
      <!-- 遮罩层 -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-white/92 via-white/85 to-white/92 dark:from-[#0a0e27]/95 dark:via-[#0a0e27]/88 dark:to-[#0a0e27]/95"
      ></div>
    </div>

    <!-- 背景装饰 -->
    <div class="absolute inset-0 pointer-events-none z-1">
      <div
        class="absolute inset-0"
        style="
          background: radial-gradient(
            circle at 30% 50%,
            rgba(var(--tm-pri-0-rgb), 0.08) 0%,
            transparent 50%
          );
        "
      ></div>
      <div
        class="absolute inset-0"
        style="
          background-image:
            radial-gradient(circle at 70% 30%, rgba(var(--tm-pri-1-rgb), 0.06) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(var(--tm-pri-0-rgb), 0.06) 0%, transparent 40%);
        "
      ></div>
    </div>

    <div class="max-w-[1200px] mx-auto px-5 relative z-2 h-full flex items-center">
      <div class="text-center w-full">
        <!-- 顶部标签 -->
        <div
          class="inline-flex items-center gap-2 px-5 py-2 mb-5 rounded-full backdrop-blur-[20px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          :class="[
            'bg-[rgba(var(--tm-bg-secondary-rgb),0.8)] border border-[var(--tm-bd-light)]',
            'dark:bg-white/8 dark:border-white/12 dark:hover:bg-white/12 dark:hover:border-white/20',
          ]"
        >
          <span class="text-base">🌍</span>
          <span class="text-sm font-medium text-[var(--tm-txt-secondary)] dark:text-white/90">
            Global Talent Network Covering 100+ Cities
          </span>
        </div>

        <!-- 主标题 -->
        <h1
          class="text-5xl font-light leading-tight text-[var(--tm-txt-primary)] dark:text-white mb-4 tracking-tight"
        >
          Unlock Your
          <span
            class="font-semibold bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent inline-block"
          >
            Talent Strategy
          </span>
          Journey
        </h1>

        <!-- 副标题 -->
        <p
          class="text-lg text-[var(--tm-txt-secondary)] dark:text-white/70 max-w-[600px] mx-auto mb-10 leading-relaxed"
        >
          Connect with industry-leading talent consultants to create customized solutions for your
          business
        </p>

        <!-- 特点网格 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto mb-10"
        >
          <div class="feature-card">
            <div class="feature-header">
              <div
                class="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-[rgba(var(--tm-pri-0-rgb),0.1)] dark:bg-[rgba(var(--tm-pri-0-rgb),0.15)]"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-pri-0)]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2L2 7v10c0 5.5 3.84 10.74 9 12 5.16-1.26 9-6.5 9-12V7l-10-5z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3
                class="text-base font-semibold text-[var(--tm-txt-primary)] dark:text-white mb-1.5"
              >
                100% Confidential
              </h3>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] dark:text-white/60 leading-relaxed">
              Multi-layer encryption protects your business secrets
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-header">
              <div
                class="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-[rgba(var(--tm-pri-0-rgb),0.1)] dark:bg-[rgba(var(--tm-pri-0-rgb),0.15)]"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-pri-0)]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  ></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3
                class="text-base font-semibold text-[var(--tm-txt-primary)] dark:text-white mb-1.5"
              >
                Fast Response
              </h3>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] dark:text-white/60 leading-relaxed">
              Expert team contact within 24 hours
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-header">
              <div
                class="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-[rgba(var(--tm-pri-0-rgb),0.1)] dark:bg-[rgba(var(--tm-pri-0-rgb),0.15)]"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-pri-0)]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                  ></circle>
                </svg>
              </div>
              <h3
                class="text-base font-semibold text-[var(--tm-txt-primary)] dark:text-white mb-1.5"
              >
                Dedicated Advisor
              </h3>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] dark:text-white/60 leading-relaxed">
              1-on-1 personalized service experience
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-header">
              <div
                class="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-[rgba(var(--tm-pri-0-rgb),0.1)] dark:bg-[rgba(var(--tm-pri-0-rgb),0.15)]"
              >
                <svg
                  class="w-6 h-6 text-[var(--tm-pri-0)]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3
                class="text-base font-semibold text-[var(--tm-txt-primary)] dark:text-white mb-1.5"
              >
                Success Guarantee
              </h3>
            </div>
            <p class="text-sm text-[var(--tm-txt-secondary)] dark:text-white/60 leading-relaxed">
              92% placement success rate, 6-month warranty
            </p>
          </div>
        </div>

        <!-- 统计数据 -->
        <div class="mb-8">
          <div
            class="inline-flex items-center gap-12 px-12 py-8 rounded-[20px] backdrop-blur-[20px] relative overflow-hidden"
            :class="[
              'bg-gradient-to-br from-[rgba(var(--tm-bg-secondary-rgb),0.5)] to-[rgba(var(--tm-bg-secondary-rgb),0.8)]',
              'border border-[var(--tm-bd-light)]',
              'dark:from-white/2 dark:to-white/5 dark:border-white/8',
            ]"
          >
            <!-- 背景动画光效 -->
            <div
              class="absolute inset-0 opacity-50 animate-rotate"
              style="
                background: conic-gradient(
                  from 0deg at 50% 50%,
                  transparent 0deg,
                  rgba(var(--tm-pri-0-rgb), 0.1) 60deg,
                  transparent 120deg,
                  rgba(var(--tm-pri-1-rgb), 0.1) 180deg,
                  transparent 240deg,
                  rgba(var(--tm-pri-0-rgb), 0.1) 300deg,
                  transparent 360deg
                );
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
              "
            ></div>

            <div class="text-center relative z-1">
              <div class="flex items-baseline justify-center gap-0.5 mb-1.5">
                <span
                  class="text-3xl font-bold bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent"
                >
                  15,000
                </span>
                <span class="text-2xl font-semibold text-[var(--tm-pri-0)] opacity-80">+</span>
              </div>
              <div class="text-sm font-medium text-[var(--tm-txt-secondary)] dark:text-white/70">
                Success Stories
              </div>
            </div>

            <div
              class="w-px h-10 bg-gradient-to-b from-transparent via-[var(--tm-bd-light)] to-transparent dark:via-white/20"
            ></div>

            <div class="text-center relative z-1">
              <div class="flex items-baseline justify-center gap-0.5 mb-1.5">
                <span
                  class="text-3xl font-bold bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent"
                >
                  500
                </span>
                <span class="text-2xl font-semibold text-[var(--tm-pri-0)] opacity-80">+</span>
              </div>
              <div class="text-sm font-medium text-[var(--tm-txt-secondary)] dark:text-white/70">
                Enterprise Clients
              </div>
            </div>

            <div
              class="w-px h-10 bg-gradient-to-b from-transparent via-[var(--tm-bd-light)] to-transparent dark:via-white/20"
            ></div>

            <div class="text-center relative z-1">
              <div class="flex items-baseline justify-center gap-0.5 mb-1.5">
                <span
                  class="text-3xl font-bold bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent"
                >
                  50
                </span>
                <span class="text-2xl font-semibold text-[var(--tm-pri-0)] opacity-80">+</span>
              </div>
              <div class="text-sm font-medium text-[var(--tm-txt-secondary)] dark:text-white/70">
                Industries Covered
              </div>
            </div>
          </div>
        </div>

        <!-- 滚动提示 -->
        <div
          class="inline-flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)] dark:text-white/60 cursor-pointer transition-all hover:translate-y-0.5 dark:hover:text-white/90"
          @click="scrollToForm"
        >
          <span>Fill out the form to start consultation</span>
          <svg
            class="w-5 h-5 animate-bounce"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 滚动到表单
  const scrollToForm = () => {
    const formElement = document.querySelector('.consultation-section')
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
</script>

<style scoped>
  /* 特性卡片样式 */
  .feature-card {
    @apply relative p-8 text-center
    rounded-3xl backdrop-blur-[20px]
    transition-all duration-300 overflow-hidden
    hover:-translate-y-1 hover:shadow-xl;
    /* 浅色模式 */
    background: rgba(var(--tm-bg-secondary-rgb), 0.8);
    border: 1px solid var(--tm-bd-light);
  }

  /* 深色模式 - 半透明深色背景 */
  .dark .feature-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .dark .feature-card:hover {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  /* 特性卡片悬停效果 */
  .feature-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(var(--tm-pri-0-rgb), 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .feature-card:hover::before {
    opacity: 1;
  }

  /* 动画 */
  @keyframes slow-zoom {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .animate-slow-zoom {
    animation: slow-zoom 30s ease-in-out infinite alternate;
  }

  .animate-rotate {
    animation: rotate 20s linear infinite;
  }

  /* 响应式 - 手机端 */
  @media (max-width: 768px) {
    .consultation-hero {
      @apply min-h-0 h-auto py-15;
    }

    .animate-slow-zoom {
      animation: none;
      transform: translate(-50%, -50%) scale(1.05);
    }

    .feature-card {
      @apply p-4 text-left;
    }

    .feature-header {
      @apply flex items-center gap-3 mb-2;
    }

    .feature-header > div:first-child {
      @apply w-9 h-9 m-0 flex-shrink-0;
    }

    .feature-header > div:first-child svg {
      @apply w-4.5 h-4.5;
    }

    .feature-header h3 {
      @apply mb-0;
    }
  }
</style>
