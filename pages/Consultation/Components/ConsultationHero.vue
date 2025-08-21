<template>
  <section class="consultation-hero">
    <!-- 背景装饰 -->
    <div class="hero-background">
      <div class="gradient-bg"></div>
      <div class="pattern-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <!-- 顶部标签 -->
        <div class="hero-badge">
          <span class="badge-icon">🌍</span>
          <span class="badge-text">覆盖100+城市的全球人才网络</span>
        </div>

        <!-- 主标题 -->
        <h1 class="hero-title">
          开启您的
          <span class="highlight">人才战略</span>
          咨询之旅
        </h1>

        <!-- 副标题 -->
        <p class="hero-subtitle">与行业顶尖的人才顾问对话，定制专属于您的人才解决方案</p>

        <!-- 特点列表 -->
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2L2 7v10c0 5.5 3.84 10.74 9 12 5.16-1.26 9-6.5 9-12V7l-10-5z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">100%保密承诺</h3>
              <p class="feature-desc">多层加密保护您的商业机密</p>
            </div>
          </div>

          <div class="feature-item">
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
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">快速响应</h3>
              <p class="feature-desc">24小时内专家团队对接</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg
                width="24"
                height="24"
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
            <div class="feature-content">
              <h3 class="feature-title">专属顾问</h3>
              <p class="feature-desc">1对1定制化服务体验</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">成功保证</h3>
              <p class="feature-desc">92%配置成功率，6个月质保</p>
            </div>
          </div>
        </div>

        <!-- 信任指标 -->
        <div class="trust-indicators">
          <div class="indicator">
            <span class="indicator-number">15,000+</span>
            <span class="indicator-label">成功案例</span>
          </div>
          <div class="indicator-divider"></div>
          <div class="indicator">
            <span class="indicator-number">500+</span>
            <span class="indicator-label">企业客户</span>
          </div>
          <div class="indicator-divider"></div>
          <div class="indicator">
            <span class="indicator-number">50+</span>
            <span class="indicator-label">行业覆盖</span>
          </div>
        </div>

        <!-- 滚动提示 -->
        <div class="scroll-hint">
          <span>填写表单，开始咨询</span>
          <svg
            class="scroll-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style scoped>
  .consultation-hero {
    position: relative;
    padding: 120px 0 80px;
    overflow: hidden;
    background: var(--tm-bg-primary);
  }

  /* 背景装饰 */
  .hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .gradient-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      var(--tm-bg-gradient-from) 0%,
      var(--tm-bg-gradient-to) 100%
    );
    opacity: 0.05;
  }

  .pattern-overlay {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 80%, var(--tm-pri-0) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, var(--tm-pri-1) 0%, transparent 50%);
    opacity: 0.03;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
  }

  .hero-content {
    text-align: center;
  }

  /* 顶部标签 */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: var(--tm-bg-secondary);
    border: 1px solid var(--tm-bd-light);
    border-radius: 50px;
    margin-bottom: 30px;
  }

  .badge-icon {
    font-size: 1.2rem;
  }

  .badge-text {
    font-size: 0.9rem;
    color: var(--tm-txt-secondary);
    font-weight: 500;
  }

  /* 主标题 */
  .hero-title {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
    color: var(--tm-txt-primary);
    margin-bottom: 20px;
  }

  .hero-title .highlight {
    font-weight: 600;
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* 副标题 */
  .hero-subtitle {
    font-size: 1.5rem;
    color: var(--tm-txt-secondary);
    max-width: 600px;
    margin: 0 auto 60px;
    line-height: 1.5;
  }

  /* 特点网格 */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    text-align: left;
  }

  .feature-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: var(--tm-bg-secondary);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--tm-pri-0);
  }

  .feature-content {
    flex: 1;
  }

  .feature-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 4px;
  }

  .feature-desc {
    font-size: 0.9rem;
    color: var(--tm-txt-secondary);
    line-height: 1.4;
  }

  /* 信任指标 */
  .trust-indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 30px;
    background: var(--tm-bg-secondary);
    border-radius: 16px;
    margin-bottom: 40px;
  }

  .indicator {
    text-align: center;
  }

  .indicator-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--tm-pri-0);
    margin-bottom: 4px;
  }

  .indicator-label {
    font-size: 0.9rem;
    color: var(--tm-txt-secondary);
  }

  .indicator-divider {
    width: 1px;
    height: 40px;
    background: var(--tm-bd-light);
  }

  /* 滚动提示 */
  .scroll-hint {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--tm-txt-secondary);
    font-size: 0.9rem;
  }

  .scroll-icon {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }

  /* 深色模式 */
  .dark .gradient-bg {
    opacity: 0.1;
  }

  .dark .pattern-overlay {
    opacity: 0.05;
  }

  /* 响应式 - 减少手机端留白 */
  @media (max-width: 768px) {
    .consultation-hero {
      padding: 80px 0 40px;
    }

    .hero-badge {
      padding: 6px 16px;
      margin-bottom: 20px;
    }

    .badge-text {
      font-size: 0.8rem;
    }

    .hero-title {
      font-size: 2rem;
      margin-bottom: 16px;
    }

    .hero-subtitle {
      font-size: 1.1rem;
      margin-bottom: 40px;
    }

    .features-grid {
      grid-template-columns: 1fr;
      gap: 20px;
      margin-bottom: 40px;
    }

    .feature-icon {
      width: 40px;
      height: 40px;
    }

    .feature-title {
      font-size: 1rem;
    }

    .feature-desc {
      font-size: 0.85rem;
    }

    .trust-indicators {
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }

    .indicator-divider {
      display: none;
    }

    .indicator-number {
      font-size: 1.5rem;
    }

    .indicator-label {
      font-size: 0.85rem;
    }

    .scroll-hint {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .consultation-hero {
      padding: 60px 0 30px;
    }

    .hero-title {
      font-size: 1.75rem;
    }

    .hero-subtitle {
      font-size: 1rem;
      margin-bottom: 30px;
    }

    .features-grid {
      gap: 16px;
    }

    .feature-item {
      gap: 12px;
    }

    .trust-indicators {
      padding: 16px;
    }
  }
</style>
