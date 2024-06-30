import classNames from "classnames";
import styles from './SelectTwonModal.module.css'
import { ModalWrapper } from "@/Features/ModelWrapper";
import { createEvent, createStore } from "effector";
import { useUnit } from "effector-react";

export const opendModalEvent = createEvent();
export const closedModalEvent = createEvent();
export const $isOpen = createStore<boolean>(false)
  .on(opendModalEvent, () => true)   // Обновляем стор при вызове события открытия
  .on(closedModalEvent, () => false);




export function SelectTwonModal2() {
  const isOpen = useUnit($isOpen)
  const onClose = useUnit(closedModalEvent)

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={classNames(styles.item)}>
        ssssss
      </div>

    </ModalWrapper>)
}
