import classNames from 'classnames'
import styles from './layout.module.css'
import Header from '@/components/Header/Header'
import Baner from '@/components/Baner/Baner'
import { TopCarousel } from '@/entities/TopCarousel'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(styles['item'])}>
        <TopCarousel />
        {/* <Header /> */}
        <div className={styles['body']}>
          <Baner />
          {children}
        </div>
      </body>
    </html>
  )
}
