<script setup lang="ts">
import type { ScaffoldProps } from './types'
import { useProvideScaffold } from './composables/use-scaffold'
import ScaffoldPagination from './ScaffoldPagination.vue'
import ScaffoldTable from './ScaffoldTable'

const props = withDefaults(defineProps<ScaffoldProps>(), {})

const { data, onQuery, onReset, pagination, onPaginationChange, refetch } =
  useProvideScaffold(props)

const onCurrentChange = async (currentPage: number) => {
  console.log('🚀 ~ onCurrentChange ~ currentPage:', currentPage)
  pagination.value.currentPage = currentPage
  await nextTick()
  refetch()
}

const onSizeChange = (pageSize: number) => {
  pagination.value.pageSize = pageSize

  // refetch()
}
</script>

<template>
  <ScaffoldQuery v-bind="queryConfig" @query="onQuery" @reset="onReset" />
  <ScaffoldTable v-bind="tableConfig" />

  <div>
    {{ data?.data.total }}
    {{ pagination }}
    <el-pagination
      :page-count="data?.data.total ?? 0"
      v-bind="pagination"
      @current-change="onCurrentChange"
      @size-change="onSizeChange"
    />
  </div>
</template>
