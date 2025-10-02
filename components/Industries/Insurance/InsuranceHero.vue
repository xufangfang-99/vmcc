<template>
  <section class="relative overflow-hidden min-h-100vh flex items-center bg-[var(--tm-bg-primary)]">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
        alt="Insurance and Risk Management"
        class="h-full w-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"
      ></div>
    </div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-100 h-100 bg-[var(--tm-accent-primary)] rounded-full opacity-5 blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--tm-accent-secondary)] rounded-full opacity-5 blur-3xl animate-float"
        style="animation-delay: 1s"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-350 mx-auto px-6">
      <!-- Breadcrumb Navigation -->
      <div
        class="flex items-center justify-center gap-2 mb-8 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit mx-auto"
      >
        <NuxtLink
          to="/"
          class="text-white/80 hover:text-[var(--tm-accent-primary)] text-sm font-medium transition-colors duration-300"
        >
          Home
        </NuxtLink>
        <span class="text-white/50 text-sm">/</span>
        <NuxtLink
          to="/industries"
          class="text-white/80 hover:text-[var(--tm-accent-primary)] text-sm font-medium transition-colors duration-300"
        >
          Industries
        </NuxtLink>
        <span class="text-white/50 text-sm">/</span>
        <span class="text-[var(--tm-accent-primary)] font-semibold text-sm">Insurance</span>
      </div>

      <!-- Industry Badge -->
      <div class="flex justify-center mb-8">
        <div
          class="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3"
        >
          <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full animate-pulse"></div>
          <span class="text-white text-sm font-medium tracking-wide">INSURANCE INTELLIGENCE</span>
        </div>
      </div>

      <!-- Main Title -->
      <h1 class="text-6xl md:text-8xl font-light text-white mb-8 text-center leading-tight">
        Insurance &
        <br />
        <span class="text-[var(--tm-accent-primary)] font-semibold">
          Risk Management Excellence
        </span>
      </h1>

      <!-- Subtitle -->
      <p
        class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
      >
        Navigating Insurtech innovation, cyber risk, climate insurance, and digital transformation
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col md:flex-row gap-6 justify-center mb-20">
        <button
          class="group inline-flex items-center justify-center px-10 py-4 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold text-lg hover:bg-[var(--tm-accent-secondary)] transition-all duration-300 hover:-translate-y-1 shadow-lg"
          @click="openConsultationModal"
        >
          <span>Explore Insights</span>
          <svg
            class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
        <button
          class="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          @click="openExpertModal"
        >
          <svg
            class="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          Connect with Experts
        </button>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-300 mx-auto">
        <div
          class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30 hover:bg-white/15 transition-all duration-300"
        >
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Insurtech</div>
          <div class="text-sm text-white/80">Digital Innovation</div>
        </div>
        <div
          class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30 hover:bg-white/15 transition-all duration-300"
        >
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Cyber</div>
          <div class="text-sm text-white/80">Risk Protection</div>
        </div>
        <div
          class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30 hover:bg-white/15 transition-all duration-300"
        >
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">1,200+</div>
          <div class="text-sm text-white/80">Insurance Experts Placed</div>
        </div>
        <div
          class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30 hover:bg-white/15 transition-all duration-300"
        >
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">15 Years</div>
          <div class="text-sm text-white/80">Insurance Sector Focus</div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
      <div class="flex flex-col items-center gap-2 animate-bounce">
        <span class="text-white/60 text-sm">Scroll to explore</span>
        <svg
          class="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { inject } from 'vue'

  // Inject modal controls from parent
  const openExpertModal = inject<(() => void) | undefined>('openExpertModal')
  const openConsultationModal = inject<(() => void) | undefined>('openConsultationModal')
</script>

<style scoped>
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

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.05;
    }
    50% {
      opacity: 0.1;
    }
  }

  .animate-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-bounce {
    animation: bounce 2s ease-in-out infinite;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-6xl {
      font-size: 3rem;
    }
    .text-8xl {
      font-size: 4rem;
    }
  }
</style>
