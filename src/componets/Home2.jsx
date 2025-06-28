import React, { useEffect, useRef } from 'react'
import { BsTicketDetailedFill } from "react-icons/bs";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from "gsap";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
const Home2 = () => {
// const dani1=useRef();
// const dani2=useRef();
const rani=useRef();
const navigate=useNavigate();
function handl() {
   navigate("/Join")  
}


// useEffect(()=>{
//   gsap.from(dani1.current,{
//     x:-100,
//     // opacity:0,
//     duration:1.5,
//     scrollTrigger:{
//       trigger:".dani1",
//       start:"top 60%",
//       end:"bottom 40%",
//       // markers:true,
//       ease:"power.out",
//       scrub:true,
//     }
//   });
// },[]);
// useEffect(()=>{
//   gsap.from(dani2.current,{
//     x:100,
//     opacity:0,
//     duration:1.5,
//     scrollTrigger:{
//       trigger:".dani1",
//       start:"top 60%",
//       end:"bottom 40%",
//       // markers:true,
//       ease:"power.out",
//       scrub:true,
//     }
//   });
// },[]);
  return (
    <div className=' h-[500px] w-full bg-[#020205] flex justify-center ' > 
      <div  className='h-full w-[1000px] flex flex-col-reverse lg:flex-row items-center ' >
         <div  className=' w-full lg:w-1/2 flex flex-col lg:flex-col select-none gap-y-5 pb-10 pt-10 px-5 py-5 md:px-24 ' >
         <h1 className='text-gray-300 
           font-bold text-[1em] md:text-[1.5em]  '>Be part of something big. Book your ticket now — it takes less than a minute.

</h1>
         <p className='pb-5 text-[0.7em] md:text-[0.9em]  text-gray-400  ' >With our fast, mobile-friendly ticketing system, you can grab your pass in under a minute — from anywhere, anytime.</p>
         <button onClick={handl} className='hover:shadow-lg font-bold text-gray-300 w-fit px-5 py-2 rounded-xl border-[1px] shadow-2xl shadow-gray-700 ' > Book Now </button>
         </div>
         <div className=' w-full flex justify-center items-center   lg:w-1/2  object-contain  ' >
          <img ref={rani} className='w-[200px] h-[200px] lg:h-fit lg:w-[300px]  hover:animate-pulse ' src="/chatbot.png" alt="" />

         </div>
      </div>
    </div>
  )
}

export default Home2;
