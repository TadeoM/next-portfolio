import React, {useState} from 'react'
import CarouselItem from './CarouselItem'
import CarouselNoLinks from './CarouselNoLinks';
import {ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/solid'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Overlay from './Overlay';

// params: items, image size
export default function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [overlayItemIndex, setOverlayItemIndex] = useState(0)
  let itemList = props.props
  let imageSize = 288
  let carouselIndexMax = itemList.length - 1
  let isButtonsClickable = props.isButtonsClickable
  // how can I get width of a div? I want to dynamically decide how many indices there will be in the

  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
      newIndex = carouselIndexMax - 1;
    }
    else if (newIndex >= carouselIndexMax){
      newIndex = 0;
    }
    //console.log(newIndex)
    setActiveIndex(newIndex);
  }
  
  const getActiveIndicator = (index) => {
    if (index == activeIndex)
    {
      return <RadioButtonCheckedIcon className='material-symbols-outlined p-1' />;
    }
    return<RadioButtonUncheckedIcon className='material-symbols-outlined p-1' />;
  }

  const carouselPages = () => {
    let content = []
    for (let index = 0; index < carouselIndexMax; index++) {
      content.push
      (
        <button key={index} className={`indicator-button ${activeIndex == index % carouselIndexMax ? 'underline' : ''}`} onClick={() =>setActiveIndex(index)}>
          { getActiveIndicator(index) }
        </button>
      )
    }
    return content
  }

  const openCarousel = (index) => {
    setOverlayItemIndex(index)
    setIsOverlayOpen(!isOverlayOpen)
    //255, 197, 149
  }

  const displayCarousel = () => {
    let index = overlayItemIndex
    return (
      <>
        <h1 className='text-red-500 text-left text-2xl font-bold m-auto px-4'>{itemList[index].title}</h1>
        <CarouselNoLinks className='max-w-[50%]' images={itemList[index].images}/>
        <h2 className='text-amber-50 text-left'><b className='text-red-500 px-4'>Role:</b> {itemList[index].role}</h2>
        <p className='whitespace-pre-wrap text-amber-50 text-left m-auto py-5 px-4'>{itemList[index].description}</p>
        { itemList[index].gameUrl ? (
          <>
            <p className='text-red-500 text-left font-semibold px-4'>Game URL: 
              <a className='text-blue-500 text-left font-normal' href={itemList[index].gameUrl}> {itemList[index].gameUrl}</a>
            </p>
          </>) : null}
        { itemList[index].sourceUrl ? (
          <>
            <p className='text-red-500 text-left font-semibold px-4'>Source URL: 
              <a className='text-blue-500 text-left font-normal' href={itemList[index].sourceUrl}> {itemList[index].sourceUrl}</a>
            </p>
          </>) : null}
      </>
    )
  }

  return (
    <div className='h-screen'>
      <div className='overflow-hidden'>
        <div 
          className='flex justify-center items-center duration-75 shadow-lg shadow-black transition-all '
          style={{
            transform: `translate(${-(activeIndex * imageSize) + 100}px)`,
            width: imageSize*itemList.length
          }}
        >
          {
            itemList.map((item, index) => {
              return <button key={index}className={`h-full ${isButtonsClickable == 'false'? 'pointer-events-none' : ''}`} onClick={()=> openCarousel(index)}>
                  <CarouselItem props={item}/>
                </button>;
            })
          }
        </div>
      </div>
      {/*
        each time button clicked, translate by amount equal to each item's width (384px)
      */}
      <div className='carousel-buttons flex'>
        <button className='w-10'
          onClick={()=>{
            updateIndex(activeIndex - 1)
          }}> <ChevronLeftIcon/>
        </button>
        <div className='indicators m-auto'>
            { carouselPages() }
        </div>
        <button 
        className='w-10'
        onClick={()=>{
          updateIndex(activeIndex + 1)
        }}><ChevronRightIcon /></button>
      </div>

      <Overlay isOpen={isOverlayOpen} onClose={()=> setIsOverlayOpen(!isOverlayOpen)}>
        { displayCarousel() }
      </Overlay>

    </div>
  )
}
