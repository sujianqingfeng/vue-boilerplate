import type {
  EPPagination,
  InjectScaffoldRootContext,
  Pagination,
  ScaffoldProps
} from '../types'
import { InjectionKey } from 'vue'
import { mapFields, resolveInitialForm } from '../../DynamicForm'
import { useRequestPage } from '~/composables/use-request'

export const SCAFFOLD_ROOT_KEY = Symbol(
  'InjectScaffoldRootContext'
) as InjectionKey<InjectScaffoldRootContext>

function transformPaginationParams(pagination: Ref<EPPagination>): Pagination {
  const { pageSize, currentPage: pageNo } = pagination.value
  return { current: pageNo, size: pageSize }
}

export function useProvideScaffold<R, P>(props: ScaffoldProps<R, P>) {
  const {
    queryConfig,
    requestConfig: { apiFn, defaultPageSize = 20 }
  } = props

  const initialForm = resolveInitialForm(queryConfig.schemas)
  const form = ref<Record<string, any>>(initialForm)
  const pagination = ref<EPPagination>({
    pageSize: defaultPageSize,
    currentPage: 1
  })

  const updateForms = (data: Record<string, any>) => {
    Object.assign(form.value, data)
  }

  const onQuery = () => {
    fetchList()
  }
  const onReset = () => {
    Object.assign(form.value, resolveInitialForm(queryConfig.schemas))
    pagination.value = {
      pageSize: defaultPageSize,
      currentPage: 1
    }
  }

  const mapForm = () => {
    return {
      ...mapFields(queryConfig.schemas, form.value),
      ...transformPaginationParams(pagination)
    } as P
  }

  const { list, total, fetchListApi } = useRequestPage({
    apiFn,
    params: mapForm()
  })

  const fetchList = () => {
    fetchListApi(mapForm())
  }

  watch(pagination, fetchList, { deep: true })

  provide(SCAFFOLD_ROOT_KEY, {
    schemas: queryConfig.schemas,
    form: readonly(form),
    updateForms
  })

  return {
    form,
    total,
    list,
    pagination,
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
