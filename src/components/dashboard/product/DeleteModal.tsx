"use client";

import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { DashboardProduct } from '@/src/types/product';
import Loader from '../../ui/Loader';

interface DeleteModalProps {
  product: DashboardProduct;
  onDelete: () => void; // Parent still needs to know when the action is confirmed
  isDeleting: boolean;
}

export default function DeleteProductModal({ onDelete, product, isDeleting }: DeleteModalProps) {
  // Local state to manage visibility within the component
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const confirmDelete = () => {
    onDelete();
    handleClose();
  };

  return (
    <>
      <div onClick={handleOpen}><DeleteOutlineOutlinedIcon /></div>
      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        slotProps={{
          backdrop: {
            className: "bg-black/20 backdrop-blur-[1px]"
          }
        }}
      >
        <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[470px] bg-white rounded-2xl p-8 shadow-xl outline-none border border-gray-50">

          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Delete product?
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Are you sure you want to delete this product? This action cannot be undone.
          </p>

          <div className='grid grid-cols-2 w-2/3 mb-6'>
            <div className='grid grid-cols-1 gap-3'>
              <span className='text-[#4f9a14] text-xs font-semibold'>Product Name:</span>
              <span className='text-[#4f9a14] text-xs font-semibold'>Category:</span>
              <span className='text-[#4f9a14] text-xs font-semibold'>Sub-Category:</span>
              <span className='text-[#4f9a14] text-xs font-semibold'>Price:</span>
              <span className='text-[#4f9a14] text-xs font-semibold'>Stock:</span>
            </div>
            <div className='grid grid-cols-1 gap-3'>
              <span className='text-gray-600 text-xs font-semibold'>{product.name}</span>
              <span className='text-gray-600 text-xs font-semibold'>{product.productType}</span>
              <span className='text-gray-600 text-xs font-semibold'>{product.category}</span>
              <span className='text-gray-600 text-xs font-semibold'>{product.price}</span>
              <span className='text-gray-600 text-xs font-semibold'>{product.stock}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={confirmDelete}
              className="px-[2rem] bg-[#053a0a] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#0a4d0e] transition-all active:scale-[0.98]"
            >
              {isDeleting ? <Loader /> : "Delete"}
            </button>

            <button
              onClick={handleClose}
              className="px-[2rem] bg-[#dbe8dc] text-[#0a3614] border border-[#a3c2a5] py-3.5 rounded-xl font-bold text-sm hover:bg-[#cfdfd0] transition-all active:scale-[0.98]"
            >
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}