import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function Overlay({isOpen, onClose, children}) {
  return (
    <>
    {isOpen ? (
      <div className='overlay rounded-md'>
        <div className='overlay_background bg-black w-screen h-screen fixed top-0 left-0 cursor-pointer z-[9] bg-opacity-50' onClick={onClose} />
        <div className='overlay_container rounded-xl bg-neutral-800 fixed top-0 bottom-0 left-0 right-0 m-auto z-10 w-fit h-fit max-w-[40%] p-8'>
          <div className='overlay_controls'>
            <button 
            className='overlay_close'
            type='button'
            onClick={onClose}
            >
              <CloseIcon className=' material-symbols-outlined text-amber-50 inline-block border-none absolute top-4 right-4 text-lg'/>
            </button>
          </div>
          {children}
        </div>
      </div>
    ) : null}
    </>
  )
}

