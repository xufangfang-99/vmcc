<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 right-0 w-100 h-100 bg-gradient-to-bl from-[var(--tm-accent-primary)]/5 to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[var(--tm-accent-secondary)]/5 to-transparent rounded-full blur-3xl"
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
            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          INDUSTRY OVERVIEW
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-[var(--tm-txt-primary)] mb-6">
          Education & EdTech
          <span class="block text-[var(--tm-accent-primary)] font-semibold mt-2">
            Market Landscape
          </span>
        </h2>
        <p class="text-xl text-[var(--tm-txt-secondary)] max-w-200 mx-auto leading-relaxed">
          Digital transformation is reshaping education across K-12, higher education, vocational
          training, and corporate learning ecosystems.
        </p>
      </div>

      <!-- Key Insights Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
        <!-- Insight 1: Online Learning Mainstream -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
            Online Learning Mainstream
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Video courses, live-stream teaching, and MOOCs are widely adopted across all education
            levels.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>220M+ learners</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 2: Blended Learning -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-7 h-7 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Blended Learning Models
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Combining online and offline approaches enhances flexibility and learner engagement.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Hybrid approach</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 3: Skills-oriented Education -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
            Skills-oriented Education
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Curriculum shifting beyond academics to vocational and soft skills development.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Applied learning</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 4: AI Personalization -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-7 h-7 text-[var(--tm-accent-primary)]"
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
            AI-powered Personalization
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Artificial intelligence enables personalized recommendations and customized learning
            paths.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Adaptive learning</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 5: Lifelong Learning -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-7 h-7 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">Lifelong Learning</h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            Continuous upskilling and reskilling becoming essential for career competitiveness.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>Continuous growth</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>

        <!-- Insight 6: Immersive Technologies -->
        <div
          class="bg-[var(--tm-bg-primary)] rounded-6 p-8 border border-[var(--tm-bd-light)] hover:shadow-[var(--tm-shadow-hover)] hover:border-[var(--tm-accent-primary)] transition-all duration-300 group"
        >
          <div
            class="w-14 h-14 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-7 h-7 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-4">
            Immersive Technologies
          </h3>
          <p class="text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
            VR/AR and metaverse concepts enhance interactivity and contextual learning experiences.
          </p>
          <div
            class="flex items-center gap-2 text-[var(--tm-accent-primary)] font-semibold text-sm"
          >
            <span>VR/AR training</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Key Statistics Banner -->
      <div
        class="bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-8 p-10 md:p-12 text-white relative overflow-hidden"
      >
        <div
          class="absolute -right-1/4 -top-1/4 w-100 h-100 bg-white/10 rounded-full blur-3xl"
        ></div>

        <div class="relative z-1">
          <h3 class="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Education Market by the Numbers
          </h3>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">$325B</div>
              <div class="text-sm text-white/80">Global EdTech Market</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">220M+</div>
              <div class="text-sm text-white/80">MOOC Learners Worldwide</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">16%</div>
              <div class="text-sm text-white/80">Annual Market Growth</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">89%</div>
              <div class="text-sm text-white/80">Organizations Use LMS</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Industry Challenges -->
      <div
        class="mt-15 bg-[var(--tm-bg-primary)] rounded-8 p-10 border border-[var(--tm-bd-light)]"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-12 h-12 bg-[var(--tm-bg-accentLight)] rounded-4 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-[var(--tm-accent-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-[var(--tm-txt-primary)]">
              Key Industry Challenges
            </h3>
            <p class="text-[var(--tm-txt-secondary)]">Critical areas requiring strategic focus</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex items-start gap-4">
            <div
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            >
              <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Digital Divide</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Unequal access to educational resources across regions and populations
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            >
              <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Quality Standards</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Inconsistent quality and lack of unified certification standards
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            >
              <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Learner Engagement</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Self-discipline and effective study methods remain key concerns
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            >
              <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Technology Adoption</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">
                Resistance in aligning innovations with traditional systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // No props needed for this component
</script>

<style scoped>
  /* Component-specific styles if needed */
</style>
