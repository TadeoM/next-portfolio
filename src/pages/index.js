import React from 'react'
import Home from './home';
import Projects from './projects';
import About from './about';
import Contact from './contact';
import Navbar from '../components/Navbar';
import Waves from '../components/CanvasComponents/Waves'
import { useRouter } from 'next/router'

export default function Index() {

  return (
    <Home />
  );
}
