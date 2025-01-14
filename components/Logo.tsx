import React from 'react'
import MetaLogo from '@/public/meta-logo.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex items-center gap-2 select-none absolute top-1/2 -translate-y-1/2 lg:left-1/2  lg:-translate-x-1/2'>
        <Image src={MetaLogo} alt="Meta Logo" width={27} height={27} />
        <p className='text-lg font-semibold text-muted-foreground'>MyQuest</p>
    </div>
  )
}