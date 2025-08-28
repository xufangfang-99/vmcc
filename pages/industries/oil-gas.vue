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
          Industries We Serve
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-8 max-w-full px-4 text-base leading-relaxed text-white/90 drop-shadow-lg animate-[fade-in-up_0.8s_ease-out_0.4s_forwards] opacity-0 sm:text-lg md:mb-12 md:max-w-4xl md:px-0 md:text-xl lg:text-2xl"
        >
          Delivering expert consulting and talent solutions across key GCC industries, with deep
          domain knowledge and proven methodologies tailored to your sector's unique challenges.
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
            solutions.
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
            Why Choose Our Industry Expertise
          </h2>
          <p class="text-lg text-gray-600 dark:text-[var(--tm-txt-secondary)]">
            We bring unique value to every sector we serve across the GCC region
          </p>
        </div>

        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-light text-gray-900 dark:text-[var(--tm-txt-primary)]">
            Why Choose VMMC for Your Industry
          </h2>
          <p class="text-lg text-gray-600 dark:text-[var(--tm-txt-secondary)]">
            15 years of proven expertise delivering recruitment and HR consulting solutions across
            the GCC region
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
              Proven Track Record
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Over 170K successful job placements and 20K satisfied clients across 15 years of
              global operations.
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
                    r="3"
                  ></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m15.5 7.5-3 3-3-3"></path>
                  <path d="m15.5 16.5-3-3-3 3"></path>
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Vast Talent Network
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Access to 1M+ candidate database spanning all job levels from administrative roles to
              C-suite executives.
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
        <h2 class="mb-4 text-4xl font-light">Ready to Find Your Next Top Talent?</h2>
        <p class="mb-8 text-xl leading-relaxed opacity-95">
          Connect with VMMC's industry specialists to discuss your recruitment needs and discover
          how our 15 years of expertise can help you build exceptional teams.
        </p>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[var(--tm-accent-primary)] shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--tm-bg-hover)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]"
          >
            Discuss Your Hiring Needs
          </NuxtLink>
          <a
            href="mailto:contact@vmmc.com"
            class="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-transparent px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            Email Our Recruiters
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
  import FooterSection from '~/components/Home/FooterSection.vue'
  import { useMenuHandler } from '~/composables/useMenuHandler'
  // 获取统一的菜单处理方法
  const { resetToHome } = useMenuHandler()

  // 处理 Home 点击，使用统一的重置方法
  const handleHomeClick = resetToHome
  // Industry data based on VMMC's actual expertise and services
  const industries = [
    {
      name: 'Oil & Gas',
      slug: 'oil-gas',
      link: '/industries/oil-gas',
      description:
        'Executive search, emiratisation programs, and specialized talent solutions for energy sector operations across upstream, midstream, and downstream activities.',
      category: 'Energy',
      tags: ['Executive Search', 'Emiratisation', 'Technical Talent'],
      services: [
        'Senior Leadership Recruitment',
        'Local Talent Development',
        'Project-Based Hiring',
      ],
      keyRoles: [
        'Petroleum Engineers',
        'Project Managers',
        'HSE Specialists',
        'Operations Directors',
      ],
    },
    {
      name: 'Banking & Finance',
      slug: 'banking-finance',
      link: '/industries/banking-finance',
      description:
        'Comprehensive recruitment and HR consulting for financial institutions, from relationship managers to C-suite executives, ensuring regulatory compliance.',
      category: 'Financial Services',
      tags: ['Executive Search', 'Compliance Talent', 'Fintech Specialists'],
      services: [
        'Private Banking Recruitment',
        'Risk & Compliance Hiring',
        'Digital Banking Talent',
      ],
      keyRoles: [
        'Relationship Managers',
        'Risk Officers',
        'Investment Advisors',
        'Branch Managers',
      ],
    },
    {
      name: 'Healthcare & Life Sciences',
      slug: 'healthcare-life-sciences',
      link: '/industries/healthcare-life-sciences',
      description:
        'Specialized recruitment for medical professionals, healthcare administration, and life sciences research, with deep understanding of licensing requirements.',
      category: 'Healthcare',
      tags: ['Medical Recruitment', 'Licensed Professionals', 'Healthcare Leadership'],
      services: [
        'Doctor & Nurse Recruitment',
        'Healthcare Administration',
        'Medical Technology Talent',
      ],
      keyRoles: [
        'Consultant Physicians',
        'Registered Nurses',
        'Hospital Administrators',
        'Medical Directors',
      ],
    },
    {
      name: 'Information Technology',
      slug: 'information-technology',
      link: '/industries/information-technology',
      description:
        'End-to-end IT talent solutions from software developers to Chief Technology Officers, supporting digital transformation initiatives across the GCC.',
      category: 'Technology',
      tags: ['Tech Leadership', 'Software Development', 'Digital Transformation'],
      services: [
        'Software Engineering Recruitment',
        'IT Leadership Search',
        'Digital Skills Training',
      ],
      keyRoles: ['Software Engineers', 'Solution Architects', 'IT Directors', 'Data Scientists'],
    },
    {
      name: 'Construction & Engineering',
      slug: 'construction-engineering',
      link: '/industries/construction-engineering',
      description:
        'Comprehensive talent solutions for construction projects, infrastructure development, and engineering consultancies throughout the GCC region.',
      category: 'Engineering',
      tags: ['Project Management', 'Technical Expertise', 'Infrastructure'],
      services: [
        'Civil Engineering Recruitment',
        'Project Management Talent',
        'Construction Leadership',
      ],
      keyRoles: ['Civil Engineers', 'Project Managers', 'Construction Managers', 'Site Engineers'],
    },
    {
      name: 'Manufacturing & Industrial',
      slug: 'manufacturing-industrial',
      link: '/industries/manufacturing-industrial',
      description:
        'Industrial recruitment expertise covering production management, quality control, and operations leadership for manufacturing excellence.',
      category: 'Manufacturing',
      tags: ['Operations Excellence', 'Quality Management', 'Production Leadership'],
      services: ['Operations Management', 'Quality Control Specialists', 'Industrial Engineering'],
      keyRoles: [
        'Operations Managers',
        'Quality Engineers',
        'Production Supervisors',
        'Plant Managers',
      ],
    },
    {
      name: 'Hospitality & Travel',
      slug: 'hospitality-travel',
      link: '/industries/hospitality-travel',
      description:
        'Hospitality recruitment and training solutions for hotels, resorts, restaurants, and travel companies, focusing on service excellence and guest experience.',
      category: 'Hospitality',
      tags: ['Service Excellence', 'Guest Experience', 'Tourism Professionals'],
      services: ['Hotel Management Recruitment', 'F&B Specialists', 'Travel Industry Talent'],
      keyRoles: ['General Managers', 'F&B Managers', 'Front Office Managers', 'Travel Consultants'],
    },
    {
      name: 'Retail & Consumer Products',
      slug: 'retail-consumer-products',
      link: '/industries/retail-consumer-products',
      description:
        'Retail talent acquisition and training programs for store operations, merchandising, e-commerce, and retail management across the GCC.',
      category: 'Retail',
      tags: ['Store Operations', 'E-commerce', 'Brand Management'],
      services: ['Retail Management Search', 'Sales Team Building', 'Visual Merchandising'],
      keyRoles: [
        'Store Managers',
        'Sales Associates',
        'Category Managers',
        'E-commerce Specialists',
      ],
    },
    {
      name: 'Education & Training',
      slug: 'education-training',
      link: '/industries/education-training',
      description:
        'Educational institution staffing and academic leadership recruitment, supporting schools, universities, and training organizations.',
      category: 'Education',
      tags: ['Academic Leadership', 'Educational Excellence', 'Training Specialists'],
      services: ['Academic Recruitment', 'Administrative Staff', 'Educational Leadership'],
      keyRoles: [
        'Teachers & Professors',
        'Academic Directors',
        'Training Managers',
        'Student Affairs',
      ],
    },
    {
      name: 'Legal & Professional Services',
      slug: 'legal-professional-services',
      link: '/industries/legal-professional-services',
      description:
        'Legal talent acquisition and professional services recruitment, including law firms, consulting firms, and corporate legal departments.',
      category: 'Professional Services',
      tags: ['Legal Expertise', 'Corporate Counsel', 'Advisory Services'],
      services: ['Legal Recruitment', 'Corporate Legal Teams', 'Compliance Specialists'],
      keyRoles: ['Lawyers & Advocates', 'Legal Advisors', 'Compliance Officers', 'Paralegals'],
    },
    {
      name: 'Insurance & Risk Management',
      slug: 'insurance-risk-management',
      link: '/industries/insurance-risk-management',
      description:
        'Insurance industry recruitment and risk management talent solutions, covering underwriting, claims, actuarial, and sales roles.',
      category: 'Financial Services',
      tags: ['Underwriting', 'Claims Management', 'Risk Assessment'],
      services: ['Insurance Sales Teams', 'Underwriting Specialists', 'Claims Professionals'],
      keyRoles: ['Underwriters', 'Claims Adjusters', 'Insurance Agents', 'Risk Managers'],
    },
    {
      name: 'Shipping & Logistics',
      slug: 'shipping-logistics',
      link: '/industries/shipping-logistics',
      description:
        'Supply chain and logistics talent solutions for ports, shipping companies, freight forwarders, and logistics service providers in the GCC.',
      category: 'Logistics',
      tags: ['Supply Chain', 'Maritime Operations', 'Freight Management'],
      services: ['Maritime Professionals', 'Logistics Coordinators', 'Supply Chain Management'],
      keyRoles: ['Ship Captains', 'Logistics Managers', 'Port Operations', 'Freight Coordinators'],
    },
  ]

  // Generate industry icons
  const getIndustryIcon = (name) => {
    const iconMap = {
      'Oil & Gas': '🛢️',
      'Banking & Finance': '🏦',
      'Healthcare & Life Sciences': '🏥',
      'Technology & Innovation': '💻',
      'Real Estate & Construction': '🏗️',
      'Aviation & Logistics': '✈️',
      'Hospitality & Tourism': '🏨',
      'Government & Public Sector': '🏛️',
      'Manufacturing & Industrial': '🏭',
      'Education & Training': '🎓',
      'Retail & Consumer Goods': '🛍️',
      'Media & Telecommunications': '📱',
    }
    return iconMap[name] || '🏢'
  }

  // SEO settings
  useHead({
    title: 'Industries - Expert Consulting & Talent Solutions | VMMC',
    meta: [
      {
        name: 'description',
        content:
          "Explore VMMC's industry expertise across 12 key GCC sectors including oil & gas, banking, healthcare, technology, and more. Tailored consulting and talent solutions for your industry.",
      },
      {
        name: 'keywords',
        content:
          'GCC industry consulting, sector expertise, business transformation, oil gas consulting, banking consulting, healthcare consulting, technology consulting, emiratisation, talent acquisition',
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

  /* Line clamp utilities */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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

  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-primary);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2.5rem;
    }
  }
</style>
