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
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">12+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Core Industries</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">500+</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-semibold text-blue-400 drop-shadow-lg">98%</div>
            <div class="text-sm uppercase tracking-wider text-white/80">Client Satisfaction</div>
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
                  <path d="M9 11H3v10h6V11zM21 11h-6v10h6V11zM15 3H9v6h6V3z" />
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Deep Industry Knowledge
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Our consultants combine 15+ years of global experience with specialized knowledge in
              each GCC industry sector.
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
                  />
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2 2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                  />
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Tailored Solutions
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              We customize our consulting and talent approaches based on your industry's specific
              challenges, regulations, and opportunities.
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
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Proven Results
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              Track record of successful digital transformations, talent placements, and measurable
              improvements across all sectors.
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
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  />
                </svg>
              </div>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-[var(--tm-txt-primary)]">
              Digital Innovation
            </h3>
            <p class="leading-relaxed text-gray-600 dark:text-[var(--tm-txt-secondary)]">
              We stay ahead of industry trends and emerging technologies, helping you lead digital
              transformation in your sector.
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
          Connect with our industry experts to discuss your specific challenges and discover
          tailored solutions for sustainable growth.
        </p>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[var(--tm-accent-primary)] shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--tm-bg-hover)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]"
          >
            Schedule Consultation
          </NuxtLink>
          <a
            href="mailto:contact@vmmc.com"
            class="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-transparent px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            Email Our Experts
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

  // Industry data based on new menu structure
  const industries = [
    {
      name: 'Oil & Gas',
      slug: 'oil-gas',
      link: '/industries/oil-gas',
      description:
        'Digital transformation and talent solutions for energy sector operations, from upstream exploration to downstream refining.',
      category: 'Energy',
      tags: ['Digital Transformation', 'Energy Transition', 'Executive Search'],
    },
    {
      name: 'Banking & Finance',
      slug: 'banking-finance',
      link: '/industries/banking-finance',
      description:
        'Fintech innovation, digital banking solutions, and executive talent acquisition for financial institutions.',
      category: 'Financial Services',
      tags: ['Digital Banking', 'Fintech', 'Regulatory Compliance'],
    },
    {
      name: 'Healthcare & Life Sciences',
      slug: 'healthcare-life-sciences',
      link: '/industries/healthcare-life-sciences',
      description:
        'Healthcare digital transformation, clinical excellence, and specialized talent recruitment for medical organizations.',
      category: 'Healthcare',
      tags: ['Digital Health', 'Clinical Excellence', 'Medical Talent'],
    },
    {
      name: 'Technology & Innovation',
      slug: 'technology-innovation',
      link: '/industries/technology-innovation',
      description:
        'Strategic consulting and technical talent solutions for technology companies and digital transformation initiatives.',
      category: 'Technology',
      tags: ['AI Strategy', 'Tech Leadership', 'Innovation'],
    },
    {
      name: 'Real Estate & Construction',
      slug: 'real-estate-construction',
      link: '/industries/real-estate-construction',
      description:
        'PropTech solutions, sustainable development strategies, and construction project management excellence.',
      category: 'Real Estate',
      tags: ['PropTech', 'Sustainability', 'Project Management'],
    },
    {
      name: 'Aviation & Logistics',
      slug: 'aviation-logistics',
      link: '/industries/aviation-logistics',
      description:
        'Supply chain optimization, aviation operations excellence, and specialized logistics talent acquisition.',
      category: 'Transportation',
      tags: ['Supply Chain', 'Operations', 'Logistics Tech'],
    },
    {
      name: 'Hospitality & Tourism',
      slug: 'hospitality-tourism',
      link: '/industries/hospitality-tourism',
      description:
        'Guest experience innovation, tourism technology, and hospitality leadership development for the service industry.',
      category: 'Services',
      tags: ['Guest Experience', 'Tourism Tech', 'Service Excellence'],
    },
    {
      name: 'Government & Public Sector',
      slug: 'government-public-sector',
      link: '/industries/government-public-sector',
      description:
        'Public sector transformation, smart government initiatives, and specialized talent for government agencies.',
      category: 'Government',
      tags: ['Smart Government', 'Public Service', 'Digital Gov'],
    },
    {
      name: 'Manufacturing & Industrial',
      slug: 'manufacturing-industrial',
      link: '/industries/manufacturing-industrial',
      description:
        'Industry 4.0 transformation, lean manufacturing, and technical talent solutions for industrial operations.',
      category: 'Manufacturing',
      tags: ['Industry 4.0', 'Lean Manufacturing', 'Automation'],
    },
    {
      name: 'Education & Training',
      slug: 'education-training',
      link: '/industries/education-training',
      description:
        'Educational technology, institutional transformation, and academic leadership development solutions.',
      category: 'Education',
      tags: ['EdTech', 'Digital Learning', 'Academic Leadership'],
    },
    {
      name: 'Retail & Consumer Goods',
      slug: 'retail-consumer-goods',
      link: '/industries/retail-consumer-goods',
      description:
        'Omnichannel retail strategies, consumer experience optimization, and retail technology implementation.',
      category: 'Consumer',
      tags: ['Omnichannel', 'Consumer Experience', 'Retail Tech'],
    },
    {
      name: 'Media & Telecommunications',
      slug: 'media-telecommunications',
      link: '/industries/media-telecommunications',
      description:
        '5G strategy implementation, media technology innovation, and telecommunications infrastructure optimization.',
      category: 'Technology',
      tags: ['5G Strategy', 'Media Tech', 'Telecom Innovation'],
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
