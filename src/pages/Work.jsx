import React from 'react'
import Things from '../components/Things'

import WorkWritten from '../components/WorkWritten'
import WorkImageScroller from '../components/WorkImageScroller'

const Work = () => {
  return (
    <div id='work' className='h-[70%] w-full bg-black flex flex-col items-center justify-center '>

      <Things />
      <div className='h-[80%] w-[78%]  pt-5  bg-black  flex flex-col items-center justify-start ' >

        <div className='h-[87%] w-[99%] rounded-xl border-1 border-[#171819]  flex overflow-hidden items-center justify-center ' >

          <WorkWritten />
          <WorkImageScroller />

        </div>

      </div>
    </div>
  )
}

export default Work