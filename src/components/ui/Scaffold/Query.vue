<script setup lang="ts">
import type { ScaffoldQueryProps } from './types'
import { DynamicForm } from '../DynamicForm'

withDefaults(defineProps<ScaffoldQueryProps>(), {
  formItemCol: () => ({ span: 6, md: 6, sm: 8, xs: 12 }),
  labelWidth: '80px'
})
</script>

<template>
  <el-row :gutter="10">
    <el-col
      v-for="(schema, index) in schemas"
      :key="index"
      :span="formItemCol.span"
    >
      <div class="flex justify-start items-center">
        <span :style="{ width: schema.labelWidth ?? labelWidth }" class="mr-2">
          {{ schema.label }}:
        </span>
        <DynamicForm :schema="schema" />
      </div>
    </el-col>
  </el-row>
</template>
