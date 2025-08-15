<template>
  <el-dropdown
    trigger="click"
    @command="handleCommand"
  >
    <el-button class="menu-button">
      {{ $t('menu.title') }}
      <span class="ml-1">▼</span>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in menuItems"
          :key="item.path"
          :command="item.path"
          :class="{ 'is-active': route.path === item.path }"
        >
          {{ $t(item.i18nKey) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  const menuItems = [
    { path: '/index', i18nKey: 'menu.home' },
    { path: '/login', i18nKey: 'menu.login' },
    { path: '/imgtest', i18nKey: 'menu.imageTest' },
    { path: '/imgtest1', i18nKey: 'menu.imageTest1' },
    { path: '/test1', i18nKey: 'menu.methodTest' },
    { path: '/test2', i18nKey: 'menu.methodTest' },
    { path: '/test3', i18nKey: 'menu.commonConfig' },
    { path: '/test4', i18nKey: 'menu.useStateManage' },
    { path: '/test5', i18nKey: 'menu.pinaManage' },
    { path: '/test6', i18nKey: 'menu.pinaMultiManage' },
    { path: '/test7', i18nKey: 'menu.i18n' },
    { path: '/test8', i18nKey: 'menu.network' },
    { path: '/test9', i18nKey: 'menu.envConfig' },
    { path: '/test10', i18nKey: 'menu.seoConfig' },
    { path: '/test11', i18nKey: 'menu.themeShow' },
  ]

  const handleCommand = (path: string) => {
    router.push(path)
  }
</script>
