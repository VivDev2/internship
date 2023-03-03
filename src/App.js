import React from 'react'
import Analytics from './Components/Analytics';
import  Footer  from './Components/Footer';
import { Hero } from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <Hero/>
     <Analytics/>
     <Footer/>
    </div>
  );
}
export  default App;