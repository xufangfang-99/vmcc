<!-- components/about/GlobalPresence.vue -->
<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-200 h-200 opacity-10 pointer-events-none"
    >
      <div
        class="w-full h-full bg-gradient-radial from-[var(--tm-bg-heroGradient-from)] to-transparent"
      ></div>
    </div>

    <div class="max-w-300 mx-auto px-5 relative z-1">
      <!-- 标题 -->
      <div class="text-center mb-15">
        <h2 class="text-12 font-light text-[var(--tm-txt-primary)] mb-5">Global Presence</h2>
        <p class="text-5 leading-relaxed text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
          Strategically positioned across key business hubs in Asia-Pacific and Middle East,
          enabling seamless cross-border operations and local market expertise.
        </p>
      </div>

      <!-- 办公室网格 -->
      <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-15">
        <!-- 新加坡总部 -->
        <div
          class="bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-4 p-7.5 flex gap-5 transition-all duration-300 relative overflow-hidden col-span-2 text-[var(--tm-txt-white)] group"
        >
          <!-- 顶部渐变条 -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
          ></div>

          <!-- 光晕效果 -->
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-200% h-200% bg-gradient-radial from-[var(--tm-bg-whiteAlpha20)] to-transparent animate-pulse"
          ></div>

          <div
            class="w-14 h-14 bg-[var(--tm-bg-whiteAlpha20)] rounded-3 flex items-center justify-center flex-shrink-0 text-[var(--tm-txt-white)] transition-all duration-300 border border-[var(--tm-bd-transparent)] group-hover:scale-110 group-hover:rotate-5"
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

          <div class="flex-1 relative z-1">
            <h3 class="text-6 font-semibold mb-1 flex items-center gap-2 text-white">
              Singapore
              <span
                class="text-3 bg-[var(--tm-bg-whiteAlpha30)] px-2 py-0.5 rounded-1 font-medium text-white"
              >
                HQ
              </span>
            </h3>
            <p class="text-3.6 text-[var(--tm-txt-whiteAlpha90)] mb-2 font-medium">Headquarters</p>
            <p class="text-3.8 leading-relaxed text-[var(--tm-txt-whiteAlpha80)] mb-4">
              Asia-Pacific regional hub and global headquarters
            </p>

            <div class="flex flex-col gap-2">
              <div class="flex items-start gap-2 text-3.6 text-[var(--tm-txt-whiteAlpha85)]">
                <div class="flex-shrink-0 mt-0.5 opacity-70">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                    ></circle>
                  </svg>
                </div>
                <span>The Guoco Tower, Office1801</span>
              </div>
              <div class="flex items-start gap-2 text-3.6 text-[var(--tm-txt-whiteAlpha85)]">
                <div class="flex-shrink-0 mt-0.5 opacity-70">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </div>
                <span>+65 6386 8322</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 迪拜办公室 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-4 p-7.5 flex gap-5 transition-all duration-300 border border-[var(--tm-bd-light)] relative overflow-hidden group hover:-translate-y-1.25 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
        >
          <!-- 顶部渐变条 -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
          ></div>

          <div
            class="w-14 h-14 bg-[var(--tm-bg-badge)] rounded-3 flex items-center justify-center flex-shrink-0 text-[var(--tm-accent-primary)] transition-all duration-300 border border-[var(--tm-bd-feature)] group-hover:scale-110 group-hover:rotate-5 group-hover:bg-[var(--tm-accent-primary)] group-hover:text-[var(--tm-txt-white)]"
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

          <div class="flex-1 relative z-1">
            <h3 class="text-6 font-semibold mb-1 text-[var(--tm-txt-primary)]">Dubai</h3>
            <p class="text-3.6 text-[var(--tm-accent-primary)] mb-2 font-medium">Regional Office</p>
            <p class="text-3.8 leading-relaxed text-[var(--tm-txt-secondary)] mb-4">
              Middle East and Africa operations center
            </p>

            <div class="flex flex-col gap-2">
              <div class="flex items-start gap-2 text-3.6 text-[var(--tm-txt-secondary)]">
                <div class="flex-shrink-0 mt-0.5 opacity-70">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                    ></circle>
                  </svg>
                </div>
                <span>Aspin Commercial Tower, Office2818, DIFC</span>
              </div>
              <div class="flex items-start gap-2 text-3.6 text-[var(--tm-txt-secondary)]">
                <div class="flex-shrink-0 mt-0.5 opacity-70">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </div>
                <span>+971 55 829 6351</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 马来西亚办公室 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-4 p-7.5 flex gap-5 transition-all duration-300 border border-[var(--tm-bd-light)] relative overflow-hidden group hover:-translate-y-1.25 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
        >
          <!-- 顶部渐变条 -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
          ></div>

          <div
            class="w-14 h-14 bg-[var(--tm-bg-badge)] rounded-3 flex items-center justify-center flex-shrink-0 text-[var(--tm-accent-primary)] transition-all duration-300 border border-[var(--tm-bd-feature)] group-hover:scale-110 group-hover:rotate-5 group-hover:bg-[var(--tm-accent-primary)] group-hover:text-[var(--tm-txt-white)]"
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

          <div class="flex-1 relative z-1">
            <h3 class="text-6 font-semibold mb-1 text-[var(--tm-txt-primary)]">Malaysia</h3>
            <p class="text-3.6 text-[var(--tm-accent-primary)] mb-2 font-medium">Regional Office</p>
            <p class="text-3.8 leading-relaxed text-[var(--tm-txt-secondary)] mb-4">
              Southeast Asia market development
            </p>

            <div class="flex flex-col gap-2">
              <div class="flex items-start gap-2 text-3.6 text-[var(--tm-txt-secondary)]">
                <div class="flex-shrink-0 mt-0.5 opacity-70">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                    ></circle>
                  </svg>
                </div>
                <span>Aspire Tower, 07-05, KL Eco City, 59200 Kuala Lumpur</span>
              </div>
              <div class="flex items-start gap-2 text-3.6 text-[var(--tm-txt-secondary)]">
                <div class="flex-shrink-0 mt-0.5 opacity-70">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </div>
                <span>+60 322 469 000</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 北京办公室 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-4 p-7.5 flex gap-5 transition-all duration-300 border border-[var(--tm-bd-light)] relative overflow-hidden group hover:-translate-y-1.25 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
        >
          <!-- 顶部渐变条 -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
          ></div>

          <div
            class="w-14 h-14 bg-[var(--tm-bg-badge)] rounded-3 flex items-center justify-center flex-shrink-0 text-[var(--tm-accent-primary)] transition-all duration-300 border border-[var(--tm-bd-feature)] group-hover:scale-110 group-hover:rotate-5 group-hover:bg-[var(--tm-accent-primary)] group-hover:text-[var(--tm-txt-white)]"
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

          <div class="flex-1 relative z-1">
            <h3 class="text-6 font-semibold mb-1 text-[var(--tm-txt-primary)]">Beijing</h3>
            <p class="text-3.6 text-[var(--tm-accent-primary)] mb-2 font-medium">China Office</p>
            <p class="text-3.8 leading-relaxed text-[var(--tm-txt-secondary)]">
              Northern China business operations
            </p>
          </div>
        </div>

        <!-- 上海办公室 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-4 p-7.5 flex gap-5 transition-all duration-300 border border-[var(--tm-bd-light)] relative overflow-hidden group hover:-translate-y-1.25 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
        >
          <!-- 顶部渐变条 -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
          ></div>

          <div
            class="w-14 h-14 bg-[var(--tm-bg-badge)] rounded-3 flex items-center justify-center flex-shrink-0 text-[var(--tm-accent-primary)] transition-all duration-300 border border-[var(--tm-bd-feature)] group-hover:scale-110 group-hover:rotate-5 group-hover:bg-[var(--tm-accent-primary)] group-hover:text-[var(--tm-txt-white)]"
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

          <div class="flex-1 relative z-1">
            <h3 class="text-6 font-semibold mb-1 text-[var(--tm-txt-primary)]">Shanghai</h3>
            <p class="text-3.6 text-[var(--tm-accent-primary)] mb-2 font-medium">China Office</p>
            <p class="text-3.8 leading-relaxed text-[var(--tm-txt-secondary)]">
              Eastern China commercial hub
            </p>
          </div>
        </div>

        <!-- 深圳办公室 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-4 p-7.5 flex gap-5 transition-all duration-300 border border-[var(--tm-bd-light)] relative overflow-hidden group hover:-translate-y-1.25 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
        >
          <!-- 顶部渐变条 -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
          ></div>

          <div
            class="w-14 h-14 bg-[var(--tm-bg-badge)] rounded-3 flex items-center justify-center flex-shrink-0 text-[var(--tm-accent-primary)] transition-all duration-300 border border-[var(--tm-bd-feature)] group-hover:scale-110 group-hover:rotate-5 group-hover:bg-[var(--tm-accent-primary)] group-hover:text-[var(--tm-txt-white)]"
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

          <div class="flex-1 relative z-1">
            <h3 class="text-6 font-semibold mb-1 text-[var(--tm-txt-primary)]">Shenzhen</h3>
            <p class="text-3.6 text-[var(--tm-accent-primary)] mb-2 font-medium">China Office</p>
            <p class="text-3.8 leading-relaxed text-[var(--tm-txt-secondary)]">
              Southern China technology corridor
            </p>
          </div>
        </div>

        <!-- 成都办公室 -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-4 p-7.5 flex gap-5 transition-all duration-300 border border-[var(--tm-bd-light)] relative overflow-hidden group hover:-translate-y-1.25 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)]"
        >
          <!-- 顶部渐变条 -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
          ></div>

          <div
            class="w-14 h-14 bg-[var(--tm-bg-badge)] rounded-3 flex items-center justify-center flex-shrink-0 text-[var(--tm-accent-primary)] transition-all duration-300 border border-[var(--tm-bd-feature)] group-hover:scale-110 group-hover:rotate-5 group-hover:bg-[var(--tm-accent-primary)] group-hover:text-[var(--tm-txt-white)]"
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

          <div class="flex-1 relative z-1">
            <h3 class="text-6 font-semibold mb-1 text-[var(--tm-txt-primary)]">Chengdu</h3>
            <p class="text-3.6 text-[var(--tm-accent-primary)] mb-2 font-medium">China Office</p>
            <p class="text-3.8 leading-relaxed text-[var(--tm-txt-secondary)]">
              Western China market expansion
            </p>
          </div>
        </div>
      </div>

      <!-- 联系信息部分 -->
      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 pt-10 border-t border-[var(--tm-bd-light)]"
      >
        <div
          class="bg-[var(--tm-bg-primary)] rounded-3 p-6 flex items-center gap-4 border border-[var(--tm-bd-light)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--tm-shadow-card)] hover:border-[var(--tm-accent-primary)]"
        >
          <div
            class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-2.5 flex items-center justify-center text-[var(--tm-accent-primary)] flex-shrink-0"
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
          <div class="flex-1">
            <h3 class="text-4.4 font-semibold text-[var(--tm-txt-primary)] mb-1">Website</h3>
            <a
              href="https://www.vmmcae.com/"
              class="text-3.8 text-[var(--tm-accent-primary)] no-underline transition-colors duration-300 hover:text-[var(--tm-accent-secondary)] hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.vmmcae.com/
            </a>
          </div>
        </div>

        <div
          class="bg-[var(--tm-bg-primary)] rounded-3 p-6 flex items-center gap-4 border border-[var(--tm-bd-light)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--tm-shadow-card)] hover:border-[var(--tm-accent-primary)]"
        >
          <div
            class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-2.5 flex items-center justify-center text-[var(--tm-accent-primary)] flex-shrink-0"
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
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect
                x="2"
                y="9"
                width="4"
                height="12"
              ></rect>
              <circle
                cx="4"
                cy="4"
                r="2"
              ></circle>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-4.4 font-semibold text-[var(--tm-txt-primary)] mb-1">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/company/vmmc-uae"
              class="text-3.8 text-[var(--tm-accent-primary)] no-underline transition-colors duration-300 hover:text-[var(--tm-accent-secondary)] hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/company/vmmc-uae
            </a>
          </div>
        </div>

        <div
          class="bg-[var(--tm-bg-primary)] rounded-3 p-6 flex items-center gap-4 border border-[var(--tm-bd-light)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--tm-shadow-card)] hover:border-[var(--tm-accent-primary)]"
        >
          <div
            class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-2.5 flex items-center justify-center text-[var(--tm-accent-primary)] flex-shrink-0"
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
          </div>
          <div class="flex-1">
            <h3 class="text-4.4 font-semibold text-[var(--tm-txt-primary)] mb-1">Instagram</h3>
            <a
              href="https://www.instagram.com/vmmc.global"
              class="text-3.8 text-[var(--tm-accent-primary)] no-underline transition-colors duration-300 hover:text-[var(--tm-accent-secondary)] hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.instagram.com/vmmc.global
            </a>
          </div>
        </div>

        <div
          class="bg-[var(--tm-bg-primary)] rounded-3 p-6 flex items-center gap-4 border border-[var(--tm-bd-light)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--tm-shadow-card)] hover:border-[var(--tm-accent-primary)]"
        >
          <div
            class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-2.5 flex items-center justify-center text-[var(--tm-accent-primary)] flex-shrink-0"
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
                d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-4.4 font-semibold text-[var(--tm-txt-primary)] mb-1">Facebook</h3>
            <a
              href="https://www.facebook.com/profile.php?id=61579975078423"
              class="text-3.8 text-[var(--tm-accent-primary)] no-underline transition-colors duration-300 hover:text-[var(--tm-accent-secondary)] hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/profile.php?id=61579975078423
            </a>
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
  /* 背景径向渐变 */
  .bg-gradient-radial {
    background: radial-gradient(
      circle,
      var(--first-color, transparent) 0%,
      var(--second-color, transparent) 50%
    );
  }

  /* 自定义动画 */
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.5;
      transform: translate(-50%, -50%) scale(0.8);
    }
    50% {
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .animate-pulse {
    animation: pulse 3s infinite;
  }

  /* 深色模式适配 */
  .dark section {
    background: var(--tm-bg-primary);
  }

  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .bg-\[var\(--tm-bg-badge\)\] {
    background: var(--tm-bg-whiteAlpha10);
    border-color: var(--tm-bd-transparent);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .py-25 {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .text-12 {
      font-size: 2rem;
    }
    .text-5 {
      font-size: 1.1rem;
    }
    .grid-cols-\[repeat\(auto-fit\,minmax\(300px\,1fr\)\)\] {
      grid-template-columns: 1fr;
    }
    .col-span-2 {
      grid-column: span 1;
    }
    .p-7\.5 {
      padding: 24px;
    }
    .w-14 {
      width: 48px;
    }
    .h-14 {
      height: 48px;
    }
    .text-6 {
      font-size: 1.25rem;
    }
    .grid-cols-\[repeat\(auto-fit\,minmax\(350px\,1fr\)\)\] {
      grid-template-columns: 1fr;
    }
    .p-6 {
      padding: 20px;
    }
    .w-12 {
      width: 40px;
    }
    .h-12 {
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    .flex {
      flex-direction: column;
      text-align: center;
    }
    .justify-center {
      justify-content: center;
    }
  }
</style>
