import { useUnit } from 'effector-react'
import Image from 'next/image'

import { RegionButton } from '../Layout/RegionButton'
import { Menu } from '../Menu'
import { PhoneBlock } from '../PhoneBlock'
import { $currentTown } from '../SelectTownModal/store/currentTown'
import { selectTownModal } from '../SelectTownModal/store/selectDefaultTown'

import './footer.css';

export const MainFooter = () => {
  const currentTown = useUnit($currentTown)
  const openModal = useUnit(selectTownModal.openModalEvent)

  return (
    <div className='bg-primary-grey px-22 py-10 lg:mt-10'>
      <div className='container mx-auto'>
        <div className='flex flex-row mx-auto gap-x-10 flex-grow items-start justify-between max-lg:justify-center'>
          <PhoneBlock />

          <Menu />
        </div>

        <div className='hidden justify-center my-5 max-lg:flex'>
          <RegionButton currentTown={currentTown?.name} onClick={openModal} />
        </div>

        <div className='flex flex-row pt-10 max-lg:pt-0 mx-auto flex-grow justify-between items-start max-lg:items-center max-lg:flex-col'>
          <div className='text-sm text-secondary-blue max-lg:text-center'>
            © 2003-{new Date().getFullYear()} Официальный сайт сообщества
            Анонимные Наркоманы региона Большая Москва
          </div>

          <Image
            width='172'
            height='151'
            alt='Google Play'
            src='/play.svg'
            className='max-lg:p-5'
          />
        </div>

        <div className="mob-footer-icons">
          <a href="tel:+7 (495) 505-33-96" className="footer-icon-block">
            <img className="footer-icon-image" src="/footer-call.svg" alt="" />
            <div className="footer-icon-text">позвонить</div>
          </a>
          <a href="https://wa.me/79255053396" className="footer-icon-block">
            <img className="footer-icon-image" src="/footer-messenger.svg" alt="" />
            <div className="footer-icon-text">Мессенджер</div>
          </a>
          <a href="/schedule-member/" className="footer-icon-block">
            <img className="footer-icon-image" src="/footer-pin.svg" alt="" />
            <div className="footer-icon-text">группы</div>
          </a>
        </div>
      </div>
    </div>
  )
}
