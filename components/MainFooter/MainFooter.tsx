import Image from 'next/image'
import { PhoneBlock } from '../PhoneBlock'
import { Menu } from '../Menu'

export const MainFooter = () => (
  <div className="bg-primary-grey px-22 py-20 mt-10">
    <div className='flex flex-row w-full lg:w-128 mx-auto gap-x-10 flex-grow items-start justify-between'>
      <PhoneBlock />

      <Menu />
    </div>

    <div className='flex flex-row w-full pt-10 lg:w-128 mx-auto flex-grow items-start justify-between'>
      <div className='text-sm text-secondary-blue'>
        © 2003-{new Date().getFullYear()} Официальный сайт сообщества
        <br />
        Анонимные Наркоманы региона Большая Москва
      </div>

      <Image width="172" height="151" alt="Google Play" src="/play.svg" />
    </div>
  </div>
)
