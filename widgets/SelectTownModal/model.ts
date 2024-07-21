import { getCityList } from "@/shared/api/getCityList";
import { $currentTown } from "@/shared/components/SelectTownModal/store/currentTown";
import { CityList } from "@/shared/contract/CityList";
import { Region } from "@/shared/contract/Region";
import { Town } from "@/shared/contract/Town";
import { $regionId, $regionName, $townId, $townName } from "@/shared/state/userAppState";
import { createEffect, createEvent, createStore, sample } from "effector";
import { spread } from "patronum";

export const opendModalEvent = createEvent();
export const closedModalEvent = createEvent();
export const $isOpen = createStore<boolean>(false)
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
// setFilterEvent.watch(console.log)
export const selectdRegionEvent = createEvent<number>();
// selectdRegionEvent.watch(console.log)

export const selectdTownEvent = createEvent<number>();
// selectdTownEvent.watch(console.log)
export const selectedBigCityEvent = createEvent<number>();
sample({
  clock: selectedBigCityEvent,
  source: $cityList,
  fn: (data, inTownId) => {
    let { id: townId, name: townName, geographic_region: regionId } = data.towns.filter((item) => item.id == inTownId)[0];
    let { name: regionName } = data.regions.filter((item) => item.id == regionId)[0];

    return { townId, townName, regionId, regionName };
  },
  target: [spread({
    townId: $townId, townName: $townName, regionId: $regionId, regionName: $regionName
  }), closedModalEvent],
})
sample({

  clock: selectdTownEvent,
  source: $cityList,
  fn: (data, inTownId) => {
    let { id: townId, name: townName, geographic_region: regionId } = data.towns.filter((item) => item.id == inTownId)[0];
    let { name: regionName } = data.regions.filter((item) => item.id == regionId)[0];

    // return { townId, townName, regionId, regionName };
    return { townId, townName, regionId, regionName, currentTown: { 'id': townId, 'name': townName, 'geographic_region': regionId } };

  },
  target: [spread({
    townId: $townId, townName: $townName, regionId: $regionId, regionName: $regionName, currentTown: $currentTown
  }), closedModalEvent],

})




sample({
  clock: selectdRegionEvent,
  source: $cityList,
  fn: (data, filter) => {
    return data.towns.filter((item) => item.geographic_region === filter)
  },
  target: $towns
})
sample({
  clock: setFilterEvent,
  source: $cityList,
  fn: (data, filter) => {
    return data.towns.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()))

  },
  target: $towns
})


