<template>
  <section class="expertise-section">
    <!-- 浮动气泡装饰 -->
    <div class="bubble-1"></div>
    <div class="bubble-2"></div>
    <div class="bubble-3"></div>

    <!-- 光线扫描效果 -->
    <div class="scan-line"></div>

    <!-- 几何图形装饰 -->
    <div class="geometric-shapes">
      <div class="shape-triangle"></div>
      <div class="shape-square"></div>
      <div class="shape-hexagon"></div>
    </div>

    <!-- 光点效果 -->
    <div class="light-dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>

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
              :src="businessMeetingImg"
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
  // 导入本地图片
  import businessMeetingImg from '../images/business-meeting.jpg'
</script>

<style scoped>
  .expertise-section {
    padding: 100px 0;
    background: linear-gradient(135deg, var(--tm-bg-secondary) 0%, var(--tm-bg-tertiary) 100%);
    position: relative;
    overflow: hidden;
  }

  /* 浮动气泡背景 */
  .expertise-section::before,
  .expertise-section::after,
  .bubble-1,
  .bubble-2,
  .bubble-3 {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: var(--tm-pri-0);
    opacity: 0.05;
    pointer-events: none;
  }

  .expertise-section::before {
    width: 300px;
    height: 300px;
    top: -150px;
    right: 10%;
    animation: bubble-float 25s ease-in-out infinite;
  }

  .expertise-section::after {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: 15%;
    animation: bubble-float 20s ease-in-out infinite reverse;
    animation-delay: -5s;
  }

  .bubble-1 {
    width: 150px;
    height: 150px;
    top: 30%;
    left: 5%;
    background: var(--tm-pri-1);
    opacity: 0.04;
    animation: bubble-float 30s ease-in-out infinite;
    animation-delay: -10s;
  }

  .bubble-2 {
    width: 100px;
    height: 100px;
    top: 60%;
    right: 8%;
    background: var(--tm-pri-2);
    opacity: 0.06;
    animation: bubble-float 22s ease-in-out infinite reverse;
    animation-delay: -15s;
  }

  .bubble-3 {
    width: 180px;
    height: 180px;
    bottom: 20%;
    right: 25%;
    background: var(--tm-pri-0);
    opacity: 0.03;
    animation: bubble-float 28s ease-in-out infinite;
    animation-delay: -7s;
  }

  /* 光线扫描效果 */
  .scan-line {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--tm-pri-0-rgb), 0.1) 50%,
      transparent 100%
    );
    animation: scan 8s linear infinite;
    pointer-events: none;
  }

  /* 几何图形装饰 */
  .geometric-shapes {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .shape-triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 87px solid var(--tm-pri-0);
    opacity: 0.05;
    top: 20%;
    right: 15%;
    animation: shape-rotate 20s linear infinite;
  }

  .shape-square {
    position: absolute;
    width: 80px;
    height: 80px;
    background: var(--tm-pri-1);
    opacity: 0.04;
    bottom: 30%;
    left: 10%;
    animation: shape-pulse 15s ease-in-out infinite;
    transform: rotate(45deg);
  }

  .shape-hexagon {
    position: absolute;
    width: 100px;
    height: 55px;
    background: var(--tm-pri-2);
    opacity: 0.03;
    top: 50%;
    left: 50%;
    animation: shape-float 18s ease-in-out infinite;
  }

  .shape-hexagon::before,
  .shape-hexagon::after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
  }

  .shape-hexagon::before {
    bottom: 100%;
    border-bottom: 28px solid var(--tm-pri-2);
  }

  .shape-hexagon::after {
    top: 100%;
    border-top: 28px solid var(--tm-pri-2);
  }

  /* 光点效果 */
  .light-dots {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .dot {
    position: absolute;
    width: 3px;
    height: 3px;
    background: var(--tm-pri-0);
    border-radius: 50%;
    opacity: 0;
    animation: dot-blink 4s ease-in-out infinite;
  }

  .dot:nth-child(1) {
    top: 10%;
    left: 20%;
    animation-delay: 0s;
  }
  .dot:nth-child(2) {
    top: 30%;
    left: 80%;
    animation-delay: 0.5s;
  }
  .dot:nth-child(3) {
    top: 60%;
    left: 10%;
    animation-delay: 1s;
  }
  .dot:nth-child(4) {
    top: 80%;
    left: 60%;
    animation-delay: 1.5s;
  }
  .dot:nth-child(5) {
    top: 45%;
    left: 40%;
    animation-delay: 2s;
  }
  .dot:nth-child(6) {
    top: 70%;
    left: 90%;
    animation-delay: 2.5s;
  }
  .dot:nth-child(7) {
    top: 25%;
    left: 50%;
    animation-delay: 3s;
  }
  .dot:nth-child(8) {
    top: 90%;
    left: 30%;
    animation-delay: 3.5s;
  }

  /* 深色模式调整 */
  .dark .expertise-section {
    background: linear-gradient(135deg, var(--tm-bg-primary) 0%, var(--tm-bg-secondary) 100%);
  }

  .dark .expertise-section::before,
  .dark .expertise-section::after,
  .dark .bubble-1,
  .dark .bubble-2,
  .dark .bubble-3 {
    opacity: 0.03;
  }

  .dark .scan-line {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--tm-pri-0-rgb), 0.05) 50%,
      transparent 100%
    );
  }

  .dark .shape-triangle,
  .dark .shape-square,
  .dark .shape-hexagon {
    opacity: 0.02;
  }

  /* 动画定义 */
  @keyframes bubble-float {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(50px, -30px) scale(1.1);
    }
    50% {
      transform: translate(-30px, 50px) scale(0.9);
    }
    75% {
      transform: translate(30px, 30px) scale(1.05);
    }
  }

  @keyframes scan {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  @keyframes shape-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes shape-pulse {
    0%,
    100% {
      transform: rotate(45deg) scale(1);
    }
    50% {
      transform: rotate(45deg) scale(1.2);
    }
  }

  @keyframes shape-float {
    0%,
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    33% {
      transform: translate(-30%, -70%) rotate(120deg);
    }
    66% {
      transform: translate(-70%, -30%) rotate(240deg);
    }
  }

  @keyframes dot-blink {
    0%,
    100% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.5);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
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

  /* 深色模式下调整 */
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
