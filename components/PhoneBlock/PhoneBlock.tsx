import WhatsappLogo from "@/entities/WhatsappLogo"

import styles from './PhoneBlock.module.css'
import classNames from "classnames"

export default function PhoneBlock() {
  return (
    <div className={classNames(styles['item'])}>
      <div className={classNames(styles['column-1'])}>
        <WhatsappLogo />
      </div>
      <div className={classNames(styles['column-2'])}>
        {/* <CommonPhone /> */}
        {/* <Phone /> */}
        <div className='text-sm text-secondary-blue'> с 10:00 до 22:00</div>
        <div className='text-sm'>Единый информационный телефон (бесплатно в РФ):</div>
        <div className='text-sm'>Информационный телефон:</div>
      </div>
    </div>

  )
}
