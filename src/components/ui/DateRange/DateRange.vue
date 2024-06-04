<script setup lang="ts">
import type { DateRangeProps } from './types'
import { dayjs } from 'element-plus'

const props = withDefaults(defineProps<DateRangeProps>(), {
  withEndTimeOfDay: true,
  type: 'daterange',
  valueFormat: 'YYYY-MM-DD',
  modelValue: () => ['', '']
})

const model = defineModel<[string, string]>({
  set(val) {
    if (!val) {
      return ['', '']
    }
    const { valueFormat, withEndTimeOfDay } = props
    const isDetailTime = valueFormat.includes('HH:mm:ss') && withEndTimeOfDay
    return [
      val[0],
      isDetailTime
        ? `${dayjs(val[0]).endOf('day').format(valueFormat)}`
        : val[1]
    ]
  }
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { modelValue, ...rest } = props
</script>

<template>
  <el-date-picker v-model="model" v-bind="rest" />
</template>
