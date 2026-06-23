import React from 'react'
import { bestSellersData, formatCurrency } from '@/src/mocks/dashboard';

const BestSellersSection = () => {
    return (
        <div className='bg-gray-100 p-8 border border-gray-200 rounded-xl shadow-md space-y-6'>
            <h2 className='font-semibold'>Best Sellers</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-0">
                    <thead>
                        <tr className="bg-[#ECEFEC]">
                            {[
                                "Products",
                                "Price",
                                "Sold",
                                "Revenue",
                            ].map((header, idx) => (
                                <th
                                    key={header}
                                    className={`px-4 py-5 text-left text-[16px] font-semibold text-[#52A30D]
                    ${idx === 0 ? "rounded-l-lg" : ""}
                    ${idx === 6 ? "rounded-r-lg" : ""}
                  `}
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {bestSellersData.map((order) => (
                            <tr
                                key={order.id}
                                className="border-b border-[#DDE4DB]"
                            >
                                {/* Product */}
                                <td className="border-b border-[#DDE4DB] px-4 py-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={order.image}
                                            alt={order.product}
                                            className="h-11.5 w-11.5 rounded-[10px] object-cover"
                                        />

                                        <p className="text-[16px] font-medium text-[#555]">
                                            {order.product}
                                        </p>
                                    </div>
                                </td>

                                {/* Price */}
                                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                                    {formatCurrency(order.price)}
                                </td>

                                {/* Sold */}
                                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                                    {order.sold}
                                </td>

                                {/* Total */}
                                <td className="border-b border-[#DDE4DB] px-4 py-4 text-[16px] text-[#555]">
                                    {formatCurrency(order.revenue)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BestSellersSection