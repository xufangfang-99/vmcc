<!-- components/Industries/Hospitality/CTASection.vue -->
<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 left-0 w-100 h-100 opacity-3">
      <div
        class="w-full h-full bg-gradient-to-br from-[var(--tm-accent-primary)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-6 relative z-1">
      <!-- Main CTA Banner -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-12 md:p-16 text-white relative overflow-hidden"
      >
        <!-- Animated background effect -->
        <div
          class="absolute -right-1/4 -top-1/4 w-150 h-150 bg-white/5 rounded-full blur-3xl animate-pulse"
        ></div>

        <div class="relative z-1 text-center">
          <div
            class="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-5 mb-8 backdrop-blur-sm"
          >
            <svg
              class="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>

          <h2 class="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Transform Your Hospitality Business Today
          </h2>

          <p class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto leading-relaxed mb-10">
            Join leading hotels and resorts leveraging experience economy trends, digital
            innovation, and exceptional talent to deliver world-class guest experiences.
          </p>

          <!-- Key Value Props -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-250 mx-auto">
            <div class="bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/20">
              <div class="text-3xl font-bold text-white mb-2">1,500+</div>
              <div class="text-sm text-white/80">Hospitality Professionals Placed</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/20">
              <div class="text-3xl font-bold text-white mb-2">12 Years</div>
              <div class="text-sm text-white/80">Hospitality Industry Expertise</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/20">
              <div class="text-3xl font-bold text-white mb-2">95%</div>
              <div class="text-sm text-white/80">Client Satisfaction Rate</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col md:flex-row gap-6 justify-center">
            <button
              class="inline-flex items-center justify-center px-10 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              @click="openConsultationModal"
            >
              <svg
                class="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 4.5v15m7.5-7.5h-15"></path>
              </svg>
              Get Hospitality Intelligence
            </button>
            <button
              class="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              @click="openExpertModal"
            >
              <svg
                class="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M17 8l4 4-4 4M7 8l-4 4 4 4"></path>
              </svg>
              Connect with Specialists
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Inject modal controls from parent
  const openExpertModal = inject('openExpertModal') as (() => void) | undefined
  const openConsultationModal = inject('openConsultationModal') as (() => void) | undefined
</script>

<style scoped>
  /* Animation for background pulse */
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }

  .animate-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2rem;
    }
    .text-5xl {
      font-size: 2.5rem;
    }
    .py-25 {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .p-12 {
      padding: 32px;
    }
  }
</style>
