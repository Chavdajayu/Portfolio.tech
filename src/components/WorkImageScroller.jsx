import React from 'react'
import project from '../image/project.png'

const WorkImageScroller = () => {
    return (
        <a href='https://actionverse-sand.vercel.app/'  className='h-full w-[60%] flex items-center justify-start'>

            <div className='relative bg-black border border-[#171819] h-[90%] w-[94%] mx-4 rounded-xl overflow-hidden'>

                {/* Scrollable Wrapper with auto-animation */}
                <div className="
                    no-scrollbar h-full w-full overflow-y-scroll 
                    [scroll-behavior:smooth] 
                    animate-[autoscroll_2s_linear_infinite_alternate]
                ">
                    <img src={project}
                        className='w-full object-cover'
                        alt="Project"
                    />
                </div>

            </div>

            {/* Make Scroll Animaition for Image */}
            <style>{`
                @keyframes autoscroll {
                    0%   { transform: translateY(0); }
                    100% { transform: translateY(-10%); } /* Only scroll 20% */
                }
            `}</style>

        </a>
    )
}

export default WorkImageScroller
