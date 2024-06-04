import type { ISelectProps } from 'element-plus'

type Option = { label: string; value: string }

export type SelectWithOptionsProps = {
  options?: Option[]
} & Partial<ISelectProps>
