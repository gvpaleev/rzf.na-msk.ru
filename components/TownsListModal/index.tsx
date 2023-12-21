import { TownId, TownType } from '@/utils/types/town'
import { useEvent, useStore, useUnit } from 'effector-react'
import { Modal } from 'flowbite-react'
import { FC, useEffect } from 'react'

import { $towns, loadTownsEvent } from '../SelectTownModal/store/currentTown'
import { setCurrentTownIdEvent } from '../SelectTownModal/store/currentTown'
import { townListModal } from './store/townListModal'

const Town: FC<TownType & { onClick?: () => void }> = ({ name, onClick }) => (
  <div className='mb-5 hover:cursor-pointer hover:text-blue-700' onClick={onClick}>{name}</div>
)

const TownsListModal: FC = () => {
  const isOpen = useStore(townListModal.$isModalOpen)
  const closeModal = useEvent(townListModal.closeModalEvent)
  const towns = useStore($towns)
  const setTown = useUnit(setCurrentTownIdEvent)
  const loadTowns = useUnit(loadTownsEvent)

  useEffect(() => {
    loadTowns()
  }, [])

  return (
    <Modal dismissible size='md' show={isOpen} onClose={closeModal} popup>
      <Modal.Header />
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  )
}

export default TownsListModal
