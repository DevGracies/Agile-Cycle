"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";

interface ProductItem {
  id: number | string;
  productName: string;
  image: string;
  qty: number;
  date: string;
  price: number;
  total: number;
}

interface DeleteOrderModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  products: ProductItem[];
}

const formatCurrency = (amount: number) =>
  `₦${amount.toLocaleString()}`;

const DeleteOrderModal: React.FC<
  DeleteOrderModalProps
> = ({
  open,
  onClose,
  onDelete,
  products,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: "20px",
            padding: "10px",
          },
        },
      }}
    >
      <DialogContent>
        {/* Header */}
        <div className="mb-14 leading-[150%]">
          <Typography className="!mb-6 text-[18px] font-medium text-[#000000]">
            Delete is order?
          </Typography>

          <Typography className="text-[16px] text-[#585858]">
            Are you sure you want to delete this
            order? This action cannot be undone.
          </Typography>
        </div>

        {/* Products */}
        <div className="leading-[150%]">
          <h2 className="mb-6 text-[16px] font-medium text-[#05422C]">
            Products List
          </h2>

          <div className="overflow-x-auto rounded-[18px]">
            <table className="w-full">
              <thead className="bg-[#F2F5F3]">
                <tr>
                  {[
                    "Products",
                    "QTY",
                    "Date",
                    "Price",
                    "Order Total",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-5 py-5 text-left text-[14px] font-semibold text-[#519A09]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-[#D9E3D7] "
                  >
                    <td className="px-5 py-5 leading-5.5">
                      <div className="flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.productName}
                          className="h-[52px] w-[52px] rounded-[12px] object-cover"
                        />

                        <span className="text-[14px] text-[#585858]">
                          {product.productName}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-5 text-[14px] text-[#585858]">
                      x{product.qty}
                    </td>

                    <td className="px-5 py-5 text-[14px] text-[#585858]">
                      {product.date}
                    </td>

                    <td className="px-5 py-5 text-[14px] text-[#585858]">
                      {formatCurrency(product.price)}
                    </td>

                    <td className="px-5 py-5 text-[14px] text-[#585858]">
                      {formatCurrency(product.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex items-center justify-between">
          <button
            onClick={onDelete}
            className="rounded-xl bg-[#01430D] px-10 py-4 text-[18px] font-medium text-white"
          >
            Delete
          </button>

          <button
            onClick={onClose}
            className="rounded-xl border border-[#01430D] bg-[#DAE4DC] px-10 py-4 text-[18px] font-medium text-[#01430D]"
          >
            Cancel
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteOrderModal;