'use client'
import classNames from "classnames";
import styles from './SelectTownModal.module.css'
import { createEvent, createStore } from "effector";
import { useUnit } from "effector-react";
import { ModalWrapper } from "@/Features/ModelWrapper/ModalWrapper";
import { useEffect } from "react";

export const opendModalEvent = createEvent();
export const closedModalEvent = createEvent();
export const $isOpen = createStore<boolean>(false)
  .on(opendModalEvent, () => true)   // Обновляем стор при вызове события открытия
  .on(closedModalEvent, () => false);


export function SelectTownModal() {
  useEffect(() => {
    console.log('Render SelectModal')
  }, [])
  const isOpen = useUnit($isOpen)
  const onClose = useUnit(closedModalEvent)
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={classNames(styles.item)}>
        sssssssssssss

      </div>

    </ModalWrapper>
  )
}
