<script lang="ts" setup>
import type { PaginationProps } from 'element-plus'
import { useScaffoldContext } from './composables/use-scaffold'

const props = defineProps<Partial<PaginationProps>>()
const emit = defineEmits<{
  change: [currentPage: number, pageSize: number]
}>()

// const { data } = useScaffoldContext()

// const onChange = (currentPage: number, pageSize: number) => {
//   updatePagination({
//     currentPage,
//     pageSize
//   })
// }

const onCurrentChange = (currentPage: number) => {
  emit('change', currentPage, props.pageSize ?? 10)
}

const onSizeChange = (pageSize: number) => {
  emit('change', props.currentPage ?? 1, pageSize)
}
</script>

<template>
  <el-pagination
    v-bind="props"
    :page-count="100"
    @current-change="onCurrentChange"
    @size-change="onSizeChange"
  />
</template>
