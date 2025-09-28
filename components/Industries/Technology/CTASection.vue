<template>
  <section
    class="py-25 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] relative overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-1/2 -top-1/2 w-200 h-200 animate-spin-slow opacity-10">
        <div
          class="w-full h-full bg-gradient-radial from-[var(--tm-bg-white-alpha20)] to-transparent"
        ></div>
      </div>
      <div class="absolute -right-1/2 -bottom-1/2 w-150 h-150 animate-pulse opacity-10">
        <div
          class="w-full h-full bg-gradient-radial from-[var(--tm-bg-white-alpha20)] to-transparent"
        ></div>
      </div>

      <!-- Floating Technology Icons -->
      <div class="absolute top-20 left-1/4 w-16 h-16 opacity-20 animate-float animation-delay-0">
        <svg
          class="w-full h-full text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1"
        >
          <path d="M9 19c-5 0-8-3-8-7s3-7 8-7 8 3 8 7-3 7-8 7z"></path>
          <path d="M15 12h6m-3-3v6"></path>
        </svg>
      </div>
      <div
        class="absolute top-1/3 right-1/4 w-12 h-12 opacity-20 animate-float animation-delay-1000"
      >
        <svg
          class="w-full h-full text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </div>
      <div
        class="absolute bottom-1/3 left-1/6 w-14 h-14 opacity-20 animate-float animation-delay-2000"
      >
        <svg
          class="w-full h-full text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1"
        >
          <path d="M3 3v18h18"></path>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
        </svg>
      </div>
      <div
        class="absolute top-1/2 left-1/8 w-10 h-10 opacity-20 animate-float animation-delay-1500"
      >
        <svg
          class="w-full h-full text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          ></path>
        </svg>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-6 relative z-10 text-center text-white">
      <!-- Section Header -->
      <div class="mb-12">
        <h2 class="text-4xl md:text-6xl font-light mb-6 leading-tight">
          Ready to Lead the Technology
          <span class="block font-normal">Transformation Revolution?</span>
        </h2>
        <p class="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
          Join the companies that are gaining long-term market leadership by combining AI innovation
          with cost-efficient, secure cloud strategies in 2025.
        </p>
      </div>

      <!-- Key Value Propositions -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)] hover:bg-[var(--tm-bg-white-alpha20)] transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-[var(--tm-bg-white-alpha20)] rounded-3 flex items-center justify-center mx-auto mb-4"
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
          <h3 class="text-lg font-semibold mb-3">Market Leadership</h3>
          <p class="text-sm opacity-90">
            Navigate the USD 500 billion AI market and USD 1.2 trillion cloud services landscape
            with expert talent and strategic guidance.
          </p>
        </div>

        <div
          class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)] hover:bg-[var(--tm-bg-white-alpha20)] transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-[var(--tm-bg-white-alpha20)] rounded-3 flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-3">Risk Mitigation</h3>
          <p class="text-sm opacity-90">
            Avoid the USD 4.5 million average cost of security breaches with AI-powered defense and
            zero trust architecture implementation.
          </p>
        </div>

        <div
          class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-6 border border-[var(--tm-bd-white-alpha30)] hover:bg-[var(--tm-bg-white-alpha20)] transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-[var(--tm-bg-white-alpha20)] rounded-3 flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-3">Cost Optimization</h3>
          <p class="text-sm opacity-90">
            Achieve 15-25% cost savings through FinOps implementation and AI-driven workload
            optimization in your cloud infrastructure.
          </p>
        </div>
      </div>

      <!-- Urgency Indicators -->
      <div
        class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-8 mb-12 border border-[var(--tm-bd-white-alpha30)]"
      >
        <h3 class="text-2xl font-semibold mb-6">The Time to Act is Now</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div class="text-3xl font-bold mb-2">60%</div>
            <p class="text-sm opacity-90">Large enterprises already adopting FinOps teams</p>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">2025</div>
            <p class="text-sm opacity-90">EU AI Act implementation with 6% revenue fines</p>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">50%</div>
            <p class="text-sm opacity-90">Enterprise data processing at edge by 2026</p>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">20%</div>
            <p class="text-sm opacity-90">Cloud spending growth rate demanding optimization</p>
          </div>
        </div>
      </div>

      <!-- Primary CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
        <button
          class="inline-flex items-center justify-center px-10 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)]"
          @click="openExpertModal"
        >
          <svg
            class="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle
              cx="9"
              cy="7"
              r="4"
            ></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Speak with Technology Experts</span>
        </button>

        <button
          class="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-[var(--tm-bg-white-alpha10)] transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          @click="openConsultationModal"
        >
          <svg
            class="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span>Schedule Strategic Consultation</span>
        </button>
      </div>

      <!-- Contact Information -->
      <div
        class="bg-[var(--tm-bg-white-alpha10)] backdrop-blur-sm rounded-6 p-8 border border-[var(--tm-bd-white-alpha30)]"
      >
        <h3 class="text-xl font-semibold mb-6">Connect with Our Global Technology Team</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <!-- Singapore HQ -->
          <div class="space-y-3">
            <h4 class="font-semibold text-lg">Singapore HQ</h4>
            <div class="space-y-2 text-sm opacity-90">
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>+65 6386 8322</span>
              </div>
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
                <span>The Guoco Tower, Office1801</span>
              </div>
            </div>
          </div>

          <!-- Dubai Office -->
          <div class="space-y-3">
            <h4 class="font-semibold text-lg">Dubai Office</h4>
            <div class="space-y-2 text-sm opacity-90">
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>+971 55 829 6351</span>
              </div>
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
                <span>Aspin Commercial Tower, DIFC</span>
              </div>
            </div>
          </div>

          <!-- Malaysia Office -->
          <div class="space-y-3">
            <h4 class="font-semibold text-lg">Malaysia Office</h4>
            <div class="space-y-2 text-sm opacity-90">
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>+60 322 469 000</span>
              </div>
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  ></circle>
                </svg>
                <span>Aspire Tower, KL Eco City</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Digital Channels -->
        <div class="mt-8 pt-6 border-t border-[var(--tm-bd-white-alpha30)]">
          <div class="flex items-center justify-center gap-8 text-sm">
            <a
              href="https://www.vmmcae.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                ></circle>
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
              <span>www.vmmcae.com</span>
            </a>
            <a
              href="https://www.linkedin.com/company/vmmc-uae"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Final Message -->
      <div class="mt-12 text-center">
        <p class="text-lg opacity-95 font-light">
          The next phase of AI governance will focus on global interoperability,
          <br class="hidden md:block" />
          shaping how AI is adopted across industries. Be ready.
        </p>
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
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }

  .animation-delay-0 {
    animation-delay: 0s;
  }

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-1500 {
    animation-delay: 1.5s;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  /* Background gradient utilities */
  .bg-gradient-radial {
    background: radial-gradient(
      circle,
      var(--first-color, transparent) 0%,
      var(--second-color, transparent) 50%
    );
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-6xl {
      font-size: 3rem;
    }

    .lg\:grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }

    .md\:grid-cols-3 {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .lg\:grid-cols-4 {
      grid-template-columns: 1fr;
    }

    .sm\:flex-row {
      flex-direction: column;
    }
  }
</style>
