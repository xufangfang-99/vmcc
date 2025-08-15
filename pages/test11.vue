<template>
  <div class="p-4">
    <h1 class="text-[var(--tm-text-primary)] text-2xl font-bold mb-6">主题色展示</h1>

    <!-- 主题色展示 -->
    <div class="mb-8">
      <h2 class="text-[var(--tm-text-secondary)] text-xl mb-4">主题色系</h2>
      <div class="flex gap-4">
        <div
          v-for="(color, index) in themes[currentTheme].primary"
          :key="index"
          class="w-20 h-20 rounded-lg flex items-center justify-center text-white"
          :style="{ backgroundColor: color }"
        >
          {{ index + 1 }}
        </div>
      </div>
    </div>

    <!-- 文字颜色展示 -->
    <div class="mb-8">
      <h2 class="text-[var(--tm-text-secondary)] text-xl mb-4">文字颜色</h2>
      <div class="space-y-2">
        <p class="text-[var(--tm-text-primary)]">主要文字颜色 Primary Text</p>
        <p class="text-[var(--tm-text-secondary)]">次要文字颜色 Secondary Text</p>
        <p class="text-[var(--tm-text-light)]">浅色文字 Light Text</p>
        <p class="text-[var(--tm-text-label)]">标签文字 Label Text</p>
        <p class="text-[var(--tm-text-placeholder)]">占位符文字 Placeholder Text</p>
        <p class="text-[var(--tm-text-disabled)]">禁用文字 Disabled Text</p>
      </div>
    </div>

    <!-- 背景颜色展示 -->
    <div class="mb-8">
      <h2 class="text-[var(--tm-text-secondary)] text-xl mb-4">背景颜色</h2>
      <div class="flex gap-4">
        <div
          v-for="(_, key) in themes[currentTheme].background"
          :key="key"
          class="w-32 h-32 rounded-lg flex items-center justify-center p-2 text-center"
          :style="{ backgroundColor: `var(--tm-bg-${key})` }"
        >
          {{ key }}
        </div>
      </div>
    </div>

    <!-- 边框颜色展示 -->
    <div class="mb-8">
      <h2 class="text-[var(--tm-text-secondary)] text-xl mb-4">边框颜色</h2>
      <div class="flex gap-4">
        <div
          v-for="(_, key) in themes[currentTheme].border"
          :key="key"
          class="w-32 h-32 rounded-lg flex items-center justify-center"
          :style="{
            border: `2px solid var(--tm-bd-${key})`,
            backgroundColor: 'var(--tm-bg-primary)',
          }"
        >
          {{ key }}
        </div>
      </div>
    </div>

    <!-- 按钮样式展示 -->
    <div class="mb-8">
      <h2 class="text-[var(--tm-text-secondary)] text-xl mb-4">按钮样式</h2>

      <!-- 主要按钮 -->
      <div class="mb-4">
        <h3 class="text-[var(--tm-text-secondary)] mb-2">主要按钮</h3>
        <div class="flex gap-4">
          <button
            class="px-4 py-2 rounded-lg transition-colors"
            :style="{
              backgroundColor: 'var(--tm-btn-primary-background-0)',
              color: 'var(--tm-btn-primary-text-0)',
              border: '1px solid var(--tm-btn-primary-border-0)',
            }"
            @mouseenter="handlePrimaryButtonEnter"
            @mouseleave="handlePrimaryButtonLeave"
          >
            默认状态
          </button>
          <button
            class="px-4 py-2 rounded-lg"
            :style="{
              backgroundColor: 'var(--tm-btn-primary-activeBg-0)',
              color: 'var(--tm-btn-primary-text-0)',
              border: '1px solid var(--tm-btn-primary-border-0)',
            }"
          >
            激活状态
          </button>
          <button
            class="px-4 py-2 rounded-lg cursor-not-allowed"
            :style="{
              backgroundColor: 'var(--tm-btn-primary-disabledBg-0)',
              color: 'var(--tm-btn-primary-text-0)',
              opacity: '0.5',
            }"
            disabled
          >
            禁用状态
          </button>
        </div>
      </div>

      <!-- 次要按钮 -->
      <div class="mb-4">
        <h3 class="text-[var(--tm-text-secondary)] mb-2">次要按钮</h3>
        <div class="flex gap-4">
          <button
            class="px-4 py-2 rounded-lg transition-colors"
            :style="{
              backgroundColor: 'var(--tm-btn-secondary-background-0)',
              color: 'var(--tm-btn-secondary-text-0)',
              border: '1px solid var(--tm-btn-secondary-border-0)',
            }"
            @mouseenter="handleSecondaryButtonEnter"
            @mouseleave="handleSecondaryButtonLeave"
          >
            默认状态
          </button>
          <button
            class="px-4 py-2 rounded-lg"
            :style="{
              backgroundColor: 'var(--tm-btn-secondary-activeBg-0)',
              color: 'var(--tm-btn-secondary-text-0)',
              border: '1px solid var(--tm-btn-secondary-border-0)',
            }"
          >
            激活状态
          </button>
          <button
            class="px-4 py-2 rounded-lg cursor-not-allowed"
            :style="{
              backgroundColor: 'var(--tm-btn-secondary-disabledBg-0)',
              color: 'var(--tm-btn-secondary-text-0)',
              opacity: '0.5',
            }"
            disabled
          >
            禁用状态
          </button>
        </div>
      </div>

      <!-- 文本按钮 -->
      <div>
        <h3 class="text-[var(--tm-text-secondary)] mb-2">文本按钮</h3>
        <div class="flex gap-4">
          <button
            class="px-4 py-2 transition-colors"
            :style="{
              color: 'var(--tm-btn-text-color-0)',
            }"
            @mouseenter="handleTextButtonEnter"
            @mouseleave="handleTextButtonLeave"
          >
            默认状态
          </button>
          <button
            class="px-4 py-2"
            :style="{
              color: 'var(--tm-btn-text-activeColor-0)',
            }"
          >
            激活状态
          </button>
          <button
            class="px-4 py-2 cursor-not-allowed"
            :style="{
              color: 'var(--tm-btn-text-disabledColor-0)',
            }"
            disabled
          >
            禁用状态
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useTheme } from '~/composables/useTheme'
  import type { ThemeType } from '~/constants/themes'
  import { themes } from '~/constants/themes'

  const theme = useTheme()
  const currentTheme = computed<ThemeType>(() => theme.currentTheme)

  const handlePrimaryButtonEnter = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement
    if (target) {
      target.style.backgroundColor = 'var(--tm-btn-primary-hoverBg-0)'
    }
  }

  const handlePrimaryButtonLeave = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement
    if (target) {
      target.style.backgroundColor = 'var(--tm-btn-primary-background-0)'
    }
  }

  const handleSecondaryButtonEnter = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement
    if (target) {
      target.style.backgroundColor = 'var(--tm-btn-secondary-hoverBg-0)'
    }
  }

  const handleSecondaryButtonLeave = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement
    if (target) {
      target.style.backgroundColor = 'var(--tm-btn-secondary-background-0)'
    }
  }

  const handleTextButtonEnter = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement
    if (target) {
      target.style.color = 'var(--tm-btn-text-hoverColor-0)'
    }
  }

  const handleTextButtonLeave = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement
    if (target) {
      target.style.color = 'var(--tm-btn-text-color-0)'
    }
  }
</script>
