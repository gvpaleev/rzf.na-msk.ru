import Image from 'next/image'
import { PhoneBlock } from '../PhoneBlock'
import { Menu } from '../Menu'
import { RegionButton } from '../Layout/RegionButton'
import { useEvent, useStore } from 'effector-react'
import { $currentTown } from '../SelectTownModal/store/currentTown'
import { selectTownModal } from '../SelectTownModal/store'

export const MainFooter = () => {
  const currentTown = useStore($currentTown)
  const openModal = useEvent(selectTownModal.openModalEvent)

  return (
    <div className="bg-primary-grey px-22 py-2 max-lg:py-10 mt-10">
      <div className='flex flex-row w-full lg:w-128 mx-auto gap-x-10 flex-grow items-start justify-between max-lg:justify-center'>
        <PhoneBlock />

        <Menu />
      </div>

      <div className="hidden justify-center my-5 max-lg:flex">
        <RegionButton currentTown={currentTown?.name} onClick={openModal} />
      </div>

      <div className='flex flex-row w-full pt-10 max-lg:pt-0 lg:w-128 mx-auto flex-grow justify-between items-start max-lg:items-center max-lg:flex-col'>
        <div className='text-sm text-secondary-blue max-lg:text-center w-96 max-lg:w-80'>
          © 2003-{new Date().getFullYear()} Официальный сайт сообщества Анонимные Наркоманы региона Большая Москва
        </div>

        <Image width="172" height="151" alt="Google Play" src="/play.svg" className="max-lg:p-5" />
      </div>
    </div>
  );
}
