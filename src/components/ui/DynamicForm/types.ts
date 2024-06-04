import type { SelectWithOptionsProps } from '../SelectWithOptions'
import type { InputProps } from 'element-plus'

type CommonSchema = { label?: string; placeholder?: string; required?: boolean }

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

export type FormSchema = FormSelectSchema | FormInputSchema
