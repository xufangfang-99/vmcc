<!-- pages/industries/[industry].vue -->
<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)] flex items-center justify-center">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <!-- 图标 -->
      <div class="mb-8">
        <div
          class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] flex items-center justify-center"
        >
          <svg
            class="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
      </div>

      <!-- 主标题 -->
      <h1 class="text-4xl md:text-5xl font-light mb-6 text-[var(--tm-txt-primary)]">
        {{ industryTitle }} Solutions
      </h1>

      <!-- 副标题 -->
      <p class="text-xl md:text-2xl text-[var(--tm-txt-secondary)] mb-8 max-w-2xl mx-auto">
        We're crafting specialized talent solutions for the
        {{ industryTitle.toLowerCase() }} industry
      </p>

      <!-- 状态信息 -->
      <div class="bg-[var(--tm-bg-secondary)] rounded-2xl p-8 mb-8">
        <div class="flex items-center justify-center mb-4">
          <div class="w-3 h-3 bg-[var(--tm-accent-primary)] rounded-full animate-pulse mr-3"></div>
          <span class="text-[var(--tm-accent-primary)] font-medium">Coming Soon</span>
        </div>

        <p class="text-[var(--tm-txt-secondary)] mb-6">
          Our team is developing comprehensive {{ industryTitle.toLowerCase() }} recruitment and
          consulting services. In the meantime, our general talent solutions can support your
          immediate needs.
        </p>

        <!-- 预期功能 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div class="p-4 bg-[var(--tm-bg-primary)] rounded-lg">
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Industry Expertise</h4>
            <p class="text-[var(--tm-txt-secondary)]">
              Specialized knowledge in {{ industryTitle.toLowerCase() }} sector
            </p>
          </div>
          <div class="p-4 bg-[var(--tm-bg-primary)] rounded-lg">
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Key Roles</h4>
            <p class="text-[var(--tm-txt-secondary)]">Critical positions we can fill</p>
          </div>
          <div class="p-4 bg-[var(--tm-bg-primary)] rounded-lg">
            <h4 class="font-semibold text-[var(--tm-txt-primary)] mb-2">Success Stories</h4>
            <p class="text-[var(--tm-txt-secondary)]">Case studies and client testimonials</p>
          </div>
        </div>
      </div>

      <!-- CTA 按钮 -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          class="px-8 py-4 bg-gradient-to-r from-[var(--tm-accent-primary)] to-[var(--tm-accent-secondary)] text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          @click="showConsultationModal = true"
        >
          Discuss Your {{ industryTitle }} Needs
        </button>

        <NuxtLink
          to="/services"
          class="px-8 py-4 border-2 border-[var(--tm-accent-primary)] text-[var(--tm-accent-primary)] rounded-full font-medium hover:bg-[var(--tm-accent-primary)] hover:text-white transition-all duration-300 no-underline"
        >
          View General Services
        </NuxtLink>

        <NuxtLink
          to="/industries/oil-gas"
          class="text-[var(--tm-txt-secondary)] underline hover:text-[var(--tm-accent-primary)] transition-colors"
        >
          See Our Oil & Gas Solutions
        </NuxtLink>
      </div>

      <!-- 通知订阅 -->
      <div class="mt-12 p-6 bg-[var(--tm-bg-feature)] rounded-xl">
        <h3 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-3">
          Get Notified When {{ industryTitle }} Services Launch
        </h3>
        <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            v-model="notifyEmail"
            type="email"
            placeholder="your@email.com"
            class="flex-1 px-4 py-2 rounded-lg border border-[var(--tm-bd-light)] bg-[var(--tm-bg-primary)] text-[var(--tm-txt-primary)]"
          />
          <button
            class="px-6 py-2 bg-[var(--tm-accent-primary)] text-white rounded-lg hover:bg-[var(--tm-accent-secondary)] transition-colors"
            @click="subscribeNotification"
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>

    <!-- 专家咨询模态框 -->
    <ExpertConsultationModal
      :is-visible="showConsultationModal"
      @close="showConsultationModal = false"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'

  const route = useRoute()
  const showConsultationModal = ref(false)
  const notifyEmail = ref('')

  // 从路由参数获取行业名称并格式化
  const industryTitle = computed(() => {
    const industry = route.params.industry as string
    if (!industry) return 'Industry'

    return industry
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' & ')
  })

  // 设置页面元信息
  useHead({
    title: `${industryTitle.value} Solutions - Coming Soon | VMMC`,
    meta: [
      {
        name: 'description',
        content: `Specialized talent solutions for ${industryTitle.value.toLowerCase()} industry are coming soon. Contact us for immediate support.`,
      },
    ],
  })

  // 订阅通知功能
  const subscribeNotification = async () => {
    if (!notifyEmail.value) return

    try {
      // 这里可以调用API保存邮箱
      alert(`Thank you! We'll notify you when ${industryTitle.value} services are ready.`)
      notifyEmail.value = ''
    } catch (error) {
      alert('Sorry, there was an error. Please try again.')
    }
  }
</script>

<style scoped>
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
