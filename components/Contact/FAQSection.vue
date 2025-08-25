<template>
  <section class="py-100px bg-tm-bg-secondary dark:bg-tm-bg-primary">
    <div class="max-w-900px mx-auto px-5">
      <!-- 标题区域 -->
      <div class="text-center mb-60px">
        <h2 class="text-3rem font-300 text-tm-txt-primary mb-4">Frequently Asked Questions</h2>
        <p class="text-1.25rem text-tm-txt-secondary">
          Learn more about our services and processes
        </p>
      </div>

      <!-- FAQ 列表 -->
      <div class="mb-80px">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-12px mb-4 overflow-hidden transition-all duration-300 border border-tm-bd-light dark:border-tm-bd-secondary hover:shadow-lg"
          :class="{ '!border-tm-pri-0': activeIndex === index }"
        >
          <button
            class="w-full px-30px py-24px bg-transparent border-none text-left cursor-pointer flex justify-between items-center gap-5 transition-all duration-300"
            @click="toggleFAQ(index)"
          >
            <span class="text-1.125rem font-600 text-tm-txt-primary">
              {{ item.question }}
            </span>
            <svg
              class="flex-shrink-0 transition-transform duration-300 text-tm-pri-0 w-6 h-6"
              :class="{ 'rotate-180': activeIndex === index }"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div
            class="overflow-hidden transition-all duration-300"
            :style="{
              maxHeight: activeIndex === index ? '500px' : '0',
              opacity: activeIndex === index ? '1' : '0',
            }"
          >
            <div class="px-30px pb-24px">
              <p class="text-1rem text-tm-txt-secondary">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部 CTA -->
      <div
        class="relative bg-tm-bg-primary dark:bg-tm-bg-secondary rounded-24px p-60px shadow-lg dark:shadow-2xl border border-tm-bd-light dark:border-tm-bd-secondary overflow-hidden"
      >
        <!-- 简单的装饰 -->
        <div
          class="absolute top-0 right-0 w-300px h-300px opacity-10 dark:opacity-5 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div class="w-full h-full rounded-full bg-gradient-to-br from-tm-pri-0 to-tm-pri-1"></div>
        </div>

        <div class="relative z-1 text-center">
          <h3 class="text-2.5rem font-700 text-tm-txt-primary mb-4">Still Have Questions?</h3>
          <p class="text-1.25rem text-tm-txt-secondary mb-40px max-w-600px mx-auto">
            Our professional consultants are ready to provide personalized answers
          </p>
          <div class="flex justify-center gap-5 flex-wrap">
            <button
              class="px-32px py-16px rounded-50px text-1.05rem font-600 cursor-pointer transition-all duration-300 border-none inline-flex items-center gap-2 bg-gradient-to-r from-tm-pri-0 to-tm-pri-1 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Consult an Expert</span>
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
            <button
              class="px-32px py-16px rounded-50px text-1.05rem font-600 cursor-pointer transition-all duration-300 inline-flex items-center gap-2 bg-tm-bg-secondary dark:bg-tm-bg-primary text-tm-pri-0 border-2 border-tm-bd-light dark:border-tm-bd-secondary hover:bg-tm-bg-active dark:hover:bg-tm-bg-active hover:border-tm-pri-0 hover:-translate-y-0.5"
            >
              <span>Schedule a Call</span>
              <svg
                class="w-5 h-5"
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
  /* 自定义阴影 */
  .shadow-lg {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  }

  .dark .shadow-lg {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  .shadow-xl {
    box-shadow: 0 4px 20px rgba(var(--tm-pri-0-rgb), 0.3);
  }

  .hover\:shadow-xl:hover {
    box-shadow: 0 8px 30px rgba(var(--tm-pri-0-rgb), 0.4);
  }

  /* 渐变背景 */
  .bg-gradient-to-r {
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
  }

  .bg-gradient-to-br {
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
  }

  /* FAQ答案文本样式 */
  .px-30px p {
    margin: 0;
    word-wrap: break-word;
    white-space: normal;
  }

  /* 响应式 */
  @media (max-width: 768px) {
    section {
      padding: 40px 0;
    }

    .mb-60px {
      margin-bottom: 30px;
    }

    .mb-80px {
      margin-bottom: 40px;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    .text-1\.25rem {
      font-size: 1rem;
    }

    .px-30px {
      padding-left: 20px;
      padding-right: 20px;
    }

    .py-24px {
      padding-top: 16px;
      padding-bottom: 16px;
    }

    .p-60px {
      padding: 40px 24px;
    }

    .mb-40px {
      margin-bottom: 30px;
    }

    button {
      width: 100%;
    }

    .flex-wrap {
      flex-direction: column;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    .text-1\.125rem {
      font-size: 0.95rem;
    }

    .text-1rem {
      font-size: 0.85rem;
    }

    .text-1\.05rem {
      font-size: 0.95rem;
    }

    .px-32px {
      padding-left: 20px;
      padding-right: 20px;
    }

    .py-16px {
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
</style>
