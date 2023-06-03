import { Roboto } from 'next/font/google'

import { MainLayout } from '@components/Layout/Layout'

import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
