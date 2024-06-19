import styles from './CardForFooter.module.css'
import classNames from "classnames";

export default function CardForFooter() {
  return (
    <div className={classNames(styles['item'])}>
      <h2 className={classNames(styles['header'])}>header</h2  >
      <a href='#' className={classNames(styles['href'])}>href</a>
      <a href='#' className={classNames(styles['href'])}>href</a>
      <a href='#' className={classNames(styles['href'])}>href</a>
    </div>
  )
}
