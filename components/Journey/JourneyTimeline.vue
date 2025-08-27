<template>
  <section class="py-80px bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-200 h-200 opacity-10 pointer-events-none"
    >
      <div
        class="w-full h-full bg-gradient-radial from-[var(--tm-bg-heroGradient-from)] to-transparent"
      ></div>
    </div>

    <div class="max-w-1200px mx-auto px-20px relative z-1">
      <!-- 标题 -->
      <div class="text-center mb-60px">
        <h2 class="text-3xl lg:text-5xl font-light text-[var(--tm-txt-primary)] mb-30px">
          Milestones of Growth
        </h2>
        <p class="text-lg text-[var(--tm-txt-secondary)] max-w-700px mx-auto">
          Witness our evolution from a startup in Singapore to a leading comprehensive human
          resources consultancy across Asia-Pacific and Middle East
        </p>
      </div>

      <!-- 时间线容器 -->
      <div class="timeline-container relative">
        <!-- 中央垂直线 -->
        <div
          class="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] transform -translate-x-1/2 hidden md:block"
        ></div>

        <!-- 移动端左侧线 -->
        <div
          class="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] md:hidden"
        ></div>

        <!-- 时间线项目 -->
        <div class="space-y-60px">
          <!-- 2024 -->
          <div class="timeline-item flex items-center relative">
            <!-- 移动端节点 -->
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <!-- 桌面端左侧（年份） -->
            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div class="text-right">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2024</div>
              </div>
            </div>

            <!-- 桌面端中央节点 -->
            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
            </div>

            <!-- 内容区域 -->
            <div class="pl-20 md:pl-40px md:w-1/2">
              <!-- 移动端年份 -->
              <div class="md:hidden mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2024
                </span>
              </div>

              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Global Brand Launch
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Official global brand launch, reinforcing our position as a leading international
                  HR consultancy
                </p>
              </div>
            </div>
          </div>

          <!-- 2023 -->
          <div class="timeline-item flex items-center relative">
            <!-- 移动端节点 -->
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <!-- 桌面端左侧（内容） -->
            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Candidates Database Crosses 1.2 Million
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Our comprehensive talent database reached 1.2 million qualified candidates
                </p>
              </div>
            </div>

            <!-- 桌面端中央节点 -->
            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                ></path>
              </svg>
            </div>

            <!-- 桌面端右侧（年份） -->
            <div class="hidden md:flex w-1/2 justify-start pl-40px">
              <div class="text-left">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2023</div>
              </div>
            </div>

            <!-- 移动端内容 -->
            <div class="md:hidden pl-20">
              <div class="mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2023
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Candidates Database Crosses 1.2 Million
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Our comprehensive talent database reached 1.2 million qualified candidates
                </p>
              </div>
            </div>
          </div>

          <!-- 2022 -->
          <div class="timeline-item flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div class="text-right">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2022</div>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

            <div class="pl-20 md:pl-40px md:w-1/2">
              <div class="md:hidden mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2022
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Dubai Office Launch
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC opened its 7th office in Dubai, UAE, establishing our presence in the Middle
                  East
                </p>
              </div>
            </div>
          </div>

          <!-- 2021 -->
          <div class="timeline-item flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Corporate Client Base Reaches 100K
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Achieved milestone with corporate client base reaching 100,000 companies
                </p>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
            </div>

            <div class="hidden md:flex w-1/2 justify-start pl-40px">
              <div class="text-left">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2021</div>
              </div>
            </div>

            <div class="md:hidden pl-20">
              <div class="mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2021
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Corporate Client Base Reaches 100K
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Achieved milestone with corporate client base reaching 100,000 companies
                </p>
              </div>
            </div>
          </div>

          <!-- 2020 -->
          <div class="timeline-item flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div class="text-right">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2020</div>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

            <div class="pl-20 md:pl-40px md:w-1/2">
              <div class="md:hidden mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2020
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Internship Program Initiative
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC initiated comprehensive internship program to nurture future talent
                </p>
              </div>
            </div>
          </div>

          <!-- 2019 -->
          <div class="timeline-item flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Chengdu & Shenzhen Expansion
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC opened 5th and 6th offices in Chengdu and Shenzhen, China
                </p>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
              </svg>
            </div>

            <div class="hidden md:flex w-1/2 justify-start pl-40px">
              <div class="text-left">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2019</div>
              </div>
            </div>

            <div class="md:hidden pl-20">
              <div class="mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2019
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Chengdu & Shenzhen Expansion
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC opened 5th and 6th offices in Chengdu and Shenzhen, China
                </p>
              </div>
            </div>
          </div>

          <!-- 2018 - 现在使用统一布局 -->
          <div class="timeline-item flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div class="text-right">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2018</div>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>

            <div class="pl-20 md:pl-40px md:w-1/2">
              <div class="md:hidden mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2018
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Platform Launch Year
                </h3>
                <div class="text-sm text-[var(--tm-txt-secondary)] space-y-1">
                  <p>• Data recruitment management platform launch</p>
                  <p>• 100+ company partnerships established</p>
                  <p>• 99% customer satisfaction rate achieved</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 2017 -->
          <div class="timeline-item flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Beijing Office Opening
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC opened its 4th office in Beijing, China
                </p>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
              </svg>
            </div>

            <div class="hidden md:flex w-1/2 justify-start pl-40px">
              <div class="text-left">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2017</div>
              </div>
            </div>

            <div class="md:hidden pl-20">
              <div class="mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2017
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Beijing Office Opening
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC opened its 4th office in Beijing, China
                </p>
              </div>
            </div>
          </div>

          <!-- 2016 -->
          <div class="timeline-item flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div class="text-right">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2016</div>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>

            <div class="pl-20 md:pl-40px md:w-1/2">
              <div class="md:hidden mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2016
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Digital Consulting Services
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Starting corporate organizational development and human resources digital
                  consulting
                </p>
              </div>
            </div>
          </div>

          <!-- 2015 -->
          <div class="timeline-item flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-right"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Shanghai Office Established
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC opened its 3rd office in Shanghai, China
                </p>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
              </svg>
            </div>

            <div class="hidden md:flex w-1/2 justify-start pl-40px">
              <div class="text-left">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2015</div>
              </div>
            </div>

            <div class="md:hidden pl-20">
              <div class="mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2015
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Shanghai Office Established
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC opened its 3rd office in Shanghai, China
                </p>
              </div>
            </div>
          </div>

          <!-- 2013 -->
          <div class="timeline-item flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div class="text-right">
                <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">2013</div>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

            <div class="pl-20 md:pl-40px md:w-1/2">
              <div class="md:hidden mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2013
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border border-[var(--tm-bd-light)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Malaysia Office Launch
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC opened 2nd office in Kuala Lumpur, Malaysia & Cross-border talent transfer
                </p>
              </div>
            </div>
          </div>

          <!-- 2010 - 起点 -->
          <div class="timeline-item timeline-origin flex items-center relative">
            <div
              class="md:hidden absolute left-8 w-4 h-4 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-full border-4 border-[var(--tm-bg-secondary)] transform -translate-x-1/2 z-10"
            ></div>

            <div class="hidden md:flex w-1/2 justify-end pr-40px">
              <div class="text-right">
                <div class="text-4xl font-bold text-[var(--tm-accent-secondary)] mb-2">2010</div>
                <div class="text-sm text-[var(--tm-txt-secondary)]">The Beginning</div>
              </div>
            </div>

            <div
              class="hidden md:flex absolute left-1/2 w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-full border-4 border-[var(--tm-bg-secondary)] items-center justify-center shadow-lg transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>

            <div class="pl-20 md:pl-40px md:w-1/2">
              <div class="md:hidden mb-3">
                <span
                  class="bg-gradient-to-r from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  2010
                </span>
              </div>
              <div
                class="bg-[var(--tm-bg-primary)] rounded-lg p-6 border-2 border-[var(--tm-accent-secondary)] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3
                  class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2 flex items-center gap-2"
                >
                  <svg
                    class="w-5 h-5 text-[var(--tm-accent-secondary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    ></path>
                  </svg>
                  The Beginning - Singapore Office
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  VMMC opened its first office in Singapore, marking the start of our journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 时间线组件逻辑
</script>

<style>
  /* 背景径向渐变 */
  .bg-gradient-radial {
    background: radial-gradient(circle, var(--tm-bg-heroGradient-from) 0%, transparent 70%);
  }

  /* 时间线项目入场动画 */
  .timeline-item {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .timeline-item:nth-child(1) {
    animation-delay: 0.1s;
  }
  .timeline-item:nth-child(2) {
    animation-delay: 0.2s;
  }
  .timeline-item:nth-child(3) {
    animation-delay: 0.3s;
  }
  .timeline-item:nth-child(4) {
    animation-delay: 0.4s;
  }
  .timeline-item:nth-child(5) {
    animation-delay: 0.5s;
  }
  .timeline-item:nth-child(6) {
    animation-delay: 0.6s;
  }
  .timeline-item:nth-child(7) {
    animation-delay: 0.7s;
  }
  .timeline-item:nth-child(8) {
    animation-delay: 0.8s;
  }
  .timeline-item:nth-child(9) {
    animation-delay: 0.9s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 深色模式适配 */
  .dark section {
    background: var(--tm-bg-primary);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .py-80px {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .mb-60px {
      margin-bottom: 40px;
    }

    .space-y-60px > * + * {
      margin-top: 40px;
    }

    .text-3xl {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .pl-20 {
      padding-left: 4rem;
    }
  }
</style>
