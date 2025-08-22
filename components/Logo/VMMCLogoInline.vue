<template>
  <span
    class="vmmc-logo-inline"
    :style="{ fontSize: size }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 50"
      :width="computedWidth"
      :height="computedHeight"
      class="logo-svg"
    >
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            :style="`stop-color: var(--tm-accent-gradient-from)`"
          />
          <stop
            offset="100%"
            :style="`stop-color: var(--tm-accent-gradient-to)`"
          />
        </linearGradient>
      </defs>

      <g :fill="fillColor">
        <!-- V - 优化的设计 -->
        <path
          d="M 5,10 L 20,40 L 35,10"
          :stroke="fillColor"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <!-- M - 第一个M -->
        <path
          d="M 45,40 L 45,10 L 57,30 L 69,10 L 69,40"
          :stroke="fillColor"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <!-- M - 第二个M -->
        <path
          d="M 79,40 L 79,10 L 91,30 L 103,10 L 103,40"
          :stroke="fillColor"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <!-- C - 重新设计的C -->
        <path
          d="M 138,15
             A 15,15 0 0,0 113,25
             A 15,15 0 0,0 138,35
             "
          :stroke="fillColor"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
        />
      </g>
    </svg>
  </span>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    size?: string
    color?: 'gradient' | 'current' | 'white' | 'primary'
    width?: number
    height?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    size: '1em',
    color: 'gradient',
    width: 220,
    height: 50,
  })

  const computedWidth = computed(() => {
    const baseSize = parseFloat(props.size)
    return props.width * baseSize
  })

  const computedHeight = computed(() => {
    const baseSize = parseFloat(props.size)
    return props.height * baseSize
  })

  const fillColor = computed(() => {
    const colorMap = {
      gradient: 'url(#logo-gradient)',
      current: 'currentColor',
      white: 'var(--tm-txt-white)',
      primary: 'var(--tm-accent-primary)',
    }
    return colorMap[props.color] || colorMap.gradient
  })
</script>

<style scoped>
  .vmmc-logo-inline {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    line-height: 1;
  }

  .logo-svg {
    height: 1em;
    width: auto;
    margin: 0 0.2em;
  }
</style>
