<template>
  <section class="expertise-section">
    <div class="container">
      <div class="content-wrapper">
        <!-- 左侧内容 -->
        <div class="left-content">
          <h2 class="section-title">
            为什么选择我们的
            <span class="highlight">精英服务</span>
          </h2>

          <p class="section-description">
            我们将数十年的经验与创新方法相结合，提供无与伦比的人才解决方案，推动企业成功。
          </p>

          <!-- 特点列表 -->
          <div class="features-list">
            <div class="feature-item">
              <div class="feature-badge">50多个国家</div>
              <div class="feature-content">
                <h3 class="feature-title">全球网络</h3>
                <p class="feature-desc">广泛的国际顶级专业人士和行业领袖网络</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-badge">25+个行业</div>
              <div class="feature-content">
                <h3 class="feature-title">行业专业知识</h3>
                <p class="feature-desc">深厚的技术、金融、医疗保健和制造业领域知识</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-badge">98% 成功率</div>
              <div class="feature-content">
                <h3 class="feature-title">良好的业绩记录</h3>
                <p class="feature-desc">持续交付卓越成果，并保持行业领先的成功率</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-badge">人工智能驱动</div>
              <div class="feature-content">
                <h3 class="feature-title">创新方法</h3>
                <p class="feature-desc">尖端招聘技术与个性化服务相结合</p>
              </div>
            </div>
          </div>

          <!-- 底部统计 -->
          <div class="stats-footer">
            <div class="stat-item">
              <span class="stat-number">15年以上</span>
              <span class="stat-label">行业领导力</span>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="right-image">
          <div class="image-container">
            <img
              src="/images/business-meeting.jpg"
              alt="专业商务会议"
              class="main-image"
            />
            <!-- 装饰元素 -->
            <div class="image-decoration"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑（如需要可添加）
</script>

<style scoped>
  .expertise-section {
    padding: 100px 0;
    background: var(--tm-bg-primary);
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  /* 左侧内容 */
  .left-content {
    max-width: 540px;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: var(--tm-txt-primary);
  }

  .highlight {
    color: var(--tm-pri-0);
    font-weight: 400;
  }

  .section-description {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--tm-txt-secondary);
    margin-bottom: 3rem;
  }

  /* 特点列表 */
  .features-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .feature-badge {
    flex-shrink: 0;
    padding: 0.5rem 1rem;
    background: var(--tm-pri-0);
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 20px;
    white-space: nowrap;
  }

  .feature-content {
    flex: 1;
  }

  .feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 0.5rem;
  }

  .feature-desc {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--tm-txt-secondary);
  }

  /* 底部统计 */
  .stats-footer {
    padding-top: 2rem;
    border-top: 1px solid var(--tm-bd-light);
    display: flex;
    gap: 3rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 300;
    color: var(--tm-txt-primary);
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--tm-txt-secondary);
  }

  /* 右侧图片 */
  .right-image {
    position: relative;
  }

  .image-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }

  .main-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  /* 装饰元素 */
  .image-decoration {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 120px;
    height: 120px;
    background: var(--tm-pri-0);
    opacity: 0.1;
    border-radius: 50%;
    z-index: -1;
  }

  /* 深色模式调整 */
  .dark .expertise-section {
    background: var(--tm-bg-secondary);
  }

  .dark .feature-badge {
    background: var(--tm-pri-0);
    color: var(--tm-bg-primary);
  }

  .dark .image-container {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .content-wrapper {
      grid-template-columns: 1fr;
      gap: 60px;
    }

    .right-image {
      order: -1; /* 移动端图片在上 */
    }
  }

  @media (max-width: 768px) {
    .expertise-section {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-description {
      font-size: 1.1rem;
    }

    .features-list {
      gap: 1.5rem;
    }

    .feature-item {
      flex-direction: column;
      gap: 1rem;
    }

    .stats-footer {
      flex-wrap: wrap;
      gap: 2rem;
    }

    .stat-number {
      font-size: 1.5rem;
    }
  }

  /* 动画效果 */
  .feature-item {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .feature-item:nth-child(1) {
    animation-delay: 0.1s;
  }
  .feature-item:nth-child(2) {
    animation-delay: 0.2s;
  }
  .feature-item:nth-child(3) {
    animation-delay: 0.3s;
  }
  .feature-item:nth-child(4) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 悬停效果 */
  .feature-item {
    transition: transform 0.3s ease;
  }

  .feature-item:hover {
    transform: translateX(10px);
  }

  .image-container {
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .image-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  }
</style>
