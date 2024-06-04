<script setup lang="ts">
import type { ScaffoldProps } from './types'
import { useProvideScaffold } from './use-scaffold'

const props = withDefaults(defineProps<ScaffoldProps>(), {})

useProvideScaffold(props)
</script>

<template>
  <Query v-bind="queryConfig" />
</template>
