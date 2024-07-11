import {
  Meeting,
  MeetingsCounter,
  loadMeetingsCounter,
  loadScheduledMeetings,
} from '@/api/meetings'
import { $currentTown } from '@/components/SelectTownModal/store/currentTown'
import { Town } from '@/utils/types/town'
import { createEffect, createEvent, createStore, sample } from 'effector'

export const $scheduledMeetings = createStore<Meeting[]>([])
export const $scheduledMeetingsLoading = createStore<boolean>(true)

export const loadScheduledMeetingsEvent = createEvent<Town | null>()

const loadScheduledMeetingsFx = createEffect<Town | null, Meeting[]>((town) => {
  if (!town) {
    throw new Error('Не выбран город')
  }
  return loadScheduledMeetings(town.id || 0)
})

sample({
  clock: loadScheduledMeetingsEvent,
  target: loadScheduledMeetingsFx,
})

sample({
  clock: loadScheduledMeetingsFx.pending,
  target: $scheduledMeetingsLoading,
})

sample({
  clock: loadScheduledMeetingsFx.doneData,
  target: $scheduledMeetings,
})
