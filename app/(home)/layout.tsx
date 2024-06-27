'use client'

import { EffectorNext } from '@effector/next'
import React from 'react'

import { MainLayout } from '@components/Layout/Layout'

import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-theme='light'>
      <body>
        <EffectorNext>
          <MainLayout>{children}</MainLayout>
        </EffectorNext>
      </body>
    </html>
  )
}
