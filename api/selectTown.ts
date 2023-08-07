import { Response, requestWrapper } from '@/api/helpers'
import { requestService } from '@/api/requestService'
import { TownType } from '@/utils/types/town'

export const loadTowns = () =>
  requestWrapper(requestService.get<void, Response<TownType[]>>('/towns'))
