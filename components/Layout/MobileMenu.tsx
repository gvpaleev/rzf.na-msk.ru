import { ArrowSmallLeftIcon, Bars3Icon } from '@heroicons/react/20/solid'

import { NaLogo } from '@components/NaLogo'

export const MobileMenu = () => (
  <>
    <div className='h-20 sm:hidden'></div>
    <div className='fixed z-10 bg-primary h-20 w-full flex justify-between items-center sm:hidden'>
      <ArrowSmallLeftIcon className='text-white w-12' />
      <div className='flex w-40 justify-between items-center'>
        <NaLogo className='relative z-0' size={40} />
        <div className='w-28 font-medium text-sm text-white'>
          Анонимные Наркоманы
        </div>
      </div>
      <Bars3Icon className='text-white w-12' />
    </div>
  </>
)
