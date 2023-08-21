'use client'

import { useUnit } from 'effector-react'
import { Button, Modal } from 'flowbite-react'
import { FC } from 'react'
import {
  openTownsListEvent,
  selectDefaultTownEvent,
  selectTownModal,
} from './store'

const SelectTownModal: FC = () => {
  const isOpen = useUnit(selectTownModal.$isModalOpen)
  const closeModal = useUnit(selectTownModal.closeModalEvent)
  const selectDefaultTown = useUnit(selectDefaultTownEvent)
  const openTownList = useUnit(openTownsListEvent)
  return (
    <Modal dismissible size='sm' show={isOpen} onClose={closeModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className='flex flex-col items-center'>
          <div>
            Ваш город <span className='font-bold'>Москва</span>?
          </div>
          <div className='flex flex-col w-full'>
            <Button color='purple' onClick={selectDefaultTown}>
              Все верно
            </Button>
            <Button color='gray' onClick={openTownList}>
              Сменить город
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SelectTownModal
