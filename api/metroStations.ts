import { requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'

export interface MetroStation {
  id?: number
  name: string
  html_color: string
  town?: number
}

export const loadMetroStations = (townId: number) => {
  return requestWrapper(
    requestService.get<MetroStation[]>('/metro-stations/', {
      params: { town: townId },
    }),
  )
}
