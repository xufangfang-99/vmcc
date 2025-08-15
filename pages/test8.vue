<template>
  <div class="p-4">
    <el-card class="mb-4">
      <template #header>
        <div class="flex items-center justify-between">
          <span class="font-medium">Pop List</span>
          <div class="flex items-center gap-4">
            <el-button
              :loading="popState.pending"
              @click="refreshList"
            >
              刷新列表
            </el-button>
          </div>
        </div>
      </template>

      <!-- 加载状态 -->
      <div
        v-if="popState.pending"
        class="py-4"
      >
        <el-skeleton
          :rows="3"
          animated
        />
      </div>

      <!-- 错误状态 -->
      <div
        v-else-if="popState.error"
        class="text-red-500"
      >
        {{ popState.error }}
      </div>

      <!-- 数据展示 -->
      <template v-else-if="popState.data">
        <div class="mb-4 flex items-center justify-between">
          <div>总数: {{ popState.data.total }}</div>
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :total="popState.data.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>

        <el-table
          :data="popState.data.list"
          border
          stripe
        >
          <el-table-column
            prop="id"
            label="ID"
            width="80"
          />
          <el-table-column
            prop="title"
            label="标题"
            min-width="200"
            show-overflow-tooltip
          />
          <el-table-column
            prop="lang"
            label="语言"
            width="100"
          />
          <el-table-column
            label="弹窗类型"
            width="120"
          >
            <template #default="{ row }">
              <el-tag>{{ getPopTypeName(row.popType) }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            label="跳转类型"
            width="120"
          >
            <template #default="{ row }">
              <el-tag type="success">{{ getRedirectTypeName(row.redirectType) }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="sort"
            label="排序"
            width="80"
          />
          <el-table-column
            label="创建时间"
            width="180"
          >
            <template #default="{ row }">
              {{ formatTime(row.createdAt) }}
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="120"
            fixed="right"
          >
            <template #default="{ row }">
              <el-button
                link
                type="primary"
                @click="showDetail(row)"
              >
                查看详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

      <!-- 空状态 -->
      <div
        v-else
        class="text-gray-400 py-4 text-center"
      >
        No data available
      </div>
    </el-card>

    <!-- 详情弹窗 -->
    <el-dialog
      v-model="showDetailDialog"
      :title="currentDetail?.title"
      width="600px"
      destroy-on-close
    >
      <div
        v-if="currentDetail"
        class="space-y-4"
      >
        <el-image
          v-if="currentDetail.thumbnail"
          :src="currentDetail.thumbnail"
          fit="cover"
          class="w-full rounded"
        />
        <div class="whitespace-pre-wrap">{{ currentDetail.content }}</div>
        <div class="text-sm text-gray-500">跳转参数: {{ currentDetail.redirectParas }}</div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { PopListItem } from '~/api/modules/pop'
  import { PopApi, PopType, RedirectType } from '~/api/modules/pop'
  import dayjs from 'dayjs'

  // 分页参数
  const currentPage = ref(1)
  const pageSize = ref(10)

  // 请求状态
  const popState = await PopApi.getPopList({
    start: 0,
    limit: pageSize.value,
  })

  // 详情弹窗状态
  const showDetailDialog = ref(false)
  const currentDetail = ref<PopListItem | null>(null)

  // 刷新列表
  const refreshList = () => {
    popState.value.refresh()
  }

  // 格式化时间
  const formatTime = (timestamp: number) => {
    return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
  }

  // 获取弹窗类型名称
  const getPopTypeName = (type: PopType) => {
    const names = {
      [PopType.NotLoggedIn]: '未登录弹窗',
      [PopType.LoggedIn]: '登录弹窗',
      [PopType.ReturnHome]: '返回首页弹窗',
      [PopType.RefreshPage]: '界面刷新弹窗',
    }
    return names[type] || '未知类型'
  }

  // 获取跳转类型名称
  const getRedirectTypeName = (type: RedirectType) => {
    const names = {
      [RedirectType.SpecificGame]: '指定游戏',
      [RedirectType.InternalPage]: '内部界面',
      [RedirectType.ActivityDetail]: '活动详情',
      [RedirectType.ExternalLink]: '外部链接',
    }
    return names[type] || '未知类型'
  }

  // 显示详情
  const showDetail = (item: PopListItem) => {
    currentDetail.value = item
    showDetailDialog.value = true
  }

  // 处理分页变化
  const handleSizeChange = async (size: number) => {
    pageSize.value = size
    currentPage.value = 1
    const newState = await PopApi.getPopList({
      start: 0,
      limit: size,
    })
    Object.assign(popState, newState)
  }

  const handleCurrentChange = async (page: number) => {
    currentPage.value = page
    const newState = await PopApi.getPopList({
      start: (page - 1) * pageSize.value,
      limit: pageSize.value,
    })
    Object.assign(popState, newState)
  }
</script>
