<template>
  <section class="faq-section">
    <div class="container">
      <!-- 标题区域 -->
      <div class="section-header">
        <h2 class="section-title">常见问题</h2>
        <p class="section-subtitle">了解关于我们服务和流程的常见问题解答</p>
      </div>

      <!-- FAQ 列表 -->
      <div class="faq-container">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item"
          :class="{ active: activeIndex === index }"
        >
          <button
            class="faq-question"
            @click="toggleFAQ(index)"
          >
            <span>{{ item.question }}</span>
            <svg
              class="faq-icon"
              :class="{ rotate: activeIndex === index }"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div
            class="faq-answer"
            :class="{ show: activeIndex === index }"
          >
            <div class="faq-answer-content">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- 底部 CTA -->
      <div class="faq-cta">
        <h3 class="cta-title">还有其他问题？</h3>
        <p class="cta-subtitle">我们的专业顾问随时准备为您提供个性化的解答</p>
        <div class="cta-buttons">
          <button class="cta-button primary">咨询专家</button>
          <button class="cta-button secondary">预约通话</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // 当前展开的FAQ索引
  const activeIndex = ref<number | null>(null)

  // FAQ数据
  const faqItems = ref([
    {
      question: '猎头搜寻流程通常需要多长时间？',
      answer:
        '我们的高管搜寻流程通常需要8-12周，从初步需求沟通到最终候选人入职。具体时间取决于职位的复杂程度、市场状况和特定要求。在整个过程中，我们会定期向客户汇报进展，保持密切沟通。对于紧急需求，我们可以启动快速通道，在4-6周内完成招聘。',
    },
    {
      question: '你们专注于哪些行业领域？',
      answer:
        '我们服务于50+行业领域，包括科技、金融、医疗健康、制造业、零售、能源和专业服务等。我们的全球团队在传统行业和新兴领域都拥有深厚的专业知识，能够为任何行业需求提供专业化的人才解决方案。特别在数字化转型、人工智能、新能源等前沿领域，我们拥有独特的人才网络。',
    },
    {
      question: '你们为企业和个人都提供服务吗？',
      answer:
        '是的，我们既为寻求人才解决方案的企业客户服务，也为寻求职业发展的个人提供支持，包括职业规划咨询、移民服务和海外教育机会。这种双向服务模式让我们能够深入理解人才市场的供需两端，创造更好的匹配效果。我们相信，只有真正理解候选人的职业诉求，才能为企业找到最合适的人才。',
    },
    {
      question: '你们的人才配置成功率是多少？',
      answer:
        '我们保持着92%的配置成功率和95%的客户满意度。更重要的是，我们推荐的候选人在入职后的12个月留任率高达96%。这得益于我们严格的评估流程、深入的文化匹配分析，以及入职后的持续跟进服务。我们不仅关注技能匹配，更注重候选人与企业文化的契合度。',
    },
    {
      question: '如何确保搜寻过程的保密性？',
      answer:
        '保密性是我们工作的基石。我们采用多层保密措施：签署严格的保密协议、使用加密通信系统、限制信息访问权限、采用代号系统处理敏感职位。我们的顾问都经过专业的保密培训，确保客户信息和候选人隐私得到最高级别的保护。对于特别敏感的搜寻项目，我们提供专属团队和独立的工作环境。',
    },
    {
      question: 'VMMC与其他猎头公司有什么不同？',
      answer:
        '我们的独特优势在于：1) 全球化网络覆盖100+城市，能够进行跨境人才搜寻；2) 行业专精，每个顾问平均拥有10年以上特定行业经验；3) 端到端服务，从人才战略咨询到入职后辅导；4) 创新技术，运用AI和大数据提升搜寻效率；5) 成果导向，提供6个月的人才保证期。我们不仅是猎头，更是您的战略人才伙伴。',
    },
    {
      question: '你们为初创企业提供服务吗？',
      answer:
        '当然！我们特别设立了初创企业服务部门，理解初创公司的独特需求。我们提供灵活的付费方案、快速响应机制，以及专门的创业人才库。我们帮助过500+初创企业构建核心团队，从联合创始人到关键技术人才。针对初创企业预算限制，我们还提供股权合作等创新合作模式。',
    },
    {
      question: '对于紧急招聘需求，你们能多快响应？',
      answer:
        '我们提供24小时快速响应服务。收到紧急需求后，我们会在2小时内安排专属顾问对接，24小时内提供初步人才方案，72小时内推荐首批候选人。我们维护着随时可激活的人才储备库，涵盖各行业的高端人才。对于极其紧急的需求，我们可以调动全球资源，确保在最短时间内找到合适人选。',
    },
  ])

  // 切换FAQ展开/收起
  const toggleFAQ = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index
  }
</script>

<style scoped>
  .faq-section {
    padding: 100px 0;
    background: var(--tm-bg-secondary);
  }

  .container {
    max-width: 900px;
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

  /* FAQ 容器 */
  .faq-container {
    margin-bottom: 80px;
  }

  /* FAQ 项目 */
  .faq-item {
    background: var(--tm-bg-primary);
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid var(--tm-bd-light);
  }

  .faq-item:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .faq-item.active {
    border-color: var(--tm-pri-0);
  }

  /* 问题按钮 */
  .faq-question {
    width: 100%;
    padding: 24px 30px;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    transition: all 0.3s ease;
  }

  .faq-question span {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    line-height: 1.5;
  }

  .faq-icon {
    flex-shrink: 0;
    transition: transform 0.3s ease;
    color: var(--tm-pri-0);
  }

  .faq-icon.rotate {
    transform: rotate(180deg);
  }

  /* 答案区域 */
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .faq-answer.show {
    max-height: 500px;
  }

  .faq-answer-content {
    padding: 0 30px 24px;
    font-size: 1rem;
    line-height: 1.8;
    color: var(--tm-txt-secondary);
  }

  /* 底部 CTA */
  .faq-cta {
    text-align: center;
    padding: 60px;
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    border-radius: 20px;
    color: white;
  }

  .cta-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .cta-subtitle {
    font-size: 1.125rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  .cta-button {
    padding: 14px 32px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .cta-button.primary {
    background: white;
    color: var(--tm-pri-0);
    border-color: white;
  }

  .cta-button.primary:hover {
    background: transparent;
    color: white;
    transform: translateY(-2px);
  }

  .cta-button.secondary {
    background: transparent;
    color: white;
    border-color: white;
  }

  .cta-button.secondary:hover {
    background: white;
    color: var(--tm-pri-0);
    transform: translateY(-2px);
  }

  /* 深色模式 */
  .dark .faq-section {
    background: var(--tm-bg-primary);
  }

  .dark .faq-item {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .faq-item.active {
    border-color: var(--tm-pri-0);
  }

  /* 响应式 - 减少手机端留白 */
  @media (max-width: 768px) {
    .faq-section {
      padding: 40px 0;
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
    }

    .faq-container {
      margin-bottom: 40px;
    }

    .faq-item {
      margin-bottom: 10px;
    }

    .faq-question {
      padding: 16px 20px;
    }

    .faq-question span {
      font-size: 1rem;
    }

    .faq-answer-content {
      padding: 0 20px 16px;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .faq-cta {
      padding: 30px 20px;
    }

    .cta-title {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    .cta-subtitle {
      font-size: 1rem;
      margin-bottom: 20px;
    }

    .cta-buttons {
      flex-direction: column;
      gap: 12px;
    }

    .cta-button {
      width: 100%;
      padding: 12px 24px;
    }
  }

  /* 小屏手机 */
  @media (max-width: 480px) {
    .faq-section {
      padding: 30px 0;
    }

    .section-header {
      margin-bottom: 25px;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .section-subtitle {
      font-size: 0.9rem;
    }

    .faq-question {
      padding: 14px 16px;
    }

    .faq-question span {
      font-size: 0.95rem;
    }

    .faq-icon {
      width: 20px;
      height: 20px;
    }

    .faq-answer-content {
      padding: 0 16px 14px;
      font-size: 0.85rem;
    }

    .faq-cta {
      padding: 25px 16px;
      border-radius: 16px;
    }

    .cta-title {
      font-size: 1.25rem;
    }

    .cta-subtitle {
      font-size: 0.9rem;
    }
  }
</style>
