'use client'
import classNames from "classnames";
import styles from './ConfirmTownModal.module.css'
import { ModalWrapper } from "@/Features/ModelWrapper";
import { createEffect, createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";
import { CityList } from "@/shared/contract/CityList";
import { getCityList } from "@/api/getCityList";
import { useEffect } from "react";
import { $regionId, $regionName, $townId, $townName } from "@/shared/state/userAppState";
import { spread } from "patronum";



export const opendModalEvent = createEvent();
export const closedModalEvent = createEvent();
export const $isOpen = createStore<boolean>(true)
  .on(opendModalEvent, () => true)   // Обновляем стор при вызове события открытия
  .on(closedModalEvent, () => false);


const loadCityListRx = createEffect(async () => {
  let data = await getCityList();
  return data;

})

sample({
  source: loadCityListRx.doneData,
  fn: (data) => {
    let { id: townId, name: townName, geographic_region: regionId } = data.towns.filter((item) => item.name == 'Москва')[0];
    let { name: regionName } = data.regions.filter((item) => item.id == regionId)[0];

    return { townId, townName, regionId, regionName };
  },
  target: spread({
    townId: $townId, townName: $townName, regionId: $regionId, regionName: $regionName
  }),
});

export function ConfirmTownModal() {
  const isOpen = useUnit($isOpen)
  const onClose = useUnit(closedModalEvent)
  const loadCityList = useUnit(loadCityListRx)
  const townName = useUnit($townName);

  useEffect(() => {
    if (townName === '')
      loadCityList();
  }, [])
  const accept = () => {
  }
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={classNames(styles.item)}>

        <h1 className={classNames(styles.h1)} >Ваш город <b>{townName}</b> ?</h1>
        <button className={classNames(styles.accept, styles.button)} onClick={onClose}>Все верно</button>
        <button className={classNames(styles.cancel, styles.button)}>Сменить город</button>
      </div>

    </ModalWrapper>)
}
