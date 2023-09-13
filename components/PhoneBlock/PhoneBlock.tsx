import { CommonPhone, Phone } from '@components/Phone'
import { WhatsappLogo } from '@components/WhatsappLogo'

export const PhoneBlock = () => {
  return (
    <div className='flex items-center sm:items-start'>
      <WhatsappLogo className='pr-3' />
      <div className='flex flex-col'>
        <div className='text-sm'>Информационный телефон:</div>
        <Phone />
        <div className='text-sm text-secondary-grey'> с 10:00 до 22:00</div>
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
          <div className='text-sm text-secondary-grey'> с 10:00 до 22:00</div>
          <div className='text-sm'>Единый информационный телефон (бесплатно в РФ):</div>
          <CommonPhone />
          <div className='text-sm text-secondary-grey'>Круглосуточно</div>
        </div>
      </div>
    </>
  )
}
