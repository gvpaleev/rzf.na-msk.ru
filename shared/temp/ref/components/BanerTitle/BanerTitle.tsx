import classNames from 'classnames'
import styles from './BanerTitle.module.css'
export function BanerTitle(props: { currentTown?: string }) {
  return (
    <div className={classNames(styles['item'])}>
      <h1 className={classNames(styles['h1'])}>
        Анонимные Наркоманы
      </h1>
      <h2 className={classNames(styles['h2'])}>
        Официальный сайт города <span>Москва{/* {props.currentTown} */}</span>
      </h2>
    </div>
  )
}
