<script setup lang="ts">
import type { ScaffoldProps } from './types'
import { useProvideScaffold } from './composables/use-scaffold'
import ScaffoldTable from './ScaffoldTable'

const props = withDefaults(defineProps<ScaffoldProps>(), {})

const { onQuery, onReset } = useProvideScaffold(props)
</script>

<template>
  <ScaffoldQuery v-bind="queryConfig" @query="onQuery" @reset="onReset" />
  <ScaffoldTable v-bind="tableConfig" />
</template>
