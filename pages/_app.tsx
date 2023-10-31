import '../styles/global.css'

import Home from './home';
import Projects from './projects';
import About from './about';
import Contact from './contact';
import Navbar from '../components/Navbar';
import Waves from '../components/CanvasComponents/Waves'
import { useRouter } from 'next/router'

const MyApp=()=>{
  const { pathname } = useRouter();
  let component;

  // at some point I'll need to fix this with apache routes so that someone can go to tadeomenichelli.me/projects, or tadeomenichelli.me/about, etc
  // otherwise need to learn react router
  console.log(pathname)
  switch (pathname) {
    case '/':
    case '/home':
      component = <Home />;
      break;
    case '/projects':
      component = <Projects />;
      break;
    case '/about':
      component = <About />;
      break;
    case '/contact':
      component = <Contact />;
      break;
    default:
      break;
  };

  return (
    <>
      <div className='fixed left-0 top-0 bg-black w-screen h-screen z-[-1]'></div>
      <Waves xDots={200} yDots={25}/>
      <div className="overflow-hidden">
        <div className='z-[1]'>
          <Navbar activeName={pathname}/>
          <div className='w-full md:w-4/5 lg:w-5/12 h-screen m-auto py-56 text-amber-50 z-10'> 
            {component}
          </div>
        </div>
        
        
      </div>
    </>
    
  );
}
export default MyApp
