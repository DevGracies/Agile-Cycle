// "use client";

// import { LineChart } from "@mui/x-charts/LineChart";
// import { useEffect, useState } from "react";

// export default function RevenueDashboard() {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const hours = now.getHours() % 12 || 12;
//       const minutes = now.getMinutes().toString().padStart(2, "0");
//       const ampm = now.getHours() >= 12 ? "pm" : "am";
//       setTime(`${hours}:${minutes} ${ampm}`);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const xLabels = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
//   const yData = [1.4, 1.2, 1.0, 1.8, 2.0, 1.6, 1.7, 1.5, 1.8, 2.2];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Panel */}
//         <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center space-y-6">
//           <div className="text-center">
//             <p className="text-sm text-gray-500 mb-2">Digital clock</p>
//             <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-green-100 relative">
//               <span className="text-2xl font-bold">{time}</span>
//               <div className="absolute w-32 h-32 rounded-full border-4 border-green-300 border-t-green-500 animate-spin"></div>
//             </div>
//           </div>

//           <div className="w-full space-y-4 text-gray-700">
//             <div className="flex justify-between">
//               <span className="flex items-center gap-2">
//                 <span className="w-4 h-4 bg-green-600 rounded-full"></span> Ebikes in Stock
//               </span>
//               <span className="font-semibold">520</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="flex items-center gap-2">
//                 <span className="w-4 h-4 bg-green-500 rounded-full"></span> Accessories in Stock
//               </span>
//               <span className="font-semibold">180</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="flex items-center gap-2">
//                 <span className="w-4 h-4 bg-green-300 rounded-full"></span> Life Time Sells
//               </span>
//               <span className="font-semibold">Ebike: 300 | Acc: 70</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Panel */}
//         <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
//           <div className="flex items-center mb-4">
//             <span className="w-3 h-3 bg-green-600 rounded-full inline-block mr-2"></span>
//             <p className="text-gray-700 font-semibold">Revenue</p>
//           </div>

//           <LineChart
//             width={800}
//             height={300}
//             series={[
//               {
//                 data: yData,        // only y-values
//                 label: "Revenue",
//                 color: "#22c55e",
//                 showMark: true,     // show points
//               },
//             ]}
//             xAxis={[
//               {
//                 scaleType: "point",
//                 data: xLabels,      // x-labels
//                 label: "Hour",
//               },
//             ]}
//             yAxis={[
//               {
//                 label: "Revenue (₦M)",
//                 valueFormatter: (v: number) => `₦${v.toFixed(2)}M`,
//               },
//             ]}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from '@mui/material';
import ProductClock from './ProductClock';
// import { Folder, FolderOpen, PackageCheck } from 'lucide-react';

const xData = [4, 6, 8, 12, 14, 16, 18, 20, 22];
const yData = [1.4, 1.1, 1.0, 2.0, 1.5, 1.8, 1.4, 1.4, 2.0];

export default function AnalyticsDashboard() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-8 bg-[#f8fcf9] min-h-screen font-sans text-gray-800">
      
      {/* Left Sidebar Card */}
      <ProductClock/>
     

      {/* Right Chart Card */}
      <div className="flex-1 bg-white rounded-2xl px-2 py-4 ">
        <div className="flex items-center ml-[1rem] mb-4">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-[0.6rem]"></div>
          <span className="font-bold text-gray-800">Revenue</span>
        </div>

        <Box sx={{ width: '100%', height: 400, position: 'relative' }}>
          <LineChart
            xAxis={[{ data: xData, tickNumber: 9 , disableLine: true, disableTicks: true, }]}
            yAxis={[{ 
                min: 0, 
                max: 2.5, 
                disableLine: true,
                disableTicks: true,
                valueFormatter: (v:number) => `₦${v === 0 ? '0' : v + 'M'}` 
            }]}
            series={[
              {
                data: yData,
                
                color: '#4ade80',
                area: false,
                curve: "natural",
                showMark: false,
              },
            ]}
            height={400}
            margin={{ left: 10, right: 20, top: 40, bottom: 40 }}
            // Update your existing margin prop to these values
            grid={{ horizontal: true }}
            sx={{
              '.MuiMarkElement-root': {
                display: 'none', // Hide all points
              },
              // Re-enable and style only the specific highlight point from the image
              '& .MuiMarkElement-root:nth-of-type(6)': {
                 display: 'block',
                 fill: '#fff',
                 stroke: '#4ade80',
                 strokeWidth: 3,
                 r: 6
              },
              '.MuiChartsGrid-line': {
                strokeDasharray: '3 3',
                stroke: '#f1f5f9',
              },
             
            }}
          />
        </Box>
      </div>
    </div>
  );
}