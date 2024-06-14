import {
  Meeting,
  MeetingsCounter,
  loadMeetingsCounter,
  loadMeetingsToday,
} from '@/api/meetings'
import { $currentTown } from '@/components/SelectTownModal/store/currentTown'
import { TownType } from '@/utils/types/town'
import { createEffect, createEvent, createStore, sample } from 'effector'

export const $meetings = createStore<Meeting[]>([])
export const $meetingsCounter = createStore<MeetingsCounter>({
  group_count: 0,
  meetings_count: 0,
})

const loadMeetingsTodayEvent = createEvent<TownType | null>()

const loadMeetingsTodayFx = createEffect<TownType | null, Meeting[]>((town) => {
  if (!town) {
    throw new Error('Не выбран город')
  }
  return loadMeetingsToday(town.id)
})

const loadMeetingsCounterFx = createEffect<TownType | null, MeetingsCounter>(
  (town) => {
    if (!town) {
      throw new Error('Не выбран город')
    }
    return loadMeetingsCounter(town.id)
  },
)

sample({
  clock: $currentTown,
  target: [loadMeetingsTodayEvent, loadMeetingsCounterFx],
})

sample({
  clock: loadMeetingsTodayEvent,
  target: loadMeetingsTodayFx,
})

sample({
  clock: loadMeetingsTodayFx.doneData,
  target: $meetings,
})

sample({
  clock: loadMeetingsCounterFx.doneData,
  target: $meetingsCounter,
})
