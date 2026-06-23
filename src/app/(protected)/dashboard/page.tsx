import React from 'react'

import {
  TrafficChart,
} from "@/src/components/dashboard/charts/TrafficChart";

import {
  dashboardMetrics,
  revenueByProductData,
  revenueChartData,
  salesForecastData,
  trafficChartData,
  trafficSummary,
} from "@/src/mocks/dashboard";
import { MetricsSection } from '@/src/components/dashboard/metrics/MetricsSection';
import { RevenueChart } from '@/src/components/dashboard/charts/RevenueChart';
import { RevenueDonutChart } from '@/src/components/dashboard/charts/RevenueDonutChart';
import OrdersSection from './main/OrdersSection';
import SalesForeCast from '@/src/components/dashboard/main/SalesForeCast';
import BestSellersSection from '@/src/components/dashboard/main/BestSellersSection';


const DashboardPage = () => {
  return (
    <div className="p-4 pb-16 space-y-6">
        <MetricsSection metrics={dashboardMetrics} />
        <RevenueChart data={revenueChartData} />
        <div className='grid md:grid-cols-2 gap-4'>
          <RevenueDonutChart data={revenueByProductData} />
          <TrafficChart data={trafficChartData} summary={trafficSummary} />
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          <BestSellersSection />
          <SalesForeCast metrics={salesForecastData} />
        </div>
        <OrdersSection />
    </div>
  )
}

export default DashboardPage