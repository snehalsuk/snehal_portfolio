import React from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Portfolio from './Component/Portfolio/Portfolio'
import About from './Component/About'
import Services from './Component/Services'
import Price from './Component/Price'
import Footer from './Component/Footer'
import Contact from './Component/ContactPage/Contact'



const Main = () => {
  return (
    <div>
        <Header/>
        <Portfolio/>

        <Navbar/>
        <About/>
        <Services/>
        <Price/>
       <Contact/>
        <Footer/>
    </div>
  )
}

export default Main