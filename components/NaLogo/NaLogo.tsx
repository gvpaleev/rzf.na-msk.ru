import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const NaLogo: FC<{ className?: string;}> = ({
  className
}) => (
  <Link className={className} href={'/'}>
    <Image className="hidden sm:block" src={'/logo.svg'} alt='NA Logo' width={140} height={140} />
    <Image className="sm:hidden" src={'/logo.svg'} alt='NA Logo' width={70} height={70} />
  </Link>
)
