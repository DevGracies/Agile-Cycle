"use client";

import DeleteOrderModal from '@/src/components/dashboard/Orders/DeleteOrderModal';
import OrderDetailsModal from '@/src/components/dashboard/Orders/OrderDetailsModal';
import OrdersTable from '@/src/components/dashboard/Orders/OrdersTable';
import { latestOrdersData } from '@/src/mocks/dashboard';
import React, { useState } from 'react'

const OrdersSection = () => {
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const [openModal, setOpenModal] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedDeleteOrder, setSelectedDeleteOrder] = useState<any>(null);
    return (
        <div>
            <OrdersTable
                title='Latest Orders'
                orders={latestOrdersData}
                onDelete={(order) => {
                    setSelectedDeleteOrder(order);
                    setDeleteModalOpen(true);
                }}
                onOpen={(order) => {
                    setSelectedOrder(order);
                    setOpenModal(true);
                }}
            />

            <OrderDetailsModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                order={
                    selectedOrder
                        ? {
                            id: selectedOrder.id,
                            customerName: "John Okon",
                            orderDate: "12 Apr 2026",
                            paymentStatus: "Successful",
                            deliveryStatus: "Pending",
                            paymentMethod: "Debit Card",
                            address: "14 Abak Road, Uyo, Akwa Ibom",
                            deliveryMethod: "GIG Logistics",
                            deliveryDate: "30 Apr 2026",
                            customerNote: "Please deliver before noon",
                            subtotal: 2000000,
                            tax: 100000,
                            grandTotal: 2100000,
                            products: [
                                {
                                    id: 1,
                                    productName: selectedOrder.productName,
                                    image: selectedOrder.image,
                                    qty: selectedOrder.qty,
                                    date: selectedOrder.date,
                                    price: selectedOrder.price,
                                    total: selectedOrder.total,
                                },
                            ],
                        }
                        : null
                }
            />

            <DeleteOrderModal
                open={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onDelete={() => {
                    console.log(
                        "Deleting order:",
                        selectedDeleteOrder
                    );

                    setDeleteModalOpen(false);
                }}
                products={
                    selectedDeleteOrder
                        ? [
                            {
                                id: selectedDeleteOrder.id,
                                productName:
                                    selectedDeleteOrder.productName,
                                image: selectedDeleteOrder.image,
                                qty: selectedDeleteOrder.qty,
                                date: selectedDeleteOrder.date,
                                price: selectedDeleteOrder.price,
                                total: selectedDeleteOrder.total,
                            },
                        ]
                        : []
                }
            />
        </div>
    )
}

export default OrdersSection