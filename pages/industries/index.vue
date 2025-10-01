<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Header Section with Background Image -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[75vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Industries Background"
          class="h-full w-full object-cover object-center"
        />
        <!-- Gradient Overlays -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"
        ></div>
      </div>

      <!-- Background Decorations -->
      <div class="absolute inset-0">
        <div
          class="absolute right-20 top-20 h-40 w-40 rounded-full opacity-5"
          style="background-color: var(--tm-accent-primary)"
        ></div>
        <div
          class="absolute bottom-32 left-20 h-24 w-24 rounded-full opacity-5"
          style="background-color: var(--tm-accent-secondary)"
        ></div>
      </div>

      <div class="relative z-10 mx-auto w-full max-w-[1400px] px-4 text-center md:px-8">
        <!-- Breadcrumb Navigation -->
        <div
          class="mx-auto mb-8 flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs backdrop-blur-md animate-[fade-in-up_0.8s_ease-out_forwards] md:gap-3 md:px-6 md:py-3 sm:text-sm"
        >
          <NuxtLink
            to="/"
            class="font-medium text-white/80 transition-colors duration-300 hover:text-blue-400 hover:drop-shadow-md"
            @click="handleHomeClick"
          >
            Home
          </NuxtLink>
          <span class="font-light text-white/50">/</span>
          <span class="font-semibold text-blue-400 drop-shadow-sm">Industries</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl animate-[fade-in-up_0.8s_ease-out_0.2s_forwards] opacity-0 sm:text-5xl md:mb-8 md:px-0 md:text-6xl md:leading-[0.9] lg:text-7xl xl:text-8xl"
        >
          Industries We Transform
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-full px-4 text-base leading-relaxed text-white/90 drop-shadow-lg animate-[fade-in-up_0.8s_ease-out_0.4s_forwards] opacity-0 sm:text-lg md:mb-12 md:max-w-4xl md:px-0 md:text-xl lg:text-2xl"
        >
          Delivering cutting-edge consulting and talent solutions across transformative GCC
          industries, with deep expertise in digital transformation, sustainability, and emerging
          technologies shaping the future of business.
        </p>

        <!-- Stats Row -->
        <div
          class="flex flex-col items-center justify-center gap-6 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards] opacity-0 sm:flex-row sm:gap-12 lg:gap-16"
        >
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">1M+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Candidate Database</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">170K+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Jobs Placed</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">20K+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Satisfied Clients</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">15</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Years Experience</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Industries Grid Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-light text-gray-900 dark:text-[var(--tm-txt-primary)]">
            Explore Our Industry Expertise
          </h2>
          <p
            class="mx-auto max-w-[600px] text-lg text-gray-600 dark:text-[var(--tm-txt-secondary)]"
          >
            Click on any industry to learn more about our specialized consulting and talent
            solutions for the future economy.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="industry in industries"
            :key="industry.slug"
            :to="industry.link"
            class="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] transition-all duration-400 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <!-- Hover Effect Overlay -->
            <div
              class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 dark:via-[var(--tm-bg-white-alpha05)] to-transparent transition-transform duration-600 group-hover:translate-x-full"
            ></div>

            <div class="flex items-start justify-between p-8 pb-4">
              <div
                class="flex h-15 w-15 items-center justify-center rounded-2xl border border-[var(--tm-accent-primary)]/20 bg-gradient-to-br from-[var(--tm-accent-primary)]/10 to-[var(--tm-accent-secondary)]/10 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:border-[var(--tm-accent-primary)] group-hover:bg-gradient-to-br group-hover:from-[var(--tm-accent-primary)] group-hover:to-[var(--tm-accent-secondary)]"
              >
                <span class="transition-transform duration-300 group-hover:scale-110">
                  {{ getIndustryIcon(industry.name) }}
                </span>
              </div>
              <div
                class="rounded-full border border-gray-200 dark:border-[var(--tm-bd-secondary)] bg-gray-100 dark:bg-[var(--tm-bg-secondary)] px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-[var(--tm-txt-light)]"
              >
                {{ industry.category }}
              </div>
            </div>

            <div class="flex-grow px-8 pb-6">
              <h3
                class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)] transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
              >
                {{ industry.name }}
              </h3>
              <p class="mb-6 leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
                {{ industry.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in industry.tags"
                  :key="tag"
                  class="rounded-2xl border border-blue-300 dark:border-white/20 bg-blue-500/80 dark:bg-white/20 px-3 py-1.5 text-xs font-medium text-white dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[var(--tm-accent-primary)] group-hover:bg-[var(--tm-accent-primary)] group-hover:text-white"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="mt-auto px-8 pb-8">
              <span
                class="inline-flex items-center gap-2 text-sm font-medium text-[var(--tm-accent-primary)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--tm-accent-secondary)]"
              >
                Learn More →
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="bg-[var(--tm-bg-primary)] py-20">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-light text-gray-900 dark:text-[var(--tm-txt-primary)]">
            Why Choose VMMC for Your Industry Transformation
          </h2>
          <p class="text-lg text-gray-600 dark:text-[var(--tm-txt-secondary)]">
            15 years of proven expertise delivering recruitment and HR consulting solutions for the
            digital future
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div
            class="rounded-2xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--tm-accent-primary)]/20 bg-gradient-to-br from-[var(--tm-accent-primary)]/10 to-[var(--tm-accent-secondary)]/10 text-white transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[var(--tm-accent-primary)] hover:to-[var(--tm-accent-secondary)]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Future-Ready Expertise
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Leading recruitment in emerging technologies including AI, blockchain, and digital
              transformation across all industry sectors.
            </p>
          </div>

          <div
            class="rounded-2xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--tm-accent-primary)]/20 bg-gradient-to-br from-[var(--tm-accent-primary)]/10 to-[var(--tm-accent-secondary)]/10 text-white transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[var(--tm-accent-primary)] hover:to-[var(--tm-accent-secondary)]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                  ></circle>
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Emiratisation Excellence
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Leading specialist in UAE nationalization programs with extensive local talent
              networks and proven compliance methodologies.
            </p>
          </div>

          <div
            class="rounded-2xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--tm-accent-primary)]/20 bg-gradient-to-br from-[var(--tm-accent-primary)]/10 to-[var(--tm-accent-secondary)]/10 text-white transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[var(--tm-accent-primary)] hover:to-[var(--tm-accent-secondary)]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  ></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m15.5 7.5-3 3-3-3"></path>
                  <path d="m15.5 16.5-3-3-3 3"></path>
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Sustainability Focus
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Specialized talent solutions for ESG compliance, green technologies, and sustainable
              business practices across the GCC region.
            </p>
          </div>

          <div
            class="rounded-2xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--tm-accent-primary)]/20 bg-gradient-to-br from-[var(--tm-accent-primary)]/10 to-[var(--tm-accent-secondary)]/10 text-white transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[var(--tm-accent-primary)] hover:to-[var(--tm-accent-secondary)]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              GCC Regional Expertise
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Deep understanding of UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain employment
              markets and cultural requirements.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="relative overflow-hidden bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] py-20 text-white"
    >
      <!-- Animated Background -->
      <div
        class="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] animate-[rotate_20s_linear_infinite]"
      >
        <div
          class="h-full w-full"
          style="background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
        ></div>
      </div>

      <div class="container relative z-1 mx-auto max-w-[800px] px-8 text-center">
        <h2 class="mb-4 text-4xl font-light">Ready to Transform Your Industry?</h2>
        <p class="mb-8 text-xl leading-relaxed opacity-95">
          Connect with VMMC's industry transformation specialists to discuss your recruitment needs
          and discover how our 15 years of expertise can help you build future-ready teams.
        </p>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            class="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[var(--tm-accent-primary)] shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--tm-bg-hover)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]"
            @click="openConsultationModal"
          >
            Start Your Transformation
          </button>
          <button
            class="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/50"
            @click="openExpertModal"
          >
            Speak with Specialists
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />

    <!-- 专家咨询弹出框 (简化版) -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- 完整咨询表单弹出框 -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'
  import { useMenuHandler } from '~/composables/useMenuHandler'

  // Get unified menu handling methods
  const { resetToHome } = useMenuHandler()

  // Handle Home click using unified reset method
  const handleHomeClick = resetToHome

  // 弹出框状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // 简化版专家咨询弹出框控制
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整版咨询表单弹出框控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Industry data based on current market trends and digital transformation
  const industries = [
    {
      name: 'Oil & Gas',
      slug: 'oil-gas',
      link: '/industries/oil-gas',
      description:
        'Executive search and talent solutions for upstream, midstream, and downstream operations. Specializing in digital transformation, energy transition, and sustainability initiatives in the energy sector.',
      category: 'Energy',
      tags: ['Digital Transformation', 'Energy Transition', 'Sustainability', 'Executive Search'],
    },
    {
      name: 'Banking & Finance',
      slug: 'banking-finance',
      link: '/industries/banking-finance',
      description:
        'Comprehensive financial services recruitment including wealth management, digital banking, fintech, and regulatory compliance. Supporting UAE banking digitalization and ESG finance initiatives.',
      category: 'Financial Services',
      tags: ['Wealth Management', 'Digital Banking', 'Fintech', 'ESG Finance'],
    },
    {
      name: 'Healthcare & Medical Tourism',
      slug: 'healthcare-medical-tourism',
      link: '/industries/healthcare-medical-tourism',
      description:
        'Medical professionals recruitment and healthcare leadership search. Expertise in medical tourism, biotechnology, pharmaceuticals, and digital health innovations.',
      category: 'Healthcare',
      tags: ['Medical Tourism', 'Digital Health', 'Biotechnology', 'Healthcare Leadership'],
    },
    {
      name: 'Technology & AI',
      slug: 'technology-ai',
      link: '/industries/technology-ai',
      description:
        'Technology talent solutions covering AI/ML, cloud infrastructure, cybersecurity, and digital transformation. Supporting smart city initiatives and Industry 4.0 implementations.',
      category: 'Technology',
      tags: [
        'Artificial Intelligence',
        'Cloud Computing',
        'Cybersecurity',
        'Digital Transformation',
      ],
    },
    {
      name: 'Construction & Smart Cities',
      slug: 'construction-smart-cities',
      link: '/industries/construction-smart-cities',
      description:
        'Construction and infrastructure talent for mega-projects, sustainable building, and smart city developments. Expertise in green construction and modular building technologies.',
      category: 'Construction',
      tags: ['Smart Cities', 'Sustainable Building', 'Infrastructure', 'Green Construction'],
    },
    {
      name: 'Manufacturing & Industry 4.0',
      slug: 'manufacturing',
      link: '/industries/manufacturing',
      description:
        'Advanced manufacturing recruitment focusing on automation, robotics, supply chain digitalization, and smart factory implementations across the GCC region.',
      category: 'Manufacturing',
      tags: ['Industry 4.0', 'Automation', 'Smart Factories', 'Supply Chain'],
    },
    {
      name: 'Hospitality & Tourism',
      slug: 'hospitality',
      link: '/industries/hospitality',
      description:
        'Tourism and hospitality talent solutions supporting experience economy growth, personalized travel services, and sustainable tourism initiatives in the GCC.',
      category: 'Hospitality',
      tags: [
        'Experience Economy',
        'Sustainable Tourism',
        'Digital Services',
        'Personalized Travel',
      ],
    },
    {
      name: 'Retail & E-commerce',
      slug: 'retail-ecommerce',
      link: '/industries/retail-ecommerce',
      description:
        'Retail transformation and e-commerce talent including social commerce, omnichannel strategies, and sustainable retail practices for the digital economy.',
      category: 'Retail',
      tags: ['E-commerce', 'Social Commerce', 'Omnichannel', 'Sustainable Retail'],
    },
    {
      name: 'Education & EdTech',
      slug: 'education-edtech',
      link: '/industries/education-edtech',
      description:
        'Educational technology and lifelong learning talent solutions. Supporting digital transformation in education, skills training, and cross-border learning initiatives.',
      category: 'Education',
      tags: ['Educational Technology', 'Lifelong Learning', 'Digital Learning', 'Skills Training'],
    },
    {
      name: 'Legal & Compliance',
      slug: 'legal-compliance',
      link: '/industries/legal-compliance',
      description:
        'Legal services and compliance expertise including data privacy, ESG compliance, RegTech, and cross-border regulatory frameworks for the digital economy.',
      category: 'Legal Services',
      tags: ['Data Privacy', 'ESG Compliance', 'RegTech', 'Digital Law'],
    },
    {
      name: 'Insurance & Risk Management',
      slug: 'insurance-risk',
      link: '/industries/insurance-risk',
      description:
        'Insurance industry transformation including InsurTech, cyber insurance, climate risk management, and blockchain-enabled smart contracts.',
      category: 'Insurance',
      tags: ['InsurTech', 'Cyber Insurance', 'Climate Risk', 'Blockchain'],
    },
    {
      name: 'Logistics & Supply Chain',
      slug: 'logistics-supply-chain',
      link: '/industries/logistics-supply-chain',
      description:
        'Supply chain digitalization and logistics automation talent. Expertise in smart logistics, green supply chains, and automated warehousing solutions.',
      category: 'Logistics',
      tags: ['Supply Chain Digitalization', 'Smart Logistics', 'Green Supply Chain', 'Automation'],
    },
  ]

  // Generate industry icons
  const getIndustryIcon = (name) => {
    const iconMap = {
      'Oil & Gas': '⚡',
      'Banking & Finance': '🏦',
      'Healthcare & Medical Tourism': '🏥',
      'Technology & AI': '🤖',
      'Construction & Smart Cities': '🏗️',
      'Manufacturing & Industry 4.0': '🏭',
      'Hospitality & Tourism': '🌟',
      'Retail & E-commerce': '🛒',
      'Education & EdTech': '📚',
      'Legal & Compliance': '⚖️',
      'Insurance & Risk Management': '🛡️',
      'Logistics & Supply Chain': '🚛',
    }
    return iconMap[name] || '🏢'
  }

  // Enhanced SEO settings for Nuxt
  useHead({
    title: 'Future-Ready Industries - Digital Transformation & AI Talent Solutions | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Leading GCC industry transformation through AI, digital technologies, and sustainable practices. Expert talent solutions for Oil & Gas, Banking, Healthcare, Technology, Smart Cities, Manufacturing, and emerging sectors across UAE, Saudi Arabia, and Gulf region.',
      },
      {
        name: 'keywords',
        content:
          'GCC digital transformation, AI talent solutions, Industry 4.0 recruitment, sustainable business consulting, smart cities talent, fintech recruiting, energy transition careers, digital health professionals, UAE emiratisation, Saudi Vision 2030 talent',
      },
      {
        property: 'og:title',
        content: 'Future-Ready Industries - Digital Transformation & AI Talent Solutions | VMMC',
      },
      {
        property: 'og:description',
        content:
          'Transform your industry with cutting-edge talent solutions. 15 years of expertise in AI, digital transformation, sustainability, and emerging technologies across GCC markets.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:title',
        content: 'Future-Ready Industries - Digital Transformation Talent | VMMC',
      },
      {
        name: 'twitter:description',
        content:
          'Leading GCC industry transformation through AI, digital technologies, and sustainable talent solutions. Expert recruitment for the future economy.',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'author',
        content: 'VMMC - Vision Management & Marketing Consultancy',
      },
      {
        name: 'geo.region',
        content: 'AE-DU',
      },
      {
        name: 'geo.placename',
        content: 'Dubai, United Arab Emirates',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.vmmcae.com/industries',
      },
    ],
  })

  // Define page meta for Nuxt
  definePageMeta({
    layout: 'default',
  })
</script>

<style scoped>
  /* Custom animations */
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Animation utilities */
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-rotate {
    animation: rotate 20s linear infinite;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2.5rem;
    }
  }
</style>
