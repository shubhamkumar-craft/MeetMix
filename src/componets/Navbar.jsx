import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import gsap from 'gsap';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const nani=useRef();
  
  useEffect(()=>{
    gsap.from(nani.current,{
      y:-30,
      duration:1,
      ease:"bounce"
    })
  })
  return (
    <div ref={nani} className="h-fit w-full bg-[#020205] text-white">
      <div className="px-5 w-full h-16 flex justify-between lg:justify-around items-center">
        <Link to="/" className="text-[#a177b3] font-bold text-xl">Meet<span className="text-white ">Mix</span></Link>

        <div className="hidden lg:flex gap-6 items-center border-[4px] border-gray-900 px-5 py-2 rounded-2xl">
          <Link to="/Home" className="text-gray-300 font-bold">Home</Link>
          <Link to="/Membership" className="text-gray-400 font-bold">Membership</Link>
          <Link to="/Events" className="text-gray-400 font-bold">Events</Link>
          <Link to="/About" className="text-gray-400 font-bold">About</Link>

        </div>

        <div className="hidden lg:flex border-[4px] border-gray-900 px-6 py-2 rounded-2xl">
          <Link to="/join" className="text-gray-300 font-bold">Join</Link>
        </div>

        <div className="lg:hidden">
          <RiMenu2Fill
            className="text-2xl text-gray-300"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {open && (
        <div className="lg:hidden flex flex-col items-start bg-[#020205] w-full px-5 py-4 space-y-3">
          <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/membership" onClick={() => setOpen(false)}>Membership</Link>
          <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/join" onClick={() => setOpen(false)}>Join</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
