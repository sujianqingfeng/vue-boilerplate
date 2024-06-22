<script lang="ts" setup>
import type { ScaffoldOperationProps } from './types'

withDefaults(defineProps<ScaffoldOperationProps>(), {
  actions: () => ({
    spaceSize: 0,
    list: []
  })
})
</script>

<template>
  <div class="flex justify-end items-center">
    <Actions v-bind="actions" />
  </div>
</template>
