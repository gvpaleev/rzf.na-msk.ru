import { loadTowns } from '@/api/selectTown'
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from '@/utils/getItemFromLocalStorage'
import { TownType } from '@/utils/types/town'
import { LocalStorageKeys } from '@/utils/types/utils'
import { createEffect, createEvent, createStore, sample } from 'effector'

const $towns = createStore<TownType[]>([])
const setTownsEvent = createEvent<TownType[]>()

$towns.on(setTownsEvent, (_, towns) => towns).watch(console.log)

export const $currentTown = createStore<TownType | null>(null)

export const setCurrentTownEvent = createEvent<number>()

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
  clock: setCurrentTownEvent,
  source: $towns,
  fn: (towns, townId) => ({ towns, townId }),
  target: selectTownFx,
})

$currentTown.on(
  selectTownFx.done.map(({ result }) => result),
  (_, currentTown) => currentTown,
)

selectTownFx.done.watch(({ result }) => {
  setItemToLocalStorage(LocalStorageKeys.CURRENT_TOWN, result)
})
