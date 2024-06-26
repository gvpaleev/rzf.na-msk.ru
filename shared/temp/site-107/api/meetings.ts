import { AxiosResponse } from 'axios'

import { Response, requestWrapper } from './helpers'
import { requestService } from './requestService'

export type MeetingType = {
  id: number
  name: string
  town: number
}

export const loadTownMeetings = (townId: number): Promise<MeetingType[]> => {
  return requestWrapper(
    requestService.get<void, AxiosResponse<Response<MeetingType[]>>>(
      '/groups/',
      {
        params: { town: townId },
      },
    ),
  )
}

export const loadRegionMeetings = (
  regionId: number,
): Promise<MeetingType[]> => {
  return requestWrapper(
    requestService.get<void, AxiosResponse<Response<MeetingType[]>>>(
      '/groups/',
      {
        params: { region: regionId },
      },
    ),
  )
}
