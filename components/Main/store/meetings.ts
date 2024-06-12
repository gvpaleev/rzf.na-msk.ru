import {
  MeetingType,
  MeetingsCounter,
  loadMeetingsCounter,
  loadRegionMeetings,
  loadTownMeetings,
} from '@/api/meetings'
import { $currentTown } from '@/components/SelectTownModal/store/currentTown'
import { TownType } from '@/utils/types/town'
import { createEffect, createEvent, createStore, sample } from 'effector'

export const $meetings = createStore<MeetingType[]>([])
export const $meetingsCounter = createStore<MeetingsCounter>({
  group_count: 0,
  meetings_count: 0,
})

const loadMeetingsEvent = createEvent<TownType | null>()

const loadTownMeetingsFx = createEffect<TownType | null, MeetingType[]>(
  (town) => {
    if (!town) {
      throw new Error('Не выбран город')
    }
    return loadTownMeetings(town.id)
  },
)

const loadMeetingsCounterFx = createEffect<TownType | null, MeetingsCounter>(
  (town) => {
    if (!town) {
      throw new Error('Не выбран город')
    }
    return loadMeetingsCounter(town.id)
  },
)

const loadRegionMeetingsFx = createEffect<TownType, MeetingType[]>((town) =>
  loadRegionMeetings(town.geographic_region),
)

sample({
  clock: $currentTown,
  target: [loadMeetingsEvent, loadMeetingsCounterFx],
})

sample({
  clock: loadMeetingsEvent,
  target: loadTownMeetingsFx,
})

sample({
  clock: loadRegionMeetingsFx.doneData,
  source: loadRegionMeetingsFx.done,
  filter: (_, meetings) => meetings.length > 0,
  fn: ({ params }) => params,
  target: loadRegionMeetingsFx,
})

sample({
  clock: [loadTownMeetingsFx.doneData, loadRegionMeetingsFx.doneData],
  target: $meetings,
})

sample({
  clock: loadMeetingsCounterFx.doneData,
  target: $meetingsCounter,
})
