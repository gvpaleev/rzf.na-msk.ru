import { getItemFromLocalStorage, setItemToLocalStorage } from "@/utils/getItemFromLocalStorage";
import { LocalStorageKeys } from "@/utils/types/utils";
import { createEffect, createStore, sample } from "effector";
import { spread } from "patronum";

// export const installStateFx = createEffect(async () => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('');
//     }, 2000);
//   });
//   let data = {
//     townId: +(getItemFromLocalStorage<string>(LocalStorageKeys.TOWN_ID) || -1),
//     townName: getItemFromLocalStorage<string>(LocalStorageKeys.TOWN_NAME) || '',
//     regionId: +(getItemFromLocalStorage<string>(LocalStorageKeys.REGION_ID) || -1),
//     regionName: getItemFromLocalStorage<string>(LocalStorageKeys.REGION_NAME) || ''
//   };
//   return data;
// })
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
