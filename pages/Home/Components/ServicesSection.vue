<template>
  <section class="relative overflow-hidden">
    <div
      class="services-section"
      :style="{
        backgroundColor: 'var(--tm-bg-primary)',
        transition: 'all 0.3s ease',
      }"
    >
      <div class="pb-10">
        <!-- 背景装饰 -->
        <div class="absolute inset-0 opacity-5">
          <div
            class="absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl"
            :style="{ backgroundColor: 'var(--tm-pri-0)', opacity: 0.3 }"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl"
            :style="{ backgroundColor: 'var(--tm-bg-gradient-to)', opacity: 0.3 }"
          ></div>
        </div>

        <div class="relative z-10 container max-w-7xl mx-auto px-6">
          <!-- 标题区域 - 添加半圆效果 -->
          <div class="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <!-- 半圆装饰背景容器 -->
            <div class="relative">
              <!-- 大的半圆背景 - 减小高度 -->
              <div
                class="absolute left-1/2 -translate-x-1/2 -top-20 lg:-top-24 w-[400px] lg:w-[600px] h-40 lg:h-48"
              >
                <!-- 主半圆 - 更透明的背景 -->
                <div
                  class="absolute inset-0 rounded-b-[200px] lg:rounded-b-[300px]"
                  :style="{
                    background: `linear-gradient(to right, var(--tm-bg-accent-light), var(--tm-bg-accent))`,
                    opacity: 0.03,
                  }"
                ></div>

                <!-- 动态半圆层 - 更透明 -->
                <div
                  class="absolute inset-2 rounded-b-[180px] lg:rounded-b-[280px] animate-pulse"
                  :style="{
                    background: `linear-gradient(to right, var(--tm-pri-0), var(--tm-bg-gradient-to))`,
                    opacity: 0.05,
                  }"
                ></div>
                <div
                  class="absolute inset-4 rounded-b-[160px] lg:rounded-b-[260px] animate-pulse animation-delay-300"
                  :style="{
                    background: `linear-gradient(to right, var(--tm-pri-0), var(--tm-bg-gradient-to))`,
                    opacity: 0.07,
                  }"
                ></div>
                <div
                  class="absolute inset-6 rounded-b-[140px] lg:rounded-b-[240px] animate-pulse animation-delay-600"
                  :style="{
                    background: `linear-gradient(to right, var(--tm-pri-1), var(--tm-bg-gradient-to))`,
                    opacity: 0.09,
                  }"
                ></div>

                <!-- 标签按钮 - 文字完全不透明 -->
                <div class="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2">
                  <span
                    class="relative inline-block text-white text-2xl lg:text-3xl font-thin tracking-widest transition-all duration-300 hover:scale-105 cursor-pointer"
                    :style="{
                      textShadow: '0 2px 20px rgba(255, 255, 255, 0.3)',
                    }"
                  >
                    我们的服务
                  </span>
                </div>
              </div>

              <!-- 占位空间 - 减小高度 -->
              <div class="pt-32 lg:pt-40"></div>
            </div>

            <!-- 主标题 -->
            <h2
              class="text-4xl lg:text-5xl font-bold mb-6 relative group cursor-default"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              <span class="relative">
                全方位的
                <span class="relative inline-block">
                  <span
                    class="relative z-10 transition-all duration-300"
                    :style="{ color: 'var(--tm-txt-accent)' }"
                  >
                    人才解决方案
                  </span>
                  <!-- 下划线动画 -->
                  <span
                    class="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    :style="{
                      background: `linear-gradient(to right, var(--tm-pri-0), var(--tm-bg-gradient-to))`,
                    }"
                  ></span>
                </span>
              </span>
            </h2>

            <!-- 描述文字 -->
            <p
              class="text-xl leading-relaxed relative overflow-hidden group"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              <span class="relative z-10">
                凭借深厚的行业洞察和专业能力，我们为企业提供定制化的人才战略服务，
                <br class="hidden lg:block" />
                助力组织实现可持续发展
              </span>
              <!-- 文字悬停渐变效果 -->
              <span
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                :style="{
                  background: isDark
                    ? `linear-gradient(to right, var(--tm-bg-accent-light), var(--tm-bg-accent))`
                    : `linear-gradient(to right, var(--tm-bg-accent-light), var(--tm-bg-accent))`,
                }"
              ></span>
            </p>

            <!-- 装饰性动态元素 -->
            <div class="relative mt-8 flex justify-center gap-4">
              <div
                class="w-2 h-2 rounded-full animate-bounce"
                :style="{ backgroundColor: 'var(--tm-pri-0)' }"
              ></div>
              <div
                class="w-2 h-2 rounded-full animate-bounce animation-delay-200"
                :style="{ backgroundColor: 'var(--tm-bg-gradient-to)' }"
              ></div>
              <div
                class="w-2 h-2 rounded-full animate-bounce animation-delay-400"
                :style="{ backgroundColor: 'var(--tm-pri-1)' }"
              ></div>
            </div>
          </div>

          <!-- 服务展示 - 保持原有的2-3-1布局 -->
          <div class="space-y-8 lg:space-y-12">
            <!-- 第一行：2个服务 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div
                v-for="service in services.slice(0, 2)"
                :key="service.id"
                class="service-card-wrapper group relative rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 overflow-hidden"
                :style="{
                  backgroundColor: 'var(--tm-bg-card)',
                  border: '1px solid var(--tm-bd-card)',
                }"
              >
                <!-- 右上角动画装饰 -->
                <div
                  class="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 blur-3xl"
                  :style="{
                    background: `linear-gradient(to bottom right, var(--tm-bg-accent-light), var(--tm-bg-accent))`,
                    opacity: 0.2,
                  }"
                ></div>

                <!-- 序号 - 响应式定位和大小 -->
                <span
                  class="service-number absolute top-4 right-4 md:top-8 md:right-8 text-7xl md:text-6xl font-bold transition-colors"
                  :style="{
                    color: isDark ? 'var(--tm-txt-disabled)' : 'var(--tm-bd-light)',
                    opacity: 0.3,
                  }"
                >
                  0{{ service.id }}
                </span>

                <!-- 服务内容 - 响应式布局 -->
                <div class="service-content">
                  <!-- 图标 -->
                  <div class="service-icon-wrapper relative z-10">
                    <div
                      class="service-icon w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300"
                      :style="{
                        background: `linear-gradient(to bottom right, var(--tm-pri-0), var(--tm-pri-1))`,
                      }"
                    >
                      <svg
                        v-if="service.icon === 'magnifying-glass'"
                        class="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <svg
                        v-else-if="service.icon === 'cube-transparent'"
                        class="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                  </div>

                  <!-- 文本内容 -->
                  <div class="service-text-content relative z-10">
                    <!-- 标题 -->
                    <h3
                      class="service-title text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 transition-colors"
                      :style="{
                        color: 'var(--tm-txt-primary)',
                      }"
                    >
                      {{ service.title }}
                    </h3>

                    <!-- 描述 -->
                    <p
                      class="service-description mb-4 md:mb-6 text-sm md:text-base leading-relaxed"
                      :style="{ color: 'var(--tm-txt-secondary)' }"
                    >
                      {{ service.description }}
                    </p>

                    <!-- 特性列表 -->
                    <ul class="service-features space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <li
                        v-for="(feature, idx) in service.features"
                        :key="idx"
                        class="flex items-center text-sm md:text-base"
                        :style="{ color: 'var(--tm-txt-light)' }"
                      >
                        <div
                          class="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0"
                        >
                          <div
                            class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                            :style="{ backgroundColor: 'var(--tm-pri-0)' }"
                          ></div>
                          <div
                            class="hidden md:block absolute w-6 h-6 rounded-full animate-ping"
                            :style="{ backgroundColor: 'var(--tm-bg-accent-light)', opacity: 0.3 }"
                          ></div>
                        </div>
                        <span>{{ feature }}</span>
                      </li>
                    </ul>

                    <!-- 链接 -->
                    <NuxtLink
                      :to="service.link"
                      class="service-link inline-flex items-center font-semibold text-sm md:text-base transition-colors group"
                      :style="{
                        color: 'var(--tm-txt-accent)',
                      }"
                    >
                      了解更多
                      <div
                        class="i-heroicons-arrow-right w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                      ></div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- 第二行：3个服务 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                v-for="service in services.slice(2, 5)"
                :key="service.id"
                class="service-card-wrapper service-card-row2 group relative rounded-2xl p-6 md:p-8 transition-all duration-300 overflow-hidden"
                :style="{
                  backgroundColor: 'var(--tm-bg-card)',
                  border: '1px solid var(--tm-bd-card)',
                }"
              >
                <!-- 右上角动画装饰 -->
                <div
                  class="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 blur-3xl"
                  :style="{
                    background: `linear-gradient(to bottom right, var(--tm-bg-gradient-to), var(--tm-bg-accent))`,
                    opacity: 0.2,
                  }"
                ></div>

                <!-- 服务内容 -->
                <div class="service-content">
                  <!-- 图标 -->
                  <div class="service-icon-wrapper">
                    <div
                      class="service-icon w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300"
                      :style="{
                        background: `linear-gradient(to bottom right, var(--tm-bg-gradient-to), var(--tm-pri-1))`,
                      }"
                    >
                      <svg
                        v-if="service.icon === 'user-group'"
                        class="w-6 h-6 md:w-8 md:h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <svg
                        v-else-if="service.icon === 'chart-bar'"
                        class="w-6 h-6 md:w-8 md:h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <svg
                        v-else-if="service.icon === 'globe-asia-australia'"
                        class="w-6 h-6 md:w-8 md:h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <!-- 文本内容 -->
                  <div class="service-text-content">
                    <!-- 标题 -->
                    <h3
                      class="service-title-row2 text-lg md:text-xl font-bold mb-3 transition-colors"
                      :style="{
                        color: 'var(--tm-txt-primary)',
                      }"
                    >
                      {{ service.title }}
                    </h3>

                    <!-- 描述 -->
                    <p
                      class="service-description mb-4 text-sm leading-relaxed"
                      :style="{ color: 'var(--tm-txt-secondary)' }"
                    >
                      {{ service.description }}
                    </p>

                    <!-- 链接 -->
                    <NuxtLink
                      :to="service.link"
                      class="service-link-row2 inline-flex items-center font-semibold text-sm transition-colors group"
                      :style="{
                        color: 'var(--tm-bg-gradient-to)',
                      }"
                    >
                      探索服务
                      <div
                        class="i-heroicons-arrow-right w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
                      ></div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- 第三行：1个突出服务 -->
            <div class="max-w-4xl mx-auto">
              <div
                class="group relative rounded-2xl p-8 lg:p-12 text-white overflow-hidden"
                :style="{
                  background: `linear-gradient(135deg, var(--tm-pri-1) 0%, var(--tm-pri-2) 60%, var(--tm-pri-1) 100%)`,
                }"
              >
                <!-- 右上角动画装饰 -->
                <div
                  class="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 blur-3xl"
                  :style="{
                    backgroundColor: 'var(--tm-bg-white-alpha10)',
                  }"
                ></div>

                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <!-- 左侧内容 -->
                  <div>
                    <!-- 手机端：图标和标题横向排列 -->
                    <div class="flex items-center gap-4 mb-6 lg:block">
                      <div
                        class="w-16 h-16 lg:w-20 lg:h-20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 lg:mb-6"
                        :style="{
                          backgroundColor: 'var(--tm-bg-white-alpha20)',
                        }"
                      >
                        <svg
                          class="w-8 h-8 lg:w-10 lg:h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <h3 class="text-2xl lg:text-3xl font-bold lg:mb-4">
                        {{ services[5].title }}
                      </h3>
                    </div>

                    <p
                      class="mb-6 text-lg leading-relaxed"
                      :style="{ color: 'var(--tm-txt-white-alpha90)' }"
                    >
                      {{ services[5].description }}
                    </p>
                    <NuxtLink
                      :to="services[5].link"
                      class="cta-button inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all group"
                    >
                      开始咨询
                      <div
                        class="i-heroicons-arrow-right w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                      ></div>
                    </NuxtLink>
                  </div>

                  <!-- 右侧特性 -->
                  <div class="space-y-4">
                    <div
                      v-for="(feature, idx) in services[5].features"
                      :key="idx"
                      class="flex items-start feature-item"
                    >
                      <!-- 装饰图标容器 -->
                      <div class="relative w-10 h-10 mr-4 mt-1 flex-shrink-0">
                        <!-- 背景渐变圆 -->
                        <div
                          class="feature-icon-bg absolute inset-0 rounded-xl backdrop-blur-sm transition-all duration-300"
                        ></div>
                        <!-- 序号或图标 -->
                        <div class="relative w-full h-full flex items-center justify-center">
                          <span
                            class="font-bold text-sm"
                            :style="{ color: 'var(--tm-txt-white-alpha90)' }"
                          >
                            {{ idx + 1 }}
                          </span>
                        </div>
                        <!-- 装饰光效 -->
                        <div
                          class="feature-glow absolute -inset-1 rounded-xl blur-sm opacity-0 transition-opacity duration-300"
                          :style="{ backgroundColor: 'var(--tm-bg-white-alpha20)' }"
                        ></div>
                      </div>

                      <div>
                        <h4 class="font-semibold mb-1 text-white transition-colors">
                          {{ feature }}
                        </h4>
                        <p
                          class="feature-subtitle text-sm transition-colors"
                          :style="{
                            color: 'var(--tm-txt-white-alpha70)',
                          }"
                        >
                          为您的企业量身定制最优解决方案
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useTheme } from '~/composables/useTheme'

  const theme = useTheme()
  const isDark = computed(() => theme.isDark)

  const services = ref([
    {
      id: 1,
      icon: 'magnifying-glass',
      title: '高管猎头服务',
      description:
        '凭借全球视野和深厚的行业资源，为企业精准匹配C级高管和核心领导团队，确保人才与企业文化的高度契合。',
      features: ['全球人才网络', '深度背景调查', '文化匹配评估'],
      link: '/services/executive-search',
    },
    {
      id: 2,
      icon: 'cube-transparent',
      title: '人力资源外包',
      description:
        '提供端到端的HR外包解决方案，从薪酬福利管理到合规性保障，让您的团队专注于战略性工作。',
      features: ['薪酬福利管理', '合规性保障', 'HR系统集成'],
      link: '/services/hr-outsourcing',
    },
    {
      id: 3,
      icon: 'user-group',
      title: '灵活用工方案',
      description: '快速响应业务需求变化，提供专业的人才派遣和项目外包服务。',
      features: ['快速部署', '技能匹配', '成本优化'],
      link: '/services/flexible-staffing',
    },
    {
      id: 4,
      icon: 'chart-bar',
      title: '组织效能提升',
      description: '通过科学的组织诊断和变革管理，帮助企业构建高效能团队。',
      features: ['组织诊断', '变革管理', '团队建设'],
      link: '/services/organizational',
    },
    {
      id: 5,
      icon: 'globe-asia-australia',
      title: '全球化业务支持',
      description: '为企业国际化发展提供全方位支持，包括跨境合规和文化整合。',
      features: ['跨境合规', '文化培训', '本地化支持'],
      link: '/services/global',
    },
    {
      id: 6,
      icon: 'light-bulb',
      title: '人才战略咨询',
      description:
        '基于数据驱动的洞察，为企业制定前瞻性的人才战略，构建可持续的竞争优势。我们的专家团队将深入了解您的业务需求，提供定制化的解决方案。',
      features: ['人才规划', '继任计划', '能力建设', '数字化转型'],
      link: '/services/strategic-consulting',
    },
  ])
</script>

<style scoped>
  /* 服务卡片悬停效果 */
  .service-card-wrapper:hover {
    background-color: var(--tm-bg-hover) !important;
    box-shadow: var(--tm-shadow-hover);
    transform: translateY(-5px);
  }

  /* 服务标题悬停效果 */
  .service-title:hover {
    color: var(--tm-txt-accent) !important;
  }

  /* 服务链接悬停效果 */
  .service-link:hover {
    color: var(--tm-txt-accent-dark) !important;
  }

  /* 第二行服务标题悬停效果 */
  .service-title-row2:hover {
    color: var(--tm-bg-gradient-to) !important;
  }

  /* 第二行服务链接悬停效果 */
  .service-link-row2:hover {
    color: var(--tm-txt-accent-dark) !important;
  }

  /* 悬停覆盖层效果 */
  .hover-overlay {
    background-color: rgba(255, 255, 255, 0);
  }

  .group:hover .hover-overlay {
    background-color: rgba(255, 255, 255, 0.2) !important;
  }

  /* 特性图标背景 */
  .feature-icon-bg {
    background: linear-gradient(
      to bottom right,
      var(--tm-bg-white-alpha10),
      var(--tm-bg-white-alpha20)
    );
  }

  /* 特性项悬停效果 */
  .feature-item:hover .feature-icon-bg {
    background: linear-gradient(
      to bottom right,
      var(--tm-bg-white-alpha20),
      var(--tm-bg-white-alpha30)
    );
  }

  /* 特性项光晕效果 */
  .feature-item:hover .feature-glow {
    opacity: 1 !important;
  }

  /* 最后一个服务的按钮 */
  .cta-button {
    background-color: white;
    color: var(--tm-pri-0);
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    background-color: var(--tm-bg-hover) !important;
    transform: translateY(-2px);
    box-shadow: var(--tm-shadow-hover);
  }

  /* 特性项文本悬停效果 */
  .feature-item:hover .feature-subtitle {
    color: var(--tm-txt-white-alpha80) !important;
  }

  /* 动画延迟 */
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  .animation-delay-200 {
    animation-delay: 200ms;
  }

  .animation-delay-300 {
    animation-delay: 300ms;
  }

  .animation-delay-400 {
    animation-delay: 400ms;
  }

  .animation-delay-600 {
    animation-delay: 600ms;
  }

  /* 响应式布局样式 */
  @media (max-width: 767px) {
    .service-content {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .service-icon-wrapper {
      flex-shrink: 0;
    }

    .service-text-content {
      flex: 1;
    }
  }

  @media (min-width: 768px) {
    .service-content {
      display: block;
    }

    .service-icon-wrapper {
      margin-bottom: 1.5rem;
    }
  }

  /* 过渡动画 */
  .services-section * {
    transition:
      color 0.3s ease,
      background-color 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }
</style>
