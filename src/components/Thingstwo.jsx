import arrow from '../image/Arrow.svg'
import React from 'react'

const Thingstwo = () => {
  return (
     <div className='h-[15%] w-[78%] bg-black flex flex-col items-start px-5 justify-start py-5  ' >
                <h1 className='things text-lg font-bold '>The Story So Far</h1>
                <img src={arrow} className='h-full px-30 pb-3 scale-96' alt="" />
            </div>
  )
}

export default Thingstwo