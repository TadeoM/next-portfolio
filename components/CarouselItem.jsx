import React, {useState} from 'react'
import classNames from 'classnames';
import Image from 'next/image'

export default function CarouselItem(props) {
  const [active, setActive] = useState(false)
  let imgSize = props.imageSize

  return (
    <div className={`m-5 h-[${imgSize}}px] w-72 rounded-lg overflow-hidden relative`} onMouseEnter={() =>setActive(true)} onMouseLeave={()=>setActive(false)}>
      <Image className={classNames('h-full transition-all duration-500 object-contain bg-black', {"scale-105" : active})} src={props.props.images[0]} />
      <div className={classNames('carousel-item-text text-sm bottom-1 font-bold py-2 px-0 whitespace-normal text-amber-50 absolute left-4 bg-neutral-800 rounded-sm w-24 h-16 transition-all duration-1000', 
      {
        "opacity-0": !active,
        "bottom-[-100px]": !active,
      })}>{props.props.summary}</div>      
    </div>
  )
}
