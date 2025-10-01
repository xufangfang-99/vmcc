<template>
  <div class="report-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-80vh flex items-center bg-[var(--tm-bg-primary)]"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1920&q=80"
          alt="Workforce Transformation and Talent Development"
          class="h-full w-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 w-full max-w-350 mx-auto px-6">
        <!-- Breadcrumb -->
        <div
          class="mb-8 flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 w-fit mx-auto"
        >
          <NuxtLink
            to="/"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Home
          </NuxtLink>
          <span class="text-white/50">/</span>
          <NuxtLink
            to="/industries"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Industries
          </NuxtLink>
          <span class="text-white/50">/</span>
          <NuxtLink
            to="/industries/hospitality"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Hospitality
          </NuxtLink>
          <span class="text-white/50">/</span>
          <span class="text-[var(--tm-accent-primary)] font-semibold text-sm">
            Workforce Report
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 text-center leading-tight">
          Workforce Transformation &
          <br />
          <span class="text-[var(--tm-accent-primary)] font-semibold">Talent Development</span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
        >
          Evolving Labor Markets and Future-Ready Talent Strategies
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">330M</div>
            <div class="text-sm text-white/80">Tourism Jobs Worldwide</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Digital+</div>
            <div class="text-sm text-white/80">New Skill Requirements</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Hybrid</div>
            <div class="text-sm text-white/80">Flexible Workforce Models</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Executive Summary -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div
          class="bg-[var(--tm-bg-primary)] rounded-8 p-12 border border-[var(--tm-bd-light)] shadow-[var(--tm-shadow-card)]"
        >
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Executive Summary</h2>
              <p class="text-[var(--tm-txt-secondary)]">The Future of Hospitality Talent</p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              As tourism rebounds and the experience economy expands, the hospitality and tourism
              workforce is undergoing significant change. While demand for human resources has
              sharply increased after the pandemic, digitalization, automation, and the demand for
              personalized experiences are reshaping the industry's talent structure.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              This report highlights key labor trends, drivers, challenges, and the future outlook
              as the industry transforms toward a digital-first and experience-driven model.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Trends -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Industry Trends
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Key workforce developments in hospitality
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Trend 1: Rising Talent Demand -->
          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Rising Talent Demand
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Recruitment in hotels, restaurants, and airlines has surged as global travel
                  recovers to pre-pandemic levels.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 2: Digital Skills -->
          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Increased Digital Skill Requirements
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Online booking, data analytics, and smart service systems drive demand for
                  digitally skilled workers.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 3: New Roles -->
          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Experience Economy Spurs New Roles
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  The rise of immersive and personalized travel experiences is creating new jobs
                  such as experience designers and cultural consultants.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 4: Hybrid Models -->
          <div
            class="bg-[var(--tm-bg-card)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
          >
            <div class="flex items-start gap-6">
              <div
                class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-7 h-7 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Hybrid Workforce Models
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  A mix of freelancers, contractors, and full-time employees enhances flexibility
                  and operational resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Drivers -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Key Drivers
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Forces reshaping hospitality workforce
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Driver 1: Tourism Recovery -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Tourism Recovery
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              International and domestic travel are both growing, creating renewed demand for
              hospitality professionals.
            </p>
          </div>

          <!-- Driver 2: Technology Integration -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Technological Integration
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              AI, automation, and big data improve efficiency and personalization, requiring
              tech-savvy workers.
            </p>
          </div>

          <!-- Driver 3: Consumer Preferences -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
              Consumer Preferences
            </h3>
            <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
              Travelers seek customized, high-quality experiences that demand skilled service
              professionals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="bg-[var(--tm-bg-card)] rounded-8 p-10 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-14 h-14 bg-red-100 dark:bg-red-900/20 rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-7 h-7 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">Key Challenges</h3>
              <p class="text-[var(--tm-txt-secondary)]">Critical workforce obstacles</p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div
                class="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Talent Shortages</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Especially in specialized roles, with supply-demand imbalances across regions.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">High Turnover Rates</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Low employee satisfaction leads to costly recruitment and training cycles.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Training Gaps</h4>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Training systems lag behind emerging role requirements and technological changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Outlook -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="bg-[var(--tm-bg-primary)] rounded-8 p-12 border border-[var(--tm-bd-light)]">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Future Outlook</h2>
              <p class="text-[var(--tm-txt-secondary)]">Building the workforce of tomorrow</p>
            </div>
          </div>

          <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
            The hospitality and tourism workforce will increasingly shift toward a "digital-first
            and experience-driven" model. Companies must invest in talent development, flexible
            staffing strategies, and innovative job design. Those able to build diverse, skilled,
            and loyal teams will secure long-term competitiveness in a rapidly evolving industry
            landscape.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-25 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)]"
    >
      <div class="max-w-300 mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-semibold text-white mb-6">
          Build Your Future-Ready Hospitality Team
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-180 mx-auto">
          Partner with VMMC to recruit digital-savvy professionals, experience designers, and
          flexible talent who can thrive in the evolving hospitality landscape.
        </p>
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <button
            class="inline-flex items-center justify-center px-10 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
            @click="openConsultationModal"
          >
            Schedule Consultation
          </button>
          <button
            class="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/15 transition-all duration-300"
            @click="openExpertModal"
          >
            Talk to Experts
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />

    <!-- Modals -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'

  // Modal state
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Page meta
  definePageMeta({
    layout: 'default',
  })

  // SEO
  useHead({
    title: 'Workforce Transformation & Talent Development | Hospitality Intelligence Report | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of hospitality workforce transformation, digital skills requirements, experience designer roles, flexible workforce models, and talent development strategies.',
      },
    ],
  })
</script>

<style scoped>
  .report-page {
    min-height: 100vh;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-5xl {
      font-size: 2.5rem;
    }
    .text-7xl {
      font-size: 3.5rem;
    }
  }
</style>
