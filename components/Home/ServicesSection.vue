<template>
  <section
    id="services-section"
    class="relative overflow-hidden"
  >
    <div
      class="py-10"
      :style="{
        backgroundColor: 'var(--tm-bg-primary)',
        transition: 'all 0.3s ease',
      }"
    >
      <div class="pb-10">
        <!-- Background decorations -->
        <div class="absolute inset-0 opacity-5">
          <div
            class="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
            :style="{ backgroundColor: 'var(--tm-accent-primary)', opacity: 0.3 }"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
            :style="{ backgroundColor: 'var(--tm-accent-gradient-to)', opacity: 0.3 }"
          ></div>
        </div>

        <div class="relative z-10 container max-w-7xl mx-auto px-6">
          <!-- Title section with semicircle effect -->
          <div class="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <!-- Semicircle decoration background container -->
            <div class="relative">
              <!-- Large semicircle background -->
              <div
                class="absolute left-1/2 -translate-x-1/2 -top-20 lg:-top-24 w-[400px] lg:w-[600px] h-40 lg:h-48"
              >
                <!-- Main semicircle -->
                <div
                  class="absolute inset-0 rounded-b-[200px] lg:rounded-b-[300px]"
                  :style="{
                    background: `linear-gradient(to right, var(--tm-bg-accentGradient-from), var(--tm-bg-accentGradient-to))`,
                    opacity: 0.03,
                  }"
                ></div>

                <!-- Animated semicircle layers -->
                <div
                  class="absolute inset-2 rounded-b-[180px] lg:rounded-b-[280px] animate-pulse"
                  :style="{
                    background: `linear-gradient(to right, var(--tm-accent-primary), var(--tm-accent-gradient-to))`,
                    opacity: 0.05,
                  }"
                ></div>
                <div
                  class="absolute inset-4 rounded-b-[160px] lg:rounded-b-[260px] animate-pulse animate-delay-300"
                  :style="{
                    background: `linear-gradient(to right, var(--tm-accent-primary), var(--tm-accent-gradient-to))`,
                    opacity: 0.07,
                  }"
                ></div>
                <div
                  class="absolute inset-6 rounded-b-[140px] lg:rounded-b-[240px] animate-pulse animate-delay-600"
                  :style="{
                    background: `linear-gradient(to right, var(--tm-accent-secondary), var(--tm-accent-gradient-to))`,
                    opacity: 0.09,
                  }"
                ></div>

                <!-- Label button -->
                <div class="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2">
                  <span
                    class="relative inline-block text-white text-2xl lg:text-3xl font-thin tracking-widest transition-all duration-300 hover:scale-105 cursor-pointer"
                    :style="{
                      textShadow: '0 2px 20px rgba(255, 255, 255, 0.3)',
                    }"
                  >
                    OUR SERVICES
                  </span>
                </div>
              </div>

              <!-- Spacing -->
              <div class="pt-32 lg:pt-40"></div>
            </div>

            <!-- Main heading -->
            <h2
              class="text-4xl lg:text-5xl font-bold mb-6 relative group cursor-default"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              <span class="relative">
                Comprehensive
                <span class="relative inline-block">
                  <span
                    class="relative z-10 transition-all duration-300"
                    :style="{ color: 'var(--tm-txt-accent)' }"
                  >
                    Talent Solutions
                  </span>
                  <!-- Underline animation -->
                  <span
                    class="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    :style="{
                      background: `linear-gradient(to right, var(--tm-accent-primary), var(--tm-accent-gradient-to))`,
                    }"
                  ></span>
                </span>
              </span>
            </h2>

            <!-- Description -->
            <p
              class="text-xl leading-relaxed relative overflow-hidden group"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              <span class="relative z-10">
                Leveraging deep industry insights and professional expertise, we deliver tailored
                talent strategies
                <br class="hidden lg:block" />
                that drive sustainable organizational growth
              </span>
              <!-- Text hover gradient effect -->
              <span
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                :style="{
                  background: `linear-gradient(to right, var(--tm-bg-accentGradient-from), var(--tm-bg-accentGradient-to))`,
                }"
              ></span>
            </p>

            <!-- Decorative animated elements -->
            <div class="relative mt-8 flex justify-center gap-4">
              <div
                class="w-2 h-2 rounded-full animate-bounce"
                :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
              ></div>
              <div
                class="w-2 h-2 rounded-full animate-bounce animate-delay-200"
                :style="{ backgroundColor: 'var(--tm-accent-gradient-to)' }"
              ></div>
              <div
                class="w-2 h-2 rounded-full animate-bounce animate-delay-400"
                :style="{ backgroundColor: 'var(--tm-accent-secondary)' }"
              ></div>
            </div>
          </div>

          <!-- Services showcase - maintaining 2-3-1 layout -->
          <div class="space-y-8 lg:space-y-12">
            <!-- First row: 2 services -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div
                v-for="service in services.slice(0, 2)"
                :key="service.id"
                class="group relative rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 overflow-hidden hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 border border-[var(--tm-bd-card)]"
                :style="{
                  backgroundColor: 'var(--tm-bg-card)',
                }"
              >
                <!-- Top-right animated decoration -->
                <div
                  class="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-150 transition-all duration-700 blur-3xl"
                  :style="{
                    background: `linear-gradient(to bottom right, var(--tm-bg-accentGradient-from), var(--tm-bg-accentGradient-to))`,
                    opacity: 0.2,
                  }"
                ></div>

                <!-- Service number -->
                <span
                  class="absolute top-4 right-4 md:top-8 md:right-8 text-7xl md:text-6xl font-bold transition-colors opacity-30"
                  :style="{
                    color: 'var(--tm-txt-disabled)',
                  }"
                >
                  0{{ service.id }}
                </span>

                <!-- Service content -->
                <div>
                  <!-- Dynamic layout: mobile horizontal, desktop vertical -->
                  <div :class="serviceHeaderClass">
                    <!-- Icon -->
                    <div
                      :class="iconContainerClass"
                      :style="{
                        background: `linear-gradient(to bottom right, var(--tm-accent-primary), var(--tm-accent-secondary))`,
                      }"
                    >
                      <svg
                        v-if="service.icon === 'magnifying-glass'"
                        :class="iconSizeClass"
                        class="text-white"
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
                        :class="iconSizeClass"
                        class="text-white"
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

                    <!-- Title -->
                    <h3 :class="[titleClass, 'text-white-alpha-70']">
                      {{ service.title }}
                    </h3>
                  </div>

                  <!-- Description -->
                  <p
                    :class="descriptionClass"
                    :style="{ color: 'var(--tm-txt-secondary)' }"
                  >
                    {{ service.description }}
                  </p>

                  <!-- Features list -->
                  <ul class="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <li
                      v-for="(feature, idx) in service.features"
                      :key="idx"
                      class="flex items-center text-sm md:text-base"
                      :style="{ color: 'var(--tm-txt-light)' }"
                    >
                      <div
                        class="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0 relative"
                      >
                        <div
                          class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                          :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
                        ></div>
                        <div
                          class="hidden md:block absolute w-6 h-6 rounded-full animate-ping"
                          :style="{ backgroundColor: 'var(--tm-bg-accentLight)', opacity: 0.3 }"
                        ></div>
                      </div>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>

                  <!-- Link -->
                  <NuxtLink
                    :to="service.link"
                    :class="linkClass"
                    :style="{ color: 'var(--tm-txt-accent)' }"
                  >
                    Learn More
                    <div
                      class="i-heroicons-arrow-right w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform"
                    ></div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Second row: 3 services -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                v-for="service in services.slice(2, 5)"
                :key="service.id"
                class="group relative rounded-2xl p-6 md:p-8 transition-all duration-300 overflow-hidden hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 border border-[var(--tm-bd-card)]"
                :style="{
                  backgroundColor: 'var(--tm-bg-card)',
                }"
              >
                <!-- Top-right animated decoration -->
                <div
                  class="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-150 transition-all duration-700 blur-3xl"
                  :style="{
                    background: `linear-gradient(to bottom right, var(--tm-accent-gradient-to), var(--tm-accent-primary))`,
                    opacity: 0.2,
                  }"
                ></div>

                <!-- Service content -->
                <div>
                  <!-- Dynamic layout -->
                  <div :class="serviceHeaderClass">
                    <!-- Icon -->
                    <div
                      :class="iconContainerClassSmall"
                      :style="{
                        background: `linear-gradient(to bottom right, var(--tm-accent-gradient-to), var(--tm-accent-secondary))`,
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

                    <!-- Title -->
                    <h3
                      :class="titleClassSmall"
                      :style="{ color: 'var(--tm-txt-primary)' }"
                    >
                      {{ service.title }}
                    </h3>
                  </div>

                  <!-- Description -->
                  <p
                    class="mb-4 text-sm leading-relaxed"
                    :style="{ color: 'var(--tm-txt-secondary)' }"
                  >
                    {{ service.description }}
                  </p>

                  <!-- Link -->
                  <NuxtLink
                    :to="service.link"
                    class="inline-flex items-center font-semibold text-sm transition-colors group/link hover:text-[var(--tm-txt-accentDark)]"
                    :style="{
                      color: 'var(--tm-accent-gradient-to)',
                    }"
                  >
                    Explore Service
                    <div
                      class="i-heroicons-arrow-right w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform"
                    ></div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Third row: 1 featured service -->
            <div class="max-w-4xl mx-auto">
              <div
                class="group relative rounded-2xl p-8 lg:p-12 text-white overflow-hidden"
                :style="{
                  background: `linear-gradient(135deg, var(--tm-accent-hero-from) 0%, var(--tm-accent-hero-to) 100%)`,
                }"
              >
                <!-- Top-right animated decoration -->
                <div
                  class="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-150 transition-all duration-700 blur-3xl bg-[var(--tm-bg-whiteAlpha10)]"
                ></div>

                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <!-- Left content -->
                  <div>
                    <!-- Mobile: icon and title in row -->
                    <div class="flex items-center gap-4 mb-6 lg:block">
                      <div
                        class="w-16 h-16 lg:w-20 lg:h-20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 lg:mb-6 bg-[var(--tm-bg-whiteAlpha20)]"
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

                    <p class="mb-6 text-lg leading-relaxed text-[var(--tm-txt-whiteAlpha90)]">
                      {{ services[5].description }}
                    </p>
                    <NuxtLink
                      :to="services[5].link"
                      class="inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all group/btn bg-white text-[var(--tm-accent-primary)] hover:bg-[var(--tm-bg-hover)] hover:-translate-y-0.5 hover:shadow-[var(--tm-shadow-hover)]"
                    >
                      Start Consultation
                      <div
                        class="i-heroicons-arrow-right w-5 h-5 ml-2 transform group-hover/btn:translate-x-2 transition-transform"
                      ></div>
                    </NuxtLink>
                  </div>

                  <!-- Right features -->
                  <div class="space-y-4">
                    <div
                      v-for="(feature, idx) in services[5].features"
                      :key="idx"
                      class="flex items-start group/feature"
                    >
                      <!-- Decorative icon container -->
                      <div class="relative w-10 h-10 mr-4 mt-1 flex-shrink-0">
                        <!-- Background gradient circle -->
                        <div
                          class="absolute inset-0 rounded-xl backdrop-blur-sm transition-all duration-300 bg-gradient-to-br from-[var(--tm-bg-whiteAlpha10)] to-[var(--tm-bg-whiteAlpha20)] group-hover/feature:from-[var(--tm-bg-whiteAlpha20)] group-hover/feature:to-[var(--tm-bg-whiteAlpha30)]"
                        ></div>
                        <!-- Number -->
                        <div class="relative w-full h-full flex items-center justify-center">
                          <span class="font-bold text-sm text-[var(--tm-txt-whiteAlpha90)]">
                            {{ idx + 1 }}
                          </span>
                        </div>
                        <!-- Decorative glow -->
                        <div
                          class="absolute -inset-1 rounded-xl blur-sm opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 bg-[var(--tm-bg-whiteAlpha20)]"
                        ></div>
                      </div>

                      <div>
                        <h4 class="font-semibold mb-1 text-white transition-colors">
                          {{ feature }}
                        </h4>
                        <p
                          class="text-sm transition-colors text-[var(--tm-txt-whiteAlpha70)] group-hover/feature:text-[var(--tm-txt-whiteAlpha80)]"
                        >
                          Tailored solutions for your enterprise success
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
  import { useDevice } from '~/composables/useDevice'

  const device = useDevice()

  // 计算属性 - 根据设备类型返回不同的类
  const serviceHeaderClass = computed(() => {
    return device.isMobile ? 'flex items-center gap-3 mb-4' : 'flex flex-col mb-4'
  })

  const iconContainerClass = computed(() => {
    return device.isMobile
      ? 'w-12 h-12 rounded-xl flex items-center justify-center shadow-[var(--tm-shadow-accent)] group-hover:shadow-[var(--tm-shadow-accentLight)] transform group-hover:scale-110 transition-all duration-300 flex-shrink-0'
      : 'w-16 lg:w-20 h-16 lg:h-20 rounded-xl flex items-center justify-center shadow-[var(--tm-shadow-accent)] group-hover:shadow-[var(--tm-shadow-accentLight)] transform group-hover:scale-110 transition-all duration-300 mb-6'
  })

  const iconContainerClassSmall = computed(() => {
    return device.isMobile
      ? 'w-12 h-12 rounded-xl flex items-center justify-center shadow-[var(--tm-shadow-accent)] group-hover:shadow-[var(--tm-shadow-accentLight)] transform group-hover:scale-110 transition-all duration-300 flex-shrink-0'
      : 'w-16 h-16 rounded-xl flex items-center justify-center shadow-[var(--tm-shadow-accent)] group-hover:shadow-[var(--tm-shadow-accentLight)] transform group-hover:scale-110 transition-all duration-300 mb-4'
  })

  const iconSizeClass = computed(() => {
    return device.isMobile ? 'w-6 h-6' : 'w-8 lg:w-10 h-8 lg:h-10'
  })

  const titleClass = computed(() => {
    return device.isMobile
      ? 'text-lg font-bold transition-colors hover:text-[var(--tm-txt-accent)]'
      : 'text-xl lg:text-2xl font-bold transition-colors hover:text-[var(--tm-txt-accent)]'
  })

  const titleClassSmall = computed(() => {
    return device.isMobile
      ? 'text-lg font-bold transition-colors hover:text-[var(--tm-accent-gradient-to)]'
      : 'text-xl font-bold transition-colors hover:text-[var(--tm-accent-gradient-to)]'
  })

  const descriptionClass = computed(() => {
    return device.isMobile
      ? 'mb-4 text-sm leading-relaxed'
      : 'mb-4 md:mb-6 text-base leading-relaxed'
  })

  const linkClass = computed(() => {
    return device.isMobile
      ? 'inline-flex items-center font-semibold text-sm transition-colors group/link hover:text-[var(--tm-txt-accentDark)]'
      : 'inline-flex items-center font-semibold text-base transition-colors group/link hover:text-[var(--tm-txt-accentDark)]'
  })

  const services = ref([
    {
      id: 1,
      icon: 'magnifying-glass',
      title: 'Executive Search',
      description:
        'Leveraging our global perspective and extensive industry network, we precisely match C-suite executives and core leadership teams to ensure perfect alignment with your corporate culture.',
      features: [
        'Global Talent Network',
        'Comprehensive Background Checks',
        'Cultural Fit Assessment',
      ],
      link: '/services/executive-search',
    },
    {
      id: 2,
      icon: 'cube-transparent',
      title: 'HR Outsourcing',
      description:
        'End-to-end HR solutions from payroll and benefits management to compliance assurance, allowing your team to focus on strategic initiatives.',
      features: ['Payroll & Benefits Administration', 'Regulatory Compliance', 'HRIS Integration'],
      link: '/services/hr-outsourcing',
    },
    {
      id: 3,
      icon: 'user-group',
      title: 'Flexible Staffing Solutions',
      description:
        'Agile workforce solutions to meet dynamic business demands through professional talent deployment and project-based outsourcing.',
      features: ['Rapid Deployment', 'Skills Matching', 'Cost Optimization'],
      link: '/services/flexible-staffing',
    },
    {
      id: 4,
      icon: 'chart-bar',
      title: 'Organizational Excellence',
      description:
        'Transform your organization into a high-performance powerhouse through scientific diagnostics and strategic change management.',
      features: ['Organizational Diagnostics', 'Change Management', 'Team Development'],
      link: '/services/organizational',
    },
    {
      id: 5,
      icon: 'globe-asia-australia',
      title: 'Global Expansion Support',
      description:
        'Comprehensive support for international business growth, including cross-border compliance and cultural integration strategies.',
      features: ['Cross-border Compliance', 'Cultural Training', 'Localization Support'],
      link: '/services/global',
    },
    {
      id: 6,
      icon: 'light-bulb',
      title: 'Strategic Talent Consulting',
      description:
        'Data-driven insights to craft forward-thinking talent strategies that build sustainable competitive advantages. Our expert consultants deeply understand your business needs to deliver customized solutions.',
      features: [
        'Workforce Planning',
        'Succession Planning',
        'Capability Development',
        'Digital Transformation',
      ],
      link: '/services/strategic-consulting',
    },
  ])
</script>

<style scoped>
  /* Animation keyframes */
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

  /* Animation delays */
  .animate-delay-200 {
    animation-delay: 200ms;
  }

  .animate-delay-300 {
    animation-delay: 300ms;
  }

  .animate-delay-400 {
    animation-delay: 400ms;
  }

  .animate-delay-600 {
    animation-delay: 600ms;
  }
</style>
