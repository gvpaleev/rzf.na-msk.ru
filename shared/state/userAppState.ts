import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from '@/shared/utils/getItemFromLocalStorage'
import { LocalStorageKeys } from '@/shared/utils/types/utils'
import { createEffect, createStore, sample } from 'effector'

export const $townId = createStore<number>(-1)
$townId.watch((newState) => {
  if (newState == -1) return
  setItemToLocalStorage<number>(LocalStorageKeys.TOWN_ID, newState)
})

export const $townName = createStore<string>('')

$townName.watch((newState) => {
  if (newState == '') return

  setItemToLocalStorage<string>(LocalStorageKeys.TOWN_NAME, newState)
})

export const $regionGeographicId = createStore<number>(-1)

$regionGeographicId.watch((newState) => {
  if (newState == -1) return
  setItemToLocalStorage<number>(LocalStorageKeys.REGION_GEOGRAPHIC_ID, newState)
})

export const $regionGeographicName = createStore<string>('')

$regionGeographicName.watch((newState) => {
  if (newState == '') return

  setItemToLocalStorage<string>(LocalStorageKeys.REGION_GEOGRAPHIC_NAME, newState)
})

export const $regionServiceId = createStore(-1);
$regionServiceId.watch((newState) => {
  if (newState == -1) return
  setItemToLocalStorage<number>(LocalStorageKeys.REGION_SERVICE_ID, newState)
})
