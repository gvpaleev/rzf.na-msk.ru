import { getCityList } from "@/api/getCityList";
import { $currentTown } from "@/components/SelectTownModal/store/currentTown";
import { $regionId, $regionName, $townId, $townName } from "@/shared/state/userAppState";
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
    let { id: townId, name: townName, geographic_region: regionId } = data.towns.filter((item) => item.name == 'Москва')[0];


    let { name: regionName } = data.regions.filter((item) => item.id == regionId)[0];

    return { townId, townName, regionId, regionName, currentTown: { 'id': townId, 'name': townName, 'geographic_region': regionId } };
  },
  target: spread({
    townId: $townId,
    townName: $townName,
    regionId: $regionId,
    regionName: $regionName,
    currentTown: $currentTown
  }),
});


