<template>
  <section class="contact-section">
    <div class="container">
      <!-- 标题区域 -->
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Multiple ways to connect with our global team of experts</p>
      </div>

      <!-- 联系方式网格 -->
      <div class="contact-grid">
        <!-- 电话支持 -->
        <div class="contact-card">
          <div class="contact-header">
            <div class="contact-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
            </div>
            <h3 class="contact-title">Phone Support</h3>
          </div>
          <a
            href="tel:+15551234567"
            class="contact-link"
          >
            +1 (555) 123-4567
          </a>
          <p class="contact-desc">24/7 Global Hotline</p>
        </div>

        <!-- 邮件支持 -->
        <div class="contact-card">
          <div class="contact-header">
            <div class="contact-icon">
              <svg
                width="24"
                height="24"
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
            <h3 class="contact-title">Email Support</h3>
          </div>
          <a
            href="mailto:info@vmmcglobal.com"
            class="contact-link"
          >
            info@vmmcglobal.com
          </a>
          <p class="contact-desc">Response within 4 hours</p>
        </div>

        <!-- 在线聊天 -->
        <div class="contact-card">
          <div class="contact-header">
            <div class="contact-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                ></path>
              </svg>
            </div>
            <h3 class="contact-title">Live Chat</h3>
          </div>
          <button class="contact-link chat-button">Available Now</button>
          <p class="contact-desc">Instant assistance</p>
        </div>

        <!-- 预约会议 -->
        <div class="contact-card">
          <div class="contact-header">
            <div class="contact-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                ></rect>
                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                ></line>
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                ></line>
                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                ></line>
              </svg>
            </div>
            <h3 class="contact-title">Schedule Meeting</h3>
          </div>
          <button class="contact-link">Book Online</button>
          <p class="contact-desc">Choose your preferred time</p>
        </div>
      </div>

      <!-- 办公室位置 -->
      <div class="offices-section">
        <div class="office-grid">
          <!-- 新加坡办公室 -->
          <div class="office-card featured">
            <div class="office-header">
              <div class="office-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <div>
                <h3 class="office-title">Singapore</h3>
                <p class="office-subtitle">Global Headquarters</p>
              </div>
            </div>
            <div class="office-details">
              <p class="office-address">
                1 Marina Bay Sands, Level 20
                <br />
                Singapore 018956
              </p>
              <p class="office-info">
                <span class="info-icon">📞</span>
                +65 6123 4567
              </p>
              <p class="office-info">
                <span class="info-icon">✉️</span>
                singapore@vmmcglobal.com
              </p>
              <p class="office-info">
                <span class="info-icon">🕒</span>
                Mon-Fri: 9:00 AM - 6:00 PM SGT
              </p>
            </div>
            <NuxtLink
              to="/contact"
              class="visit-link"
            >
              Visit Headquarters
            </NuxtLink>
          </div>

          <!-- 迪拜办公室 -->
          <div class="office-card">
            <div class="office-header">
              <div class="office-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <div>
                <h3 class="office-title">Dubai</h3>
                <p class="office-subtitle">Middle East Office</p>
              </div>
            </div>
            <div class="office-details">
              <p class="office-address">
                Dubai International Financial Centre
                <br />
                Gate Village 3, Level 15, Dubai, UAE
              </p>
              <p class="office-info">+971 4 123 4567</p>
              <p class="office-info">dubai@vmmcglobal.com</p>
              <p class="office-info">Sun-Thu: 9:00 AM - 6:00 PM GST</p>
            </div>
          </div>

          <!-- 上海办公室 -->
          <div class="office-card">
            <div class="office-header">
              <div class="office-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <div>
                <h3 class="office-title">Shanghai</h3>
                <p class="office-subtitle">China Operations</p>
              </div>
            </div>
            <div class="office-details">
              <p class="office-address">
                Shanghai World Financial Center
                <br />
                Level 85, Pudong, Shanghai 200120
              </p>
              <p class="office-info">+86 21 1234 5678</p>
              <p class="office-info">shanghai@vmmcglobal.com</p>
              <p class="office-info">Mon-Fri: 9:00 AM - 6:00 PM CST</p>
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
  .contact-section {
    padding: 100px 0;
    background: var(--tm-bg-primary);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* 标题区域 */
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 300;
    color: var(--tm-txt-primary);
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: var(--tm-txt-secondary);
  }

  /* 联系方式网格 */
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 80px;
  }

  .contact-card {
    text-align: center;
    padding: 40px 30px;
    background: var(--tm-bg-secondary);
    border-radius: 16px;
    transition: all 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  /* 头部容器 - 图标和标题横向排列 */
  .contact-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .contact-icon {
    width: 60px;
    height: 60px;
    margin: 0;
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
  }

  .contact-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin: 0;
  }

  .contact-link {
    display: inline-block;
    font-size: 1.125rem;
    color: var(--tm-pri-0);
    text-decoration: none;
    margin-bottom: 8px;
    transition: color 0.3s ease;
  }

  .contact-link:hover {
    color: var(--tm-pri-1);
  }

  .chat-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.125rem;
    padding: 0;
  }

  .contact-desc {
    font-size: 0.9rem;
    color: var(--tm-txt-secondary);
  }

  /* 办公室部分 */
  .offices-section {
    padding-top: 40px;
    border-top: 1px solid var(--tm-bd-light);
  }

  .office-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }

  .office-card {
    background: var(--tm-bg-secondary);
    border-radius: 16px;
    padding: 30px;
    transition: all 0.3s ease;
  }

  .office-card.featured {
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    color: white;
  }

  .office-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .office-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .office-icon {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .office-card:not(.featured) .office-icon {
    background: var(--tm-bg-primary);
    color: var(--tm-pri-0);
  }

  .office-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .office-card:not(.featured) .office-title {
    color: var(--tm-txt-primary);
  }

  .office-subtitle {
    font-size: 0.9rem;
    opacity: 0.9;
  }

  .office-card:not(.featured) .office-subtitle {
    color: var(--tm-txt-secondary);
  }

  .office-details {
    margin-bottom: 20px;
  }

  .office-address {
    margin-bottom: 15px;
    line-height: 1.6;
  }

  .office-card:not(.featured) .office-address {
    color: var(--tm-txt-primary);
  }

  .office-info {
    font-size: 0.9rem;
    margin-bottom: 8px;
    opacity: 0.9;
  }

  .office-card:not(.featured) .office-info {
    color: var(--tm-txt-secondary);
  }

  .info-icon {
    margin-right: 8px;
  }

  .visit-link {
    display: inline-block;
    padding: 10px 24px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .visit-link:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(5px);
  }

  /* 深色模式 */
  .dark .contact-section {
    background: var(--tm-bg-secondary);
  }

  .dark .contact-card,
  .dark .office-card:not(.featured) {
    background: var(--tm-bg-primary);
  }

  .dark .offices-section {
    border-top-color: var(--tm-bd-secondary);
  }

  /* 手机端响应式 - 减少留白 */
  @media (max-width: 768px) {
    .contact-section {
      padding: 40px 0;
    }

    .container {
      padding: 0 16px;
    }

    .section-header {
      margin-bottom: 30px;
    }

    .section-title {
      font-size: 1.75rem;
      margin-bottom: 8px;
    }

    .section-subtitle {
      font-size: 1rem;
      line-height: 1.3;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 15px;
      margin-bottom: 35px;
    }

    .contact-card {
      padding: 20px 16px;
      text-align: left;
    }

    /* 手机端调整头部布局 */
    .contact-header {
      justify-content: flex-start;
      gap: 10px;
      margin-bottom: 12px;
    }

    .contact-icon {
      width: 40px;
      height: 40px;
      border-radius: 12px;
    }

    .contact-icon svg {
      width: 20px;
      height: 20px;
    }

    .contact-title {
      font-size: 1.1rem;
    }

    .contact-link {
      font-size: 1rem;
      margin-bottom: 4px;
    }

    .contact-desc {
      font-size: 0.85rem;
    }

    /* 办公室部分 */
    .offices-section {
      padding-top: 25px;
    }

    .office-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .office-card {
      padding: 20px;
    }

    .office-header {
      margin-bottom: 15px;
      gap: 12px;
    }

    .office-icon {
      width: 40px;
      height: 40px;
    }

    .office-title {
      font-size: 1.25rem;
    }

    .office-subtitle {
      font-size: 0.85rem;
    }

    .office-details {
      margin-bottom: 15px;
    }

    .office-address {
      font-size: 0.9rem;
      margin-bottom: 10px;
      line-height: 1.4;
    }

    .office-info {
      font-size: 0.85rem;
      margin-bottom: 6px;
    }

    .visit-link {
      padding: 8px 20px;
      font-size: 0.9rem;
    }

    .office-card.featured {
      order: -1;
    }
  }

  /* 小屏手机进一步优化 */
  @media (max-width: 480px) {
    .contact-section {
      padding: 30px 0;
    }

    .section-header {
      margin-bottom: 25px;
    }

    .section-title {
      font-size: 1.5rem;
      margin-bottom: 6px;
    }

    .section-subtitle {
      font-size: 0.9rem;
    }

    .contact-grid {
      gap: 12px;
      margin-bottom: 30px;
    }

    .contact-card {
      padding: 18px 14px;
    }

    .contact-header {
      gap: 8px;
      margin-bottom: 10px;
    }

    .contact-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
    }

    .contact-icon svg {
      width: 18px;
      height: 18px;
    }

    .contact-title {
      font-size: 1.05rem;
    }

    .contact-link {
      font-size: 0.95rem;
    }

    .contact-desc {
      font-size: 0.8rem;
    }

    .offices-section {
      padding-top: 20px;
    }

    .office-grid {
      gap: 12px;
    }

    .office-card {
      padding: 16px;
    }

    .office-header {
      margin-bottom: 12px;
    }

    .office-icon {
      width: 36px;
      height: 36px;
    }

    .office-title {
      font-size: 1.15rem;
    }

    .office-subtitle {
      font-size: 0.8rem;
    }

    .office-address {
      font-size: 0.85rem;
    }

    .office-info {
      font-size: 0.8rem;
    }
  }
</style>
