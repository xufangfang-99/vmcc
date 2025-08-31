<template>
  <section class="certifications-section">
    <div class="container">
      <!-- 标题区域 -->
      <div class="section-header">
        <h2 class="section-title">Certifications & Standards</h2>
        <p class="section-subtitle">
          We maintain the highest industry standards through continuous certification and compliance
        </p>
      </div>

      <!-- 认证网格 -->
      <div class="certifications-grid">
        <!-- ISO 9001:2015 -->
        <div class="certification-card">
          <div class="cert-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 11H3v10h6V11zM21 11h-6v10h6V11zM15 3H9v6h6V3z"></path>
            </svg>
          </div>
          <h3 class="cert-title">ISO 9001:2015</h3>
          <p class="cert-desc">Quality Management Systems</p>
          <div class="cert-badge">Certified</div>
        </div>

        <!-- Singapore Standards -->
        <div class="certification-card">
          <div class="cert-icon">
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
          <h3 class="cert-title">Singapore Standards</h3>
          <p class="cert-desc">HR Best Practices Certification</p>
          <div class="cert-badge">Active</div>
        </div>

        <!-- Global Mobility -->
        <div class="certification-card">
          <div class="cert-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <h3 class="cert-title">Global Mobility</h3>
          <p class="cert-desc">International Assignment Standards</p>
          <div class="cert-badge">Verified</div>
        </div>

        <!-- Data Protection -->
        <div class="certification-card">
          <div class="cert-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect
                x="3"
                y="11"
                width="18"
                height="10"
                rx="2"
                ry="2"
              ></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h3 class="cert-title">Data Protection</h3>
          <p class="cert-desc">GDPR & Privacy Compliance</p>
          <div class="cert-badge">Compliant</div>
        </div>
      </div>

      <!-- CTA 区域 -->
      <div class="cta-section">
        <div class="cta-pattern"></div>
        <div class="cta-content">
          <h3 class="cta-title">Ready to Experience Excellence?</h3>
          <p class="cta-description">
            Discover how VMMC can transform your business with our comprehensive suite of
            professional services. Let's discuss your unique requirements and create tailored
            solutions for your success.
          </p>
          <div class="cta-buttons">
            <button
              class="btn-primary"
              @click="showConsultationModal = true"
            >
              <span>Schedule Consultation</span>
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
            <NuxtLink
              to="/services"
              class="btn-secondary"
            >
              <span>View Our Services</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- 专家咨询模态框 -->
    <ExpertConsultationModal
      :is-visible="showConsultationModal"
      @close="showConsultationModal = false"
    />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const showConsultationModal = ref(false)
</script>

<style scoped>
  .certifications-section {
    padding: 100px 0;
    background: var(--tm-bg-primary);
    position: relative;
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

  /* 认证网格 */
  .certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 100px;
  }

  .certification-card {
    text-align: center;
    padding: 40px;
    background: var(--tm-bg-feature);
    border-radius: 20px;
    transition: all 0.3s ease;
    border: 1px solid var(--tm-bd-feature);
    position: relative;
    overflow: hidden;
  }

  /* 悬停效果 */
  .certification-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--tm-accent-gradient-from) 0%,
      var(--tm-accent-gradient-to) 100%
    );
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .certification-card:hover::before {
    transform: translateX(0);
  }

  .certification-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--tm-shadow-hover);
    border-color: var(--tm-accent-primary);
  }

  /* 认证图标 */
  .cert-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, var(--tm-bg-badge), var(--tm-bg-accentLight));
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: var(--tm-accent-primary);
    transition: all 0.3s ease;
  }

  .certification-card:hover .cert-icon {
    background: linear-gradient(
      135deg,
      var(--tm-accent-gradient-from),
      var(--tm-accent-gradient-to)
    );
    color: var(--tm-txt-white);
    transform: scale(1.1) rotate(5deg);
    box-shadow: var(--tm-shadow-feature);
  }

  .cert-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 12px;
  }

  .cert-desc {
    font-size: 0.95rem;
    color: var(--tm-txt-secondary);
    line-height: 1.5;
    margin-bottom: 20px;
  }

  /* 认证徽章 */
  .cert-badge {
    display: inline-block;
    padding: 6px 16px;
    background: var(--tm-accent-primary);
    color: var(--tm-txt-white);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 20px;
    letter-spacing: 0.5px;
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

  /* 背景装饰 */
  .cta-pattern {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 10% 20%, var(--tm-bg-whiteAlpha10) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, var(--tm-bg-whiteAlpha20) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, var(--tm-bg-whiteAlpha10) 0%, transparent 70%);
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
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
    line-height: 1.6;
    color: var(--tm-txt-white-alpha70);
    max-width: 700px;
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
    border: none;
    cursor: pointer;
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
  .dark .certifications-section {
    background: var(--tm-bg-secondary);
  }

  .dark .certification-card {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .certification-card:hover {
    border-color: var(--tm-accent-primary);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .certifications-section {
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

    .certifications-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin-bottom: 60px;
    }

    .certification-card {
      padding: 24px;
    }

    .cert-icon {
      width: 60px;
      height: 60px;
      margin-bottom: 16px;
    }

    .cert-icon svg {
      width: 24px;
      height: 24px;
    }

    .cert-title {
      font-size: 1rem;
    }

    .cert-desc {
      font-size: 0.875rem;
      margin-bottom: 16px;
    }

    .cert-badge {
      font-size: 0.75rem;
      padding: 4px 12px;
    }

    .cta-section {
      padding: 40px 20px;
      border-radius: 16px;
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
  .certification-card {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .certification-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .certification-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .certification-card:nth-child(3) {
    animation-delay: 0.3s;
  }
  .certification-card:nth-child(4) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
