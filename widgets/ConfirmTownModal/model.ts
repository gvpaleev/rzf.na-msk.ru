import { getCityList } from "@/shared/api/getCityList";
import { $currentTown } from "@/shared/components/SelectTownModal/store/currentTown";
import { $regionGeographicId, $regionGeographicName, $regionServiceId, $townId, $townName } from "@/shared/state/userAppState";
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
      regionGeograhicId: getItemFromLocalStorage<string>(LocalStorageKeys.REGION_GEOGRAPHIC_ID) || '-1',
      regionGeographicName: getItemFromLocalStorage<string>(LocalStorageKeys.REGION_GEOGRAPHIC_NAME) || '',
      regionServiceId: getItemFromLocalStorage<string>(LocalStorageKeys.REGION_SERVICE_ID) || '-1'

    };
    let town = data.towns.filter((item) => item.name == 'Москва')[0];
    let { id: townId, name: townName, geographic_region: regionGeographicId, service_region: regionServiceId } = town;
    let { name: regionGeographicName } = data.regions.filter((item) => item.id == regionGeographicId)[0];
    // debugger;
    return townCache.townName != ''
      ? {
        townId: +(townCache.townId),
        townName: townCache.townName,
        regionGeographicId: +(townCache.regionGeograhicId),
        regionGeograhicName: townCache.regionGeographicName,
        regionServiceId: +(townCache.regionServiceId),
        currentTown: { 'id': +(townCache.townId), 'name': townCache.townName, 'geographic_region': +(townCache.regionGeograhicId) }
      }
      : { townId, townName, regionGeographicId, regionGeographicName, regionServiceId, currentTown: { 'id': townId, 'name': townName, 'geographic_region': regionServiceId } };
  },
  target: spread({
    townId: $townId,
    townName: $townName,
    regionGeographicId: $regionGeographicId,
    regionGeographicName: $regionGeographicName,
    regionServiceId: $regionServiceId,
    currentTown: $currentTown
  }),
});


