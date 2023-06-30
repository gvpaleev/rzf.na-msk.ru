import { createEvent, createStore } from 'effector'

type TownType = { id: string; name: string }
export const $currentTown = createStore<TownType | null>(null)

export const $currentTownName = $currentTown.map((town) => town?.name ?? '')
export const setCurrentTown = createEvent<TownType>()

$currentTown.on(setCurrentTown, (_, town) => town)
