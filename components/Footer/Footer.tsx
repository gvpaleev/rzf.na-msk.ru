import classNames from 'classnames'
import styles from './Footer.module.css'
import CardForFooter from '../CardForFooter/CardForFooter'

export default function Footer() {
  return (
    <div className={classNames(styles['item'])}>
      <CardForFooter />
      <CardForFooter />
      <CardForFooter />
      <div className={classNames(styles['line-2'])}>line-2</div>
      <div className={classNames(styles['line-2'])}></div>
      <div className={classNames(styles['line-2'])}>line-2</div>
    </div>
  )
}
