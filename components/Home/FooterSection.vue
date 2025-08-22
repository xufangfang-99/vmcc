<template>
  <footer
    class="relative overflow-hidden bg-[var(--tm-bg-primary)] border-t border-[var(--tm-bd-light)] !py-20 md:py-80px dark:bg-[#0a0a0a] dark:border-white/10"
  >
    <!-- 背景装饰 -->
    <div
      class="absolute top-0 left--50% right--50% h-px bg-gradient-to-r from-transparent via-[var(--tm-pri-0)] to-transparent opacity-30"
    ></div>

    <div class="max-w-1200px mx-auto px-5">
      <!-- 主要内容区 -->
      <div class="footer-content">
        <!-- 左侧：公司信息 -->
        <div class="company-info">
          <h3
            class="text-24px font-semibold mb-6 bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent"
          >
            Victor Meridian Management Consultancies
          </h3>
          <p class="text-15px leading-relaxed text-[var(--tm-txt-secondary)] mb-8">
            Providing elite talent solutions for forward-thinking organizations. We connect
            exceptional professionals with industry-leading companies worldwide.
          </p>

          <!-- 社交媒体链接 -->
          <div class="flex gap-4">
            <NuxtLink
              to="#"
              class="social-link"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H2C1.45 2 1 2.45 1 3V17C1 17.55 1.45 18 2 18H18C18.55 18 19 17.55 19 17V3C19 2.45 18.55 2 18 2ZM6.5 15.5H4V8H6.5V15.5ZM5.25 6.85C4.42 6.85 3.75 6.18 3.75 5.35C3.75 4.52 4.42 3.85 5.25 3.85C6.08 3.85 6.75 4.52 6.75 5.35C6.75 6.18 6.08 6.85 5.25 6.85ZM16 15.5H13.5V11.5C13.5 10.5 13 10 12 10C11 10 10.5 10.5 10.5 11.5V15.5H8V8H10.5V9.15C10.9 8.4 11.85 7.85 12.75 7.85C14.45 7.85 16 9.05 16 11.25V15.5Z"
                  fill="currentColor"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="social-link"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4.5C18.3 4.8 17.55 5 16.75 5.1C17.55 4.6 18.15 3.85 18.45 2.95C17.7 3.4 16.85 3.75 15.95 3.9C15.25 3.15 14.25 2.65 13.15 2.65C11 2.65 9.25 4.4 9.25 6.55C9.25 6.85 9.3 7.15 9.35 7.4C6.15 7.25 3.3 5.7 1.4 3.4C1.05 3.95 0.85 4.6 0.85 5.35C0.85 6.7 1.55 7.85 2.6 8.55C1.95 8.5 1.35 8.35 0.8 8.05V8.1C0.8 10 2.15 11.55 3.95 11.9C3.6 12 3.25 12.05 2.9 12.05C2.65 12.05 2.4 12.05 2.15 12C2.65 13.55 4.1 14.65 5.85 14.7C4.5 15.75 2.8 16.35 0.95 16.35C0.65 16.35 0.35 16.35 0 16.3C1.75 17.4 3.85 18 6.1 18C13.15 18 17.05 12.1 17.05 7C17.05 6.85 17.05 6.65 17.05 6.5C17.8 5.95 18.45 5.25 19 4.5Z"
                  fill="currentColor"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="social-link"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                  fill="currentColor"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- 服务和公司链接区域 - 手机端会并排显示 -->
        <div class="footer-links-section">
          <!-- 服务链接 -->
          <div class="footer-column">
            <h4 class="text-base font-semibold mb-6 text-[var(--tm-txt-primary)]">Services</h4>
            <ul class="list-none p-0 m-0">
              <li class="mb-4">
                <NuxtLink
                  to="/services/executive-search"
                  class="footer-link"
                >
                  Executive Search
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/services/hr-outsourcing"
                  class="footer-link"
                >
                  HR Outsourcing
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/services/talent-deployment"
                  class="footer-link"
                >
                  Talent Deployment
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/services/organizational-consulting"
                  class="footer-link"
                >
                  Organizational Consulting
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/services/cross-border-support"
                  class="footer-link"
                >
                  Cross-Border Support
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- 公司链接 -->
          <div class="footer-column">
            <h4 class="text-base font-semibold mb-6 text-[var(--tm-txt-primary)]">Company</h4>
            <ul class="list-none p-0 m-0">
              <li class="mb-4">
                <NuxtLink
                  to="/about"
                  class="footer-link"
                >
                  About Us
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/contact"
                  class="footer-link"
                >
                  Contact
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/careers"
                  class="footer-link"
                >
                  Careers
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/insights"
                  class="footer-link"
                >
                  Insights
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/privacy"
                  class="footer-link"
                >
                  Privacy Policy
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 底部版权信息 -->
      <div
        class="pt-10 border-t border-[var(--tm-bd-light)] dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <div>
          <p class="text-14px text-[var(--tm-txt-secondary)] m-0">
            © 2025 Victor Meridian Management Consultancies L.L.C. All rights reserved.
          </p>
        </div>
        <div class="flex gap-8">
          <NuxtLink
            to="/terms"
            class="text-14px text-[var(--tm-txt-secondary)] hover:text-[var(--tm-pri-0)] transition-colors"
          >
            Terms
          </NuxtLink>
          <NuxtLink
            to="/privacy"
            class="text-14px text-[var(--tm-txt-secondary)] hover:text-[var(--tm-pri-0)] transition-colors"
          >
            Privacy
          </NuxtLink>
          <NuxtLink
            to="/cookies"
            class="text-14px text-[var(--tm-txt-secondary)] hover:text-[var(--tm-pri-0)] transition-colors"
          >
            Cookies
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style scoped>
  /* 主要内容布局 - 保持原有的复杂 grid 结构 */
  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 80px;
    margin-bottom: 60px;
  }

  /* 桌面端服务和公司链接布局 */
  .footer-links-section {
    display: contents; /* 在桌面端让子元素直接参与父级网格 */
  }

  /* 公司信息列 */
  .company-info {
    max-width: 400px;
  }

  /* 社交链接样式 */
  .social-link {
    @apply w-10 h-10 rounded-full bg-[var(--tm-bg-secondary)] flex items-center justify-center
    text-[var(--tm-txt-secondary)] transition-all duration-300 border border-[var(--tm-bd-light)]
    hover:bg-[var(--tm-pri-0)] hover:text-white hover:translate-y--2px hover:border-[var(--tm-pri-0)]
    dark:bg-white/5 dark:border-white/10;
  }

  /* 链接样式 */
  .footer-link {
    @apply text-[var(--tm-txt-secondary)] text-15px transition-all duration-300 relative
    hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px
    after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)]
    after:transition-[width] after:duration-300 hover:after:w-full;
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }

    .company-info {
      grid-column: 1 / -1;
      max-width: 100%;
    }

    .footer-links-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column: 1 / -1;
      gap: 40px;
    }
  }

  /* 手机端优化 */
  @media (max-width: 768px) {
    footer {
      @apply py-10;
    }

    .footer-content {
      @apply grid-cols-1 gap-6 mb-6;
    }

    .company-info h3 {
      @apply text-20px mb-3;
    }

    .company-info p {
      @apply text-14px leading-normal mb-4;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .social-link {
      @apply w-8 h-8;
    }

    .social-link svg {
      @apply w-4 h-4;
    }

    /* 服务和公司模块并排显示 */
    .footer-links-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .footer-column h4 {
      @apply text-14px mb-3 font-semibold;
    }

    .footer-column li {
      @apply mb-2;
    }

    .footer-link {
      @apply text-13px py-0.5 text-[var(--tm-txt-light)];
    }

    .footer-bottom {
      @apply pt-4 flex-row justify-between items-center;
    }

    .footer-bottom p {
      @apply text-11px;
    }

    .footer-bottom .flex {
      @apply gap-3;
    }

    .footer-bottom a {
      @apply text-11px;
    }
  }

  /* 小屏幕手机进一步优化 */
  @media (max-width: 480px) {
    footer {
      @apply py-8;
    }

    .footer-links-section {
      @apply gap-6;
    }

    .footer-column li {
      @apply mb-1.5;
    }

    .footer-link {
      @apply text-12px;
    }

    .footer-bottom {
      @apply pt-3;
    }

    .footer-bottom p,
    .footer-bottom a {
      @apply text-10px;
    }

    .footer-bottom .flex {
      @apply gap-2;
    }
  }

  /* 动画效果 */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  footer {
    animation: fadeIn 0.8s ease-out;
  }
</style>
