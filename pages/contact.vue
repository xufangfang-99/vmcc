<template>
  <div class="consultation">
    <!-- Hero区域: 页面介绍 -->
    <ConsultationHero />

    <!-- 第一屏: 预约表单 -->
    <ConsultationForm />

    <!-- 第二屏: 联系方式 -->
    <ContactSection />

    <!-- 第三屏: 常见问题 -->
    <FAQSection />
    <!-- 第四屏: 页脚 -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
  import ConsultationHero from '~/components/Contact/ConsultationHero.vue'
  import ConsultationForm from '~/components/Contact/ConsultationForm.vue'
  import ContactSection from '~/components/Contact/ContactSection.vue'
  import FAQSection from '~/components/Contact/FAQSection.vue'
  import FooterSection from '~/components/Home/FooterSection.vue'
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
</style>
