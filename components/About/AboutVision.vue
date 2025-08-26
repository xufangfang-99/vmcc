<!-- components/about/AboutVision.vue -->
<template>
  <section class="about-vision py-100px bg-[var(--tm-bg-secondary)] relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="background-decoration"></div>

    <div class="max-w-1200px mx-auto px-20px relative z-1">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-80px items-center">
        <!-- 左侧内容 -->
        <div class="pr-0 lg:pr-40px">
          <h2 class="text-3xl lg:text-5xl font-light text-[var(--tm-txt-primary)] mb-30px">
            Global Vision,
            <span
              class="text-[var(--tm-accent-primary)] font-semibold bg-gradient-to-r from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] bg-clip-text text-transparent inline-block"
            >
              Local Expertise
            </span>
          </h2>

          <p class="text-lg text-[var(--tm-txt-secondary)] mb-20px">
            VMMC combines extensive industry experience with a global perspective, leveraging
            top-tier worldwide resources to establish a comprehensive service framework that
            seamlessly integrates localized execution with global coordination.
          </p>

          <p class="text-lg text-[var(--tm-txt-secondary)] mb-20px">
            Our commitment extends beyond traditional consulting. We partner with enterprise clients
            and individuals to provide transformative solutions that drive sustainable growth and
            success in an increasingly connected world.
          </p>

          <!-- 特点列表 -->
          <div class="mt-40px flex flex-col gap-30px">
            <div
              class="feature-item flex gap-20px items-start transition-transform duration-300 ease hover:translate-x-10px"
            >
              <div
                class="feature-icon w-56px h-56px bg-[var(--tm-bg-badge)] rounded-12px flex items-center justify-center text-[var(--tm-accent-primary)] flex-shrink-0 transition-all duration-300 ease border border-[var(--tm-bd-feature)]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  ></circle>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-8px">
                  Global Network
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Strategic offices across Asia-Pacific and Middle East regions, ensuring
                  comprehensive market coverage and local expertise.
                </p>
              </div>
            </div>

            <div
              class="feature-item flex gap-20px items-start transition-transform duration-300 ease hover:translate-x-10px"
            >
              <div
                class="feature-icon w-56px h-56px bg-[var(--tm-bg-badge)] rounded-12px flex items-center justify-center text-[var(--tm-accent-primary)] flex-shrink-0 transition-all duration-300 ease border border-[var(--tm-bd-feature)]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-8px">
                  Comprehensive Services
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  One-stop solutions covering executive search, HR outsourcing, immigration, study
                  abroad, and strategic consulting services.
                </p>
              </div>
            </div>

            <div
              class="feature-item flex gap-20px items-start transition-transform duration-300 ease hover:translate-x-10px"
            >
              <div
                class="feature-icon w-56px h-56px bg-[var(--tm-bg-badge)] rounded-12px flex items-center justify-center text-[var(--tm-accent-primary)] flex-shrink-0 transition-all duration-300 ease border border-[var(--tm-bd-feature)]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                  ></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-[var(--tm-txt-primary)] mb-8px">
                  Expert Advisory
                </h3>
                <p class="text-sm text-[var(--tm-txt-secondary)]">
                  Seasoned industry experts with average 10+ years experience, delivering deep
                  insights and tailored solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="relative">
          <div class="relative rounded-20px overflow-hidden shadow-[var(--tm-shadow-hero)]">
            <OptImage
              :src="heroImageSrc"
              alt="现代办公环境"
              class="w-full h-150 lg:h-600px object-cover"
              @error="handleImageError"
            />
            <div
              class="absolute inset-0 bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-transparent opacity-10"
            ></div>
          </div>
          <div
            class="excellence-badge absolute bottom-30px right-30px bg-[var(--tm-bg-primary)] p-20px px-30px rounded-16px shadow-[var(--tm-shadow-card)] flex items-center gap-16px border border-[var(--tm-bd-card)] backdrop-blur-10px"
          >
            <div
              class="w-48px h-48px bg-gradient-to-br from-[var(--tm-accent-gradient-from)] to-[var(--tm-accent-gradient-to)] rounded-12px flex items-center justify-center text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-[var(--tm-txt-primary)] mb-4px">Excellence</h4>
              <p class="text-sm text-[var(--tm-txt-secondary)]">Recognized Leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const heroImageSrc = computed(() => {
    return '/images/comm/about/hero-bg.jpg'
  })

  const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement
    if (!img) return

    console.error('Hero图片加载失败:', img.src)

    // 防止事件冒泡，避免影响路由
    event.preventDefault()
    event.stopPropagation()

    // 如果深色模式图片加载失败，尝试加载浅色版本
    if (img.src.includes('hero-bg-dark')) {
      console.log('深色hero图片加载失败，切换到浅色版本')
      img.src = '/images/comm/about/hero-bg.jpg'
    } else {
      console.log('Hero图片完全加载失败，隐藏图片')
      img.style.display = 'none'
    }
  }
</script>

<style>
  /* 只保留复杂样式 */

  /* 背景装饰 */
  .background-decoration::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--tm-bg-heroGradient-from) 0%, transparent 70%);
    opacity: 0.3;
  }

  /* 特色项目悬停效果 */
  .feature-item:hover .feature-icon {
    background: linear-gradient(135deg, var(--tm-accent-feature-from), var(--tm-accent-feature-to));
    color: var(--tm-txt-white);
    transform: scale(1.1) rotate(5deg);
    box-shadow: var(--tm-shadow-feature);
  }

  /* 深色模式适配 */
  .dark .about-vision {
    background: var(--tm-bg-secondary);
  }

  .dark .excellence-badge {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  .dark .feature-icon {
    background: var(--tm-bg-whiteAlpha10);
    border-color: var(--tm-bd-transparent);
  }
</style>
