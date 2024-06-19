import classNames from "classnames";

import styles from './Info.module.css'
export default function Info() {
  return (
    <div className={classNames(styles['item'])}>
      <h6 className={classNames(styles['h6'])}>Взаимодействие:</h6>
      <div className={classNames(styles['body'])}>В Сообществе "Анонимные Наркоманы" есть принцип - сотрудничество, но не присоединение. Наше взаимодействие с различными государственными структурами, учреждениями и другими организациями осуществляется только с целью донесения информации о Сообществе до зависимого и его ближайшего окружения.</div>
    </div>
  )
}
