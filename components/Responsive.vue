<template>
  <div v-if="shouldShow">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useDevice } from '~/composables/useDevice'

  interface Props {
    // 显示条件
    mobile?: boolean
    tablet?: boolean
    desktop?: boolean
    // 排除条件
    notMobile?: boolean
    notTablet?: boolean
    notDesktop?: boolean
    // 最小/最大宽度
    minWidth?: number
    maxWidth?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    mobile: undefined,
    tablet: undefined,
    desktop: undefined,
    notMobile: undefined,
    notTablet: undefined,
    notDesktop: undefined,
    minWidth: undefined,
    maxWidth: undefined,
  })

  const device = useDevice()

  const shouldShow = computed(() => {
    // 检查显示条件
    if (props.mobile !== undefined && props.mobile !== device.isMobile) return false
    if (props.tablet !== undefined && props.tablet !== device.isTablet) return false
    if (props.desktop !== undefined && props.desktop !== device.isDesktop) return false

    // 检查排除条件
    if (props.notMobile && device.isMobile) return false
    if (props.notTablet && device.isTablet) return false
    if (props.notDesktop && device.isDesktop) return false

    // 检查宽度范围
    if (props.minWidth !== undefined && device.screenWidth < props.minWidth) return false
    if (props.maxWidth !== undefined && device.screenWidth > props.maxWidth) return false

    return true
  })
</script>
