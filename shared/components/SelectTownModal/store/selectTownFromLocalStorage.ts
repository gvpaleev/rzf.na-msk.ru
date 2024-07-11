import { getItemFromLocalStorage } from '@/shared/utils/getItemFromLocalStorage'
import { Town } from '@/shared/utils/types/town'
import { LocalStorageKeys } from '@/shared/utils/types/utils'
import { createEffect, createEvent, sample } from 'effector'

import { setCurrentTownIdEvent } from './currentTown'
import { selectTownModal } from './selectDefaultTown'

export const checkTownIsSelectedEvent = createEvent()

const getTownFromLocalStorageFx = createEffect(() => {
  const town = getItemFromLocalStorage<Town>(LocalStorageKeys.CURRENT_TOWN)

  if (town?.id) {
    return town
  }
  throw new Error('Town is not selected yet!')
})

sample({
  clock: checkTownIsSelectedEvent,
  target: getTownFromLocalStorageFx,
})

sample({
  clock: getTownFromLocalStorageFx.done,
  fn: ({ result: town }) => town?.id,
  target: setCurrentTownIdEvent,
})

sample({
  clock: getTownFromLocalStorageFx.fail,
  target: selectTownModal.openModalEvent,
})
