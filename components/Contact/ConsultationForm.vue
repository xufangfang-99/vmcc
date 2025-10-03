<template>
  <section class="consultation-section">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">Schedule a Free Consultation</h1>
        <p class="page-subtitle">
          Share your needs and let our experts craft the perfect solution for you
        </p>
      </div>

      <!-- 表单容器 -->
      <div class="form-container">
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
                placeholder="info@vmmcglobal.com"
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
                placeholder="+1 234 567 8900"
                required
              />
            </div>
          </div>

          <!-- 第三行：公司和职位 -->
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
                for="position"
                class="form-label"
              >
                Your Position
                <span class="required">*</span>
              </label>
              <input
                id="position"
                v-model="formData.position"
                type="text"
                class="form-input"
                placeholder="CEO, HR Director, etc."
                required
              />
            </div>
          </div>

          <!-- 第四行：服务和时间 -->
          <div class="form-row">
            <div class="form-group">
              <label
                for="service"
                class="form-label"
              >
                Service of Interest
                <span class="required">*</span>
              </label>
              <select
                id="service"
                v-model="formData.service"
                class="form-select"
                required
              >
                <option
                  value=""
                  disabled
                >
                  Select a service
                </option>
                <option value="executive-search">Executive Search</option>
                <option value="hr-outsourcing">HR Outsourcing</option>
                <option value="flexible-staffing">Flexible Staffing</option>
                <option value="immigration-services">Immigration Services</option>
                <option value="study-abroad">Study Abroad</option>
                <option value="organizational-performance">Organizational Performance</option>
              </select>
            </div>
            <div class="form-group">
              <label
                for="timeline"
                class="form-label"
              >
                Project Timeline
                <span class="required">*</span>
              </label>
              <select
                id="timeline"
                v-model="formData.timeline"
                class="form-select"
                required
              >
                <option
                  value=""
                  disabled
                >
                  Select timeline
                </option>
                <option value="immediate">Urgent (Within 1 week)</option>
                <option value="1-month">Within 1 month</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="planning">Planning only</option>
              </select>
            </div>
          </div>

          <!-- 第五行：预算（移除了首选联系方式） -->
          <div class="form-row">
            <div class="form-group">
              <label
                for="budget"
                class="form-label"
              >
                Budget Range
              </label>
              <select
                id="budget"
                v-model="formData.budget"
                class="form-select"
              >
                <option value="">Select budget range (Optional)</option>
                <option value="<50k">Less than $50k</option>
                <option value="50-100k">$50k - $100k</option>
                <option value="100-200k">$100k - $200k</option>
                <option value="200-500k">$200k - $500k</option>
                <option value=">500k">More than $500k</option>
              </select>
            </div>
            <div class="form-group">
              <label
                for="budget"
                class="form-label"
              >
                Team Size Needed
              </label>
              <select
                id="teamSize"
                v-model="formData.teamSize"
                class="form-select"
              >
                <option value="">Select team size</option>
                <option value="<50k">1-5 people</option>
                <option value="50-100k">6-15 people</option>
                <option value="100-200k">16-50 people</option>
                <option value="200-500k">51-100 people</option>
                <option value="200-500k">over 100 people</option>
                <option value=">500k">Consulting only</option>
              </select>
            </div>
          </div>

          <!-- 项目详情 -->
          <div class="form-row">
            <div class="form-group full-width">
              <label
                for="details"
                class="form-label"
              >
                Project Details
                <span class="required">*</span>
              </label>
              <textarea
                id="details"
                v-model="formData.details"
                class="form-textarea"
                rows="4"
                placeholder="Please describe your needs, challenges, or specific requirements..."
                maxlength="500"
                required
              ></textarea>
              <div class="char-counter">{{ formData.details.length }}/500 characters</div>
            </div>
          </div>

          <!-- 提交按钮 -->
          <div class="form-actions">
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
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isSubmitting = ref(false)

  const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    service: '',
    timeline: '',
    budget: '',
    teamSize: '',
    details: '',
    // 移除了 contactMethod 字段
  })

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
          body: JSON.stringify(formData.value),
        }
      )

      const result = await response.json()

      if (result.success) {
        alert('Thank you for your inquiry! We will contact you within 24 hours.')
        resetForm()
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

  const resetForm = () => {
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      service: '',
      timeline: '',
      budget: '',
      teamSize: '',
      details: '',
      // 移除了 contactMethod 重置
    }
  }
</script>

<style scoped>
  /* PC端优化 - 一屏显示 */
  .consultation-section {
    min-height: 100vh;
    background: var(--tm-bg-secondary);
    padding: 40px 0;
    display: flex;
    align-items: center;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  }

  /* 页面标题 - 减少间距 */
  .page-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .page-title {
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--tm-txt-primary);
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  .page-subtitle {
    font-size: 1.1rem;
    color: var(--tm-txt-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.4;
  }

  /* 表单容器 - 优化内边距 */
  .form-container {
    background: var(--tm-bg-primary);
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  /* 表单样式 - 优化间距 */
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
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
  .form-select,
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
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: var(--tm-pri-0);
    box-shadow: 0 0 0 3px rgba(var(--tm-pri-0-rgb), 0.1);
  }

  .form-textarea {
    resize: vertical;
    min-height: 80px;
  }

  .char-counter {
    font-size: 0.75rem;
    color: var(--tm-txt-secondary);
    text-align: right;
    margin-top: 4px;
  }

  /* 移除了 radio-group 相关样式 */

  .form-actions {
    margin-top: 30px;
    text-align: center;
  }

  .submit-button {
    padding: 14px 40px;
    font-size: 1.05rem;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(var(--tm-pri-0-rgb), 0.3);
  }

  .submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(var(--tm-pri-0-rgb), 0.4);
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .spinner {
    width: 18px;
    height: 18px;
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
  .dark .form-container {
    background: var(--tm-bg-secondary);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .dark .form-input,
  .dark .form-select,
  .dark .form-textarea {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  /* 手机端响应式 - 减少留白 */
  @media (max-width: 768px) {
    .consultation-section {
      padding: 20px 0 40px; /* 减少上下内边距 */
      min-height: auto;
    }

    .container {
      padding: 0 16px;
    }

    .page-header {
      margin-bottom: 20px; /* 减少标题下方间距 */
    }

    .page-title {
      font-size: 1.75rem;
      margin-bottom: 8px; /* 减少标题间距 */
    }

    .page-subtitle {
      font-size: 0.95rem;
      padding: 0 10px;
      line-height: 1.3; /* 减少行高 */
    }

    .form-container {
      padding: 20px 16px; /* 减少内边距 */
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
    }

    /* 单列布局 */
    .form-row {
      grid-template-columns: 1fr;
      gap: 14px; /* 减少行间距 */
      margin-bottom: 14px; /* 减少底部间距 */
    }

    .form-label {
      font-size: 0.8125rem;
      margin-bottom: 4px; /* 减少标签下方间距 */
    }

    /* 优化输入框 */
    .form-input,
    .form-select,
    .form-textarea {
      padding: 10px 12px; /* 减少内边距 */
      font-size: 16px; /* 防止iOS自动缩放 */
    }

    .form-textarea {
      min-height: 70px; /* 减少最小高度 */
    }

    .char-counter {
      margin-top: 2px; /* 减少间距 */
      font-size: 0.7rem;
    }

    /* 移除了单选按钮垂直排列样式 */

    /* 全宽按钮 */
    .submit-button {
      width: 100%;
      padding: 12px 24px; /* 减少按钮高度 */
      font-size: 1rem;
    }

    .form-actions {
      margin-top: 20px; /* 减少顶部间距 */
    }
  }

  /* 小屏手机进一步优化 */
  @media (max-width: 480px) {
    .consultation-section {
      padding: 15px 0 30px;
    }

    .page-header {
      margin-bottom: 15px;
    }

    .page-title {
      font-size: 1.5rem;
      margin-bottom: 6px;
    }

    .page-subtitle {
      font-size: 0.875rem;
    }

    .form-container {
      padding: 16px 14px;
    }

    .form-row {
      gap: 12px;
      margin-bottom: 12px;
    }

    .form-label {
      font-size: 0.8rem;
    }

    .form-input,
    .form-select,
    .form-textarea {
      font-size: 16px;
      padding: 9px 10px;
    }

    .form-textarea {
      min-height: 60px;
    }

    .submit-button {
      padding: 11px 20px;
      font-size: 0.95rem;
    }
  }
</style>
