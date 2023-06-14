import { WhatsappLogo } from '@components/WhatsappLogo'

const Phone = () => {
  return (
    <div className='text-primary-green text-xl font-black'>
      +7 (495) 505-33-96
    </div>
  )
}

export const PhoneBlock = () => {
  return (
    <div className='flex'>
      <WhatsappLogo className='pr-3' />
      <div className='flex flex-col'>
        <div className='text-sm'>Информационный телефон:</div>
        <Phone />
        <div className='text-sm text-secondary-grey'> с 10:00 до 22:00</div>
      </div>
    </div>
  )
}
