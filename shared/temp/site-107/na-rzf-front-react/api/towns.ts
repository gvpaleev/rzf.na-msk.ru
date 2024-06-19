import { Town } from '@utils/types/town'

import { requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'

export const loadTowns = () => {
  const all = 'true'
  return requestWrapper(
    requestService.get<Town[]>('/towns/', {
      params: { all },
    }),
  )
}
