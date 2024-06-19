import styles from './Header.module.css'
import classNames from 'classnames'
import NaSvg from '@/shared/icon/logoNA.svg'
import PhoneBlock from '@/features/PhoneBlock/PhoneBlock'

export default function Header() {
  return (
    <div className={classNames(styles['item'])}>
      <NaSvg className={styles['logo']} />
      <h1 className={classNames(styles['h1'])}>
        Анонимные Наркоманы
      </h1>
      <h4 className={classNames(styles['h4'])}>
        Официальный сайт города <span>Москва{/* {props.currentTown} */}</span>
      </h4>

      <PhoneBlock className={styles['contancts']} />
      <div className={styles['info']}>Анонимные Наркоманы (АН) — это некоммерческое, непрофессиональное и нерелигиозное сообщество выздоравливающих зависимых, которые бескорыстно помогают друг другу прекратить употреблять наркотики и научиться жить без них. Единственная цель сообщества АН — сделать доступной информацию о возможности выздоровления тем, кто еще употребляет наркотики и страдает от наркомании. Единственное условие для членства - желание прекратить употребление.</div>
    </div>

  )
}
