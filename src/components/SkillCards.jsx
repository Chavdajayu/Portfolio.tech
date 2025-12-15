import React from 'react'


const SkillCards = (props) => {
  return (

                <a href={props.elem.link} className='h-full w-[18%]  flex flex-col items-center justify-center ' >
    
                  <div className='h-[65%] w-full   flex flex-col items-center justify-center ' >
                    {/* <img src={js} className='h-full  scale-70   object-cover   ' alt="" /> */}
                    <img src={props.elem.imageLink} className='h-full  scale-70   object-cover  ' alt="" />
                  </div>
                  <div className='h-[35%] w-full   flex flex-col items-center justify-start  scale-90 ' >
                    <h1>{props.elem.h1Title}</h1>
                  </div>
    
                </a>

  )
}

export default SkillCards