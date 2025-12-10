import React from 'react'
import arrow from '../image/Arrow.svg'

const ThingsThree = () => {
  return (
    
             <div className='h-[22%] w-[78%] bg-black flex flex-col items-start px-5 justify-start py-2  ' >
                            <h1 className='things text-lg font-bold '>Things I’m Good At</h1>
                            <img src={arrow} className='h-full px-30 pb-6 scale-96' alt="" />
                        </div>
  )
}

export default ThingsThree