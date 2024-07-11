import { getItemFromLocalStorage, setItemToLocalStorage } from "@/shared/utils/getItemFromLocalStorage";
import { LocalStorageKeys } from "@/shared/utils/types/utils";
import { createEffect, createStore, sample } from "effector";
export const $townId = createStore<number>(-1);
$townId.watch((newState) => {
  if (newState == -1) return
  setItemToLocalStorage<number>(LocalStorageKeys.TOWN_ID, newState)
});

export const $townName = createStore<string>('');

$townName.watch((newState) => {
  console.log(`townName ${newState}`)
  if (newState == '') return

  setItemToLocalStorage<string>(LocalStorageKeys.TOWN_NAME, newState)
});

export const $regionId = createStore<number>(-1);

$regionId.watch((newState) => {
  if (newState == -1) return
  setItemToLocalStorage<number>(LocalStorageKeys.REGION_ID, newState)
});

export const $regionName = createStore<string>('');

$regionName.watch((newState) => {
  if (newState == '') return

  setItemToLocalStorage<string>(LocalStorageKeys.REGION_NAME, newState)


});

// sample({
//   clock: installStateFx.doneData,
//   fn: (data) => {
//     // debugger;
//     return data
//
//   },
//   target: spread({
//     townId: $townId,
//     townName: $townName,
//     regionId: $regionId,
//     regionName: $regionName
//   })
// })
//
