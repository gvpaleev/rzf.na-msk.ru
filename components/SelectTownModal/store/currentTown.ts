import { setItemToLocalStorage } from '@utils/getItemFromLocalStorage'
import { TownType } from '@utils/types/town'
import { LocalStorageKeys } from '@utils/types/utils'
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector'

import { loadTowns } from '@api/loadTowns'

const $towns = createStore<TownType[]>([])

export const loadTownsEvent = createEvent()
export const filterTownEvent = createEvent<string>()
export const clearTownFilterEvent = createEvent()

const $currentTownId = createStore<number | null>(null)

export const setCurrentTownIdEvent = createEvent<number>()
$currentTownId.on(setCurrentTownIdEvent, (_, townId) => townId)

export const $currentTown = combine([$towns, $currentTownId]).map(
  ([towns, currentId]) => towns.find(({ id }) => id === currentId) ?? null,
)

$currentTown.watch((currentTown) => {
  if (!currentTown) return
  setItemToLocalStorage(LocalStorageKeys.CURRENT_TOWN, currentTown)
})

const loadTownsFx = createEffect(async () => loadTowns())

$towns.on(
  loadTownsFx.done.map(({ result }) => result),
  (_, towns) => towns,
)

export const $filteredTowns = createStore<TownType[]>([])

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
