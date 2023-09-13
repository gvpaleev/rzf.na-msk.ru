import { DetailedPhoneBlock } from '../PhoneBlock'

export const MainFooter = () => (
  <>
    <div className='flex flex-row w-full lg:w-[1126px] mx-auto flex-grow items-center justify-between'>
      <div className='flex items-end'>
        <div className='text-sm text-secondary-grey'>
          © 2003-{new Date().getFullYear()} Официальный сайт сообщества
          <br />
          Анонимные Наркоманы региона Большая Москва
        </div>
      </div>
      <DetailedPhoneBlock />
    </div>
  </>
)
