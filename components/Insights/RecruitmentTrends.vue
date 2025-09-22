<template>
  <section
    class="py-16 md:py-20 lg:py-24 bg-[var(--tm-bg-secondary)] transition-colors duration-300 relative overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-1/4 left-10 w-96 h-96 bg-[var(--tm-accent-primary)] rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/3 right-10 w-80 h-80 bg-[var(--tm-accent-secondary)] rounded-full blur-3xl"
      ></div>
    </div>

    <div class="container max-w-7xl relative z-10">
      <!-- Header Section -->
      <header class="text-center mb-20">
        <div class="mb-8">
          <span
            class="inline-flex items-center px-6 py-3 text-sm text-[var(--tm-accent-primary)] bg-[var(--tm-bg-primary)] border border-[var(--tm-bd-light)] rounded-full font-medium tracking-wide uppercase shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            WORKFORCE EVOLUTION
          </span>
        </div>

        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--tm-txt-primary)] mb-6 leading-tight"
        >
          Recruitment
          <br />
          <span class="text-[var(--tm-accent-primary)] font-normal relative">
            Trends
            <div
              class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            ></div>
          </span>
        </h1>

        <p
          class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] max-w-5xl mx-auto leading-relaxed"
        >
          Industry transformation insights shaping the future of talent acquisition. From AI
          integration to ESG-focused hiring across global markets.
        </p>
      </header>

      <!-- Hero Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <div
          v-for="stat in heroStats"
          :key="stat.label"
          class="group text-center p-8 bg-[var(--tm-bg-primary)] rounded-3xl border border-[var(--tm-bd-light)] relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
          <!-- Background glow effect -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[var(--tm-accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <div
              class="text-4xl md:text-5xl font-bold text-[var(--tm-accent-primary)] mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ stat.value }}
            </div>
            <div class="text-sm md:text-base text-[var(--tm-txt-secondary)]">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Industry Transformation Cards -->
      <div class="mb-24">
        <h2 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-16">
          Industry Transformation Trends
        </h2>

        <!-- Masonry-style layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Large card: Digital Transformation -->
          <article
            class="lg:col-span-8 group bg-[var(--tm-bg-primary)] rounded-3xl p-8 md:p-10 border border-[var(--tm-bd-light)] hover:shadow-2xl hover:border-[var(--tm-accent-primary)] transition-all duration-500 relative overflow-hidden"
          >
            <!-- Background gradient -->
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"
            ></div>

            <div class="relative z-10">
              <div class="flex items-start justify-between mb-6">
                <div class="flex items-center space-x-4">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
                  >
                    AI
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold text-[var(--tm-txt-primary)]">
                      AI & Automation Revolution
                    </h3>
                    <p class="text-[var(--tm-accent-primary)] font-medium">
                      Reshaping All Industries
                    </p>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-3xl font-bold text-[var(--tm-accent-primary)]">42%</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">Companies Restructuring</div>
                </div>
              </div>

              <p class="text-lg text-[var(--tm-txt-secondary)] mb-8 leading-relaxed">
                Technology sector leading with 67% impact, while banking digital transformation
                reaches 90%+ adoption. New human-AI collaboration skills emerging across all
                sectors.
              </p>

              <div class="grid grid-cols-2 gap-6">
                <div class="p-4 bg-[var(--tm-bg-feature)] rounded-xl">
                  <div class="text-2xl font-bold text-green-600 mb-1">+312%</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">AI Skills Demand</div>
                </div>
                <div class="p-4 bg-[var(--tm-bg-feature)] rounded-xl">
                  <div class="text-2xl font-bold text-blue-600 mb-1">85%</div>
                  <div class="text-sm text-[var(--tm-txt-secondary)]">Remote-First Hiring</div>
                </div>
              </div>
            </div>
          </article>

          <!-- Right side vertical cards -->
          <div class="lg:col-span-4 space-y-6">
            <!-- ESG & Sustainability -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-2xl p-6 border border-[var(--tm-bd-light)] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-center space-x-3 mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)]">
                  ESG-Driven Hiring
                </h3>
              </div>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
                73% workforce prioritizes sustainability commitments
              </p>
              <div class="text-xl font-bold text-green-600">+134% ESG Roles</div>
            </div>

            <!-- Global Mobility -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-2xl p-6 border border-[var(--tm-bd-light)] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-center space-x-3 mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Global Access</h3>
              </div>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
                Cross-border talent mobility increases 156%
              </p>
              <div class="text-xl font-bold text-purple-600">+156% Remote</div>
            </div>

            <!-- Skills-Based Hiring -->
            <div
              class="bg-[var(--tm-bg-primary)] rounded-2xl p-6 border border-[var(--tm-bd-light)] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-center space-x-3 mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)]">Skills-First</h3>
              </div>
              <p class="text-sm text-[var(--tm-txt-secondary)] mb-3">
                76% employers prioritize skills over degrees
              </p>
              <div class="text-xl font-bold text-orange-600">76% Skills-Based</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Industry-Specific Insights -->
      <div class="mb-24">
        <h2 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-16">
          Industry-Specific Evolution
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="industry in industryInsights"
            :key="industry.name"
            class="group bg-[var(--tm-bg-primary)] rounded-3xl p-8 border border-[var(--tm-bd-light)] relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <!-- Background pattern -->
            <div
              class="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            >
              <div
                :class="industry.bgColor"
                class="w-full h-full rounded-full"
              ></div>
            </div>

            <div class="relative z-10">
              <div class="flex items-center space-x-4 mb-6">
                <div
                  :class="industry.iconBg"
                  class="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300"
                >
                  {{ industry.icon }}
                </div>
                <div>
                  <h3 class="text-xl font-bold text-[var(--tm-txt-primary)]">
                    {{ industry.name }}
                  </h3>
                  <p class="text-sm text-[var(--tm-txt-secondary)]">{{ industry.trend }}</p>
                </div>
              </div>

              <p class="text-sm text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
                {{ industry.description }}
              </p>

              <div class="flex justify-between items-center">
                <div>
                  <div
                    class="text-2xl font-bold mb-1"
                    :class="industry.statColor"
                  >
                    {{ industry.stat }}
                  </div>
                  <div class="text-xs text-[var(--tm-txt-light)]">{{ industry.statLabel }}</div>
                </div>
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center border-2"
                  :class="industry.statColor + ' border-current'"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Future Outlook Timeline -->
      <div class="mb-24">
        <div
          class="max-w-5xl mx-auto bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-feature)] rounded-3xl p-8 md:p-12 border border-[var(--tm-bd-secondary)] relative overflow-hidden"
        >
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-0 left-1/4 w-2 h-full bg-[var(--tm-accent-primary)]"></div>
            <div
              class="absolute top-1/3 right-1/4 w-32 h-32 bg-[var(--tm-accent-secondary)] rounded-full blur-2xl"
            ></div>
          </div>

          <div class="relative z-10">
            <h3
              class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-12"
            >
              2025 Workforce Outlook
            </h3>

            <div class="space-y-8">
              <div
                v-for="(outlook, index) in futureOutlook"
                :key="outlook.title"
                class="flex items-start space-x-6"
              >
                <div
                  class="flex-shrink-0 w-4 h-4 bg-[var(--tm-accent-primary)] rounded-full mt-2 relative"
                >
                  <div
                    v-if="index < futureOutlook.length - 1"
                    class="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-[var(--tm-bd-light)]"
                  ></div>
                </div>

                <div class="flex-1 pb-8">
                  <h4 class="text-xl font-bold text-[var(--tm-txt-primary)] mb-3">
                    {{ outlook.title }}
                  </h4>
                  <p class="text-base text-[var(--tm-txt-secondary)] leading-relaxed">
                    {{ outlook.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div
          class="max-w-4xl mx-auto p-12 bg-[var(--tm-bg-primary)] rounded-3xl border border-[var(--tm-bd-light)] shadow-2xl relative overflow-hidden group"
        >
          <div class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-light text-[var(--tm-txt-primary)] mb-6">
              Stay Ahead of Industry Evolution
            </h3>

            <p class="text-xl text-[var(--tm-txt-secondary)] mb-10 leading-relaxed">
              Get quarterly trend intelligence and strategic insights to adapt your talent
              acquisition strategy for the transforming global workforce landscape.
            </p>

            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                class="group/btn relative inline-flex items-center justify-center px-10 py-5 bg-[var(--tm-accent-primary)] text-white rounded-full overflow-hidden transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
                @click="openConsultationModal"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                ></div>
                <span class="relative z-10 mr-3">Get Trend Intelligence</span>
                <svg
                  class="relative z-10 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>

              <button
                class="inline-flex items-center justify-center px-10 py-5 border-2 border-[var(--tm-bd-primary)] text-[var(--tm-accent-primary)] rounded-full transition-all duration-300 hover:bg-[var(--tm-bg-accentLight)] hover:shadow-xl font-semibold text-lg hover:scale-105 hover:-translate-y-1"
                @click="openExpertModal"
              >
                <span class="mr-3">Industry Briefing</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Expert consultation modal -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- Full consultation form modal -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // Modal state management
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // Expert consultation modal control
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // Full consultation form modal control
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Hero statistics data
  const heroStats = [
    { value: '90%+', label: 'Digital Transformation' },
    { value: '73%', label: 'ESG-Focused Workforce' },
    { value: '76%', label: 'Skills-First Employers' },
    { value: '85%', label: 'Remote-First Hiring' },
  ]

  // Industry insights based on reports
  const industryInsights = [
    {
      name: 'Technology',
      icon: 'T',
      trend: 'AI/ML Integration',
      description:
        'Leading digital transformation with 67% adopting AI-driven processes. Cloud architecture and cybersecurity skills in highest demand.',
      stat: '+312%',
      statLabel: 'AI Skills Growth',
      iconBg: 'bg-gradient-to-br from-blue-500 to-purple-600',
      bgColor: 'bg-blue-500',
      statColor: 'text-blue-600',
    },
    {
      name: 'Energy & Oil',
      icon: 'E',
      trend: 'Green Transition',
      description:
        'Energy sector transforming with renewable focus. Clean technology specialists and ESG expertise becoming critical for growth.',
      stat: '+134%',
      statLabel: 'ESG Roles',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
      bgColor: 'bg-green-500',
      statColor: 'text-green-600',
    },
    {
      name: 'Healthcare',
      icon: 'H',
      trend: 'Digital Health',
      description:
        'Medical tourism tech and biotechnology driving transformation. Telemedicine and AI diagnostics creating new skill requirements.',
      stat: '+78%',
      statLabel: 'MedTech Growth',
      iconBg: 'bg-gradient-to-br from-red-500 to-pink-600',
      bgColor: 'bg-red-500',
      statColor: 'text-red-600',
    },
    {
      name: 'Banking & Finance',
      icon: 'F',
      trend: 'Fintech Revolution',
      description:
        'Digital transformation reaching 90%+ adoption. Blockchain, AI, and digital banking specialists reshaping the sector.',
      stat: '90%+',
      statLabel: 'Digital Adoption',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-500',
      statColor: 'text-indigo-600',
    },
    {
      name: 'Manufacturing',
      icon: 'M',
      trend: 'Industry 4.0',
      description:
        'Smart manufacturing and supply chain automation. IoT specialists and automation engineers leading workforce evolution.',
      stat: '+45%',
      statLabel: 'Automation Roles',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
      bgColor: 'bg-orange-500',
      statColor: 'text-orange-600',
    },
    {
      name: 'Legal Services',
      icon: 'L',
      trend: 'RegTech Growth',
      description:
        'Compliance technology and digital law evolution. Data privacy and AI governance specialists in critical demand.',
      stat: '+67%',
      statLabel: 'Compliance Tech',
      iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-500',
      statColor: 'text-teal-600',
    },
  ]

  // Future outlook data
  const futureOutlook = [
    {
      title: 'Human-AI Collaboration',
      description:
        'New role categories emerging that blend human creativity with AI capabilities across all industries.',
    },
    {
      title: 'Sustainability Integration',
      description:
        'ESG expertise becoming standard requirement, with green skills premium reaching 20%+ in most sectors.',
    },
    {
      title: 'Skills-Based Evolution',
      description:
        'Continuous learning platforms and micro-credentials replacing traditional degree requirements in 76% of roles.',
    },
    {
      title: 'Global Talent Access',
      description:
        'Cross-border remote work expanding with new visa frameworks and digital nomad policies.',
    },
  ]
</script>

<style scoped>
  /* Gradient text effect */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }

  /* Mobile optimization */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .grid.md\\:grid-cols-2 {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .grid.lg\\:grid-cols-3 {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .lg\\:col-span-2 {
      grid-column: span 1;
    }
  }

  /* 平板优化 */
  @media (min-width: 641px) and (max-width: 1023px) {
    .grid.lg\\:grid-cols-12 {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .lg\\:col-span-8,
    .lg\\:col-span-4 {
      grid-column: span 1;
    }
  }
</style>
