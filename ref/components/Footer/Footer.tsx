import classNames from 'classnames'
import styles from './Footer.module.css'
import CardForFooter from '../CardForFooter/CardForFooter'
import PhoneBlock from '../PhoneBlock/PhoneBlock'

export default function Footer() {
  return (
    <div className={classNames(styles['item'])}>
      <CardForFooter />
      <CardForFooter />
      <CardForFooter />
      <div className={classNames(styles['info'])}>
        © 2003-{new Date().getFullYear()} Официальный сайт сообщества
        Анонимные Наркоманы региона Большая Москва
      </div>
      <div className={classNames(styles['line-2'])}></div>
      <div className={classNames(styles['line-2'])}><PhoneBlock /></div>
    </div>
  )
}
