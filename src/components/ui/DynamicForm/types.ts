import type { SelectWithOptionsProps } from '../SelectWithOptions'
import type { InputProps } from 'element-plus'

type CommonSchema = {
  label?: string
  placeholder?: string
  required?: boolean
  labelWidth?: string
}

type FormSelectSchema = CommonSchema & {
  type: 'select'
  field: string
  componentProps?: SelectWithOptionsProps
  onChange?: (value: any) => void
}

type FormInputSchema = CommonSchema & {
  type: 'input'
  field: string
  componentProps?: InputProps
  onChange?: (value: any) => void
}

type FormDateRangeSchema = CommonSchema & {
  type: 'date-range'
  field: [string, string]
}

export type FormSchema =
  | FormSelectSchema
  | FormInputSchema
  | FormDateRangeSchema
