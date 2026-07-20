"use client";
import DeleteProductModal from './DeleteModal';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';
import Link from 'next/link';
import { useProducts } from '@/src/hooks/useProducts';
import Loader from '../../ui/Loader';
import Image from 'next/image';
import { formatPrice } from '@/src/utils/product';
import { ProductType } from '@/src/services/cart.service';
import { deleteEbike } from '@/src/services/ebike.service';
import { deleteAccessory } from '@/src/services/accessory.service';
import { deleteEnhancement } from '@/src/services/enhancement.service';
import toast from 'react-hot-toast';
import { apiError } from '@/src/services/api.service';
import { useMutation, useQueryClient } from "@tanstack/react-query";


interface DeleteProductInput {
  id: string;
  productType: ProductType;
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      productType,
    }: DeleteProductInput) => {

      switch (productType) {
        case "ebikes":
          return deleteEbike(id);

        case "accessories":
          return deleteAccessory(id);

        case "enhancements":
          return deleteEnhancement(id);

        default:
          throw new Error("Invalid product type");
      }
    },

    onSuccess: (data) => {
      toast.success(
        data.message ?? "Product deleted successfully"
      );

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (error) => {
      toast.error(
        apiError(error) ?? "Failed to delete product"
      );
    },
  });
}

export default function ProductCard() {

  const [page, setPage] = useState(1);
  const {
    data,
    isLoading,
    isError
  } = useProducts(page, 10);

  const products = data?.data?.products ?? [];
  console.log(products)

  const pagination = data?.data?.pagination;
  const pageStart = pagination ? (pagination.page - 1) * pagination.limit + 1 : 0;
  const pageEnd = pagination ? Math.min(pagination.page * pagination.limit, pagination.total) : 0;
  const totalProducts = pagination?.total ?? 0;

  const deleteMutation = useDeleteProduct();

  const onDelete = (
    id: string,
    productType: ProductType
  ) => {
    deleteMutation.mutate({
      id,
      productType,
    });
  };
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
            {
              isLoading && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-10"
                  >
                    <Loader text="Loading products..." />
                  </td>
                </tr>
              )
            }
            {
              isError && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-10 text-red-500"
                  >
                    Failed to load products
                  </td>
                </tr>
              )
            }
            {products.map((item) => (
              <tr key={item._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden border border-gray-100">
                      {/* Placeholder for images as seen in Screenshot from 2026-05-14 10-39-59.png */}
                      <Image
                        src={
                          item.images?.[0]?.secure_url ||
                          "/placeholder.png"
                        }
                        alt={item.name}
                        width={100}
                        height={100}
                        className=" w-full h-full object-cover "
                      />
                    </div>
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4">{item.productType}</td>
                <td className="px-4 py-4">{item.category}</td>
                <td className="px-4 py-4">{formatPrice(item.price)}</td>
                <td className="px-4 py-4">{item.stock}</td>
                <td className="px-4 py-4 text-right">
                  <div className="flex justify-end gap-3 text-gray-400">
                    <Link
                      href={{
                        pathname: "/dashboard/addProduct",
                        query: {
                          edit: item._id
                        }
                      }}
                    >
                      <button className="hover:text-[#519a09] transition-colors">
                        <EditOutlinedIcon />
                      </button>
                    </Link>
                    <button className="hover:text-red-500 transition-colors">
                      <DeleteProductModal
                        onDelete={() => onDelete(item._id, item.productType)}
                        product={item}
                        isDeleting={deleteMutation.isPending} />
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
          <button
            disabled={page === 1}
            onClick={() => setPage(prev => prev - 1)}
            className="w-10 h-10 flex items-center justify-center bg-[#4f7c2b] text-white rounded-full hover:bg-[#3d6122] transition-colors shadow-md">
            <ArrowBackIcon fontSize="small" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 bg-[#0d2a13] rounded-full"></div>
            <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
          </div>
          <button
            onClick={() => setPage(prev => prev + 1)}
            className="w-10 h-10 flex items-center justify-center bg-[#4f7c2b] text-white rounded-full hover:bg-[#3d6122] transition-colors shadow-md">
            <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
        <div className="text-sm text-gray-600 font-medium">
          Showing {pageStart}
          -{pageEnd} of {totalProducts}
        </div>
      </div>
    </div>
  );
}