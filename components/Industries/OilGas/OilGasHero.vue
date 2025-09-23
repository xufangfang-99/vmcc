<template>
  <section class="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center">
    <!-- Background Image Layer -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
        alt="Oil & Gas Industry Background"
        class="h-full w-full object-cover object-center"
      />
      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"
      ></div>
    </div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div
        class="absolute right-20 top-20 h-40 w-40 rounded-full opacity-10 animate-pulse"
        style="background-color: var(--tm-accent-primary)"
      ></div>
      <div
        class="absolute bottom-32 left-20 h-24 w-24 rounded-full opacity-10 animate-pulse"
        style="background-color: var(--tm-accent-secondary)"
        :style="{ animationDelay: '1s' }"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 h-32 w-32 rounded-full opacity-5 animate-pulse"
        style="background-color: var(--tm-accent-tertiary)"
        :style="{ animationDelay: '2s' }"
      ></div>
    </div>

    <div class="relative z-10 mx-auto w-full max-w-[1400px] px-4 text-center md:px-8">
      <!-- Industry Badge -->
      <div
        class="mx-auto mb-8 flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs backdrop-blur-md animate-[fade-in-up_0.8s_ease-out_forwards] md:gap-3 md:px-6 md:py-3 sm:text-sm"
      >
        <div
          class="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white"
        >
          ⚡
        </div>
        <span class="font-medium text-white/90">Energy & Resources</span>
        <span class="font-light text-white/60">/</span>
        <span class="font-semibold text-amber-400 drop-shadow-sm">Oil & Gas</span>
      </div>

      <!-- Main Title -->
      <h1
        class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl animate-[fade-in-up_0.8s_ease-out_0.2s_forwards] opacity-0 sm:text-5xl md:mb-8 md:px-0 md:text-6xl md:leading-[0.9] lg:text-7xl xl:text-8xl"
      >
        Oil & Gas Industry
        <span class="block text-amber-400 font-medium mt-2">Transformation</span>
      </h1>

      <!-- Subtitle -->
      <p
        class="mx-auto mb-8 max-w-full px-4 text-base leading-relaxed text-white/90 drop-shadow-lg animate-[fade-in-up_0.8s_ease-out_0.4s_forwards] opacity-0 sm:text-lg md:mb-12 md:max-w-4xl md:px-0 md:text-xl lg:text-2xl"
      >
        Navigate the evolving energy landscape with comprehensive insights on market trends, digital
        transformation, and sustainable practices. From upstream exploration to downstream
        operations, discover how industry leaders are adapting to the future of energy.
      </p>

      <!-- Key Statistics Row -->
      <div
        class="flex flex-col items-center justify-center gap-6 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards] opacity-0 sm:flex-row sm:gap-12 lg:gap-16 mb-12"
      >
        <div class="text-center">
          <div class="mb-2 text-4xl font-semibold text-amber-400 drop-shadow-lg">$206.6B</div>
          <div class="text-sm uppercase tracking-wider text-white/80">M&A Value 2024</div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-4xl font-semibold text-amber-400 drop-shadow-lg">113B</div>
          <div class="text-sm uppercase tracking-wider text-white/80">UAE Oil Reserves</div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-4xl font-semibold text-amber-400 drop-shadow-lg">5M</div>
          <div class="text-sm uppercase tracking-wider text-white/80">ADNOC Target BPD</div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-4xl font-semibold text-amber-400 drop-shadow-lg">2030</div>
          <div class="text-sm uppercase tracking-wider text-white/80">Net Zero Target</div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col items-center justify-center gap-4 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards] opacity-0 sm:flex-row mb-16"
      >
        <a
          href="#market-trends"
          class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-medium text-white shadow-[0_4px_20px_rgba(245,158,11,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,158,11,0.6)] hover:scale-105 group"
        >
          <span>Explore Market Insights</span>
          <svg
            class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/50"
        >
          <span>Consult Our Experts</span>
        </NuxtLink>
      </div>

      <!-- Quick Navigation -->
      <div
        class="flex flex-wrap items-center justify-center gap-4 animate-[fade-in-up_0.8s_ease-out_1s_forwards] opacity-0"
      >
        <a
          href="#market-trends"
          class="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-amber-400"
        >
          <span>Market Trends</span>
          <svg
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        <span class="text-white/30">•</span>
        <a
          href="#energy-transition"
          class="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-amber-400"
        >
          <span>Energy Transition</span>
          <svg
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        <span class="text-white/30">•</span>
        <a
          href="#digital-transformation"
          class="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-amber-400"
        >
          <span>Digital Innovation</span>
          <svg
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        <span class="text-white/30">•</span>
        <a
          href="#uae-development"
          class="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-amber-400"
        >
          <span>UAE Development</span>
          <svg
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <!-- Industry Highlights -->
      <div
        class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-[fade-in-up_0.8s_ease-out_1.2s_forwards] opacity-0"
      >
        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <svg
                class="w-4 h-4 text-white"
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
            </div>
            <h3 class="text-white font-semibold">Market Analysis</h3>
          </div>
          <p class="text-white/80 text-sm">
            Global oil demand at 100M BPD with 0.9% growth rate, while Brent crude stabilizes at
            $79.86 average.
          </p>
        </div>

        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-white font-semibold">Energy Transition</h3>
          </div>
          <p class="text-white/80 text-sm">
            Industry adapting to carbon neutrality goals through CCS technology and renewable energy
            investments.
          </p>
        </div>

        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-white font-semibold">Digital Innovation</h3>
          </div>
          <p class="text-white/80 text-sm">
            AI-driven optimization and IoT deployment transforming operations with 70% adoption rate
            among top companies.
          </p>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div
        class="flex h-8 w-5 items-end justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm"
      >
        <div class="h-2 w-1 animate-pulse rounded-full bg-white/60"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic can be added here if needed
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

  /* Enhanced pulse animation for background elements */
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.1;
      transform: scale(1);
    }
    50% {
      opacity: 0.2;
      transform: scale(1.05);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2.5rem;
    }

    .min-h-\[90vh\] {
      min-height: 100vh;
    }
  }

  /* Hover effects for CTA buttons */
  .group:hover svg {
    transform: translateX(4px);
  }

  /* Smooth scroll behavior for anchor links */
  html {
    scroll-behavior: smooth;
  }

  /* Dark mode adaptations */
  @media (prefers-color-scheme: dark) {
    .bg-white\/10 {
      background-color: rgba(255, 255, 255, 0.05);
    }

    .border-white\/20 {
      border-color: rgba(255, 255, 255, 0.1);
    }
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    .animate-pulse,
    .animate-bounce,
    .animate-\[fade-in-up_0\.8s_ease-out_forwards\],
    .animate-\[fade-in-up_0\.8s_ease-out_0\.2s_forwards\],
    .animate-\[fade-in-up_0\.8s_ease-out_0\.4s_forwards\],
    .animate-\[fade-in-up_0\.8s_ease-out_0\.6s_forwards\],
    .animate-\[fade-in-up_0\.8s_ease-out_0\.8s_forwards\],
    .animate-\[fade-in-up_0\.8s_ease-out_1s_forwards\],
    .animate-\[fade-in-up_0\.8s_ease-out_1\.2s_forwards\] {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .text-white\/70,
    .text-white\/80,
    .text-white\/90 {
      color: white;
    }

    .border-white\/20,
    .border-white\/30 {
      border-color: white;
    }
  }
</style>
