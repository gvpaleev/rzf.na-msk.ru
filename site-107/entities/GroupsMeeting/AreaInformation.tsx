import classNames from 'classnames'
import styles from './AreaInformation.module.css'

export default function AreaInformation() {
  return (
    <div className={classNames(styles['item'])}>
      <div className={classNames(styles['line'])}>
        <h1 className={classNames(styles['h1'])}>120</h1>
        <h6 className={classNames(styles['h6'])}>Собрания проводится сегодня </h6>
      </div>
      <div className={classNames(styles['line'])}>
        <h1 className={classNames(styles['h1'])}>120</h1>
        <h6 className={classNames(styles['h6'])}>Групп АН в регионе Большая Москва</h6>
      </div>
    </div>
  )
}
