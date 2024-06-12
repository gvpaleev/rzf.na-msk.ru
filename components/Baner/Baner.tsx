import styles from './Baner.module.css'
import classNames from 'classnames'

export default function Baner() {
  return (
    <div className={classNames(styles['item'])}>
      <div className={styles['line-1']}></div>
      <div className={styles['line-2']}></div>
    </div>

  )
}
