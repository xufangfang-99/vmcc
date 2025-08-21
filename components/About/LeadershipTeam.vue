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
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
              alt="Victor Chen"
            />
          </div>
          <div class="member-info">
            <h3 class="member-name">Victor Chen</h3>
            <p class="member-title">Founder & CEO</p>
            <div class="member-meta">
              <span class="experience">🕒 15+ Years</span>
            </div>
            <p class="member-desc">Executive Leadership & Strategic Vision</p>
          </div>
        </div>

        <!-- Sarah Meridian -->
        <div class="team-member">
          <div class="member-image">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
              alt="Sarah Meridian"
            />
          </div>
          <div class="member-info">
            <h3 class="member-name">Sarah Meridian</h3>
            <p class="member-title">Global Operations Director</p>
            <div class="member-meta">
              <span class="experience">🕒 12+ Years</span>
            </div>
            <p class="member-desc">International Business & Operations</p>
          </div>
        </div>

        <!-- Michael Zhang -->
        <div class="team-member">
          <div class="member-image">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
              alt="Michael Zhang"
            />
          </div>
          <div class="member-info">
            <h3 class="member-name">Michael Zhang</h3>
            <p class="member-title">Head of Executive Search</p>
            <div class="member-meta">
              <span class="experience">🕒 14+ Years</span>
            </div>
            <p class="member-desc">Talent Acquisition & Leadership Recruitment</p>
          </div>
        </div>

        <!-- Emma Rodriguez -->
        <div class="team-member">
          <div class="member-image">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
              alt="Emma Rodriguez"
            />
          </div>
          <div class="member-info">
            <h3 class="member-name">Emma Rodriguez</h3>
            <p class="member-title">Immigration & Legal Director</p>
            <div class="member-meta">
              <span class="experience">🕒 11+ Years</span>
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
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }

  .team-member:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .member-image {
    width: 100%;
    height: 320px;
    overflow: hidden;
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
    color: #5b6cff;
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
</style>
