<template>
  <div class="relative py-16 md:py-24 overflow-hidden">
    <!-- 背景层 -->
    <div class="absolute inset-0">
      <!-- 渐变背景 -->
      <div
        class="absolute inset-0"
        :style="{
          background: `linear-gradient(135deg, var(--tm-bg-primary) 0%, var(--tm-bg-secondary) 50%, var(--tm-bg-primary) 100%)`,
        }"
      ></div>

      <!-- 装饰性几何图形 -->
      <div
        class="absolute top-10 right-10 w-32 h-32 rounded-full opacity-10"
        :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-10"
        :style="{ backgroundColor: 'var(--tm-accent-secondary)' }"
      ></div>

      <!-- 网格装饰 -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="w-full h-full"
          style="
            background-image: radial-gradient(circle, var(--tm-txt-primary) 1px, transparent 1px);
            background-size: 20px 20px;
          "
        ></div>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <!-- 行业挑战描述 -->
        <div class="mb-12 animate-fade-in-up">
          <p
            class="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-justify"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            The aerospace and defense (A&D) industry is facing numerous challenges linked to an
            unforeseen pandemic, rapidly evolving technologies, and vulnerable supply chains. We
            help our clients push the boundaries in air and space and safeguard livelihoods through
            capabilities, technologies, and talent.
          </p>
        </div>

        <!-- 分隔线 -->
        <div class="flex justify-center mb-12 animate-fade-in-up animation-delay-200">
          <div
            class="h-0.5 w-24 rounded-full"
            :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
          ></div>
        </div>

        <!-- 方法论描述 -->
        <div class="animate-fade-in-up animation-delay-400">
          <p
            class="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-justify mb-8"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            Our approach combines a deep understanding of industry dynamics with advanced analytics
            and an unparalleled network of experts. We work with clients to build internal
            capabilities, adopt digital and analytics tools, and transform work processes to improve
            their business in substantial, sustainable ways.
          </p>
        </div>

        <!-- 专业统计数据 -->
        <div class="mt-16 flex justify-center animate-fade-in-up animation-delay-600">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div class="relative">
              <div
                class="text-3xl md:text-4xl font-light mb-2"
                :style="{ color: 'var(--tm-accent-primary)' }"
              >
                15
              </div>
              <div
                class="text-sm font-medium tracking-wider uppercase leading-tight"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                countries served
              </div>
              <!-- 分隔线 -->
              <div
                class="hidden md:block absolute right-0 top-2 bottom-2 w-px"
                :style="{ backgroundColor: 'var(--tm-bd-light)' }"
              ></div>
            </div>
            <div class="relative">
              <div
                class="text-3xl md:text-4xl font-light mb-2"
                :style="{ color: 'var(--tm-accent-primary)' }"
              >
                10
              </div>
              <div
                class="text-sm font-medium tracking-wider uppercase leading-tight"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                of the top 20 defense companies served
              </div>
              <!-- 分隔线 -->
              <div
                class="hidden md:block absolute right-0 top-2 bottom-2 w-px"
                :style="{ backgroundColor: 'var(--tm-bd-light)' }"
              ></div>
            </div>
            <div class="relative">
              <div
                class="text-3xl md:text-4xl font-light mb-2"
                :style="{ color: 'var(--tm-accent-primary)' }"
              >
                12
              </div>
              <div
                class="text-sm font-medium tracking-wider uppercase leading-tight"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                of the top 25 global aerospace companies served
              </div>
              <!-- 分隔线 -->
              <div
                class="hidden md:block absolute right-0 top-2 bottom-2 w-px"
                :style="{ backgroundColor: 'var(--tm-bd-light)' }"
              ></div>
            </div>
            <div>
              <div
                class="text-3xl md:text-4xl font-light mb-2"
                :style="{ color: 'var(--tm-accent-primary)' }"
              >
                >200
              </div>
              <div
                class="text-sm font-medium tracking-wider uppercase leading-tight"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                A&D experts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // 此组件不需要 props，内容是固定的
  // 如果需要动态内容，可以添加 props
</script>

<style scoped>
  /* 自定义动画 */
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
    animation: fade-in-up 0.8s ease-out;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
    animation-fill-mode: both;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
    animation-fill-mode: both;
  }

  /* 响应式文字调整 */
  @media (max-width: 768px) {
    .text-justify {
      text-align: left;
    }
  }
</style>
