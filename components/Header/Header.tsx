import classNames from "classnames";
import styles from './Header.module.css'
import { TopCarousel } from "@/entities/TopCarousel";

export default function Header() {
  return (
    <div className={classNames(styles['item'])}>

      <TopCarousel />

    </div>
  )
}
