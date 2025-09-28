<template>
  <section class="py-20 bg-tm-bg-primary relative overflow-hidden">
    <!-- 动态背景装饰 -->
    <div class="absolute inset-0">
      <div
        class="absolute top-1/4 right-1/10 w-75 h-75 bg-tm-accent-primary/8 rounded-full animate-float"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/10 w-50 h-50 bg-tm-accent-secondary/8 rounded-full animate-float animate-delay-1000ms"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-100 h-100 bg-gradient-conic from-tm-accent-primary/5 to-tm-accent-secondary/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin animate-duration-40s"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-5 relative z-1">
      <!-- 主要CTA区域 -->
      <div
        class="bg-gradient-to-br from-tm-bg-overlay via-tm-bg-overlayDark to-tm-bg-overlay rounded-6 p-8 md:p-12 mb-16 relative overflow-hidden"
      >
        <!-- 背景图案 -->
        <div class="absolute inset-0 opacity-10">
          <div
            class="w-full h-full bg-gradient-conic from-tm-bg-whiteAlpha10 via-transparent to-tm-bg-whiteAlpha10 animate-spin animate-duration-20s"
          ></div>
        </div>

        <div class="relative z-1 text-center">
          <h2 class="text-3xl md:text-4xl font-600 mb-6 text-tm-txt-white">
            Transform Your Healthcare Organization
          </h2>
          <p
            class="text-lg md:text-xl text-tm-txt-whiteAlpha90 max-w-175 mx-auto mb-8 leading-relaxed"
          >
            Partner with VMMC to access elite healthcare talent across digital transformation,
            biotechnology innovation, and medical tourism excellence. Our 15 years of expertise
            connects you with professionals driving the future of healthcare.
          </p>

          <!-- 关键价值主张 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              class="text-center p-4 bg-tm-bg-whiteAlpha10 backdrop-blur-sm rounded-2xl border border-tm-bd-whiteAlpha30"
            >
              <div class="text-2xl font-700 text-tm-txt-white mb-2">$5.65T</div>
              <div class="text-sm text-tm-txt-whiteAlpha80">Total Healthcare Market Size</div>
            </div>
            <div
              class="text-center p-4 bg-tm-bg-whiteAlpha10 backdrop-blur-sm rounded-2xl border border-tm-bd-whiteAlpha30"
            >
              <div class="text-2xl font-700 text-tm-txt-white mb-2">85%</div>
              <div class="text-sm text-tm-txt-whiteAlpha80">UAE JCI Accreditation Rate</div>
            </div>
            <div
              class="text-center p-4 bg-tm-bg-whiteAlpha10 backdrop-blur-sm rounded-2xl border border-tm-bd-whiteAlpha30"
            >
              <div class="text-2xl font-700 text-tm-txt-white mb-2">1.3M</div>
              <div class="text-sm text-tm-txt-whiteAlpha80">UAE Medical Tourism Patients</div>
            </div>
          </div>

          <!-- 主要行动按钮 -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              class="group inline-flex items-center gap-2 px-8 py-4 bg-tm-txt-white text-tm-accent-primary text-base font-600 rounded-full hover:bg-tm-bg-hover hover:-translate-y-1 hover:shadow-tm-shadow-accent transition-all duration-300 min-w-60 justify-center"
              @click="openConsultationModal"
            >
              <span>Start Your Transformation</span>
              <svg
                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
            <button
              class="inline-flex items-center gap-2 px-8 py-4 bg-tm-bg-whiteAlpha10 text-tm-txt-white text-base font-600 rounded-full border-2 border-tm-bd-whiteAlpha30 hover:bg-tm-bg-whiteAlpha20 hover:border-tm-bd-transparent hover:-translate-y-1 transition-all duration-300 min-w-60 justify-center backdrop-blur-sm"
              @click="openExpertModal"
            >
              <span>Speak with Specialists</span>
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 联系信息卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <!-- 新加坡总部 -->
        <div
          class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-12 h-12 bg-tm-bg-accentLight rounded-2xl flex items-center justify-center text-tm-accent-primary"
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
            <div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Singapore HQ</h3>
              <span class="text-sm text-tm-accent-primary font-500">Asia-Pacific Hub</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 mt-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-tm-txt-light"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
              </div>
              <span class="text-sm text-tm-txt-secondary">The Guoco Tower, Office1801</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-tm-txt-light"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
              </div>
              <a
                href="tel:+6563868322"
                class="text-sm text-tm-accent-primary hover:text-tm-accent-secondary transition-colors no-underline"
              >
                +65 6386 8322
              </a>
            </div>
          </div>
        </div>

        <!-- 迪拜办公室 -->
        <div
          class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500"
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
            <div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Dubai Office</h3>
              <span class="text-sm text-amber-500 font-500">Middle East Hub</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 mt-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-tm-txt-light"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
              </div>
              <span class="text-sm text-tm-txt-secondary">
                Aspin Commercial Tower, Office2818, DIFC
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-tm-txt-light"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
              </div>
              <a
                href="tel:+971558296351"
                class="text-sm text-tm-accent-primary hover:text-tm-accent-secondary transition-colors no-underline"
              >
                +971 55 829 6351
              </a>
            </div>
          </div>
        </div>

        <!-- 数字联系方式 -->
        <div
          class="bg-tm-bg-secondary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500"
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
                <path d="M2 12h20"></path>
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-600 text-tm-txt-primary">Digital Connect</h3>
              <span class="text-sm text-blue-500 font-500">Global Reach</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-tm-txt-light"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  ></circle>
                  <path d="M2 12h20"></path>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <a
                href="https://www.vmmcae.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-tm-accent-primary hover:text-tm-accent-secondary transition-colors no-underline"
              >
                www.vmmcae.com
              </a>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-tm-txt-light"
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
              <a
                href="https://www.linkedin.com/company/vmmc-uae"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-tm-accent-primary hover:text-tm-accent-secondary transition-colors no-underline"
              >
                LinkedIn: vmmc-uae
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 专业认知与承诺 -->
      <div class="bg-tm-bg-secondary rounded-3xl p-8 md:p-12 border border-tm-bd-card text-center">
        <h3 class="text-2xl md:text-3xl font-600 text-tm-txt-primary mb-6">
          Leading Healthcare Transformation in the GCC
        </h3>
        <p class="text-lg text-tm-txt-secondary max-w-200 mx-auto mb-8 leading-relaxed">
          With deep expertise across pharmaceuticals ($1.8T market), medical devices ($650B),
          biotechnology ($1.5T projection), and medical tourism ($8.5B UAE revenue), we understand
          the unique challenges of healthcare transformation in emerging markets.
        </p>

        <!-- 专业领域标签 -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span
            class="px-4 py-2 bg-tm-bg-primary text-tm-txt-primary text-sm font-500 rounded-full border border-tm-bd-card"
          >
            Digital Health Transformation
          </span>
          <span
            class="px-4 py-2 bg-tm-bg-primary text-tm-txt-primary text-sm font-500 rounded-full border border-tm-bd-card"
          >
            CRISPR & Gene Editing
          </span>
          <span
            class="px-4 py-2 bg-tm-bg-primary text-tm-txt-primary text-sm font-500 rounded-full border border-tm-bd-card"
          >
            Medical Tourism Excellence
          </span>
          <span
            class="px-4 py-2 bg-tm-bg-primary text-tm-txt-primary text-sm font-500 rounded-full border border-tm-bd-card"
          >
            Emiratisation Programs
          </span>
          <span
            class="px-4 py-2 bg-tm-bg-primary text-tm-txt-primary text-sm font-500 rounded-full border border-tm-bd-card"
          >
            Cross-Border Healthcare
          </span>
          <span
            class="px-4 py-2 bg-tm-bg-primary text-tm-txt-primary text-sm font-500 rounded-full border border-tm-bd-card"
          >
            AI in Healthcare
          </span>
        </div>

        <!-- 最终行动呼吁 -->
        <div class="pt-8 border-t border-tm-bd-card">
          <h4 class="text-xl font-600 text-tm-txt-primary mb-4">
            Ready to Build Your Future-Ready Healthcare Team?
          </h4>
          <p class="text-tm-txt-secondary mb-6 max-w-150 mx-auto">
            Connect with our healthcare talent specialists today and discover how we can accelerate
            your organization's transformation in the evolving global healthcare landscape.
          </p>
          <button
            class="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-tm-accent-primary to-tm-accent-secondary text-lg font-600 rounded-full border border-tm-bd-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            @click="openConsultationModal"
          >
            <span>Begin Your Healthcare Transformation</span>
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 专家咨询弹出框 (简化版) -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- 完整咨询表单弹出框 -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'

  // 弹出框状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // 简化版专家咨询弹出框控制
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整版咨询表单弹出框控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }
</script>

<style scoped>
  /* 浮动动画 */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-delay-1000ms {
    animation-delay: 1000ms;
  }

  .animate-duration-20s {
    animation-duration: 20s;
  }

  .animate-duration-40s {
    animation-duration: 40s;
  }

  /* 深色模式适配 */
  .dark .cta-section {
    background: var(--tm-bg-primary);
  }
</style>
