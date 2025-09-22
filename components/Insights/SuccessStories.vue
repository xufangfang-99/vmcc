<template>
  <section class="py-16 md:py-20 lg:py-24 bg-[var(--tm-bg-primary)] transition-colors duration-300">
    <div class="container max-w-7xl">
      <!-- Header Section -->
      <header class="text-center mb-16 md:mb-20 lg:mb-24">
        <div class="mb-6 md:mb-8">
          <span
            class="inline-flex items-center px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-[var(--tm-accent-primary)] bg-[var(--tm-bg-feature)] border border-[var(--tm-bd-accentAlpha15)] rounded-full font-medium tracking-wide uppercase transition-all duration-300 hover:bg-[var(--tm-bg-accentLight)] hover:border-[var(--tm-bd-primary)]"
          >
            INDUSTRY TRANSFORMATIONS
          </span>
        </div>

        <h1
          class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[var(--tm-txt-primary)] mb-4 md:mb-6 leading-tight"
        >
          Success
          <br />
          <span
            class="text-[var(--tm-accent-primary)] font-normal bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] bg-clip-text text-transparent"
          >
            Stories
          </span>
        </h1>

        <p
          class="text-lg md:text-xl lg:text-2xl text-[var(--tm-txt-secondary)] max-w-4xl mx-auto leading-relaxed px-4"
        >
          Real transformation stories from our comprehensive industry intelligence. Strategic wins
          across technology, energy, healthcare, and financial services sectors.
        </p>
      </header>

      <!-- Success Metrics Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-20 lg:mb-24">
        <div
          v-for="metric in successMetrics"
          :key="metric.label"
          class="group relative overflow-hidden p-4 md:p-6 lg:p-8 bg-[var(--tm-bg-card)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-card)] transition-all duration-500 hover:bg-[var(--tm-bg-hover)] hover:border-[var(--tm-bd-primary)] hover:shadow-[var(--tm-shadow-accent)] hover:-translate-y-1"
        >
          <div
            class="absolute top-0 right-0 w-20 h-20 bg-[var(--tm-bg-accentGradient-from)] opacity-5 rounded-full -translate-y-10 translate-x-10 group-hover:opacity-10 transition-opacity duration-500"
          ></div>

          <div class="relative z-10 text-center">
            <div
              class="text-3xl md:text-4xl lg:text-5xl font-light text-[var(--tm-accent-primary)] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300"
            >
              {{ metric.value }}
            </div>
            <div
              class="text-sm md:text-base text-[var(--tm-txt-secondary)] group-hover:text-[var(--tm-txt-primary)] transition-colors duration-300"
            >
              {{ metric.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Industry Case Studies -->
      <div class="mb-16 md:mb-20 lg:mb-24">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-12 md:mb-16 lg:mb-20"
        >
          Industry Transformation Cases
        </h2>

        <div class="space-y-8 md:space-y-12 lg:space-y-16">
          <article
            v-for="(caseStudy, index) in caseStudies"
            :key="index"
            class="group grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 bg-[var(--tm-bg-card)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-bd-primary)] hover:-translate-y-2"
          >
            <!-- Main content -->
            <div class="xl:col-span-2 space-y-6 md:space-y-8">
              <!-- Company info -->
              <header class="flex items-start space-x-4 md:space-x-5">
                <div
                  :class="caseStudy.iconClasses"
                  class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-lg md:text-xl lg:text-2xl font-bold transition-transform duration-300 group-hover:scale-110"
                >
                  {{ caseStudy.icon }}
                </div>
                <div class="min-w-0 flex-1">
                  <h3
                    class="text-lg md:text-xl lg:text-2xl font-semibold text-[var(--tm-txt-primary)] mb-1 md:mb-2"
                  >
                    {{ caseStudy.title }}
                  </h3>
                  <p
                    class="text-sm md:text-base text-[var(--tm-txt-light)] flex items-center space-x-2"
                  >
                    <span>{{ caseStudy.industry }}</span>
                    <span class="w-1 h-1 bg-[var(--tm-txt-light)] rounded-full"></span>
                    <span>{{ caseStudy.location }}</span>
                  </p>
                </div>
              </header>

              <!-- Description -->
              <p
                class="text-base md:text-lg text-[var(--tm-txt-secondary)] leading-relaxed lg:leading-loose"
              >
                {{ caseStudy.description }}
              </p>

              <!-- Key metrics -->
              <div class="grid grid-cols-2 gap-4 md:gap-6">
                <div
                  v-for="stat in caseStudy.stats"
                  :key="stat.label"
                  class="p-4 md:p-5 lg:p-6 bg-[var(--tm-bg-feature)] rounded-xl lg:rounded-2xl border border-[var(--tm-bd-accentAlpha15)] transition-all duration-300 hover:bg-[var(--tm-bg-accentLight)] hover:border-[var(--tm-bd-primary)]"
                >
                  <div
                    class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--tm-accent-primary)] mb-1 md:mb-2"
                  >
                    {{ stat.value }}
                  </div>
                  <div class="text-sm md:text-base text-[var(--tm-txt-secondary)]">
                    {{ stat.label }}
                  </div>
                </div>
              </div>

              <div
                class="flex items-center text-sm md:text-base text-[var(--tm-txt-secondary)] p-4 md:p-5 bg-[var(--tm-bg-secondary)] rounded-xl lg:rounded-2xl border border-[var(--tm-bd-light)]"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 text-[var(--tm-accent-primary)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span class="font-medium">{{ caseStudy.achievement }}</span>
              </div>
            </div>

            <!-- Solution cards -->
            <aside class="space-y-4 md:space-y-5 lg:space-y-6">
              <div
                v-for="solution in caseStudy.solutions"
                :key="solution.type"
                :class="solution.bgClass"
                class="p-4 md:p-5 lg:p-6 rounded-xl lg:rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <h4
                  :class="solution.titleClass"
                  class="font-semibold text-sm md:text-base mb-2 md:mb-3"
                >
                  {{ solution.type }}
                </h4>
                <p
                  :class="solution.textClass"
                  class="text-sm md:text-base leading-relaxed"
                >
                  {{ solution.description }}
                </p>
              </div>
            </aside>
          </article>
        </div>
      </div>

      <!-- Expert Insights -->
      <div class="mb-16 md:mb-20 lg:mb-24">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-12 md:mb-16 lg:mb-20"
        >
          Industry Expert Insights
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <blockquote
            v-for="insight in expertInsights"
            :key="insight.expert"
            class="group relative p-6 md:p-8 lg:p-10 bg-[var(--tm-bg-card)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-bd-primary)] hover:-translate-y-2 overflow-hidden"
          >
            <!-- Quote decoration -->
            <div
              class="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 text-4xl md:text-5xl lg:text-6xl text-[var(--tm-accent-primary)] opacity-20 font-serif transition-all duration-300 group-hover:opacity-30 group-hover:scale-110"
            >
              "
            </div>

            <!-- Background decoration -->
            <div
              class="absolute bottom-0 right-0 w-32 h-32 bg-[var(--tm-bg-accentGradient-from)] opacity-5 rounded-full translate-x-16 translate-y-16 group-hover:opacity-10 transition-opacity duration-500"
            ></div>

            <div class="relative z-10 pt-8 md:pt-10 lg:pt-12">
              <p
                class="text-base md:text-lg text-[var(--tm-txt-secondary)] mb-6 md:mb-8 leading-relaxed lg:leading-loose"
              >
                {{ insight.insight }}
              </p>

              <footer class="flex items-center space-x-3 md:space-x-4">
                <div
                  class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[var(--tm-bg-accentLight)] rounded-full flex items-center justify-center text-[var(--tm-accent-primary)] font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 group-hover:bg-[var(--tm-accent-primary)] group-hover:text-white"
                >
                  {{ insight.initials }}
                </div>
                <div>
                  <div
                    class="font-semibold text-sm md:text-base lg:text-lg text-[var(--tm-txt-primary)]"
                  >
                    {{ insight.expert }}
                  </div>
                  <div class="text-xs md:text-sm lg:text-base text-[var(--tm-txt-light)]">
                    {{ insight.expertise }}
                  </div>
                </div>
              </footer>
            </div>
          </blockquote>
        </div>
      </div>

      <!-- Sector Performance Stats -->
      <div class="mb-16 md:mb-20 lg:mb-24">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--tm-txt-primary)] text-center mb-12 md:mb-16 lg:mb-20"
        >
          Transformation Across Industries
        </h2>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div
            v-for="sector in sectorStats"
            :key="sector.name"
            class="group text-center p-6 md:p-8 lg:p-10 bg-[var(--tm-bg-card)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-card)] transition-all duration-500 hover:shadow-[var(--tm-shadow-accent)] hover:border-[var(--tm-bd-primary)] hover:-translate-y-2"
          >
            <!-- Icon -->
            <div
              class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[var(--tm-bg-feature)] rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 lg:mb-8 border border-[var(--tm-bd-accentAlpha15)] transition-all duration-300 group-hover:bg-[var(--tm-bg-accentLight)] group-hover:border-[var(--tm-bd-primary)] group-hover:scale-110"
            >
              <div
                :class="sector.iconClasses"
                class="text-[var(--tm-accent-primary)] transition-colors duration-300"
              >
                {{ sector.icon }}
              </div>
            </div>

            <!-- Data -->
            <div
              class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--tm-accent-primary)] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300"
            >
              {{ sector.growth }}
            </div>

            <div
              class="text-sm md:text-base lg:text-lg text-[var(--tm-txt-secondary)] mb-1 md:mb-2 group-hover:text-[var(--tm-txt-primary)] transition-colors duration-300"
            >
              {{ sector.name }}
            </div>

            <div class="text-xs md:text-sm text-[var(--tm-txt-light)]">{{ sector.metric }}</div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div
          class="max-w-4xl mx-auto p-8 md:p-12 lg:p-16 bg-[var(--tm-bg-feature)] rounded-2xl lg:rounded-3xl border border-[var(--tm-bd-secondary)] relative overflow-hidden group"
        >
          <!-- Background decoration -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[var(--tm-bg-accentGradient-from)] to-[var(--tm-bg-accentGradient-to)] opacity-5 group-hover:opacity-10 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <h3
              class="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--tm-txt-primary)] mb-4 md:mb-6 lg:mb-8"
            >
              Drive Your Industry Transformation
            </h3>

            <p
              class="text-lg md:text-xl text-[var(--tm-txt-secondary)] mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Access comprehensive industry intelligence and strategic insights to lead
              transformation in your sector. From AI adoption to ESG integration and digital
              evolution.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <button
                class="group/btn inline-flex items-center justify-center px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-[var(--tm-accent-primary)] hover:bg-[var(--tm-accent-secondary)] text-white rounded-full transition-all duration-300 font-medium text-sm md:text-base lg:text-lg shadow-[var(--tm-shadow-accent)] hover:shadow-[var(--tm-shadow-hover)] hover:scale-105 active:scale-95"
                @click="openConsultationModal"
              >
                <span class="mr-2">Get Industry Intelligence</span>
                <div
                  class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    class="w-full h-full"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>

              <button
                class="group/btn inline-flex items-center justify-center px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 border-2 border-[var(--tm-bd-primary)] text-[var(--tm-accent-primary)] rounded-full transition-all duration-300 hover:bg-[var(--tm-bg-hover)] hover:border-[var(--tm-accent-primary)] font-medium text-sm md:text-base lg:text-lg hover:scale-105 active:scale-95"
                @click="openExpertModal"
              >
                <span class="mr-2">Expert Consultation</span>
                <div
                  class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    class="w-full h-full"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
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

  // Success metrics data
  const successMetrics = [
    { value: '150+', label: 'Industry Reports' },
    { value: '12', label: 'Sectors Covered' },
    { value: '8+', label: 'Global Markets' },
    { value: '90%+', label: 'Digital Adoption Tracked' },
  ]

  // Industry case studies based on reports
  const caseStudies = [
    {
      icon: 'T',
      iconClasses: 'bg-gradient-to-br from-blue-500 to-purple-600',
      title: 'Global Technology Transformation',
      industry: 'Technology',
      location: 'Asia-Pacific & Middle East',
      description:
        'Leading the digital revolution with AI/ML integration reaching 67% across tech sectors. Cloud infrastructure and cybersecurity specialists driving 312% growth in specialized roles, with companies restructuring 42% of positions for human-AI collaboration.',
      stats: [
        { value: '+312%', label: 'AI/ML Skills Growth' },
        { value: '67%', label: 'Sector AI Adoption' },
      ],
      achievement: 'Technology sector leading global digital transformation initiatives',
      solutions: [
        {
          type: 'Digital Innovation',
          description:
            'AI-driven automation and cloud-native architectures reshaping industry standards',
          bgClass: 'bg-blue-50 dark:bg-blue-900/20',
          titleClass: 'text-blue-900 dark:text-blue-400',
          textClass: 'text-blue-800 dark:text-blue-300',
        },
        {
          type: 'Skills Evolution',
          description:
            'New competencies emerging in human-AI collaboration and machine learning operations',
          bgClass: 'bg-purple-50 dark:bg-purple-900/20',
          titleClass: 'text-purple-900 dark:text-purple-400',
          textClass: 'text-purple-800 dark:text-purple-300',
        },
        {
          type: 'Market Impact',
          description:
            '85% remote-first hiring and global talent accessibility transforming recruitment',
          bgClass: 'bg-indigo-50 dark:bg-indigo-900/20',
          titleClass: 'text-indigo-900 dark:text-indigo-400',
          textClass: 'text-indigo-800 dark:text-indigo-300',
        },
      ],
    },
    {
      icon: 'E',
      iconClasses: 'bg-gradient-to-br from-green-500 to-emerald-600',
      title: 'Energy Sector Green Transition',
      industry: 'Energy & Oil',
      location: 'Global Markets',
      description:
        'Energy industry transformation with 73% workforce prioritizing ESG commitments. Clean technology specialists and renewable energy expertise driving 134% growth in sustainability-focused roles across traditional and emerging energy sectors.',
      stats: [
        { value: '+134%', label: 'ESG Roles Growth' },
        { value: '73%', label: 'ESG-Focused Workforce' },
      ],
      achievement: 'Leading global energy transition with sustainable workforce development',
      solutions: [
        {
          type: 'Green Skills',
          description: 'Clean technology and renewable energy expertise becoming industry standard',
          bgClass: 'bg-green-50 dark:bg-green-900/20',
          titleClass: 'text-green-900 dark:text-green-400',
          textClass: 'text-green-800 dark:text-green-300',
        },
        {
          type: 'ESG Integration',
          description:
            'Environmental, social, and governance principles embedded in workforce strategy',
          bgClass: 'bg-emerald-50 dark:bg-emerald-900/20',
          titleClass: 'text-emerald-900 dark:text-emerald-400',
          textClass: 'text-emerald-800 dark:text-emerald-300',
        },
        {
          type: 'Transition Success',
          description:
            'Traditional energy expertise evolving with sustainable technology integration',
          bgClass: 'bg-teal-50 dark:bg-teal-900/20',
          titleClass: 'text-teal-900 dark:text-teal-400',
          textClass: 'text-teal-800 dark:text-teal-300',
        },
      ],
    },
    {
      icon: 'H',
      iconClasses: 'bg-gradient-to-br from-red-500 to-pink-600',
      title: 'Healthcare Digital Evolution',
      industry: 'Healthcare',
      location: 'UAE & Regional Markets',
      description:
        'Healthcare transformation through digital innovation and medical tourism technology. Biotechnology advancement and telemedicine integration driving 78% growth in health-tech specialization, with UAE leading regional medical tourism development.',
      stats: [
        { value: '+78%', label: 'HealthTech Growth' },
        { value: '85%', label: 'Digital Health Adoption' },
      ],
      achievement:
        'Regional healthcare hub development with advanced medical tourism infrastructure',
      solutions: [
        {
          type: 'Medical Tourism',
          description:
            'UAE becoming global healthcare destination with advanced medical technology',
          bgClass: 'bg-red-50 dark:bg-red-900/20',
          titleClass: 'text-red-900 dark:text-red-400',
          textClass: 'text-red-800 dark:text-red-300',
        },
        {
          type: 'Digital Health',
          description: 'Telemedicine and AI diagnostics revolutionizing patient care delivery',
          bgClass: 'bg-pink-50 dark:bg-pink-900/20',
          titleClass: 'text-pink-900 dark:text-pink-400',
          textClass: 'text-pink-800 dark:text-pink-300',
        },
        {
          type: 'Innovation',
          description: 'Biotechnology and pharmaceutical advancement driving regional expertise',
          bgClass: 'bg-rose-50 dark:bg-rose-900/20',
          titleClass: 'text-rose-900 dark:text-rose-400',
          textClass: 'text-rose-800 dark:text-rose-300',
        },
      ],
    },
  ]

  // Expert insights from various industries
  const expertInsights = [
    {
      insight:
        "The convergence of AI and human creativity is creating entirely new job categories. We're not just automating tasks—we're augmenting human potential across every industry sector.",
      expert: 'Dr. Sarah Chen',
      expertise: 'Technology Transformation Expert',
      initials: 'SC',
    },
    {
      insight:
        "ESG is no longer optional—it's become the foundation of competitive advantage. Companies with strong sustainability practices are seeing 20%+ premium in talent attraction.",
      expert: 'Ahmed Al-Mansouri',
      expertise: 'Energy Transition Specialist',
      initials: 'AM',
    },
    {
      insight:
        'Skills-based hiring is revolutionizing recruitment. 76% of progressive employers now prioritize demonstrated competencies over traditional degree requirements.',
      expert: 'Lisa Rodriguez',
      expertise: 'Future of Work Analyst',
      initials: 'LR',
    },
  ]

  // Sector statistics
  const sectorStats = [
    {
      name: 'Technology',
      growth: '+312%',
      metric: 'AI Skills Demand',
      icon: 'T',
      iconClasses: 'w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 font-bold',
    },
    {
      name: 'Energy & ESG',
      growth: '+134%',
      metric: 'Green Roles',
      icon: 'E',
      iconClasses: 'w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 font-bold',
    },
    {
      name: 'Healthcare',
      growth: '+78%',
      metric: 'Digital Health',
      icon: 'H',
      iconClasses: 'w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 font-bold',
    },
    {
      name: 'Financial',
      growth: '90%+',
      metric: 'Digital Adoption',
      icon: 'F',
      iconClasses: 'w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 font-bold',
    },
  ]
</script>

<style scoped>
  /* Gradient text effect */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }

  /* Dark mode adaptations */
  @media (prefers-color-scheme: dark) {
    .bg-green-50 {
      background-color: rgba(16, 185, 129, 0.1);
    }
    .border-green-200 {
      border-color: rgba(16, 185, 129, 0.2);
    }
    .text-green-900 {
      color: rgb(52, 211, 153);
    }
    .text-green-800 {
      color: rgb(110, 231, 183);
    }

    .bg-blue-50 {
      background-color: rgba(59, 130, 246, 0.1);
    }
    .border-blue-200 {
      border-color: rgba(59, 130, 246, 0.2);
    }
    .text-blue-900 {
      color: rgb(96, 165, 250);
    }
    .text-blue-800 {
      color: rgb(147, 197, 253);
    }

    .bg-purple-50 {
      background-color: rgba(147, 51, 234, 0.1);
    }
    .border-purple-200 {
      border-color: rgba(147, 51, 234, 0.2);
    }
    .text-purple-900 {
      color: rgb(196, 181, 253);
    }
    .text-purple-800 {
      color: rgb(221, 214, 254);
    }

    .bg-red-50 {
      background-color: rgba(239, 68, 68, 0.1);
    }
    .border-red-200 {
      border-color: rgba(239, 68, 68, 0.2);
    }
    .text-red-900 {
      color: rgb(248, 113, 113);
    }
    .text-red-800 {
      color: rgb(252, 165, 165);
    }

    .bg-pink-50 {
      background-color: rgba(236, 72, 153, 0.1);
    }
    .text-pink-900 {
      color: rgb(249, 168, 212);
    }
    .text-pink-800 {
      color: rgb(251, 207, 232);
    }

    .bg-emerald-50 {
      background-color: rgba(16, 185, 129, 0.1);
    }
    .text-emerald-900 {
      color: rgb(52, 211, 153);
    }
    .text-emerald-800 {
      color: rgb(110, 231, 183);
    }

    .bg-teal-50 {
      background-color: rgba(20, 184, 166, 0.1);
    }
    .text-teal-900 {
      color: rgb(94, 234, 212);
    }
    .text-teal-800 {
      color: rgb(153, 246, 228);
    }

    .bg-indigo-50 {
      background-color: rgba(99, 102, 241, 0.1);
    }
    .text-indigo-900 {
      color: rgb(165, 180, 252);
    }
    .text-indigo-800 {
      color: rgb(199, 210, 254);
    }

    .bg-rose-50 {
      background-color: rgba(244, 63, 94, 0.1);
    }
    .text-rose-900 {
      color: rgb(251, 113, 133);
    }
    .text-rose-800 {
      color: rgb(252, 165, 165);
    }
  }

  /* Mobile optimization */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .grid.grid-cols-2.lg\\:grid-cols-4 {
      gap: 0.75rem;
    }

    .grid.grid-cols-2.lg\\:grid-cols-4 > div {
      padding: 1rem;
    }
  }
</style>
