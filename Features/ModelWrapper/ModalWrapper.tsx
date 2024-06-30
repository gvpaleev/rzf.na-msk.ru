'use client'
import classNames from 'classnames'
import styles from './ModalWrapper.module.css'
import { ModalProps } from './ModalWrapper.props';
import { useUnit } from 'effector-react';
import { $isOpen, closedModalEvent } from './model';

export function ModalWrapper({ children }: ModalProps) {
  const isOpen = useUnit($isOpen)
  const close = useUnit(closedModalEvent)
  return (<>
    {isOpen && <div className={styles.backdrop}></div>}
    <dialog className={classNames(styles.item,)} open={isOpen}>

      {children}
      <button onClick={() => close()}>Close</button>

    </dialog>
  </>
  )
}
