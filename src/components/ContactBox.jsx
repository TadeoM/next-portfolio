import React from 'react'

export default function ContactBox(props){
  let icon = props.icon
  let content = props.content
  return (
    <div className='w-full rounded-lg bg-neutral-800 flex p-2 my-5'>
      {icon}
      <div className='text-left w-full my-auto'>{content}</div>
    </div>
  )
}
