import React from 'react'
import ThingsFour from '../components/ThingsFour'
import Last from '../components/Last'

const About = () => {
  return (
    <div id='about' className='h-[85.4%] w-full  bg-black flex flex-col items-center justify-start '>
      <ThingsFour />
      <div className='h-[78%] w-full  '>
<Last />
      </div>
    </div>
  )
}

export default About