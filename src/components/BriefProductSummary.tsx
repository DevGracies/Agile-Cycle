import React from 'react'
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

interface IBriefProduct {
  title: string;
  amount: string;
  percentage: string;
  data: number[];
  sign: '+' | "-";
}

const BriefProductSummary = ({title,amount,percentage,sign,data}:IBriefProduct) => {
  return (
      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
             {title === 'Revenue' ? <p className="text-2xl font-bold">₦{amount}</p>: <p className="text-2xl font-bold">{amount}</p> }
            
          </div>
          <div className="text-right ">
            <p className={`text-sm font-semibold ${sign === '+' ? "text-green-500" : "text-red-500"}`}
            >{sign}{percentage}%</p>
            <div className="w-18 h-12 mr-[0.8rem]">
              <SparkLineChart
                data={data}
                width={96}
                height={48}
                curve="natural"
                color={sign === '+' ? "#22c55e" : "red"}
              />
            </div>
          </div>
        </div>
  )
}

export default BriefProductSummary