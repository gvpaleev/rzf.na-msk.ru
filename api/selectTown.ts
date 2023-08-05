import { requestService } from '@/api/requestService'

type SelectTownParams = { townId: number }

type TownType = { id: number; name: string }

export const selectTown = ({ townId }: SelectTownParams) =>
  requestService.get<SelectTownParams, TownType>('/current-town/', {
    params: {
      town_id: townId,
    },
  })
