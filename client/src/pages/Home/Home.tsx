import React from 'react'
import Hero from '../../components/Hero'
import FreshProducts from '../../components/FreshProducts'
import About from '../../components/About/About'
import SpecialOffer from '../../components/SpecialOffer'
import Testomonial from '../../components/Testomonial'
import News from '../../components/News'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FreshProducts/>
        <About/>
        <SpecialOffer/>
        <Testomonial/>
        <News/>
    </div>
  )
}

export default Home