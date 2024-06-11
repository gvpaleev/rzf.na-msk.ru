import MedIcon from '../icon-med.svg'
import classNames from "classnames";

import styles from './InfoWithIcon.module.css'
export default function InfoWithIcon() {
  return (
    <div className={classNames(styles['item'])}>
      <div className={classNames(styles['header'])}>
        <MedIcon />
        <a className={classNames(styles['a'])} href='#'>Медицинские учереждения</a>
      </div>
      <div className={classNames(styles['body'])}>
        Размещаем информацию о Сообществе "Анонимные Наркоманы", проводим презентации специалистам и людям, у которых есть проблемы с наркотиками
      </div>
    </div>
  )
}
