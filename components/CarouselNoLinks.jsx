import React, {useState} from 'react'
import CarouselNoLinksItem from './CarouselNoLinksItem'
import {ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/solid'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function CarouselNoLinks(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  let imageList = props.images

  return (
    <div className=''>
      <div className='overflow-hidden'>
        <div className='flex justify-center items-center duration-75 shadow-lg shadow-black transition-all'>
          {
            imageList.map((item, index) => {
              return <CarouselNoLinksItem key={index} image={item}/>;
            })
          }
        </div>
      </div>
    </div>
  )
}
