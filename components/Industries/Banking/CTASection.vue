<template>
  <section
    class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div
        class="absolute top-1/4 left-1/6 w-40 h-40 bg-white/5 rounded-full animate-pulse animate-duration-4s"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/6 w-60 h-60 bg-white/3 rounded-full animate-pulse animate-duration-6s animate-delay-1000ms"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-80 h-80 bg-white/2 rounded-full animate-spin animate-duration-20s transform -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>

    <div class="relative z-1 max-w-1200px mx-auto px-5 text-center">
      <!-- Main CTA Header -->
      <div class="mb-12">
        <div
          class="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
        >
          <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span class="text-white text-sm font-500 uppercase tracking-wider">
            Ready to Transform Your Banking Operations?
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-300 text-white mb-6 leading-tight">
          Partner with
          <span
            class="font-600 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            Banking Excellence
          </span>
        </h2>

        <p class="text-xl md:text-2xl text-white/90 max-w-800px mx-auto leading-relaxed">
          Connect with our banking and finance experts to accelerate your digital transformation,
          optimize talent acquisition, and navigate regulatory challenges with confidence.
        </p>
      </div>

      <!-- Value Propositions -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div
          class="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
        >
          <div
            class="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#60A5FA"
              stroke-width="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 class="text-lg font-600 text-white mb-3">Expert Consultation</h3>
          <p class="text-sm text-white/85 leading-relaxed">
            Free 60-minute strategy session with our banking industry specialists to assess your
            needs and opportunities.
          </p>
        </div>

        <div
          class="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
        >
          <div
            class="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-400/30"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4ADE80"
              stroke-width="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle
                cx="12"
                cy="7"
                r="4"
              />
            </svg>
          </div>
          <h3 class="text-lg font-600 text-white mb-3">Talent Solutions</h3>
          <p class="text-sm text-white/85 leading-relaxed">
            Access our network of 2,000+ banking professionals and accelerate your recruitment with
            30-day placement guarantee.
          </p>
        </div>

        <div
          class="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
        >
          <div
            class="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A78BFA"
              stroke-width="2"
            >
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect
                x="8"
                y="2"
                width="8"
                height="4"
                rx="1"
                ry="1"
              />
              <path d="m9 14 2 2 4-4" />
            </svg>
          </div>
          <h3 class="text-lg font-600 text-white mb-3">Digital Transformation</h3>
          <p class="text-sm text-white/85 leading-relaxed">
            Strategic consulting to modernize operations, implement AI solutions, and achieve 90%
            digital adoption rates.
          </p>
        </div>
      </div>

      <!-- Primary CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <NuxtLink
          to="/contact"
          class="group inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-600 rounded-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 no-underline min-w-80 justify-center"
        >
          <span>Schedule Free Consultation</span>
          <svg
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </NuxtLink>

        <a
          href="tel:+971558296351"
          class="inline-flex items-center gap-3 px-10 py-4 bg-white/10 text-white text-lg font-600 rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 transition-all duration-300 no-underline min-w-80 justify-center backdrop-blur-sm"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <span>Call Banking Experts</span>
        </a>
      </div>

      <!-- Secondary Actions -->
      <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
        <h3 class="text-2xl md:text-3xl font-600 text-white mb-6">Explore More Resources</h3>
        <p class="text-lg text-white/85 mb-8 max-w-600px mx-auto">
          Access comprehensive industry reports, market insights, and strategic recommendations
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            class="group flex flex-col items-center p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            @click="scrollToReports"
          >
            <div
              class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line
                  x1="16"
                  y1="13"
                  x2="8"
                  y2="13"
                />
                <line
                  x1="16"
                  y1="17"
                  x2="8"
                  y2="17"
                />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <span class="text-sm font-500 text-white">Industry Reports</span>
          </button>

          <NuxtLink
            to="/industries/banking-finance/digital-transformation"
            class="group flex flex-col items-center p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 no-underline"
          >
            <div
              class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line
                  x1="12"
                  y1="22"
                  x2="12"
                  y2="12"
                />
              </svg>
            </div>
            <span class="text-sm font-500 text-white">Digital Banking</span>
          </NuxtLink>

          <button
            class="group flex flex-col items-center p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div
              class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line
                  x1="12"
                  y1="15"
                  x2="12"
                  y2="3"
                />
              </svg>
            </div>
            <span class="text-sm font-500 text-white">Download Resources</span>
          </button>

          <NuxtLink
            to="/careers"
            class="group flex flex-col items-center p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 no-underline"
          >
            <div
              class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
              >
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="14"
                  rx="2"
                  ry="2"
                />
                <line
                  x1="8"
                  y1="21"
                  x2="16"
                  y2="21"
                />
                <line
                  x1="12"
                  y1="17"
                  x2="12"
                  y2="21"
                />
              </svg>
            </div>
            <span class="text-sm font-500 text-white">Career Opportunities</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-16 pt-12 border-t border-white/20">
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div class="text-center">
            <div class="text-3xl font-700 text-white mb-1">15+</div>
            <div class="text-sm text-white/75 uppercase tracking-wider">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-700 text-white mb-1">500+</div>
            <div class="text-sm text-white/75 uppercase tracking-wider">Banking Placements</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-700 text-white mb-1">96%</div>
            <div class="text-sm text-white/75 uppercase tracking-wider">Client Satisfaction</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-700 text-white mb-1">2,000+</div>
            <div class="text-sm text-white/75 uppercase tracking-wider">Professional Network</div>
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="mt-12 text-center">
        <p class="text-white/70 text-sm mb-4">
          Immediate assistance available 24/7 across GCC markets
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/85 text-sm"
        >
          <div class="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>banking@vmmcae.com</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle
                cx="12"
                cy="10"
                r="3"
              />
            </svg>
            <span>Dubai | Abu Dhabi | Riyadh | Doha</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Scroll to reports section
  const scrollToReports = () => {
    const reportsElement =
      document.querySelector('.reports-section') || document.querySelector('[class*="reports"]')
    if (reportsElement) {
      reportsElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
</script>

<style scoped>
  /* Custom animation delays */
  .animate-delay-1000ms {
    animation-delay: 1000ms;
  }

  .animate-duration-4s {
    animation-duration: 4s;
  }

  .animate-duration-6s {
    animation-duration: 6s;
  }

  .animate-duration-20s {
    animation-duration: 20s;
  }
</style>
