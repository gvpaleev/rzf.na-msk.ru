import { Town } from '@/utils/types/town'
import { useUnit } from 'effector-react'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Modal } from '@components/Modal'

import {
  $filteredTowns,
  clearTownFilterEvent,
  filterTownEvent,
  setCurrentTownIdEvent,
} from '../SelectTownModal/store/currentTown'
import { townListModal } from './store/townListModal'

import './TownsListModal.css';

const TownListItem: FC<Town & { onClick?: () => void }> = ({ name, onClick }) => (
  <div
    className='mb-5 hover:cursor-pointer hover:text-blue-700'
    onClick={onClick}
  >
    {name}
  </div>
)

const FilterTown: FC = () => {
  const [value, setValue] = useState('')
  const filterTown = useUnit(filterTownEvent)

  const [clearFilter, isModalOpen] = useUnit([
    clearTownFilterEvent,
    townListModal.$isModalOpen,
  ])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    filterTown(value)
    setValue(value)
  }

  useEffect(() => {
    if (!isModalOpen) {
      clearFilter()
      setValue('')
    }
  }, [isModalOpen])

  return (
    <input
      type='text'
      className='input input-bordered w-full'
      placeholder='Введите город...'
      value={value}
      onChange={onChange}
    />
  )
}

const TownsListModal: FC = () => {
  const isOpen = useUnit(townListModal.$isModalOpen)
  const closeModal = useUnit(townListModal.closeModalEvent)
  const towns = useUnit($filteredTowns)
  const setTown = useUnit(setCurrentTownIdEvent)

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <FilterTown />
      <div className='mt-5 overflow-x-auto h-80'>
        {towns.length ? towns.map((town) => (
          <TownListItem
            key={town.id}
            {...town}
            onClick={() => {
              setTown(town.id)
              closeModal()
            }}
          />
        )) : 'По заданному фильтру не найдено городов'}
      </div>
    </Modal>
  )
}

export default TownsListModal
