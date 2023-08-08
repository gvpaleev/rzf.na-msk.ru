import { createModalStore } from '@/utils/store'
import { createEvent, sample } from 'effector'
import { setCurrentTownEvent } from './currentTown'

export const selectTownModal = createModalStore()

export const selectDefaultTownEvent = createEvent()

const DEFAULT_TOWN_ID = 1

sample({
  clock: selectDefaultTownEvent,
  fn: () => DEFAULT_TOWN_ID,
  target: setCurrentTownEvent,
})
