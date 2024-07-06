import { getCityList } from "@/api/getCityList";
import { CityList } from "@/shared/contract/CityList";
import { Region } from "@/shared/contract/Region";
import { Town } from "@/shared/contract/Town";
import { createEffect, createEvent, createStore, sample } from "effector";
import { spread } from "patronum";

export const opendModalEvent = createEvent();
export const closedModalEvent = createEvent();
export const $isOpen = createStore<boolean>(true)
  .on(opendModalEvent, () => true)   // Обновляем стор при вызове события открытия
  .on(closedModalEvent, () => false);

export const $cityList = createStore<CityList>({ big_towns: [], towns: [], regions: [] })
export const loadCityListEx = createEffect(async () => {
  let data = await getCityList();
  return data;
})
$cityList.on(loadCityListEx.doneData, (_, cityList) => cityList)


export const $towns = createStore<Town[]>([]);
export const $bigTown = createStore<Town[]>([]);

export const $regions = createStore<Region[]>([]);
sample({
  clock: loadCityListEx.doneData,
  target: spread({
    big_towns: $bigTown, towns: $towns, regions: $regions
  })
})
export const setFilterEvent = createEvent<string>();
setFilterEvent.watch(console.log)
export const selectdRegionEvent = createEvent<number>();
selectdRegionEvent.watch(console.log)

export const selectdTownEvent = createEvent<number>();
selectdTownEvent.watch(console.log)


sample({
  clock: setFilterEvent,
  source: $cityList,
  fn: (data, filter) => {
    return data.towns.filter((item) => item.name.includes(filter))
  },
  target: $towns
})


