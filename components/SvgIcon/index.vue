<script setup lang="ts">
  import { computed, defineAsyncComponent, useAttrs } from 'vue'

  interface Props {
    // 图标名称
    name: string
    // 图标大小，支持数字或带单位的字符串
    size?: number | string
    // 图标颜色
    color?: string
    // 是否开启懒加载
    lazy?: boolean
    // 自定义类名
    class?: string
    // 自定义样式
    style?: Record<string, any>
    // 是否可点击
    clickable?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    size: '1em',
    color: 'currentColor',
    lazy: false,
    class: '',
    style: () => ({}),
    clickable: false,
  })

  // 定义 emit 事件
  const emit = defineEmits<{
    click: [e: MouseEvent]
  }>()

  // 获取组件属性，用于检查是否有 click 事件
  const attrs = useAttrs()

  // 计算最终的 size，确保有单位
  const finalSize = computed(() => {
    if (typeof props.size === 'number') {
      return `${props.size}px`
    }
    return props.size
  })

  // 合并样式
  const svgStyle = computed(() => ({
    width: finalSize.value,
    height: finalSize.value,
    fill: props.color,
    ...props.style,
  }))

  // 合并类名，根据 clickable 属性和点击事件决定是否添加可点击样式
  const svgClass = computed(() => {
    const hasClickListener = props.clickable || 'onClick' in attrs
    return `svg-icon ${hasClickListener ? 'clickable' : ''} ${props.class}`.trim()
  })

  // 处理点击事件
  const handleClick = (e: MouseEvent) => {
    emit('click', e)
  }

  // 异步组件
  const SvgComponent = computed(() => {
    if (!props.name) return null
    return defineAsyncComponent({
      loader: () => import(`~/assets/icons/${props.name}.svg`),
      loadingComponent: {
        template: '<span class="svg-icon-loading" :style="svgStyle"></span>',
      },
      errorComponent: {
        template: '<span class="svg-icon-error" :style="svgStyle"></span>',
      },
      delay: 100,
      timeout: 2000,
      suspensible: true,
    })
  })
</script>

<!-- 模板部分保持不变 -->
<template>
  <Suspense v-if="lazy">
    <component
      :is="SvgComponent"
      :class="svgClass"
      :style="svgStyle"
      @click="handleClick"
    />
    <template #fallback>
      <span
        class="svg-icon-loading"
        :style="svgStyle"
      ></span>
    </template>
  </Suspense>
  <component
    :is="SvgComponent"
    v-else
    :class="svgClass"
    :style="svgStyle"
    @click="handleClick"
  />
</template>

<!-- 样式部分保持不变 -->
<style scoped>
  .svg-icon {
    display: inline-block;
    vertical-align: middle;
    transition: all 0.3s;
  }

  .svg-icon.clickable {
    cursor: pointer;
  }

  .svg-icon-loading {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    animation: svg-rotate 1s linear infinite;
  }

  .svg-icon-loading::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid var(--tm-pri-0);
    border-top-color: transparent;
    border-radius: 50%;
  }

  .svg-icon-error {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    background-color: var(--tm-bg-disabled);
    border-radius: 4px;
  }

  @keyframes svg-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
