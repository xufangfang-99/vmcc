<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)]">
    <!-- Header Section with Background Image -->
    <div class="relative overflow-hidden py-20 md:py-32 min-h-[75vh] flex items-center">
      <!-- Background Image Layer -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
          alt="Banking & Finance Background"
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
          <span class="font-semibold text-blue-400 drop-shadow-sm">Banking & Finance</span>
        </div>

        <!-- Main Title -->
        <h1
          class="mb-6 px-2 text-4xl font-light leading-[0.95] tracking-tight text-white drop-shadow-2xl animate-[fade-in-up_0.8s_ease-out_0.2s_forwards] opacity-0 sm:text-5xl md:mb-8 md:px-0 md:text-6xl md:leading-[0.9] lg:text-7xl xl:text-8xl"
        >
          Banking & Finance Solutions
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-full px-4 text-base leading-relaxed text-white/90 drop-shadow-lg animate-[fade-in-up_0.8s_ease-out_0.4s_forwards] opacity-0 sm:text-lg md:mb-12 md:max-w-4xl md:px-0 md:text-xl lg:text-2xl"
        >
          Leading financial services recruitment and strategic consulting. We partner with global
          banks, investment firms, fintech companies, and financial institutions to build
          exceptional teams and drive digital transformation across the industry.
        </p>

        <!-- Stats Row -->
        <div
          class="flex flex-col items-center justify-center gap-6 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards] opacity-0 sm:flex-row sm:gap-12 lg:gap-16"
        >
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">800K+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Finance Professionals</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">150K+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Banking Placements</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">15K+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Financial Institutions</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">20</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Years Excellence</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Industries Grid Section -->
    <div class="py-20 bg-[var(--tm-bg-secondary)]">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-light text-gray-900 dark:text-[var(--tm-txt-primary)]">
            Financial Services Expertise
          </h2>
          <p
            class="mx-auto max-w-[600px] text-lg text-gray-600 dark:text-[var(--tm-txt-secondary)]"
          >
            Comprehensive talent solutions across all segments of the global financial services
            ecosystem.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="sector in financialSectors"
            :key="sector.slug"
            class="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] transition-all duration-400 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)] cursor-pointer"
            @click="openExpertModal"
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
                  {{ sector.icon }}
                </span>
              </div>
              <div
                class="rounded-full border border-gray-200 dark:border-[var(--tm-bd-secondary)] bg-gray-100 dark:bg-[var(--tm-bg-secondary)] px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-[var(--tm-txt-light)]"
              >
                {{ sector.category }}
              </div>
            </div>

            <div class="flex-grow px-8 pb-6">
              <h3
                class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)] transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
              >
                {{ sector.name }}
              </h3>
              <p class="mb-6 leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
                {{ sector.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in sector.tags"
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
                Get Expert Consultation →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="bg-[var(--tm-bg-primary)] py-20">
      <div class="container mx-auto max-w-[1400px] px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-light text-gray-900 dark:text-[var(--tm-txt-primary)]">
            Why Choose VMMC for Financial Services
          </h2>
          <p class="text-lg text-gray-600 dark:text-[var(--tm-txt-secondary)]">
            20 years of proven expertise delivering results for the world's leading financial
            institutions
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div
            class="rounded-2xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--tm-accent-primary)]/20 bg-gradient-to-br from-[var(--tm-accent-primary)]/10 to-[var(--tm-accent-secondary)]/10 text-[var(--tm-accent-primary)] transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[var(--tm-accent-primary)] hover:to-[var(--tm-accent-secondary)] hover:text-white"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                  ></rect>
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                  ></line>
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                  ></line>
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Digital Transformation Expertise
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Leading fintech talent acquisition and digital banking transformation initiatives
              across global markets.
            </p>
          </div>

          <div
            class="rounded-2xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--tm-accent-primary)]/20 bg-gradient-to-br from-[var(--tm-accent-primary)]/10 to-[var(--tm-accent-secondary)]/10 text-[var(--tm-accent-primary)] transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[var(--tm-accent-primary)] hover:to-[var(--tm-accent-secondary)] hover:text-white"
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
              Regulatory Compliance
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Deep understanding of global financial regulations and compliance requirements across
              all major jurisdictions.
            </p>
          </div>

          <div
            class="rounded-2xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--tm-accent-primary)]/20 bg-gradient-to-br from-[var(--tm-accent-primary)]/10 to-[var(--tm-accent-secondary)]/10 text-[var(--tm-accent-primary)] transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[var(--tm-accent-primary)] hover:to-[var(--tm-accent-secondary)] hover:text-white"
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
                    r="10"
                  ></circle>
                  <path d="M2 12h20"></path>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Global Market Access
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Extensive network across major financial centers: New York, London, Hong Kong,
              Singapore, Dubai, and more.
            </p>
          </div>

          <div
            class="rounded-2xl border border-gray-200 dark:border-[var(--tm-bd-card)] bg-white dark:bg-[var(--tm-bg-card)] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
          >
            <div class="mb-6">
              <div
                class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--tm-accent-primary)]/20 bg-gradient-to-br from-[var(--tm-accent-primary)]/10 to-[var(--tm-accent-secondary)]/10 text-[var(--tm-accent-primary)] transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[var(--tm-accent-primary)] hover:to-[var(--tm-accent-secondary)] hover:text-white"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Executive Leadership Focus
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Specialized in C-suite and senior leadership recruitment for top-tier financial
              institutions worldwide.
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
        <h2 class="mb-4 text-4xl font-light">Transform Your Financial Services Team</h2>
        <p class="mb-8 text-xl leading-relaxed opacity-95">
          Partner with VMMC's financial services experts to build exceptional teams and drive
          digital innovation across your organization.
        </p>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            class="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[var(--tm-accent-primary)] shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--tm-bg-hover)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]"
            @click="openExpertModal"
          >
            Discuss Your Needs
          </button>
          <button
            class="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-transparent px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            @click="openConsultationModal"
          >
            Detailed Consultation
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />

    <!-- 专家咨询弹窗（简化版） -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- 完整咨询表单弹窗 -->
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

  // 获取统一的菜单处理方法
  const { resetToHome } = useMenuHandler()

  // 处理 Home 点击，使用统一的重置方法
  const handleHomeClick = resetToHome

  // 弹窗状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // 简化版专家咨询弹窗控制
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整版咨询表单弹窗控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }

  // Financial sectors data - 移除了 link 字段
  const financialSectors = [
    {
      name: 'Investment Banking',
      slug: 'investment-banking',
      description:
        'Capital markets, M&A advisory, securities trading, and investment banking professionals for global financial institutions.',
      category: 'Capital Markets',
      icon: '📈',
      tags: ['M&A', 'Capital Markets', 'Securities'],
    },
    {
      name: 'Retail Banking',
      slug: 'retail-banking',
      description:
        'Consumer banking, branch management, and customer relationship specialists driving retail banking excellence.',
      category: 'Consumer Banking',
      icon: '🏦',
      tags: ['Branch Banking', 'Customer Service', 'Digital Banking'],
    },
    {
      name: 'Corporate Banking',
      slug: 'corporate-banking',
      description:
        'Commercial lending, corporate finance, and relationship management for enterprise banking solutions.',
      category: 'Commercial Finance',
      icon: '🏢',
      tags: ['Commercial Lending', 'Corporate Finance', 'Relationship Management'],
    },
    {
      name: 'Wealth Management',
      slug: 'wealth-management',
      description:
        'Private banking, asset management, and wealth advisory services for high-net-worth individuals and institutions.',
      category: 'Private Banking',
      icon: '💎',
      tags: ['Private Banking', 'Asset Management', 'Wealth Advisory'],
    },
    {
      name: 'FinTech & Digital Banking',
      slug: 'fintech-digital',
      description:
        'Digital transformation, blockchain, payments technology, and fintech innovation specialists.',
      category: 'Technology',
      icon: '💳',
      tags: ['Blockchain', 'Payments', 'Digital Innovation'],
    },
    {
      name: 'Risk Management',
      slug: 'risk-management',
      description:
        'Credit risk, market risk, operational risk, and regulatory compliance professionals ensuring financial stability.',
      category: 'Risk & Compliance',
      icon: '🛡️',
      tags: ['Credit Risk', 'Market Risk', 'Compliance'],
    },
    {
      name: 'Insurance & Reinsurance',
      slug: 'insurance-reinsurance',
      description:
        'Life, health, property & casualty insurance, and reinsurance professionals across global markets.',
      category: 'Insurance',
      icon: '☂️',
      tags: ['Life Insurance', 'P&C Insurance', 'Reinsurance'],
    },
    {
      name: 'Asset Management',
      slug: 'asset-management',
      description:
        'Portfolio management, institutional investing, and alternative investment professionals for global fund management.',
      category: 'Investments',
      icon: '📊',
      tags: ['Portfolio Management', 'Institutional Investing', 'Alternative Investments'],
    },
    {
      name: 'Financial Technology',
      slug: 'financial-technology',
      description:
        'RegTech, WealthTech, InsurTech, and financial software development specialists driving industry innovation.',
      category: 'Technology',
      icon: '🔧',
      tags: ['RegTech', 'WealthTech', 'Financial Software'],
    },
  ]

  // SEO settings
  useHead({
    title: 'Banking & Finance - Expert Recruitment & Consulting | VMMC',
    meta: [
      {
        name: 'description',
        content:
          "Explore VMMC's comprehensive banking and finance recruitment services across investment banking, retail banking, fintech, wealth management, and more. Expert talent solutions for global financial institutions.",
      },
      {
        name: 'keywords',
        content:
          'banking finance recruitment, investment banking jobs, fintech talent, wealth management careers, financial services consulting, banking executive search, digital banking recruitment',
      },
    ],
  })

  definePageMeta({
    layout: 'default',
  })
</script>

<style>
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

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Dark mode support */
  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
  }

  .dark .bg-gradient-to-br {
    background: linear-gradient(135deg, var(--tm-bg-primary) 0%, var(--tm-bg-secondary) 100%);
  }

  .dark .bg-\[var\(--tm-bg-card\)\] {
    background: var(--tm-bg-primary);
  }

  .dark .border-\[var\(--tm-bd-card\)\] {
    border-color: var(--tm-bd-secondary);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2.5rem;
    }
  }
</style>
