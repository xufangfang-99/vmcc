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
    title: 'Contact Victor Meridian Management Consultancies - Schedule Free Consultation',
    meta: [
      {
        name: 'description',
        content:
          'Victor Meridian Management Consultancies. Providing elite talent solutions for forward-thinking organizations. Contact us to connect exceptional professionals with industry-leading companies worldwide.',
      },
      {
        name: 'keywords',
        content:
          'contact VMMC, Victor Meridian Management Consultancies, talent solutions consultation, executive search consultation',
      },
      {
        property: 'og:title',
        content: 'Contact Victor Meridian Management Consultancies',
      },
      {
        property: 'og:description',
        content:
          'Contact Victor Meridian Management Consultancies for elite talent solutions. Schedule a free consultation to discuss your recruitment needs.',
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
