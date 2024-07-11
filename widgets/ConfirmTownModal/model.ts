import { getCityList } from "@/shared/api/getCityList";
import { $currentTown } from "@/shared/components/SelectTownModal/store/currentTown";
import { $regionId, $regionName, $townId, $townName } from "@/shared/state/userAppState";
import { getItemFromLocalStorage } from "@/shared/utils/getItemFromLocalStorage";
import { LocalStorageKeys } from "@/shared/utils/types/utils";
import { createEffect, createEvent, createStore, sample } from "effector";
import { spread } from "patronum";

export const opendModalEvent = createEvent();
export const closedModalEvent = createEvent();
export const $isOpen = createStore<boolean>($townId.getState() == -1)
  .on(opendModalEvent, () => true)   // Обновляем стор при вызове события открытия
  .on(closedModalEvent, () => false);


export const loadCityListFx = createEffect(async () => {
  return await getCityList();

})

sample({
  clock: loadCityListFx.doneData,
  fn: (data) => {
    let townCache = {
      townId: getItemFromLocalStorage<string>(LocalStorageKeys.TOWN_ID) || '-1',
      townName: getItemFromLocalStorage<string>(LocalStorageKeys.TOWN_NAME) || '',
      regionId: getItemFromLocalStorage<string>(LocalStorageKeys.REGION_ID) || '-1',
      regionName: getItemFromLocalStorage<string>(LocalStorageKeys.REGION_NAME) || ''
    };
    let town = data.towns.filter((item) => item.name == 'Москва')[0];

    // let { id: townId, name: townName, geographic_region: regionId } = townCache.townId != -1 ? townCache : data.towns.filter((item) => item.name == 'Москва')[0];
    let { id: townId, name: townName, geographic_region: regionId } = town;
    let { name: regionName } = data.regions.filter((item) => item.id == regionId)[0];

    return townCache.townName != ''
      ? {
        townId: +(townCache.townId), townName: townCache.townName, regionId: +(townCache.regionId), regionName: townCache.regionName,
        currentTown: { 'id': +(townCache.townId), 'name': townCache.townName, 'geographic_region': +(townCache.regionId) }
      }
      : { townId, townName, regionId, regionName, currentTown: { 'id': townId, 'name': townName, 'geographic_region': regionId } };
  },
  target: spread({
    townId: $townId,
    townName: $townName,
    regionId: $regionId,
    regionName: $regionName,
    currentTown: $currentTown
  }),
});


