import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Home6 = () => {
const location=useLocation();
const navigate=useNavigate();
const handlehomeclick = () => {
  if (location.pathname === '/') {
    window.scrollTo({ top: 0, behavior: "instant" }); // Scroll to top
    window.location.reload(); // Reloads the page
  } else {
    navigate('/');
  }
};
// function2
const handlehomeclick2=()=>{
  if(location.pathname==="/Home"){
    window.scrollTo({top:0, behavior:"instant"});
    window.location.reload();

  }
  else{
    navigate('/Home');
  }
};
// function2
const handlehomeclick3=()=>{
  if(location.pathname==="/Membership"){
    window.scrollTo({top:0, behavior:"instant"});
    window.location.reload();

  }
  else{
    navigate('/Membership');
  }
};
// function2
const handlehomeclick4=()=>{
  if(location.pathname==="/Events"){
    window.scrollTo({top:0, behavior:"instant"});
    window.location.reload();

  }
  else{
    navigate('/Events');
  }
};
// function2
const handlehomeclick5=()=>{
  if(location.pathname==="/About"){
    window.scrollTo({top:0, behavior:"instant"});
    window.location.reload();

  }
  else{
    navigate('/About');
  }
};
// function2
const handlehomeclick6=()=>{
  if(location.pathname==="/Join"){
    window.scrollTo({top:0, behavior:"instant"});
    window.location.reload();

  }
  else{
    navigate('/Join');
  }
};
  return (
    <div>
      <div className=' px-3 md:px-5  w-full h-fit  bg-[#020205] mt-10 ' >
        <div className='w-full bg-gray-700 h-[1px]' ></div>
        <div className='w-full h-fit  flex flex-col md:flex-row justify-center py-5 px-24 gap-y-10 ' >
             <div className=' w-[30%] md:w-[40%] lg:w-[30%] flex flex-col items-start md:items-center lg:items-start '  ><h1 onClick={handlehomeclick} className="text-[#a177b3] cursor-pointer font-bold text-xl">Meet<span className="text-white ">Mix</span></h1> </div>
             <div className='w-[20%] md:w-[30%] lg:w-[20%] flex flex-col items-start gap-y-3  md:items-center lg:items-start' ><li className='text-[1em] text-[#4e2a9e]  font-bold select-none list-none text-nowrap ' >Quick Links</li>
               <li onClick={handlehomeclick2} className="text-gray-300 font-bold list-none hover:text-[#4e2a9e] cursor-pointer ">Home </li>
                    <li onClick={handlehomeclick3} className="text-gray-300 font-bold list-none hover:text-[#4e2a9e] cursor-pointer ">Membership</li>
                    <li onClick={handlehomeclick4} className="text-gray-300 font-bold list-none hover:text-[#4e2a9e] cursor-pointer ">Events</li>
                    <li onClick={handlehomeclick5} className="text-gray-300 font-bold list-none hover:text-[#4e2a9e] cursor-pointer ">About</li>
                    <li onClick={handlehomeclick6} className="text-gray-300 font-bold list-none hover:text-[#4e2a9e] cursor-pointer ">Join</li>
              </div>
              <div className='w-[20%] md:w-[30%] lg:w-[20%] flex flex-col items-start md:items-center lg:items-start gap-y-3  ' >
                <li className=' text-[1em] text-[#4e2a9e] font-bold select-none list-none' >Support</li>
                <li  className="text-gray-300 font-bold list-none hover:text-[#4e2a9e] cursor-pointer text-nowrap " ><a   href="https://chat.whatsapp.com/IRS7BZTEee47jHb2alRFZZ" target='_blank' rel='noopener noreferrer'>Contact us </a> </li>
                </div>
        </div>

       <div className=' w-full text-center h-[40px]   '  >
        <div className='bg-gray-700 h-[1px] px-5  ' ></div>
        <p className='text-gray-600 pt-3' > 2025 | All Right are Reserved  </p>
     
       </div>
      </div>
    </div>
  )
}

export default Home6;