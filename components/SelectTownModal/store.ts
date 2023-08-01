import { selectTown } from '@/api/selectTown'
import { createModalStore } from '@/utils/store'
import { createEffect, createEvent, sample } from 'effector'

export const selectTownModal = createModalStore()

export const selectDefaultTownEvent = createEvent()

const DEFAULT_TOWN_ID = 1

const selectDefaultTownFx = createEffect(() => {
  console.log('>>>>>>>>>>>>>>>> select town')
  return selectTown({ townId: DEFAULT_TOWN_ID })
})

sample({ clock: selectDefaultTownEvent, target: selectDefaultTownFx })

selectDefaultTownFx.done.watch((town) => {
  console.log('>>>>>>>>>>>>>>>> town', town)
})
