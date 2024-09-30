import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Testimonial from '../components/Testimonial'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'



const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Services/>
    <Testimonial/>
    <Gallery/>
    <FAQ/>
    <Contact/>
    
    
    </>
    
  )
}

export default Home