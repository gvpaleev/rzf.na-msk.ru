import classNames from 'classnames'
import styles from './page.module.css'
import Link from 'next/link'
import Subcommittees from '@/components/Subcommittees/Subcommittees'

export default function Page() {
  return (
    <div className={classNames(styles.item)}>
      <header className={classNames(styles.header)}>
        <Link href='localities'>Структура обслуживания</Link>
        <h1>МКО Центр</h1>
      </header>
      <Subcommittees />
    </div>
  )
}
