import { loadTowns } from '@/shared/api/towns'
import { setItemToLocalStorage } from '@/shared/utils/getItemFromLocalStorage'
import { Town } from '@/shared/utils/types/town'
import { LocalStorageKeys } from '@/shared/utils/types/utils'
import {
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector'

export const $towns = createStore<Town[]>([])

export const loadTownsEvent = createEvent()
export const filterTownEvent = createEvent<string>()
export const clearTownFilterEvent = createEvent()

const $currentTownId = createStore<number | null>(null)

export const setCurrentTownIdEvent = createEvent<number | undefined>()
$currentTownId.on(setCurrentTownIdEvent, (_, townId) => {
  // debugger;
  return townId
})

//Не использывать !!!! К выпелке
export const $currentTown =


  createStore<Town | null>(null);

$currentTown.on(setCurrentTownIdEvent, (_, newTownId) => {
  let towns = $towns.getState();
  return towns.filter((town) => town.id == newTownId)[0];
})
$currentTown.watch((currentTown) => {
  if (!currentTown) return
  setItemToLocalStorage(LocalStorageKeys.CURRENT_TOWN, currentTown)
})

const loadTownsFx = createEffect(async () => loadTowns())

$towns.on(
  loadTownsFx.done.map(({ result }) => result),
  (_, towns) => towns,
)

export const $filteredTowns = createStore<Town[]>([])

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
