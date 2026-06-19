//src/data/dashboard.ts

import {
    BestSeller,
    DashboardData,
    DashboardMetric,
    ForecastMetric,
    LatestOrder,
    RevenueByProduct,
    RevenueDataPoint,
    TrafficDataPoint,
} from "@/src/types/dashboard";


//   Currency Helpers

export const formatCurrency = (
    value: number,
    currency = "NGN"
): string => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(value);
};

export const formatCompactCurrency = (
    value: number
): string => {
    return new Intl.NumberFormat("en-NG", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(value);
};

export const formatNumber = (
    value: number
): string => {
    return new Intl.NumberFormat("en-NG").format(value);
};


//   Placeholder Images

export const PRODUCT_IMAGES = {
    agileProRider:
        "https://mages.unsplash.com/photo-1558981806-ec527fa84c39?w=300",
    agileCityLite:
        "https://mages.unsplash.com/photo-1511994298241-608e28f14fde?w=300",
    oversizedSaddle:
        "https://mages.unsplash.com/photo-1485965120184-e220f721d03e?w=300",
    brakeHandle:
        "https://mages.unsplash.com/photo-1507035895480-2b3156c31fc8?w=300",
};


//   Top Metrics

export const dashboardMetrics: DashboardMetric[] = [
    {
        id: "revenue",
        title: "Revenue",
        value: "₦350M",
        percentage: 22,
        trend: "up",
    },
    {
        id: "orders",
        title: "Orders",
        value: "1,200",
        percentage: 25,
        trend: "down",
    },
    {
        id: "users",
        title: "Users",
        value: "15,500",
        percentage: 49,
        trend: "up",
    },
];


//   Revenue Chart

export const revenueChartData: RevenueDataPoint[] = [
    { date: "Apr 5", revenue: 1200000 },
    { date: "Apr 6", revenue: 2300000 },
    { date: "Apr 7", revenue: 1700000 },
    { date: "Apr 8", revenue: 1200000 },
    { date: "Apr 9", revenue: 1100000 },
    { date: "Apr 10", revenue: 2300000 },
    { date: "Apr 11", revenue: 1500000 },
    { date: "Apr 12", revenue: 2500000 },
    { date: "Apr 13", revenue: 1700000 },
    { date: "Apr 14", revenue: 1400000 },
    { date: "Apr 15", revenue: 1900000 },
];


//   Revenue By Product

export const revenueByProductData: RevenueByProduct[] = [
    {
        name: "E-bikes",
        value: 230000000,
        percentage: 74.2,
    },
    {
        name: "Accessories",
        value: 120000000,
        percentage: 24.8,
    },
];


//   Traffic Summary

export const trafficSummary = {
    storeVisits: {
        value: 8950,
        percentage: 22,
    },
    visitors: {
        value: 1520,
        percentage: -24,
    },
};


//   Traffic Line Chart

export const trafficChartData: TrafficDataPoint[] = [
    {
        day: "4",
        visitors: 1800,
    },
    {
        day: "6",
        visitors: 1200,
    },
    {
        day: "8",
        visitors: 900,
    },
    {
        day: "9",
        visitors: 3400,
    },
    {
        day: "11",
        visitors: 2200,
    },
    {
        day: "12",
        visitors: 2500,
    },
    {
        day: "14",
        visitors: 1700,
    },
    {
        day: "16",
        visitors: 3200,
    },
];


//   Best Sellers

export const bestSellersData: BestSeller[] = [
    {
        id: "1",
        image: PRODUCT_IMAGES.agileProRider,
        product: "Agile Pro Rider",
        price: 1200000,
        sold: 250,
        revenue: 300000000,
    },
    {
        id: "2",
        image: PRODUCT_IMAGES.agileCityLite,
        product: "Agile City Lite",
        price: 950000,
        sold: 180,
        revenue: 171000000,
    },
    {
        id: "3",
        image: PRODUCT_IMAGES.oversizedSaddle,
        product: "Oversize Saddle",
        price: 150000,
        sold: 600,
        revenue: 90000000,
    },
    {
        id: "4",
        image: PRODUCT_IMAGES.brakeHandle,
        product: "Brake Handle Bell",
        price: 200000,
        sold: 400,
        revenue: 80000000,
    },
];


//   Sales Forecast Cards

export const salesForecastData: ForecastMetric[] = [
    {
        id: "revenue",
        title: "Revenue",
        value: "+24.2%",
        percentage: 24.2,
        trend: "up",
    },
    {
        id: "profit",
        title: "Net Profit",
        value: "-2.5%",
        percentage: -2.5,
        trend: "down",
    },
    {
        id: "orders",
        title: "Orders",
        value: "+32.8%",
        percentage: 32.8,
        trend: "up",
    },
    {
        id: "visitors",
        title: "Visitors",
        value: "+60%",
        percentage: 60,
        trend: "up",
    },
];


//   Latest Orders

export const latestOrdersData: LatestOrder[] = [
    {
        id: "1",
        image: PRODUCT_IMAGES.agileProRider,
        product: "Agile Pro Rider",
        quantity: 2,
        date: "Apr 5, 2026",
        price: 1200000,
        orderTotal: 2400000,
        status: "pending",
    },
    {
        id: "2",
        image: PRODUCT_IMAGES.agileProRider,
        product: "Agile Pro Rider",
        quantity: 1,
        date: "Apr 8, 2026",
        price: 1200000,
        orderTotal: 1200000,
        status: "shipping",
    },
    {
        id: "3",
        image: PRODUCT_IMAGES.agileCityLite,
        product: "Agile City Lite",
        quantity: 3,
        date: "Apr 11, 2026",
        price: 950000,
        orderTotal: 2850000,
        status: "refund",
    },
    {
        id: "4",
        image: PRODUCT_IMAGES.oversizedSaddle,
        product: "Oversize Saddle",
        quantity: 2,
        date: "Apr 13, 2026",
        price: 150000,
        orderTotal: 300000,
        status: "completed",
    },
    {
        id: "5",
        image: PRODUCT_IMAGES.brakeHandle,
        product: "Brake Handle Bell",
        quantity: 4,
        date: "Apr 18, 2026",
        price: 200000,
        orderTotal: 1000000,
        status: "shipping",
    },
];


//   Status Config

export const ORDER_STATUS_CONFIG = {
    pending: {
        label: "Pending",
        color:
            "text-amber-600 bg-amber-50 border-amber-200",
    },
    shipping: {
        label: "Shipping",
        color:
            "text-blue-600 bg-blue-50 border-blue-200",
    },
    refund: {
        label: "Refund",
        color:
            "text-orange-600 bg-orange-50 border-orange-200",
    },
    completed: {
        label: "Completed",
        color:
            "text-green-600 bg-green-50 border-green-200",
    },
} as const;


//   Dashboard Export

export const dashboardData: DashboardData = {
    metrics: dashboardMetrics,
    revenueChart: revenueChartData,
    revenueByProduct: revenueByProductData,
    trafficSummary,
    trafficChart: trafficChartData,
    bestSellers: bestSellersData,
    salesForecast: salesForecastData,
    latestOrders: latestOrdersData,
};