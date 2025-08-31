<template>
  <section class="commitment-section">
    <div class="container">
      <div class="content-grid">
        <!-- 左侧内容 -->
        <div class="text-content">
          <!-- 年份标签 -->
          <div class="year-badge">
            <span class="year-number">15+</span>
            <span class="year-text">Years of Excellence</span>
          </div>

          <!-- 标题 -->
          <h2 class="section-title">
            Commitment to
            <span class="highlight">Excellence</span>
          </h2>

          <!-- 描述 -->
          <p class="section-description">
            Our dedication to delivering exceptional results is reflected in our achievements,
            certifications, and the trust placed in us by clients worldwide. We continuously invest
            in our capabilities to stay at the forefront of industry innovation.
          </p>

          <!-- 成就列表 -->
          <div class="achievements-list">
            <!-- 行业认可 -->
            <div class="achievement-item">
              <div class="achievement-icon">
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
              <div class="achievement-content">
                <h3 class="achievement-title">Industry Recognition</h3>
                <span class="achievement-badge">Top 10 HR Firm 2023</span>
                <p class="achievement-desc">
                  Recognized as a leading HR consulting firm across Asia-Pacific region
                </p>
              </div>
            </div>

            <!-- 客户满意度 -->
            <div class="achievement-item">
              <div class="achievement-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </div>
              <div class="achievement-content">
                <h3 class="achievement-title">Client Excellence</h3>
                <span class="achievement-badge">98% Client Retention</span>
                <p class="achievement-desc">
                  Consistently rated highest for service quality and client satisfaction
                </p>
              </div>
            </div>

            <!-- 专家网络 -->
            <div class="achievement-item">
              <div class="achievement-icon">
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
              <div class="achievement-content">
                <h3 class="achievement-title">Expert Network</h3>
                <span class="achievement-badge">500+ Specialists</span>
                <p class="achievement-desc">
                  Extensive network of industry professionals and subject matter experts
                </p>
              </div>
            </div>

            <!-- 全球覆盖 -->
            <div class="achievement-item">
              <div class="achievement-icon">
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
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <div class="achievement-content">
                <h3 class="achievement-title">Global Reach</h3>
                <span class="achievement-badge">45+ Countries</span>
                <p class="achievement-desc">
                  Successfully completed projects across 45+ countries worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="image-content">
          <div class="image-wrapper">
            <OptImage
              src="/images/about/vision-office.jpg"
              alt="Team meeting"
              class="team-image"
              :auto-dark-mode="true"
            />
            <div class="image-overlay"></div>
            <div class="stats-overlay">
              <div class="stat-item">
                <span class="stat-value">1,000+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA区域 -->
      <div class="cta-section">
        <div class="cta-content">
          <h3 class="cta-title">Experience Excellence with VMMC</h3>
          <p class="cta-description">
            Join hundreds of satisfied clients who trust us with their most important talent and
            consulting needs. Let's discuss how our proven track record can benefit your
            organization.
          </p>
          <div class="cta-buttons">
            <button
              class="btn-primary"
              @click="openConsultationModal"
            >
              Start Partnership
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
            </button>
            <button
              class="btn-secondary"
              @click="openExpertModal"
            >
              Learn More
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

  // 弹出框状态管理
  const isExpertModalVisible = ref(false)
  const isConsultationModalVisible = ref(false)

  // 专家咨询弹出框控制 (简化版)
  const openExpertModal = () => {
    isExpertModalVisible.value = true
  }

  const closeExpertModal = () => {
    isExpertModalVisible.value = false
  }

  // 完整咨询表单弹出框控制
  const openConsultationModal = () => {
    isConsultationModalVisible.value = true
  }

  const closeConsultationModal = () => {
    isConsultationModalVisible.value = false
  }
</script>

<style scoped>
  .commitment-section {
    padding: 100px 0;
    background: var(--tm-bg-secondary);
    overflow: hidden;
    position: relative;
  }

  /* 背景装饰 */
  .commitment-section::before {
    content: '';
    position: absolute;
    top: -200px;
    left: -200px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--tm-bg-heroGradient-from) 0%, transparent 60%);
    opacity: 0.2;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  /* 左侧内容 */
  .text-content {
    padding-right: 40px;
  }

  /* 年份标签 */
  .year-badge {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
    background: linear-gradient(
      135deg,
      var(--tm-accent-gradient-from) 0%,
      var(--tm-accent-gradient-to) 100%
    );
    border-radius: 20px;
    color: var(--tm-txt-white);
    margin-bottom: 30px;
    box-shadow: var(--tm-shadow-accent);
  }

  .year-number {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
  }

  .year-text {
    font-size: 0.875rem;
    margin-top: 4px;
  }

  /* 标题 */
  .section-title {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    color: var(--tm-txt-primary);
    margin-bottom: 24px;
  }

  .highlight {
    color: var(--tm-accent-primary);
    font-weight: 600;
    background: linear-gradient(
      var(--tm-accent-gradient-angle, 135deg),
      var(--tm-accent-gradient-from),
      var(--tm-accent-gradient-to)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }

  /* 描述 */
  .section-description {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--tm-txt-secondary);
    margin-bottom: 40px;
  }

  /* 成就列表 */
  .achievements-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .achievement-item {
    display: flex;
    gap: 20px;
    padding: 20px;
    background: var(--tm-bg-primary);
    border-radius: 16px;
    transition: all 0.3s ease;
    border: 1px solid var(--tm-bd-light);
    position: relative;
    overflow: hidden;
  }

  /* 悬停效果 */
  .achievement-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--tm-accent-primary);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  .achievement-item:hover::before {
    transform: scaleY(1);
  }

  .achievement-item:hover {
    transform: translateX(10px);
    box-shadow: var(--tm-shadow-hover);
    border-color: var(--tm-accent-primary);
  }

  /* 成就图标 */
  .achievement-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--tm-bg-badge), var(--tm-bg-accentLight));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--tm-accent-primary);
    transition: all 0.3s ease;
  }

  .achievement-item:hover .achievement-icon {
    background: linear-gradient(
      135deg,
      var(--tm-accent-gradient-from),
      var(--tm-accent-gradient-to)
    );
    color: var(--tm-txt-white);
    transform: scale(1.1) rotate(5deg);
  }

  .achievement-content {
    flex: 1;
  }

  .achievement-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 8px;
  }

  .achievement-badge {
    display: inline-block;
    padding: 4px 12px;
    background: var(--tm-accent-primary);
    color: var(--tm-txt-white);
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 20px;
    margin-bottom: 8px;
  }

  .achievement-desc {
    font-size: 0.875rem;
    color: var(--tm-txt-secondary);
    line-height: 1.5;
  }

  /* 右侧图片 */
  .image-content {
    position: relative;
  }

  .image-wrapper {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: var(--tm-shadow-hero);
  }

  .team-image {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--tm-accent-gradient-from) 0%, transparent 50%);
    opacity: 0.2;
  }

  /* 统计覆盖层 */
  .stats-overlay {
    position: absolute;
    bottom: 40px;
    left: 40px;
    background: var(--tm-bg-primary);
    padding: 30px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--tm-bd-light);
    box-shadow: var(--tm-shadow-card);
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--tm-accent-secondary), var(--tm-accent-tertiary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--tm-txt-secondary);
    margin-top: 4px;
  }

  /* CTA区域 */
  .cta-section {
    margin-top: 80px;
    padding: 50px;
    background: var(--tm-bg-primary);
    border-radius: 24px;
    text-align: center;
    border: 1px solid var(--tm-bd-light);
    position: relative;
    overflow: hidden;
  }

  .cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      var(--tm-bg-accentGradient-from) 0%,
      transparent 50%,
      var(--tm-bg-accentGradient-to) 100%
    );
    opacity: 0.05;
  }

  .cta-content {
    position: relative;
    z-index: 1;
  }

  .cta-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 16px;
  }

  .cta-description {
    font-size: 1.125rem;
    color: var(--tm-txt-secondary);
    margin-bottom: 32px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary,
  .btn-secondary {
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-primary {
    background: linear-gradient(
      135deg,
      var(--tm-accent-gradient-from),
      var(--tm-accent-gradient-to)
    );
    color: white;
    border: none;
    box-shadow: var(--tm-shadow-accent);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--tm-shadow-hover);
  }

  .btn-primary:hover .btn-icon {
    transform: translateX(4px);
  }

  .btn-secondary {
    background: transparent;
    color: var(--tm-accent-primary);
    border: 2px solid var(--tm-bd-primary);
  }

  .btn-secondary:hover {
    background: var(--tm-bg-hover);
    transform: translateY(-2px);
  }

  .btn-icon {
    transition: transform 0.3s ease;
  }

  /* 深色模式 */
  .dark .commitment-section {
    background: var(--tm-bg-primary);
  }

  .dark .achievement-item {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .achievement-item:hover {
    border-color: var(--tm-accent-primary);
  }

  .dark .stats-overlay {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .cta-section {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    .text-content {
      padding-right: 0;
    }

    .image-wrapper {
      max-width: 600px;
      margin: 0 auto;
    }

    .cta-section {
      padding: 40px 30px;
    }
  }

  @media (max-width: 768px) {
    .commitment-section {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-description {
      font-size: 1rem;
    }

    .achievement-item {
      padding: 16px;
      gap: 16px;
    }

    .achievement-icon {
      width: 40px;
      height: 40px;
    }

    .achievement-title {
      font-size: 1rem;
    }

    .achievement-desc {
      font-size: 0.8125rem;
    }

    .team-image {
      height: 400px;
    }

    .year-badge {
      padding: 16px 24px;
    }

    .year-number {
      font-size: 1.5rem;
    }

    .year-text {
      font-size: 0.75rem;
    }

    .stats-overlay {
      bottom: 20px;
      left: 20px;
      padding: 20px;
    }

    .stat-value {
      font-size: 1.5rem;
    }

    .cta-section {
      margin-top: 50px;
      padding: 30px 20px;
    }

    .cta-title {
      font-size: 1.5rem;
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
      max-width: 280px;
      justify-content: center;
    }
  }

  /* 动画效果 */
  .achievement-item {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .achievement-item:nth-child(1) {
    animation-delay: 0.1s;
  }
  .achievement-item:nth-child(2) {
    animation-delay: 0.2s;
  }
  .achievement-item:nth-child(3) {
    animation-delay: 0.3s;
  }
  .achievement-item:nth-child(4) {
    animation-delay: 0.4s;
  }

  @keyframes slideInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
