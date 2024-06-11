import styles from './CardItemHeader.module.css'
import classNames from "classnames";
import MenuOpenIcon from '../menuOpen.svg'
import Menu from '../../public/menu.svg'
export default function CardInfoHeader() {
  return (
    <div className={classNames(styles['item'])}>
      <h1 className={classNames(styles['h4'])}>АН в обществе</h1>
      <div className={classNames(styles['button'])}>
        <MenuOpenIcon />
      </div>
    </div>
  )
}
