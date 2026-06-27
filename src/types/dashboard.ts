import { OrderItem } from "../components/dashboard/Orders/OrdersTable";

export type TrendDirection = "up" | "down";

// export type OrderStatus =
//   | "pending"
//   | "shipping"
//   | "refund"
//   | "completed";

export interface DashboardMetric {
  id: string;
  title: string;
  value: string;
  percentage: number;
  trend: TrendDirection;
  chartData: number[];
}

export interface RevenueDataPoint {
  date: string;
  revenue: number;
}

export interface TrafficDataPoint {
  day: string;
  visitors: number;
}

export interface RevenueByProduct {
  id?: string;
  name: string;
  value: number;
  percentage: number;
}

export interface BestSeller {
  id: string;
  image: string;
  product: string;
  price: number;
  sold: number;
  revenue: number;
}

export interface ForecastMetric {
  id: string;
  title: string;
  value: string;
  percentage: number;
  trend: TrendDirection;
  chartData: number[];
}

// export interface LatestOrder {
//   id: string;
//   image: string;
//   product: string;
//   quantity: number;
//   date: string;
//   price: number;
//   orderTotal: number;
//   status: OrderStatus;
// }

export interface TrafficSummary {
  storeVisits: {
    value: number;
    percentage: number;
  };
  visitors: {
    value: number;
    percentage: number;
  };
}

export interface DashboardData {
  metrics: DashboardMetric[];
  revenueChart: RevenueDataPoint[];
  revenueByProduct: RevenueByProduct[];
  trafficSummary: TrafficSummary;
  trafficChart: TrafficDataPoint[];
  bestSellers: BestSeller[];
  salesForecast: ForecastMetric[];
  latestOrders: OrderItem[];
}