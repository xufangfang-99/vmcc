<!-- components/about/GlobalPresence.vue -->
<template>
  <section class="global-presence">
    <div class="container">
      <!-- 标题 -->
      <div class="section-header">
        <h2 class="section-title">Global Presence</h2>
        <p class="section-subtitle">
          Strategically positioned across key business hubs in Asia-Pacific and Middle East,
          enabling seamless cross-border operations and local market expertise.
        </p>
      </div>

      <!-- 办公室网格 -->
      <div class="offices-grid">
        <!-- 新加坡总部 -->
        <div class="office-card headquarters">
          <div class="office-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
          <div class="office-content">
            <h3 class="office-title">
              Singapore
              <span class="badge">HQ</span>
            </h3>
            <p class="office-type">Headquarters</p>
            <p class="office-desc">Asia-Pacific regional hub and global headquarters</p>
          </div>
        </div>

        <!-- 迪拜办公室 -->
        <div class="office-card">
          <div class="office-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
          <div class="office-content">
            <h3 class="office-title">Dubai</h3>
            <p class="office-type">Regional Office</p>
            <p class="office-desc">Middle East and Africa operations center</p>
          </div>
        </div>

        <!-- 马来西亚办公室 -->
        <div class="office-card">
          <div class="office-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
          <div class="office-content">
            <h3 class="office-title">Malaysia</h3>
            <p class="office-type">Regional Office</p>
            <p class="office-desc">Southeast Asia market development</p>
          </div>
        </div>

        <!-- 北京办公室 -->
        <div class="office-card">
          <div class="office-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
          <div class="office-content">
            <h3 class="office-title">Beijing</h3>
            <p class="office-type">China Office</p>
            <p class="office-desc">Northern China business operations</p>
          </div>
        </div>

        <!-- 上海办公室 -->
        <div class="office-card">
          <div class="office-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
          <div class="office-content">
            <h3 class="office-title">Shanghai</h3>
            <p class="office-type">China Office</p>
            <p class="office-desc">Eastern China commercial hub</p>
          </div>
        </div>

        <!-- 深圳办公室 -->
        <div class="office-card">
          <div class="office-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
          <div class="office-content">
            <h3 class="office-title">Shenzhen</h3>
            <p class="office-type">China Office</p>
            <p class="office-desc">Southern China technology corridor</p>
          </div>
        </div>

        <!-- 成都办公室 -->
        <div class="office-card">
          <div class="office-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
          <div class="office-content">
            <h3 class="office-title">Chengdu</h3>
            <p class="office-type">China Office</p>
            <p class="office-desc">Western China market expansion</p>
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
  .global-presence {
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

  /* 办公室网格 */
  .offices-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .office-card {
    background: var(--tm-bg-primary);
    border-radius: 16px;
    padding: 30px;
    display: flex;
    gap: 20px;
    transition: all 0.3s ease;
    border: 1px solid var(--tm-bd-light);
  }

  .office-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  /* 总部特殊样式 */
  .office-card.headquarters {
    background: linear-gradient(135deg, #5b6cff 0%, #7b8cff 100%);
    color: white;
    grid-column: span 2;
  }

  .office-icon {
    width: 56px;
    height: 56px;
    background: rgba(91, 108, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #5b6cff;
  }

  .headquarters .office-icon {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }

  .office-content {
    flex: 1;
  }

  .office-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 4px;
    color: var(--tm-txt-primary);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .headquarters .office-title {
    color: white;
  }

  .badge {
    font-size: 0.75rem;
    background: rgba(255, 255, 255, 0.3);
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 500;
  }

  .office-type {
    font-size: 0.9rem;
    color: #5b6cff;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .headquarters .office-type {
    color: rgba(255, 255, 255, 0.9);
  }

  .office-desc {
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--tm-txt-secondary);
  }

  .headquarters .office-desc {
    color: rgba(255, 255, 255, 0.8);
  }

  /* 深色模式 */
  .dark .global-presence {
    background: var(--tm-bg-primary);
  }

  .dark .office-card {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .global-presence {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
    }

    .offices-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .office-card.headquarters {
      grid-column: span 1;
    }

    .office-card {
      padding: 24px;
    }

    .office-icon {
      width: 48px;
      height: 48px;
    }

    .office-title {
      font-size: 1.25rem;
    }
  }
</style>
