import styles from './Baner.module.css'
import classNames from 'classnames'
import PhoneBlock from '../PhoneBlock/PhoneBlock'
import NaSvg from '../../public/logo.svg'
import { BanerTitle } from '../BanerTitle/BanerTitle'

export default function Baner() {
  return (
    <div className={classNames(styles['item'])}>
      <div className={styles['line-1']}>
        <NaSvg className={styles['logo']} />
        <BanerTitle />
        <PhoneBlock />
      </div>
      <div className={styles['line-2']}>Анонимные Наркоманы (АН) — это некоммерческое, непрофессиональное и нерелигиозное сообщество выздоравливающих зависимых, которые бескорыстно помогают друг другу прекратить употреблять наркотики и научиться жить без них. Единственная цель сообщества АН — сделать доступной информацию о возможности выздоровления тем, кто еще употребляет наркотики и страдает от наркомании. Единственное условие для членства - желание прекратить употребление.</div>
    </div>

  )
}
