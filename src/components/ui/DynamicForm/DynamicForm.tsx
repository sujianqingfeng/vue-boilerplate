import type { FormSchema } from './types'
import { ElInput } from 'element-plus'
import { getKey, getPlaceholder } from './utils'
import { DateRange } from '../DateRange'
import { SelectWithOptions } from '../SelectWithOptions'

export default defineComponent(
  ({ schema, form, updateForms }) => {
    console.log('🚀 ~ form:', form)
    return () => {
      const { type, field } = schema

      switch (type) {
        case 'select':
          return (
            <SelectWithOptions
              placeholder={getPlaceholder(schema)}
              {...schema.componentProps}
              modelValue={form[field]}
              onUpdate:modelValue={(value) => updateForms({ [field]: value })}
            />
          )

        case 'input':
          return (
            <ElInput
              placeholder={getPlaceholder(schema)}
              {...schema.componentProps}
              modelValue={form[field]}
              onUpdate:modelValue={(value) => updateForms({ [field]: value })}
            />
          )

        case 'date-range':
          return (
            <DateRange
              placeholder={getPlaceholder(schema)}
              {...schema.componentProps}
              modelValue={form[getKey(field)]}
              onUpdate:modelValue={(value) =>
                updateForms({ [getKey(field)]: value })
              }
            />
          )

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
      },
      form: {
        type: Object as PropType<Record<string, any>>,
        required: true
      },
      updateForms: {
        type: Function as PropType<(data: Record<string, any>) => void>,
        required: true
      }
    }
  }
)
