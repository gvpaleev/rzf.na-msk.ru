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

export const $towns = createStore<TownType[]>([])

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

sample({
  clock: setCurrentTownIdEvent,
  source: $towns,
  filter: (towns) => towns.length === 0,
  target: loadTownsFx,
})
