import React from 'react'
import img1 from '../image/1.jpg'
import img2 from '../image/2.jpg'
import img3 from '../image/3.jpg'
import img4 from '../image/4.jpg'
import img5 from '../image/5.jpg'
import img6 from '../image/6.jpg'
import img7 from '../image/7.jpg'
import img8 from '../image/8.jpg'

const cards = [
  { src: img1, rot: '-6', z: 'z-10', translateY: 'translate-b-5' },
  { src: img2, rot: '2',  z: 'z-30', translateY: 'translate-y-6' },
  { src: img3, rot: '-3', z: 'z-50', translateY: 'translate-y-0' },
  { src: img4, rot: '4',  z: 'z-60', translateY: 'translate-y-8' },
  { src: img5, rot: '-1', z: 'z-70', translateY: 'translate-y-0' },
  { src: img6, rot: '5',  z: 'z-80', translateY: 'translate-y-8' },
  { src: img7, rot: '-4', z: 'z-90', translateY: 'translate-y-0' },
  { src: img8, rot: '6',  z: 'z-100', translateY: 'translate-y-8' },
]

const Last = () => {
  return (
    <div className="w-full min-h-[480px] bg-black flex items-start justify-center py-12 overflow-x-hidden">
      <div className="relative w-full max-w-[1200px] flex items-start justify-center gap-0 px-8">
        {/* We'll position cards with negative margin so they overlap nicely */}
        <div className="relative flex items-end -space-x-[56px]">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`
                relative group transition-all duration-200
                ${c.z}
                transform ${c.translateY}
                hover:z-50 hover:-translate-y-2 hover:scale-105 hover:drop-shadow-2xl
                `}
              style={{
                // Tailwind rotate utility with dynamic value via style
                transformOrigin: 'center bottom',
              }}
            >
              <div
                // wrapper to apply rotation via inline style (Tailwind doesn't accept dynamic rotate-[] easily)
                className=" border-4 border-white overflow-hidden"
                style={{
                  width: 180,
                  height: 260,
                  transform: `rotate(${c.rot}deg)`,
                }}
              >
                <img
                  src={c.src}
                  alt={`card-${i}`}
                  className="w-[180px] h-[260px] object-cover block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Last
