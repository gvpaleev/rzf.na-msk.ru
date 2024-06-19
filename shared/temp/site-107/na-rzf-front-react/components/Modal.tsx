import { FC, PropsWithChildren, useEffect, useRef } from 'react'

export const Modal: FC<
  { isOpen: boolean; onClose: () => void } & PropsWithChildren
> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (!modalRef.current) return
    if (isOpen) {
      modalRef.current.showModal()
    } else {
      modalRef.current.close()
    }
  }, [isOpen])
  return (
    <dialog
      className='modal'
      ref={modalRef}
      onClose={() => {
        onClose()
        console.log('>>>>>>>>>>>>>>>> onClose!')
      }}
    >
      <div className='modal-box'>{children}</div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  )
}
