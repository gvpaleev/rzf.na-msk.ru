import { getGroupById } from '@/shared/api/getGroupById'
import { Group } from '@/shared/contract/Group'
import { createEffect, createEvent, createStore, sample } from 'effector'

export const $group = createStore<Group | null>(null)
export const $groupLoading = createStore<boolean>(true)

export const loadGroupByIdEvent = createEvent<number>()

const loadGroupByIdFx = createEffect<number, Group>(async (id) => {
  if (!id) {
    throw new Error('Не указан ID группы')
  }
  return await getGroupById(id)
})

sample({
  clock: loadGroupByIdEvent,
  target: loadGroupByIdFx,
})

sample({
  clock: loadGroupByIdFx.pending,
  target: $groupLoading,
})

sample({
  clock: loadGroupByIdFx.doneData,
  target: $group,
})
