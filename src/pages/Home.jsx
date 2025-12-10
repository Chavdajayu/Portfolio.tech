import React from 'react'
import img from '../image/Iamjaydeep.jpg'

const Home = () => {
  return (
    <div id='home' className='h-[80%] w-full bg-black flex flex-col items-center justify-center '>

      <div className='h-[47%] w-full  flex flex-col items-center justify-end '>
        <h1 className='h-35 rounded-xl overflow-hidden' >
          <img src={img} className="h-full w-full object-contain " alt="Vite logo" />
        </h1>
      </div>

      <div className='h-[53%] w-full flex flex-col items-center justify-start py-8 '>
        <h1 className='text-5xl font-bold ' >Hi, I'm Jaydeep</h1>
        <p className='w-[43%] mt-8 text-xl text-[#777B84] text-center  ' >I’m a developer and creator who builds seamless digital experiences. With expertise in React, Node.js, Express, and MongoDB, I craft full-stack applications that are both functional and engaging. My front-end skills in JavaScript, Tailwind CSS, and Bootstrap help me design interfaces that feel clean, intuitive, and responsive.</p>
      </div>

    </div>
  )
}

export default Home