<script lang="ts" setup>
import type { ActionsProps } from './types'
const props = defineProps<ActionsProps>()

const showActions = computed(() =>
  props.list.filter((item) => item.show?.() ?? true)
)
</script>

<template>
  <el-space :size="spaceSize">
    <el-button
      v-for="(item, index) in showActions"
      :key="index"
      @click="item.onClick"
    >
      {{ item.title }}
    </el-button>
  </el-space>
</template>
