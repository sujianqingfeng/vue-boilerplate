import { ElTable, ElTableColumn, type TableColumnInstance } from 'element-plus'

import 'element-plus/theme-chalk/el-table.css'
import 'element-plus/theme-chalk/el-table-column.css'

export default defineComponent(
  ({ columns, data }) => {
    return () => {
      return (
        <ElTable data={data}>
          {columns.map((column, i) => (
            <ElTableColumn {...column} key={i} />
          ))}
        </ElTable>
      )
    }
  },
  {
    props: {
      columns: {
        type: Array as PropType<TableColumnInstance['$props'][]>,
        default: () => []
      },
      data: {
        type: Array as PropType<any[]>,
        default: () => []
      }
    }
  }
)
