<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-1/4 left-0 w-100 h-100 bg-gradient-to-r from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
    ></div>

    <div class="max-w-350 mx-auto px-6 relative z-1">
      <!-- Section Header -->
      <div class="text-center mb-15">
        <div
          class="inline-flex items-center gap-2 bg-[var(--tm-bg-accentLight)] text-[var(--tm-accent-primary)] px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          INTELLIGENCE REPORTS
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Deep Dive into
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Retail Trends
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Comprehensive analysis of key transformations shaping the future of retail and e-commerce
        </p>
      </div>

      <!-- Reports Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Report 1: E-commerce Evolution -->
        <NuxtLink
          to="/industries/retail-ecommerce/ecommerce-evolution-consumer-behavior"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="E-commerce Evolution"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-[var(--tm-accent-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              TRENDING
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>15 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                E-COMMERCE
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              E-commerce Evolution and Consumer Behavior
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Analyzing key e-commerce developments, omnichannel integration, mobile-first shopping,
              and personalized consumption trends.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Omnichannel Integration</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Mobile-first Shopping</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Sustainable Consumption</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 2: Social Commerce -->
        <NuxtLink
          to="/industries/retail-ecommerce/social-commerce-emerging-channels"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
              alt="Social Commerce"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-[var(--tm-accent-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              FEATURED
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>18 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                SOCIAL COMMERCE
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              The Rise of Social Commerce and Emerging Channels
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Explore content-driven shopping, KOL influence, cross-border expansion, and
              community-based commerce models.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Content-driven Shopping</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>KOL & UGC Influence</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Community Commerce</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 3: Consumer Behavior & Personalization -->
        <NuxtLink
          to="/industries/retail-ecommerce/consumer-behavior-personalized-shopping"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
              alt="Consumer Behavior"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              INSIGHTS
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>20 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                CONSUMER INSIGHTS
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Shifting Consumer Behavior and Personalized Shopping
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Discover value-driven consumption, personalized journeys, instant gratification
              demands, and experience-first mindsets.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Value-driven Consumption</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Personalized Journeys</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Experience-first Mindset</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 4: Cross-border E-commerce -->
        <NuxtLink
          to="/industries/retail-ecommerce/cross-border-ecommerce-global-expansion"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488229297570-58520851e868?w=800&q=80"
              alt="Cross-border E-commerce"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              GLOBAL
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>17 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                GLOBAL EXPANSION
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Cross-border E-commerce and Global Retail Expansion
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Analyze platform globalization, emerging markets, payment innovation, and localization
              strategies for international growth.
            </p>

            <!-- Key Topics -->
            <div class="space-y-2 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Platform Globalization</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Emerging Market Growth</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Localization Strategies</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Report 5: Sustainability -->
        <NuxtLink
          to="/industries/retail-ecommerce/sustainability-green-consumerism"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 lg:col-span-2"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
              alt="Sustainability"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              SUSTAINABILITY
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>16 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                GREEN RETAIL
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Sustainability and Green Consumerism
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Understand eco-friendly product demand, green supply chains, transparency, and the
              shift toward value-driven consumption in retail.
            </p>

            <!-- Key Topics -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Eco-friendly Products</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Green Supply Chain</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-[var(--tm-txt-secondary)]">
                <svg
                  class="w-5 h-5 text-[var(--tm-accent-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>ESG Compliance</span>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="flex items-center justify-between pt-4 border-t border-[var(--tm-bd-light)]"
            >
              <span
                class="text-sm font-semibold text-[var(--tm-accent-primary)] group-hover:underline"
              >
                Read Full Report
              </span>
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-15 text-center">
        <p class="text-[var(--tm-txt-secondary)] mb-6">
          Need customized insights for your retail business?
        </p>
        <button
          class="inline-flex items-center justify-center px-8 py-3 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--tm-accent-secondary)] transition-all duration-300"
          @click="openConsultationModal"
        >
          Request Custom Research
          <svg
            class="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Inject modal controls from parent
  const openConsultationModal = inject('openConsultationModal') as (() => void) | undefined
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
