import { useId } from 'react'
import img from '@/images/logo.png'
import Image, { type ImageProps } from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <>
    <Image
        src={img}
        alt=""
        className='w-64'
      />
    </>
  )
}
