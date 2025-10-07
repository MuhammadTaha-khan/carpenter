import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Testimonials from './components/Testimonial'
import Aboutus from './components/Aboutus'
import Vediosection from './components/Vediosection'
import Appoiment from './components/Appoiment'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Herosection/>
        <Testimonials/>
        <Aboutus/>
        <Vediosection/>
        <Appoiment/>
        <Footer/>
      </div>

    </>
  )
}

export default App
