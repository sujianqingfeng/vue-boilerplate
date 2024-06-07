import type { UnwrapRef } from 'vue'
import type { BaseResp, PageResp } from '~/api/types'

type UseRequestOptions<R, P, T> = {
  apiFn: (
    params: P
  ) => Promise<{ data: BaseResp<R>; error: null } | { error: any; data: null }>
  params?: P
  defaultData?: T
  autoFetch?: boolean
}

export function useRequest<R = unknown, P = any, T = Partial<R>>({
  apiFn,
  defaultData = {} as T,
  params = {} as P,
  autoFetch = true
}: UseRequestOptions<R, P, T>) {
  const data = ref<NonNullable<R>>(defaultData as NonNullable<R>)
  const loading = ref(false)

  const fetchApi = async (params: P) => {
    loading.value = true
    const { error, data: result } = await apiFn(params)
    loading.value = false
    if (error) {
      return { error, data: result }
    }

    if (result) {
      data.value = result.data as UnwrapRef<NonNullable<R>>
    }

    return { error, data: result }
  }

  if (autoFetch) {
    fetchApi(params)
  }

  return {
    data,
    loading,
    fetchApi
  }
}

type UseRequestPageOptions<R, P> = {
  apiFn: (
    params: P
  ) => Promise<
    { data: BaseResp<PageResp<R>>; error: null } | { error: any; data: null }
  >
  params?: P
  defaultData?: PageResp<R>
  autoFetch?: boolean
}

export function useRequestPage<R = unknown, P = any>({
  apiFn,
  defaultData = { content: [], total: 0 },
  params = {} as P,
  autoFetch = true
}: UseRequestPageOptions<R, P>) {
  const {
    data,
    loading,
    fetchApi: fetchListApi
  } = useRequest({
    apiFn,
    defaultData,
    params,
    autoFetch
  })

  const total = computed(() => data.value.total)
  const list = computed(() => data.value.content)

  return {
    list,
    total,
    loading,
    fetchListApi
  }
}
