"use client";

import BriefProductSummary from '@/src/components/BriefProductSummary'
import ProductCard from '@/src/components/ProductsCard';
import RevenueDashboard from '@/src/components/RevenueAnalytics'

const dataRevenue = [100, 120, 110, 130, 140, 150, 160];
const dataOrders = [20, 22, 21, 25, 27, 26, 28];
const dataRefunds = [15, 18, 17, 16, 18, 19, 17];

export default function DashboardCards() {
  return (
    <div className="p-6 space-y-6 bg-[#F2F5F3]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <BriefProductSummary title="Revenue" amount="105M" percentage="22" sign="+" data={dataRevenue}/>
        <BriefProductSummary title="Orders Paid" amount="600M" percentage="22" sign="+" data={dataOrders}/>
        <BriefProductSummary title="Refunds" amount="7,283" percentage="18" sign="-" data={dataRefunds}/>
        </div>
      <div className="bg-white rounded-xl flex items-center overflow-hidden h-20">
        <div 
          className="h-full flex items-center pl-8 pr-12 bg-gradient-to-r from-[#01430D] to-[#519A09] text-white font-semibold text-sm"
          style={{ 
            clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)',
            minWidth: '240px'
          }}
        >
          Add a new product
        </div>
        
        {/* Right Content Section */}
        <div className="flex items-center gap-5 ml-[4rem]">
          <div 
            className="w-9 h-9 bg-gradient-to-br from-[#01430D] to-[#519A09] rounded-tl-lg rounded-br-lg flex items-center justify-center text-white text-xl font-bold shadow-md"
            style={{ transform: 'skewX(-24deg)' }}
          >
            <span style={{ transform: 'skewX(24deg)' }}>+</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            Create a new product entry in the system.
          </p>
        </div>
      </div>
      <RevenueDashboard/>
      <ProductCard/>
    </div>

  );
}
