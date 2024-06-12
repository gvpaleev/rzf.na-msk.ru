import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const NaLogo: FC<{ className?: string; }> = ({
  className
}) => (
  <Link className={className} href={'/'}>
    <Image src={'/logo.svg'} alt='NA Logo' />
    {/* <Image className="sm:hidden" src={'/logo.svg'} alt='NA Logo' width={70} height={70} /> */}
  </Link>
)
