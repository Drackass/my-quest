import Image from 'next/image'
import React from 'react'
import MetaGif from '@/public/meta.gif'

export default function SplashScreen() {
  return (
    <div className='bg-background w-full h-screen flex flex-col justify-center items-center absolute left-0 top-0 z-50'>
        <Image src={MetaGif} alt="Meta Logo Animated" width={50} height={50} className='w-1/12 min-w-20' />
    </div>
  )
}
