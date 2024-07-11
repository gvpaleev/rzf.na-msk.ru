import { Region } from '@/shared/contract/Region';
import { requestWrapper } from '@/shared/api/helpers'
import { requestService } from '@/shared/api/requestService'

export async function getRegionIdById(id: number): Promise<Region> {

  let service: Region = await requestWrapper(
    requestService.get<Region>(`/service-regions/${id}/`, {})
  )
  // debugger;
  return service;
}

