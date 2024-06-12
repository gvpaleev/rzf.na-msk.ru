import { NaLogo } from '@/entities/NaLogo'
import styles from './Baner.module.css'
import classNames from 'classnames'
import { HeaderTitle } from '@/entities/HeaderTitle'
import WhatsappLogo from '@/entities/WhatsappLogo'
import PhoneBlock from '../PhoneBlock/PhoneBlock'

export default function Baner() {
  return (
    <div className={classNames(styles['item'])}>
      <div className={styles['line-1']}>
        {/* <NaLogo className={styles['logo']} /> */}
        <HeaderTitle />
        {/* <h1 >Анонимные Наркоманы</h1> */}
        {/* <h2 >Официальный сайт города <span id="current-town"></span></h2> */}
        <PhoneBlock />
      </div>
      <div className={styles['line-2']}></div>
    </div>

  )
}
