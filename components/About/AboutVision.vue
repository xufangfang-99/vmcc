<!-- components/about/AboutVision.vue -->
<template>
  <section class="about-vision">
    <div class="container">
      <div class="vision-grid">
        <!-- 左侧内容 -->
        <div class="content-section">
          <h2 class="section-title">
            Global Vision,
            <span class="highlight">Local Expertise</span>
          </h2>

          <p class="description">
            VMMC combines extensive industry experience with a global perspective, leveraging
            top-tier worldwide resources to establish a comprehensive service framework that
            seamlessly integrates localized execution with global coordination.
          </p>

          <p class="description">
            Our commitment extends beyond traditional consulting. We partner with enterprise clients
            and individuals to provide transformative solutions that drive sustainable growth and
            success in an increasingly connected world.
          </p>

          <!-- 特点列表 -->
          <div class="features-list">
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
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="feature-title">Global Network</h3>
                <p class="feature-desc">
                  Strategic offices across Asia-Pacific and Middle East regions, ensuring
                  comprehensive market coverage and local expertise.
                </p>
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
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="feature-title">Comprehensive Services</h3>
                <p class="feature-desc">
                  One-stop solutions covering executive search, HR outsourcing, immigration, study
                  abroad, and strategic consulting services.
                </p>
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
              <div>
                <h3 class="feature-title">Expert Advisory</h3>
                <p class="feature-desc">
                  Seasoned industry experts with average 10+ years experience, delivering deep
                  insights and tailored solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="image-section">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
            alt="现代办公环境"
            class="vision-image"
          />
          <div class="excellence-badge">
            <div class="badge-icon">
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
            <div class="badge-content">
              <h4>Excellence</h4>
              <p>Recognized Leader</p>
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
  .about-vision {
    padding: 100px 0;
    background: var(--tm-bg-primary);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .vision-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  /* 内容区域 */
  .content-section {
    padding-right: 40px;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    color: var(--tm-txt-primary);
    margin-bottom: 30px;
  }

  .highlight {
    color: #5b6cff;
    font-weight: 600;
  }

  .description {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--tm-txt-secondary);
    margin-bottom: 20px;
  }

  /* 特点列表 */
  .features-list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .feature-item {
    display: flex;
    gap: 20px;
    align-items: start;
  }

  .feature-icon {
    width: 56px;
    height: 56px;
    background: rgba(91, 108, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5b6cff;
    flex-shrink: 0;
  }

  .feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 8px;
  }

  .feature-desc {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--tm-txt-secondary);
  }

  /* 图片区域 */
  .image-section {
    position: relative;
  }

  .vision-image {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  }

  .excellence-badge {
    position: absolute;
    bottom: 30px;
    right: 30px;
    background: white;
    padding: 20px 30px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .badge-icon {
    width: 48px;
    height: 48px;
    background: rgba(91, 108, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5b6cff;
  }

  .badge-content h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 4px;
  }

  .badge-content p {
    font-size: 0.9rem;
    color: var(--tm-txt-secondary);
  }

  /* 深色模式 */
  .dark .about-vision {
    background: var(--tm-bg-secondary);
  }

  .dark .excellence-badge {
    background: var(--tm-bg-primary);
  }

  /* 响应式设计 */
  @media (max-width: 968px) {
    .vision-grid {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    .content-section {
      padding-right: 0;
    }

    .section-title {
      font-size: 2.5rem;
    }

    .vision-image {
      height: 400px;
    }

    .excellence-badge {
      bottom: 20px;
      right: 20px;
      padding: 16px 20px;
    }
  }

  @media (max-width: 768px) {
    .about-vision {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .description {
      font-size: 1rem;
    }

    .features-list {
      gap: 24px;
    }

    .feature-icon {
      width: 48px;
      height: 48px;
    }

    .feature-title {
      font-size: 1.125rem;
    }

    .feature-desc {
      font-size: 0.9rem;
    }

    .vision-image {
      height: 300px;
    }

    .excellence-badge {
      position: static;
      margin-top: 20px;
      width: 100%;
    }
  }
</style>
