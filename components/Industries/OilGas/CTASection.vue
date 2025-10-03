<template>
  <section
    class="cta-section py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style="background: linear-gradient(135deg, #f59e0b, #d97706)"
      ></div>
      <div
        class="absolute bottom-10 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse"
        style="background: linear-gradient(135deg, #1d4ed8, #3b82f6); animation-delay: 1.5s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse"
        style="background: linear-gradient(135deg, #059669, #10b981); animation-delay: 3s"
      ></div>
    </div>

    <!-- Animated Grid Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="w-full h-full"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="container mx-auto max-w-[1400px] px-8 relative z-10">
      <!-- Industry Transformation Summary -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg"
          >
            <svg
              class="h-6 w-6"
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
          <span class="text-sm font-medium text-amber-400 uppercase tracking-wider">
            Industry Transformation
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl font-light mb-6 text-white">
          Navigate the Future of
          <span class="block text-amber-400 font-medium">Oil & Gas Industry</span>
        </h2>

        <p class="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mx-auto">
          The oil and gas industry stands at a pivotal crossroads. From unprecedented M&A activities
          worth $206.6B to digital transformation driving smart operations, companies must adapt to
          survive and thrive in the evolving energy landscape.
        </p>
      </div>

      <!-- Key Industry Insights -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <!-- Market Evolution -->
        <div
          class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
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
            <h3 class="text-xl font-semibold text-white">Market Consolidation</h3>
          </div>
          <p class="text-white/80 leading-relaxed mb-4">
            331% surge in M&A activities creating stronger, more efficient industry players focused
            on future drilling potential and operational synergies.
          </p>
          <div class="text-3xl font-bold text-cyan-400 mb-1">$206.6B</div>
          <div class="text-sm text-white/60">Total M&A Value 2024</div>
        </div>

        <!-- Digital Revolution -->
        <div
          class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
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
            <h3 class="text-xl font-semibold text-white">Digital Transformation</h3>
          </div>
          <p class="text-white/80 leading-relaxed mb-4">
            AI-driven optimization and IoT deployment revolutionizing operations from exploration to
            downstream processing.
          </p>
          <div class="text-3xl font-bold text-purple-400 mb-1">70%</div>
          <div class="text-sm text-white/60">Top Companies Adopted AI</div>
        </div>

        <!-- Energy Transition -->
        <div
          class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
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
            <h3 class="text-xl font-semibold text-white">Sustainable Future</h3>
          </div>
          <p class="text-white/80 leading-relaxed mb-4">
            Leading the transition with CCUS technology, natural gas bridge solutions, and renewable
            energy investments.
          </p>
          <div class="text-3xl font-bold text-green-400 mb-1">2030</div>
          <div class="text-sm text-white/60">Net Zero Commitment</div>
        </div>
      </div>

      <!-- VMMC Value Proposition -->
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-16">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-white mb-4">
            Why Partner with VMMC for Oil & Gas Excellence?
          </h3>
          <p class="text-lg text-white/80 max-w-3xl mx-auto">
            Navigate industry transformation with confidence. Our deep expertise spans market
            analysis, digital implementation, and strategic workforce development across the entire
            value chain.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Market Intelligence -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
            >
              <svg
                class="w-8 h-8"
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
            <h4 class="text-lg font-semibold text-white mb-2">Market Intelligence</h4>
            <p class="text-sm text-white/70">
              Real-time market analysis and strategic insights for informed decision-making
            </p>
          </div>

          <!-- Digital Strategy -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
            >
              <svg
                class="w-8 h-8"
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
            <h4 class="text-lg font-semibold text-white mb-2">Digital Strategy</h4>
            <p class="text-sm text-white/70">
              AI, IoT, and automation implementation for operational excellence
            </p>
          </div>

          <!-- Talent Solutions -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-white mb-2">Expert Talent</h4>
            <p class="text-sm text-white/70">
              Specialized recruitment for digital transformation and technical roles
            </p>
          </div>

          <!-- Sustainability Consulting -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
            >
              <svg
                class="w-8 h-8"
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
            <h4 class="text-lg font-semibold text-white mb-2">ESG Transition</h4>
            <p class="text-sm text-white/70">
              Carbon reduction strategies and sustainable energy solutions
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mb-16">
        <h3 class="text-3xl md:text-4xl font-light text-white mb-6">
          Ready to Transform Your Oil & Gas Operations?
        </h3>
        <p class="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
          Partner with VMMC's industry specialists to navigate market consolidation, implement
          digital solutions, and build sustainable competitive advantages in the evolving energy
          landscape.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.6)] transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Schedule Strategic Consultation</span>
            <svg
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>

          <a
            href="mailto:info@vmmcglobal.com"
            class="inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Email Our Experts</span>
          </a>
        </div>

        <!-- Contact Information -->
        <div class="flex flex-wrap items-center justify-center gap-8 text-white/60">
          <div class="flex items-center gap-2">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+971-4-376-4600</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Dubai, UAE</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>24/7 Support Available</span>
          </div>
        </div>
      </div>

      <!-- Success Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-amber-400 mb-2">15+</div>
          <div class="text-sm text-white/70">Years Industry Experience</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
          <div class="text-sm text-white/70">Energy Projects Delivered</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-green-400 mb-2">150+</div>
          <div class="text-sm text-white/70">Digital Transformations</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-purple-400 mb-2">95%</div>
          <div class="text-sm text-white/70">Client Satisfaction Rate</div>
        </div>
      </div>
    </div>

    <!-- Floating Action Button for Mobile -->
    <div class="fixed bottom-6 right-6 z-50 md:hidden">
      <NuxtLink
        to="/contact"
        class="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.6)] transform hover:scale-110 transition-all duration-300"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Component logic for CTA section
</script>

<style scoped>
  /* Custom pulse animation */
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

    .py-20 {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }

  /* Dark mode adaptations */
  .bg-white\/10 {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .bg-white\/5 {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .border-white\/20 {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .border-white\/10 {
    border-color: rgba(255, 255, 255, 0.1);
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    .animate-pulse {
      animation: none;
      opacity: 0.1;
    }

    .hover\:-translate-y-1:hover,
    .hover\:scale-110:hover,
    .group-hover\:translate-x-1 {
      transform: none;
    }

    .transition-all,
    .transition-transform {
      transition: none;
    }
  }

  /* High contrast support */
  @media (prefers-contrast: high) {
    .text-white\/90,
    .text-white\/80,
    .text-white\/70,
    .text-white\/60 {
      color: white;
    }

    .border-white\/30,
    .border-white\/20,
    .border-white\/10 {
      border-color: white;
    }
  }
</style>
