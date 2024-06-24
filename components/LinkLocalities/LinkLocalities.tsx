import classNames from "classnames";
import styles from './LinkLocalities.module.css'
import Link from "next/link";

interface Props {
  title: string;
  className?: string;
}

export default function LinkLocaliies({ title, className }: Props) {
  return (
    <div className={classNames(styles['item'], className)}>
      <Link className={classNames(styles['a'])} href='#'>

        {title}

      </Link>
    </div>
  )
}
