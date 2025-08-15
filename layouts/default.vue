<template>
  <el-container class="min-h-screen bg-[var(--tm-bg-primary)] transition-colors duration-300">
    <el-header class="border-0 border-b border-solid border-[var(--tm-bd-primary)]">
      <div class="flex justify-between items-center h-full">
        <div class="flex items-center gap-4">
          <MenuIcon @click="handleIconClick" />
          <Logo></Logo>
          <!-- 仅在非移动端显示 PrimaryNav -->
          <Responsive :not-mobile="true">
            <PrimaryNav></PrimaryNav>
          </Responsive>
        </div>
        <ThemeSelector />
      </div>
    </el-header>
    <el-main class="bg-[var(--tm-bg-secondary)] transition-colors duration-300">
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
  const handleIconClick = () => {
    console.log('menu')
  }
</script>
