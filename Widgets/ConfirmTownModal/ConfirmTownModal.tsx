'use client'
import classNames from "classnames";
import styles from './ConfirmTownModal.module.css'
import { ModalWrapper } from "@/Features/ModelWrapper";
import { createEffect, createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";
import { CityList } from "@/shared/contract/CityList";
import { getCityList } from "@/api/getCityList";
import { useEffect } from "react";
import { $townId } from "@/shared/state/userAppState";

// const isTown = useUnit($townId) !== -1;

const isTown = $townId.getState() !== -1;

export const opendModalEvent = createEvent();
export const closedModalEvent = createEvent();

const loadCityListRx = createEffect(async () => {
  let data = await getCityList();
  return data;
})

export const $isOpen = createStore<boolean>(!isTown)
  .on(opendModalEvent, () => true)   // Обновляем стор при вызове события открытия
  .on(closedModalEvent, () => false);

const $cityList = createStore<CityList>({ big_towns: [], towns: [], regions: [] })
  .on(loadCityListRx.doneData, (_, cityList) => cityList)

sample({
  clock: loadCityListRx.doneData,

})


export function ConfirmTownModal() {
  const isOpen = useUnit($isOpen)
  const onClose = useUnit(closedModalEvent)
  const cityList = useUnit($cityList)
  const loadCityList = useUnit(loadCityListRx)
  useEffect(() => {
    loadCityList();
  }, [])
  const accept = () => {
    // cityList.towns
    console.log(cityList);
    debugger;
  }
  return (
    <ModalWrapper isOpen={isOpen} onClose={isTown ? onClose : () => { }}>
      <div className={classNames(styles.item)}>

        <h1 className={classNames(styles.h1)} >Ваш город <b>Москва</b> ?</h1>
        <button className={classNames(styles.accept, styles.button)} onClick={accept}>Все верно</button>
        <button className={classNames(styles.cancel, styles.button)}>Сменить город</button>
      </div>

    </ModalWrapper>)
}
