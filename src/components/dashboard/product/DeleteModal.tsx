"use client";

import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface DeleteModalProps {
  onDelete: () => void; // Parent still needs to know when the action is confirmed
}

export default function DeleteProductModal({ onDelete }: DeleteModalProps) {
  // Local state to manage visibility within the component
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const confirmDelete = () => {
    onDelete();
    handleClose();
  };

  const productDetails = [
    { label: "Product Name", value: "Agile Pro Rider" },
    { label: "Category", value: "Ebikes" },
    { label: "Sub - Category", value: "Cruisers" },
    { label: "Price", value: "₦1,200,000" },
    { label: "Stock", value: "20" },
  ];

  return (
    <>
       <div onClick={handleOpen}><DeleteOutlineOutlinedIcon  /></div>
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

          <div className="space-y-3 mb-10">
            {productDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start text-xs font-semibold">
                <span className="text-[#4f9a14] w-28 shrink-0">{detail.label}:</span>
                <span className="text-gray-600">{detail.value}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={confirmDelete}
              className="px-[2rem] bg-[#053a0a] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#0a4d0e] transition-all active:scale-[0.98]"
            >
              Delete
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