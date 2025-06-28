import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { ImPower } from "react-icons/im";
import { CiMobile3 } from "react-icons/ci";
import { LiaShareAltSolid } from "react-icons/lia";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const Home3 = () => {
const rou=useRef();
const irot=useRef();
const prot=useRef();
const hanim3=useRef();
// useEffect(()=>{
//   gsap.from(hanim3.current,{
//     x:100,
//     duration:1,
//     // ease:"bounce",
//     // opacity:1,
//   })
// })
useEffect(()=>{
    gsap.to(rou.current,{
        rotate:360,
        repeat:-1,
        duration:1,
    })
});
useEffect(()=>{
    gsap.to(irot.current,{
        rotate:360,
        repeat:-1,
        duration:2,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1.0)"

    })
});
// useEffect(()=>{
//     gsap.from(prot.current,{
//         opacity:0,
//         x:-600,
//         duration:2,
//         ease:"bounce",
        
//     })
// })

    return (

    <div ref={hanim3} className='h-[750px] w-full  bg-[#020205] flex justify-center overflow-x-hidden select-none ' >
          <div class="absolute   w-[250px] h-[150px] md:w-[500px] md:h-[250px] rounded-t-full bg-gradient-to-l from-[#6649a5] via-[#aa8ee6] to-[#240066] shadow ">
         <div ref={rou} className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#020205] shadow-2xl shadow-[#4e2a9e]  rounded-full relative top-5 left-6 md:top-14 md:left-12   '></div>
        </div>
        <div className='w-full   h-fit lg:h-[300px] px-5 py-5 absolute top-[1200px] md:top-[1330px] bg-[#020205] flex justify-center ' >
        <div className='  flex flex-col items-center lg:flex-row gap-x-8 gap-y-10 ' >
         {/* card1 */}
           <div className='hover:scale-95 ease-in-out cursor-pointer hover:border-gray-100 backdrop:blur-2xl flex flex-col md:w-[500px] lg:w-[300px] lg:h-[250px] px-4 py-5  border-[0.5px] border-gray-500 rounded-xl w-full  gap-y-5  ' >
           <ImPower ref={prot} className='text-[#4e2a9e] text-[3em] animate-pulse ' />
            <h1 className='text-gray-300 font-bold  '>Instant Checkout</h1>
            <p className='text-gray-400 ' >Skip the hassle with our one-tap payment system. Book your ticket in seconds — securely and smoothly</p>
              </div>
        {/* card2 */}
        <div className='hover:scale-95 ease-in-out cursor-pointer hover:border-gray-100 backdrop:blur-2xl lg:w-[300px] flex flex-col px-4 py-5 md:w-[500px] lg:h-[250px] border-[0.5px] gap-y-5 border-gray-500 rounded-xl w-full  ' >
        <CiMobile3 className='text-[#4e2a9e] text-[3em] ' />

            <h1 className='text-gray-300 font-bold  '>Mobile-Friendly Access</h1>
            <p className='text-gray-400 ' >Book anytime, anywhere. Our platform works beautifully on any device — so you never miss a moment.</p>
              </div>
        {/* card3 */}
        <div className='hover:scale-95 ease-in-out cursor-pointer hover:border-gray-100 backdrop:blur-2xl bg:rgba(255,255,255,0.15) flex flex-col px-4 py-5 md:w-[500px] lg:h-[250px] lg:w-[300px] gap-y-5 border-[0.5px] border-gray-500 rounded-xl w-full   ' >
        <LiaShareAltSolid ref={irot} className='text-[#4e2a9e] text-[3.3em]' />
            <h1 className='text-gray-300 font-bold  '>Real-Time Updates</h1>
            <p className='text-gray-400 ' >Get instant confirmation and live event alerts. Stay in the loop — from booking to showtime.</p>
              </div>
         </div>
         </div>
    </div>
  )
}

export default Home3;
