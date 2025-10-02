<!-- pages/industries/logistics/supply-chain-optimization.vue -->
<template>
  <div class="report-page bg-[var(--tm-bg-primary)]">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-80vh flex items-center bg-[var(--tm-bg-primary)]"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
          alt="Supply Chain Optimization"
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
            Supply Chain Optimization
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-light text-white mb-8 text-center leading-tight">
          Global Supply Chain
          <br />
          <span class="text-[var(--tm-accent-primary)] font-semibold">
            Optimization & Logistics Tech Trends
          </span>
        </h1>

        <p
          class="text-xl md:text-2xl text-white/90 max-w-200 mx-auto text-center leading-relaxed mb-12"
        >
          Digital Platforms, Automation, and Real-Time Analytics
        </p>

        <!-- Key Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto">
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">Blockchain</div>
            <div class="text-sm text-white/80">Cross-Border Transparency</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">AI/ML</div>
            <div class="text-sm text-white/80">Predictive Intelligence</div>
          </div>
          <div
            class="text-center bg-white/10 backdrop-blur-sm rounded-4 p-6 border border-white/30"
          >
            <div class="text-4xl font-bold text-[var(--tm-accent-primary)] mb-2">IoT</div>
            <div class="text-sm text-white/80">Real-Time Tracking</div>
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
              <p class="text-[var(--tm-txt-secondary)]">
                The digital transformation of supply chains
              </p>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              As global trade becomes increasingly complex and market demands rise, supply chain
              management and logistics technology are emerging as key drivers of competitiveness.
              Digital platforms, automated warehousing, real-time data analytics, and cross-border
              collaboration are accelerating transformation, enabling companies to reduce costs,
              improve efficiency, and build resilience.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              The integration of advanced technologies is not just about operational improvement—it
              represents a fundamental shift in how companies compete in global markets, creating
              new opportunities for innovation and strategic advantage.
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
                <path
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-semibold text-[var(--tm-txt-primary)]">
                Current Industry Landscape
              </h2>
              <p class="text-[var(--tm-txt-secondary)]">Today's supply chain challenges</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Today, global supply chains face challenges such as geopolitical uncertainty, energy
              price volatility, and shifting consumer demands. Companies are relying more on digital
              supply chain platforms to enhance transparency and control.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              For instance, Amazon and Alibaba's intelligent warehousing and automated delivery
              systems have set new benchmarks for the industry, demonstrating how technology can
              dramatically improve operational efficiency and customer satisfaction while reducing
              costs.
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
            Key technologies driving supply chain innovation
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Trend 1: Blockchain -->
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
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">Blockchain</h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Enhancing transparency and anti-counterfeiting in cross-border transactions
                  through immutable ledgers and distributed trust networks.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 2: AI and Machine Learning -->
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  AI and Machine Learning
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Improving demand forecasting, transport routing, and warehouse management through
                  intelligent algorithms and predictive analytics.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 3: Internet of Things (IoT) -->
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
                  Internet of Things (IoT)
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Enabling real-time cargo tracking and equipment monitoring throughout the entire
                  supply chain journey.
                </p>
              </div>
            </div>
          </div>

          <!-- Trend 4: Automation and Robotics -->
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
                  Automation and Robotics
                </h3>
                <p class="text-[var(--tm-txt-secondary)] leading-relaxed">
                  Increasingly applied in warehouse sorting and last-mile delivery, reducing labor
                  costs and improving efficiency.
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
            Industry Benchmarks
          </h2>
          <p class="text-[var(--tm-txt-secondary)]">
            Companies setting new standards in supply chain excellence
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">
              Amazon & Alibaba
            </h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Intelligent warehousing and automated delivery systems setting new benchmarks for
              efficiency and customer satisfaction
            </p>
          </div>

          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">SAP & Oracle</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Digital supply chain platforms enabling end-to-end visibility and real-time
              decision-making
            </p>
          </div>

          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">JD Logistics</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Intelligent supply chain systems combining automation, AI, and IoT for seamless
              operations
            </p>
          </div>

          <div class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)]">
            <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-3">DHL</h3>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Advanced logistics solutions integrating robotics, predictive analytics, and
              sustainable practices
            </p>
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
              <p class="text-[var(--tm-txt-secondary)]">Advanced intelligence and sustainability</p>
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              The future of supply chains lies in advanced intelligence and sustainability.
              Companies will focus on building resilient and eco-friendly supply networks while
              leveraging technology to achieve end-to-end collaboration from suppliers to end
              consumers.
            </p>
            <p class="text-lg text-[var(--tm-txt-secondary)] leading-relaxed">
              Those with strong digital and logistics technology capabilities will gain a
              significant edge in global competition. The integration of AI, IoT, blockchain, and
              automation will create supply chains that are not only more efficient but also more
              transparent, sustainable, and resilient to disruptions.
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
          Build Your Supply Chain Team
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-180 mx-auto">
          Partner with VMMC to recruit supply chain strategists, AI engineers, IoT specialists,
          blockchain developers, and automation experts.
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
    title:
      'Global Supply Chain Optimization and Logistics Tech Trends | Logistics Intelligence Report | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Comprehensive analysis of blockchain, AI/ML, IoT, and automation transforming global supply chain management and logistics operations.',
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
