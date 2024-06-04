import type { FormSchema } from '../DynamicForm'
import type { ColProps } from 'element-plus'

export type InjectScaffoldRootContext = {
  schemas: FormSchema[]
}

export type ScaffoldQueryProps = {
  schemas: FormSchema[]
  labelWidth?: string
  formItemCol?: Partial<ColProps>
}

export type ScaffoldProps = {
  queryConfig: ScaffoldQueryProps
}
