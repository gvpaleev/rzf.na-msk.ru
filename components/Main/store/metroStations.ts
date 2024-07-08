import { MetroStation, loadMetroStations } from '@/api/metroStations'
import { $currentTown } from '@/components/SelectTownModal/store/currentTown'
import { Town } from '@/utils/types/town'
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector'

export const $metroStations = createStore<MetroStation[]>([])

const $currentMetroStationId = createStore<number | null>(null)

export const setCurrentMetroStationIdEvent = createEvent<number | null>()
$currentMetroStationId.on(setCurrentMetroStationIdEvent, (_, townId) => townId)

export const $currentMetroStation = combine([
  $metroStations,
  $currentMetroStationId,
]).map(
  ([metroStations, currentId]) =>
    metroStations.find(({ id }) => id === currentId) ?? null,
)

const loadMetroStationsEvent = createEvent<Town | null>()

const loadMetroStationsFX = createEffect<Town | null, MetroStation[]>(
  (town) => {
    if (!town) {
      throw new Error('Не выбран город')
    }
    return loadMetroStations(town.id || 0)
  },
)

sample({
  clock: $currentTown,
  target: [loadMetroStationsEvent],
})

sample({
  clock: loadMetroStationsEvent,
  target: loadMetroStationsFX,
})

sample({
  clock: loadMetroStationsEvent,
  fn: () => null,
  target: $currentMetroStationId,
})

sample({
  clock: loadMetroStationsFX.doneData,
  target: $metroStations,
})
