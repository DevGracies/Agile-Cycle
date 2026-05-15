'use client';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function CustomerOverviewMetrics() {
  const [activeTab, setActiveTab] = useState<'thisWeek' | 'lastWeek'>('thisWeek');

  const metrics = {
    thisWeek: {
      activeCustomers: 12138,
      repeatCustomers: 5601,
      visitors: 9000,
      conversionRate: 5.5,
    },
    lastWeek: {
      activeCustomers: 11890,
      repeatCustomers: 5420,
      visitors: 8900,
      conversionRate: 5.2,
    },
  };

  const data = metrics[activeTab];

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#519A09]" />
          <h3 className="text-sm font-medium text-black">Customer Overview</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('thisWeek')}
            className={cn(
              'rounded-md px-3 py-1 text-sm transition-colors',
              activeTab === 'thisWeek'
                ? 'bg-[#519A09] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            This week
          </button>
          <button
            onClick={() => setActiveTab('lastWeek')}
            className={cn(
              'rounded-md px-3 py-1 text-sm transition-colors',
              activeTab === 'lastWeek'
                ? 'bg-[#519A09] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            Last week
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div>
          <p className="text-sm text-[#868B85]">Active Customers</p>
          <p className="text-xl font-semibold text-black">{data.activeCustomers.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-[#868B85]">Repeat Customers</p>
          <p className="text-xl font-semibold text-black">{data.repeatCustomers.toLocaleString()}</p>
        </div>
         <div>
          <p className="text-sm text-[#868B85]">Visitors</p>
          <p className="text-xl font-semibold text-black">{data.visitors.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-[#868B85]">Conversion Rate</p>
          <p className="text-xl font-semibold text-black">{data.conversionRate}%</p>
        </div>
       
      </div>
    </div>
  );
}