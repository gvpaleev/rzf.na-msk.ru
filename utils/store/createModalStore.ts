import { createEvent, createStore } from 'effector'

export const createModalStore = () => {
  const $isModalOpen = createStore(false)

  const openModalEvent = createEvent()
  const closeModalEvent = createEvent()

  $isModalOpen.on(openModalEvent, () => true)
  $isModalOpen.on(closeModalEvent, () => false)

  return { $isModalOpen, openModalEvent, closeModalEvent }
}
