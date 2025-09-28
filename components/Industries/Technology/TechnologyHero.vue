<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--tm-bg-primary)]"
  >
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&q=80"
        alt="Technology and AI Innovation"
        class="w-full h-full object-cover object-center"
      />
      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"
      ></div>
    </div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-20 right-20 w-40 h-40 rounded-full opacity-10 animate-pulse"
        style="background: var(--tm-accent-primary)"
      ></div>
      <div
        class="absolute bottom-32 left-20 w-24 h-24 rounded-full opacity-10 animate-pulse animation-delay-1000"
        style="background: var(--tm-accent-secondary)"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-32 h-32 rounded-full opacity-5 animate-pulse animation-delay-2000"
        style="background: var(--tm-accent-tertiary)"
      ></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
      <!-- Breadcrumb Navigation -->
      <div class="flex items-center justify-center gap-2 mb-8 text-sm text-white/80">
        <NuxtLink
          to="/"
          class="hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
        >
          Home
        </NuxtLink>
        <span>/</span>
        <NuxtLink
          to="/industries"
          class="hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
        >
          Industries
        </NuxtLink>
        <span>/</span>
        <span class="text-[var(--tm-accent-primary)]">Technology & AI</span>
      </div>

      <!-- Main Heading -->
      <h1 class="text-5xl md:text-7xl font-light text-white mb-6 leading-tight animate-fade-in-up">
        Technology & AI
        <span class="block text-[var(--tm-accent-primary)] font-normal">Innovation Hub</span>
      </h1>

      <!-- Subtitle -->
      <p
        class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-300"
      >
        Driving digital transformation through cutting-edge AI solutions, cloud infrastructure, and
        emerging technologies that shape the future of business across the GCC region.
      </p>

      <!-- Key Stats -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up animation-delay-600"
      >
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-[var(--tm-accent-primary)] mb-2">
            $500B+
          </div>
          <div class="text-sm md:text-base text-white/80 uppercase tracking-wider">
            Global AI Spending
          </div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-[var(--tm-accent-primary)] mb-2">
            $1.2T
          </div>
          <div class="text-sm md:text-base text-white/80 uppercase tracking-wider">
            Cloud Services Market
          </div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-[var(--tm-accent-primary)] mb-2">20%</div>
          <div class="text-sm md:text-base text-white/80 uppercase tracking-wider">
            Cloud Growth Rate
          </div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-[var(--tm-accent-primary)] mb-2">50%</div>
          <div class="text-sm md:text-base text-white/80 uppercase tracking-wider">
            Edge Processing by 2026
          </div>
        </div>
      </div>

      <!-- Technology Focus Areas -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 animate-fade-in-up animation-delay-900"
      >
        <div
          class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm border border-[var(--tm-bd-white-alpha30)] rounded-4 p-6 hover:bg-[var(--tm-bg-white-alpha20)] transition-all duration-300 hover:scale-105"
        >
          <div class="text-3xl mb-3">🤖</div>
          <h3 class="text-white font-semibold mb-2">AI/ML</h3>
          <p class="text-white/70 text-sm">Machine Learning & Generative AI</p>
        </div>
        <div
          class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm border border-[var(--tm-bd-white-alpha30)] rounded-4 p-6 hover:bg-[var(--tm-bg-white-alpha20)] transition-all duration-300 hover:scale-105"
        >
          <div class="text-3xl mb-3">☁️</div>
          <h3 class="text-white font-semibold mb-2">Cloud</h3>
          <p class="text-white/70 text-sm">Infrastructure & Optimization</p>
        </div>
        <div
          class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm border border-[var(--tm-bd-white-alpha30)] rounded-4 p-6 hover:bg-[var(--tm-bg-white-alpha20)] transition-all duration-300 hover:scale-105"
        >
          <div class="text-3xl mb-3">🛡️</div>
          <h3 class="text-white font-semibold mb-2">Cybersecurity</h3>
          <p class="text-white/70 text-sm">AI-Powered Defense</p>
        </div>
        <div
          class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm border border-[var(--tm-bd-white-alpha30)] rounded-4 p-6 hover:bg-[var(--tm-bg-white-alpha20)] transition-all duration-300 hover:scale-105"
        >
          <div class="text-3xl mb-3">⚡</div>
          <h3 class="text-white font-semibold mb-2">Edge Computing</h3>
          <p class="text-white/70 text-sm">Real-time Processing</p>
        </div>
        <div
          class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm border border-[var(--tm-bd-white-alpha30)] rounded-4 p-6 hover:bg-[var(--tm-bg-white-alpha20)] transition-all duration-300 hover:scale-105"
        >
          <div class="text-3xl mb-3">📊</div>
          <h3 class="text-white font-semibold mb-2">Governance</h3>
          <p class="text-white/70 text-sm">AI Regulation & Ethics</p>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-1200"
      >
        <button
          class="inline-flex items-center gap-2 px-8 py-4 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--tm-accent-secondary)] transition-all duration-300 hover:scale-105 shadow-[var(--tm-shadow-accent)]"
          @click="openExpertModal"
        >
          <span>Explore Tech Solutions</span>
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <button
          class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-[var(--tm-bg-white-alpha10)] transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          @click="openConsultationModal"
        >
          <span>Schedule Consultation</span>
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Expert Consultation Modal -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- Full Consultation Form Modal -->
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

  // Modal state management
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // Expert consultation modal controls
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // Full consultation form modal controls
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }
</script>

<style scoped>
  /* Custom animations */
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
  }

  .animation-delay-300 {
    animation-delay: 0.3s;
    opacity: 0;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
    opacity: 0;
  }

  .animation-delay-900 {
    animation-delay: 0.9s;
    opacity: 0;
  }

  .animation-delay-1200 {
    animation-delay: 1.2s;
    opacity: 0;
  }

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-7xl {
      font-size: 3.5rem;
    }

    .text-5xl {
      font-size: 2.5rem;
    }

    .grid-cols-5 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }

    .grid-cols-5 {
      grid-template-columns: 1fr;
    }
  }
</style>
