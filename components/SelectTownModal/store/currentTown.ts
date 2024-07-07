import { getRegionIdByCity } from '@/api/getRegionIdByCity'
import { loadTowns } from '@/api/towns'
import { setItemToLocalStorage } from '@utils/getItemFromLocalStorage'
import { Town } from '@utils/types/town'
import { LocalStorageKeys } from '@utils/types/utils'
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector'

//Region
export const $currentRegionId = createStore<number | null>(null)


//Town
export const $towns = createStore<Town[]>([])
export const $filteredTowns = createStore<Town[]>([])

export const loadTownsEvent = createEvent()
export const filterTownEvent = createEvent<string>()
export const clearTownFilterEvent = createEvent()

const $currentTownId = createStore<number | null>(null)

export const setCurrentTownIdEvent = createEvent<number | undefined>()
$currentTownId.on(setCurrentTownIdEvent, (_, townId) => townId)

export const $currentTown = combine([$towns, $currentTownId]).map(
  ([towns, currentId]) => towns.find(({ id }) => id === currentId) ?? null,
)

const loadTownsFx = createEffect(async () => loadTowns())

const loadRegionIdFx = createEffect(async (townId: number | null) => {
  if (typeof townId !== 'number') return;
  return await getRegionIdByCity(townId);

})
$currentRegionId.on(loadRegionIdFx.doneData, (_, regionId) => regionId)
$currentRegionId.watch(console.log)
$currentTownId.on(setCurrentTownIdEvent, (_, townId) => {
  return townId
})

$currentTown.watch((currentTown) => {
  if (!currentTown) return
  setItemToLocalStorage(LocalStorageKeys.CURRENT_TOWN, currentTown)
})



$towns.on(
  loadTownsFx.done.map(({ result }) => result),
  (_, towns) => towns,
)

sample(
  {
    clock: $currentTownId,
    target: loadRegionIdFx,
  }
)
sample({
  clock: [loadTownsEvent],
  source: $towns,
  filter: (towns) => towns.length === 0,
  target: loadTownsFx,
})

sample({
  clock: $towns,
  target: $filteredTowns,
})

sample({
  clock: filterTownEvent,
  source: $towns,
  fn: (towns, searchStr) =>
    towns.filter((town) =>
      town.name.toLowerCase().includes(searchStr.toLowerCase()),
    ),
  target: $filteredTowns,
})

sample({
  clock: clearTownFilterEvent,
  source: $towns,
  target: $filteredTowns,
})
