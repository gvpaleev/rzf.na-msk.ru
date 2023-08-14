'use client'

import { useScope } from '@/hooks/useScope'
import { Provider } from 'effector-react'
import React from 'react'

import { MainLayout } from '@components/Layout/Layout'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const scope = useScope()

  return (
    <html lang='en'>
      <body>
        <Provider key='0' value={scope}>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  )
}
