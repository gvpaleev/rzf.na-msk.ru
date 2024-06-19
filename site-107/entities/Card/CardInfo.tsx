import classNames from 'classnames'
import styles from './CardInfo.module.css'
import CardInfoHeader from '../CardInfoHeader/CardInfoHeader'
import CardInfoBody from '../CardInfoBody/CardInfoBody'
export default function CardInfo() {
  return (

    <div className={classNames(styles['item'])}>
      <CardInfoHeader />
      <CardInfoBody />
    </div>
  )
}
