<template>
  <section class="py-20 bg-tm-bg-secondary relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-0 right-0 w-100 h-100 opacity-5">
      <div
        class="w-full h-full bg-gradient-to-bl from-tm-accent-primary to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-350 mx-auto px-5 relative z-1">
      <!-- 标题区域 -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-tm-bg-accentLight rounded-4 mb-6"
        >
          <svg
            class="w-8 h-8 text-tm-accent-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle
              cx="9"
              cy="7"
              r="4"
            ></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
            <path d="M16 3.13a4 4 0 010 7.75"></path>
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-light text-tm-txt-primary mb-6">
          Healthcare Talent Solutions
        </h2>
        <p class="text-lg md:text-xl text-tm-txt-secondary max-w-200 mx-auto leading-relaxed">
          VMMC delivers comprehensive healthcare talent solutions across digital health,
          biotechnology, pharmaceuticals, medical devices, and medical tourism. Our 15 years of
          expertise connects exceptional professionals with industry-leading organizations
          worldwide.
        </p>
      </div>

      <!-- 核心服务领域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- 专业人才招聘 -->
        <div
          class="bg-tm-bg-primary rounded-3xl p-8 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-tm-bg-accentLight rounded-4 flex items-center justify-center">
              <svg
                class="w-8 h-8 text-tm-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                ></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <h3 class="text-xl font-600 text-tm-txt-primary">Healthcare Executive Search</h3>
          </div>
          <p class="text-tm-txt-secondary leading-relaxed mb-6">
            Specialized recruitment for healthcare leadership positions across all sectors. From
            Chief Medical Officers to R&D Directors, we connect organizations with transformational
            leaders driving innovation in digital health and biotechnology.
          </p>

          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-tm-accent-primary rounded-full"></div>
              <span class="text-sm text-tm-txt-primary font-500">
                C-Suite Healthcare Executives
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-tm-accent-primary rounded-full"></div>
              <span class="text-sm text-tm-txt-primary font-500">
                Chief Medical & Technology Officers
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-tm-accent-primary rounded-full"></div>
              <span class="text-sm text-tm-txt-primary font-500">R&D and Clinical Directors</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-tm-accent-primary rounded-full"></div>
              <span class="text-sm text-tm-txt-primary font-500">Medical Tourism Operations</span>
            </div>
          </div>
        </div>

        <!-- 技术专家招聘 -->
        <div
          class="bg-tm-bg-primary rounded-3xl p-8 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-emerald-500/10 rounded-4 flex items-center justify-center">
              <svg
                class="w-8 h-8 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-600 text-tm-txt-primary">Specialized Technical Talent</h3>
          </div>
          <p class="text-tm-txt-secondary leading-relaxed mb-6">
            Expert recruitment for cutting-edge healthcare technologies. We source professionals
            with expertise in AI healthcare, bioengineering, CRISPR gene editing, clinical research,
            and cross-disciplinary innovation.
          </p>

          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span class="text-sm text-tm-txt-primary font-500">
                AI & Machine Learning in Healthcare
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span class="text-sm text-tm-txt-primary font-500">
                Bioengineering & Genetic Engineering
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span class="text-sm text-tm-txt-primary font-500">
                Clinical Research & Trial Management
              </span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span class="text-sm text-tm-txt-primary font-500">
                Bioinformatics & Data Science
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 行业专业化服务 -->
      <div class="mb-16">
        <h3 class="text-2xl md:text-3xl font-600 text-tm-txt-primary mb-8 text-center">
          Industry-Specialized Services
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 制药行业 -->
          <div
            class="bg-tm-bg-primary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line
                  x1="16"
                  y1="13"
                  x2="8"
                  y2="13"
                ></line>
                <line
                  x1="16"
                  y1="17"
                  x2="8"
                  y2="17"
                ></line>
              </svg>
            </div>
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Pharmaceuticals</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Biostatistics, regulatory affairs, clinical research, and AI in drug discovery for the
              $1.8T market.
            </p>
            <div class="text-center p-3 bg-tm-bg-secondary rounded-lg">
              <div class="text-lg font-700 text-purple-500">$1.8T</div>
              <div class="text-xs text-tm-txt-light">Market Size</div>
            </div>
          </div>

          <!-- 医疗器械 -->
          <div
            class="bg-tm-bg-primary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="14"
                  rx="2"
                  ry="2"
                ></rect>
                <line
                  x1="8"
                  y1="21"
                  x2="16"
                  y2="21"
                ></line>
                <line
                  x1="12"
                  y1="17"
                  x2="12"
                  y2="21"
                ></line>
              </svg>
            </div>
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Medical Devices</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Biomedical engineering, regulatory compliance, AI imaging, and cybersecurity for
              connected devices.
            </p>
            <div class="text-center p-3 bg-tm-bg-secondary rounded-lg">
              <div class="text-lg font-700 text-blue-500">$650B</div>
              <div class="text-xs text-tm-txt-light">Market Value</div>
            </div>
          </div>

          <!-- 生物技术 -->
          <div
            class="bg-tm-bg-primary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-emerald-500/10 rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Biotechnology</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Genetic engineering, bioinformatics, clinical trial management, and cross-disciplinary
              innovation.
            </p>
            <div class="text-center p-3 bg-tm-bg-secondary rounded-lg">
              <div class="text-lg font-700 text-emerald-500">$1.5T</div>
              <div class="text-xs text-tm-txt-light">Projection</div>
            </div>
          </div>

          <!-- 医疗旅游 -->
          <div
            class="bg-tm-bg-primary rounded-3xl p-6 border border-tm-bd-card hover:-translate-y-2 hover:shadow-tm-shadow-hover hover:border-tm-accent-primary transition-all duration-300 group text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                ></circle>
              </svg>
            </div>
            <h4 class="text-lg font-600 text-tm-txt-primary mb-3">Medical Tourism</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed mb-4">
              Cross-border healthcare management, multilingual medical staff, and tourism-healthcare
              integration.
            </p>
            <div class="text-center p-3 bg-tm-bg-secondary rounded-lg">
              <div class="text-lg font-700 text-amber-500">$8.5B</div>
              <div class="text-xs text-tm-txt-light">UAE Revenue</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 区域优势与服务网络 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- 区域专长 -->
        <div class="bg-tm-bg-primary rounded-3xl p-8 border border-tm-bd-card">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-orange-500/10 rounded-4 flex items-center justify-center">
              <svg
                class="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                ></circle>
                <path d="M2 12h20"></path>
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-600 text-tm-txt-primary">GCC Healthcare Hub Expertise</h3>
          </div>
          <p class="text-tm-txt-secondary leading-relaxed mb-6">
            Deep understanding of UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain healthcare
            markets. Supporting medical hub development and emiratisation initiatives with local
            talent networks.
          </p>

          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-4 bg-tm-bg-secondary rounded-xl">
              <div class="text-lg font-700 text-orange-500 mb-1">85%</div>
              <div class="text-xs text-tm-txt-secondary">UAE JCI Accredited Hospitals</div>
            </div>
            <div class="text-center p-4 bg-tm-bg-secondary rounded-xl">
              <div class="text-lg font-700 text-orange-500 mb-1">60%</div>
              <div class="text-xs text-tm-txt-secondary">UAE Expatriate Specialists</div>
            </div>
          </div>
        </div>

        <!-- 全球网络 -->
        <div class="bg-tm-bg-primary rounded-3xl p-8 border border-tm-bd-card">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-cyan-500/10 rounded-4 flex items-center justify-center">
              <svg
                class="w-8 h-8 text-cyan-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
              </svg>
            </div>
            <h3 class="text-xl font-600 text-tm-txt-primary">Global Talent Network</h3>
          </div>
          <p class="text-tm-txt-secondary leading-relaxed mb-6">
            Strategic partnerships with leading medical institutions worldwide. Access to top
            healthcare professionals from US, EU, China, Singapore, and emerging biotech innovation
            centers.
          </p>

          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-tm-bg-secondary rounded-lg">
              <span class="text-sm font-500 text-tm-txt-primary">US & Europe</span>
              <span class="text-xs text-cyan-500 font-600">Medical Innovation</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-tm-bg-secondary rounded-lg">
              <span class="text-sm font-500 text-tm-txt-primary">Singapore</span>
              <span class="text-xs text-cyan-500 font-600">Asian Hub</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-tm-bg-secondary rounded-lg">
              <span class="text-sm font-500 text-tm-txt-primary">China & India</span>
              <span class="text-xs text-cyan-500 font-600">Emerging Centers</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 专业服务承诺 -->
      <div
        class="bg-gradient-to-br from-tm-bg-card to-tm-bg-secondary rounded-3xl p-8 md:p-12 border border-tm-bd-card"
      >
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-600 text-tm-txt-primary mb-4">
            Our Healthcare Recruitment Promise
          </h3>
          <p class="text-tm-txt-secondary max-w-175 mx-auto">
            15 years of proven expertise connecting healthcare organizations with exceptional
            talent. From digital transformation to medical tourism excellence, we deliver results
            that drive innovation and growth.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 专业匹配 -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-tm-bg-accentLight rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-tm-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4"></path>
                <path
                  d="M21 12c.552 0 1-.448 1-1V5a2 2 0 00-2-2H4a2 2 0 00-2 2v6c0 .552.448 1 1 1h18z"
                ></path>
              </svg>
            </div>
            <h4 class="text-xl font-600 text-tm-txt-primary mb-3">Precision Matching</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Advanced matching algorithms and deep industry knowledge ensure perfect candidate-role
              alignment for critical healthcare positions.
            </p>
          </div>

          <!-- 快速交付 -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-emerald-500/10 rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                ></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
            </div>
            <h4 class="text-xl font-600 text-tm-txt-primary mb-3">Rapid Deployment</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Streamlined processes and extensive networks enable fast placement of critical
              healthcare talent when time is essential.
            </p>
          </div>

          <!-- 长期合作 -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                ></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                <path d="M16 3.13a4 4 0 010 7.75"></path>
              </svg>
            </div>
            <h4 class="text-xl font-600 text-tm-txt-primary mb-3">Partnership Excellence</h4>
            <p class="text-sm text-tm-txt-secondary leading-relaxed">
              Long-term strategic partnerships with healthcare organizations, providing ongoing
              talent advisory and succession planning.
            </p>
          </div>
        </div>

        <!-- 联系行动 -->
        <div class="mt-12 text-center">
          <h4 class="text-xl font-600 text-tm-txt-primary mb-4">
            Ready to Transform Your Healthcare Team?
          </h4>
          <p class="text-tm-txt-secondary mb-8 max-w-150 mx-auto">
            Connect with our healthcare recruitment specialists to discuss your talent needs and
            discover how we can help you build future-ready teams.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-tm-accent-primary to-tm-accent-secondary text-base font-600 rounded-full border-2 border-tm-bd-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-w-60 justify-center"
              @click="openConsultationModal"
            >
              <span>Discuss Your Needs</span>
              <svg
                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
            <button
              class="inline-flex items-center justify-center px-8 py-4 bg-tm-bg-primary text-tm-txt-primary text-base font-600 rounded-full border-2 border-tm-bd-card hover:bg-tm-bg-hover hover:border-tm-accent-primary hover:-translate-y-1 transition-all duration-300 min-w-60"
              @click="openExpertModal"
            >
              Get Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 专家咨询弹出框 (简化版) -->
    <ExpertConsultationModal
      :is-visible="isExpertModalVisible"
      @close="closeExpertModal"
    />

    <!-- 完整咨询表单弹出框 -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ExpertConsultationModal from '~/components/ExpertConsultationModal.vue'
  import ConsultationFormModal from '~/components/ConsultationFormModal.vue'

  // 弹出框状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // 简化版专家咨询弹出框控制
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整版咨询表单弹出框控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }
</script>

<style scoped>
  /* 深色模式适配 */
  .dark .services-section {
    background: var(--tm-bg-secondary);
  }
</style>
