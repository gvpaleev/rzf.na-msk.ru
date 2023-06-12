import { createEvent, createStore } from 'effector'

type RegionType = { id: string; name: string }
export const $currentRegion = createStore<RegionType | null>(null)

export const $currentRegionName = $currentRegion.map(
  (currentRegion) => currentRegion?.name ?? '',
)
export const setCurrentRegion = createEvent<RegionType>()

$currentRegion.on(setCurrentRegion, (_, currentRegion) => currentRegion)
