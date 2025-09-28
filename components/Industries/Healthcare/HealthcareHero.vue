<template>
  <section
    class="relative min-h-screen py-20 md:py-32 bg-[var(--tm-bg-primary)] overflow-hidden flex items-center"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&q=80"
        alt="Healthcare & Medical Technology Background"
        class="absolute top-1/2 left-1/2 w-110% h-110% object-cover transform -translate-x-1/2 -translate-y-1/2 animate-pulse animate-duration-30s"
      />
      <!-- Gradient Overlays -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-emerald-900/85 via-teal-800/75 to-cyan-900/90"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-[var(--tm-pri-0)]/10 via-transparent to-[var(--tm-pri-1)]/10"
      ></div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute inset-0 pointer-events-none z-1">
      <div
        class="absolute top-1/5 right-1/10 w-75 h-75 bg-[var(--tm-pri-0)]/8 rounded-full animate-float"
      ></div>
      <div
        class="absolute bottom-1/5 left-1/10 w-50 h-50 bg-[var(--tm-pri-1)]/8 rounded-full animate-float animate-delay-1000ms"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-100 h-100 bg-gradient-conic from-[var(--tm-pri-0)]/5 to-[var(--tm-pri-1)]/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin animate-duration-40s"
      ></div>
    </div>

    <div class="relative z-2 w-full max-w-1400px mx-auto px-5">
      <div class="text-center max-w-900px mx-auto">
        <!-- Breadcrumb -->
        <div
          class="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        >
          <NuxtLink
            to="/"
            class="text-white/80 hover:text-[var(--tm-pri-1)] text-sm font-500 transition-colors duration-300 no-underline"
          >
            Home
          </NuxtLink>
          <span class="text-white/50 text-sm">/</span>
          <NuxtLink
            to="/industries"
            class="text-white/80 hover:text-[var(--tm-pri-1)] text-sm font-500 transition-colors duration-300 no-underline"
          >
            Industries
          </NuxtLink>
          <span class="text-white/50 text-sm">/</span>
          <span class="text-[var(--tm-pri-1)] text-sm font-600">Healthcare & Medical Tourism</span>
        </div>

        <!-- Industry Badge -->
        <div
          class="inline-flex items-center gap-2.5 mb-6 px-6 py-3 rounded-full bg-[var(--tm-pri-0)]/15 border border-[var(--tm-pri-0)]/30"
        >
          <span class="text-xl">🏥</span>
          <span class="text-white/90 text-base font-600">Healthcare Innovation Leadership</span>
        </div>

        <!-- Main Title -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-300 text-white mb-5 leading-tight tracking-tight"
        >
          Healthcare & Medical Tourism
          <span
            class="block font-600 bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent"
          >
            Industry Solutions
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-white/85 max-w-700px mx-auto mb-10 leading-relaxed">
          Driving digital health transformation, biotechnology innovation, and medical tourism
          excellence across the GCC region. Comprehensive talent solutions for the future of
          healthcare at the intersection of technology and human wellbeing.
        </p>

        <!-- Key Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-800px mx-auto mb-10">
          <div
            class="text-center p-4 md:p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:-translate-y-1 hover:bg-white/8 hover:border-[var(--tm-pri-0)]/30 transition-all duration-300"
          >
            <div
              class="text-2xl md:text-3xl font-700 bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent mb-2"
            >
              >10%
            </div>
            <div class="text-sm text-white/70 font-500 leading-tight">
              Global GDP Healthcare Sector
            </div>
          </div>
          <div
            class="text-center p-4 md:p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:-translate-y-1 hover:bg-white/8 hover:border-[var(--tm-pri-0)]/30 transition-all duration-300"
          >
            <div
              class="text-2xl md:text-3xl font-700 bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent mb-2"
            >
              $1.8T
            </div>
            <div class="text-sm text-white/70 font-500 leading-tight">Pharmaceuticals Market</div>
          </div>
          <div
            class="text-center p-4 md:p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:-translate-y-1 hover:bg-white/8 hover:border-[var(--tm-pri-0)]/30 transition-all duration-300"
          >
            <div
              class="text-2xl md:text-3xl font-700 bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent mb-2"
            >
              $8.5B
            </div>
            <div class="text-sm text-white/70 font-500 leading-tight">UAE Medical Tourism</div>
          </div>
          <div
            class="text-center p-4 md:p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:-translate-y-1 hover:bg-white/8 hover:border-[var(--tm-pri-0)]/30 transition-all duration-300"
          >
            <div
              class="text-2xl md:text-3xl font-700 bg-gradient-to-r from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] bg-clip-text text-transparent mb-2"
            >
              1.3M
            </div>
            <div class="text-sm text-white/70 font-500 leading-tight">International Patients</div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r bg-white/10 from-[var(--tm-pri-0)] to-[var(--tm-pri-1)] text-white text-base font-600 rounded-full border-2 border-white/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--tm-pri-0)]/30 transition-all duration-300 min-w-60 justify-center"
            @click="openConsultationModal"
          >
            <span>Consult Healthcare Experts</span>
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
            class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white text-base font-600 rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300 min-w-60 justify-center backdrop-blur-sm"
            @click="scrollToReports"
          >
            <span>View Healthcare Reports</span>
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

  // Scroll to reports section
  const scrollToReports = () => {
    const reportsElement = document.querySelector('.reports-section')
    if (reportsElement) {
      reportsElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
</script>

<style scoped>
  /* Custom animations for UnoCSS */
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

  .animate-duration-30s {
    animation-duration: 30s;
  }

  .animate-duration-40s {
    animation-duration: 40s;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .animate-float {
      animation: none;
    }
  }
</style>
