import React from 'react'


const SkillCards = (props) => {
  return (
    <a 
      href={props.elem.link} 
      target="_blank"
      rel="noopener noreferrer"
      className='w-[80px] sm:w-[100px] flex flex-col items-center gap-2 group transition-transform hover:scale-110'
    >
      <div className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center'>
        <img 
          src={props.elem.imageLink} 
          className={`max-w-full max-h-full object-contain ${props.elem.shouldInvert ? 'invert brightness-200' : ''}`} 
          alt={props.elem.h1Title} 
        />
      </div>
      <div className='text-center'>
        <h1 className='text-[10px] sm:text-xs font-medium text-gray-400 group-hover:text-white transition-colors'>
          {props.elem.h1Title}
        </h1>
      </div>
    </a>
  )
}

export default SkillCards