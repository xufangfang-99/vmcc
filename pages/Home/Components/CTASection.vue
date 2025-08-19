<template>
  <section class="cta-section">
    <div class="gradient-background"></div>

    <div class="container">
      <div class="cta-content">
        <!-- 主标题 -->
        <h2 class="cta-title">
          准备改变你的
          <br />
          人才战略？
        </h2>

        <!-- 描述文字 -->
        <p class="cta-description">
          与我们合作，解锁卓越的人才解决方案，推动您的业务发展。让我们探讨如何提升您的组织。
        </p>

        <!-- 行动按钮 -->
        <div class="cta-buttons">
          <button class="btn-primary">开始您的旅程</button>
          <button class="btn-secondary">预约咨询</button>
        </div>

        <!-- 联系信息 -->
        <div class="contact-info">
          <a
            href="tel:+15551234567"
            class="contact-item"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>+1 (555) 123-4567</span>
          </a>

          <a
            href="mailto:info@vmmcglobal.com"
            class="contact-item"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 5L10 10L17 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>info@vmmcglobal.com</span>
          </a>

          <div class="contact-item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 6V10L13 13"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>24/7 全球支持</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 装饰元素 -->
    <div class="decoration-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style scoped>
  .cta-section {
    position: relative;
    padding: 120px 0;
    overflow: hidden;
    background: var(--tm-bg-primary);
    transition: background-color 0.3s ease;
  }

  /* 深色模式背景 */
  .dark .cta-section {
    background: var(--tm-bg-secondary);
  }

  /* 渐变背景 - 使用主题色 */
  .gradient-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      var(--tm-pri-0) 0%,
      var(--tm-pri-1) 50%,
      var(--tm-pri-2) 100%
    );
    opacity: 0.9;
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  /* 深色模式下调整渐变透明度和色调 */
  .dark .gradient-background {
    opacity: 0.8;
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--tm-pri-0) 85%, black) 0%,
      color-mix(in srgb, var(--tm-pri-1) 85%, black) 50%,
      color-mix(in srgb, var(--tm-pri-2) 85%, black) 100%
    );
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  }

  /* CTA 内容 */
  .cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  /* 主标题 - 白色文字，深浅模式都适用 */
  .cta-title {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* 深色模式标题增强对比 */
  .dark .cta-title {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  /* 描述文字 */
  .cta-description {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    color: rgba(255, 255, 255, 0.95);
  }

  /* 深色模式描述文字 */
  .dark .cta-description {
    color: rgba(255, 255, 255, 0.9);
  }

  /* 行动按钮 */
  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }

  .btn-primary,
  .btn-secondary {
    padding: 1rem 2.5rem;
    font-size: 1.125rem;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  /* 主按钮 - 浅色模式 */
  .btn-primary {
    background: white;
    color: var(--tm-pri-0);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }

  /* 主按钮 - 深色模式 */
  .dark .btn-primary {
    background: rgba(255, 255, 255, 0.95);
    color: var(--tm-pri-0);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .dark .btn-primary:hover {
    background: white;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }

  /* 次要按钮 - 浅色模式 */
  .btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  /* 次要按钮 - 深色模式 */
  .dark .btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.95);
  }

  .dark .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  /* 联系信息 */
  .contact-info {
    display: flex;
    gap: 3rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .dark .contact-item {
    color: rgba(255, 255, 255, 0.85);
  }

  .contact-item:hover {
    color: white;
    transform: translateY(-2px);
  }

  .contact-item svg {
    flex-shrink: 0;
    stroke: currentColor;
  }

  /* 装饰元素 */
  .decoration-shapes {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;
  }

  .shape {
    position: absolute;
    border-radius: 50%;
    background: white;
    opacity: 0.08;
    transition: opacity 0.3s ease;
  }

  .dark .shape {
    opacity: 0.05;
  }

  .shape-1 {
    width: 400px;
    height: 400px;
    top: -200px;
    left: -200px;
    animation: float 20s ease-in-out infinite;
  }

  .shape-2 {
    width: 300px;
    height: 300px;
    bottom: -150px;
    right: -150px;
    animation: float 25s ease-in-out infinite reverse;
  }

  .shape-3 {
    width: 200px;
    height: 200px;
    top: 50%;
    right: 10%;
    animation: float 15s ease-in-out infinite;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .cta-section {
      padding: 80px 0;
    }

    .cta-title {
      font-size: 2.5rem;
    }

    .cta-description {
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
      max-width: 280px;
    }

    .contact-info {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .shape-1 {
      width: 200px;
      height: 200px;
      top: -100px;
      left: -100px;
    }

    .shape-2 {
      width: 150px;
      height: 150px;
      bottom: -75px;
      right: -75px;
    }

    .shape-3 {
      display: none;
    }
  }

  /* 动画 */
  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.05);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.95);
    }
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .cta-section {
      padding: 80px 0;
    }

    .cta-title {
      font-size: 2.5rem;
    }

    .cta-description {
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
      max-width: 280px;
    }

    .contact-info {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .shape-1 {
      width: 200px;
      height: 200px;
      top: -100px;
      left: -100px;
    }

    .shape-2 {
      width: 150px;
      height: 150px;
      bottom: -75px;
      right: -75px;
    }

    .shape-3 {
      display: none;
    }
  }

  /* 文字动画 */
  .cta-title,
  .cta-description,
  .cta-buttons,
  .contact-info {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .cta-title {
    animation-delay: 0.1s;
  }
  .cta-description {
    animation-delay: 0.2s;
  }
  .cta-buttons {
    animation-delay: 0.3s;
  }
  .contact-info {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
