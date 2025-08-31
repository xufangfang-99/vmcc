<template>
  <section
    id="life-at-vmmc"
    class="py-25 bg-[var(--tm-bg-secondary)] relative overflow-hidden scroll-mt-80px"
  >
    <!-- 背景装饰 -->
    <div
      class="absolute top--20 left--50 w-120 h-120 rounded-full opacity-8 pointer-events-none bg-gradient-radial from-[var(--tm-accent-gradient-from)] to-transparent"
    ></div>
    <div
      class="absolute bottom--40 right--20 w-100 h-100 rounded-full opacity-12 pointer-events-none bg-gradient-radial from-[var(--tm-accent-secondary)] to-transparent"
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
            <div class="i-carbon-user-multiple w-4 h-4"></div>
          </div>
          <span class="text-3.5 font-medium text-[var(--tm-txt-primary)]">
            Our People & Culture
          </span>
        </div>

        <h2 class="text-10 lg:text-14 font-light text-[var(--tm-txt-primary)] mb-6">
          Life at
          <span
            class="text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent"
          >
            VMMC
          </span>
        </h2>

        <p class="text-5 text-[var(--tm-txt-secondary)] leading-relaxed max-w-220 mx-auto">
          Experience a culture where diverse perspectives drive innovation, collaboration fuels
          success, and every individual's contribution shapes the future of talent solutions across
          Asia-Pacific and Middle East.
        </p>
      </div>

      <!-- 文化价值观展示 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          Our Culture in Action
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 协作创新 -->
          <div
            class="culture-card bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-card)] relative overflow-hidden transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)] group"
          >
            <div
              class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-primary)] opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-1">
              <div
                class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-4 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform"
              >
                <div class="i-carbon-collaborate w-8 h-8"></div>
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4">
                Collaborative Innovation
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                Ideas flow freely across all levels. From junior consultants to senior partners,
                everyone's voice matters in shaping our solutions and strategies.
              </p>
              <div class="text-3.5 text-[var(--tm-accent-primary)] font-medium">
                "Best ideas can come from anywhere" - VMMC Philosophy
              </div>
            </div>
          </div>

          <!-- 多元包容 -->
          <div
            class="culture-card bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-card)] relative overflow-hidden transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-secondary)] group"
          >
            <div
              class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-secondary)] opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-1">
              <div
                class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-secondary)] to-[var(--tm-accent-tertiary)] rounded-4 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform"
              >
                <div class="i-carbon-earth-filled w-8 h-8"></div>
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4">
                Diversity & Inclusion
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                20+ nationalities, 15+ languages, united by shared values. Our diverse team brings
                unique perspectives that enrich our consulting approach.
              </p>
              <div class="text-3.5 text-[var(--tm-accent-secondary)] font-medium">
                40% women in leadership positions
              </div>
            </div>
          </div>

          <!-- 持续学习 -->
          <div
            class="culture-card bg-[var(--tm-bg-primary)] rounded-8 p-8 border border-[var(--tm-bd-card)] relative overflow-hidden transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-tertiary)] group"
          >
            <div
              class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-tertiary)] opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-1">
              <div
                class="w-16 h-16 bg-gradient-to-br from-[var(--tm-accent-tertiary)] to-purple-500 rounded-4 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform"
              >
                <div class="i-carbon-education w-8 h-8"></div>
              </div>
              <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)] mb-4">
                Continuous Learning
              </h4>
              <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-4">
                Knowledge sharing sessions, peer learning circles, and cross-functional projects
                keep everyone growing and evolving with industry trends.
              </p>
              <div class="text-3.5 text-[var(--tm-accent-tertiary)] font-medium">
                200+ internal training courses available
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 员工故事展示 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          Stories from Our Team
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 故事1 - 全球发展 -->
          <div
            class="employee-story bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-badge)] rounded-8 p-8 border border-[var(--tm-bd-card)] relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full opacity-5 transform translate-x-16 -translate-y-16"
            ></div>
            <div class="relative z-1">
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] rounded-full flex items-center justify-center text-white font-bold text-lg"
                >
                  AM
                </div>
                <div>
                  <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)]">Ahmed Mohamed</h4>
                  <p class="text-3.5 text-[var(--tm-txt-secondary)]">Senior Consultant</p>
                  <p class="text-3 text-[var(--tm-accent-primary)] font-medium">
                    Dubai → Singapore → Malaysia
                  </p>
                </div>
              </div>

              <blockquote class="text-4 text-[var(--tm-txt-secondary)] mb-6 italic relative">
                <div
                  class="absolute -left-2 -top-2 text-6 text-[var(--tm-accent-primary)] opacity-30"
                >
                  "
                </div>
                <div class="pl-6">
                  Starting in Dubai, I never imagined I'd be working across three countries within
                  four years. VMMC's global exchange program opened doors I didn't know existed.
                  Each office taught me something new - Dubai's entrepreneurial spirit, Singapore's
                  multicultural dynamics, and Malaysia's emerging market energy. Now I help clients
                  navigate talent challenges across the entire region.
                </div>
              </blockquote>

              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                >
                  Global Mobility
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                >
                  Cross-Cultural Leadership
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-[var(--tm-accent-primary)] rounded-full text-3 font-medium"
                >
                  Regional Expert
                </span>
              </div>
            </div>
          </div>

          <!-- 故事2 - 职业转换 -->
          <div
            class="employee-story bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-badge)] rounded-8 p-8 border border-[var(--tm-bd-card)] relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full opacity-5 transform translate-x-16 -translate-y-16"
            ></div>
            <div class="relative z-1">
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg"
                >
                  LW
                </div>
                <div>
                  <h4 class="text-6 font-semibold text-[var(--tm-txt-primary)]">Li Wei</h4>
                  <p class="text-3.5 text-[var(--tm-txt-secondary)]">HR Business Partner</p>
                  <p class="text-3 text-green-600 font-medium">Career Changer from Tech</p>
                </div>
              </div>

              <blockquote class="text-4 text-[var(--tm-txt-secondary)] mb-6 italic relative">
                <div class="absolute -left-2 -top-2 text-6 text-green-500 opacity-30">"</div>
                <div class="pl-6">
                  After 8 years in software development, I wanted a career that combined my
                  analytical skills with people interaction. VMMC's mentorship program and
                  comprehensive training helped me transition seamlessly into HR consulting. The
                  technical background actually gives me an edge in understanding our tech clients'
                  unique challenges.
                </div>
              </blockquote>

              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-green-600 rounded-full text-3 font-medium"
                >
                  Career Transition
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-green-600 rounded-full text-3 font-medium"
                >
                  Tech-HR Bridge
                </span>
                <span
                  class="px-3 py-1 bg-[var(--tm-bg-badge)] text-green-600 rounded-full text-3 font-medium"
                >
                  Mentorship Success
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 办公环境与工作方式 -->
      <div class="mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧图片区域 -->
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="relative rounded-6 overflow-hidden">
                <OptImage
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"
                  alt="VMMC现代办公环境"
                  class="w-full h-60 object-cover"
                  :auto-dark-mode="true"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div class="absolute bottom-3 left-3 text-white">
                  <p class="text-3 font-medium">Modern Workspaces</p>
                </div>
              </div>
              <div class="relative rounded-6 overflow-hidden">
                <OptImage
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80"
                  alt="团队协作空间"
                  class="w-full h-60 object-cover"
                  :auto-dark-mode="true"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div class="absolute bottom-3 left-3 text-white">
                  <p class="text-3 font-medium">Collaboration Hubs</p>
                </div>
              </div>
              <div class="relative rounded-6 overflow-hidden col-span-2">
                <OptImage
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="团队会议讨论"
                  class="w-full h-48 object-cover"
                  :auto-dark-mode="true"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div class="absolute bottom-3 left-3 text-white">
                  <p class="text-3 font-medium">Global Team Connections</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧内容 -->
          <div>
            <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-8">
              Where & How We Work
            </h3>

            <div class="space-y-6">
              <!-- 混合办公 -->
              <div class="work-style-item">
                <h4
                  class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3 flex items-center gap-3"
                >
                  <div
                    class="w-8 h-8 bg-[var(--tm-accent-primary)] rounded-2 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-home w-4 h-4"></div>
                  </div>
                  Hybrid Flexibility
                </h4>
                <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-3">
                  Work from office, home, or our partner co-working spaces. What matters is
                  delivering exceptional results for our clients, not where you sit.
                </p>
                <div class="text-3.5 text-[var(--tm-accent-primary)] font-medium">
                  3 days in office, 2 days flexible (average across teams)
                </div>
              </div>

              <!-- 全球协作 -->
              <div class="work-style-item">
                <h4
                  class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3 flex items-center gap-3"
                >
                  <div
                    class="w-8 h-8 bg-[var(--tm-accent-secondary)] rounded-2 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-earth-filled w-4 h-4"></div>
                  </div>
                  Cross-Border Teams
                </h4>
                <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-3">
                  Project teams span multiple time zones. Morning standup in Singapore, afternoon
                  client calls with Dubai, evening strategy sessions with Malaysia.
                </p>
                <div class="text-3.5 text-[var(--tm-accent-secondary)] font-medium">
                  15+ hours daily coverage across all time zones
                </div>
              </div>

              <!-- 学习文化 -->
              <div class="work-style-item">
                <h4
                  class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-3 flex items-center gap-3"
                >
                  <div
                    class="w-8 h-8 bg-[var(--tm-accent-tertiary)] rounded-2 flex items-center justify-center text-white"
                  >
                    <div class="i-carbon-education w-4 h-4"></div>
                  </div>
                  Knowledge Sharing
                </h4>
                <p class="text-3.5 text-[var(--tm-txt-secondary)] mb-3">
                  Weekly "Lunch & Learn" sessions, quarterly innovation showcases, and annual global
                  knowledge exchange conferences.
                </p>
                <div class="text-3.5 text-[var(--tm-accent-tertiary)] font-medium">
                  2 hours/week dedicated to learning & development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 团队活动与社区 -->
      <div class="mb-20">
        <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-12 text-center">
          Beyond Work: Our Community
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 团队建设 -->
          <div
            class="community-activity bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-[var(--tm-accent-primary)]"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-user-multiple w-8 h-8"></div>
            </div>
            <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-2">Team Retreats</h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Annual offsite retreats combining strategy planning with team bonding activities
            </p>
          </div>

          <!-- 技能分享 -->
          <div
            class="community-activity bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-green-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-presentation-file w-8 h-8"></div>
            </div>
            <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-2">Knowledge Cafés</h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Monthly informal sessions where team members share expertise and industry insights
            </p>
          </div>

          <!-- 社会责任 -->
          <div
            class="community-activity bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-orange-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-earth-filled w-8 h-8"></div>
            </div>
            <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-2">Community Impact</h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Volunteer programs supporting local education and professional development initiatives
            </p>
          </div>

          <!-- 庆祝文化 -->
          <div
            class="community-activity bg-[var(--tm-bg-primary)] rounded-6 p-6 border border-[var(--tm-bd-card)] text-center transition-all duration-300 hover:shadow-[var(--tm-shadow-hover)] hover:-translate-y-1 hover:border-purple-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
            >
              <div class="i-carbon-celebrate w-8 h-8"></div>
            </div>
            <h4 class="text-5 font-semibold text-[var(--tm-txt-primary)] mb-2">Cultural Events</h4>
            <p class="text-3.5 text-[var(--tm-txt-secondary)]">
              Celebrating festivals, achievements, and milestones from all cultures represented in
              our team
            </p>
          </div>
        </div>
      </div>

      <!-- 新员工寄语 -->
      <div class="mb-20">
        <div
          class="new-joiner-message bg-gradient-to-br from-[var(--tm-bg-primary)] to-[var(--tm-bg-secondary)] rounded-8 p-12 border border-[var(--tm-bd-card)] text-center relative overflow-hidden"
        >
          <div class="absolute inset-0 bg-pattern opacity-5"></div>
          <div class="relative z-1 max-w-200 mx-auto">
            <div
              class="w-24 h-24 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-full flex items-center justify-center mx-auto mb-6 text-white"
            >
              <div class="i-carbon-user-identification w-12 h-12"></div>
            </div>

            <h3 class="text-8 font-semibold text-[var(--tm-txt-primary)] mb-6">
              Ready to Write Your VMMC Story?
            </h3>

            <p class="text-5 text-[var(--tm-txt-secondary)] mb-8 leading-relaxed">
              Join a team where your unique perspective matters, your growth is supported, and your
              impact extends across continents. Every day brings new challenges, learning
              opportunities, and the chance to shape the future of talent solutions.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="stat-highlight">
                <div class="text-7 font-bold text-[var(--tm-accent-primary)]">95%</div>
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">Employee Satisfaction</div>
              </div>
              <div class="stat-highlight">
                <div class="text-7 font-bold text-[var(--tm-accent-secondary)]">8.2</div>
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">Avg. Years Tenure</div>
              </div>
              <div class="stat-highlight">
                <div class="text-7 font-bold text-[var(--tm-accent-tertiary)]">85%</div>
                <div class="text-3.5 text-[var(--tm-txt-secondary)]">Internal Promotion Rate</div>
              </div>
            </div>

            <blockquote class="text-4 text-[var(--tm-txt-secondary)] italic mb-8">
              "At VMMC, you don't just find a job – you discover a career path, a global community,
              and the opportunity to make a meaningful impact on businesses and individuals across
              the region."
            </blockquote>
            <div class="text-3.5 text-[var(--tm-accent-primary)] font-medium">
              - Victor Chen, CEO & Founder
            </div>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div
        class="text-center bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-8 p-12 text-white relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-pattern opacity-10"></div>
        <div class="relative z-1">
          <h3 class="text-8 font-semibold mb-4 text-white">Your Journey Starts Here</h3>
          <p class="text-4.5 mb-8 opacity-90 max-w-180 mx-auto text-white">
            Ready to be part of a team that's reshaping the future of talent solutions? Explore our
            open positions and take the first step towards an extraordinary career at VMMC.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <NuxtLink
              to="/careers#open-positions"
              class="px-8 py-3 bg-white text-[var(--tm-accent-primary)] rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 no-underline flex items-center gap-2"
            >
              <span>View Open Positions</span>
              <div class="i-carbon-arrow-right w-4 h-4"></div>
            </NuxtLink>
            <NuxtLink
              to="/careers#application-process"
              class="px-8 py-3 bg-transparent text-white rounded-full font-medium border-2 border-white/30 transition-all duration-300 hover:border-white hover:bg-white/10 no-underline"
            >
              Application Process
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
    background: var(--tm-bg-primary);
  }

  .dark .bg-\[var\(--tm-bg-primary\)\] {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .bg-\[var\(--tm-bg-secondary\)\] {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  /* 入场动画 */
  .culture-card,
  .employee-story,
  .community-activity,
  .work-style-item {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .culture-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .culture-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .culture-card:nth-child(3) {
    animation-delay: 0.3s;
  }

  .employee-story:nth-child(1) {
    animation-delay: 0.1s;
  }
  .employee-story:nth-child(2) {
    animation-delay: 0.2s;
  }

  .community-activity:nth-child(1) {
    animation-delay: 0.1s;
  }
  .community-activity:nth-child(2) {
    animation-delay: 0.2s;
  }
  .community-activity:nth-child(3) {
    animation-delay: 0.3s;
  }
  .community-activity:nth-child(4) {
    animation-delay: 0.4s;
  }

  .work-style-item:nth-child(1) {
    animation-delay: 0.1s;
  }
  .work-style-item:nth-child(2) {
    animation-delay: 0.2s;
  }
  .work-style-item:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 员工故事引用样式 */
  .employee-story blockquote {
    position: relative;
  }

  /* 新员工寄语特殊背景 */
  .new-joiner-message {
    position: relative;
  }

  .new-joiner-message::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      var(--tm-accent-gradient-from) 0%,
      var(--tm-accent-gradient-to) 100%
    );
    border-radius: 2rem;
    z-index: -1;
    opacity: 0.1;
  }

  /* 统计亮点动画 */
  .stat-highlight {
    opacity: 0;
    animation: countUp 1s ease-out forwards;
  }

  .stat-highlight:nth-child(1) {
    animation-delay: 0.2s;
  }
  .stat-highlight:nth-child(2) {
    animation-delay: 0.4s;
  }
  .stat-highlight:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes countUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
