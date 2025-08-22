<template>
  <section class="testimonials-section">
    <div class="container">
      <!-- 标题区域 -->
      <div class="section-header">
        <h2 class="section-title">Trusted by Industry Leaders</h2>
        <p class="section-subtitle">
          Discover what our clients say about our exceptional talent solutions
        </p>
      </div>

      <!-- 评价卡片网格 -->
      <div class="testimonials-grid">
        <!-- 评价卡片 1 -->
        <div class="testimonial-card">
          <div class="quote-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C10 20 10 12 18 12V8C8 8 6 16 6 20V32H18V20H10Z"
                fill="currentColor"
              />
              <path
                d="M28 20C28 20 28 12 36 12V8C26 8 24 16 24 20V32H36V20H28Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <p class="testimonial-text">
            Their executive search capabilities are unmatched. They found us a perfect CEO who
            completely transformed our company's trajectory.
          </p>

          <div class="testimonial-author">
            <img
              :src="chenShaLaImg"
              alt="Sarah Chen"
              class="author-avatar"
            />
            <div class="author-info">
              <h4 class="author-name">Sarah Chen</h4>
              <p class="author-title">Board Chairperson</p>
              <p class="author-company">TechGlobal Inc.</p>
            </div>
          </div>
        </div>

        <!-- 评价卡片 2 -->
        <div class="testimonial-card">
          <div class="quote-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C10 20 10 12 18 12V8C8 8 6 16 6 20V32H18V20H10Z"
                fill="currentColor"
              />
              <path
                d="M28 20C28 20 28 12 36 12V8C26 8 24 16 24 20V32H36V20H28Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <p class="testimonial-text">
            The HR outsourcing solution streamlined our operations, reducing costs by 40% while
            improving employee satisfaction.
          </p>

          <div class="testimonial-author">
            <img
              :src="mikeImg"
              alt="Michael Rodriguez"
              class="author-avatar"
            />
            <div class="author-info">
              <h4 class="author-name">Michael Rodriguez</h4>
              <p class="author-title">Chief Operating Officer</p>
              <p class="author-company">Innovation Corp</p>
            </div>
          </div>
        </div>

        <!-- 评价卡片 3 -->
        <div class="testimonial-card">
          <div class="quote-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C10 20 10 12 18 12V8C8 8 6 16 6 20V32H18V20H10Z"
                fill="currentColor"
              />
              <path
                d="M28 20C28 20 28 12 36 12V8C26 8 24 16 24 20V32H36V20H28Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <p class="testimonial-text">
            Their cross-border expertise made our European expansion seamless. Exceptional service
            and cultural understanding.
          </p>

          <div class="testimonial-author">
            <img
              :src="aimaTangImg"
              alt="Emma Thompson"
              class="author-avatar"
            />
            <div class="author-info">
              <h4 class="author-name">Emma Thompson</h4>
              <p class="author-title">VP Global Operations</p>
              <p class="author-company">Millennium Industries</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部装饰 -->
      <div class="section-decoration">
        <div class="decoration-dot"></div>
        <div class="decoration-dot"></div>
        <div class="decoration-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 导入客户头像图片
  import chenShaLaImg from '../images/chen-shala.jpg'
  import mikeImg from '../images/mike.jpg'
  import aimaTangImg from '../images/aima-tang.jpg'
</script>

<style scoped>
  .testimonials-section {
    padding: 100px 0;
    background: var(--tm-bg-primary);
    position: relative;
    overflow: hidden;
  }

  /* 添加顶部渐变边界 */
  .testimonials-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--tm-bd-light) 20%,
      var(--tm-bd-light) 80%,
      transparent 100%
    );
  }

  /* 深色模式背景调整 */
  .dark .testimonials-section {
    background: var(--tm-bg-secondary);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* 标题区域 */
  .section-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: var(--tm-txt-primary);
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: var(--tm-txt-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  /* 评价卡片网格 */
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 40px;
    margin-bottom: 60px;
  }

  /* 评价卡片 */
  .testimonial-card {
    background: var(--tm-bg-primary);
    padding: 40px;
    border-radius: 12px;
    border: 1px solid var(--tm-bd-light);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    position: relative;
  }

  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    border-color: var(--tm-bd-primary);
  }

  /* 引号图标 */
  .quote-icon {
    color: var(--tm-pri-0);
    opacity: 0.2;
    margin-bottom: 24px;
  }

  /* 评价文字 */
  .testimonial-text {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--tm-txt-primary);
    margin-bottom: 32px;
    min-height: 100px;
  }

  /* 作者信息 */
  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .author-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--tm-bg-secondary);
  }

  .author-info {
    flex: 1;
  }

  .author-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 4px;
  }

  .author-title {
    font-size: 0.875rem;
    color: var(--tm-txt-secondary);
    margin-bottom: 2px;
  }

  .author-company {
    font-size: 0.875rem;
    color: var(--tm-pri-0);
  }

  /* 底部装饰 */
  .section-decoration {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 60px;
  }

  .decoration-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--tm-bd-light);
    transition: all 0.3s ease;
  }

  .decoration-dot:nth-child(2) {
    background: var(--tm-pri-0);
    transform: scale(1.5);
  }

  /* 深色模式调整 */
  .dark .testimonial-card {
    background: var(--tm-bg-primary);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .dark .testimonial-card:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  .dark .author-avatar {
    border-color: var(--tm-bg-primary);
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
      max-width: 600px;
      margin: 0 auto 60px;
    }
  }

  @media (max-width: 768px) {
    .testimonials-section {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
    }

    .testimonial-card {
      padding: 30px;
    }

    .testimonial-text {
      font-size: 1rem;
    }

    .author-avatar {
      width: 48px;
      height: 48px;
    }
  }

  /* 动画效果 */
  .testimonial-card {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .testimonial-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .testimonial-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .testimonial-card:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 引号动画 */
  .quote-icon {
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.3;
    }
  }
</style>
