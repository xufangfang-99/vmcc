<template>
  <el-dropdown
    trigger="click"
    @command="handleThemeChange"
  >
    <el-button class="theme-button">
      {{ themes[currentTheme].name }}
      <span class="ml-1">▼</span>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(themeConfig, key) in themes"
          :key="key"
          :command="key as ThemeType"
          :class="{ 'is-active': currentTheme === key }"
        >
          <div class="flex items-center gap-2">
            <div
              class="w-4 h-4 rounded-full"
              :style="{ backgroundColor: themeConfig.primary[0] }"
            ></div>
            {{ themeConfig.name }}
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useTheme } from '~/composables/useTheme'
  import type { ThemeType } from '~/constants/themes'
  import { themes } from '~/constants/themes'

  const theme = useTheme()
  const currentTheme = computed<ThemeType>(() => theme.currentTheme)

  const handleThemeChange = (themeType: ThemeType) => {
    theme.setTheme(themeType)
  }
</script>
