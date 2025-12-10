import React from 'react'
import poopcorn from '../image/popcorn.png'
import tailwind from '../image/tailwind.svg'
import mongodb from '../image/mongodb.svg'
import express from '../image/express.svg'
import nodejs from '../image/nodejs.svg'
import react from '../image/react.svg'
import css from '../image/css.svg'
import js from '../image/js.svg'
import python from '../image/python.svg'
import mysql from '../image/mysql.svg'
import ThingsThree from '../components/ThingsThree'

const Skill = () => {
  return (
    <div id='skill' className='h-[50%] w-full bg-black flex flex-col items-center justify-start '>
      <ThingsThree />

      <div className='h-[78%]  w-[81%] bg-black flex gap-10 items-start px-5 justify-start  ' >

        <div className="h-[66%] border-1 border-[#1A1A1A] w-full bg-black flex flex-col items-start mt-4  justify-start py-2  ">
          <div className='h-[40%] w-full flex flex-col items-center justify-center font-semibold text-xl ' >
            <p>Frontend</p>
            <p className='h-[1.8px] w-[40px] rounded-full  bg-[#EC1D24] ' ></p>
          </div>

          <div className='h-[60%] w-full  flex px-6 items-center justify-evenly text-white ' >

            <div className='h-full w-[18%]  flex flex-col items-center justify-center ' >

              <div className='h-[65%] w-full   flex flex-col items-center justify-center   ' >

                <img src={css} className='h-full  scale-70   object-cover   ' alt="" />

              </div>
              <div className='h-[35%] w-full  flex flex-col items-center justify-start scale-90 ' >

                <h1>CSS</h1>

              </div>

            </div>

            <div className='h-full w-[18%]  flex flex-col items-center justify-center ' >

              <div className='h-[65%] w-full   flex flex-col items-center justify-center ' >
                <img src={tailwind} className='h-full  scale-70   object-cover   ' alt="" />
              </div>

              <div className='h-[35%] w-full   flex flex-col items-center justify-start  scale-90 ' >
                <h1>TailwindCSS</h1>
              </div>

            </div>

            <div className='h-full w-[18%]  flex flex-col items-center justify-center ' >

              <div className='h-[65%] w-full   flex flex-col items-center justify-center ' >
                <img src={js} className='h-full  scale-70   object-cover   ' alt="" />
              </div>
              <div className='h-[35%] w-full   flex flex-col items-center justify-start  scale-90 ' >
                <h1>JavaScript</h1>
              </div>

            </div>

            <div className='h-full w-[18%]  flex flex-col items-center justify-center ' >

              <div className='h-[65%] w-full   flex flex-col items-center justify-center ' >
                <img src={react} className='h-full  scale-70   object-cover   ' alt="" />
              </div>
              <div className='h-[35%] w-full   flex flex-col items-center justify-start  scale-90 ' >
                <h1>React</h1>
              </div>

            </div>

            {/* <img src={mongodb} className='h-full  scale-80   object-cover  ' alt="" /> */}
            {/* <img src={express} className='h-full bg-white rounded-full px-2 py-2 scale-75 ' alt="" /> */}
            {/* <img src={nodejs} className='h-full   scale-80   object-cover ' alt="" /> */}


          </div>

        </div>
        <div className="h-[66%] border-1 border-[#1A1A1A] w-full bg-black flex flex-col items-start mt-4 justify-start py-2  ">

          <div className='h-[40%] w-full flex flex-col items-center justify-center font-semibold text-xl ' >
            <p>Backend</p>
            <p className='h-[1.8px] w-[40px] rounded-full  bg-[#EC1D24] ' ></p>
          </div>

          <div className='h-[60%] w-full  flex px-6 items-center justify-evenly text-white ' >

            <div className='h-full w-[18%]  flex flex-col items-center justify-center ' >

              <div className='h-[65%] w-full   flex flex-col items-center justify-center   ' >

                {/* <img src={css} className='h-full  scale-70   object-cover   ' alt="" /> */}
                <img src={python} className='h-full bg-white rounded-full px-2 py-2 scale-70 ' alt="" />

              </div>
              <div className='h-[35%] w-full  flex flex-col items-center justify-start scale-90 ' >

                <h1>Python</h1>

              </div>

            </div>

            <div className='h-full w-[18%]  flex flex-col items-center justify-center ' >

              <div className='h-[65%] w-full   flex flex-col items-center justify-center ' >
                {/* <img src={tailwind} className='h-full  scale-70   object-cover   ' alt="" /> */}
                <img src={nodejs} className='h-full   scale-70   object-cover ' alt="" />
              </div>

              <div className='h-[35%] w-full   flex flex-col items-center justify-start  scale-90 ' >
                <h1>Node.js</h1>
              </div>

            </div>

            <div className='h-full w-[18%]  flex flex-col items-center justify-center ' >

              <div className='h-[65%] w-full   flex flex-col items-center justify-center ' >
                {/* <img src={js} className='h-full  scale-70   object-cover   ' alt="" /> */}
                <img src={mysql} className='h-full  scale-70   object-cover  ' alt="" />
              </div>
              <div className='h-[35%] w-full   flex flex-col items-center justify-start  scale-90 ' >
                <h1>MySQL</h1>
              </div>

            </div>



          </div>



        </div>

      </div>

    </div>
  )
}

export default Skill