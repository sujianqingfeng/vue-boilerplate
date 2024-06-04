<script setup lang="ts">
import type { SelectWithOptionsProps } from './types'

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const props = withDefaults(defineProps<SelectWithOptionsProps>(), {
  modelValue: ''
})

const modelValue = useVModel(props, 'modelValue', emit)
</script>

<template>
  <el-select v-model="modelValue">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
