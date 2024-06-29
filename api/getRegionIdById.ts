import { ServiceRegion } from '@/shared/contract/ServiceRegion';
import { requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'

export async function getRegionIdById(id: number): Promise<ServiceRegion> {

  let service: ServiceRegion = await requestWrapper(
    requestService.get<ServiceRegion>(`/service-regions/${id}/`, {})
  )
  // debugger;
  return service;
}

