<!-- components/Industries/Logistics/CTASection.vue -->
<template>
  <section
    class="py-25 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] relative overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-150 h-150 bg-white/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-120 h-120 bg-white/5 rounded-full blur-3xl"></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-white/5 rounded-full blur-3xl animate-pulse"
      ></div>
    </div>

    <!-- Animated Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0);
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-6 relative z-1">
      <div class="text-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold mb-8"
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
          TRANSFORM YOUR SUPPLY CHAIN
        </div>

        <!-- Main Heading -->
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Optimize Your
          <br />
          <span class="text-white/90">Logistics Operations?</span>
        </h2>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto leading-relaxed mb-12">
          Partner with VMMC to access top talent in supply chain optimization, warehouse automation,
          green logistics, IoT, and digital transformation
        </p>

        <!-- Value Propositions -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-280 mx-auto mb-12">
          <div class="bg-white/10 backdrop-blur-sm rounded-6 p-6 border border-white/20">
            <div
              class="w-12 h-12 bg-white/20 rounded-4 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Rapid Placement</h3>
            <p class="text-sm text-white/80">
              Access pre-vetted logistics professionals within 48 hours
            </p>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-6 p-6 border border-white/20">
            <div
              class="w-12 h-12 bg-white/20 rounded-4 flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Industry Expertise</h3>
            <p class="text-sm text-white/80">
              18+ years recruiting specialized logistics and supply chain talent
            </p>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-6 p-6 border border-white/20">
            <div
              class="w-12 h-12 bg-white/20 rounded-4 flex items-center justify-center mx-auto mb-4"
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
            <h3 class="text-lg font-semibold text-white mb-2">Global Network</h3>
            <p class="text-sm text-white/80">
              Access to supply chain innovators across multiple markets
            </p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <button
            class="group inline-flex items-center justify-center px-10 py-5 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            @click="openConsultationModal"
          >
            <span>Schedule Free Consultation</span>
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
            class="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
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
            <span>Talk to Our Experts</span>
          </button>
        </div>

        <!-- Contact Information -->
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 text-white/90">
          <a
            href="tel:+971501234567"
            class="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
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
            <span class="font-semibold">+971 50 123 4567</span>
          </a>

          <a
            href="mailto:logistics@vmmcae.com"
            class="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span class="font-semibold">logistics@vmmcae.com</span>
          </a>

          <div class="inline-flex items-center gap-2">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="font-semibold">Dubai, UAE</span>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-15 pt-12 border-t border-white/20">
          <p class="text-white/80 text-sm mb-6">
            Trusted by leading logistics providers and supply chain innovators
          </p>
          <div class="flex flex-wrap items-center justify-center gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">1,800+</div>
              <div class="text-sm text-white/70">Logistics Experts Placed</div>
            </div>
            <div class="hidden md:block w-px h-12 bg-white/20"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">350+</div>
              <div class="text-sm text-white/70">Supply Chain Companies Served</div>
            </div>
            <div class="hidden md:block w-px h-12 bg-white/20"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">98%</div>
              <div class="text-sm text-white/70">Client Satisfaction</div>
            </div>
            <div class="hidden md:block w-px h-12 bg-white/20"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">18 Years</div>
              <div class="text-sm text-white/70">Supply Chain Sector Focus</div>
            </div>
          </div>
        </div>

        <!-- Specializations -->
        <div class="mt-12">
          <p class="text-white/80 text-sm mb-4">Our Specializations</p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              Supply Chain Optimization
            </span>
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              Warehouse Automation
            </span>
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              Green Logistics
            </span>
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              Digital Platforms
            </span>
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              IoT & Tracking
            </span>
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              AI & Machine Learning
            </span>
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              Blockchain Integration
            </span>
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              Risk Management
            </span>
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              Digital Twins
            </span>
            <span
              class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium"
            >
              Carbon Monitoring
            </span>
          </div>
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
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
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
    .text-6xl {
      font-size: 3rem;
    }
  }
</style>
