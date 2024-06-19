import { TownType } from '@/utils/types/town'
import { useUnit } from 'effector-react'
import { debug } from 'patronum'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import { Modal } from '@components/Modal'

import {
  $filteredTowns,
  clearTownFilterEvent,
  filterTownEvent,
  loadTownsEvent,
  setCurrentTownIdEvent,
} from '../SelectTownModal/store/currentTown'
import { townListModal } from './store/townListModal'

const Town: FC<TownType & { onClick?: () => void }> = ({ name, onClick }) => (
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
  const loadTowns = useUnit(loadTownsEvent)

  useEffect(() => {
    loadTowns()
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <FilterTown />
      <div className='overflow-x-auto h-80'>
        {towns.map((town) => (
          <Town
            key={town.id}
            {...town}
            onClick={() => {
              setTown(town.id)
              closeModal()
            }}
          />
        ))}
      </div>
    </Modal>
  )
}

export default TownsListModal
