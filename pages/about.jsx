import image from '../public/me.jpg'
import Image from 'next/image'
import Link from "next/link"

export default function About() {
  return (
    <div className='mx-5 lg:flex lg:justify-between md:flex z-10'>
      <div className='m-auto pr-10 max-w-sm w-full'>
        <Image className='rounded-md' src={image} alt='image of me' />
      </div>
      <div className='w-full'>
        <h2 className='text-left my-2 text-3xl font-extrabold'>Tadeo <span className='text-red-500'>Menichelli</span></h2>
        <h3 className='text-left my-3 text-xl'>Gameplay <b>Engineer</b></h3>
        <p className='text-left my-10 text-md'>My name is Tadeo Menichelli. I am a Software Engineer, with a focus in Gameplay Engineering. 
        I have always been incredibly passionate about my job, and wish to continue to grow wherever that might be. I'm looking for work
        at a company where I can grow into a mid-level engineer position. Reach out if you think you have a role that I'd be a good
        fit for!
        </p>
        {/* why does added flex make it align left, but nothing else does? Am I cheating to get this to work? */}
        <button className='btn bg-red-500 text-amber-50 text-lg font-semibold py-4 px-10 rounded-full leading-4'>
          <a href='/TadeoMenichelliResume.pdf' download>Download CV</a>
        </button>
      </div>
    </div>  
  )
}
