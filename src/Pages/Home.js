import React from 'react'
import About from '../Compenents/Home/About'
import Blog from '../Compenents/Home/Blog'
// import Event from '../Compenents/Home/Event'
import Footer from '../Compenents/Footer'
import Hero from '../Compenents/Home/Hero'
import Instagram from '../Compenents/Home/Instagram'
import Squad from '../Compenents/Home/Squad'
import Navbar from '../Compenents/Navbar'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Squad/>
            {/* <Event/> */}
            <Blog/>
            <Instagram/>
            <Footer/>
        </div>
    )
}
