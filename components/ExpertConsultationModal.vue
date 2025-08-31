const handleSubmit = async () => { isSubmitting.value = true try { const submitData = {
...formData.value, formType: 'expert-consultation', timestamp: new Date().toISOString() }
console.log('提交数据:', submitData) const response = await fetch(
'https://script.google.com/macros/s/AKfycbwOO_9GMN6meEswgGhLuKguVqXPwY3tbaVlhEGiB3cEZFkRSxV0-B6xcAtdFmRpnSV73w/exec',
{ method: 'POST', headers: { 'Content-Type': 'text/plain', }, body: JSON.stringify(submitData), } )
console.log('响应状态:', response.status) console.log('响应头:', response.headers) //
检查响应是否成功 if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`) }
const result = await response.json() console.log('响应结果:', result) if (result.success) {
alert('Thank you for your inquiry! Our expert will contact you within 24 hours.') closeModal() }
else { throw new Error(result.error || 'Submission was not successful') } } catch (error) {
console.error('提交表单详细错误:', error) console.error('错误类型:', error.constructor.name)
console.error('错误消息:', error.message) // 更详细的错误提示 let errorMessage = 'Submission failed.
' if (error.message.includes('HTTP error')) { errorMessage += 'Server connection issue. ' } else if
(error.message.includes('JSON')) { errorMessage += 'Data format issue. ' } else if
(error.message.includes('Network')) { errorMessage += 'Network connection issue. ' } errorMessage +=
'Please try again or contact us directly at +971 55 829 6351.' alert(errorMessage) } finally {
isSubmitting.value = false } }
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

      <!-- 标题区域 -->
      <div class="modal-header">
        <h3 class="modal-title">Expert Consultation</h3>
        <p class="modal-subtitle">
          Fill out your basic information and our professional consultant will contact you within 24
          hours
        </p>
      </div>

      <!-- 表单区域 -->
      <form
        class="consultation-form"
        @submit.prevent="handleSubmit"
      >
        <!-- 第一行：姓名 -->
        <div class="form-row">
          <div class="form-group">
            <label
              for="firstName"
              class="form-label"
            >
              First Name
              <span class="required">*</span>
            </label>
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              class="form-input"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div class="form-group">
            <label
              for="lastName"
              class="form-label"
            >
              Last Name
              <span class="required">*</span>
            </label>
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              class="form-input"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <!-- 第二行：邮箱和电话 -->
        <div class="form-row">
          <div class="form-group">
            <label
              for="email"
              class="form-label"
            >
              Email Address
              <span class="required">*</span>
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="form-input"
              placeholder="your.email@company.com"
              required
            />
          </div>
          <div class="form-group">
            <label
              for="phone"
              class="form-label"
            >
              Phone Number
              <span class="required">*</span>
            </label>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              class="form-input"
              placeholder="+971 55 123 4567"
              required
            />
          </div>
        </div>

        <!-- 第三行：公司和地址 -->
        <div class="form-row">
          <div class="form-group">
            <label
              for="company"
              class="form-label"
            >
              Company Name
              <span class="required">*</span>
            </label>
            <input
              id="company"
              v-model="formData.company"
              type="text"
              class="form-input"
              placeholder="Your company name"
              required
            />
          </div>
          <div class="form-group">
            <label
              for="location"
              class="form-label"
            >
              Location
              <span class="required">*</span>
            </label>
            <input
              id="location"
              v-model="formData.location"
              type="text"
              class="form-input"
              placeholder="Dubai, UAE"
              required
            />
          </div>
        </div>

        <!-- 咨询描述 -->
        <div class="form-row">
          <div class="form-group full-width">
            <label
              for="inquiry"
              class="form-label"
            >
              Consultation Inquiry
            </label>
            <textarea
              id="inquiry"
              v-model="formData.inquiry"
              class="form-textarea"
              rows="3"
              placeholder="Please briefly describe your consultation needs..."
              maxlength="300"
            ></textarea>
            <div class="char-counter">{{ formData.inquiry.length }}/300 characters</div>
          </div>
        </div>

        <!-- 提交按钮 -->
        <div class="form-actions">
          <button
            type="button"
            class="cancel-button"
            @click="closeModal"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="submit-button"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Submit Request</span>
            <span
              v-else
              class="loading"
            >
              <div class="spinner"></div>
              Processing...
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'

  const props = defineProps<{
    isVisible: boolean
  }>()

  const emit = defineEmits<{
    close: []
  }>()

  const isSubmitting = ref(false)

  const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    inquiry: '',
  })

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
    resetForm()
  }

  const resetForm = () => {
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      location: '',
      inquiry: '',
    }
  }

  const handleSubmit = async () => {
    isSubmitting.value = true

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwOO_9GMN6meEswgGhLuKguVqXPwY3tbaVlhEGiB3cEZFkRSxV0-B6xcAtdFmRpnSV73w/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify({
            ...formData.value,
            formType: 'expert-consultation', // 标识这是专家咨询表单
            timestamp: new Date().toISOString(),
          }),
        }
      )

      const result = await response.json()

      if (result.success) {
        alert('Thank you for your inquiry! Our expert will contact you within 24 hours.')
        closeModal()
      } else {
        throw new Error(result.error || 'Unknown error')
      }
    } catch (error) {
      console.error('提交表单出错:', error)
      alert('Submission failed. Please try again or contact us directly.')
    } finally {
      isSubmitting.value = false
    }
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
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--tm-bd-light);
  }

  .close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    border: none;
    background: var(--tm-bg-secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--tm-txt-secondary);
    transition: all 0.3s ease;
    z-index: 1;
  }

  .close-button:hover {
    background: var(--tm-bg-active);
    color: var(--tm-txt-primary);
  }

  /* 标题区域 */
  .modal-header {
    padding: 32px 32px 24px;
    text-align: center;
    border-bottom: 1px solid var(--tm-bd-light);
  }

  .modal-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 8px;
  }

  .modal-subtitle {
    font-size: 0.95rem;
    color: var(--tm-txt-secondary);
    line-height: 1.5;
  }

  /* 表单样式 */
  .consultation-form {
    padding: 24px 32px 32px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group.full-width {
    grid-column: 1 / -1;
  }

  .form-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 6px;
  }

  .required {
    color: #ef4444;
  }

  .form-input,
  .form-textarea {
    padding: 10px 14px;
    font-size: 0.95rem;
    border: 1px solid var(--tm-bd-light);
    border-radius: 8px;
    background: var(--tm-bg-primary);
    color: var(--tm-txt-primary);
    transition: all 0.3s ease;
  }

  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: var(--tm-pri-0);
    box-shadow: 0 0 0 3px rgba(var(--tm-pri-0-rgb), 0.1);
  }

  .form-textarea {
    resize: vertical;
    min-height: 70px;
  }

  .char-counter {
    font-size: 0.75rem;
    color: var(--tm-txt-secondary);
    text-align: right;
    margin-top: 4px;
  }

  /* 按钮区域 */
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--tm-bd-light);
  }

  .cancel-button,
  .submit-button {
    padding: 10px 24px;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  .cancel-button {
    color: var(--tm-txt-secondary);
    background: var(--tm-bg-secondary);
    border: 1px solid var(--tm-bd-light);
  }

  .cancel-button:hover {
    background: var(--tm-bg-active);
    color: var(--tm-txt-primary);
  }

  .submit-button {
    color: white;
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    box-shadow: 0 4px 20px rgba(var(--tm-pri-0-rgb), 0.3);
  }

  .submit-button:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 25px rgba(var(--tm-pri-0-rgb), 0.4);
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* 深色模式 */
  .dark .modal-content {
    background: var(--tm-bg-secondary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .modal-header {
    border-color: var(--tm-bd-secondary);
  }

  .dark .form-input,
  .dark .form-textarea {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .form-actions {
    border-color: var(--tm-bd-secondary);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .modal-overlay {
      padding: 16px;
    }

    .modal-content {
      max-height: 95vh;
    }

    .modal-header {
      padding: 24px 20px 20px;
    }

    .modal-title {
      font-size: 1.5rem;
    }

    .consultation-form {
      padding: 20px;
    }

    .form-row {
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 12px;
    }

    .form-actions {
      flex-direction: column;
    }

    .cancel-button,
    .submit-button {
      width: 100%;
      padding: 12px 24px;
    }
  }

  @media (max-width: 480px) {
    .modal-header {
      padding: 20px 16px 16px;
    }

    .modal-title {
      font-size: 1.25rem;
    }

    .consultation-form {
      padding: 16px;
    }

    .form-input,
    .form-textarea {
      font-size: 16px; /* 防止iOS自动缩放 */
    }
  }
</style>
