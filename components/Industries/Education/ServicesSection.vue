<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-1/3 right-0 w-100 h-100 bg-gradient-to-l from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
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
          Education & EdTech
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Talent Solutions
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Comprehensive recruitment services for digital learning transformation and educational
          innovation
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
        <!-- Service 1: Online Learning Specialists -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Online Learning Specialists
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Recruit experts in MOOC platforms, video course development, live-stream teaching, and
            blended learning models.
          </p>
          <ul class="space-y-2 mb-6">
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
              <span>MOOC Platform Directors</span>
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
              <span>Instructional Designers</span>
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
              <span>E-Learning Content Creators</span>
            </li>
          </ul>
        </div>

        <!-- Service 2: EdTech Product Leaders -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            EdTech Product Leaders
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Place product managers, UX designers, and developers specializing in educational
            technology solutions.
          </p>
          <ul class="space-y-2 mb-6">
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
              <span>EdTech Product Managers</span>
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
              <span>Learning Experience Designers</span>
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
              <span>Platform Development Leads</span>
            </li>
          </ul>
        </div>

        <!-- Service 3: AI & Learning Analytics -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            AI & Learning Analytics
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Source data scientists and AI specialists for personalized learning, adaptive content,
            and learning analytics.
          </p>
          <ul class="space-y-2 mb-6">
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
              <span>AI Education Specialists</span>
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
              <span>Learning Analytics Experts</span>
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
              <span>Data Science Leaders</span>
            </li>
          </ul>
        </div>

        <!-- Service 4: Corporate Learning Leaders -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Corporate Learning Leaders
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Recruit talent for LMS/LXP platforms, corporate training programs, and learning
            ecosystem development.
          </p>
          <ul class="space-y-2 mb-6">
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
              <span>Chief Learning Officers</span>
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
              <span>L&D Program Managers</span>
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
              <span>LMS/LXP Administrators</span>
            </li>
          </ul>
        </div>

        <!-- Service 5: Vocational Training Experts -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Vocational Training Experts
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Place specialists in skills-based training, micro-credentials, and AR/VR immersive
            learning experiences.
          </p>
          <ul class="space-y-2 mb-6">
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
              <span>Skills Training Directors</span>
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
              <span>VR/AR Learning Specialists</span>
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
              <span>Micro-credential Designers</span>
            </li>
          </ul>
        </div>

        <!-- Service 6: Academic Leadership -->
        <div
          class="bg-[var(--tm-bg-card)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Academic Leadership
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-6">
            Source senior academic leaders, curriculum designers, and educational administrators for
            institutions.
          </p>
          <ul class="space-y-2 mb-6">
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
              <span>Deans and Academic Directors</span>
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
              <span>Curriculum Development Leads</span>
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
              <span>Education Program Managers</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Process Section -->
      <div class="bg-[var(--tm-bg-secondary)] rounded-8 p-10 md:p-12 mb-15">
        <div class="text-center mb-10">
          <h3 class="text-3xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Our Recruitment Process
          </h3>
          <p class="text-[var(--tm-txt-secondary)] max-w-180 mx-auto">
            Streamlined approach to finding the best education and EdTech talent
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-accent-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              1
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Needs Analysis</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Understand your education goals and talent requirements
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-accent-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              2
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">Talent Sourcing</h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Access our network of EdTech and education professionals
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-accent-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              3
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Candidate Vetting
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Rigorous assessment of skills and cultural fit
            </p>
          </div>

          <!-- Step 4 -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[var(--tm-accent-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              4
            </div>
            <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-2">
              Integration Support
            </h4>
            <p class="text-sm text-[var(--tm-txt-secondary)]">
              Onboarding and ongoing placement success
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)] mb-4">
          Ready to Build Your Education Team?
        </h3>
        <p class="text-[var(--tm-txt-secondary)] mb-8 max-w-180 mx-auto">
          Connect with our education recruitment specialists to discuss your talent needs
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <button
            class="inline-flex items-center justify-center px-8 py-4 bg-[var(--tm-accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--tm-accent-secondary)] transition-all duration-300"
            @click="openConsultationModal"
          >
            Schedule Consultation
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
          <button
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--tm-accent-primary)] text-[var(--tm-accent-primary)] rounded-full font-semibold hover:bg-[var(--tm-bg-accentLight)] transition-all duration-300"
            @click="openExpertModal"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            Talk to Experts
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { inject } from 'vue'

  // Inject modal controls from parent
  const openExpertModal = inject<(() => void) | undefined>('openExpertModal')
  const openConsultationModal = inject<(() => void) | undefined>('openConsultationModal')
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
