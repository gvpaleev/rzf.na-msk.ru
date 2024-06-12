import { AxiosResponse } from 'axios'

import { Response, requestWrapper } from './helpers'
import { requestService } from './requestService'

interface MeetingLocation {
  address: string
}

export type MeetingType = {
  id?: number
  name: string
  town?: number
  location?: MeetingLocation
}

export type MeetingsCounter = {
  group_count: number
  meetings_count: number
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

export const loadMeetingsCounter = (
  townId: number,
): Promise<MeetingsCounter> => {
  return requestWrapper(
    requestService.get<void, AxiosResponse<Response<MeetingsCounter>>>(
      '/counter/',
      {
        params: { town_id: townId },
      },
    ),
  )
}
