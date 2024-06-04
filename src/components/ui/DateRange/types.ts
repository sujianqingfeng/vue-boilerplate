import type { DatePickerProps } from 'element-plus'

export type DateRangeProps = Partial<DatePickerProps> & {
  withEndTimeOfDay?: boolean
}
