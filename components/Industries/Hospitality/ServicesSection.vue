<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute bottom-0 right-0 w-120 h-120 bg-gradient-to-tl from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          OUR SERVICES
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Talent Solutions for
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Hospitality Excellence
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          VMMC connects you with exceptional hospitality professionals who drive guest satisfaction,
          operational excellence, and business growth
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
        <!-- Service 1: Executive Search -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Executive Leadership
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            C-suite and senior management talent for luxury hotels, resort chains, and global
            hospitality brands.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>General Managers & Regional Directors</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>VP of Operations & Asset Management</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Chief Experience Officers</span>
            </li>
          </ul>
          <button
            class="text-sm font-semibold text-[var(--tm-accent-primary)] hover:underline flex items-center gap-2"
            @click="openExpertModal"
          >
            <span>Explore Roles</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>

        <!-- Service 2: Guest Experience -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Guest Experience Specialists
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Professionals who create memorable moments and deliver personalized service excellence.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Experience Designers & Curators</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Guest Relations & Concierge Leads</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Customer Success Managers</span>
            </li>
          </ul>
          <button
            class="text-sm font-semibold text-[var(--tm-accent-primary)] hover:underline flex items-center gap-2"
            @click="openExpertModal"
          >
            <span>Explore Roles</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>

        <!-- Service 3: Digital & Technology -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
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
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Digital Innovation Leaders
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Tech-savvy professionals driving smart tourism and digital transformation initiatives.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Digital Transformation Officers</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Revenue Management Analysts</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Smart Hotel Systems Engineers</span>
            </li>
          </ul>
          <button
            class="text-sm font-semibold text-[var(--tm-accent-primary)] hover:underline flex items-center gap-2"
            @click="openExpertModal"
          >
            <span>Explore Roles</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>

        <!-- Service 4: F&B Excellence -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">F&B Leadership</h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Culinary experts and beverage professionals who elevate dining experiences.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Executive Chefs & Culinary Directors</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>F&B Managers & Sommeliers</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Restaurant Concept Developers</span>
            </li>
          </ul>
          <button
            class="text-sm font-semibold text-[var(--tm-accent-primary)] hover:underline flex items-center gap-2"
            @click="openExpertModal"
          >
            <span>Explore Roles</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>

        <!-- Service 5: Sales & Marketing -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
              <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Sales & Marketing Experts
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Growth-focused professionals who drive bookings and brand visibility.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Director of Sales & Marketing</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Digital Marketing Specialists</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Brand & Communications Managers</span>
            </li>
          </ul>
          <button
            class="text-sm font-semibold text-[var(--tm-accent-primary)] hover:underline flex items-center gap-2"
            @click="openExpertModal"
          >
            <span>Explore Roles</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>

        <!-- Service 6: Operations & Finance -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-8 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Operations & Finance
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Strategic leaders ensuring operational efficiency and financial performance.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Director of Operations & Housekeeping</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Financial Controllers & Analysts</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-[var(--tm-txt-secondary)]">
              <svg
                class="w-5 h-5 text-[var(--tm-accent-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Procurement & Supply Chain Managers</span>
            </li>
          </ul>
          <button
            class="text-sm font-semibold text-[var(--tm-accent-primary)] hover:underline flex items-center gap-2"
            @click="openExpertModal"
          >
            <span>Explore Roles</span>
            <svg
              class="w-4 h-4"
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

      <!-- Why Choose VMMC -->
      <div
        class="bg-[var(--tm-bg-card)] rounded-8 p-10 md:p-12 border border-[var(--tm-bd-light)] mb-15"
      >
        <div class="text-center mb-10">
          <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Why Leading Hospitality Brands Trust VMMC
          </h3>
          <p class="text-lg text-[var(--tm-txt-secondary)] max-w-180 mx-auto">
            Deep industry expertise combined with proven talent acquisition excellence
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Industry Specialists
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Dedicated consultants with hospitality domain expertise
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-full flex items-center justify-center mx-auto mb-4"
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
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Global Network</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Access to top hospitality talent across key markets
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Rapid Placement</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Average time-to-hire 35% faster than industry standard
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-bg-accentLight)] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-[var(--tm-accent-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Quality Guarantee
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              95% candidate retention rate after 12 months
            </p>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 md:p-12 text-white text-center"
      >
        <h3 class="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Build Your Dream Hospitality Team?
        </h3>
        <p class="text-lg text-white/90 mb-8 max-w-150 mx-auto">
          Let's discuss your talent needs and create a customized recruitment strategy
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <button
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--tm-accent-primary)] rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
            @click="openConsultationModal"
          >
            <svg
              class="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            Schedule Consultation
          </button>
          <button
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/15 transition-all duration-300"
            @click="openExpertModal"
          >
            <svg
              class="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            Talk to Expert
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Inject modal controls from parent
  const openExpertModal = inject('openExpertModal') as (() => void) | undefined
  const openConsultationModal = inject('openConsultationModal') as (() => void) | undefined
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
