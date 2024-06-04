import type { FormSchema } from './types'
import { ElInput } from 'element-plus'
import { DateRange } from '../DateRange'
import { SelectWithOptions } from '../SelectWithOptions'

export default defineComponent(
  ({ schema }) => {
    return () => {
      const { type } = schema

      switch (type) {
        case 'select':
          return <SelectWithOptions {...schema.componentProps} />

        case 'input':
          return <ElInput />

        case 'date-range':
          return <DateRange />

        default:
          return <div>unknown type: {type}</div>
      }
    }
  },
  {
    props: {
      schema: {
        type: Object as PropType<FormSchema>,
        required: true
      }
    }
  }
)
