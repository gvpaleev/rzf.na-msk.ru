import { TownType } from '@utils/types/town'
import { AxiosResponse } from 'axios'

import { Response, requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'

export const loadTowns = () => {
  const all = 'true'
  return requestWrapper(
    requestService.get<void, AxiosResponse<Response<TownType[]>>>('/towns/', {
      params: { all },
    }),
  )
}
