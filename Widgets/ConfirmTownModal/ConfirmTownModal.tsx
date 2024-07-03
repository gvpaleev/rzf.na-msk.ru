'use client'
import classNames from "classnames";
import styles from './ConfirmTownModal.module.css'
import { ModalWrapper } from "@/Features/ModelWrapper";
import { createEffect, createEvent, createStore } from "effector";
import { useUnit } from "effector-react";
import { CityList } from "@/shared/contract/CityList";
import { getCityList } from "@/api/getCityList";
import { useEffect } from "react";
export const opendModalEvent = createEvent();
export const closedModalEvent = createEvent();
export const $isOpen = createStore<boolean>(true)
  .on(opendModalEvent, () => true)   // Обновляем стор при вызове события открытия
  .on(closedModalEvent, () => false);

const $cityList = createStore<CityList>({ big_towns: [], towns: [], regions: [] })
const loadCityListEx = createEffect(async () => {
  let data = await getCityList();
  return data;
})
$cityList.on(loadCityListEx.doneData, (_, cityList) => cityList)

export function ConfirmTownModal() {
  const isOpen = useUnit($isOpen)
  const onClose = useUnit(closedModalEvent)
  const cityList = useUnit($cityList)
  const loadCityList = useUnit(loadCityListEx)
  useEffect(() => {
    loadCityList();
  }, [])
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={classNames(styles.item)}>

        <h1 className={classNames(styles.h1)} >Ваш город <b>Москва</b> ?</h1>
        <button className={classNames(styles.accept, styles.button)}>Все верно</button>
        <button className={classNames(styles.cancel, styles.button)}>Сменить город</button>
      </div>

    </ModalWrapper>)
}
