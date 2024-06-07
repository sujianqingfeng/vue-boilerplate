<script setup lang="ts">
import { fetchUserPageListApi } from '~/features/user/api'

definePage({
  meta: {
    title: 'Index'
  }
})

const { props } = useScaffold({
  queryConfig: {
    schemas: [
      {
        type: 'select',
        field: 'select',
        label: 'Select',
        componentProps: {
          options: [
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' }
          ]
        }
      },
      {
        type: 'input',
        field: 'input',
        label: 'Input'
      },
      {
        type: 'date-range',
        field: ['start', 'end'],
        label: 'Date Range',
        labelWidth: '200px'
      }
    ]
  },
  tableConfig: {
    columns: [
      {
        label: 'Name',
        prop: 'name'
      }
    ]
  },
  requestConfig: {
    apiFn: fetchUserPageListApi
  }
})
</script>

<template>
  <div class="bg-white h-full p-4">
    <Scaffold v-bind="props" />
  </div>
</template>
