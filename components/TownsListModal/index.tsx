import { useUnit } from 'effector-react'
import { Modal, Button } from 'flowbite-react'
import { FC } from 'react'
import { townListModal } from './store/townListModal'

const TownsListModal: FC = () => {
  const isOpen = useUnit(townListModal.$isModalOpen)
  const closeModal = useUnit(townListModal.closeModalEvent)

  return (
    <Modal dismissible size='md' show={isOpen} onClose={closeModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className='flex flex-col items-center'>Hello!</div>
      </Modal.Body>
    </Modal>
  )
}

export default TownsListModal
