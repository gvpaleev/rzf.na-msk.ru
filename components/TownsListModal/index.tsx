import { TownType } from '@/utils/types/town'
import { useEvent, useStore, useUnit } from 'effector-react'
import { Modal } from 'flowbite-react'
import { FC } from 'react'

import { $towns } from '../SelectTownModal/store/currentTown'
import { townListModal } from './store/townListModal'

const Town: FC<TownType> = ({ name }) => <div>{name}</div>

const TownsListModal: FC = () => {
  const isOpen = useStore(townListModal.$isModalOpen)
  const closeModal = useEvent(townListModal.closeModalEvent)
  const towns = useStore($towns)

  return (
    <Modal dismissible size='md' show={isOpen} onClose={closeModal} popup>
      <Modal.Header />
      <Modal.Body>
        {towns.map((town) => (
          <Town key={town.id} {...town} />
        ))}
      </Modal.Body>
    </Modal>
  )
}

export default TownsListModal
