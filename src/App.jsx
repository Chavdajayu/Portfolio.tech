import React from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import Qualification from './pages/Qualification'
import Skill from './pages/Skill'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-screen w-full bg-[#000000] text-white relative  '>
      <Navbar />
      <Home />
      <Work />
      <Qualification />
      <Skill />
      <About />
    </div>
  )
}

export default App