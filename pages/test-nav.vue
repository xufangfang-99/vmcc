<template>
  <div class="p-5 max-w-6xl mx-auto">
    <!-- 原有内容 -->
    <el-card class="bg-[var(--tm-bg-primary)] border-[var(--tm-bd-primary)] mb-6">
      <template #header>
        <div>
          <h3 class="text-xl font-bold text-[var(--tm-text-primary)]">按需加载测试</h3>
        </div>
      </template>
      <el-space
        direction="vertical"
        size="large"
        class="w-full"
      >
        <el-input
          v-model="input"
          placeholder="请输入内容"
          class="w-full"
          :style="{
            '--el-input-border-color': 'var(--tm-bd-primary)',
            '--el-input-text-color': 'var(--tm-text-primary)',
            '--el-input-placeholder-color': 'var(--tm-text-placeholder)',
          }"
        />
        <div class="flex gap-4">
          <el-button
            :style="{
              backgroundColor: 'var(--tm-btn-primary-background-0)',
              color: 'var(--tm-btn-primary-text-0)',
              borderColor: 'var(--tm-btn-primary-border-0)',
            }"
          >
            主要按钮
          </el-button>
          <el-button
            type="success"
            class="hover:opacity-90"
          >
            成功按钮
          </el-button>
          <el-button
            type="warning"
            class="hover:opacity-90"
            @click="helloClick"
          >
            警告按钮
          </el-button>
        </div>
      </el-space>
    </el-card>

    <!-- 导航切换测试 -->
    <el-card class="bg-[var(--tm-bg-primary)] border-[var(--tm-bd-primary)]">
      <template #header>
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-bold text-[var(--tm-text-primary)]">导航切换功能测试</h3>
          <el-tag :type="navigation.isDefaultNav ? 'info' : 'success'">
            当前导航：{{ navigation.isDefaultNav ? '默认导航' : '自定义导航' }}
          </el-tag>
        </div>
      </template>

      <el-space
        direction="vertical"
        size="large"
        class="w-full"
      >
        <!-- 测试按钮组 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="text-base font-semibold mb-2">场景1：显示三级菜单</h4>
            <el-button
              type="primary"
              size="small"
              @click="showThirdLevelMenu"
            >
              模拟显示三级菜单导航
            </el-button>
          </div>

          <div>
            <h4 class="text-base font-semibold mb-2">场景2：自定义链接导航</h4>
            <el-button
              type="success"
              size="small"
              @click="showCustomLinks"
            >
              显示自定义链接导航
            </el-button>
          </div>

          <div>
            <h4 class="text-base font-semibold mb-2">场景3：产品导航</h4>
            <el-button
              type="info"
              size="small"
              @click="showProductNav"
            >
              显示产品导航菜单
            </el-button>
          </div>

          <div>
            <h4 class="text-base font-semibold mb-2">控制选项</h4>
            <el-button
              type="warning"
              size="small"
              @click="resetNav"
            >
              恢复默认导航
            </el-button>
          </div>
        </div>

        <!-- 当前导航信息 -->
        <el-divider />
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded">
          <h4 class="text-sm font-semibold mb-2">当前导航信息：</h4>
          <div class="text-sm space-y-1">
            <p>
              <strong>导航类型：</strong>
              {{ navigation.navType }}
            </p>
            <p>
              <strong>基础路径：</strong>
              <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                {{ navigation.basePath || '未设置' }}
              </code>
            </p>
            <p><strong>菜单项：</strong></p>
            <ul
              v-if="navigation.customMenuItems.length > 0"
              class="ml-4 mt-1"
            >
              <li
                v-for="(item, index) in navigation.customMenuItems"
                :key="index"
                class="mb-1"
              >
                {{ item.name }}
                <span
                  v-if="item.link"
                  class="text-gray-500"
                >
                  → {{ item.link }}
                </span>
                <span
                  v-if="item.hasSubMenu"
                  class="text-blue-500"
                >
                  （有子菜单）
                </span>
              </li>
            </ul>
            <p
              v-else
              class="ml-4 text-gray-500"
            >
              使用默认导航
            </p>
          </div>
        </div>

        <!-- 说明 -->
        <el-alert
          type="info"
          :closable="false"
        >
          <template #title>
            <div class="text-sm">
              <p class="mb-1"><strong>使用说明：</strong></p>
              <ul class="ml-4 list-disc">
                <li>点击上方按钮可以切换header中的导航菜单</li>
                <li>在默认导航中点击"Locations"菜单项也会触发导航切换</li>
                <li>切换后的导航支持自定义链接和子菜单</li>
              </ul>
            </div>
          </template>
        </el-alert>
      </el-space>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { createError, useHead } from 'nuxt/app'
  import { ref } from 'vue'
  import { useNavigation } from '~/composables/useNavigation'

  const navigation = useNavigation()

  useHead({
    title: '我是首页',
    meta: [
      {
        name: 'description',
        content: '我是首页的描述',
      },
      {
        name: 'keywords',
        content: 'nuxt, seo, web开发, 网站优化',
      },
    ],
  })

  const input = ref('')

  function helloClick() {
    throw createError({
      statusCode: 404,
      message: '找不到页面',
      fatal: true,
    })
  }

  // 导航切换测试功能

  // 场景1：模拟三级菜单
  const showThirdLevelMenu = () => {
    navigation.switchToCustom(
      [
        { name: '策略咨询' },
        { name: '数字化转型' },
        { name: '组织变革' },
        { name: '可持续发展' },
        { name: '创新管理' },
      ],
      '/capabilities/strategy-corporate-finance'
    )
  }

  // 场景2：自定义链接
  const showCustomLinks = () => {
    navigation.switchToCustom([
      { name: '首页', link: '/' },
      { name: 'GitHub', link: 'https://github.com' },
      { name: '文档', link: '/docs' },
      { name: '博客', link: '/blog' },
      { name: '关于', link: '/about' },
    ])
  }

  // 场景3：产品导航
  const showProductNav = () => {
    navigation.switchToCustom(
      [
        { name: '产品概览', link: '/products' },
        {
          name: '解决方案',
          hasSubMenu: true,
          subItems: [
            { name: '企业版', link: '/products/enterprise' },
            { name: '专业版', link: '/products/professional' },
            { name: '基础版', link: '/products/basic' },
          ],
        },
        { name: '定价', link: '/pricing' },
        { name: '案例', link: '/cases' },
        { name: '支持', link: '/support' },
      ],
      '/products'
    )
  }

  // 恢复默认导航
  const resetNav = () => {
    navigation.switchToDefault()
  }
</script>

<style scoped>
  .container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
</style>
