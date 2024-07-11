import { Group } from '@/shared/contract/Group';
import { Region } from '@/shared/contract/Region';
import { requestWrapper } from '@/shared/api/helpers'
import { requestService } from '@/shared/api/requestService'

export async function getRegionIdByCity(townId: number): Promise<number | undefined> {

  let groups: Group[] = await requestWrapper(
    requestService.get<Group[]>('/groups/', {
      params: { town: townId },
    }),

  )
  let { locality: localityId } = groups[0];
  let locality: Locality = await requestWrapper(
    requestService.get<Locality>(`/localities/${localityId}/`, {})
  )
  let { service_region: serviceId } = locality;
  let service: Region = await requestWrapper(
    requestService.get<Region>(`/service-regions/${serviceId}/`, {})
  )
  // debugger;
  return service.id;
}

