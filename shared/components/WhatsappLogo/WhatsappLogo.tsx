import Image from 'next/image'
import { FC } from 'react'

export const WhatsappLogo: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <Image src='/whatsapp.svg' alt='...' width={38} height={38} />
  </div>
)
