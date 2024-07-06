'use client'
import classNames from "classnames";
import styles from './ConfirmTownModal.module.css'
import { ModalWrapper } from "@/Features/ModelWrapper";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { $isOpen, closedModalEvent, loadCityListFx } from "./model";
import { $townName } from "@/shared/state/userAppState";
import { opendModalEvent } from "../SelectTownModal";



export function ConfirmTownModal() {
  const isOpen = useUnit($isOpen)
  const onClose = useUnit(closedModalEvent)
  const loadCityList = useUnit(loadCityListFx)
  const openSelectTownModal = useUnit(opendModalEvent)
  const townName = useUnit($townName);

  useEffect(() => {
    if (townName == '')
      loadCityList();
  }, [])
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={classNames(styles.item)}>

        <h1 className={classNames(styles.h1)} >Ваш город <b>{townName}</b> ?</h1>
        <button className={classNames(styles.accept, styles.button)} onClick={onClose}>Все верно</button>
        <button className={classNames(styles.cancel, styles.button)} onClick={() => { onClose(); openSelectTownModal(); }}>Сменить город</button>
      </div>

    </ModalWrapper>)
}
