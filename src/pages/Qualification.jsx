import React from 'react'
import Thingstwo from '../components/Thingstwo'
import Things from '../components/Things'

const Qualification = () => {
  return (

    <div id='qualification' className=' relative h-[85%] w-full bg-black flex flex-col items-center justify-start '>
      {/* <Things2 /> */}
      {/* <Thingstwo /> */}
      <Things name="The Story So Far" />
      {/* <h1>QUALIFICATON</h1> */}
      {/* <!-- center vertical line --> */}
      <div class="absolute left-1/2 top-30 transform -translate-x-1/2 h-[55%]  w-[2px] bg-white"></div>

      {/* <!-- red timeline nodes (center) --> */}
      <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 top-[19%]"></div>
      <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 top-[37.5%]"></div>
      <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 top-[54%]"></div>
      <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 top-[72.5%]"></div>

      {/* <!-- Right - Software Developer (top) --> */}
      <a href='https://www.tcs.com/' class="absolute top-[18%] right-0 w-1/2 pl-8 text-left">
        <div class="flex items-center gap-3">
          <div class="text-red-500">
            {/* <!-- binary svg --> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-binary" aria-hidden="true"><rect x="14" y="14" width="4" height="6" rx="2"></rect><rect x="6" y="4" width="4" height="6" rx="2"></rect><path d="M6 20h4"></path><path d="M14 10h4"></path><path d="M6 14h2v6"></path><path d="M14 4h2v6"></path></svg>
          </div>
          <h1 class="text-white text-lg font-medium">AI transformation consultant</h1>
        </div>
        <p class="mt-3 text-gray-300 italic text-sm">TaTa</p>
        <h1 class="mt-1 text-gray-300 text-sm">Remote Work</h1>
        <h1 class="mt-2 text-gray-300 text-sm">Sep 2025 - Oct 2025</h1>
      </a>

      {/* <!-- Left - Front End Developer (upper-middle) --> */}
      <a href='http://vaxainfotech.com/' class="absolute top-[36%] left-0 w-1/2 pr-8 text-right">
        <div class="flex items-center justify-end gap-3">
          <div class="text-red-500">
            {/* <!-- palette svg --> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
          </div>
          <h1 class="text-white text-lg font-medium">Data Analyst</h1>
        </div>
        <p class="mt-3 text-gray-300 italic text-sm">Vaxa Infotech</p>
        <h1 class="mt-1 text-gray-300 text-sm">Ganesh Glory 11, Gandhinagar , Gujarat</h1>
        <h1 class="mt-2 text-gray-300 text-sm">May 2025 - July 2025</h1>
      </a>

      {/* <!-- Right - Freelancer & Content Creator (middle) --> */}
      <a href='http://www.youtube.com/@j.pgaming4330' class="absolute top-[62%] right-0 w-1/2 pl-8 text-left transform -translate-y-1/2">
        <div class="flex items-center gap-3">
          <div class="text-red-500">
            {/* <!-- youtube svg --> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
          </div>
          <h1 class="text-white text-lg font-medium">Freelancer & Content Creator</h1>
        </div>
        <p class="mt-3 text-gray-300 italic text-sm">YouTube Channel & Freelancing</p>
        <h1 class="mt-1 text-gray-300 text-sm">Remote Work</h1>
        <h1 class="mt-2 text-gray-300 text-sm">2021-2023</h1>
      </a>

      {/* <!-- Left - Graduation (bottom) --> */}
      <a href='https://knu.edu.in/' class="absolute top-[80%] left-0 w-1/2 pr-8 text-right transform -translate-y-1/2">
        <div class="flex items-center justify-end gap-3">
          <div class="text-red-500">
            {/* <!-- graduation-cap svg --> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
          </div>
          <h1 class="text-white text-lg font-medium">Graduation</h1>
        </div>
        <p class="mt-3 text-gray-300 italic text-sm">Bachelor of Computer Applications [ C. S. ]</p>
        <h1 class="mt-1 text-gray-300 text-sm">K N University</h1>
        <h1 class="mt-2 text-gray-300 text-sm">2023-2026</h1>
      </a>

    </div>
  )
}

export default Qualification