<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- 背景图片 -->
    <div class="absolute inset-0 z-0">
      <OptImage
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
        alt="Professional portrait representing our journey"
        class="w-full h-full object-cover"
        :auto-dark-mode="true"
      />
      <!-- 遮罩层 -->
      <div class="absolute inset-0 bg-black/70"></div>
      <!-- 装饰图案 -->
      <div class="absolute inset-0 bg-gradient-radial-pattern opacity-60"></div>
    </div>

    <div class="relative z-1 max-w-1200px mx-auto px-20px w-full">
      <div class="text-center text-white">
        <!-- 标题区域 -->
        <div class="mb-40px">
          <h1
            class="text-4xl md:text-6xl font-light tracking-tight mb-10px text-white flex items-center justify-center gap-0.3em flex-col md:flex-row"
          >
            <span class="font-light">Our</span>
            <span
              class="highlight-text font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent inline-block animate-glow"
            >
              Journey
            </span>
          </h1>
          <p class="text-lg text-[var(--tm-txt-white-alpha85)] mb-30px tracking-wider">
            Building Excellence Since 2010
          </p>

          <p class="text-xl leading-relaxed text-white max-w-800px mx-auto opacity-90">
            From our humble beginnings in Singapore to becoming a leading comprehensive human
            resources service provider across Asia-Pacific and Middle East regions
          </p>
        </div>

        <!-- CTA按钮 -->
        <div class="cta-buttons flex gap-20px justify-center mb-60px flex-wrap">
          <NuxtLink
            to="/contact"
            class="btn-primary px-32px py-12px rounded-30px text-base font-medium border-none cursor-pointer transition-all duration-300 ease flex items-center justify-center gap-8px bg-gradient-to-br from-[var(--tm-accent-hero-from)] to-[var(--tm-accent-hero-to)] text-white shadow-[var(--tm-shadow-accent)] hover:translate-y--2px hover:shadow-[var(--tm-shadow-hover)] no-underline"
          >
            <span>Start Your Journey</span>
            <svg
              class="btn-icon w-20px h-20px transition-transform duration-300 ease"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="btn-secondary px-32px py-12px rounded-30px text-base font-medium cursor-pointer transition-all duration-300 ease flex items-center justify-center gap-8px bg-transparent text-white border-2 border-[var(--tm-bd-white-alpha30)] hover:bg-[var(--tm-bg-white-alpha10)] hover:border-white no-underline"
          >
            <span>Learn More</span>
          </NuxtLink>
        </div>

        <!-- Our Achievements -->
        <div class="achievements-section">
          <h2 class="text-2xl md:text-3xl font-light text-white mb-40px">Our Achievements</h2>

          <div
            class="achievements-grid grid grid-cols-2 lg:grid-cols-3 gap-30px max-w-900px mx-auto"
          >
            <!-- Candidate Database -->
            <div
              class="achievement-item text-center p-20px bg-[var(--tm-bg-white-alpha05)] rounded-15px backdrop-blur-10px border border-[var(--tm-bd-white-alpha10)] shadow-[var(--tm-shadow-white-alpha10)] hover:bg-[var(--tm-bg-white-alpha10)] transition-all duration-300"
            >
              <h3
                class="text-2xl md:text-3xl font-bold mb-5px bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent"
              >
                +1M
              </h3>
              <p class="text-xs md:text-sm text-[var(--tm-txt-white-alpha70)] leading-relaxed">
                Candidate
                <br />
                Database
              </p>
            </div>

            <!-- Professionals Trained -->
            <div
              class="achievement-item text-center p-20px bg-[var(--tm-bg-white-alpha05)] rounded-15px backdrop-blur-10px border border-[var(--tm-bd-white-alpha10)] shadow-[var(--tm-shadow-white-alpha10)] hover:bg-[var(--tm-bg-white-alpha10)] transition-all duration-300"
            >
              <h3
                class="text-2xl md:text-3xl font-bold mb-5px bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent"
              >
                +210K
              </h3>
              <p class="text-xs md:text-sm text-[var(--tm-txt-white-alpha70)] leading-relaxed">
                Professionals
                <br />
                Trained
              </p>
            </div>

            <!-- Jobs Placed -->
            <div
              class="achievement-item text-center p-20px bg-[var(--tm-bg-white-alpha05)] rounded-15px backdrop-blur-10px border border-[var(--tm-bd-white-alpha10)] shadow-[var(--tm-shadow-white-alpha10)] hover:bg-[var(--tm-bg-white-alpha10)] transition-all duration-300"
            >
              <h3
                class="text-2xl md:text-3xl font-bold mb-5px bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent"
              >
                +170K
              </h3>
              <p class="text-xs md:text-sm text-[var(--tm-txt-white-alpha70)] leading-relaxed">
                Jobs
                <br />
                Placed
              </p>
            </div>

            <!-- Courses Delivered -->
            <div
              class="achievement-item text-center p-20px bg-[var(--tm-bg-white-alpha05)] rounded-15px backdrop-blur-10px border border-[var(--tm-bd-white-alpha10)] shadow-[var(--tm-shadow-white-alpha10)] hover:bg-[var(--tm-bg-white-alpha10)] transition-all duration-300"
            >
              <h3
                class="text-2xl md:text-3xl font-bold mb-5px bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent"
              >
                +50K
              </h3>
              <p class="text-xs md:text-sm text-[var(--tm-txt-white-alpha70)] leading-relaxed">
                Courses
                <br />
                Delivered
              </p>
            </div>

            <!-- Satisfied Clients -->
            <div
              class="achievement-item text-center p-20px bg-[var(--tm-bg-white-alpha05)] rounded-15px backdrop-blur-10px border border-[var(--tm-bd-white-alpha10)] shadow-[var(--tm-shadow-white-alpha10)] hover:bg-[var(--tm-bg-white-alpha10)] transition-all duration-300 lg:col-start-2"
            >
              <h3
                class="text-2xl md:text-3xl font-bold mb-5px bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent"
              >
                +20K
              </h3>
              <p class="text-xs md:text-sm text-[var(--tm-txt-white-alpha70)] leading-relaxed">
                Satisfied
                <br />
                Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Hero组件逻辑
</script>

<style>
  /* 背景渐变图案 */
  .bg-gradient-radial-pattern {
    background-image:
      radial-gradient(circle at 20% 50%, var(--tm-bg-accent-gradient-from) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, var(--tm-bg-accent-gradient-to) 0%, transparent 40%);
  }

  /* 高亮文字发光动画 */
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
  .stats-shimmer::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      var(--tm-bg-white-alpha10) 50%,
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

  /* 响应式设计 */
  @media (max-width: 768px) {
    .cta-buttons {
      flex-direction: column;
      align-items: center;
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 40px;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
    }

    .stats-row {
      gap: 20px;
      padding: 20px;
    }

    .stats-row .text-center {
      flex: 1 1 40%;
      min-width: 120px;
    }

    .stats-row h3 {
      font-size: 2rem;
    }
  }
</style>
