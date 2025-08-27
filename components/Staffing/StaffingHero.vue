<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- 背景图片 -->
    <div class="absolute inset-0 z-0">
      <OptImage
        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80"
        alt="专业招聘团队"
        class="w-full h-full object-cover"
        :auto-dark-mode="true"
      />
      <!-- 遮罩层 -->
      <div class="absolute inset-0 bg-black/60"></div>
      <!-- 装饰图案 -->
      <div class="absolute inset-0 bg-gradient-radial-pattern opacity-60"></div>
    </div>

    <div class="relative z-1 max-w-1200px mx-auto px-5 w-full">
      <div class="text-center text-white">
        <!-- Logo区域 -->
        <div class="inline-flex mb-7.5">
          <div
            class="company-badge w-15 h-15 bg-white/10 border-2 border-white/30 rounded-4 flex items-center justify-center backdrop-blur-sm text-[var(--tm-accent-primary)] transition-all duration-300 hover:scale-110 hover:rotate-5 hover:bg-[var(--tm-accent-primary)] hover:text-white hover:border-[var(--tm-accent-primary)]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
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
        </div>

        <!-- 标题区域 -->
        <div class="mb-10">
          <h1
            class="text-4xl md:text-6xl font-light tracking-tight mb-2.5 text-white flex items-center justify-center gap-3 flex-col md:flex-row"
          >
            <span class="font-light">Our Recruitment</span>
            <span
              class="highlight-logo inline-flex items-center animate-glow font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent"
            >
              Services
            </span>
          </h1>
          <p class="text-lg text-white/85 mb-7.5 tracking-wider">
            Comprehensive Staffing Solutions for Your Business Success
          </p>

          <p class="text-xl leading-relaxed text-white max-w-200 mx-auto opacity-90">
            From Emiratisation programs to executive search, we deliver tailored recruitment
            solutions that connect exceptional talent with forward-thinking organizations across the
            UAE and GCC region.
          </p>
        </div>

        <!-- CTA按钮 -->
        <div
          class="cta-buttons flex gap-5 justify-center mb-15 flex-col md:flex-row max-w-75 md:max-w-none mx-auto"
        >
          <NuxtLink
            to="/contact"
            class="btn-primary px-8 py-3 rounded-7.5 text-base font-medium border-none cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-br from-[var(--tm-accent-hero-from)] to-[var(--tm-accent-hero-to)] text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span>Discover Our Services</span>
            <svg
              class="btn-icon w-5 h-5 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="btn-secondary px-8 py-3 rounded-7.5 text-base font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white"
          >
            <span>Schedule Consultation</span>
          </NuxtLink>
        </div>

        <!-- 服务统计数据 -->
        <div
          class="stats-row flex justify-center items-center gap-5 md:gap-10 p-5 md:p-10 bg-white/5 rounded-5 backdrop-blur-sm border border-white/10 shadow-lg relative overflow-hidden flex-wrap"
        >
          <div class="text-center relative z-1 flex-1 min-w-30 md:flex-none">
            <h3
              class="text-2xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent inline-block"
            >
              6
              <span class="text-xl md:text-2xl opacity-80">+</span>
            </h3>
            <p class="text-sm text-white/85 whitespace-nowrap">Service Areas</p>
          </div>
          <div
            class="w-px h-12.5 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden md:block"
          ></div>
          <div class="text-center relative z-1 flex-1 min-w-30 md:flex-none">
            <h3
              class="text-2xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent inline-block"
            >
              15
              <span class="text-xl md:text-2xl opacity-80">+</span>
            </h3>
            <p class="text-sm text-white/85 whitespace-nowrap">Years Experience</p>
          </div>
          <div
            class="w-px h-12.5 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden md:block"
          ></div>
          <div class="text-center relative z-1 flex-1 min-w-30 md:flex-none">
            <h3
              class="text-2xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent inline-block"
            >
              5000
              <span class="text-xl md:text-2xl opacity-80">+</span>
            </h3>
            <p class="text-sm text-white/85 whitespace-nowrap">Successful Placements</p>
          </div>
          <div
            class="w-px h-12.5 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden md:block"
          ></div>
          <div class="text-center relative z-1 flex-1 min-w-30 md:flex-none">
            <h3
              class="text-2xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent inline-block"
            >
              200
              <span class="text-xl md:text-2xl opacity-80">+</span>
            </h3>
            <p class="text-sm text-white/85 whitespace-nowrap">Partner Companies</p>
          </div>
        </div>

        <!-- 服务亮点 -->
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-225 mx-auto">
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-4 flex items-center justify-center text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Emiratisation Focus</h3>
            <p class="text-sm text-white/80">
              Specialized expertise in UAE nationalization programs
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-4 flex items-center justify-center text-white"
            >
              <svg
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
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">GCC Coverage</h3>
            <p class="text-sm text-white/80">Comprehensive recruitment across Gulf region</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-4 flex items-center justify-center text-white"
            >
              <svg
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
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Expert Network</h3>
            <p class="text-sm text-white/80">Extensive talent pool and industry connections</p>
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
  /* 只保留无法用 UnoCSS 表达的复杂样式 */

  /* 背景渐变图案 */
  .bg-gradient-radial-pattern {
    background-image:
      radial-gradient(circle at 20% 50%, var(--tm-bg-accent-gradient-from) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, var(--tm-bg-accent-gradient-to) 0%, transparent 40%);
  }

  /* Logo 发光动画 */
  @keyframes glow {
    from {
      filter: drop-shadow(0 0 10px var(--tm-accent-gradient-from));
    }
    to {
      filter: drop-shadow(0 0 20px var(--tm-accent-gradient-to));
    }
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite alternate;
  }

  /* 按钮悬停效果 */
  .btn-primary:hover .btn-icon {
    transform: translateX(4px);
  }

  /* 统计区域闪光动画 */
  .stats-row::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
</style>
