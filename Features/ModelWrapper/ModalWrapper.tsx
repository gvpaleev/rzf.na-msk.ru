import classNames from 'classnames'
import styles from './ModalWrapper.module.css'
import { ModalProps } from './ModalWrapper.props';

export function ModalWrapper({ children, isOpen, onClose }: ModalProps) {
  return isOpen ? (
    <div className={classNames(styles.item)}>

      <div className={styles.backdrop} onClick={onClose}></div>
      <dialog className={classNames(styles.children,)} open={isOpen}>
        {children}
      </dialog>
    </div>
  ) : (<></>)
}
