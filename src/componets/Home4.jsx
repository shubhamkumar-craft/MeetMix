import React, { useRef, useEffect } from 'react';
import { LiaHandPointRight } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home4 = () => {
  const hani4 = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(hani4.current, {
      scrollTrigger: {
        trigger: hani4.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div ref={hani4} className="mt-28 md:mt-40 lg:mt-0 min-h-screen w-full bg-[#020205] px-4 sm:px-6 md:px-14 py-12 text-white overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto 
        bg-gradient-to-t from-[#020205] via-[#020205] to-[#4e2a9e]
        border border-gray-500 shadow-lg shadow-gray-900 backdrop:blur-xl rounded-2xl px-4 sm:px-6 md:px-10 py-10">

        {/* Header */}
        <div className="text-center mb-10 select-none">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-4 break-words">
            MeetMix Pricing Plans
          </h1>
          <p className="text-gray-400 font-medium max-w-xl mx-auto text-sm sm:text-base">
            MetMix offers transparent, scalable pricing so you only pay for what you need—no hidden fees, no surprises.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-8 mt-6 select-none">
          {/* Free Plan */}
          <div className="w-full lg:w-[400px] backdrop-blur-xl rounded-2xl border border-gray-500 px-6 py-8 space-y-5">
            <h2 className="text-2xl font-semibold text-gray-300">Free</h2>
            <p className="text-base text-gray-400 font-medium">
              Perfect for newcomers or casual tech enthusiasts.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-x-3 text-[#4e2a9e]">
                <LiaHandPointRight className="text-xl" />
                <span className="text-sm text-gray-400">Access to browse public tech events</span>
              </li>
              <li className="flex items-start gap-x-3 text-[#4e2a9e]">
                <LiaHandPointRight className="text-xl" />
                <span className="text-sm text-gray-400">Limited monthly event bookings</span>
              </li>
              <li className="flex items-start gap-x-3 text-[#4e2a9e]">
                <LiaHandPointRight className="text-xl" />
                <span className="text-sm text-gray-400">Basic profile visibility in the community</span>
              </li>
              <li className="flex items-start gap-x-3 text-[#4e2a9e]">
                <LiaHandPointRight className="text-xl" />
                <span className="text-sm text-gray-400">Stay connected with trending events</span>
              </li>
            </ul>
            <button onClick={() => navigate('/Join')} className="mt-4 px-6 py-2 w-full text-sm font-bold border border-gray-500 rounded-xl hover:bg-[#4e2a9e] hover:shadow-xl transition">
              View
            </button>
          </div>

          {/* Pro Plan */}
          <div className="w-full lg:w-[400px] backdrop-blur-xl rounded-2xl border border-gray-500 px-6 py-8 space-y-5">
            <h2 className="text-2xl font-semibold text-gray-300">₹49 / Month</h2>
            <p className="text-base text-gray-400 font-medium">
              Best for active attendees and tech community builders.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-x-3 text-[#4e2a9e]">
                <LiaHandPointRight className="text-xl" />
                <span className="text-sm text-gray-400">Unlimited event bookings every month</span>
              </li>
              <li className="flex items-start gap-x-3 text-[#4e2a9e]">
                <LiaHandPointRight className="text-xl" />
                <span className="text-sm text-gray-400">Host and promote your own events</span>
              </li>
              <li className="flex items-start gap-x-3 text-[#4e2a9e]">
                <LiaHandPointRight className="text-xl" />
                <span className="text-sm text-gray-400">Featured profile with increased visibility</span>
              </li>
              <li className="flex items-start gap-x-3 text-[#4e2a9e]">
                <LiaHandPointRight className="text-xl" />
                <span className="text-sm text-gray-400">Early access to exclusive events</span>
              </li>
            </ul>
            <button onClick={() => navigate('/Join')} className="mt-4 px-6 py-2 w-full text-sm font-bold border border-gray-500 rounded-xl hover:bg-[#4e2a9e] hover:shadow-xl transition">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home4;
