<script setup lang="ts">
import type { ScaffoldQueryProps } from './types'
import { useScaffoldContext } from './composables/use-scaffold'
import { DynamicForm } from '../DynamicForm'

withDefaults(defineProps<ScaffoldQueryProps>(), {
  formItemCol: () => ({ span: 6, md: 6, sm: 8, xs: 12 }),
  labelWidth: '80px'
})

const emit = defineEmits<{
  reset: []
  query: []
}>()

const onReset = () => {
  emit('reset')
}
const onQuery = () => {
  emit('query')
}

const { form, updateForms } = useScaffoldContext()
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
        <DynamicForm
          :schema="schema"
          :form="form"
          :update-forms="updateForms"
        />
      </div>
    </el-col>

    <el-col>
      <el-button @click="onReset">重置</el-button>
      <el-button type="primary" @click="onQuery">查询</el-button>
    </el-col>
  </el-row>
</template>
