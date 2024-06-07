export type BaseResp<T> = {
  data: T
}

export type PageResp<T> = { content: T[]; total: number }

export type BasePageResp<T> = BaseResp<PageResp<T>>

export type UserResp = {
  username: string
  age: number
  id: number
}
