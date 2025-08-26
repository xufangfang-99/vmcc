<template>
  <div class="relative py-16 md:py-24 overflow-hidden">
    <!-- 背景层 -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0"
        :style="{
          background: `linear-gradient(160deg, var(--tm-bg-secondary) 0%, var(--tm-bg-primary) 40%, var(--tm-bg-secondary) 100%)`,
        }"
      ></div>

      <!-- 装饰元素 -->
      <div
        class="absolute top-16 right-16 w-36 h-36 rounded-full opacity-5"
        :style="{ backgroundColor: 'var(--tm-accent-secondary)' }"
      ></div>
      <div
        class="absolute bottom-20 left-16 w-20 h-20 rounded-full opacity-5"
        :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
      ></div>
    </div>

    <!-- 内容区域 -->
    <div class="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
      <!-- 标题部分 -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2
          class="text-xs font-bold tracking-wider uppercase mb-4"
          :style="{ color: 'var(--tm-txt-light)' }"
        >
          OUR PEOPLE
        </h2>
        <div
          class="w-24 h-0.5 mx-auto"
          :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
        ></div>
      </div>

      <!-- 团队成员网格 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
        <!-- 成员卡片 1 -->
        <div
          class="group relative animate-fade-in-up"
          :style="{ animationDelay: '0.1s' }"
        >
          <div
            class="relative p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              border: '1px solid var(--tm-bd-card)',
            }"
          >
            <!-- 头像区域 -->
            <div class="flex justify-center mb-6">
              <div
                class="w-24 h-24 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center overflow-hidden"
              >
                <!-- 占位头像，实际使用时可以替换为真实照片 -->
                <div class="w-16 h-16 rounded-full bg-gray-500"></div>
              </div>
            </div>

            <!-- 姓名 -->
            <h3
              class="text-xl font-semibold text-center mb-2 transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Michael Chen
            </h3>

            <!-- 职位 -->
            <p
              class="text-sm font-medium text-center mb-4"
              :style="{ color: 'var(--tm-accent-primary)' }"
            >
              Senior Partner, Dubai
            </p>

            <!-- 描述 -->
            <p
              class="text-sm leading-relaxed text-center"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Advises aerospace, defense, and advanced manufacturing companies on strategic
              transformations, operational excellence, and digital innovation initiatives across the
              Middle East region.
            </p>
          </div>
        </div>

        <!-- 成员卡片 2 -->
        <div
          class="group relative animate-fade-in-up"
          :style="{ animationDelay: '0.2s' }"
        >
          <div
            class="relative p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              border: '1px solid var(--tm-bd-card)',
            }"
          >
            <!-- 头像区域 -->
            <div class="flex justify-center mb-6">
              <div
                class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center overflow-hidden"
              >
                <!-- 占位头像 -->
                <div class="w-16 h-16 rounded-full bg-blue-500"></div>
              </div>
            </div>

            <!-- 姓名 -->
            <h3
              class="text-xl font-semibold text-center mb-2 transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Sarah Williams
            </h3>

            <!-- 职位 -->
            <p
              class="text-sm font-medium text-center mb-4"
              :style="{ color: 'var(--tm-accent-primary)' }"
            >
              Partner, London
            </p>

            <!-- 描述 -->
            <p
              class="text-sm leading-relaxed text-center"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Drives strategic and operational performance transformations to help advanced
              industrial and aerospace companies improve efficiency, growth, and market
              competitiveness.
            </p>
          </div>
        </div>

        <!-- 成员卡片 3 -->
        <div
          class="group relative animate-fade-in-up md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0"
          :style="{ animationDelay: '0.3s' }"
        >
          <div
            class="relative p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              border: '1px solid var(--tm-bd-card)',
            }"
          >
            <!-- 头像区域 -->
            <div class="flex justify-center mb-6">
              <div
                class="w-24 h-24 rounded-full bg-gradient-to-br from-green-300 to-green-400 flex items-center justify-center overflow-hidden"
              >
                <!-- 占位头像 -->
                <div class="w-16 h-16 rounded-full bg-green-500"></div>
              </div>
            </div>

            <!-- 姓名 -->
            <h3
              class="text-xl font-semibold text-center mb-2 transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              David Rodriguez
            </h3>

            <!-- 职位 -->
            <p
              class="text-sm font-medium text-center mb-4"
              :style="{ color: 'var(--tm-accent-primary)' }"
            >
              Senior Associate, New York
            </p>

            <!-- 描述 -->
            <p
              class="text-sm leading-relaxed text-center"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Specializes in cybersecurity, digital transformation, and technology integration for
              defense contractors and aerospace manufacturers in North America.
            </p>
          </div>
        </div>
      </div>

      <!-- More People 按钮 -->
      <div
        class="flex justify-center animate-fade-in-up"
        :style="{ animationDelay: '0.5s' }"
      >
        <NuxtLink
          to="/industries/aerospace-defense/our-people"
          class="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          :style="{
            borderColor: 'var(--tm-accent-primary)',
            color: 'var(--tm-accent-primary)',
            backgroundColor: 'transparent',
          }"
        >
          <!-- 背景渐变效果 -->
          <div
            class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
          ></div>

          <!-- 按钮文字 -->
          <span class="relative text-base font-medium tracking-wide">More people</span>

          <!-- 箭头图标 -->
          <div class="relative ml-3 transition-transform duration-300 group-hover:translate-x-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }
</style>
