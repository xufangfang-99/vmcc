<template>
  <section class="relative overflow-hidden min-h-100vh flex items-center bg-[var(--tm-bg-primary)]">
    <!-- Background Image Layer -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        alt="Smart Construction and Infrastructure"
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
    <div class="relative z-10 w-full max-w-400 mx-auto px-6 text-center">
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
          Construction & Smart Cities
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
        <span class="text-white font-semibold text-lg">Industry at a Turning Point</span>
      </div>

      <!-- Main Headline -->
      <h1
        class="mb-8 text-6xl md:text-8xl lg:text-5xl font-light leading-tight tracking-tight text-white drop-shadow-2xl animate-fade-in-up opacity-0"
        style="animation-delay: 0.4s"
      >
        Construction &
        <span class="text-[var(--tm-accent-primary)] font-semibold">Smart Cities</span>
      </h1>

      <!-- Subtitle -->
      <p
        class="mb-6 text-xl md:text-2xl lg:text-xl leading-relaxed text-white/90 drop-shadow-lg max-w-200 mx-auto animate-fade-in-up opacity-0"
        style="animation-delay: 0.6s"
      >
        Transforming infrastructure through sustainable building practices, digital construction
        technologies, and smart city innovations reshaping the global landscape.
      </p>

      <!-- Key Insights Row -->
      <div
        class="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-250 mx-auto animate-fade-in-up opacity-0"
        style="animation-delay: 0.8s"
      >
        <!-- Infrastructure Investment -->
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
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2 drop-shadow-lg">
            $570B
          </div>
          <div class="text-sm uppercase tracking-wider text-white/80 font-medium">
            Green Materials Market by 2030
          </div>
        </div>

        <!-- Smart Cities Investment -->
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
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"
              ></path>
              <path d="M12 5L8 21l4-7 4 7-4-16"></path>
            </svg>
          </div>
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2 drop-shadow-lg">
            $2T
          </div>
          <div class="text-sm uppercase tracking-wider text-white/80 font-medium">
            Smart City Investments by 2030
          </div>
        </div>

        <!-- Efficiency Improvement -->
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
              <path d="M12 2v20M2 12h20"></path>
              <path d="m19 9-7 7-7-7"></path>
            </svg>
          </div>
          <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2 drop-shadow-lg">
            50%
          </div>
          <div class="text-sm uppercase tracking-wider text-white/80 font-medium">
            Construction Time Reduction
          </div>
        </div>
      </div>

      <!-- Key Technologies Highlight -->
      <div
        class="mb-12 animate-fade-in-up opacity-0"
        style="animation-delay: 1s"
      >
        <p class="text-lg text-white/80 mb-6 font-medium">
          Leading Technologies Reshaping Construction:
        </p>
        <div class="flex flex-wrap justify-center gap-4 max-w-200 mx-auto">
          <span
            class="px-3 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            BIM & Digital Twins
          </span>
          <span
            class="px-3 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            3D Printing
          </span>
          <span
            class="px-3 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            IoT & AI Analytics
          </span>
          <span
            class="px-6 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            Modular Construction
          </span>
          <span
            class="px-3 py-3 rounded-full bg-[var(--tm-bg-white-alpha20)] backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-[var(--tm-accent-primary)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 cursor-default"
          >
            Green Materials
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
          Get Industry Insights
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
          Speak with Experts
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
      <div class="max-w-400 mx-auto px-6">
        <div class="flex flex-wrap items-center justify-center gap-8 text-white">
          <div class="text-center">
            <div class="text-sm font-medium opacity-90">Regional Focus:</div>
            <div class="text-lg font-semibold">NEOM & Masdar City</div>
          </div>
          <div class="w-px h-8 bg-white/30"></div>
          <div class="text-center">
            <div class="text-sm font-medium opacity-90">Global Reach:</div>
            <div class="text-lg font-semibold">Asia-Pacific & Middle East</div>
          </div>
          <div class="w-px h-8 bg-white/30"></div>
          <div class="text-center">
            <div class="text-sm font-medium opacity-90">Specialization:</div>
            <div class="text-lg font-semibold">Sustainable Infrastructure</div>
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
