<script setup lang="ts">
definePage({
  meta: {
    title: 'Index'
  }
})

const { props } = useScaffold({
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
    }
  ]
})
</script>

<template>
  <Scaffold v-bind="props" />
</template>
