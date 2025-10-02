<template>
  <section
    class="py-25 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] relative overflow-hidden"
  >
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 w-120 h-120 bg-white/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-100 h-100 bg-white/10 rounded-full blur-3xl"></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 rounded-full blur-3xl"
    ></div>

    <div class="max-w-300 mx-auto px-6 relative z-1">
      <!-- Main Content -->
      <div class="text-center mb-12">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          TRANSFORM YOUR EDUCATION BUSINESS
        </div>

        <!-- Title -->
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Build Your
          <br />
          <span class="text-white/90">Education Dream Team?</span>
        </h2>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto leading-relaxed mb-10">
          Partner with VMMC to recruit top talent for online learning, EdTech innovation, corporate
          training, and educational transformation
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col md:flex-row gap-6 justify-center mb-15">
          <button
            class="group inline-flex items-center justify-center px-10 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            @click="openConsultationModal"
          >
            <span>Get Started Today</span>
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            Talk to Our Experts
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="flex flex-wrap items-center justify-center gap-8 mb-12">
          <div class="flex items-center gap-2 text-white/90">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-sm font-medium">1,200+ Education Placements</span>
          </div>
          <div class="flex items-center gap-2 text-white/90">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-sm font-medium">15 Years Industry Focus</span>
          </div>
          <div class="flex items-center gap-2 text-white/90">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-sm font-medium">Global Talent Network</span>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Feature 1 -->
        <div
          class="bg-white/10 backdrop-blur-md rounded-6 p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="w-12 h-12 bg-white/20 rounded-4 flex items-center justify-center mb-4">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Fast Turnaround</h3>
          <p class="text-sm text-white/80">
            Access qualified education candidates within 48 hours of initial consultation
          </p>
        </div>

        <!-- Feature 2 -->
        <div
          class="bg-white/10 backdrop-blur-md rounded-6 p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="w-12 h-12 bg-white/20 rounded-4 flex items-center justify-center mb-4">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Verified Expertise</h3>
          <p class="text-sm text-white/80">
            Rigorous vetting process ensuring EdTech and education sector expertise
          </p>
        </div>

        <!-- Feature 3 -->
        <div
          class="bg-white/10 backdrop-blur-md rounded-6 p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="w-12 h-12 bg-white/20 rounded-4 flex items-center justify-center mb-4">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Global Reach</h3>
          <p class="text-sm text-white/80">
            Access to international education talent across MENA, Europe, and Asia
          </p>
        </div>
      </div>

      <!-- Stats Banner -->
      <div class="bg-white/10 backdrop-blur-md rounded-8 p-8 border border-white/20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div class="text-sm text-white/80">Client Satisfaction</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
            <div class="text-sm text-white/80">EdTech Companies</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">85%</div>
            <div class="text-sm text-white/80">Retention Rate</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div class="text-sm text-white/80">Support Available</div>
          </div>
        </div>
      </div>

      <!-- Bottom Text -->
      <div class="text-center mt-12">
        <p class="text-white/80 text-sm">
          Join leading education institutions and EdTech companies who trust VMMC for their talent
          needs
        </p>
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
  /* Component-specific styles if needed */
</style>
