<template>
  <section class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div
      class="absolute top--50 right--50 w-100 h-100 rounded-full opacity-20 pointer-events-none bg-gradient-radial from-[var(--tm-bg-heroGradient-from)] to-transparent"
    ></div>
    <div
      class="absolute bottom--30 left--30 w-80 h-80 rounded-full opacity-15 pointer-events-none bg-gradient-radial from-[var(--tm-accent-secondary)] to-transparent"
    ></div>

    <div class="max-w-320 mx-auto px-5 relative z-1">
      <!-- 标题区域 -->
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-[var(--tm-bg-badge)] border border-[var(--tm-bd-feature)]"
        >
          <div
            class="w-8 h-8 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center text-white"
          >
            <div class="i-carbon-star w-4 h-4"></div>
          </div>
          <span class="text-3.5 font-medium text-[var(--tm-txt-primary)]">
            15+ Years of Excellence
          </span>
        </div>

        <h2 class="text-10 lg:text-14 font-light text-[var(--tm-txt-primary)] mb-6">
          Why Choose
          <span
            class="block lg:inline text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent"
          >
            VMMC
          </span>
        </h2>

        <p class="text-5 text-[var(--tm-txt-secondary)] leading-relaxed max-w-200 mx-auto">
          Join a company where your expertise drives global impact and transforms the future of
          talent solutions
        </p>
      </div>

      <!-- 主要内容区域 - 卡片式布局 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- 左侧 - 核心优势 -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Global Impact Card -->
          <div
            class="advantage-card group bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
          >
            <div class="flex items-start gap-5">
              <div
                class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-4 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform"
              >
                <div class="i-carbon-earth-filled w-8 h-8"></div>
              </div>
              <div class="flex-1">
                <h3 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Global Impact & Reach
                </h3>
                <p class="text-4 text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                  Work across 7+ offices spanning Singapore, Dubai, Malaysia, and China. Make a real
                  difference in talent solutions across diverse markets.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                  >
                    Singapore HQ
                  </span>
                  <span
                    class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                  >
                    Dubai Office
                  </span>
                  <span
                    class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                  >
                    China Presence
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Industry Leadership Card -->
          <div
            class="advantage-card group bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
          >
            <div class="flex items-start gap-5">
              <div
                class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-4 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform"
              >
                <div class="i-carbon-trophy w-8 h-8"></div>
              </div>
              <div class="flex-1">
                <h3 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Market Leadership
                </h3>
                <p class="text-4 text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                  Be part of a leading consultancy with proven track record in the HR industry
                  across Asia-Pacific and Middle East.
                </p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-3 bg-[var(--tm-bg-secondary)] rounded-3">
                    <div class="text-6 font-bold text-[var(--tm-accent-primary)]">170K+</div>
                    <div class="text-3 text-[var(--tm-txt-secondary)]">Jobs Placed</div>
                  </div>
                  <div class="text-center p-3 bg-[var(--tm-bg-secondary)] rounded-3">
                    <div class="text-6 font-bold text-[var(--tm-accent-primary)]">20K+</div>
                    <div class="text-3 text-[var(--tm-txt-secondary)]">Clients Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Learning & Innovation Card -->
          <div
            class="advantage-card group bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
          >
            <div class="flex items-start gap-5">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-4 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform"
              >
                <div class="i-carbon-innovation w-8 h-8"></div>
              </div>
              <div class="flex-1">
                <h3 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-2">
                  Innovation & Growth
                </h3>
                <p class="text-4 text-[var(--tm-txt-secondary)] leading-relaxed">
                  Access cutting-edge HR technologies, 50K+ training programs, and mentorship from
                  industry veterans with 8+ years average tenure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧 - 亮点展示 -->
        <div class="space-y-6">
          <!-- Team Photo -->
          <div class="relative rounded-6 overflow-hidden">
            <OptImage
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
              alt="VMMC团队合作"
              class="w-full h-60 object-cover"
              :auto-dark-mode="true"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <h4 class="text-4 font-semibold">Global Team</h4>
              <p class="text-3 opacity-90">200+ Professionals Worldwide</p>
            </div>
          </div>

          <!-- Values Card -->
          <div
            class="bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-6 p-6 text-white"
          >
            <h4 class="text-5 font-semibold mb-4 flex items-center gap-2">
              <div class="i-carbon-lightbulb w-5 h-5"></div>
              Our Core Values
            </h4>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-white rounded-full"></div>
                <span class="text-3.5">Excellence in Everything</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-white rounded-full"></div>
                <span class="text-3.5">Innovation & Creativity</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-white rounded-full"></div>
                <span class="text-3.5">Integrity & Trust</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-white rounded-full"></div>
                <span class="text-3.5">Diversity & Inclusion</span>
              </div>
            </div>
          </div>

          <!-- Recognition Badge -->
          <div
            class="bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white"
            >
              <div class="i-carbon-award w-8 h-8"></div>
            </div>
            <h4 class="text-4 font-semibold text-[var(--tm-txt-primary)] mb-1">
              Top Employer 2024
            </h4>
            <p class="text-3 text-[var(--tm-txt-secondary)]">GCC Region Recognition</p>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div class="text-center">
        <div class="inline-flex gap-4 flex-wrap justify-center">
          <NuxtLink
            to="/careers#open-positions"
            class="px-8 py-3 bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] text-white rounded-full font-medium transition-all duration-300 hover:shadow-[var(--tm-shadow-accent)] hover:scale-105 no-underline flex items-center gap-2"
          >
            <span>Explore Opportunities</span>
            <div class="i-carbon-arrow-right w-4 h-4"></div>
          </NuxtLink>
          <NuxtLink
            to="/careers#application-process"
            class="px-8 py-3 bg-[var(--tm-bg-primary)] text-[var(--tm-txt-primary)] rounded-full font-medium border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:bg-[var(--tm-bg-badge)] no-underline"
          >
            Learn How to Apply
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style>
  /* 渐变径向背景 */
  .bg-gradient-radial {
    background: radial-gradient(
      circle,
      var(--first-color, transparent) 0%,
      var(--second-color, transparent) 50%
    );
  }

  /* 深色模式适配 */
  .dark section {
    background: var(--tm-bg-primary);
  }

  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .bg-\[var\(--tm-bg-badge\)\] {
    background: var(--tm-bg-whiteAlpha10);
    border-color: var(--tm-bd-transparent);
  }

  /* 卡片入场动画 */
  .advantage-card {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .advantage-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .advantage-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .advantage-card:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 移动端适配 */
  @media (max-width: 1024px) {
    .lg\:col-span-2 {
      grid-column: span 1;
    }
  }
</style>
