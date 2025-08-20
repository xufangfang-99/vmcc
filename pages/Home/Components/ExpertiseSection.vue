<template>
  <section class="expertise-section">
    <div class="container">
      <!-- 标题区域 -->
      <div
        ref="headerRef"
        class="header-wrapper"
      >
        <h2 class="section-title">
          <span class="title-prefix">为什么选择我们的</span>
          <span class="title-highlight">精英服务</span>
        </h2>
        <p class="section-subtitle">
          我们将数十年的经验与创新方法相结合，提供无与伦比的人才解决方案，推动企业成功
        </p>
      </div>

      <!-- 主要内容布局 -->
      <div class="main-content">
        <!-- 核心数据展示 -->
        <div
          ref="statsRef"
          class="stats-grid"
        >
          <div class="stat-item">
            <div class="stat-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                ></circle>
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </div>
            <div class="stat-content">
              <div class="stat-value">
                <span
                  class="counter"
                  data-target="50"
                >
                  50
                </span>
                +
              </div>
              <div class="stat-label">国家覆盖</div>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                ></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="stat-content">
              <div class="stat-value">
                <span
                  class="counter"
                  data-target="25"
                >
                  25
                </span>
                +
              </div>
              <div class="stat-label">行业领域</div>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div class="stat-content">
              <div class="stat-value">
                <span
                  class="counter"
                  data-target="98"
                >
                  98
                </span>
                %
              </div>
              <div class="stat-label">成功率</div>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div class="stat-content">
              <div class="stat-value">
                <span
                  class="counter"
                  data-target="15"
                >
                  15
                </span>
                +
              </div>
              <div class="stat-label">年行业经验</div>
            </div>
          </div>
        </div>

        <!-- 手机端：图片和企业信赖数据合并 -->
        <div
          ref="mobileHeroRef"
          class="mobile-hero-section"
        >
          <div class="image-wrapper">
            <img
              :src="businessMeetingImg"
              alt="专业商务会议"
              class="main-image"
            />
            <!-- 浮动卡片 -->
            <div class="floating-card">
              <div class="card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-title">
                  <span
                    class="counter"
                    data-target="500"
                  >
                    500
                  </span>
                  +
                </div>
                <div class="card-desc">全球企业信赖</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 核心优势展示 -->
        <div
          ref="featuresRef"
          class="features-container"
        >
          <!-- PC端左侧大图 -->
          <div class="image-section desktop-only">
            <div class="image-wrapper">
              <img
                :src="businessMeetingImg"
                alt="专业商务会议"
                class="main-image"
              />
              <!-- 浮动卡片 -->
              <div class="floating-card">
                <div class="card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div class="card-content">
                  <div class="card-title">
                    <span
                      class="counter"
                      data-target="500"
                    >
                      500
                    </span>
                    +
                  </div>
                  <div class="card-desc">全球企业信赖</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧特点网格 -->
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                    ></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line
                      x1="9"
                      y1="9"
                      x2="9.01"
                      y2="9"
                    ></line>
                    <line
                      x1="15"
                      y1="9"
                      x2="15.01"
                      y2="9"
                    ></line>
                  </svg>
                </div>
                <h4 class="feature-title">全球网络覆盖</h4>
              </div>
              <p class="feature-desc">遍布50多个国家的顶级专业人士网络，深入了解各地市场特点</p>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h4 class="feature-title">行业专业知识</h4>
              </div>
              <p class="feature-desc">深耕25个以上行业领域，拥有资深行业顾问团队</p>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
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
                <h4 class="feature-title">AI驱动创新</h4>
              </div>
              <p class="feature-desc">结合人工智能技术与资深顾问经验，提供数据驱动的精准匹配</p>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4 class="feature-title">严格保密机制</h4>
              </div>
              <p class="feature-desc">银行级安全标准，保护客户商业机密和候选人隐私</p>
            </div>
          </div>
        </div>

        <!-- 服务流程展示 - 手机端简化 -->
        <div
          ref="processRef"
          class="process-section"
        >
          <h3 class="process-title">我们的专业服务流程</h3>
          <div class="process-timeline">
            <div class="process-line">
              <div class="process-line-progress"></div>
            </div>
            <div class="process-item">
              <div class="process-number">01</div>
              <div class="process-content">
                <h4>需求分析</h4>
                <p>深入了解企业文化和职位需求</p>
              </div>
            </div>
            <div class="process-item">
              <div class="process-number">02</div>
              <div class="process-content">
                <h4>人才搜寻</h4>
                <p>运用全球网络精准定位候选人</p>
              </div>
            </div>
            <div class="process-item">
              <div class="process-number">03</div>
              <div class="process-content">
                <h4>评估筛选</h4>
                <p>专业评估确保最佳匹配</p>
              </div>
            </div>
            <div class="process-item">
              <div class="process-number">04</div>
              <div class="process-content">
                <h4>入职辅导</h4>
                <p>持续跟进确保顺利融入</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部承诺 - 手机端紧凑布局 -->
        <div
          ref="promiseRef"
          class="promise-section"
        >
          <div class="promise-card">
            <div class="promise-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                ></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div class="promise-content">
              <h4>60天完成搜寻</h4>
              <p>平均60天内为您找到理想人选</p>
            </div>
          </div>
          <div class="promise-card">
            <div class="promise-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
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
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="promise-content">
              <h4>90天人才保证</h4>
              <p>提供90天人才保证期服务</p>
            </div>
          </div>
          <div class="promise-card">
            <div class="promise-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="promise-content">
              <h4>24/7全球响应</h4>
              <p>跨时区无缝服务支持</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  // 导入本地图片
  import businessMeetingImg from '../images/business-meeting.jpg'

  // refs
  const headerRef = ref<HTMLElement>()
  const statsRef = ref<HTMLElement>()
  const featuresRef = ref<HTMLElement>()
  const processRef = ref<HTMLElement>()
  const promiseRef = ref<HTMLElement>()
  const mobileHeroRef = ref<HTMLElement>()

  // 观察器实例
  let observer: IntersectionObserver | null = null

  // 数字递增动画
  const animateNumber = (element: HTMLElement, target: number) => {
    // 如果已经是目标值，不执行动画
    if (element.textContent === target.toString()) return

    const duration = 2000
    const step = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        element.textContent = target.toString()
        clearInterval(timer)
      } else {
        element.textContent = Math.floor(current).toString()
      }
    }, 16)
  }

  // 创建 Intersection Observer
  const createObserver = (threshold = 0.1) => {
    // 检查是否在浏览器环境
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return null
    }

    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 添加可见类
            entry.target.classList.add('is-visible')

            // 如果包含计数器，启动数字动画
            const counters = entry.target.querySelectorAll('.counter')
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-target') || '0')
              animateNumber(counter as HTMLElement, target)
            })

            // 如果是流程部分，启动进度条动画
            if (entry.target.classList.contains('process-section')) {
              const progressLine = entry.target.querySelector('.process-line-progress')
              if (progressLine) {
                progressLine.classList.add('animate')
              }
            }

            // 动画触发后停止观察
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )
  }

  onMounted(() => {
    // 只在客户端执行
    if (process.client) {
      nextTick(() => {
        observer = createObserver()

        if (observer) {
          // 观察各个部分
          if (headerRef.value) observer.observe(headerRef.value)
          if (statsRef.value) observer.observe(statsRef.value)
          if (featuresRef.value) observer.observe(featuresRef.value)
          if (processRef.value) observer.observe(processRef.value)
          if (promiseRef.value) observer.observe(promiseRef.value)
          if (mobileHeroRef.value) observer.observe(mobileHeroRef.value)
        }
      })
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
</script>

<style scoped>
  .expertise-section {
    padding: 80px 0;
    background: var(--tm-bg-secondary);
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* 手机端专用样式 */
  .mobile-hero-section {
    display: none;
  }

  .desktop-only {
    display: block;
  }

  /* 标题区域 */
  .header-wrapper {
    text-align: center;
    margin-bottom: 60px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .header-wrapper.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .section-title {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: var(--tm-txt-primary);
  }

  .title-prefix {
    color: var(--tm-txt-primary);
  }

  .title-highlight {
    color: var(--tm-pri-0);
    font-weight: 500;
    position: relative;
  }

  /* 标题下划线动画 */
  .header-wrapper.is-visible .title-highlight::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--tm-pri-0);
    animation: underline-grow 1s ease-out 0.5s forwards;
  }

  @keyframes underline-grow {
    to {
      width: 100%;
    }
  }

  .section-subtitle {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--tm-txt-secondary);
    max-width: 700px;
    margin: 0 auto;
  }

  /* 核心数据网格 */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 80px;
  }

  .stat-item {
    text-align: center;
    padding: 2rem;
    background: var(--tm-bg-primary);
    border-radius: 16px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
  }

  .stats-grid.is-visible .stat-item {
    opacity: 1;
    transform: translateY(0);
  }

  .stats-grid.is-visible .stat-item:nth-child(1) {
    transition-delay: 0.1s;
  }
  .stats-grid.is-visible .stat-item:nth-child(2) {
    transition-delay: 0.2s;
  }
  .stats-grid.is-visible .stat-item:nth-child(3) {
    transition-delay: 0.3s;
  }
  .stats-grid.is-visible .stat-item:nth-child(4) {
    transition-delay: 0.4s;
  }

  .stat-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .stat-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: rgba(var(--tm-pri-0-rgb), 0.1);
    border-radius: 16px;
    margin-bottom: 1rem;
    color: var(--tm-pri-0);
    position: relative;
    overflow: hidden;
  }

  /* 图标悬停动画 */
  .stat-item:hover .stat-icon::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shine 0.5s ease;
  }

  @keyframes shine {
    to {
      left: 100%;
    }
  }

  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--tm-txt-primary);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1rem;
    color: var(--tm-txt-secondary);
  }

  /* 特点容器 */
  .features-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-bottom: 80px;
    align-items: center;
    opacity: 0;
    transform: translateY(40px);
    transition: all 1s ease;
  }

  .features-container.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* 图片部分 */
  .image-section {
    position: relative;
  }

  .features-container.is-visible .image-section {
    animation: slideInLeft 1s ease;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .image-wrapper {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }

  .main-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .image-wrapper:hover .main-image {
    transform: scale(1.05);
  }

  .floating-card {
    position: absolute;
    bottom: 30px;
    left: 30px;
    background: var(--tm-bg-primary);
    backdrop-filter: blur(20px);
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--tm-bd-light);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .dark .floating-card {
    background: var(--tm-bg-secondary);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: var(--tm-bd-default);
  }

  /* 确保图标在所有模式下都是白色 */
  .card-icon svg {
    stroke: white;
    fill: none;
  }

  .features-container.is-visible .floating-card {
    animation: fadeInUp 1s ease 0.5s both;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card-icon {
    width: 48px;
    height: 48px;
    background: var(--tm-pri-0);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--tm-txt-primary);
  }

  .card-desc {
    font-size: 0.9rem;
    color: var(--tm-txt-secondary);
  }

  /* 特点网格 */
  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    background: var(--tm-bg-primary);
    padding: 2rem;
    border-radius: 16px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: scale(0.9);
  }

  .features-container.is-visible .feature-card {
    opacity: 1;
    transform: scale(1);
  }

  .features-container.is-visible .feature-card:nth-child(1) {
    transition-delay: 0.1s;
  }
  .features-container.is-visible .feature-card:nth-child(2) {
    transition-delay: 0.2s;
  }
  .features-container.is-visible .feature-card:nth-child(3) {
    transition-delay: 0.3s;
  }
  .features-container.is-visible .feature-card:nth-child(4) {
    transition-delay: 0.4s;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  .feature-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    background: rgba(var(--tm-pri-0-rgb), 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--tm-pri-0);
    transition: all 0.3s ease;
  }

  .feature-card:hover .feature-icon {
    transform: rotate(360deg);
  }

  .feature-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
  }

  .feature-desc {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--tm-txt-secondary);
  }

  /* 流程部分 */
  .process-section {
    margin-bottom: 80px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .process-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .process-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    color: var(--tm-txt-primary);
    margin-bottom: 3rem;
  }

  .process-timeline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
  }

  /* 流程线 */
  .process-line {
    position: absolute;
    top: 30px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: rgba(var(--tm-pri-0-rgb), 0.2);
    z-index: 0;
  }

  .process-line-progress {
    height: 100%;
    background: var(--tm-pri-0);
    width: 0;
    transition: width 2s ease-out;
  }

  .process-line-progress.animate {
    width: 100%;
  }

  .process-item {
    text-align: center;
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateY(20px);
  }

  .process-section.is-visible .process-item {
    opacity: 1;
    transform: translateY(0);
  }

  .process-section.is-visible .process-item:nth-child(2) {
    transition-delay: 0.2s;
  }
  .process-section.is-visible .process-item:nth-child(3) {
    transition-delay: 0.4s;
  }
  .process-section.is-visible .process-item:nth-child(4) {
    transition-delay: 0.6s;
  }
  .process-section.is-visible .process-item:nth-child(5) {
    transition-delay: 0.8s;
  }

  .process-number {
    width: 60px;
    height: 60px;
    background: var(--tm-pri-0);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 1rem;
    position: relative;
  }

  /* 流程数字悬停效果 */
  .process-item:hover .process-number {
    transform: scale(1.1);
  }

  .process-item:hover .process-number::after {
    content: '';
    position: absolute;
    inset: -5px;
    border: 2px solid var(--tm-pri-0);
    border-radius: 50%;
    opacity: 0;
    animation: ping 1s ease-out;
  }

  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }

  .process-content h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 0.5rem;
  }

  .process-content p {
    font-size: 0.9rem;
    color: var(--tm-txt-secondary);
  }

  .process-connector {
    flex: 1;
    height: 2px;
    background: linear-gradient(to right, var(--tm-pri-0), rgba(var(--tm-pri-0-rgb), 0.3));
    margin: 0 1rem;
    margin-bottom: 4rem;
  }

  /* 承诺部分 */
  .promise-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .promise-card {
    background: var(--tm-bg-primary);
    padding: 2rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px) rotateX(-10deg);
    transform-style: preserve-3d;
  }

  .promise-section.is-visible .promise-card {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }

  .promise-section.is-visible .promise-card:nth-child(1) {
    transition-delay: 0.1s;
  }
  .promise-section.is-visible .promise-card:nth-child(2) {
    transition-delay: 0.2s;
  }
  .promise-section.is-visible .promise-card:nth-child(3) {
    transition-delay: 0.3s;
  }

  .promise-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  .promise-icon {
    width: 64px;
    height: 64px;
    background: rgba(var(--tm-pri-0-rgb), 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--tm-pri-0);
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .promise-card:hover .promise-icon {
    background: var(--tm-pri-0);
    color: white;
    transform: scale(1.1);
  }

  .promise-content h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 0.5rem;
  }

  .promise-content p {
    font-size: 0.9rem;
    color: var(--tm-txt-secondary);
  }

  /* 深色模式 */
  .dark .expertise-section {
    background: var(--tm-bg-primary);
  }

  .dark .stat-item,
  .dark .feature-card,
  .dark .promise-card {
    background: var(--tm-bg-secondary);
  }

  /* 响应式 */
  @media (max-width: 1024px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .features-container {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .process-timeline {
      flex-direction: column;
      gap: 2rem;
    }

    .process-line {
      display: none;
    }

    .process-connector {
      width: 2px;
      height: 60px;
      margin: -1rem auto;
      background: linear-gradient(to bottom, var(--tm-pri-0), rgba(var(--tm-pri-0-rgb), 0.3));
    }
  }

  @media (max-width: 768px) {
    .expertise-section {
      padding: 40px 0;
    }

    /* 隐藏PC端图片，显示手机端图片 */
    .desktop-only {
      display: none;
    }

    .mobile-hero-section {
      display: block;
      margin-bottom: 40px;
      opacity: 1;
      transform: none;
    }

    .mobile-hero-section .image-wrapper {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      height: 250px;
    }

    .mobile-hero-section .main-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .mobile-hero-section .floating-card {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      background: var(--tm-bg-primary);
      backdrop-filter: blur(20px);
      padding: 1rem;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--tm-bd-light);
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    /* 深色模式下的浮动卡片 */
    .dark .mobile-hero-section .floating-card {
      background: var(--tm-bg-secondary);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      border-color: var(--tm-bd-default);
    }

    .mobile-hero-section .card-icon {
      width: 40px;
      height: 40px;
      background: var(--tm-pri-0);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .mobile-hero-section .card-icon svg {
      width: 20px;
      height: 20px;
      stroke: white;
      fill: none;
    }

    .mobile-hero-section .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--tm-txt-primary);
    }

    .mobile-hero-section .card-desc {
      font-size: 0.8rem;
      color: var(--tm-txt-secondary);
    }

    /* 标题区域调整 */
    .header-wrapper {
      margin-bottom: 30px;
    }

    .section-title {
      font-size: 1.75rem;
    }

    .title-prefix {
      display: block;
      margin-bottom: 0.3rem;
      font-size: 1.5rem;
    }

    .title-highlight {
      font-size: 2rem;
      display: block;
    }

    .section-subtitle {
      font-size: 0.95rem;
      padding: 0 10px;
      line-height: 1.6;
    }

    /* 手机端统计数据 - 修复布局 */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
      margin-bottom: 40px;
      padding: 0;
      overflow: visible;
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 12px;
      background: var(--tm-bg-primary);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      opacity: 1;
      transform: none;
    }

    .stat-content {
      text-align: left;
      flex: 1;
    }

    .stat-icon {
      width: 40px;
      height: 40px;
      margin-bottom: 0;
      flex-shrink: 0;
      background: rgba(var(--tm-pri-0-rgb), 0.1);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .stat-icon svg {
      width: 20px;
      height: 20px;
      color: var(--tm-pri-0);
    }

    .stat-value {
      font-size: 1.5rem;
      margin-bottom: 0;
      line-height: 1;
      font-weight: 700;
      color: var(--tm-txt-primary);
    }

    .stat-label {
      font-size: 0.75rem;
      color: var(--tm-txt-secondary);
      margin-top: 0.25rem;
    }

    /* 深色模式下的统计卡片 */
    .dark .stat-item {
      background: var(--tm-bg-secondary);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    /* 特点卡片 - 更紧凑 */
    .features-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .feature-card {
      padding: 1.25rem;
      border-radius: 12px;
    }

    .feature-header {
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .feature-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
    }

    .feature-icon svg {
      width: 18px;
      height: 18px;
    }

    .feature-title {
      font-size: 1rem;
    }

    .feature-desc {
      font-size: 0.85rem;
      line-height: 1.5;
    }

    /* 流程部分 - 简化布局 */
    .process-section {
      margin-bottom: 50px;
    }

    .process-title {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .process-timeline {
      gap: 1rem;
    }

    .process-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-align: left;
      width: 100%;
    }

    .process-number {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
      margin: 0;
    }

    .process-content h4 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }

    .process-content p {
      font-size: 0.8rem;
      line-height: 1.4;
    }

    /* 承诺部分 - 横向滚动 */
    .promise-section {
      display: flex;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      gap: 1rem;
      padding-bottom: 10px;
      scroll-snap-type: x mandatory;
    }

    .promise-card {
      flex: 0 0 85%;
      scroll-snap-align: start;
      padding: 1.5rem;
      gap: 1rem;
      border-radius: 12px;
    }

    .promise-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
    }

    .promise-icon svg {
      width: 24px;
      height: 24px;
    }

    .promise-content h4 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }

    .promise-content p {
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }

  /* 更小屏幕优化 */
  @media (max-width: 480px) {
    .section-title {
      font-size: 1.5rem;
    }

    .title-prefix {
      font-size: 1.25rem;
    }

    .title-highlight {
      font-size: 1.75rem;
    }

    .section-subtitle {
      font-size: 0.875rem;
    }

    .stats-grid {
      gap: 0.5rem;
    }

    .stat-item {
      padding: 0.75rem;
    }

    .stat-icon {
      width: 36px;
      height: 36px;
    }

    .stat-value {
      font-size: 1.25rem;
    }

    .stat-label {
      font-size: 0.7rem;
    }

    .promise-card {
      flex: 0 0 90%;
    }
  }
</style>
