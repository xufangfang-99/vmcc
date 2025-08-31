<template>
  <section class="py-25 bg-[var(--tm-bg-primary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div
      class="absolute top--20 left--40 w-120 h-120 rounded-full opacity-10 pointer-events-none bg-gradient-radial from-[var(--tm-accent-gradient-from)] to-transparent"
    ></div>
    <div
      class="absolute bottom--40 right--20 w-100 h-100 rounded-full opacity-15 pointer-events-none bg-gradient-radial from-[var(--tm-accent-secondary)] to-transparent"
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
            <div class="i-carbon-earth-filled w-4 h-4"></div>
          </div>
          <span class="text-3.5 font-medium text-[var(--tm-txt-primary)]">Meet Our People</span>
        </div>

        <h2 class="text-10 lg:text-14 font-light text-[var(--tm-txt-primary)] mb-6">
          Our
          <span
            class="text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent"
          >
            Global Team
          </span>
        </h2>

        <p class="text-5 text-[var(--tm-txt-secondary)] leading-relaxed max-w-220 mx-auto">
          Our unique mix of cultures, experiences, and backgrounds creates a diverse meritocracy
          that drives innovation and excellence in talent solutions. When you join VMMC, you become
          part of a community of kind, humble, intelligent, and distinctive colleagues who will
          support your journey.
        </p>
      </div>

      <!-- 多元化与包容性核心信息 -->
      <div class="mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- 左侧图片 -->
          <div class="relative rounded-8 overflow-hidden">
            <OptImage
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="多元化团队协作"
              class="w-full h-80 object-cover"
              :auto-dark-mode="true"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 text-white">
              <h3 class="text-6 font-semibold mb-2">Diversity Drives Excellence</h3>
              <p class="text-4 opacity-90">15+ Years of Building Inclusive Teams</p>
            </div>
          </div>

          <!-- 右侧内容 -->
          <div class="space-y-6">
            <div
              class="diversity-highlight p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-card)]"
            >
              <h3 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4">
                A Diverse Meritocracy
              </h3>
              <p class="text-4 text-[var(--tm-txt-secondary)] leading-relaxed mb-4">
                Diversity is not simply a 'nice to have'—it is required to help our clients achieve
                bold, positive, and enduring change. Our 15+ years of experience has shown that
                diverse teams are more effective at solving complex problems and driving innovation.
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-[var(--tm-accent-primary)] text-white rounded-full text-3 font-medium"
                >
                  20+ Nationalities
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-accent-secondary)] text-white rounded-full text-3 font-medium"
                >
                  15+ Languages
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-accent-tertiary)] text-white rounded-full text-3 font-medium"
                >
                  25+ Industries
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 全球办公室网络 - 重新设计 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8 text-center">
          Global Network Spanning Key Business Hubs
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- Asia-Pacific HQ -->
          <div
            class="office-region bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-6 p-6 text-white relative overflow-hidden"
          >
            <div class="absolute top-2 right-2 opacity-20">
              <div class="i-carbon-location w-12 h-12"></div>
            </div>
            <div class="relative z-1">
              <h4 class="text-5 font-semibold mb-2 text-white">Asia-Pacific</h4>
              <p class="text-3.5 mb-3 opacity-90 text-white">Headquarters</p>
              <div class="text-3 space-y-1">
                <div>Singapore (HQ)</div>
                <div>Malaysia</div>
              </div>
            </div>
          </div>

          <!-- Middle East & Africa -->
          <div
            class="office-region bg-gradient-to-br from-emerald-500 to-teal-600 rounded-6 p-6 text-white relative overflow-hidden"
          >
            <div class="absolute top-2 right-2 opacity-20">
              <div class="i-carbon-location w-12 h-12"></div>
            </div>
            <div class="relative z-1">
              <h4 class="text-5 font-semibold mb-2 text-white">Middle East</h4>
              <p class="text-3.5 mb-3 opacity-90 text-white">Regional Hub</p>
              <div class="text-3 space-y-1">
                <div>Dubai, UAE</div>
                <div>GCC Coverage</div>
              </div>
            </div>
          </div>

          <!-- Greater China -->
          <div
            class="office-region bg-gradient-to-br from-red-500 to-pink-600 rounded-6 p-6 text-white relative overflow-hidden"
          >
            <div class="absolute top-2 right-2 opacity-20">
              <div class="i-carbon-location w-12 h-12"></div>
            </div>
            <div class="relative z-1">
              <h4 class="text-5 font-semibold mb-2 text-white">Greater China</h4>
              <p class="text-3.5 mb-3 opacity-90 text-white">4 Major Cities</p>
              <div class="text-3 space-y-1">
                <div>Beijing • Shanghai</div>
                <div>Shenzhen • Chengdu</div>
              </div>
            </div>
          </div>

          <!-- Global Expansion -->
          <div
            class="office-region bg-gradient-to-br from-purple-500 to-indigo-600 rounded-6 p-6 text-white relative overflow-hidden"
          >
            <div class="absolute top-2 right-2 opacity-20">
              <div class="i-carbon-growth w-12 h-12"></div>
            </div>
            <div class="relative z-1">
              <h4 class="text-5 font-semibold mb-2 text-white">Expanding</h4>
              <p class="text-3.5 mb-3 opacity-90 text-white">New Markets</p>
              <div class="text-3 space-y-1">
                <div>50+ Countries</div>
                <div>Project Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 员工网络与社区 - 借鉴麦肯锡模式 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8 text-center">
          Employee Networks & Communities
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 女性网络 -->
          <div
            class="network-card group bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
          >
            <div class="flex items-start gap-4 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3 flex items-center justify-center text-white flex-shrink-0"
              >
                <div class="i-carbon-user-female w-6 h-6"></div>
              </div>
              <div>
                <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-1">VMMC Women</h4>
                <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                  Empowering women in leadership
                </p>
              </div>
            </div>
            <p class="text-3.5 text-[var(--tm-txt-secondary)] leading-relaxed">
              A powerful network providing mentoring, training, and relationship-building
              opportunities to advance women's careers in consulting and HR leadership.
            </p>
          </div>

          <!-- 多元文化网络 -->
          <div
            class="network-card group bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
          >
            <div class="flex items-start gap-4 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-3 flex items-center justify-center text-white flex-shrink-0"
              >
                <div class="i-carbon-earth-southeast-asia w-6 h-6"></div>
              </div>
              <div>
                <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Cultural Connect
                </h4>
                <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                  Celebrating our global heritage
                </p>
              </div>
            </div>
            <p class="text-3.5 text-[var(--tm-txt-secondary)] leading-relaxed">
              Connecting colleagues from diverse cultural backgrounds across Asia-Pacific, Middle
              East, and beyond, fostering cross-cultural understanding and collaboration.
            </p>
          </div>

          <!-- 新兴专业人士网络 -->
          <div
            class="network-card group bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
          >
            <div class="flex items-start gap-4 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3 flex items-center justify-center text-white flex-shrink-0"
              >
                <div class="i-carbon-user-identification w-6 h-6"></div>
              </div>
              <div>
                <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-1">
                  NextGen Leaders
                </h4>
                <p class="text-3.5 text-[var(--tm-txt-secondary)]">Developing future talent</p>
              </div>
            </div>
            <p class="text-3.5 text-[var(--tm-txt-secondary)] leading-relaxed">
              Supporting early-career professionals and recent graduates with mentorship, career
              development programs, and networking opportunities.
            </p>
          </div>

          <!-- 技术创新网络 -->
          <div
            class="network-card group bg-[var(--tm-bg-secondary)] rounded-6 p-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
          >
            <div class="flex items-start gap-4 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-3 flex items-center justify-center text-white flex-shrink-0"
              >
                <div class="i-carbon-ibm-watson-studio w-6 h-6"></div>
              </div>
              <div>
                <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-1">
                  Tech Innovators
                </h4>
                <p class="text-3.5 text-[var(--tm-txt-secondary)]">
                  Driving digital transformation
                </p>
              </div>
            </div>
            <p class="text-3.5 text-[var(--tm-txt-secondary)] leading-relaxed">
              Connecting technology enthusiasts and digital transformation experts to share insights
              on AI, data analytics, and HR tech innovations.
            </p>
          </div>
        </div>
      </div>

      <!-- 团队统计与成就 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div
          class="stat-card text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
        >
          <div class="text-8 font-bold text-[var(--tm-accent-primary)] mb-2">40%</div>
          <div class="text-3.5 text-[var(--tm-txt-secondary)]">Women in Leadership</div>
        </div>

        <div
          class="stat-card text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
        >
          <div class="text-8 font-bold text-[var(--tm-accent-primary)] mb-2">20+</div>
          <div class="text-3.5 text-[var(--tm-txt-secondary)]">Nationalities</div>
        </div>

        <div
          class="stat-card text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
        >
          <div class="text-8 font-bold text-[var(--tm-accent-primary)] mb-2">8+</div>
          <div class="text-3.5 text-[var(--tm-txt-secondary)]">Avg. Years Tenure</div>
        </div>

        <div
          class="stat-card text-center p-6 bg-[var(--tm-bg-secondary)] rounded-6 border border-[var(--tm-bd-card)] transition-all duration-300 hover:border-[var(--tm-accent-primary)] hover:shadow-[var(--tm-shadow-hover)]"
        >
          <div class="text-8 font-bold text-[var(--tm-accent-primary)] mb-2">95%</div>
          <div class="text-3.5 text-[var(--tm-txt-secondary)]">Employee Satisfaction</div>
        </div>
      </div>

      <!-- 团队故事与文化 -->
      <div class="mb-16">
        <div
          class="bg-gradient-to-br from-[var(--tm-bg-secondary)] to-[var(--tm-bg-badge)] rounded-8 p-8 border border-[var(--tm-bd-card)]"
        >
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <!-- 团队照片 -->
            <div class="relative rounded-6 overflow-hidden lg:col-span-2">
              <OptImage
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="VMMC全球团队会议"
                class="w-full h-60 object-cover"
                :auto-dark-mode="true"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-5 font-semibold mb-1">One Team, Global Impact</h3>
                <p class="text-3 opacity-90">Connecting talent across continents</p>
              </div>
            </div>

            <!-- 文化亮点 -->
            <div class="space-y-4">
              <h3 class="text-6 font-semibold text-[var(--tm-txt-primary)]">Our Culture</h3>

              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-primary)] rounded-full"></div>
                  <span class="text-3.5 text-[var(--tm-txt-secondary)]">
                    Collaborative problem-solving
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-secondary)] rounded-full"></div>
                  <span class="text-3.5 text-[var(--tm-txt-secondary)]">
                    Continuous learning mindset
                  </span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-[var(--tm-accent-tertiary)] rounded-full"></div>
                  <span class="text-3.5 text-[var(--tm-txt-secondary)]">Client-first approach</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span class="text-3.5 text-[var(--tm-txt-secondary)]">
                    Innovation and excellence
                  </span>
                </div>
              </div>

              <div class="mt-6 p-4 bg-[var(--tm-bg-primary)] rounded-4">
                <p class="text-3.5 text-[var(--tm-txt-secondary)] italic">
                  "Our people are our greatest asset. Together, we create lasting impact for our
                  clients and meaningful careers for our team."
                </p>
                <p class="text-3 text-[var(--tm-accent-primary)] mt-2 font-medium">
                  — Victor Chen, CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA区域 - 更具吸引力 -->
      <div
        class="text-center bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-8 p-12 text-white relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-pattern opacity-10"></div>
        <div class="relative z-1">
          <h3 class="text-8 font-semibold mb-4 text-white">Ready to Shape the Future of Talent?</h3>
          <p class="text-4.5 mb-8 opacity-90 max-w-180 mx-auto text-white">
            Join our diverse community of professionals who are passionate about connecting
            exceptional talent with transformative opportunities. Your unique perspective and
            expertise can help us drive even greater impact.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <NuxtLink
              to="/careers#open-positions"
              class="px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 no-underline flex items-center gap-2"
            >
              <span>Explore Career Opportunities</span>
              <div class="i-carbon-arrow-right w-4 h-4"></div>
            </NuxtLink>
            <NuxtLink
              to="/careers#application-process"
              class="px-8 py-3 bg-transparent text-white rounded-full font-medium border-2 border-white/30 transition-all duration-300 hover:border-white hover:bg-white/10 no-underline"
            >
              Learn About Our Process
            </NuxtLink>
          </div>
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

  /* 背景图案 */
  .bg-pattern {
    background-image:
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%);
  }

  /* 深色模式适配 */
  .dark section {
    background: var(--tm-bg-secondary);
  }

  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  /* 入场动画 */
  .office-region,
  .network-card,
  .stat-card,
  .diversity-highlight {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .office-region:nth-child(1) {
    animation-delay: 0.1s;
  }
  .office-region:nth-child(2) {
    animation-delay: 0.2s;
  }
  .office-region:nth-child(3) {
    animation-delay: 0.3s;
  }
  .office-region:nth-child(4) {
    animation-delay: 0.4s;
  }

  .network-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .network-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .network-card:nth-child(3) {
    animation-delay: 0.3s;
  }
  .network-card:nth-child(4) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
