import { createModalStore } from '@/utils/store'
import { createEvent, sample } from 'effector'
import { setCurrentTownEvent } from './currentTown'
import { townListModal } from '@/components/TownsListModal/store/townListModal'

export const selectTownModal = createModalStore()

export const selectDefaultTownEvent = createEvent()

export const openTownsListEvent = createEvent()

const DEFAULT_TOWN_ID = 3 // Moscow

sample({
  clock: selectDefaultTownEvent,
  fn: () => DEFAULT_TOWN_ID,
  target: [setCurrentTownEvent, selectTownModal.closeModalEvent],
})

sample({
  clock: openTownsListEvent,
  target: [selectTownModal.closeModalEvent, townListModal.openModalEvent],
})
