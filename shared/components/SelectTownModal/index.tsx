import { useUnit } from 'effector-react'
import { FC } from 'react'

import { Modal } from '@/shared/components/Modal'

import {
  openTownsListEvent,
  selectDefaultTownEvent,
  selectTownModal,
} from './store/selectDefaultTown'

export const SelectTownModal: FC = () => {
  const [isOpen, closeModal, selectDefaultTown, openTownList] = useUnit([
    selectTownModal.$isModalOpen,
    selectTownModal.closeModalEvent,
    selectDefaultTownEvent,
    openTownsListEvent,
  ])

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-10'>
          <div className='font-thin text-2xl'>
            Ваш город <span className='font-bold'>Москва</span>?
          </div>
          <div className='flex flex-col w-full gap-2.5'>
            <button className='btn btn-primary' onClick={selectDefaultTown}>
              Все верно
            </button>
            <button className='btn' onClick={openTownList}>
              Сменить город
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
