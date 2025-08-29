<template>
  <section class="relative py-20 bg-tm-bg-secondary overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0">
      <div
        class="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-tm-accent-primary/5 to-transparent rounded-full"
      ></div>
      <div
        class="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-tm-accent-secondary/4 to-transparent rounded-full"
      ></div>
      <!-- 几何装饰 -->
      <div
        class="absolute top-1/3 left-1/3 w-2 h-2 bg-tm-accent-primary/30 rounded-full animate-pulse"
      ></div>
      <div
        class="absolute top-2/3 right-1/4 w-3 h-3 bg-tm-accent-secondary/20 transform rotate-45"
      ></div>
    </div>

    <div class="relative z-10 max-w-300 mx-auto px-5">
      <!-- 标题区域 -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center px-4 py-2 bg-tm-bg-primary/80 backdrop-blur-sm border border-tm-bd-light rounded-full mb-6"
        >
          <div class="w-2 h-2 bg-tm-accent-primary rounded-full mr-3 animate-pulse"></div>
          <span class="text-sm font-medium text-tm-accent-primary">
            COMPREHENSIVE INDUSTRY INTELLIGENCE
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl font-light text-tm-txt-primary mb-6 leading-tight">
          12 Industries,
          <span
            class="bg-gradient-to-r from-tm-accent-primary to-tm-accent-secondary bg-clip-text text-transparent font-medium"
          >
            Global Insights
          </span>
        </h2>

        <p class="text-lg text-tm-txt-secondary max-w-160 mx-auto mb-8">
          Deep-dive analysis across key sectors driving the global economy. From emerging markets in
          Asia-Pacific to established industries in the Middle East.
        </p>

        <!-- 核心统计 -->
        <div class="grid grid-cols-4 gap-8 max-w-120 mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-tm-accent-primary mb-1">150+</div>
            <div class="text-xs text-tm-txt-secondary uppercase tracking-wide">Reports</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-tm-accent-primary mb-1">8+</div>
            <div class="text-xs text-tm-txt-secondary uppercase tracking-wide">Markets</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-tm-accent-primary mb-1">99%</div>
            <div class="text-xs text-tm-txt-secondary uppercase tracking-wide">Accuracy</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-tm-accent-primary mb-1">Q4</div>
            <div class="text-xs text-tm-txt-secondary uppercase tracking-wide">Updates</div>
          </div>
        </div>
      </div>

      <!-- 行业网格 - 2行6列布局 -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        <!-- 第一行 -->
        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-amber-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-amber-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors"
          >
            <div class="w-6 h-6 bg-amber-600 rounded-full"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Oil & Gas</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Energy transition & workforce evolution
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-amber-100 text-amber-800 px-2 py-1 rounded-full">25+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-blue-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors"
          >
            <div class="w-6 h-6 bg-blue-600 rounded-1 transform rotate-45"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Banking & Finance</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Digital transformation & fintech integration
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">30+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-emerald-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors"
          >
            <div class="w-4 h-4 bg-emerald-600 transform rotate-45"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Healthcare</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Medical tech & pharmaceutical growth
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">18+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-tm-accent-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-tm-accent-primary/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-tm-accent-primary/20 transition-colors"
          >
            <div class="w-6 h-6 bg-tm-accent-primary rounded-1"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Technology</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            AI/ML & cloud infrastructure expansion
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">35+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-slate-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-500/20 transition-colors"
          >
            <div class="w-5 h-3 bg-slate-600 clip-path-triangle"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Construction</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Infrastructure & sustainable building
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-slate-100 text-slate-800 px-2 py-1 rounded-full">22+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-red-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-red-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/20 transition-colors"
          >
            <div class="w-6 h-6 bg-red-600 rounded-full border-2 border-red-400"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Manufacturing</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Industry 4.0 & automation integration
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full">20+ Reports</span>
          </div>
        </div>

        <!-- 第二行 -->
        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-pink-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-pink-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500/20 transition-colors"
          >
            <div class="w-4 h-4 bg-pink-600 rounded-full"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Hospitality</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Tourism recovery & experience economy
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-pink-100 text-pink-800 px-2 py-1 rounded-full">12+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-green-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors"
          >
            <div class="w-4 h-4 bg-green-600 rounded-1"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Retail</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            E-commerce evolution & consumer behavior
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full">16+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-indigo-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500/20 transition-colors"
          >
            <div class="w-4 h-4 bg-indigo-600 transform rotate-45"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Education</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Digital learning & skills development
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">14+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-cyan-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors"
          >
            <div class="w-5 h-5 bg-cyan-600 rounded-1 transform rotate-12"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Legal Services</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Regulatory compliance & digital law
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">8+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-violet-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-violet-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-500/20 transition-colors"
          >
            <div class="w-6 h-6 bg-violet-600 rounded-full border-2 border-violet-400"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Insurance</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Risk management & insurtech innovation
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-violet-100 text-violet-800 px-2 py-1 rounded-full">10+ Reports</span>
          </div>
        </div>

        <div
          class="group bg-tm-bg-primary rounded-4 p-6 border border-tm-bd-light hover:border-teal-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
        >
          <div
            class="w-12 h-12 bg-teal-500/10 rounded-3 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/20 transition-colors"
          >
            <div class="w-4 h-6 bg-teal-600 rounded-1 transform -rotate-12"></div>
          </div>
          <h3 class="font-semibold text-tm-txt-primary text-sm mb-2">Logistics</h3>
          <p class="text-xs text-tm-txt-secondary leading-relaxed">
            Supply chain optimization & logistics tech
          </p>
          <div class="mt-4 text-xs">
            <span class="bg-teal-100 text-teal-800 px-2 py-1 rounded-full">12+ Reports</span>
          </div>
        </div>
      </div>

      <!-- 报告特色和CTA -->
      <div class="bg-tm-bg-primary rounded-6 p-10 border border-tm-bd-light">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <!-- 特色列表 -->
          <div class="lg:col-span-2">
            <h3 class="text-2xl font-semibold text-tm-txt-primary mb-6">
              What Makes Our Reports Different
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-tm-accent-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-tm-accent-primary rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-medium text-tm-txt-primary mb-2">Global Perspective</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Cross-border talent insights from 8+ regional offices
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-tm-accent-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-tm-accent-primary rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-medium text-tm-txt-primary mb-2">Real-Time Data</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Live market intelligence updated quarterly
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-tm-accent-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-tm-accent-primary rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-medium text-tm-txt-primary mb-2">Actionable Insights</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Strategic recommendations from industry experts
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-tm-accent-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <div class="w-2 h-2 bg-tm-accent-primary rounded-full"></div>
                </div>
                <div>
                  <h4 class="font-medium text-tm-txt-primary mb-2">Custom Analysis</h4>
                  <p class="text-sm text-tm-txt-secondary">
                    Tailored reports for specific market needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA区域 -->
          <div class="text-center lg:text-left">
            <div
              class="bg-gradient-to-br from-tm-accent-primary to-tm-accent-secondary rounded-4 p-8 text-white"
            >
              <h4 class="text-lg font-semibold mb-4">Access Full Reports</h4>
              <p class="text-sm opacity-90 mb-6">
                Get complete industry analysis with detailed insights and recommendations
              </p>

              <div class="space-y-3">
                <NuxtLink
                  to="/contact"
                  class="block w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-medium py-3 px-6 rounded-3 transition-all duration-300 no-underline"
                >
                  Contact Our Experts
                </NuxtLink>
                <NuxtLink
                  to="/insights/industry-reports"
                  class="block w-full bg-transparent hover:bg-white/10 border border-white/50 text-white font-medium py-3 px-6 rounded-3 transition-all duration-300 no-underline"
                >
                  Browse All Reports
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style scoped>
  /* CSS变量支持 */
  .bg-tm-bg-primary {
    background: var(--tm-bg-primary);
  }
  .bg-tm-bg-secondary {
    background: var(--tm-bg-secondary);
  }
  .border-tm-bd-light {
    border-color: var(--tm-bd-light);
  }
  .text-tm-txt-primary {
    color: var(--tm-txt-primary);
  }
  .text-tm-txt-secondary {
    color: var(--tm-txt-secondary);
  }
  .text-tm-accent-primary {
    color: var(--tm-accent-primary);
  }
  .from-tm-accent-primary {
    --un-gradient-from: var(--tm-accent-primary);
  }
  .to-tm-accent-secondary {
    --un-gradient-to: var(--tm-accent-secondary);
  }
  .from-tm-accent-primary\/5 {
    --un-gradient-from: color-mix(in srgb, var(--tm-accent-primary) 5%, transparent);
  }
  .from-tm-accent-secondary\/4 {
    --un-gradient-from: color-mix(in srgb, var(--tm-accent-secondary) 4%, transparent);
  }
  .bg-tm-accent-primary\/20 {
    background: color-mix(in srgb, var(--tm-accent-primary) 20%, transparent);
  }
  .bg-tm-accent-primary\/10 {
    background: color-mix(in srgb, var(--tm-accent-primary) 10%, transparent);
  }
  .bg-tm-accent-primary {
    background: var(--tm-accent-primary);
  }
</style>
