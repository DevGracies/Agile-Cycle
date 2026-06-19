// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// import {
//     BarChart,
//     axisClasses,
// } from "@mui/x-charts";

// import {
//     RevenueDataPoint,
// } from "@/src/types/dashboard";


// import { Card } from "../shared/Card";
// import { formatCompactCurrency } from "@/src/mocks/dashboard";

// interface RevenueChartProps {
//     data: RevenueDataPoint[];
//     loading?: boolean;
//     reportHref?: string;
// }

// const ACTIVE_BAR_INDEX = 5;

// const skeletonBarHeights = [
//     120, 95, 160, 78, 145, 110, 190, 60, 175, 132, 85,
// ];

// export function RevenueChart({
//     data,
//     loading,
//     reportHref = "#",
// }: RevenueChartProps) {
//     if (loading) {
//         return (
//             <Card
//                 variant="chart"
//                 className="h-[420px]"
//             >
//                 <RevenueChartSkeleton />
//             </Card>
//         );
//     }

//     return (
//         <Card
//             variant="chart"
//             className="
//         h-[420px]
//         p-0
//         overflow-hidden
//       "
//         >
//             <div
//                 className="
//           flex
//           h-full
//           flex-col
//         "
//             >
//                 <RevenueChartHeader
//                     reportHref={reportHref}
//                 />

//                 <div
//                     className="
//             flex-1
//             px-3
//             pb-4
//             md:px-6
//           "
//                 >
//                     <BarChart
//                         dataset={data}
//                         height={320}
//                         margin={{
//                             top: 20,
//                             right: 10,
//                             bottom: 20,
//                             left: 55,
//                         }}
//                         borderRadius={8}
//                         xAxis={[
//                             {
//                                 scaleType: "band",
//                                 dataKey: "date",
//                                 tickLabelStyle: {
//                                     fontSize: 12,
//                                 },
//                             },
//                         ]}
//                         yAxis={[
//                             {
//                                 min: 0,
//                                 max: 2500000,
//                                 valueFormatter: (
//                                     value
//                                 ) =>
//                                     formatYAxis(
//                                         value
//                                     ),
//                                 tickLabelStyle: {
//                                     fontSize: 12,
//                                 },
//                             },
//                         ]}
//                         series={[
//                             {
//                                 dataKey: "revenue",
//                                 label: "Revenue",
//                                 valueFormatter: (
//                                     value
//                                 ) =>
//                                     formatCompactCurrency(
//                                         value ?? 0
//                                     ),
//                                 color: "#7CB342",
//                             },
//                         ]}
//                         sx={{
//                             [`& .${axisClasses.left} .${axisClasses.tickLabel}`]:
//                             {
//                                 fill: "#64748b",
//                             },

//                             [`& .${axisClasses.bottom} .${axisClasses.tickLabel}`]:
//                             {
//                                 fill: "#64748b",
//                             },

//                             [`& .${axisClasses.line}`]:
//                             {
//                                 stroke: "#E2E8F0",
//                             },

//                             [`& .${axisClasses.tick}`]:
//                             {
//                                 stroke: "#E2E8F0",
//                             },

//                             ".MuiBarElement-root": {
//                                 rx: 8,
//                             },
//                         }}
//                         slotProps={{
//                             legend: {
//                                 hidden: true,
//                             },
//                         }}
//                     />
//                 </div>
//             </div>
//         </Card>
//     );
// }

// /* Header */

// interface HeaderProps {
//     reportHref: string;
// }

// function RevenueChartHeader({
//     reportHref,
// }: HeaderProps) {
//     return (
//         <div
//             className="
//         flex
//         items-center
//         justify-between
//         px-4
//         py-5
//         md:px-6
//       "
//         >
//             <div
//                 className="
//           flex
//           items-center
//           gap-2
//         "
//             >
//                 <span
//                     className="
//             h-2
//             w-2
//             rounded-full
//             bg-[#7CB342]
//           "
//                 />

//                 <h2
//                     className="
//             text-sm
//             font-medium
//             text-slate-800
//           "
//                 >
//                     Revenue Update
//                 </h2>
//             </div>

//             <Link
//                 href={reportHref}
//                 className="
//           flex
//           items-center
//           gap-1
//           text-sm
//           font-medium
//           text-[#7CB342]
//           transition-opacity
//           hover:opacity-80
//         "
//             >
//                 Advanced Report

//                 <ArrowRight
//                     className="
//             h-4
//             w-4
//           "
//                 />
//             </Link>
//         </div>
//     );
// }


// /* Skeleton */


// function RevenueChartSkeleton() {
//     return (
//         <div
//             className="
//         flex
//         h-full
//         flex-col
//       "
//         >
//             <div
//                 className="
//           flex
//           items-center
//           justify-between
//           p-6
//         "
//             >
//                 <div
//                     className="
//             h-4
//             w-40
//             animate-pulse
//             rounded
//             bg-slate-200
//           "
//                 />

//                 <div
//                     className="
//             h-4
//             w-28
//             animate-pulse
//             rounded
//             bg-slate-200
//           "
//                 />
//             </div>

//             <div
//                 className="
//           flex
//           flex-1
//           items-end
//           justify-between
//           gap-3
//           px-8
//           pb-8
//         "
//             >
//                 {Array.from({
//                     length: 11,
//                 }).map((_, index) => (
//                     <div
//                         key={index}
//                         className="
//               flex-1
//               animate-pulse
//               rounded-full
//               bg-slate-200
//             "
//                         style={{
//                             height: `${40 +
//                                 skeletonBarHeights[index]
//                                 }px`,
//                         }}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }


// /* Helpers */


// function formatYAxis(
//     value: number
// ) {
//     if (value === 0) return "₦0";

//     if (value >= 1000000) {
//         return `₦${(
//             value / 1000000
//         ).toFixed(1)}M`;
//     }

//     return `₦${(
//         value / 1000
//     ).toFixed(0)}K`;
// }