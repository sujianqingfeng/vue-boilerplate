import { ElTable, ElTableColumn, type TableColumnInstance } from 'element-plus'

import 'element-plus/theme-chalk/el-table.css'
import 'element-plus/theme-chalk/el-table-column.css'

export default defineComponent(
  (props) => {
    return () => {
      return (
        <ElTable data={props.data}>
          {props.columns.map((column, i) => (
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
