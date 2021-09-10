import React from 'react'
import About from '../Compenents/Home/About'
import Hero from '../Compenents/Home/Hero'
import Navbar from '../Compenents/Navbar'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
        </div>
    )
}
