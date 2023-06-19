import { Phone } from '@components/Phone'
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
