<template>
  <div>
    <h2>内容页</h2>
    <el-card v-if="route.params.content">
      <template #header>
        <h3>路由信息</h3>
      </template>
      <p>当前路径: {{ route.path }}</p>
      <p>{{ route.params.content }}内容参数: {{ route.params.content }}</p>
      <p>全路径: {{ route.fullPath }}</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'nuxt/app'
  import { onMounted, watch } from 'vue'
  const route = useRoute()
  console.log(route.params.content)
  onMounted(() => {
    console.log({
      path: route.path,
      name: route.name,
      params: route.params,
    })
    console.log(route.fullPath)
  })

  watch(
    () => route.params.content,
    (newValue) => {
      console.log('路由参数变化:', {
        content: newValue,
        path: route.path,
        name: route.name,
      })
    },
    { immediate: true }
  )
</script>

<style scoped>
  .el-card {
    margin: 20px;
  }
</style>
