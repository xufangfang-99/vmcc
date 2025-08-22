<template>
  <section class="faq-section">
    <div class="container">
      <!-- 标题区域 -->
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Learn more about our services and processes</p>
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
        <h3 class="cta-title">Still Have Questions?</h3>
        <p class="cta-subtitle">
          Our professional consultants are ready to provide personalized answers
        </p>
        <div class="cta-buttons">
          <button class="cta-button primary">Consult an Expert</button>
          <button class="cta-button secondary">Schedule a Call</button>
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
      question: 'How long does the executive search process typically take?',
      answer:
        'Our executive search process typically takes 8-12 weeks, from initial requirement discussion to final candidate placement. The specific timeline depends on the complexity of the position, market conditions, and specific requirements. Throughout the process, we provide regular progress updates to maintain close communication. For urgent needs, we can activate fast-track channels to complete recruitment within 4-6 weeks.',
    },
    {
      question: 'Which industries do you specialize in?',
      answer:
        'We serve 50+ industry sectors, including technology, finance, healthcare, manufacturing, retail, energy, and professional services. Our global team possesses deep expertise in both traditional industries and emerging fields, enabling us to provide specialized talent solutions for any industry need. We have particularly unique talent networks in cutting-edge areas such as digital transformation, artificial intelligence, and renewable energy.',
    },
    {
      question: 'Do you provide services for both companies and individuals?',
      answer:
        "Yes, we serve both corporate clients seeking talent solutions and individuals pursuing career development, including career planning consultation, immigration services, and overseas education opportunities. This dual-service model allows us to deeply understand both sides of the talent market, creating better matches. We believe that only by truly understanding candidates' career aspirations can we find the most suitable talent for companies.",
    },
    {
      question: 'What is your talent placement success rate?',
      answer:
        'We maintain a 92% placement success rate and 95% client satisfaction rate. More importantly, candidates we recommend have a 96% retention rate after 12 months of employment. This is due to our rigorous evaluation process, in-depth cultural fit analysis, and continuous post-placement support services. We focus not only on skill matching but also on the alignment between candidates and company culture.',
    },
    {
      question: 'How do you ensure confidentiality during the search process?',
      answer:
        'Confidentiality is the cornerstone of our work. We employ multi-layered security measures: signing strict confidentiality agreements, using encrypted communication systems, restricting information access permissions, and utilizing code systems for sensitive positions. All our consultants undergo professional confidentiality training to ensure the highest level of protection for client information and candidate privacy. For particularly sensitive search projects, we provide dedicated teams and isolated work environments.',
    },
    {
      question: 'What makes VMMC different from other recruitment firms?',
      answer:
        'Our unique advantages include: 1) Global network covering 100+ cities, enabling cross-border talent searches; 2) Industry specialization, with each consultant averaging 10+ years of specific industry experience; 3) End-to-end service, from talent strategy consulting to post-placement coaching; 4) Innovative technology, leveraging AI and big data to enhance search efficiency; 5) Results-oriented approach, offering a 6-month talent guarantee period. We are not just headhunters, but your strategic talent partners.',
    },
    {
      question: 'Do you provide services for startups?',
      answer:
        "Absolutely! We have a dedicated startup services department that understands the unique needs of emerging companies. We offer flexible payment plans, rapid response mechanisms, and access to specialized startup talent pools. We've helped 500+ startups build core teams, from co-founders to key technical talent. For budget-conscious startups, we also offer innovative collaboration models such as equity partnerships.",
    },
    {
      question: 'How quickly can you respond to urgent hiring needs?',
      answer:
        'We provide 24-hour rapid response service. Upon receiving urgent requirements, we arrange dedicated consultant liaison within 2 hours, provide initial talent solutions within 24 hours, and recommend first batch candidates within 72 hours. We maintain an always-ready talent reserve pool covering high-end professionals across various industries. For extremely urgent needs, we can mobilize global resources to ensure finding suitable candidates in the shortest possible time.',
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

  /* 底部 CTA - 浅色模式默认样式 */
  .faq-cta {
    text-align: center;
    padding: 60px;
    background: var(--tm-bg-active);
    border-radius: 20px;
    border: 1px solid var(--tm-bd-light);
    color: var(--tm-txt-primary);
  }

  .cta-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--tm-txt-primary);
  }

  .cta-subtitle {
    font-size: 1.125rem;
    margin-bottom: 30px;
    color: var(--tm-txt-secondary);
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
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    color: white;
    border: none;
    box-shadow: 0 4px 20px rgba(var(--tm-pri-0-rgb), 0.3);
  }

  .cta-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(var(--tm-pri-0-rgb), 0.4);
  }

  .cta-button.secondary {
    background: transparent;
    color: var(--tm-pri-0);
    border-color: var(--tm-pri-0);
  }

  .cta-button.secondary:hover {
    background: var(--tm-pri-0);
    color: white;
    transform: translateY(-2px);
  }

  /* 深色模式下的CTA样式 */
  .dark .faq-cta {
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    border-color: transparent;
    color: white;
  }

  .dark .cta-title {
    color: white;
  }

  .dark .cta-subtitle {
    color: rgba(255, 255, 255, 0.9);
  }

  .dark .cta-button.primary {
    background: white;
    color: var(--tm-pri-0);
    border-color: white;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
  }

  .dark .cta-button.primary:hover {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3);
  }

  .dark .cta-button.secondary {
    background: transparent;
    color: white;
    border-color: white;
  }

  .dark .cta-button.secondary:hover {
    background: white;
    color: var(--tm-pri-0);
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
