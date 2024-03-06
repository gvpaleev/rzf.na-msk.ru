import {
  MeetingType,
  loadRegionMeetings,
  loadTownMeetings,
} from '@/api/meetings'
import { $currentTown } from '@/components/SelectTownModal/store/currentTown'
import { TownType } from '@/utils/types/town'
import { createEffect, createEvent, createStore, sample } from 'effector'

export const $meetings = createStore<MeetingType[]>([])

const loadMeetingsEvent = createEvent<TownType | null>()

const loadTownMeetingsFx = createEffect<TownType | null, MeetingType[]>(
  (town) => {
    if (!town) {
      throw new Error('Не выбран город')
    }
    return loadTownMeetings(town.id)
  },
)

const loadRegionMeetingsFx = createEffect<TownType, MeetingType[]>((town) =>
  loadRegionMeetings(town.geographic_region),
)

sample({
  clock: $currentTown,
  target: loadMeetingsEvent,
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
