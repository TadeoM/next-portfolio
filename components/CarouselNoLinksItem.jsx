import React, {useState} from 'react'
import classNames from 'classnames';
import Image from 'next/image'

export default function CarouselNoLinksItem(props) {
  let imageSize = 288
  let image = props.image
  console.log(props)

  return (
    <div className={`m-5 h-full w-72 rounded-lg overflow-hidden relative`}>
      <Image className='h-full object-contain bg-neutral-800' src={image} />
    </div>
  )
}
