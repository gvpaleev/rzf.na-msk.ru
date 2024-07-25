import { requestWrapper } from '@/shared/api/helpers'
import { requestService } from '@/shared/api/requestService'
import { Group } from '@/shared/contract/Group'

export async function getGroupById(id: number): Promise<Group> {
  let group: Group = await requestWrapper(
    requestService.get<Group>(`/groups/${id}/`, {}),
  )
  // debugger;
  return group
}
