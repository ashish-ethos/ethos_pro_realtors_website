import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import PremiumProperties from './components/PremiumProperties/PremiumProperties'
import DifferentCities from './components/DifferentCities/DifferentCities'
import ExploreProperties from './components/ExploreProperities/ExploreProperities'
import Testimonial from './components/Testimoinal/Testimonial'

function App() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Home />
        <PremiumProperties />
        <DifferentCities />
        <ExploreProperties/>
        <Testimonial/>

        <h1 className="text-3xl font-bold underline text-center">
          Welcome to Ethos Pro Realtors
        </h1>
        <p className="text-center mt-4">
          Leading Real Estate Consultants in India
        </p>

        <p className="text-center mt-2">Click the button to increase the count</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center">Get Started</h2>
          <p className="text-center">
            Explore our services and find your dream property.
          </p>
          <h1 className="text-white bg-black text-center p-2 font-[Inter]">Hello World</h1>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
