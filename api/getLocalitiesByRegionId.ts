import { requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'


export async function getLocalitiesByRegionId(id: number): Promise<Locality[]> {
  debugger;
  return await requestWrapper(
    requestService.get<Locality[]>(`/localities/`, {
      params: {
        service_region: id
      }
    })
  )

}

