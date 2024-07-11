'use client'

import { installState } from "@/shared/lib/installState";
import { useUnit } from "effector-react";
import { useEffect } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // installState()
  })
  return (
    <>
      {children}
    </>
  )
}
