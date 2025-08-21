<template>
  <footer class="footer-section">
    <div class="container">
      <!-- 主要内容区 -->
      <div class="footer-content">
        <!-- 左侧：公司信息 -->
        <div class="footer-column company-info">
          <h3 class="footer-logo">虚拟机管理中心</h3>
          <p class="company-description">
            为具有前瞻性思维的组织提供精英人才解决方案。我们将全球杰出的专业人士与行业领先的公司联系起来。
          </p>

          <!-- 社交媒体链接 -->
          <div class="social-links">
            <NuxtLink
              to="#"
              class="social-link"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H2C1.45 2 1 2.45 1 3V17C1 17.55 1.45 18 2 18H18C18.55 18 19 17.55 19 17V3C19 2.45 18.55 2 18 2ZM6.5 15.5H4V8H6.5V15.5ZM5.25 6.85C4.42 6.85 3.75 6.18 3.75 5.35C3.75 4.52 4.42 3.85 5.25 3.85C6.08 3.85 6.75 4.52 6.75 5.35C6.75 6.18 6.08 6.85 5.25 6.85ZM16 15.5H13.5V11.5C13.5 10.5 13 10 12 10C11 10 10.5 10.5 10.5 11.5V15.5H8V8H10.5V9.15C10.9 8.4 11.85 7.85 12.75 7.85C14.45 7.85 16 9.05 16 11.25V15.5Z"
                  fill="currentColor"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="social-link"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4.5C18.3 4.8 17.55 5 16.75 5.1C17.55 4.6 18.15 3.85 18.45 2.95C17.7 3.4 16.85 3.75 15.95 3.9C15.25 3.15 14.25 2.65 13.15 2.65C11 2.65 9.25 4.4 9.25 6.55C9.25 6.85 9.3 7.15 9.35 7.4C6.15 7.25 3.3 5.7 1.4 3.4C1.05 3.95 0.85 4.6 0.85 5.35C0.85 6.7 1.55 7.85 2.6 8.55C1.95 8.5 1.35 8.35 0.8 8.05V8.1C0.8 10 2.15 11.55 3.95 11.9C3.6 12 3.25 12.05 2.9 12.05C2.65 12.05 2.4 12.05 2.15 12C2.65 13.55 4.1 14.65 5.85 14.7C4.5 15.75 2.8 16.35 0.95 16.35C0.65 16.35 0.35 16.35 0 16.3C1.75 17.4 3.85 18 6.1 18C13.15 18 17.05 12.1 17.05 7C17.05 6.85 17.05 6.65 17.05 6.5C17.8 5.95 18.45 5.25 19 4.5Z"
                  fill="currentColor"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="#"
              class="social-link"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                  fill="currentColor"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- 服务和公司链接区域 - 手机端会并排显示 -->
        <div class="footer-links-section">
          <!-- 服务链接 -->
          <div class="footer-column">
            <h4 class="column-title">服务</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/services/executive-search">高管搜寻</NuxtLink></li>
              <li><NuxtLink to="/services/hr-outsourcing">人力资源外包</NuxtLink></li>
              <li><NuxtLink to="/services/talent-deployment">人才派遣</NuxtLink></li>
              <li><NuxtLink to="/services/organizational-consulting">组织咨询</NuxtLink></li>
              <li><NuxtLink to="/services/cross-border-support">跨境支持</NuxtLink></li>
            </ul>
          </div>

          <!-- 公司链接 -->
          <div class="footer-column">
            <h4 class="column-title">公司</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/about">关于我们</NuxtLink></li>
              <li><NuxtLink to="/contact">联系</NuxtLink></li>
              <li><NuxtLink to="/careers">职业发展</NuxtLink></li>
              <li><NuxtLink to="/insights">洞察</NuxtLink></li>
              <li><NuxtLink to="/privacy">隐私政策</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 底部版权信息 -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>© 2024 Elite Talent Solutions</p>
        </div>
        <div class="bottom-links">
          <NuxtLink to="/terms">条款</NuxtLink>
          <NuxtLink to="/privacy">隐私</NuxtLink>
          <NuxtLink to="/cookies">Cookies</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style scoped>
  .footer-section {
    background: var(--tm-bg-primary);
    border-top: 1px solid var(--tm-bd-light);
    padding: 80px 0 40px;
    position: relative;
    overflow: hidden;
  }

  /* 深色模式背景 */
  .dark .footer-section {
    background: #0a0a0a;
    border-top-color: rgba(255, 255, 255, 0.1);
  }

  /* 背景装饰 */
  .footer-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    right: -50%;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--tm-pri-0) 50%, transparent 100%);
    opacity: 0.3;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* 主要内容布局 */
  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 80px;
    margin-bottom: 60px;
  }

  /* 桌面端服务和公司链接布局 */
  .footer-links-section {
    display: contents; /* 在桌面端让子元素直接参与父级网格 */
  }

  /* 公司信息列 */
  .company-info {
    max-width: 400px;
  }

  .footer-logo {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--tm-txt-primary);
    background: linear-gradient(135deg, var(--tm-pri-0) 0%, var(--tm-pri-1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .company-description {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--tm-txt-secondary);
    margin-bottom: 2rem;
  }

  /* 社交媒体链接 */
  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--tm-bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--tm-txt-secondary);
    transition: all 0.3s ease;
    border: 1px solid var(--tm-bd-light);
  }

  .social-link:hover {
    background: var(--tm-pri-0);
    color: white;
    transform: translateY(-2px);
    border-color: var(--tm-pri-0);
  }

  .dark .social-link {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .dark .social-link:hover {
    background: var(--tm-pri-0);
    border-color: var(--tm-pri-0);
  }

  /* 列标题 */
  .column-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--tm-txt-primary);
  }

  /* 链接列表 */
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li {
    margin-bottom: 1rem;
  }

  .footer-links a {
    color: var(--tm-txt-secondary);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    position: relative;
  }

  .footer-links a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--tm-pri-0);
    transition: width 0.3s ease;
  }

  .footer-links a:hover {
    color: var(--tm-pri-0);
  }

  .footer-links a:hover::after {
    width: 100%;
  }

  /* 底部版权区 */
  .footer-bottom {
    padding-top: 40px;
    border-top: 1px solid var(--tm-bd-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dark .footer-bottom {
    border-top-color: rgba(255, 255, 255, 0.1);
  }

  .copyright p {
    font-size: 0.875rem;
    color: var(--tm-txt-secondary);
    margin: 0;
  }

  .bottom-links {
    display: flex;
    gap: 2rem;
  }

  .bottom-links a {
    font-size: 0.875rem;
    color: var(--tm-txt-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .bottom-links a:hover {
    color: var(--tm-pri-0);
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }

    .company-info {
      grid-column: 1 / -1;
      max-width: 100%;
    }

    .footer-links-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column: 1 / -1;
      gap: 40px;
    }
  }

  /* 手机端优化 */
  @media (max-width: 768px) {
    .footer-section {
      padding: 40px 0 20px;
    }

    .container {
      padding: 0 16px;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    /* 公司信息优化 */
    .footer-logo {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }

    .company-description {
      font-size: 0.875rem;
      line-height: 1.5;
      margin-bottom: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* 社交媒体链接优化 */
    .social-links {
      gap: 0.5rem;
    }

    .social-link {
      width: 32px;
      height: 32px;
    }

    .social-link svg {
      width: 16px;
      height: 16px;
    }

    /* 服务和公司模块并排显示 */
    .footer-links-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    /* 列标题优化 */
    .column-title {
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    /* 链接列表优化 - 紧凑布局 */
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .footer-links li {
      margin-bottom: 0;
    }

    .footer-links a {
      font-size: 0.8125rem;
      padding: 0.125rem 0;
      color: var(--tm-txt-light);
    }

    /* 底部版权区优化 */
    .footer-bottom {
      padding-top: 16px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .copyright p {
      font-size: 0.6875rem;
    }

    .bottom-links {
      gap: 0.75rem;
    }

    .bottom-links a {
      font-size: 0.6875rem;
    }
  }

  /* 小屏幕手机进一步优化 */
  @media (max-width: 480px) {
    .footer-section {
      padding: 30px 0 16px;
    }

    /* 保持两列布局但调整间距 */
    .footer-links-section {
      gap: 1.5rem;
    }

    .footer-links {
      gap: 0.375rem;
    }

    .footer-links a {
      font-size: 0.75rem;
    }

    /* 底部版权区保持横向但更紧凑 */
    .footer-bottom {
      padding-top: 12px;
    }

    .copyright p,
    .bottom-links a {
      font-size: 0.625rem;
    }

    .bottom-links {
      gap: 0.5rem;
    }
  }

  /* 动画效果 */
  .footer-section {
    animation: fadeIn 0.8s ease-out;
  }

  @keyframes fadeIn {
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
