<script setup lang="ts">
import { BasePageResp, UserResp } from '~/api/types'
import { sleep } from '~/utils/basic'

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
        prop: 'username'
      }
    ]
  },
  requestConfig: {
    queryKey: ['user'],
    queryFn: async (params) => {
      console.log('🚀 ~ queryFn: ~ params:', params)
      await sleep(2000)

      console.log('🚀 ~ queryFn: ~ queryFn:')
      const r: BasePageResp<UserResp> = {
        data: {
          content: [
            {
              username: '11111',
              age: 3,
              id: 1
            }
          ],
          total: 100
        }
      }
      return r
    }
  }
})
</script>

<template>
  <div class="bg-white h-full p-4">
    <Scaffold v-bind="props" />
  </div>
</template>
