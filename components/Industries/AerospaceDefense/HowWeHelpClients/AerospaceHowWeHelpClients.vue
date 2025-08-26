<template>
  <div class="relative py-16 md:py-24 overflow-hidden">
    <!-- 背景层 -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0"
        :style="{
          background: `linear-gradient(180deg, var(--tm-bg-secondary) 0%, var(--tm-bg-primary) 50%, var(--tm-bg-secondary) 100%)`,
        }"
      ></div>

      <!-- 装饰元素 -->
      <div
        class="absolute top-20 left-10 w-40 h-40 rounded-full opacity-5"
        :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
      ></div>
      <div
        class="absolute bottom-10 right-20 w-28 h-28 rounded-full opacity-5"
        :style="{ backgroundColor: 'var(--tm-accent-secondary)' }"
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
          HOW WE HELP CLIENTS
        </h2>
        <div
          class="w-24 h-0.5 mx-auto"
          :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
        ></div>
      </div>

      <!-- 服务网格 -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <!-- 第一行 -->
        <div class="space-y-8">
          <!-- Aftermarket & Services -->
          <div
            class="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg animate-fade-in-up"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              borderColor: 'var(--tm-bd-card)',
            }"
          >
            <div class="flex items-start justify-between mb-4">
              <h3
                class="text-xl font-semibold group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Aftermarket & Services
              </h3>
              <div
                class="w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-300"
                :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Helping clients capture the aftermarket potential—the largest source of untapped value
              in aerospace and defense—by assessing the installed base opportunity, improving
              pricing, and optimizing operations.
            </p>
          </div>

          <!-- M&A -->
          <div
            class="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-200"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              borderColor: 'var(--tm-bd-card)',
            }"
          >
            <div class="flex items-start justify-between mb-4">
              <h3
                class="text-xl font-semibold group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                M&A
              </h3>
              <div
                class="w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-300"
                :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Working in partnership with aerospace and defense clients to develop unique strategies
              for evaluating potential targets, capturing value, and navigating the complex
              integration process.
            </p>
          </div>
        </div>

        <!-- 第二行 -->
        <div class="space-y-8">
          <!-- Digital & Analytics -->
          <div
            class="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-100"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              borderColor: 'var(--tm-bd-card)',
            }"
          >
            <div class="flex items-start justify-between mb-4">
              <h3
                class="text-xl font-semibold group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Digital & Analytics
              </h3>
              <div
                class="w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-300"
                :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Helping clients tackle digital challenges and build sustainable, scalable solutions
              tailored to the A&D industry.
            </p>
          </div>

          <!-- Marketing & Sales -->
          <div
            class="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-300"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              borderColor: 'var(--tm-bd-card)',
            }"
          >
            <div class="flex items-start justify-between mb-4">
              <h3
                class="text-xl font-semibold group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Marketing & Sales
              </h3>
              <div
                class="w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-300"
                :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Helping A&D companies develop effective strategies for winning contracts with critical
              customers, contributing to stronger growth.
            </p>
          </div>
        </div>
      </div>

      <!-- 第二行服务 -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 mt-8">
        <div class="space-y-8">
          <!-- Next-Generation Productivity -->
          <div
            class="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-400"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              borderColor: 'var(--tm-bd-card)',
            }"
          >
            <div class="flex items-start justify-between mb-4">
              <h3
                class="text-xl font-semibold group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Next-Generation Productivity
              </h3>
              <div
                class="w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-300"
                :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Helping clients build the tech-enabled capabilities required to identify and capture a
              step change in profitability.
            </p>
          </div>

          <!-- Talent & Capability Building -->
          <div
            class="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-600"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              borderColor: 'var(--tm-bd-card)',
            }"
          >
            <div class="flex items-start justify-between mb-4">
              <h3
                class="text-xl font-semibold group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Talent & Capability Building
              </h3>
              <div
                class="w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-300"
                :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Helping A&D organizations create the right culture for their people, design the right
              structure, and attract and retain the right talent.
            </p>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Strategy & Corporate Finance -->
          <div
            class="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-500"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              borderColor: 'var(--tm-bd-card)',
            }"
          >
            <div class="flex items-start justify-between mb-4">
              <h3
                class="text-xl font-semibold group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Strategy & Corporate Finance
              </h3>
              <div
                class="w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-300"
                :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Helping aerospace and defense companies achieve their strategic goals in a complex,
              competitive, and evolving landscape.
            </p>
          </div>

          <!-- Transformation -->
          <div
            class="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-700"
            :style="{
              backgroundColor: 'var(--tm-bg-card)',
              borderColor: 'var(--tm-bd-card)',
            }"
          >
            <div class="flex items-start justify-between mb-4">
              <h3
                class="text-xl font-semibold group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Transformation
              </h3>
              <div
                class="w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-300"
                :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
              ></div>
            </div>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              Changing trajectories through holistic interventions in performance, capabilities, and
              health.
            </p>
          </div>
        </div>
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
    animation: fade-in-up 0.8s ease-out;
  }

  .animation-delay-100 {
    animation-delay: 0.1s;
    animation-fill-mode: both;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }

  .animation-delay-300 {
    animation-delay: 0.3s;
    animation-fill-mode: both;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
    animation-fill-mode: both;
  }

  .animation-delay-500 {
    animation-delay: 0.5s;
    animation-fill-mode: both;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
    animation-fill-mode: both;
  }

  .animation-delay-700 {
    animation-delay: 0.7s;
    animation-fill-mode: both;
  }
</style>
