<template>
  <!-- 模态框背景遮罩 -->
  <div
    v-if="isVisible"
    class="modal-overlay"
    @click="closeModal"
  >
    <!-- 模态框内容 -->
    <div
      class="modal-content"
      @click.stop
    >
      <!-- 关闭按钮 -->
      <button
        class="close-button"
        @click="closeModal"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <!-- 嵌入完整的咨询表单 -->
      <div class="form-wrapper">
        <ConsultationFormContent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { watch } from 'vue'
  import ConsultationFormContent from '~/components/Contact/ConsultationFormContent.vue'

  const props = defineProps<{
    isVisible: boolean
  }>()

  const emit = defineEmits<{
    close: []
  }>()

  // 监听弹框显示状态，控制页面滚动
  watch(
    () => props.isVisible,
    (newValue) => {
      if (newValue) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }
  )

  const closeModal = () => {
    emit('close')
  }

  // 键盘事件处理
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.isVisible) {
      closeModal()
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'unset'
  })
</script>

<style scoped>
  /* 模态框样式 */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
  }

  .modal-content {
    background: var(--tm-bg-primary);
    border-radius: 16px;
    width: 100%;
    max-width: 1000px; /* 与原表单保持一致 */
    max-height: 95vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--tm-bd-light);
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border: none;
    background: var(--tm-bg-secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--tm-txt-secondary);
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .close-button:hover {
    background: var(--tm-bg-active);
    color: var(--tm-txt-primary);
  }

  .form-wrapper {
    width: 100%;
  }

  /* 深色模式 */
  .dark .modal-content {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .modal-overlay {
      padding: 16px;
    }

    .modal-content {
      max-height: 98vh;
      border-radius: 12px;
    }

    .close-button {
      top: 16px;
      right: 16px;
      width: 36px;
      height: 36px;
    }
  }

  @media (max-width: 480px) {
    .modal-overlay {
      padding: 8px;
    }

    .modal-content {
      border-radius: 8px;
    }
  }
</style>
