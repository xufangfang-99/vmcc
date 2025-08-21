<template>
  <section class="consultation-section">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">预约免费咨询</h1>
        <p class="page-subtitle">分享您的需求，让我们的专家为您量身定制完美的解决方案</p>
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
                名
                <span class="required">*</span>
              </label>
              <input
                id="firstName"
                v-model="formData.firstName"
                type="text"
                class="form-input"
                placeholder="请输入您的名字"
                required
              />
            </div>
            <div class="form-group">
              <label
                for="lastName"
                class="form-label"
              >
                姓
                <span class="required">*</span>
              </label>
              <input
                id="lastName"
                v-model="formData.lastName"
                type="text"
                class="form-input"
                placeholder="请输入您的姓氏"
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
                邮箱地址
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
                联系电话
                <span class="required">*</span>
              </label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="form-input"
                placeholder="+86 138 0000 0000"
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
                公司名称
                <span class="required">*</span>
              </label>
              <input
                id="company"
                v-model="formData.company"
                type="text"
                class="form-input"
                placeholder="您的公司名称"
                required
              />
            </div>
            <div class="form-group">
              <label
                for="position"
                class="form-label"
              >
                您的职位
                <span class="required">*</span>
              </label>
              <input
                id="position"
                v-model="formData.position"
                type="text"
                class="form-input"
                placeholder="CEO、人力资源总监等"
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
                感兴趣的服务
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
                  请选择服务类型
                </option>
                <option value="executive-search">高管猎头</option>
                <option value="hr-outsourcing">人力资源外包</option>
                <option value="talent-deployment">人才派遣</option>
                <option value="organizational-consulting">组织咨询</option>
                <option value="cross-border-support">跨境支持</option>
                <option value="strategic-consulting">战略咨询</option>
              </select>
            </div>
            <div class="form-group">
              <label
                for="timeline"
                class="form-label"
              >
                项目时间
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
                  请选择时间安排
                </option>
                <option value="immediate">紧急（1周内）</option>
                <option value="1-month">1个月内</option>
                <option value="1-3-months">1-3个月</option>
                <option value="3-6-months">3-6个月</option>
                <option value="planning">仅作规划</option>
              </select>
            </div>
          </div>

          <!-- 第五行：预算和联系方式 -->
          <div class="form-row">
            <div class="form-group">
              <label
                for="budget"
                class="form-label"
              >
                预算范围
              </label>
              <select
                id="budget"
                v-model="formData.budget"
                class="form-select"
              >
                <option value="">请选择预算范围（选填）</option>
                <option value="<50万">50万以下</option>
                <option value="50-100万">50-100万</option>
                <option value="100-200万">100-200万</option>
                <option value="200-500万">200-500万</option>
                <option value=">500万">500万以上</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">
                首选联系方式
                <span class="required">*</span>
              </label>
              <div class="radio-group">
                <label class="radio-label">
                  <input
                    v-model="formData.contactMethod"
                    type="radio"
                    name="contactMethod"
                    value="email"
                    required
                  />
                  <span class="radio-text">邮件</span>
                </label>
                <label class="radio-label">
                  <input
                    v-model="formData.contactMethod"
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    required
                  />
                  <span class="radio-text">电话</span>
                </label>
                <label class="radio-label">
                  <input
                    v-model="formData.contactMethod"
                    type="radio"
                    name="contactMethod"
                    value="wechat"
                    required
                  />
                  <span class="radio-text">微信</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 项目详情 -->
          <div class="form-row">
            <div class="form-group full-width">
              <label
                for="details"
                class="form-label"
              >
                项目详情
                <span class="required">*</span>
              </label>
              <textarea
                id="details"
                v-model="formData.details"
                class="form-textarea"
                rows="4"
                placeholder="请描述您的需求、面临的挑战或具体要求..."
                maxlength="500"
                required
              ></textarea>
              <div class="char-counter">{{ formData.details.length }}/500 字符</div>
            </div>
          </div>

          <!-- 提交按钮 -->
          <div class="form-actions">
            <button
              type="submit"
              class="submit-button"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">提交预约</span>
              <span
                v-else
                class="loading"
              >
                <div class="spinner"></div>
                处理中...
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
    details: '',
    contactMethod: 'phone',
  })

  const handleSubmit = async () => {
    isSubmitting.value = true

    try {
      console.log('表单数据:', formData.value)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert('感谢您的预约！我们将在24小时内与您联系。')
      resetForm()
    } catch (error) {
      console.error('提交表单出错:', error)
      alert('提交失败，请稍后重试或直接联系我们。')
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
      details: '',
      contactMethod: 'phone',
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

  /* 页面标题 - 减小间距 */
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

  .radio-group {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  .radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .radio-label input[type='radio'] {
    margin-right: 6px;
    width: 18px;
    height: 18px;
    accent-color: var(--tm-pri-0);
  }

  .radio-text {
    font-size: 0.95rem;
    color: var(--tm-txt-primary);
  }

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

    /* 单选按钮垂直排列 */
    .radio-group {
      flex-direction: column;
      gap: 8px; /* 减少间距 */
      margin-top: 6px; /* 减少顶部间距 */
    }

    .radio-label {
      padding: 4px 0; /* 减少内边距 */
    }

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
