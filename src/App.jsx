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
        <div id="hero">
          <Herosection />
        </div>
        <div id="about">
          <Aboutus />
        </div>
        <div id="choose-us">
          <Vediosection />
        </div>
        <div id="contact">
          <Appoiment />
        </div>
        <Testimonials />
        <Footer/>
      </div>

    </>
  )
}

export default App
