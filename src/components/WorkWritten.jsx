import React from 'react'
import poopcorn from '../image/popcorn.png'
import tailwind from '../image/tailwind.svg'
import mongodb from '../image/mongodb.svg'
import express from '../image/express.svg'
import nodejs from '../image/nodejs.svg'
import react from '../image/react.svg'
import python from '../image/python.svg'
import mysql from '../image/mysql.svg'

const WorkWritten = () => {
    return (

        <div className=' h-full w-[40%] flex flex-col items-center justify-center ' >

            <div className='h-[35%] w-full  flex flex-col my-3 items-center justify-start ' >

                <div className='h-[20%] w-full  flex  items-center justify-start px-6 pt-3 text-2xl font-semibold gap-1 '  >
                    <img src={poopcorn} alt="" className='object-cover scale-78' />
                    <h1>ActionVerse</h1>
                </div>
                <div className='h-[80%] w-full flex  items-center justify-start px-7 pt-7 text-[#C5C5C5] gap-2 '  >
                    <p className='text-base/6.5' >ActionVerse is a movie and series booking platform built with the MERN stack. It features a modern UI, smooth navigation, and a real-world ticket booking experience.</p>
                    {/* <h1>ActionVerse</h1> */}
                </div>

            </div>

            <div className='h-[30%] w-full flex flex-col items-center justify-start ' >

                <div className='h-[40%] w-full  flex px-6 items-start justify-start text-white' >
                    <img src={tailwind} className='h-full  scale-80   object-cover   ' alt="" />
                    <img src={mongodb} className='h-full  scale-80   object-cover  ' alt="" />
                    {/* <img src={express} className='h-full bg-white rounded-full px-2 py-2 scale-75 ' alt="" /> */}
                    <img src={react} className='h-full  scale-80   object-cover  ' alt="" />
                    <img src={nodejs} className='h-full   scale-80   object-cover ' alt="" />
                </div>
                <div className='h-[60%] w-full  flex items-center justify-start  px-3 ' >
                    <a href='https://actionverse-sand.vercel.app/' className='rounded-lg scale-75  border-2 border-white px-8 font-semibold mt-2  py-2' ><h1>Visit Site</h1></a>

                </div>


            </div>

        </div>
    )
}

export default WorkWritten