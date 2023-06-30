'use client'

import { useStore } from 'effector-react'
import { useEvent } from 'effector-react/effector-react.umd'
import { Button, Modal } from 'flowbite-react'
import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { selectTownModal } from './store'

export const SelectTownModal: FC<{}> = ({ openModal }) => {
  const isOpen = useStore(selectTownModal.$isModalOpen)
  const closeModal = useEvent(selectTownModal.closeModalEvent)

  return (
    <Modal dismissible size='sm' show={isOpen} onClose={closeModal}>
      <Modal.Body>
        <div className='flex flex-col items-center'>
          <div
            className='self-end cursor-pointer hover:bg-gray-300 rounded-md'
            onClick={closeModal}
          >
            <AiOutlineClose />
          </div>
          <div>
            Ваш город <span className='font-bold'>Москва</span>?
          </div>
          <div className='flex flex-col w-full'>
            <Button color='purple'>Все верно</Button>
            <Button color='gray'>Сменить город</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
