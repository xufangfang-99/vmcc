<template>
  <div class="relative py-64px md:py-96px overflow-hidden">
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
        class="absolute top-64px right-64px w-144px h-144px rounded-full opacity-5"
        :style="{ backgroundColor: 'var(--tm-accent-secondary)' }"
      ></div>
      <div
        class="absolute bottom-80px left-64px w-80px h-80px rounded-full opacity-5"
        :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
      ></div>
    </div>

    <!-- 内容区域 -->
    <div class="relative z-10 max-w-1400px mx-auto px-16px md:px-32px">
      <!-- 标题部分 -->
      <div class="text-center mb-64px animate-fade-in-up">
        <h2
          class="text-12px font-bold tracking-wider uppercase mb-16px"
          :style="{ color: 'var(--tm-txt-light)' }"
        >
          OUR PEOPLE
        </h2>
        <div
          class="w-96px h-2px mx-auto"
          :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
        ></div>
      </div>

      <!-- 团队成员网格 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-32px lg:gap-48px mb-64px">
        <!-- 成员卡片 1 - 新加坡 -->
        <div
          class="group relative animate-fade-in-up"
          :style="{ animationDelay: '0.1s' }"
        >
          <div
            class="relative p-32px rounded-16px transition-all duration-300 hover:shadow-lg hover:scale-105"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              border: '1px solid var(--tm-bd-card)',
            }"
          >
            <!-- 头像区域 -->
            <div class="flex justify-center mb-24px">
              <div
                class="w-96px h-96px rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center overflow-hidden"
              >
                <!-- 占位头像，实际使用时可以替换为真实照片 -->
                <div class="w-64px h-64px rounded-full bg-blue-600"></div>
              </div>
            </div>

            <!-- 姓名 -->
            <h3
              class="text-20px font-semibold text-center mb-8px transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Lisa Tan
            </h3>

            <!-- 职位 -->
            <p
              class="text-14px font-medium text-center mb-16px"
              :style="{ color: 'var(--tm-accent-primary)' }"
            >
              Regional Director, Singapore
            </p>

            <!-- 描述 -->
            <p
              class="text-14px leading-relaxed text-center"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Leads strategic consulting initiatives across Asia-Pacific, specializing in aerospace
              supply chain optimization and digital transformation for manufacturing excellence in
              the region.
            </p>
          </div>
        </div>

        <!-- 成员卡片 2 - 迪拜 -->
        <div
          class="group relative animate-fade-in-up"
          :style="{ animationDelay: '0.2s' }"
        >
          <div
            class="relative p-32px rounded-16px transition-all duration-300 hover:shadow-lg hover:scale-105"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              border: '1px solid var(--tm-bd-card)',
            }"
          >
            <!-- 头像区域 -->
            <div class="flex justify-center mb-24px">
              <div
                class="w-96px h-96px rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center overflow-hidden"
              >
                <!-- 占位头像 -->
                <div class="w-64px h-64px rounded-full bg-amber-600"></div>
              </div>
            </div>

            <!-- 姓名 -->
            <h3
              class="text-20px font-semibold text-center mb-8px transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Ahmed Al-Rashid
            </h3>

            <!-- 职位 -->
            <p
              class="text-14px font-medium text-center mb-16px"
              :style="{ color: 'var(--tm-accent-primary)' }"
            >
              Senior Partner, Dubai
            </p>

            <!-- 描述 -->
            <p
              class="text-14px leading-relaxed text-center"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Advises aerospace and defense companies across Middle East and Africa on strategic
              transformations, operational excellence, and market expansion initiatives in emerging
              technologies.
            </p>
          </div>
        </div>

        <!-- 成员卡片 3 - 马来西亚 -->
        <div
          class="group relative animate-fade-in-up md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0"
          :style="{ animationDelay: '0.3s' }"
        >
          <div
            class="relative p-32px rounded-16px transition-all duration-300 hover:shadow-lg hover:scale-105"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              border: '1px solid var(--tm-bd-card)',
            }"
          >
            <!-- 头像区域 -->
            <div class="flex justify-center mb-24px">
              <div
                class="w-96px h-96px rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 flex items-center justify-center overflow-hidden"
              >
                <!-- 占位头像 -->
                <div class="w-64px h-64px rounded-full bg-emerald-600"></div>
              </div>
            </div>

            <!-- 姓名 -->
            <h3
              class="text-20px font-semibold text-center mb-8px transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              Priya Krishnan
            </h3>

            <!-- 职位 -->
            <p
              class="text-14px font-medium text-center mb-16px"
              :style="{ color: 'var(--tm-accent-primary)' }"
            >
              Principal Consultant, Kuala Lumpur
            </p>

            <!-- 描述 -->
            <p
              class="text-14px leading-relaxed text-center"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Specializes in aerospace manufacturing optimization, Industry 4.0 implementations, and
              sustainable aviation technologies for Southeast Asian markets and global supply
              chains.
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
          class="group relative inline-flex items-center justify-center px-32px py-16px rounded-8px border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          :style="{
            borderColor: 'var(--tm-accent-primary)',
            color: 'var(--tm-accent-primary)',
            backgroundColor: 'transparent',
          }"
        >
          <!-- 背景渐变效果 -->
          <div
            class="absolute inset-0 rounded-8px opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
          ></div>

          <!-- 按钮文字 -->
          <span class="relative text-16px font-medium tracking-wide">More people</span>

          <!-- 箭头图标 -->
          <div
            class="relative ml-12px transition-transform duration-300 group-hover:translate-x-4px"
          >
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
