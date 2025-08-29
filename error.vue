<template>
  <div class="error-page">
    <!-- 导航栏 -->
    <nav class="error-nav">
      <div class="nav-container">
        <NuxtLink
          to="/"
          class="logo"
        >
          VMMC
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink
            to="/"
            class="nav-link"
            @click="resetMenuAndNavigate('/')"
          >
            首页
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="nav-link"
            @click="resetMenuAndNavigate('/services')"
          >
            服务
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="nav-link"
            @click="resetMenuAndNavigate('/about')"
          >
            关于我们
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="nav-link"
            @click="resetMenuAndNavigate('/contact')"
          >
            联系我们
          </NuxtLink>
        </div>
      </div>
    </nav>

    <div class="error-container">
      <!-- 404 友好提示 -->
      <div
        v-if="error?.statusCode === 404"
        class="coming-soon-section"
      >
        <div class="icon-section">
          <div class="construction-icon">🚧</div>
        </div>

        <h1 class="main-title">即将开放</h1>
        <p class="subtitle">这个页面正在紧锣密鼓地开发中</p>

        <div class="description">
          <p>我们正在为您准备更好的内容和服务</p>
          <p class="countdown-text">{{ countdown }}秒后将自动返回首页</p>
        </div>

        <div class="action-buttons">
          <button
            class="btn-primary"
            @click="jumpToHome"
          >
            立即返回首页
          </button>
          <NuxtLink
            to="/contact"
            class="btn-secondary"
            @click="resetMenuAndNavigate('/contact')"
          >
            联系我们
          </NuxtLink>
        </div>

        <!-- 建议导航 -->
        <div class="suggested-pages">
          <h3>您可能感兴趣的内容</h3>
          <div class="pages-grid">
            <NuxtLink
              to="/"
              class="page-card"
              @click="resetMenuAndNavigate('/')"
            >
              <div class="page-icon">🏠</div>
              <div class="page-title">首页</div>
              <div class="page-desc">了解我们的服务</div>
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="page-card"
              @click="resetMenuAndNavigate('/services')"
            >
              <div class="page-icon">💼</div>
              <div class="page-title">服务项目</div>
              <div class="page-desc">专业人力资源服务</div>
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="page-card"
              @click="resetMenuAndNavigate('/about')"
            >
              <div class="page-icon">👥</div>
              <div class="page-title">关于我们</div>
              <div class="page-desc">公司简介与团队</div>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="page-card"
              @click="resetMenuAndNavigate('/contact')"
            >
              <div class="page-icon">📞</div>
              <div class="page-title">联系我们</div>
              <div class="page-desc">获取专业咨询</div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- 其他错误的处理 -->
      <div
        v-else
        class="other-error-section"
      >
        <h1>{{ error?.statusCode ?? 'Unknown Error' }}</h1>
        <p>{{ error?.message ?? 'An unexpected error occurred' }}</p>

        <div class="error-actions">
          <button @click="handleError">Try again</button>
          <NuxtLink
            to="/"
            @click="resetMenuAndNavigate('/')"
          >
            Go back home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'nuxt/app'
  import { useMenuHandler } from '~/composables/useMenuHandler'

  // 获取统一的菜单处理方法
  const { resetToHome } = useMenuHandler()

  // 处理 Home 点击，使用统一的重置方法
  const handleHomeClick = resetToHome

  interface ErrorObject {
    statusCode?: number
    message?: string
  }

  const props = defineProps({
    error: {
      type: Object as () => ErrorObject,
      required: true,
    },
  })

  const router = useRouter()

  // 倒计时相关
  const countdown = ref(8) // 8秒倒计时，给用户更多时间阅读
  let countdownTimer: NodeJS.Timeout | null = null

  const handleError = () => {
    router.push('/login')
  }

  // 多重跳转方法，确保能够成功跳转
  const forceNavigateToHome = async () => {
    try {
      // 首先尝试使用 resetToHome 方法来重置菜单状态
      console.log('尝试使用 resetToHome 重置菜单状态')
      resetToHome()

      // 然后导航到首页
      console.log('导航到首页')
      await navigateTo('/')
    } catch (error1) {
      console.log('resetToHome 失败，尝试其他方法', error1)
      try {
        // 备用方案：直接调用 navigation store 方法
        const navigation = useNavigation()
        console.log('直接调用 navigation store 方法')
        navigation.clearSelectedPath()
        navigation.switchToDefault()
        await router.push('/')
      } catch (error2) {
        console.log('router.push 失败，使用强制跳转', error2)
        if (process.client) {
          window.location.href = '/'
        }
      }
    }
  }

  // 立即跳转到首页
  const jumpToHome = () => {
    if (countdownTimer) {
      clearInterval(countdownTimer)
    }
    forceNavigateToHome()
  }

  // 统一的菜单重置和导航函数
  const resetMenuAndNavigate = async (path: string) => {
    console.log(`重置菜单并导航到: ${path}`)

    try {
      // 尝试使用 resetToHome 方法重置菜单状态
      resetToHome()
      console.log('菜单状态重置成功')
    } catch (error1) {
      console.log('resetToHome 失败，使用备用方案', error1)
      try {
        // 备用方案：直接调用 navigation store 方法
        const navigation = useNavigation()
        navigation.clearSelectedPath()
        navigation.switchToDefault()
        console.log('使用 store 直接重置菜单状态')
      } catch (error2) {
        console.log('store 重置也失败', error2)
      }
    }

    // 清理倒计时
    if (countdownTimer) {
      clearInterval(countdownTimer)
      countdownTimer = null
    }

    // 导航到目标路径
    try {
      await navigateTo(path)
    } catch (error) {
      console.log('navigateTo 失败，使用其他方法', error)
      if (process.client) {
        window.location.href = path
      }
    }
  }

  // 404 自动跳转逻辑
  onMounted(() => {
    if (props.error?.statusCode === 404) {
      countdownTimer = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
          if (countdownTimer) {
            clearInterval(countdownTimer)
            countdownTimer = null
          }
          forceNavigateToHome()
        }
      }, 1000)
    }
  })

  // 组件销毁时清理定时器
  onUnmounted(() => {
    if (countdownTimer) {
      clearInterval(countdownTimer)
      countdownTimer = null
    }
  })
</script>

<style scoped>
  .error-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }

  /* 导航栏样式 */
  .error-nav {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #3498db;
  }

  /* 错误页面内容 */
  .error-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 4rem 2rem;
    text-align: center;
  }

  .coming-soon-section {
    background: white;
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }

  .icon-section {
    margin-bottom: 2rem;
  }

  .construction-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .main-title {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.3rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
  }

  .description p {
    font-size: 1.1rem;
    color: #5a6c7d;
    margin-bottom: 0.5rem;
  }

  .countdown-text {
    font-weight: 600;
    color: #e74c3c !important;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
    flex-wrap: wrap;
  }

  .btn-primary {
    background: #3498db;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
  }

  .btn-primary:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
  }

  .btn-secondary {
    background: transparent;
    color: #3498db;
    padding: 1rem 2rem;
    border: 2px solid #3498db;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
  }

  .btn-secondary:hover {
    background: #3498db;
    color: white;
    transform: translateY(-2px);
  }

  .suggested-pages {
    margin-top: 3rem;
  }

  .suggested-pages h3 {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 2rem;
  }

  .pages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .page-card {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .page-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-color: #3498db;
  }

  .page-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .page-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .page-desc {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  /* 其他错误样式 */
  .other-error-section {
    background: white;
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }

  .other-error-section h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  .other-error-section p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #7f8c8d;
  }

  .error-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .error-actions button,
  .error-actions a {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    background-color: #3498db;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .error-actions button:hover,
  .error-actions a:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .nav-container {
      padding: 0 1rem;
    }

    .nav-links {
      gap: 1rem;
    }

    .error-container {
      padding: 2rem 1rem;
    }

    .coming-soon-section {
      padding: 2rem 1.5rem;
    }

    .main-title {
      font-size: 2rem;
    }

    .action-buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
      max-width: 250px;
    }

    .pages-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .nav-links {
      display: none;
    }

    .construction-icon {
      font-size: 3rem;
    }

    .main-title {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }
  }
</style>
