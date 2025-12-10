import arrow from '../image/Arrow.svg'
import React from 'react'

const Things = () => {
    return (

        <div className='h-[20%] w-[78%] bg-black flex flex-col items-start px-5 justify-start py-8  ' >
            <h1 className='things text-lg font-bold '>Things I’ve Built</h1>
            <img src={arrow} className='h-full px-31 scale-92 ' alt="" />
        </div>
    )
}

export default Things