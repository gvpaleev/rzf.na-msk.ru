import { TownType } from '@utils/types/town'
import { AxiosResponse } from 'axios'

import { Response, requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'

export const loadTowns = () => {
  const limit = process.env.NEXT_PUBLIC_TOWNS_LIMIT
  return requestWrapper(
    requestService.get<void, AxiosResponse<Response<TownType[]>>>('/towns/', {
      params: { limit },
    }),
  )
}
