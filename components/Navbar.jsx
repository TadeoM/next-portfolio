import React, { useState } from 'react'
import {VariableIcon, Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'

/*
"bg-slate-800 text-white flex-auto justify-between
    items-center gap-8 px-px"
    */
const Links = [
  {name: 'Home', link:'/home'},
  {name: 'About', link:'/about'},
  {name: 'Projects', link:'/projects'},
];

export default function Navbar(activeName) 
{
  let [isOpen, setisOpen] = useState(false);

  function renderLink(link,index)
  {
    return (
      <li key={index} className='font-semibold my-7 md:my-0 md:ml-8'>
        <a className={`${link.link === activeName.activeName ? 'text-red-500' : 'text-amber-50' } hover:text-rose-500 duration-500`} href={link.link}>{link.name}</a>
      </li>
    )
  }
  return (
    <div className='w-full fixed top-0 left-0 z-10 bg-neutral-800 text-base whitespace-nowrap'>
      <div className='md:w-4/5 lg:w-6/12 2xl:w-5/12 md:px-auto py-4 px-7 md:flex justify-between items-center w-5/12 md:m-auto'>
        {/*logo here*/}
        <a href='/'>
          <div className='flex text-2x1 cursor-pointer items-center gap-2 text-xl'>
            <VariableIcon className='w-8 h-8 text-red-500 m-auto'/>
            <span className=' font-bold text-amber-50 hover:text-red-500 m-auto'>Tadeo Menichelli</span>
          </div>
        </a>
        {/*Menu Icon */}
        <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden text-amber-50'>
          {
            isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>

        {/* nav links here */}
        <ul className={`md:flex text-left md:items-center md:pb-0 pb-12 absolute md:static 
        md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
        duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
          {
            Links.map((link,index) => renderLink(link,index))
          }
          <button className='btn bg-red-500 text-amber-50 py-1 px-3 md:ml-8 rounded md:static '><a href="/contact">Contact Me</a></button>
        </ul>
      </div>
    </div>
  )
}