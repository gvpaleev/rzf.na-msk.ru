import { AxiosResponse } from 'axios'

import { Response, requestWrapper } from './helpers'
import { requestService } from './requestService'

export interface Meeting {
  id?: number
  group?: Group
  duration?: string
  time: string
  day_of_week: string
  schedule: string
  online?: boolean
  online_description?: string
  committee?: number
  locality?: number
  location?: number
  type: number
}

export interface Group {
  id?: number
  location?: Location
  name: string
  slug?: string
  description?: string
  show_map?: boolean
  free_services?: string
  email?: string
  active?: boolean
  town?: number
  locality?: number
  servant: number
}

export interface Location {
  id?: number
  title: string
  latitude_longitude?: string
  ya_company_id?: string
  map: string
  address: string
  place_description?: string
  accessibility_for_disabled?: boolean
  step_availability?: boolean
  edit_date_information?: Date
  images?: string
  town?: number
  metro_stations?: number[]
}

export type MeetingsCounter = {
  group_count: number
  meetings_count: number
}

export const loadMeetingsToday = (townId: number): Promise<Meeting[]> => {
  return requestWrapper(
    requestService.get<void, AxiosResponse<Response<Meeting[]>>>(
      '/meetings-today/',
      {
        params: { town_id: townId },
      },
    ),
  )
}

export const loadMeetingsCounter = (
  townId: number,
): Promise<MeetingsCounter> => {
  return requestWrapper(
    requestService.get<MeetingsCounter>('/counter/', {
      params: { town_id: townId },
    }),
  )
}
