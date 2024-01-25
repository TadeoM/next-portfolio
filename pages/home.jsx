
export default function Home() {
  return (
    <div className='mx-auto space-y-4 translate-y-1/3 text-center'>
      <h1 className='font-bold text-6xl'>Tadeo <span className='text-red-500'>Menichelli</span></h1>
      <h3 className='text-3xl'>Gameplay Engineer</h3>
      <a 
        href="/contact"
        >
        <button 
          className="btn bg-red-500 text-amber-50 text-l my-4 py-4 px-10 rounded-full hover:brightness-75"
          >
          Get in Touch
        </button>
      </a>
      
    </div>
  )
}
