import { loadTowns } from '@/api/selectTown'
import { getItemFromLocalStorage } from '@/utils/getItemFromLocalStorage'
import { TownType } from '@/utils/types/town'
import { LocalStorageKeys } from '@/utils/types/utils'
import { createEffect, createEvent, createStore, sample } from 'effector'

const $towns = createStore<TownType[]>([])
const setTownsEvent = createEvent<TownType[]>()

$towns.on(setTownsEvent, (_, towns) => towns)

export const $currentTown = createStore<TownType | null>(
  getItemFromLocalStorage(LocalStorageKeys.CURRENT_TOWN),
)

export const setTownEvent = createEvent<number>()

const selectTownFx = createEffect(
  async ({ towns, townId }: { towns: TownType[]; townId: number }) => {
    const findTown = (towns: TownType[]): TownType | null => {
      return towns.find((town) => town.id === townId) || null
    }

    if (towns.length > 0) {
      return findTown(towns)
    }
    const loadedTowns = await loadTowns()
    setTownsEvent(loadedTowns)
    return findTown(loadedTowns)
  },
)

sample({
  clock: setTownEvent,
  source: $towns,
  fn: (towns, townId) => ({ towns, townId }),
  target: selectTownFx,
})
