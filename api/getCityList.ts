import { RegionType } from '@/utils/types/region'
import { Town } from '@/utils/types/town'
import { AxiosResponse } from 'axios'

import { Response, requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'
import { CityList } from '@/shared/contract/CityList'

export type GetCityListResponseType = {
  /**
   * не уверен что сюда должно приходить, вероятно Array<Town>, а может просто ids🤔
   */
  big_towns: Array<unknown>
  regions: Array<RegionType>
  towns: Array<Town>
}

export const getCityList = () => {
  return requestWrapper(
    requestService.get<void, AxiosResponse<Response<CityList>>>(
      '/get-city-list/',
    ),
  )
}
