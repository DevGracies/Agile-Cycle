import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';
import ProductClock from './ProductClock';

const xData = [4, 6, 8, 12, 14, 16, 18, 20, 22];
const yData = [1.4, 1.1, 1.0, 2.0, 1.5, 1.8, 1.4, 1.4, 2.0];

export default function AnalyticsDashboard() {
  return (
    <div className="flex flex-col md:flex-row gap-6 min-h-screen font-sans text-gray-800">
      <ProductClock/>
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