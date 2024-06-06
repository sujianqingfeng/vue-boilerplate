import type { FormSchema } from '../DynamicForm'
import type { QueryKey } from '@tanstack/vue-query'
import type { ColProps, TableColumnInstance } from 'element-plus'
import type { BasePageResp } from '~/api/types'

type Form = Record<string, any>
export type InjectScaffoldRootContext = {
  schemas: FormSchema[]
  form: Ref<Form>
  updateForms: (data: Form) => void
  data: Ref<BasePageResp<any> | undefined>
}

export type EPPagination = {
  pageSize: number
  currentPage: number
}
export type Pagination = {
  current: number
  size: number
}

export type ScaffoldQueryProps = {
  schemas: FormSchema[]
  labelWidth?: string
  formItemCol?: Partial<ColProps>
}

export type ScaffoldTableProps = {
  columns: TableColumnInstance['$props'][]
}

export type ScaffoldProps = {
  queryConfig: ScaffoldQueryProps
  tableConfig: ScaffoldTableProps
  requestConfig: {
    queryKey: QueryKey
    queryFn: (
      params: Record<string, any> & Required<Pagination>
    ) => Promise<BasePageResp<any>>
  }
}
