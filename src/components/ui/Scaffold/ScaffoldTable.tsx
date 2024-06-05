import type { ScaffoldTableProps } from './types'
import { ElTable, ElTableColumn } from 'element-plus'
import { useScaffoldContext } from './composables/use-scaffold'

import 'element-plus/theme-chalk/el-table.css'
import 'element-plus/theme-chalk/el-table-column.css'

export default defineComponent(
  ({ columns }) => {
    const { data } = useScaffoldContext()

    return () => {
      return (
        <ElTable data={data.value?.data.content ?? []}>
          {columns.map((column) => (
            <ElTableColumn {...column} />
          ))}
        </ElTable>
      )
    }
  },
  {
    props: {
      columns: {
        type: Array as PropType<ScaffoldTableProps['columns']>,
        default: () => []
      }
    }
  }
)
