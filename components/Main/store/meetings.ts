import {
  Meeting,
  MeetingType,
  MeetingsCounter,
  loadMeetingTypes,
  loadMeetingsCounter,
  loadMeetingsToday,
} from '@/api/meetings'
import { $currentTown } from '@/components/SelectTownModal/store/currentTown'
import { Town } from '@/utils/types/town'
import { createEffect, createEvent, createStore, sample } from 'effector'

export const $meetings = createStore<Meeting[]>([])
export const $meetingTypes = createStore<Record<number, string>>([])
export const $meetingsLoading = createStore<boolean>(true)
export const $meetingsCounter = createStore<MeetingsCounter>({
  group_count: 0,
  meetings_count: 0,
})

export const loadMeetingTypesEvent = createEvent()
const loadMeetingsTodayEvent = createEvent<Town | null>()

const loadMeetingsTodayFx = createEffect<Town | null, Meeting[]>((town) => {
  if (!town) {
    throw new Error('Не выбран город')
  }
  return loadMeetingsToday(town.id || 0)
})

const loadMeetingTypesFx = createEffect(() => {
  return loadMeetingTypes()
})

const loadMeetingsCounterFx = createEffect<Town | null, MeetingsCounter>(
  (town) => {
    if (!town) {
      throw new Error('Не выбран город')
    }
    return loadMeetingsCounter(town.id || 0)
  },
)

sample({
  clock: loadMeetingTypesEvent,
  target: loadMeetingTypesFx,
})

sample({
  clock: loadMeetingTypesFx.doneData,
  fn: (data) => {
    const result: Record<number, string> = {}
    for (const m of data) {
      result[m.id] = m.name
    }

    return result
  },
  target: $meetingTypes,
})

sample({
  clock: $currentTown,
  target: [loadMeetingsTodayEvent, loadMeetingsCounterFx],
})

sample({
  clock: loadMeetingsTodayEvent,
  target: loadMeetingsTodayFx,
})

sample({
  clock: loadMeetingsTodayFx.pending,
  target: $meetingsLoading,
})

sample({
  clock: loadMeetingsTodayFx.doneData,
  target: $meetings,
})

sample({
  clock: loadMeetingsCounterFx.doneData,
  target: $meetingsCounter,
})
