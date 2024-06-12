import { CommonPhone, Phone } from '@components/Phone'
import { WhatsappLogo } from '@components/WhatsappLogo'

export const PhoneBlock = () => {
  return (
    <div className='flex items-center items-start shrink-0'>
      <WhatsappLogo className='pr-3 shrink-0 flex' />

      <div className='flex flex-col pl-2'>
        <div className='text-sm'>Информационный телефон:</div>
        <Phone />
        <div className='text-sm text-secondary-blue'> с 10:00 до 22:00</div>
      </div>
    </div>
  )
}

export const DetailedPhoneBlock = () => {
  return (
    <>
      <div className='flex items-center'>
        <WhatsappLogo className='pr-3' />
        <div className='flex flex-col'>
          <div className='text-sm'>Информационный телефон:</div>
          <Phone />
          <div className='text-sm text-secondary-blue'> с 10:00 до 22:00</div>
          <div className='text-sm'>Единый информационный телефон (бесплатно в РФ):</div>
          <CommonPhone />
          <div className='text-sm text-secondary-blue'>Круглосуточно</div>
        </div>
      </div>
    </>
  )
}
