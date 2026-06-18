import React from 'react'
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

interface IBriefProduct {
  title: string;
  amount: string;
  percentage: string;
  data: number[];
  sign: '+' | "-";
}

const BlogKPIMetrics = ({ title, amount, percentage, sign, data }: IBriefProduct) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-xs p-4 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{amount}</p>

      </div>
      <div className="text-right ">
        <p className={`text-sm font-semibold ${sign === '+' ? "text-primary" : "text-red-600"}`}
        >{sign}{percentage}%</p>
        <div className="w-18 h-12 mr-[0.8rem]">
          <SparkLineChart
            data={data}
            width={96}
            height={48}
            curve="natural"
            color={sign === '+' ? "#519A09" : "red"}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogKPIMetrics