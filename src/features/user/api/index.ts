import type { User, UserParams } from './types'
import type { BasePageResp, BaseResp } from '~/api/types'
import { requestGet } from '~/lib/api-client'
import { sleep } from '~/utils/basic'

export const fetchUserPageListApi = async () => {
  console.log('🚀 ~ fetchUserPageListApi ~ fetchUserPageListApi:')
  await sleep(2000)

  const data: BasePageResp<User> = {
    data: {
      content: [
        {
          id: '1',
          name: 'one'
        },
        {
          id: '2',
          name: 'two'
        }
      ],
      total: 2
    }
  }

  return {
    error: null,
    data
  }
}

export const fetchUserApi = (params: UserParams) =>
  requestGet<BaseResp<User>>('/user', params)
