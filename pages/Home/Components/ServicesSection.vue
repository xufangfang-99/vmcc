<template>
  <section class="relative py-20 lg:py-32 bg-white dark:bg-gray-900 overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 container max-w-7xl mx-auto px-6">
      <!-- 标题区域 - 添加半圆效果 -->
      <div class="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
        <!-- 半圆装饰背景容器 -->
        <div class="relative mb-8">
          <!-- 大的半圆背景 -->
          <div class="absolute left-1/2 -translate-x-1/2 -top-20 w-96 h-48">
            <!-- 主半圆 -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-b-[200px]"
            ></div>

            <!-- 动态半圆层 -->
            <div
              class="absolute inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-b-[180px] animate-pulse"
            ></div>
            <div
              class="absolute inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-b-[160px] animate-pulse animation-delay-300"
            ></div>
            <div
              class="absolute inset-6 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-b-[140px] animate-pulse animation-delay-600"
            ></div>
          </div>

          <!-- 标签 - 放在半圆中间 -->
          <div class="relative pt-32 pb-4">
            <span
              class="group relative inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
            >
              <!-- 悬停时的闪光效果 -->
              <span
                class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></span>
              <!-- 动态边框光效 -->
              <span
                class="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"
              ></span>
              <span class="relative z-10">我们的服务</span>
            </span>
          </div>
        </div>

        <!-- 主标题 -->
        <h2
          class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative group cursor-default"
        >
          <span class="relative">
            全方位的
            <span class="relative inline-block">
              <span
                class="relative z-10 text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400"
              >
                人才解决方案
              </span>
              <!-- 下划线动画 -->
              <span
                class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              ></span>
            </span>
          </span>
        </h2>

        <!-- 描述文字 -->
        <p
          class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed relative overflow-hidden group"
        >
          <span class="relative z-10">
            凭借深厚的行业洞察和专业能力，我们为企业提供定制化的人才战略服务，
            助力组织实现可持续发展
          </span>
          <!-- 文字悬停渐变效果 -->
          <span
            class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          ></span>
        </p>

        <!-- 装饰性动态元素 -->
        <div class="relative mt-8 flex justify-center gap-4">
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div class="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
          <div class="w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>

      <!-- 服务展示 - 保持原有的2-3-1布局 -->
      <div class="space-y-8 lg:space-y-12">
        <!-- 第一行：2个服务 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="service in services.slice(0, 2)"
            :key="service.id"
            class="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-10 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-2xl overflow-hidden"
          >
            <!-- 右上角动画装饰 -->
            <div
              class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 blur-3xl"
            ></div>

            <!-- 序号 -->
            <span
              class="absolute top-8 right-8 text-6xl font-bold text-gray-200 dark:text-gray-700 group-hover:text-blue-100 dark:group-hover:text-blue-900/30 transition-colors"
            >
              0{{ service.id }}
            </span>

            <!-- 图标 -->
            <div class="relative z-10 mb-6">
              <div
                class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300"
              >
                <svg
                  v-if="service.icon === 'magnifying-glass'"
                  class="w-10 h-10 text-white"
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
                  class="w-10 h-10 text-white"
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

            <!-- 内容 -->
            <h3
              class="relative z-10 text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {{ service.title }}
            </h3>
            <p class="relative z-10 text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- 特性列表 -->
            <ul class="relative z-10 space-y-2 mb-6">
              <li
                v-for="(feature, idx) in service.features"
                :key="idx"
                class="flex items-center text-gray-700 dark:text-gray-300"
              >
                <Icon
                  name="heroicons:check-circle"
                  class="w-5 h-5 text-blue-500 mr-3 flex-shrink-0"
                />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- 链接 -->
            <NuxtLink
              :to="service.link"
              class="relative z-10 inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
            >
              了解更多
              <Icon
                name="heroicons:arrow-right"
                class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- 第二行：3个服务 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="service in services.slice(2, 5)"
            :key="service.id"
            class="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-2xl overflow-hidden"
          >
            <!-- 右上角动画装饰 -->
            <div
              class="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 blur-3xl"
            ></div>

            <!-- 图标 -->
            <div class="mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300"
              >
                <svg
                  v-if="service.icon === 'user-group'"
                  class="w-8 h-8 text-white"
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
                  class="w-8 h-8 text-white"
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
                  class="w-8 h-8 text-white"
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

            <!-- 内容 -->
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
            >
              {{ service.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {{ service.description }}
            </p>

            <!-- 链接 -->
            <NuxtLink
              :to="service.link"
              class="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold text-sm hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
            >
              探索服务
              <Icon
                name="heroicons:arrow-right"
                class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- 第三行：1个突出服务 -->
        <div class="max-w-4xl mx-auto">
          <div
            class="group relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white overflow-hidden"
          >
            <!-- 右上角动画装饰 -->
            <div
              class="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 blur-3xl"
            ></div>

            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <!-- 左侧内容 -->
              <div>
                <div
                  class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
                >
                  <svg
                    class="w-10 h-10 text-white"
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
                <h3 class="text-3xl font-bold mb-4">{{ services[5].title }}</h3>
                <p class="text-white/90 mb-6 text-lg leading-relaxed">
                  {{ services[5].description }}
                </p>
                <NuxtLink
                  :to="services[5].link"
                  class="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors group"
                >
                  开始咨询
                  <Icon
                    name="heroicons:arrow-right"
                    class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                  />
                </NuxtLink>
              </div>

              <!-- 右侧特性 -->
              <div class="space-y-4">
                <div
                  v-for="(feature, idx) in services[5].features"
                  :key="idx"
                  class="flex items-start"
                >
                  <div
                    class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 mt-1"
                  >
                    <Icon
                      name="heroicons:check"
                      class="w-5 h-5 text-white"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">{{ feature }}</h4>
                    <p class="text-white/80 text-sm">为您的企业量身定制最优解决方案</p>
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
  import { ref } from 'vue'

  const services = ref([
    // ... services数据保持不变
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
</style>
