import React, { useEffect, useRef } from 'react'
import Home2 from './Home2';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
const Home = () => {
const hani=useRef();
const bani=useRef();  
useEffect(()=>{
    gsap.from(hani.current,{
      x:1500,
      duration:2,
      ease:"power1.in",
      delay:1,
      ease:"bounce-in"
    })
  });
 useEffect(()=>{
  gsap.from(bani.current,{
    opacity:0,
    duration:2,
    ease:"power1.in",
    delay:3,
  })
 })
  const navigate=useNavigate();
  function click() {
    navigate('/Join')
  }
  return (
    <div className=' max-h-fit overflow-x-hidden bg-[#020205] ' >
      <div  className=' px-2 h-[550px] w-full bg-gradient-to-b from-[#020205] via-[#020205]  to-[#4e2a9e]  shadow-[0_4px_6px_-4px_rgba(0,0,0,0.4)] ' >
      <div   className=' flex justify-center   items-center   h-fit pt-20 select-none ' >
        <div ref={hani} className='grid text-center place-items-center  text-gray-200  ' >
         <h1 className='text-[1em] md:text-[1.8em] lg:text-[2.50em] font-extrabold grid leading-[1.6]  md:leading-[1.3] lg:leading-[1.2] ' > Unlock Top Tech Events to Boost Your  Network 
          <span>connect, and grow with the future </span></h1>
         <p className='px-0 md:px-[100px] lg:px-[250px] pt-5 pb-10 lg:pb-5 text-gray-500 ' >Attend exclusive tech meetups, hands-on workshops, and conferences tailored for developers, founders, and students.</p> 
         <button ref={bani} onClick={click} className=' motion-fade-in hover:shadow-2xl font-bold px-7 py-2 rounded-xl shadow-lg shadow-gray-800 border-[1px] w-fit ' >Join</button>
         </div>
      </div>
         
      </div>

       


     <Home2/>
     <Home3/>
     <Home4/>
     <Home5/>
     <Home6/>
    </div>
  )
}

export default Home; 
// [#020205]
// 4e2a9e
// b98af5