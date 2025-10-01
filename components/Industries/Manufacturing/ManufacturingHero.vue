<template>
  <section class="relative overflow-hidden min-h-100vh flex items-center bg-[var(--tm-bg-primary)]">
    <!-- Background Image Layer -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80"
        alt="Smart Manufacturing and Industry 4.0"
        class="h-full w-full object-cover object-center"
      />
      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"
      ></div>
    </div>

    <!-- Background Decorations -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-20 right-20 w-40 h-40 rounded-full opacity-10 bg-[var(--tm-accent-primary)] animate-pulse"
      ></div>
      <div
        class="absolute bottom-32 left-20 w-24 h-24 rounded-full opacity-10 bg-[var(--tm-accent-secondary)] animate-float"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 w-32 h-32 rounded-full opacity-5 bg-[var(--tm-accent-tertiary)] animate-pulse"
        style="animation-delay: 1s"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 w-full max-w-450 mx-auto px-6 text-center">
      <!-- Breadcrumb Navigation -->
      <div
        class="mb-8 flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 w-fit mx-auto animate-fade-in-up"
      >
        <NuxtLink
          to="/"
          class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
        >
          Home
        </NuxtLink>
        <span class="text-white/50 font-light">/</span>
        <NuxtLink
          to="/industries"
          class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
        >
          Industries
        </NuxtLink>
        <span class="text-white/50 font-light">/</span>
        <span class="text-[var(--tm-accent-primary)] font-semibold text-sm drop-shadow-sm">
          Manufacturing
        </span>
      </div>

      <!-- Industry Badge -->
      <div
        class="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--tm-accent-primary)]/30 bg-[var(--tm-accent-primary)]/10 backdrop-blur-sm px-6 py-3 animate-fade-in-up"
        style="animation-delay: 0.2s"
      >
        <div
          class="w-6 h-6 rounded-full bg-[var(--tm-accent-primary)] flex items-center justify-center"
        >
          <svg
            class="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span class="text-white font-semibold text-lg">Industry 4.0 Revolution</span>
      </div>

      <!-- Main Headline -->
      <h1
        class="mb-8 text-6xl md:text-6xl lg:text-6xl font-light leading-tight tracking-tight text-white drop-shadow-2xl animate-fade-in-up opacity-0"
        style="animation-delay: 0.4s"
      >
        Smart Manufacturing &
        <span class="text-[var(--tm-accent-primary)] font-semibold">Industry 4.0</span>
      </h1>

      <!-- Subtitle -->
      <p
        class="mb-12 text-xl md:text-xl lg:text-xl leading-relaxed text-white/90 drop-shadow-lg max-w-260 mx-auto animate-fade-in-up opacity-0"
        style="animation-delay: 0.6s"
      >
        Transforming manufacturing through deep integration of digitalization, intelligence, and
        automation. From traditional assembly lines to highly connected, flexible, and adaptive
        smart production systems.
      </p>

      <!-- Key Insights Row -->
      <div
        class="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-250 mx-auto animate-fade-in-up opacity-0"
        style="animation-delay: 0.8s"
      >
        <!-- Production Efficiency -->
        <div class="text-center">
          <div
            class="mb-4 w-16 h-16 mx-auto rounded-3 bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 flex items-center justify-center"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
            </svg>
          </div>
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2 drop-shadow-lg">
            30-50%
          </div>
          <div class="text-sm uppercase tracking-wider text-white/80 font-medium">
            Production Efficiency Improvement
          </div>
        </div>

        <!-- Smart Manufacturing Boost -->
        <div class="text-center">
          <div
            class="mb-4 w-16 h-16 mx-auto rounded-3 bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 flex items-center justify-center"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
              ></circle>
              <path d="M12 1v6m0 6v6"></path>
              <path d="m15.5 7.5-3 3-3-3"></path>
              <path d="m15.5 16.5-3-3-3 3"></path>
            </svg>
          </div>
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2 drop-shadow-lg">
            20-30%
          </div>
          <div class="text-sm uppercase tracking-wider text-white/80 font-medium">
            Overall Efficiency Boost
          </div>
        </div>

        <!-- Supply Chain Visibility -->
        <div class="text-center">
          <div
            class="mb-4 w-16 h-16 mx-auto rounded-3 bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 flex items-center justify-center"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2 drop-shadow-lg">
            100%
          </div>
          <div class="text-sm uppercase tracking-wider text-white/80 font-medium">
            End-to-End Supply Chain Visibility
          </div>
        </div>
      </div>

      <!-- Key Technologies Highlight -->
      <div
        class="mb-6 animate-fade-in-up opacity-0"
        style="animation-delay: 1s"
      >
        <p class="text-lg text-white/80 mb-6 font-medium">
          Key Technologies Driving Manufacturing Transformation:
        </p>
        <div class="flex flex-wrap justify-center gap-4 max-w-220 mx-auto">
          <span
            class="px-3 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            Industrial IoT
          </span>
          <span
            class="px-3 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            AI & Machine Learning
          </span>
          <span
            class="px-3 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            Collaborative Robots
          </span>
          <span
            class="px-3 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            Digital Twins
          </span>
          <span
            class="px-3 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            Predictive Maintenance
          </span>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up opacity-0"
        style="animation-delay: 1.2s"
      >
        <button
          class="inline-flex items-center justify-center px-8 py-4 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold text-lg hover:bg-[var(--tm-accent-secondary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          @click="openConsultationModal"
        >
          <svg
            class="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M8 12h8M12 8v8"></path>
          </svg>
          Get Manufacturing Intelligence
        </button>

        <button
          class="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          @click="openExpertModal"
        >
          <svg
            class="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M17 8l4 4-4 4M7 8l-4 4 4 4"></path>
          </svg>
          Speak with Industry 4.0 Experts
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Regional Focus Banner -->
    <div
      class="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[var(--tm-accent-primary)]/90 to-[var(--tm-accent-secondary)]/90 backdrop-blur-sm py-4"
    >
      <div class="max-w-350 mx-auto px-6">
        <div class="flex flex-wrap items-center justify-center gap-8 text-white">
          <div class="text-center">
            <div class="text-sm font-medium opacity-90">Regional Focus:</div>
            <div class="text-lg font-semibold">Smart Factories & Automation</div>
          </div>
          <div class="w-px h-8 bg-white/30"></div>
          <div class="text-center">
            <div class="text-sm font-medium opacity-90">Global Reach:</div>
            <div class="text-lg font-semibold">Asia-Pacific & Middle East</div>
          </div>
          <div class="w-px h-8 bg-white/30"></div>
          <div class="text-center">
            <div class="text-sm font-medium opacity-90">Specialization:</div>
            <div class="text-lg font-semibold">Industry 4.0 Transformation</div>
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

  // // Fallback handlers if injection fails
  // const handleExpertModal = () => {
  //   if (openExpertModal) {
  //     openExpertModal()
  //   } else {
  //     console.warn('Expert modal handler not available')
  //   }
  // }

  // const handleConsultationModal = () => {
  //   if (openConsultationModal) {
  //     openConsultationModal()
  //   } else {
  //     console.warn('Consultation modal handler not available')
  //   }
  // }
</script>

<style scoped>
  /* Animation definitions */
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

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  /* Apply animations */
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  /* Ensure text is readable */
  .drop-shadow-2xl {
    filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.5));
  }

  .drop-shadow-lg {
    filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.4));
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-6xl {
      font-size: 3.5rem;
    }
    .text-8xl {
      font-size: 4rem;
    }
    .text-9xl {
      font-size: 4.5rem;
    }
  }
</style>
