<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- 背景图片 -->
    <div class="absolute inset-0 z-0">
      <OptImage
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
        alt="数据分析和市场洞察"
        class="w-full h-full object-cover"
        :auto-dark-mode="true"
      />
      <!-- 遮罩层 -->
      <div class="absolute inset-0 bg-black/80"></div>
      <!-- 装饰图案 -->
      <div class="absolute inset-0 bg-gradient-radial-pattern opacity-60"></div>
    </div>

    <div class="relative z-1 max-w-1200px mx-auto px-20px w-full">
      <div class="text-center text-white">
        <!-- Logo区域 -->
        <div class="inline-flex mb-30px">
          <div
            class="company-badge w-60px h-60px bg-[var(--tm-bg-badge)] border-2 border-[var(--tm-bd-white-alpha30)] rounded-16px flex items-center justify-center backdrop-blur-10px text-[var(--tm-accent-primary)] transition-all duration-300 ease hover:scale-110 hover:rotate-5 hover:bg-[var(--tm-accent-primary)] hover:text-white hover:border-[var(--tm-accent-primary)]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
            </svg>
          </div>
        </div>

        <!-- 标题区域 -->
        <div class="mb-40px">
          <h1
            class="text-4xl md:text-6xl font-light tracking-tight mb-10px text-white flex items-center justify-center gap-0.3em flex-col md:flex-row"
          >
            <span class="font-light">Market</span>
            <span
              class="highlight-logo inline-flex items-center animate-glow font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent"
            >
              Insights
            </span>
          </h1>
          <p class="text-lg text-[var(--tm-txt-white-alpha85)] mb-30px tracking-wider">
            Five Strategic Intelligence Areas for Data-Driven Recruitment
          </p>

          <p class="text-xl leading-relaxed text-white max-w-800px mx-auto opacity-90">
            Explore comprehensive talent intelligence across our five specialized domains. From
            industry-specific reports to recruitment trends, success stories, and proven best
            practices.
          </p>
        </div>

        <!-- CTA按钮 -->
        <div class="cta-buttons flex gap-20px justify-center mb-60px">
          <NuxtLink
            to="#industry-reports"
            class="btn-primary px-32px py-12px rounded-30px text-base font-medium border-none cursor-pointer transition-all duration-300 ease flex items-center justify-center gap-8px bg-gradient-to-br from-[var(--tm-accent-hero-from)] to-[var(--tm-accent-hero-to)] text-white shadow-[var(--tm-shadow-accent)] hover:translate-y--2px hover:shadow-[var(--tm-shadow-hover)] no-underline"
          >
            <span>Explore Intelligence</span>
            <svg
              class="btn-icon w-20px h-20px transition-transform duration-300 ease"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
          <button
            class="btn-secondary px-32px py-12px rounded-30px text-base font-medium cursor-pointer transition-all duration-300 ease flex items-center justify-center gap-8px bg-transparent text-white border-2 border-[var(--tm-bd-white-alpha30)] hover:bg-[var(--tm-bg-white-alpha10)] hover:border-white"
            @click="openConsultationModal"
          >
            <span>Consult Our Experts</span>
          </button>
        </div>

        <!-- 五大洞察领域导航 -->
        <div
          class="insights-nav relative grid grid-cols-2 lg:grid-cols-5 gap-6 p-40px bg-[var(--tm-bg-white-alpha05)] rounded-20px backdrop-blur-10px border border-[var(--tm-bd-white-alpha10)] shadow-[var(--tm-shadow-white-alpha10)] overflow-hidden"
        >
          <!-- 背景闪光效果 - 绝对定位，不占用网格空间 -->
          <div class="absolute inset-0 shimmer-bg"></div>

          <!-- Industry Reports -->
          <NuxtLink
            to="#industry-reports"
            class="insight-item group text-center relative z-1 no-underline transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-4 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
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
            <h3
              class="text-lg font-semibold mb-2 text-white group-hover:text-[var(--tm-accent-secondary)] transition-colors"
            >
              Industry Reports
            </h3>
            <p class="text-sm text-white/80 group-hover:text-white/90 transition-colors">
              Comprehensive market analysis across 12 key sectors
            </p>
          </NuxtLink>

          <!-- Talent Market Intelligence -->
          <NuxtLink
            to="#talent-market-intelligence"
            class="insight-item group text-center relative z-1 no-underline transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-4 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                ></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </div>
            <h3
              class="text-lg font-semibold mb-2 text-white group-hover:text-[var(--tm-accent-secondary)] transition-colors"
            >
              Market Intelligence
            </h3>
            <p class="text-sm text-white/80 group-hover:text-white/90 transition-colors">
              Real-time talent data and salary benchmarking
            </p>
          </NuxtLink>

          <!-- Recruitment Trends -->
          <NuxtLink
            to="#recruitment-trends"
            class="insight-item group text-center relative z-1 no-underline transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-4 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
              </svg>
            </div>
            <h3
              class="text-lg font-semibold mb-2 text-white group-hover:text-[var(--tm-accent-secondary)] transition-colors"
            >
              Recruitment Trends
            </h3>
            <p class="text-sm text-white/80 group-hover:text-white/90 transition-colors">
              Future workforce patterns and technology impact
            </p>
          </NuxtLink>

          <!-- Success Stories -->
          <NuxtLink
            to="#success-stories"
            class="insight-item group text-center relative z-1 no-underline transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-4 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
            </div>
            <h3
              class="text-lg font-semibold mb-2 text-white group-hover:text-[var(--tm-accent-secondary)] transition-colors"
            >
              Success Stories
            </h3>
            <p class="text-sm text-white/80 group-hover:text-white/90 transition-colors">
              Real client transformations and case studies
            </p>
          </NuxtLink>

          <!-- Best Practices -->
          <NuxtLink
            to="#best-practices"
            class="insight-item group text-center relative z-1 no-underline transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-4 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m-4-3h14m-5 3h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-4"
                ></path>
                <path d="M8 21v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>
            <h3
              class="text-lg font-semibold mb-2 text-white group-hover:text-[var(--tm-accent-secondary)] transition-colors"
            >
              Best Practices
            </h3>
            <p class="text-sm text-white/80 group-hover:text-white/90 transition-colors">
              Proven methodologies and expert frameworks
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 完整咨询表单弹出框 -->
    <ConsultationFormModal
      :is-visible="isConsultationModalVisible"
      @close="closeConsultationModal"
    />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // 弹出框状态管理
  const isConsultationModalVisible = ref(false)

  // 完整咨询表单弹出框控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }
</script>

<style>
  /* 背景渐变图案 */
  .bg-gradient-radial-pattern {
    background-image:
      radial-gradient(circle at 20% 50%, var(--tm-bg-accent-gradient-from) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, var(--tm-bg-accent-gradient-to) 0%, transparent 40%);
  }

  /* Logo 发光动画 */
  @keyframes glow {
    from {
      filter: drop-shadow(0 0 10px var(--tm-accent-gradient-from));
    }
    to {
      filter: drop-shadow(0 0 20px var(--tm-accent-gradient-to));
    }
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite alternate;
  }

  /* 按钮悬停效果 */
  .btn-primary:hover .btn-icon {
    transform: translateX(4px);
  }

  /* 导航区域闪光动画 */
  .shimmer-bg::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      var(--tm-bg-white-alpha10) 50%,
      transparent 70%
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }

  /* 移动端适配 */
  @media (max-width: 1023px) {
    .insights-nav {
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      padding: 24px;
    }

    /* 让第五个元素居中跨两列 */
    .insight-item:nth-child(5) {
      grid-column: 1 / -1;
      max-width: 200px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .cta-buttons {
      flex-direction: column;
      align-items: center;
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 40px;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .insights-nav {
      grid-template-columns: 1fr;
      gap: 12px;
      padding: 20px;
    }

    .insight-item:nth-child(5) {
      grid-column: 1;
      max-width: none;
      margin: 0;
    }

    .insight-item {
      padding: 16px;
    }

    .w-16.h-16 {
      width: 48px;
      height: 48px;
    }
  }
</style>
