import styles from "./page.module.css";
import classNames from "classnames";

export default function Home() {
  return (
    <div className={classNames(styles['item'])}>
      hello word
    </div>
  );
}
