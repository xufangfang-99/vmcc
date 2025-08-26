<!-- components/about/LeadershipTeam.vue -->
<template>
  <section class="leadership-team">
    <div class="container">
      <!-- 标题 -->
      <div class="section-header">
        <h2 class="section-title">Leadership Team</h2>
        <p class="section-subtitle">
          Our advisory team comprises seasoned industry experts and cross-cultural professionals,
          each with an average of over 10 years of professional experience.
        </p>
      </div>

      <!-- 团队成员网格 -->
      <div class="team-grid">
        <!-- Victor Chen -->
        <div class="team-member">
          <div class="member-image">
            <OptImage
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
              alt="Victor Chen"
              :auto-dark-mode="true"
            />
          </div>
          <div class="member-info">
            <h3 class="member-name">Victor Chen</h3>
            <p class="member-title">Founder & CEO</p>
            <div class="member-meta">
              <span class="experience">🕐 15+ Years</span>
            </div>
            <p class="member-desc">Executive Leadership & Strategic Vision</p>
          </div>
        </div>

        <!-- Sarah Meridian -->
        <div class="team-member">
          <div class="member-image">
            <OptImage
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
              alt="Sarah Meridian"
              :auto-dark-mode="true"
            />
          </div>
          <div class="member-info">
            <h3 class="member-name">Sarah Meridian</h3>
            <p class="member-title">Global Operations Director</p>
            <div class="member-meta">
              <span class="experience">🕐 12+ Years</span>
            </div>
            <p class="member-desc">International Business & Operations</p>
          </div>
        </div>

        <!-- Michael Zhang -->
        <div class="team-member">
          <div class="member-image">
            <OptImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
              alt="Michael Zhang"
              :auto-dark-mode="true"
            />
          </div>
          <div class="member-info">
            <h3 class="member-name">Michael Zhang</h3>
            <p class="member-title">Head of Executive Search</p>
            <div class="member-meta">
              <span class="experience">🕐 14+ Years</span>
            </div>
            <p class="member-desc">Talent Acquisition & Leadership Recruitment</p>
          </div>
        </div>

        <!-- Emma Rodriguez -->
        <div class="team-member">
          <div class="member-image">
            <OptImage
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
              alt="Emma Rodriguez"
              :auto-dark-mode="true"
            />
          </div>
          <div class="member-info">
            <h3 class="member-name">Emma Rodriguez</h3>
            <p class="member-title">Immigration & Legal Director</p>
            <div class="member-meta">
              <span class="experience">🕐 11+ Years</span>
            </div>
            <p class="member-desc">Immigration Law & Compliance</p>
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
  .leadership-team {
    padding: 100px 0;
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
    margin-bottom: 60px;
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

  /* 团队网格 */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .team-member {
    background: var(--tm-bg-primary);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: var(--tm-shadow-card);
    border: 1px solid var(--tm-bd-light);
  }

  .team-member:hover {
    transform: translateY(-5px);
    box-shadow: var(--tm-shadow-hover);
    border-color: var(--tm-accent-primary);
  }

  .member-image {
    width: 100%;
    height: 320px;
    overflow: hidden;
    position: relative;
  }

  .member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .team-member:hover .member-image img {
    transform: scale(1.05);
  }

  /* 添加图片遮罩效果 */
  .member-image::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to top, var(--tm-bg-primary), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .team-member:hover .member-image::after {
    opacity: 1;
  }

  .member-info {
    padding: 30px;
  }

  .member-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 8px;
  }

  .member-title {
    font-size: 1rem;
    color: var(--tm-accent-primary);
    font-weight: 500;
    margin-bottom: 16px;
  }

  .member-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .experience {
    font-size: 0.9rem;
    color: var(--tm-txt-secondary);
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    background: var(--tm-bg-badge);
    border-radius: 20px;
    border: 1px solid var(--tm-bd-light);
  }

  .member-desc {
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--tm-txt-secondary);
  }

  /* 深色模式 */
  .dark .leadership-team {
    background: var(--tm-bg-primary);
  }

  .dark .team-member {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .team-member:hover {
    border-color: var(--tm-accent-primary);
  }

  .dark .experience {
    background: var(--tm-bg-whiteAlpha10);
    border-color: var(--tm-bd-transparent);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .leadership-team {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
    }

    .team-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .member-image {
      height: 280px;
    }

    .member-info {
      padding: 24px;
    }

    .member-name {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 480px) {
    .team-grid {
      gap: 20px;
    }

    .member-image {
      height: 240px;
    }

    .member-info {
      padding: 20px;
    }
  }

  /* 添加加载动画 */
  .team-member {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .team-member:nth-child(1) {
    animation-delay: 0.1s;
  }
  .team-member:nth-child(2) {
    animation-delay: 0.2s;
  }
  .team-member:nth-child(3) {
    animation-delay: 0.3s;
  }
  .team-member:nth-child(4) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
