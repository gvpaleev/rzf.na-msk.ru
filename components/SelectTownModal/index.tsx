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
          <div className='flex flex-col gap-10'>
            <div className='font-thin text-2xl'>
              Ваш город <span className='font-bold'>Москва</span>?
            </div>
            <div className='flex flex-col w-full gap-2.5'>
              <Button type='button' className="!text-blue-700 hover:bg-blue-700 hover:!text-white ring-1 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={selectDefaultTown}>
                Все верно
              </Button>
              <Button  type='button' className="!text-blue-700 hover:bg-blue-700 hover:!text-white ring-1 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={openTownList}>
                Сменить город
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SelectTownModal
