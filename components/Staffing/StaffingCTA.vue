<template>
  <section class="staffing-cta-section py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 left-0 w-120 h-120 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-transparent rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-100 h-100 bg-gradient-to-tl from-[var(--tm-accent-gradient-to)] to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-5 relative z-1">
      <!-- 服务总览 -->
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Complete Staffing Solutions
        </h2>
        <p class="text-lg text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed mb-12">
          From Emiratisation programs to executive search, we deliver comprehensive recruitment
          solutions that connect exceptional talent with forward-thinking organizations.
        </p>

        <!-- 服务网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <!-- Emiratisation -->
          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Emiratisation</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              UAE nationalization programs with proven local expertise
            </p>
          </div>

          <!-- Permanent Recruitment -->
          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                ></path>
                <rect
                  x="8"
                  y="2"
                  width="8"
                  height="4"
                  rx="1"
                  ry="1"
                ></rect>
                <path d="M9 14l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Permanent Recruitment
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Executive search and professional placement services
            </p>
          </div>

          <!-- Temporary Recruitment -->
          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Temporary Recruitment
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Flexible staffing for project and coverage needs
            </p>
          </div>

          <!-- Bulk Hiring -->
          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
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
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Bulk Hiring</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Large-scale recruitment with quality assurance
            </p>
          </div>

          <!-- Outsourcing Services -->
          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Outsourcing Services
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Contract-based staffing for all industries
            </p>
          </div>

          <!-- Advisory Services -->
          <div
            class="bg-[var(--tm-bg-primary)] p-6 rounded-6 border border-[var(--tm-bd-light)] hover:border-[var(--tm-accent-primary)] hover:shadow-lg transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center group-hover:bg-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              <svg
                class="w-7 h-7 text-[var(--tm-accent-primary)] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Advisory Services
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              HR consulting and organizational development
            </p>
          </div>
        </div>
      </div>

      <!-- 核心优势 -->
      <div
        class="bg-[var(--tm-bg-primary)] rounded-8 p-8 md:p-12 border border-[var(--tm-bd-light)] shadow-lg mb-20"
      >
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Why Choose VMMC for Your Staffing Needs
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-175 mx-auto">
            Our comprehensive approach combines local expertise with global standards to deliver
            exceptional recruitment outcomes.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Regional Expertise
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Deep understanding of UAE and GCC market dynamics
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Quality Assurance
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Rigorous screening and assessment processes
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Rapid Deployment
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Quick turnaround times without compromising quality
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Extensive Network
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Vast database of qualified professionals across industries
            </p>
          </div>
        </div>
      </div>

      <!-- 成功数据统计 -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-8 p-8 md:p-12 text-white mb-20"
      >
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-semibold mb-4">Our Staffing Success Story</h3>
          <p class="text-lg opacity-90 max-w-150 mx-auto">
            Proven track record of delivering exceptional recruitment outcomes across all service
            lines.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">18,000+</div>
            <div class="text-sm opacity-90">Total Placements</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">95%</div>
            <div class="text-sm opacity-90">Client Satisfaction</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">500+</div>
            <div class="text-sm opacity-90">Partner Companies</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold mb-2">15+</div>
            <div class="text-sm opacity-90">Years Experience</div>
          </div>
        </div>
      </div>

      <!-- 主要CTA区域 -->
      <div class="text-center">
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-8 md:p-12 border border-[var(--tm-bd-light)] relative overflow-hidden"
        >
          <!-- 装饰元素 -->
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--tm-accent-primary)]/10 to-transparent rounded-full"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--tm-accent-secondary)]/10 to-transparent rounded-full"
          ></div>

          <div class="relative z-1">
            <h3 class="text-2xl md:text-4xl font-semibold text-[var(--tm-txt-primary)] mb-6">
              Ready to Find Your Next Great Hire?
            </h3>
            <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 max-w-150 mx-auto">
              Partner with VMMC to access the GCC region's most comprehensive staffing solutions.
              From individual placements to large-scale hiring programs, we deliver results that
              matter.
            </p>

            <div class="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>Start Your Recruitment Journey</span>
                <svg
                  class="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-10 py-4 border-2 border-[var(--tm-accent-primary)] text-[var(--tm-accent-primary)] rounded-full text-lg font-semibold hover:bg-[var(--tm-bg-accentLight)] transition-colors duration-300"
              >
                <span>Schedule Free Consultation</span>
              </NuxtLink>
            </div>

            <!-- 联系方式快捷入口 -->
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[var(--tm-bd-light)]"
            >
              <div class="flex items-center justify-center gap-3 text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 20.01 20z"
                  ></path>
                </svg>
                <div>
                  <div class="text-sm font-medium">Call Us</div>
                  <div class="text-xs">+65 6386 8322 (SG)</div>
                  <div class="text-xs">+971 55 829 6351 (AE)</div>
                </div>
              </div>

              <div class="flex items-center justify-center gap-3 text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <div>
                  <div class="text-sm font-medium">Visit Website</div>
                  <div class="text-xs">www.vmmcae.com</div>
                </div>
              </div>

              <div class="flex items-center justify-center gap-3 text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
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
                <div>
                  <div class="text-sm font-medium">Global Offices</div>
                  <div class="text-xs">Singapore • Dubai • Malaysia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style>
  /* 深色模式适配 */
  .dark .staffing-cta-section {
    background: var(--tm-bg-primary);
  }
</style>
