import { createModalStore } from '@/utils/store'
import { createEvent, sample } from 'effector'
import { debug } from 'patronum'

import { townListModal } from '@components/TownsListModal/store/townListModal'

import { setCurrentTownIdEvent } from './currentTown'

export const selectTownModal = createModalStore()

export const selectDefaultTownEvent = createEvent()

export const openTownsListEvent = createEvent()

const DEFAULT_TOWN_ID = 3 // Moscow

sample({
  clock: selectDefaultTownEvent,
  fn: () => DEFAULT_TOWN_ID,
  target: [setCurrentTownIdEvent, selectTownModal.closeModalEvent],
})

sample({
  clock: openTownsListEvent,
  target: [selectTownModal.closeModalEvent, townListModal.openModalEvent],
})
