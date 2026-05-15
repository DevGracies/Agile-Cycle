"use client";

import React, { useState, useEffect } from 'react';
import ArchiveIcon from '@mui/icons-material/Archive';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).toLowerCase();

  return (
   <div className='bg-white rounded-[0.5rem]'>
    <div >
       <div className="relative w-64 h-64 flex items-center justify-center max-[767px]:mx-[auto] ">
      <svg className="absolute w-full h-full transform -rotate-90">
        <circle
          cx="128"
          cy="128"
          r="85"
          stroke="#f0fdf4"
          strokeWidth="10"
          fill="transparent"
        />
      </svg>

      {/* LAYER 2: The Rotating Progress Segment and Dot */}
      <div className="absolute w-full h-full animate-[spin_8s_linear_infinite]">
        <svg className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#166534" />
              <stop offset="100%" stopColor="#86efac" />
            </linearGradient>
          </defs>
          <circle
            cx="128"
            cy="128"
            r="85"
            stroke="url(#clockGradient)"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray="534"
            strokeDashoffset="410" /* Length of the green arc */
            strokeLinecap="round"
          />
        </svg>

        {/* 
            THE DOT: Corrected Alignment
            1. Parent div is 256px tall (w-64).
            2. Center is 128px.
            3. Radius is 85px.
            4. Perfect center of the stroke is at 128 - 85 = 43px.
            5. To center a 16px (w-4) dot on that 43px point:
               43px - (16px / 2) = 35px.
        */}
        <div 
          className="absolute left-[7rem]  w-3 h-3 bg-[#166534] rounded-full border-2 border-white shadow-md"
          style={{ 
            top: '33px', 
            zIndex: 30
          }}
        ></div>
      </div>

      {/* LAYER 3: The Static Center */}
      <div className="relative z-10 flex flex-col items-center justify-center w-44 h-44 bg-white rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)]">
        <span className="text-2xl font-bold text-gray-900 tracking-tight">
          {formattedTime}
        </span>
      </div>
    </div>
    </div>
    <div className='pl-[0.8rem]  max-[767px]:pl-[2.8rem] max-[397px]:pl-[1rem]'>
      <div className='flex mb-[1rem] '>
          <ArchiveIcon className='text-[#01430d]'/>
          <div className='ml-[0.7rem]'>
            <h3 className='font-bold mb-[0.2rem]'>Ebike in Stock</h3>
            <p className='text-[0.78rem] text-gray-500'>520</p>
          </div>
    </div>
    <div className='flex mb-[1rem]'>
          <ArchiveIcon  className='text-[#519a09]'/>
          <div className='ml-[0.7rem]'>
            <h3 className='font-bold mb-[0.2rem]'>Accessories in Stock</h3>
            <p className='text-[0.78rem] text-gray-500'>180</p>
          </div>
    </div>
    <div className='flex mb-[1rem]'>
          <ArchiveIcon  className='text-[#ddeee1]'/>
          <div className='ml-[0.7rem]'>
            <h3 className='font-bold mb-[0.2rem]'>Life Time Sells</h3>
            <div className='text-[0.78rem] text-gray-500 flex'>
              <p >Ebike: 300</p>
              <div className='w-[1px] h-4 bg-gray-500 mx-[0.4rem]'></div>
              <p >Ebike: 300</p>
            </div>
          </div>
    </div>
    </div>
   </div>
  );
};

export default DigitalClock;

