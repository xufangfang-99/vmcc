<template>
  <ClientOnly>
    <el-dropdown
      trigger="click"
      @command="changeLocale"
    >
      <el-button class="language-button">
        {{ currentLocale === 'zh-CN' ? '中文' : 'English' }}
        <span class="ml-1">▼</span>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
          <el-dropdown-item command="en-US">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </ClientOnly>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // @ts-ignore
  const { locale, setLocale } = useI18n()
  const currentLocale = ref(locale.value)

  const changeLocale = async (newLocale: string) => {
    await setLocale(newLocale)
    localStorage.setItem('user-language', newLocale)
    currentLocale.value = newLocale
  }
</script>
