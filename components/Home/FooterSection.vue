<template>
  <footer
    class="relative overflow-hidden bg-[var(--tm-bg-primary)] border-t border-[var(--tm-bd-light)] !py-20 md:py-80px dark:bg-[#0a0a0a] dark:border-white/10 animate-fade-in"
  >
    <!-- 背景装饰 -->
    <div
      class="absolute top-0 left--50% right--50% h-px bg-gradient-to-r from-transparent via-[var(--tm-pri-0)] to-transparent opacity-30"
    ></div>

    <div class="max-w-1200px mx-auto px-5">
      <!-- 主要内容区 -->
      <div
        class="grid grid-cols-3 lg:grid-cols-[2fr_1fr_1fr] gap-20 lg:gap-80px mb-15 lg:mb-60px md:grid-cols-2 md:gap-15 sm:grid-cols-1 sm:gap-6"
      >
        <!-- 左侧：公司信息 -->
        <div class="company-info max-w-100 md:col-span-2 sm:col-span-1">
          <h3
            class="text-24px sm:text-20px font-semibold mb-6 sm:mb-3 bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent"
          >
            Victor Meridian Management Consultancies
          </h3>
          <p
            class="text-15px sm:text-14px leading-relaxed sm:leading-normal text-[var(--tm-txt-secondary)] mb-8 sm:mb-4 line-clamp-none sm:line-clamp-3"
          >
            Providing elite talent solutions for forward-thinking organizations. We connect
            exceptional professionals with industry-leading companies worldwide.
          </p>

          <!-- 社交媒体链接 -->
          <div class="flex gap-4">
            <NuxtLink
              to="https://www.linkedin.com/company/vmmc-uae"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[var(--tm-bg-secondary)] flex items-center justify-center text-[var(--tm-txt-secondary)] transition-all duration-300 border border-[var(--tm-bd-light)] hover:bg-[var(--tm-pri-0)] hover:text-white hover:translate-y--2px hover:border-[var(--tm-pri-0)] dark:bg-white/5 dark:border-white/10"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="sm:w-4 sm:h-4"
              >
                <path
                  d="M18 2H2C1.45 2 1 2.45 1 3V17C1 17.55 1.45 18 2 18H18C18.55 18 19 17.55 19 17V3C19 2.45 18.55 2 18 2ZM6.5 15.5H4V8H6.5V15.5ZM5.25 6.85C4.42 6.85 3.75 6.18 3.75 5.35C3.75 4.52 4.42 3.85 5.25 3.85C6.08 3.85 6.75 4.52 6.75 5.35C6.75 6.18 6.08 6.85 5.25 6.85ZM16 15.5H13.5V11.5C13.5 10.5 13 10 12 10C11 10 10.5 10.5 10.5 11.5V15.5H8V8H10.5V9.15C10.9 8.4 11.85 7.85 12.75 7.85C14.45 7.85 16 9.05 16 11.25V15.5Z"
                  fill="currentColor"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="https://www.instagram.com/vmmc.global"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[var(--tm-bg-secondary)] flex items-center justify-center text-[var(--tm-txt-secondary)] transition-all duration-300 border border-[var(--tm-bd-light)] hover:bg-[var(--tm-pri-0)] hover:text-white hover:translate-y--2px hover:border-[var(--tm-pri-0)] dark:bg-white/5 dark:border-white/10"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="sm:w-4 sm:h-4"
              >
                <path
                  d="M10 1.8c2.67 0 2.99.01 4.04.06 1.78.08 2.74.38 3.38 1.02.64.64.94 1.6 1.02 3.38.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.08 1.78-.38 2.74-1.02 3.38-.64.64-1.6.94-3.38 1.02-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.78-.08-2.74-.38-3.38-1.02-.64-.64-.94-1.6-1.02-3.38C1.51 12.99 1.5 12.67 1.5 10s.01-2.99.06-4.04c.08-1.78.38-2.74 1.02-3.38.64-.64 1.6-.94 3.38-1.02C7.01 1.51 7.33 1.5 10 1.5zm0-1.5C7.28 0 6.94.01 5.88.06 4.67.13 3.82.34 3.1.64c-.73.31-1.35.72-1.97 1.34C.51 2.6.1 3.22-.21 3.95c-.3.72-.51 1.57-.58 2.78C-.84 7.99-.85 8.33-.85 11.05s.01 3.06.06 4.12c.07 1.21.28 2.06.58 2.78.31.73.72 1.35 1.34 1.97.62.62 1.24 1.03 1.97 1.34.72.3 1.57.51 2.78.58 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.21-.07 2.06-.28 2.78-.58.73-.31 1.35-.72 1.97-1.34.62-.62 1.03-1.24 1.34-1.97.3-.72.51-1.57.58-2.78.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.07-1.21-.28-2.06-.58-2.78-.31-.73-.72-1.35-1.34-1.97C16.4 1.36 15.78.95 15.05.64c-.72-.3-1.57-.51-2.78-.58C11.21.01 10.87 0 10 0z"
                  fill="currentColor"
                />
                <path
                  d="M10 4.86A5.14 5.14 0 1 0 15.14 10 5.14 5.14 0 0 0 10 4.86zm0 8.48A3.34 3.34 0 1 1 13.34 10 3.34 3.34 0 0 1 10 13.34z"
                  fill="currentColor"
                />
                <circle
                  cx="15.34"
                  cy="4.66"
                  r="1.2"
                  fill="currentColor"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="https://www.facebook.com/profile.php?id=61579975078423"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[var(--tm-bg-secondary)] flex items-center justify-center text-[var(--tm-txt-secondary)] transition-all duration-300 border border-[var(--tm-bd-light)] hover:bg-[var(--tm-pri-0)] hover:text-white hover:translate-y--2px hover:border-[var(--tm-pri-0)] dark:bg-white/5 dark:border-white/10"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="sm:w-4 sm:h-4"
              >
                <path
                  d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                  fill="currentColor"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- 服务链接 -->
        <div class="footer-column sm:grid sm:grid-cols-2 sm:gap-8 sm:col-span-1">
          <div>
            <h4
              class="text-base sm:text-14px font-semibold mb-6 sm:mb-3 text-[var(--tm-txt-primary)]"
            >
              Services
            </h4>
            <ul class="list-none p-0 m-0">
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/services#emiratisation"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Emiratisation
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/services#permanent-recruitment"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Permanent Recruitment
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/services#temporary-recruitment"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Temporary Recruitment
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/services#bulk-hiring"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Bulk Hiring
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/services#outsourcing-services"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Outsourcing Services
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-1.5">
                <NuxtLink
                  to="/services#advisory-services"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-12px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Advisory Services
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- 公司链接 -->
          <div>
            <h4
              class="text-base sm:text-14px font-semibold mb-6 sm:mb-3 text-[var(--tm-txt-primary)]"
            >
              Company
            </h4>
            <ul class="list-none p-0 m-0">
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/about#company-intro"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  About VMMC
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/locations"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Locations
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/careers#why-vmmc"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Careers
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/insights#industry-reports"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Insights
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-2">
                <NuxtLink
                  to="/timeline"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-13px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Timeline
                </NuxtLink>
              </li>
              <li class="mb-4 sm:mb-1.5">
                <NuxtLink
                  to="/contact"
                  class="text-[var(--tm-txt-secondary)] sm:text-[var(--tm-txt-light)] text-15px sm:text-12px py-0.5 transition-all duration-300 relative hover:text-[var(--tm-pri-0)] after:content-[''] after:absolute after:bottom--2px after:left-0 after:w-0 after:h-px after:bg-[var(--tm-pri-0)] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 底部版权信息 -->
      <div
        class="pt-10 sm:pt-4 border-t border-[var(--tm-bd-light)] dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <div>
          <p class="text-14px sm:text-11px text-[var(--tm-txt-secondary)] m-0">
            © 2025 Victor Meridian Management Consultancies L.L.C. All rights reserved.
          </p>
        </div>
        <div class="flex gap-8 sm:gap-3">
          <NuxtLink
            to="/privacy"
            class="text-14px sm:text-11px text-[var(--tm-txt-secondary)] hover:text-[var(--tm-pri-0)] transition-colors"
          >
            Privacy
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style>
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

  .animate-fade-in {
    animation: fadeIn 0.8s ease-out;
  }
</style>
