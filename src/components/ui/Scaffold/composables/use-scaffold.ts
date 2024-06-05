import type {
  EPPagination,
  InjectScaffoldRootContext,
  Pagination,
  ScaffoldProps
} from '../types'
import type { InjectionKey } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { resolveInitialForm } from '../../DynamicForm'

export const SCAFFOLD_ROOT_KEY = Symbol(
  'InjectScaffoldRootContext'
) as InjectionKey<InjectScaffoldRootContext>

function transformPaginationParams(pagination: Ref<EPPagination>): Pagination {
  const { pageSize, currentPage: pageNo } = pagination.value
  return { current: pageNo, size: pageSize }
}

export function useProvideScaffold(props: ScaffoldProps) {
  const { queryConfig, requestConfig } = props

  const initialForm = resolveInitialForm(queryConfig.schemas)
  const form = ref<Record<string, any>>(initialForm)
  // const dataSource = ref<Record<string, any>[]>([{ name: '111' }])
  const pagination = ref<EPPagination>({
    pageSize: 20,
    currentPage: 1
  })

  const updateForms = (data: Record<string, any>) => {
    Object.assign(form.value, data)
  }

  const onQuery = () => {
    console.log('🚀 ~ useProvideScaffold ~ form:', form)
    // dataSource.value = [{ name: '222222' }]
  }
  const onReset = () => {
    Object.assign(form.value, resolveInitialForm(queryConfig.schemas))
    console.log('🚀 ~ useProvideScaffold ~ form:', form)
    // dataSource.value = [{ name: '43444' }]
  }

  const { queryKey, queryFn } = requestConfig
  const { data } = useQuery({
    queryKey: [...queryKey, form, pagination],
    queryFn: () =>
      queryFn({ ...form.value, ...transformPaginationParams(pagination) })
  })

  provide(SCAFFOLD_ROOT_KEY, {
    schemas: queryConfig.schemas,
    form: readonly(form),
    data,
    updateForms
  })

  return {
    form,
    onQuery,
    onReset
  }
}

export function useScaffoldContext() {
  const context = inject(SCAFFOLD_ROOT_KEY, null)

  if (!context) {
    throw new Error('SCAFFOLD_ROOT_KEY not provide')
  }

  return context
}
