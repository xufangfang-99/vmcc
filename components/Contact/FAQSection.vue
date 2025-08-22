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

      <!-- 底部 CTA - 全新卡片设计 -->
      <div class="cta-wrapper">
        <div class="cta-card">
          <div class="cta-pattern"></div>
          <div class="cta-content">
            <h3 class="cta-title">Still Have Questions?</h3>
            <p class="cta-subtitle">
              Our professional consultants are ready to provide personalized answers
            </p>
            <div class="cta-buttons">
              <button class="cta-button primary">
                <span>Consult an Expert</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
              <button class="cta-button secondary">
                <span>Schedule a Call</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
              </button>
            </div>
          </div>
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

  /* 底部 CTA - 全新卡片设计 */
  .cta-wrapper {
    margin-top: 80px;
  }

  .cta-card {
    position: relative;
    background: var(--tm-bg-primary);
    border-radius: 24px;
    padding: 60px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--tm-bd-light);
    overflow: hidden;
  }

  /* 装饰图案 */
  .cta-pattern {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    opacity: 0.1;
    background:
      radial-gradient(circle at 30% 30%, var(--tm-pri-0) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, var(--tm-pri-1) 0%, transparent 50%);
    transform: translate(50%, -50%);
  }

  .cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--tm-txt-primary);
    margin-bottom: 16px;
  }

  .cta-subtitle {
    font-size: 1.25rem;
    color: var(--tm-txt-secondary);
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .cta-button {
    padding: 16px 32px;
    border-radius: 50px;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .cta-button svg {
    transition: transform 0.3s ease;
  }

  .cta-button.primary {
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    color: white;
    box-shadow: 0 4px 20px rgba(var(--tm-pri-0-rgb), 0.3);
  }

  .cta-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(var(--tm-pri-0-rgb), 0.4);
  }

  .cta-button.primary:hover svg {
    transform: translateX(4px);
  }

  .cta-button.secondary {
    background: var(--tm-bg-secondary);
    color: var(--tm-pri-0);
    border: 2px solid var(--tm-bd-light);
  }

  .cta-button.secondary:hover {
    background: var(--tm-bg-active);
    border-color: var(--tm-pri-0);
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

  .dark .faq-item:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .dark .faq-item.active {
    border-color: var(--tm-pri-0);
  }

  .dark .cta-card {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  .dark .cta-pattern {
    opacity: 0.05;
  }

  .dark .cta-button.secondary {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .cta-button.secondary:hover {
    background: var(--tm-bg-active);
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

    .cta-wrapper {
      margin-top: 40px;
    }

    .cta-card {
      padding: 40px 24px;
    }

    .cta-pattern {
      width: 200px;
      height: 200px;
    }

    .cta-title {
      font-size: 1.75rem;
      margin-bottom: 12px;
    }

    .cta-subtitle {
      font-size: 1rem;
      margin-bottom: 30px;
    }

    .cta-buttons {
      flex-direction: column;
      gap: 12px;
    }

    .cta-button {
      width: 100%;
      justify-content: center;
      padding: 14px 24px;
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

    .cta-card {
      padding: 30px 20px;
      border-radius: 16px;
    }

    .cta-title {
      font-size: 1.5rem;
    }

    .cta-subtitle {
      font-size: 0.9rem;
      margin-bottom: 24px;
    }

    .cta-button {
      font-size: 0.95rem;
      padding: 12px 20px;
    }

    .cta-button svg {
      width: 18px;
      height: 18px;
    }
  }
</style>
