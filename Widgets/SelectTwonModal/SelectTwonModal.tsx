'use client'
import classNames from "classnames";
import styles from './SelectTwonModal.module.css'
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
  debugger;
  return data;
})
$cityList.on(loadCityListEx.doneData, (_, cityList) => cityList)

export function SelectTwonModal2() {
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
        <input className={classNames(styles.input)} placeholder='Введите город...' />

        <div className={classNames(styles.bigCity)}>
          {cityList.big_towns.map((town, index) => {
            debugger;
            return (<p key={index}>{town.name}</p>)
          })}
        </div>
        <div className={classNames(styles.region)}>
          {cityList.regions.map((region, index) => {
            return (
              <p key={index}>{region.name}</p>
            )
          })}
        </div>
        <div className={classNames(styles.town)}>
          {cityList.towns.map((town, index) => {
            return (
              <p key={index}>{town.name}</p>
            )
          })}
        </div>
      </div>

    </ModalWrapper>)
}
