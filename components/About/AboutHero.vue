<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- 背景图片 -->
    <div class="absolute inset-0 z-0">
      <OptImage
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        alt="团队合作"
        class="w-full h-full object-cover"
        :auto-dark-mode="true"
      />
      <!-- 遮罩层 -->
      <div class="absolute inset-0 bg-black/60"></div>
      <!-- 装饰图案 -->
      <div class="absolute inset-0 bg-gradient-radial-pattern opacity-60"></div>
    </div>

    <div class="relative z-1 max-w-1200px mx-auto px-20px w-full">
      <div class="text-center text-white">
        <!-- Logo区域 -->
        <div class="inline-flex mb-30px">
          <div
            class="company-badge w-60px h-60px bg-[var(--tm-bg-badge)] border-2 border-[var(--tm-bd-white-alpha30)] rounded-16px flex items-center justify-center backdrop-blur-10px text-[var(--tm-accent-primary)] transition-all duration-300 ease hover:scale-110 hover:rotate-5 hover:bg-[var(--tm-accent-primary)] hover:text-white hover:border-[var(--tm-accent-primary)]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
        </div>

        <!-- 标题区域 -->
        <div class="mb-40px">
          <h1
            class="text-4xl md:text-6xl font-light tracking-tight mb-10px text-white flex items-center justify-center gap-0.3em flex-col md:flex-row"
          >
            <span class="font-light">About</span>
            <VMMCLogoInline
              class="highlight-logo inline-flex items-center animate-glow"
              :size="'1.2em'"
              color="gradient"
            />
          </h1>
          <p class="text-lg text-[var(--tm-txt-white-alpha85)] mb-30px tracking-wider">
            Victor Meridian Management Consultancies L.L.C
          </p>

          <p class="text-xl leading-relaxed text-white max-w-800px mx-auto opacity-90">
            A global comprehensive human resources and consulting firm headquartered in Singapore,
            delivering exceptional one-stop services across executive search, HR outsourcing,
            immigration, study abroad, and strategic consulting.
          </p>
        </div>

        <!-- CTA按钮 -->
        <div class="cta-buttons flex gap-20px justify-center mb-60px">
          <a
            href="#core-expertise"
            class="btn-primary px-32px py-12px rounded-30px text-base font-medium border-none cursor-pointer transition-all duration-300 ease flex items-center justify-center gap-8px bg-gradient-to-br from-[var(--tm-accent-hero-from)] to-[var(--tm-accent-hero-to)] text-white shadow-[var(--tm-shadow-accent)] hover:translate-y--2px hover:shadow-[var(--tm-shadow-hover)] no-underline"
          >
            <span>Our Services</span>
            <svg
              class="btn-icon w-20px h-20px transition-transform duration-300 ease"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <NuxtLink
            to="/contact"
            class="btn-secondary px-32px py-12px rounded-30px text-base font-medium cursor-pointer transition-all duration-300 ease flex items-center justify-center gap-8px bg-transparent text-white border-2 border-[var(--tm-bd-white-alpha30)] hover:bg-[var(--tm-bg-white-alpha10)] hover:border-white no-underline"
          >
            <span>Contact Us</span>
          </NuxtLink>
        </div>

        <!-- 统计数据 -->
        <div
          class="stats-row flex justify-center items-center gap-40px p-40px bg-[var(--tm-bg-white-alpha05)] rounded-20px backdrop-blur-10px border border-[var(--tm-bd-white-alpha10)] shadow-[var(--tm-shadow-white-alpha10)] relative overflow-hidden flex-wrap"
        >
          <div class="text-center relative z-1">
            <h3
              class="text-2.5rem font-bold mb-8px bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent inline-block"
            >
              8
              <span class="text-2xl opacity-80">+</span>
            </h3>
            <p class="text-sm text-[var(--tm-txt-white-alpha85)] whitespace-nowrap">
              Global Offices
            </p>
          </div>
          <div
            class="w-px h-50px bg-gradient-to-b from-transparent via-[var(--tm-bd-white-alpha30)] to-transparent hidden md:block"
          ></div>
          <div class="text-center relative z-1">
            <h3
              class="text-2.5rem font-bold mb-8px bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent inline-block"
            >
              10
              <span class="text-2xl opacity-80">+</span>
            </h3>
            <p class="text-sm text-[var(--tm-txt-white-alpha85)] whitespace-nowrap">
              Years Experience
            </p>
          </div>
          <div
            class="w-px h-50px bg-gradient-to-b from-transparent via-[var(--tm-bd-white-alpha30)] to-transparent hidden md:block"
          ></div>
          <div class="text-center relative z-1">
            <h3
              class="text-2.5rem font-bold mb-8px bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent inline-block"
            >
              1000
              <span class="text-2xl opacity-80">+</span>
            </h3>
            <p class="text-sm text-[var(--tm-txt-white-alpha85)] whitespace-nowrap">
              Successful Placements
            </p>
          </div>
          <div
            class="w-px h-50px bg-gradient-to-b from-transparent via-[var(--tm-bd-white-alpha30)] to-transparent hidden md:block"
          ></div>
          <div class="text-center relative z-1">
            <h3
              class="text-2.5rem font-bold mb-8px bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] bg-clip-text text-transparent inline-block"
            >
              50
              <span class="text-2xl opacity-80">+</span>
            </h3>
            <p class="text-sm text-[var(--tm-txt-white-alpha85)] whitespace-nowrap">
              Industry Sectors
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import VMMCLogoInline from '~/components/Logo/VMMCLogoInline.vue'
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

  /* 移动端适配 */
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
