'use client'

import { useEvent, useStore } from 'effector-react'
import { Button, Modal } from 'flowbite-react'
import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { selectDefaultTownEvent, selectTownModal } from './store'

export const SelectTownModal: FC = () => {
  const isOpen = useStore(selectTownModal.$isModalOpen)
  const closeModal = useEvent(selectTownModal.closeModalEvent)
  const selectDefaultTown = useEvent(selectDefaultTownEvent)

  const onClickDefaultButton = () => {
    selectDefaultTown()
    closeModal()
  }

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
            <Button color='purple' onClick={onClickDefaultButton}>
              Все верно
            </Button>
            <Button color='gray'>Сменить город</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
