import type { FormSchema } from '../DynamicForm'
import type { ColProps, TableColumnInstance } from 'element-plus'
import type { BaseResp, PageResp } from '~/api/types'

type Form = Record<string, any>
export type InjectScaffoldRootContext = {
  schemas: FormSchema[]
  form: Ref<Form>
  updateForms: (data: Form) => void
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

export type ScaffoldTableProps<K extends string | number | symbol> = {
  columns: (TableColumnInstance['$props'] & { prop?: K })[]
}

export type ScaffoldProps<R, P> = {
  queryConfig: ScaffoldQueryProps
  tableConfig: ScaffoldTableProps<keyof R>
  requestConfig: {
    defaultPageSize?: number
    apiFn: (
      params: P
    ) => Promise<
      { data: BaseResp<PageResp<R>>; error: null } | { error: any; data: null }
    >
  }
}
