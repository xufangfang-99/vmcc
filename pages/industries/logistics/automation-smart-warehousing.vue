<!-- pages/industries/logistics/automation-smart-warehousing.vue -->
<template>
  <div class="report-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-80vh flex items-center bg-[var(--tm-bg-primary)]"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80"
          alt="Smart Warehousing Automation"
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
            to="/industries/logistics"
            class="text-white/80 hover:text-[var(--tm-accent-primary)] transition-colors duration-300 font-medium text-sm"
          >
            Logistics
          </NuxtLink>
          <span class="text-white/50">/</span>
          <span class="text-[var(--tm-accent-primary)] font-semibold text-sm">
            Smart Warehousing
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 text-center leading-tight">
          The Rise of Automation
          <br />
          <span class="text-[var(--tm-accent-primary)] font-semibold">and Smart Warehousing</span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
        >
          Robotic Systems, WMS, and Last-Mile Delivery Innovation
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">60%</div>
            <div class="text-sm text-white/80">Faster Operations</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">40%</div>
            <div class="text-sm text-white/80">Cost Reduction</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">99%</div>
            <div class="text-sm text-white/80">Accuracy Rate</div>
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">Executive Summary</h2>
              <p class="text-[var(--tm-txt-secondary)]">Meeting e-commerce demands</p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              With the rapid growth of e-commerce and rising consumer expectations for fast
              delivery, warehousing and distribution face unprecedented pressure. Automation and
              smart warehousing technologies are emerging as key solutions. Robotic picking systems,
              automated conveyors, warehouse management systems (WMS), and unmanned delivery
              vehicles are reshaping logistics operations.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              The transformation from labor-intensive operations to intelligent, autonomous systems
              represents a fundamental shift in how warehouses operate, enabling companies to meet
              growing demand while reducing costs and improving accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Industry Landscape -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="bg-[var(--tm-bg-card)] rounded-8 p-12 border border-[var(--tm-bd-light)]">
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
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">
                Current Industry Landscape
              </h2>
              <p class="text-[var(--tm-txt-secondary)]">Traditional warehouse limitations</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Traditional warehouses rely heavily on manual labor, which often results in
              inefficiency and errors, making it difficult to meet the demands of large-scale
              e-commerce and global trade.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Amazon's Kiva robots, Alibaba's Cainiao smart warehouses, and DHL's automated sorting
              centers highlight the enormous potential of automation in boosting efficiency and
              reducing costs. These industry leaders have demonstrated that automation can achieve
              accuracy rates exceeding 99% while dramatically reducing operational costs and
              delivery times.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Trends -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-15">
          <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
            Technology Trends
          </h2>
          <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto">
            Key innovations in warehouse automation
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Trend 1: Warehouse Robots -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Warehouse Robots
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Automating picking, handling, and loading tasks to reduce reliance on human labor
                  and increase operational efficiency.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 2: Automated Sorting Systems -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                  <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Automated Sorting Systems
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Leveraging machine vision and algorithms to enhance speed and accuracy in package
                  sorting and distribution.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 3: Smart WMS -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                  Smart Warehouse Management Systems (WMS)
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Using AI and big data to optimize inventory control and layout, improving space
                  utilization and operational flow.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 4: Unmanned Delivery -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-10 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Unmanned Delivery Vehicles and Drones
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Improving last-mile delivery efficiency through autonomous vehicles and aerial
                  drones for faster, more flexible delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Leaders -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Industry Innovation Leaders
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">Companies pioneering warehouse automation</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Amazon Kiva Robots
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
              Revolutionary robotic systems that move entire shelving units to workers, reducing
              walking time by 75%
            </p>
            <div class="text-sm font-semibold text-[var(--tm-accent-primary)]">99.9% Accuracy</div>
          </div>

          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Alibaba Cainiao Smart Warehouses
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
              AI-powered warehouses processing millions of packages daily with minimal human
              intervention
            </p>
            <div class="text-sm font-semibold text-[var(--tm-accent-primary)]">
              70% Labor Reduction
            </div>
          </div>

          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
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
                <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              DHL Automated Sorting Centers
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)] mb-4">
              Advanced sorting systems handling thousands of packages per hour with machine vision
              technology
            </p>
            <div class="text-sm font-semibold text-[var(--tm-accent-primary)]">
              60% Faster Processing
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Automation Benefits -->
    <section class="py-25 bg-[var(--tm-bg-secondary)]">
      <div class="max-w-350 mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Automation Benefits
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">How smart warehouses transform operations</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">60%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Faster Operations</div>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">40%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Cost Reduction</div>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">99%</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Accuracy Rate</div>
          </div>

          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-light)] text-center"
          >
            <div class="text-3xl font-bold text-[var(--tm-accent-primary)] mb-2">24/7</div>
            <div class="text-sm text-[var(--tm-txt-secondary)]">Continuous Operation</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Outlook -->
    <section class="py-25 bg-[var(--tm-bg-primary)]">
      <div class="max-w-300 mx-auto px-6">
        <div class="bg-[var(--tm-bg-card)] rounded-8 p-12 border border-[var(--tm-bd-light)]">
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
              <p class="text-[var(--tm-txt-secondary)]">The autonomous warehouse</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Automation and smart warehousing will become core competitive advantages in the
              logistics industry. With continuous advancements in AI, IoT, and robotics, warehouses
              will achieve higher levels of autonomy and intelligence.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Companies that adopt and scale these technologies early will stand out in terms of
              delivery speed, operational cost, and customer experience. The future warehouse will
              be a fully autonomous ecosystem where humans and machines collaborate seamlessly to
              meet the demands of instant commerce.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-25 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)]"
    >
      <div class="max-w-300 mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-semibold text-white mb-6">
          Build Your Warehouse Automation Team
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-180 mx-auto">
          Partner with VMMC to recruit robotics engineers, WMS specialists, automation integrators,
          and smart warehouse operations experts.
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
    title: 'The Rise of Automation and Smart Warehousing | Logistics Intelligence Report | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of warehouse robots, automated sorting systems, smart WMS, and unmanned delivery transforming logistics operations.',
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
