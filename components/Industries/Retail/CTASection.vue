<!-- components/Industries/Retail/CTASection.vue -->
<template>
  <section
    class="relative py-25 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -left-1/4 -top-1/4 w-120 h-120 bg-white/10 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute -right-1/4 -bottom-1/4 w-100 h-100 bg-white/10 rounded-full blur-3xl animate-float"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 max-w-300 mx-auto px-6 text-center">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-8"
      >
        <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span class="text-white text-sm font-semibold tracking-wide">
          TRANSFORM YOUR RETAIL BUSINESS
        </span>
      </div>

      <!-- Main Heading -->
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
        Ready to Lead the
        <span class="block mt-2">Retail Revolution?</span>
      </h2>

      <!-- Subheading -->
      <p class="text-xl md:text-2xl text-white/90 mb-10 max-w-180 mx-auto leading-relaxed">
        Partner with VMMC to build exceptional retail teams that drive omnichannel success, social
        commerce growth, and sustainable practices.
      </p>

      <!-- Key Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-250 mx-auto">
        <div
          class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-4 p-6 hover:bg-white/15 transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
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
          <h3 class="text-white font-semibold mb-2">Fast Placement</h3>
          <p class="text-white/80 text-sm">Average 21-day time-to-hire for retail positions</p>
        </div>

        <div
          class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-4 p-6 hover:bg-white/15 transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-white font-semibold mb-2">Quality Guarantee</h3>
          <p class="text-white/80 text-sm">96% placement success rate with verified talent</p>
        </div>

        <div
          class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-4 p-6 hover:bg-white/15 transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
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
          <h3 class="text-white font-semibold mb-2">GCC Expertise</h3>
          <p class="text-white/80 text-sm">Deep regional knowledge and talent networks</p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-6">
        <button
          class="group inline-flex items-center justify-center px-10 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] min-w-64"
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
          class="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:-translate-y-1 min-w-64"
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
          <span>Talk to Experts</span>
        </button>
      </div>

      <!-- Contact Information -->
      <div class="mt-12 pt-8 border-t border-white/20">
        <p class="text-white/80 mb-4">Prefer to reach out directly?</p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
          <a
            href="tel:+97143888001"
            class="inline-flex items-center gap-2 hover:text-white/80 transition-colors duration-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span class="font-medium">+971 4 388 8001</span>
          </a>

          <a
            href="https://wa.me/971501994242"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 hover:text-white/80 transition-colors duration-300"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              ></path>
            </svg>
            <span class="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-80">
        <div class="text-center">
          <div class="text-2xl font-bold text-white mb-1">1,800+</div>
          <div class="text-sm text-white/70">Retail Placements</div>
        </div>
        <div class="hidden md:block w-px h-12 bg-white/30"></div>
        <div class="text-center">
          <div class="text-2xl font-bold text-white mb-1">15 Years</div>
          <div class="text-sm text-white/70">Industry Experience</div>
        </div>
        <div class="hidden md:block w-px h-12 bg-white/30"></div>
        <div class="text-center">
          <div class="text-2xl font-bold text-white mb-1">96%</div>
          <div class="text-sm text-white/70">Success Rate</div>
        </div>
        <div class="hidden md:block w-px h-12 bg-white/30"></div>
        <div class="text-center">
          <div class="text-2xl font-bold text-white mb-1">GCC</div>
          <div class="text-sm text-white/70">Regional Leader</div>
        </div>
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
      transform: translateY(-30px);
    }
  }

  .animate-float {
    animation: float 8s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
