import { Town } from '@/shared/utils/types/town'

import { requestWrapper } from '@/shared/api/helpers'
import { requestService } from '@/shared/api/requestService'

export const loadTowns = () => {
  const all = 'true'
  return requestWrapper(
    requestService.get<Town[]>('/towns/', {
      params: { all },
    }),
  )
}
