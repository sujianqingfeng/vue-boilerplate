<script setup lang="ts">
import type { ScaffoldProps } from './types'

withDefaults(defineProps<ScaffoldProps>(), {})
</script>

<template>
  <el-row>
    <el-col v-for="(schema, index) in schemas" :key="index">
      <span>{{ schema.label }}</span>
    </el-col>
  </el-row>
</template>
