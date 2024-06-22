<script setup lang="ts">
import type { ScaffoldQueryProps } from './types'
import { useScaffoldContext } from './composables/use-scaffold'
import { DynamicForm } from '../DynamicForm'

withDefaults(defineProps<ScaffoldQueryProps>(), {
  formItemCol: () => ({ span: 6, md: 6, sm: 8, xs: 12 }),
  labelWidth: '80px',
  action: () => ({
    showQueryBt: true,
    showResetBt: true,
    queryBtText: '查询',
    resetBtText: '重置',
    span: 6
  })
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

    <el-col :span="action.span">
      <el-button v-if="action.showResetBt" @click="onReset">
        {{ action.resetBtText }}
      </el-button>
      <el-button v-if="action.showQueryBt" type="primary" @click="onQuery">
        {{ action.queryBtText }}
      </el-button>
    </el-col>
  </el-row>
</template>
