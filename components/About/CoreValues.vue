<template>
  <section class="core-values-section">
    <div class="container">
      <!-- 标题区域 -->
      <div class="section-header">
        <h2 class="section-title">Our Core Values</h2>
        <p class="section-subtitle">
          The principles that guide our mission and define our approach to serving clients worldwide
        </p>
      </div>

      <!-- 价值观网格 -->
      <div class="values-grid">
        <!-- 创新 -->
        <div class="value-card">
          <div class="value-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
              <path d="M2 17L12 22L22 17"></path>
              <path d="M2 12L12 17L22 12"></path>
            </svg>
          </div>
          <h3 class="value-title">Innovation</h3>
          <p class="value-description">Embracing cutting-edge solutions and methodologies</p>
        </div>

        <!-- 诚信 -->
        <div class="value-card">
          <div class="value-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <h3 class="value-title">Integrity</h3>
          <p class="value-description">Maintaining highest standards of ethics and transparency</p>
        </div>

        <!-- 全球视角 -->
        <div class="value-card">
          <div class="value-icon">
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
          <h3 class="value-title">Global Perspective</h3>
          <p class="value-description">Understanding diverse markets and cultural nuances</p>
        </div>

        <!-- 卓越 -->
        <div class="value-card">
          <div class="value-icon">
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
          <h3 class="value-title">Excellence</h3>
          <p class="value-description">Delivering exceptional results that exceed expectations</p>
        </div>
      </div>

      <!-- CTA 区域 -->
      <div class="cta-section">
        <div class="cta-pattern"></div>
        <div class="cta-content">
          <h3 class="cta-title">Join Our Global Network</h3>
          <p class="cta-description text-white">
            Whether you're seeking exceptional talent or looking to advance your career, we invite
            you to become part of our global community of excellence.
          </p>
          <div class="cta-buttons">
            <NuxtLink
              to="/contact"
              class="btn-primary"
            >
              <span>Partner With Us</span>
              <svg
                class="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/careers"
              class="btn-secondary"
            >
              <span>Join Our Team</span>
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

<style scoped>
  .core-values-section {
    padding: 100px 0;
    background: var(--tm-bg-secondary);
    position: relative;
    overflow: hidden;
  }

  /* 背景装饰 */
  .core-values-section::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--tm-bg-heroGradient-from) 0%, transparent 70%);
    opacity: 0.2;
    border-radius: 50%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
  }

  /* 标题区域 */
  .section-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 300;
    color: var(--tm-txt-primary);
    margin-bottom: 20px;
  }

  .section-subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--tm-txt-secondary);
    max-width: 700px;
    margin: 0 auto;
  }

  /* 价值观网格 */
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 100px;
  }

  .value-card {
    text-align: center;
    position: relative;
    transition: transform 0.3s ease;
  }

  .value-card:hover {
    transform: translateY(-10px);
  }

  /* 价值观图标 */
  .value-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    background: linear-gradient(
      135deg,
      var(--tm-accent-gradient-from),
      var(--tm-accent-gradient-to)
    );
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: var(--tm-shadow-feature);
  }

  .value-icon svg {
    color: var(--tm-txt-white);
  }

  .value-card:hover .value-icon {
    transform: scale(1.1) rotate(5deg);
    box-shadow: var(--tm-shadow-hover);
  }

  /* 添加图标背景动画 */
  .value-icon::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      135deg,
      var(--tm-accent-gradient-from),
      var(--tm-accent-tertiary),
      var(--tm-accent-gradient-to)
    );
    background-size: 200% 200%;
    border-radius: 22px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    animation: gradient-shift 3s ease infinite;
  }

  .value-card:hover .value-icon::before {
    opacity: 1;
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .value-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 12px;
  }

  .value-description {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--tm-txt-secondary);
  }

  /* CTA 区域 */
  .cta-section {
    background: linear-gradient(
      var(--tm-accent-gradient-angle, 135deg),
      var(--tm-accent-gradient-from),
      var(--tm-accent-gradient-to)
    );
    border-radius: 24px;
    padding: 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: var(--tm-shadow-hero);
  }

  /* CTA 背景装饰 */
  .cta-pattern {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 50%, var(--tm-bg-whiteAlpha10) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, var(--tm-bg-whiteAlpha20) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    33% {
      transform: translateY(-20px) rotate(1deg);
    }
    66% {
      transform: translateY(20px) rotate(-1deg);
    }
  }

  .cta-content {
    position: relative;
    z-index: 1;
  }

  .cta-title {
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--tm-txt-white);
    margin-bottom: 20px;
  }

  .cta-description {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto 40px;
  }

  /* CTA 按钮 */
  .cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary,
  .btn-secondary {
    padding: 14px 32px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-primary {
    background: var(--tm-bg-primary);
    color: var(--tm-accent-primary);
    box-shadow: var(--tm-shadow-card);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--tm-shadow-hover);
  }

  .btn-icon {
    transition: transform 0.3s ease;
  }

  .btn-primary:hover .btn-icon {
    transform: translateX(4px);
  }

  .btn-secondary {
    background: transparent;
    color: var(--tm-txt-white);
    border: 2px solid var(--tm-bd-transparent);
  }

  .btn-secondary:hover {
    background: var(--tm-bg-whiteAlpha10);
    border-color: var(--tm-txt-white);
    transform: translateY(-2px);
  }

  /* 深色模式 */
  .dark .core-values-section {
    background: var(--tm-bg-primary);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .core-values-section {
      padding: 60px 0;
    }

    .section-header {
      margin-bottom: 50px;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
    }

    .values-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }

    .value-icon {
      width: 60px;
      height: 60px;
      margin-bottom: 16px;
    }

    .value-icon svg {
      width: 24px;
      height: 24px;
    }

    .value-title {
      font-size: 1.125rem;
    }

    .value-description {
      font-size: 0.875rem;
    }

    .cta-section {
      padding: 40px 20px;
    }

    .cta-title {
      font-size: 1.75rem;
    }

    .cta-description {
      font-size: 1rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
      max-width: 250px;
    }
  }

  /* 动画效果 */
  .value-card {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .value-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .value-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .value-card:nth-child(3) {
    animation-delay: 0.3s;
  }
  .value-card:nth-child(4) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
