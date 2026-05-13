"use client";

import React, { useState, useEffect } from 'react';

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
    <div className="relative w-64 h-64 flex items-center justify-center bg-white rounded-3xl">
      
      {/* LAYER 1: The Static Background Track */}
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
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#166534] rounded-full border-2 border-white shadow-md"
          style={{ 
            top: '35px', 
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
  );
};

export default DigitalClock;

