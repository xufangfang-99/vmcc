<template>
  <div
    class="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center md:justify-start overflow-hidden"
  >
    <!-- 背景图片层 -->
    <div class="absolute inset-0">
      <OptImage
        v-if="themeStore.currentTheme"
        :src="backgroundImagePath"
        :alt="`${industryName} Background`"
        class="w-full h-full object-cover object-center"
      />
      <!-- 备用背景，当主题还没加载时 -->
      <div
        v-else
        class="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"
      ></div>
    </div>

    <!-- 内容区域 -->
    <div class="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full text-center md:text-left">
      <!-- 标题 - 移动端居中，桌面端左对齐 -->
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 md:mb-8 text-white tracking-tight leading-[0.95] md:leading-[0.9] drop-shadow-2xl animate-fade-in-up px-2 md:px-0"
      >
        {{ industryName }}
      </h1>

      <!-- 描述文字 - 移动端居中 -->
      <p
        class="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-full md:max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-lg animate-fade-in-up animation-delay-200 px-4 md:px-0"
      >
        {{ industryDescription }}
      </p>

      <!-- 面包屑导航 - 移动端居中显示 -->
      <div
        class="flex items-center justify-center md:justify-start flex-wrap gap-2 md:gap-3 text-xs sm:text-sm bg-white/10 backdrop-blur-md px-4 py-2.5 md:px-6 md:py-3 rounded-full border border-white/20 w-fit mx-auto md:mx-0 animate-fade-in-up animation-delay-400"
      >
        <NuxtLink
          to="/"
          class="text-white/80 hover:text-blue-400 transition-colors duration-300 font-medium hover:drop-shadow-md active:scale-95 transform transition-transform"
          @click="handleHomeClick"
        >
          Home
        </NuxtLink>
        <span class="text-white/50 font-light">/</span>
        <NuxtLink
          to="/industries"
          class="text-white/80 hover:text-blue-400 transition-colors duration-300 font-medium hover:drop-shadow-md active:scale-95 transform transition-transform"
        >
          Industries
        </NuxtLink>
        <span class="text-white/50 font-light">/</span>
        <span class="text-blue-400 font-semibold drop-shadow-sm text-center">
          {{ industryName }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, onMounted } from 'vue'
  import { useTheme } from '~/composables/useTheme'
  import { useMenuHandler } from '~/composables/useMenuHandler'

  // 获取导航控制

  // 获取统一的菜单处理方法
  const { resetToHome } = useMenuHandler()

  // 处理 Home 点击，使用统一的重置方法
  const handleHomeClick = resetToHome
  // 定义组件的 props
  const props = defineProps({
    industryName: {
      type: String,
      required: true,
    },
    industryDescription: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      default: 'banner1.jpg', // 默认背景图片名称
    },
  })

  // 获取主题 store
  const themeStore = useTheme()
  const isThemeLoaded = ref(false)

  // 根据当前主题动态选择背景图，添加默认值
  const backgroundImagePath = computed(() => {
    const theme = themeStore.currentTheme || 'blackGold' // 提供默认主题
    return `/images/${theme}/industries/${props.backgroundImage}`
  })

  // 确保主题完全加载
  onMounted(() => {
    // 等待主题初始化完成
    if (themeStore.isInitialized) {
      isThemeLoaded.value = true
    } else {
      // 如果还没初始化，监听初始化完成
      const unwatch = watch(
        () => themeStore.isInitialized,
        (initialized) => {
          if (initialized) {
            isThemeLoaded.value = true
            unwatch()
          }
        }
      )
    }
  })
</script>

<style scoped>
  /* 自定义动画 */
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce-slow {
    0%,
    100% {
      transform: translateY(0px);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(-25px);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
    animation-fill-mode: both;
  }
</style>
