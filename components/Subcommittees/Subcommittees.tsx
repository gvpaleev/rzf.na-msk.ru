import Link from 'next/link'
import styles from './Subcommittees.module.css'
export default function Subcommittees() {
  return (
    <div className={styles.item}>
      <header className={styles.header}>

        Подкомитеты МКО Центр:
      </header>
      <Link className={styles.link} href='#'>МКО ЦЕНТР Подкомитет БУ</Link>
      <Link className={styles.link} href='#'>МКО ЦЕНТР Подкомитет МДА</Link>
    </div>
  )
}
