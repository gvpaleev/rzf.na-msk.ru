'use client'
import classNames from "classnames";
import styles from './SelectTownModal.module.css'
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { ModalWrapper } from "@/features/ModelWrapper";
import { $bigTown, $isOpen, $regions, $towns, closedModalEvent, loadCityListEx, selectdRegionEvent, selectdTownEvent, selectedBigCityEvent, setFilterEvent } from "./model";
export function SelectTwonModal() {
  const isOpen = useUnit($isOpen)
  const onClose = useUnit(closedModalEvent)
  const loadCityList = useUnit(loadCityListEx)

  const towns = useUnit($towns)
  const regions = useUnit($regions)
  const bigTown = useUnit($bigTown)

  const setFilter = useUnit(setFilterEvent)
  const selectedRegion = useUnit(selectdRegionEvent)
  const selectedTown = useUnit(selectdTownEvent)
  const selectedBigCity = useUnit(selectedBigCityEvent);

  useEffect(() => {
    loadCityList();

  }, [])

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={classNames(styles.item)}>
        <input className={classNames(styles.input)} placeholder='Введите город...' onChange={(e) => { setFilter(e.target.value) }} />

        <div className={classNames(styles.BlockBigCity)}>
          {bigTown.map((town, index) => {
            return (<span className={classNames(styles.ButtonBigCity)} key={index} onClick={() => { selectedBigCity(town.id || -1) }}>{town.name}</span>)
          })}
        </div>
        <div className={classNames(styles.BlockRegion)}>
          {regions.map((region, index) => {
            return (
              <span className={classNames(styles.ButtonRegion)} onClick={() => { selectedRegion(region.id || -1) }} key={index}>{region.name}</span>
            )
          })}
        </div>
        <div className={classNames(styles.BlockTown)}>
          {towns.map((town, index) => {
            return (
              <span className={classNames(styles.ButtonTown)} onClick={() => { selectedTown(town.id || -1) }} key={index}>{town.name}</span>
            )
          })}
        </div>
      </div>

    </ModalWrapper>)
}
