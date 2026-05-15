"use client";
import DeleteProductModal from './DeleteModal';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';
import Link from 'next/link';

const onClose=()=>{console.log('closed')}
const onDelete=()=>{console.log('deleted')}

const productData = [
  { id: 1, name: "Agile Pro Rider", category: "Ebike", subCategory: "Cruisers", price: "₦1,200,000", stock: 20, img: "/bike1.jpg" },
  { id: 2, name: "Agile Pro Rider", category: "Ebike", subCategory: "Commuters", price: "₦1,200,000", stock: 30, img: "/bike1.jpg" },
  { id: 3, name: "Agile City Lite", category: "Ebike", subCategory: "Folding Bikes", price: "₦950,000", stock: 40, img: "/bike2.jpg" },
  { id: 4, name: "Oversize Saddle", category: "Accessory", subCategory: "Seats", price: "₦150,000", stock: 50, img: "/saddle.jpg" },
  { id: 5, name: "Brake Handle Bell", category: "Accessory", subCategory: "Safety & Control", price: "₦200,000", stock: 60, img: "/bell.jpg" },
  { id: 6, name: "Agile Pro Rider", category: "Ebike", subCategory: "Cruisers", price: "₦1,200,000", stock: 20, img: "/bike1.jpg" },
  { id: 7, name: "Agile Pro Rider", category: "Ebike", subCategory: "Commuters", price: "₦1,200,000", stock: 30, img: "/bike1.jpg" },
  { id: 8, name: "Agile City Lite", category: "Ebike", subCategory: "Folding Bikes", price: "₦950,000", stock: 40, img: "/bike2.jpg" },
  { id: 9, name: "Oversize Saddle", category: "Accessory", subCategory: "Seats", price: "₦150,000", stock: 50, img: "/saddle.jpg" },
  { id: 10, name: "Brake Handle Bell", category: "Accessory", subCategory: "Safety & Control", price: "₦200,000", stock: 60, img: "/bell.jpg" },
];

export default function ProductCard() {
const [isOpen, setisOpen] = useState(true)

  return (
    <div className="bg-white px-3 py-5 rounded-[0.5rem]  mx-auto my-10 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold ml-[1rem] text-gray-800">Products</h2>
        <button className="flex items-center gap-1 text-[#4f7c2b] font-semibold text-sm hover:opacity-80 transition-opacity">
          All categories <ArrowDownwardIcon fontSize="small" />
        </button>
      </div>

      {/* Standard HTML Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8fcf8]  text-[#4f7c2b] text-xs font-bold uppercase tracking-wider">
              <th className="px-4 py-6 rounded-l-lg">Products</th>
              <th className="px-4 py-6">Category</th>
              <th className="px-4 py-6">Sub-category</th>
              <th className="px-4 py-6">Price</th>
              <th className="px-4 py-6">Stock</th>
              <th className="px-4 py-6 rounded-r-lg text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            {productData.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden border border-gray-100">
                      {/* Placeholder for images as seen in Screenshot from 2026-05-14 10-39-59.png */}
                      <div className="w-full h-full bg-slate-200" />
                    </div>
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4">{item.category}</td>
                <td className="px-4 py-4">{item.subCategory}</td>
                <td className="px-4 py-4">{item.price}</td>
                <td className="px-4 py-4">{item.stock}</td>
                <td className="px-4 py-4 text-right">
                  <div className="flex justify-end gap-3 text-gray-400">
                     <Link
      href={{
        pathname: '/dashboard/addProduct',
        query: {
          edit: true,
        },
      }}
    >
                    <button className="hover:text-[#519a09] transition-colors">
                      <EditOutlinedIcon  />
                    </button>
    </Link>
                    <button className="hover:text-red-500 transition-colors">
                      <DeleteProductModal onDelete={onDelete}/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center mt-8 max-[689px]:flex-col">
        <div className='w-[6.5rem] max-[689px]:w-[9%] max-[689px]:hidden'></div>
        <div className="flex items-center gap-3 max-[689px]:mb-[2rem]">
          <button className="w-10 h-10 flex items-center justify-center bg-[#4f7c2b] text-white rounded-full hover:bg-[#3d6122] transition-colors shadow-md">
            <ArrowBackIcon fontSize="small" />
          </button>
          <div className="flex items-center gap-2">
             <div className="w-6 h-1 bg-[#0d2a13] rounded-full"></div>
             <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
             <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-[#4f7c2b] text-white rounded-full hover:bg-[#3d6122] transition-colors shadow-md">
            <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
        <div className="text-sm text-gray-600 font-medium">
          Showing 1-10 of 50
        </div>
      </div>
    </div>
  );
}