"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    IconButton,
    Typography,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface ProductItem {
    id: number | string;
    productName: string;
    image: string;
    qty: number;
    date: string;
    price: number;
    total: number;
}

interface OrderDetailsModalProps {
    open: boolean;
    onClose: () => void;
    order: {
        id: string | number;
        customerName: string;
        orderDate: string;
        paymentStatus: string;
        deliveryStatus: string;
        paymentMethod: string;
        address: string;
        deliveryMethod: string;
        deliveryDate: string;
        customerNote: string;
        subtotal: number;
        tax: number;
        grandTotal: number;
        products: ProductItem[];
    } | null;
}

const formatCurrency = (amount: number) =>
    `₦${amount.toLocaleString()}`;

const OrderDetailsModal: React.FC<
    OrderDetailsModalProps
> = ({ open, onClose, order }) => {
    if (!order) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: "24px",
                        padding: "12px",
                    },
                },
            }}
        >
            <DialogContent>
                {/* Header */}
                <div className="mb-10 flex items-center justify-between">
                    <Typography className="text-[18px] font-medium text-[#000000] leading-[150%]">
                        View Order Details
                    </Typography>

                    <IconButton onClick={onClose}>
                        <CloseRoundedIcon />
                    </IconButton>
                </div>

                {/* Top Info */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 leading-[150%]">
                    {/* Order Summary */}
                    <div>
                        <h2 className="mb-6 text-[16px] font-medium text-[#01430D]">
                            Order Summary
                        </h2>

                        <div className="space-y-2 text-[15px]">
                            <p className="text-[#585858]">
                                <span className="font-normal text-[#52A30D]">
                                    Order ID:
                                </span>{" "}
                                #{order.id}
                            </p>

                            <p className="text-[#585858]">
                                <span className="font-normal text-[#52A30D]">
                                    Customer Name:
                                </span>{" "}
                                {order.customerName}
                            </p>

                            <p className="text-[#585858]">
                                <span className="font-normal text-[#52A30D]">
                                    Order Date:
                                </span>{" "}
                                {order.orderDate}
                            </p>

                            <p className="text-[#585858]">
                                <span className="font-normal text-[#52A30D]">
                                    Payment Status:
                                </span>{" "}
                                {order.paymentStatus}
                            </p>

                            <p className="text-[#585858]">
                                <span className="font-normal text-[#52A30D]">
                                    Delivery Status:
                                </span>{" "}
                                {order.deliveryStatus}
                            </p>
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="leading-[150%]">
                        <h2 className="mb-6 text-[16px] font-medium text-[#01430D]">
                            Payment Status
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <p className="mb-2 text-[#519A09] text-[15px]">
                                    Status
                                </p>

                                <p className="text-[16px] text-[#000000] font-medium">
                                    Paid
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-[#519A09] text-[15px]">
                                    Method
                                </p>

                                <p className="text-[16px] text-[#000000] font-medium">
                                    {order.paymentMethod}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="mt-10">
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
                                {order.products.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="border-b border-[#D9E3D7]"
                                    >
                                        <td className="px-5 py-5">
                                            <div className="flex items-center gap-4 leading-5.5">
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

                    {/* Totals */}
                    <div className="mt-8 space-y-4 text-[15px] leading-[150%]">
                        <p className="text-[#585858] leading-5.5">
                            <span className="text-[#519A09] text-[15px]">
                                Subtotal:
                            </span>{" "}
                            {formatCurrency(order.subtotal)}
                        </p>

                        <p className="text-[#585858] leading-5.5">
                            <span className="text-[#519A09] text-[15px]">
                                Tax (5%):
                            </span>{" "}
                            {formatCurrency(order.tax)}
                        </p>

                        <p className="text-[#585858] leading-5.5">
                            <span className="text-[#519A09] text-[15px]">
                                Grand Total:
                            </span>{" "}
                            {formatCurrency(order.grandTotal)}
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* Shipping */}
                    <div className="leading-[150%]">
                        <h2 className="mb-5 text-[16px] font-medium text-[#05422C]">
                            Shipping Info
                        </h2>

                        <div className="space-y-2 text-[15px]">
                            <p className="text-[15px] leading-5.5 text-[#585858]">
                                <span className="text-[#519A09] text-[15px]">
                                    Address:
                                </span>{" "}
                                {order.address}
                            </p>

                            <p className="text-[15px] leading-5.5 text-[#585858]">
                                <span className="text-[#519A09]">
                                    Delivery Method:
                                </span>{" "}
                                {order.deliveryMethod}
                            </p>

                            <p className="text-[15px] leading-5.5 text-[#585858]">
                                <span className="text-[#519A09]">
                                    Delivery Date:
                                </span>{" "}
                                {order.deliveryDate}
                            </p>
                        </div>
                    </div>

                    {/* Notes */}
                    <div>
                        <h2 className="mb-6 text-[16px] font-medium text-[#05422C]">
                            Customer Notes
                        </h2>

                        <p className="max-w-[327px] text-[16px] text-[#060709] leading-[150%]">
                            {order.customerNote}
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16 flex items-center justify-between">
                    <button className="rounded-xl bg-[#01430D] px-8 py-4 text-[18px] font-normal text-white">
                        Process order
                    </button>

                    <button
                        onClick={onClose}
                        className="rounded-xl border border-[#01430D] bg-[#DAE4DC] px-8 py-4 text-[18px] text-[#01430D]"
                    >
                        Cancel
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default OrderDetailsModal;