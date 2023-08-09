import { Response, requestWrapper } from '@/api/helpers'
import { requestService } from '@/api/requestService'
import { TownType } from '@/utils/types/town'
import { AxiosResponse } from 'axios'

export const loadTowns = () =>
  requestWrapper(
    requestService.get<void, AxiosResponse<Response<TownType[]>>>('/towns'),
  )
