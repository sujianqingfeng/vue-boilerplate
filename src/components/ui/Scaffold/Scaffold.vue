<script setup lang="ts" generic="R = any, P = any">
import type { ScaffoldProps } from './types'
import { useProvideScaffold } from './composables/use-scaffold'
import ScaffoldTable from './ScaffoldTable'

const props = withDefaults(defineProps<ScaffoldProps<R, P>>(), {})

const { onQuery, onReset, total, list, pagination } = useProvideScaffold(props)
</script>

<template>
  <ScaffoldQuery v-bind="queryConfig" @query="onQuery" @reset="onReset" />
  <ScaffoldOperation v-bind="operationConfig" />
  <ScaffoldTable :columns="tableConfig.columns" :data="list" />
  <div class="mt-4 flex justify-end items-center">
    <el-pagination
      v-model:current-page="pagination.currentPage"
      v-model:page-size="pagination.pageSize"
      :total="total"
    />
  </div>
</template>
