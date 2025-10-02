<!-- components/Industries/Education/ReportsSection.vue -->
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
            Education Trends
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Comprehensive analysis of key transformations shaping the future of learning and education
        </p>
      </div>

      <!-- Reports Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Report 1: Online Learning -->
        <NuxtLink
          to="/industries/education-edtech/online-learning-industry-transformation"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80"
              alt="Online Learning"
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
                <span>12 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                ONLINE LEARNING
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              The Rise of Online Learning and Industry Transformation
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Digital transformation reshaping education through video courses, MOOCs, blended
              learning, and AI-powered personalization.
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
                <span>Mainstream Adoption of MOOCs</span>
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
                <span>Blended Learning Models</span>
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
                <span>AI-powered Personalization</span>
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

        <!-- Report 2: Vocational Training -->
        <NuxtLink
          to="/industries/education-edtech/vocational-training-digital-transformation"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Vocational Training"
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
                <span>14 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                VOCATIONAL
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Digital Transformation of Skills Training and Vocational Education
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Skills-focused learning, microlearning, enterprise-led training, and AR/VR practical
              training transforming vocational education.
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
                <span>Skills-focused Learning</span>
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
                <span>Modular Micro-credentials</span>
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
                <span>AR/VR Immersive Training</span>
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

        <!-- Report 3: Lifelong Learning -->
        <NuxtLink
          to="/industries/education-edtech/lifelong-learning-corporate-ecosystems"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
              alt="Lifelong Learning"
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
                CORPORATE LEARNING
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Lifelong Learning and Corporate Learning Ecosystems
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              Corporate LMS/LXP platforms, personalized learning pathways, and continuous upskilling
              becoming core to organizational culture.
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
                <span>Corporate Learning Platforms</span>
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
                <span>AI-driven Recommendations</span>
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
                <span>Cross-domain Skills</span>
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

        <!-- Report 4: Cross-border Education -->
        <NuxtLink
          to="/industries/education-edtech/cross-border-education-global-collaboration"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
              alt="Cross-border Education"
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
                <span>13 min read</span>
              </div>
            </div>
          </div>

          <!-- Report Content -->
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="text-xs font-semibold text-[var(--tm-accent-primary)] bg-[var(--tm-bg-accentLight)] px-3 py-1 rounded-full"
              >
                GLOBAL EDUCATION
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              Cross-border Education and Global Digital Learning Collaboration
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              International online programs, institutional networks, virtual exchange, and open
              educational resources driving global education.
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
                <span>Cross-border Programs</span>
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
                <span>Virtual Exchange</span>
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
                <span>Open Educational Resources</span>
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

        <!-- Report 5: EdTech Innovation -->
        <NuxtLink
          to="/industries/education-edtech/edtech-innovation-future-ecosystem"
          class="group bg-[var(--tm-bg-card)] rounded-8 overflow-hidden border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 lg:col-span-2"
        >
          <!-- Report Image -->
          <div class="relative h-60 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
              alt="EdTech Innovation"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              INNOVATION
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
                EDTECH FUTURE
              </span>
              <span class="text-xs text-[var(--tm-txt-secondary)]">Q4 2024</span>
            </div>

            <h3
              class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4 group-hover:text-[var(--tm-accent-primary)] transition-colors duration-300"
            >
              EdTech Innovation and the Future Learning Ecosystem
            </h3>

            <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
              AI-powered personalization, learning analytics, immersive VR/AR experiences, and
              cross-platform ecosystems shaping the future of education.
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
                <span>AI Personalization</span>
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
                <span>Learning Analytics</span>
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
                <span>Metaverse Learning</span>
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
          Need customized insights for your education business?
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
  import { inject } from 'vue'

  // Inject modal controls from parent
  const openConsultationModal = inject<(() => void) | undefined>('openConsultationModal')
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
