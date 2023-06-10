import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const NaLogo: FC<{ className?: string; size?: number }> = ({
  className,
  size = 140,
}) => (
  <Link className={className} href={'/'}>
    <Image src={'/logo.svg'} alt='NA Logo' width={size} height={size} />
  </Link>
)
