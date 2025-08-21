<template>
  <div class="consultation">
    <!-- 第一屏: 预约表单 -->
    <ConsultationForm />

    <!-- 第二屏: 联系方式 -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
  import ConsultationForm from './Components/ConsultationForm.vue'
  import ContactSection from './Components/ContactSection.vue'

  // 设置页面使用默认布局
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: '预约咨询 - 精英人才解决方案',
    meta: [
      {
        name: 'description',
        content: '与我们的专家预约免费咨询，探讨您的人才需求和解决方案。',
      },
    ],
  })
</script>

<style scoped>
  .consultation {
    position: relative;
    width: 100%;
  }

  /* 手机端减少组件之间的间距 */
  @media (max-width: 768px) {
    .consultation > * + * {
      margin-top: -20px; /* 负值边距让组件更紧密 */
    }
  }
</style>
