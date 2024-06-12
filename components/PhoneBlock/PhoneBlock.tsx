import WhatsappSvg from "../../public/whatsapp.svg"

import styles from './PhoneBlock.module.css'
import classNames from "classnames"

export default function PhoneBlock() {
  return (
    <div className={classNames(styles['item'])}>
      {/* <div className={classNames(styles['column-1'])}> */}
      <WhatsappSvg />
      {/* </div> */}
      <div className={classNames(styles['info'])}>

        <div className={classNames(styles['title'])}>Информационный телефон:</div>
        <a href="+7 (495) 505-33-96" className={classNames(styles['number'])}>+7 (495) 505-33-96</a>
        <div className={classNames(styles['time'])}> с 10:00 до 22:00</div>
      </div>
    </div >

  )
}
