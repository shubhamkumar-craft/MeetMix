import React, { useEffect, useRef } from 'react'
import { MdLocationPin } from "react-icons/md";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Home5 = () => {
  const hani5=useRef();
  useEffect(()=>{
    gsap.from(hani5.current,{
      x:200,
      duration:1,
      ease:"power2.out",
      opacity:1,
      scrollTrigger:{
        trigger:hani5.current,
        start: "top 80%",
        toggleActions: 'play none none reverse',
      }
    });
  },[]);


  return (
    <div>
         <div ref={hani5} className='h-fit w-full bg-[#020205] px-3 md:px-14 py-5 pt-24 ' >
            <div className=' select-none text-center text-[2em] text-gray-300 font-bold  ' >
                <h1>Upcoming Events in Kolkata </h1>

            </div>
            <div className='h-fit w-full  flex flex-col justify-center items-center lg:items-start lg:flex-row  px-3 py-5 gap-10 overflow-auto rounded-2xl  ' > 
            {/* card component 1 */}
            <div className=' backdrop:blur-2xl w-[280px] md:w-[400px] h-[240px] justify-between flex flex-col gap-y-3 backdrop-blur-2xl  rounded-2xl  border-[1px] border-gray-700 px-4 py-5 select-none text-nowrap ' >  
               <div className='space-y-2 '>
                 <h1 className='text-gray-300 font-bold text-[1.2em] md:text[2em] ' >Cloud Community Days</h1>
                <ul className='text-[0.8em ] text-gray-400 font-semibold ' > By Google Developer Group </ul>
                <ul className='text-[0.8em ] text-gray-400 flex gap-x-2 items-center ' > <MdLocationPin className='text-[#4e2a9e] ' /><span>Taj Taal Kutir, Kolkata, West Bengal</span> </ul> </div>
             <div>   <ul className=' flex flex-col md:flex-row gap-y-3 justify-between  ' > <button className='text-gray-300 font-bold px-5 py-1 rounded-xl bg-[#4e2a9e]  ' > Conference   </button> 
                <li className='text-[0.8em ] text-gray-400 font-bold px-4 py-1 flex items-center text-center rounded-xl bg-[#4e2a9e] '>19 July 8:30 AM </li>
                  </ul> </div>
           </div>
           {/* card component 2 */}
           <div className='backdrop:blur-2xl w-[280px] md:w-[400px] h-[240px] flex flex-col gap-y-3 justify-between backdrop-blur-2xl  rounded-2xl  border-[1px] border-gray-700 px-6 py-5 select-none text-nowrap ' >  
             <div className='space-y-2 ' >   <h1 className='text-gray-300 font-bold text-[1.2em] md:text[2em]  ' >HexaFalls Hackathon</h1>
                <ul className='text-[0.8em ] text-gray-400 font-semibold ' > By Google Developer Group </ul>
                <ul className='text-[0.8em ] text-gray-400 flex gap-x-2 items-center ' > <MdLocationPin className='text-[#4e2a9e]' /><span>JIS University ,Kolkata, West Bengal</span> </ul>
                </div>
            <div>   <ul className='flex flex-col md:flex-row gap-y-3 justify-between  ' > <button className='text-gray-300 font-bold px-5 py-1 rounded-xl bg-[#4e2a9e]  ' > Hackathon </button> 
                <li className='text-[0.8em ] text-gray-400 font-bold px-4 py-1 justify-center flex items-center rounded-xl bg-[#4e2a9e]   '>28 June 10:00 PM </li>
                  </ul>
                  </div>
           </div>
          
          
            </div>

            </div>  
    </div>
  )
}

export default Home5;
