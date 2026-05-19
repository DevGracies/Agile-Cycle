"use client"

import StatsCard from '@/src/components/dashboard/common/StatsCard';
import DeleteOrderModal from '@/src/components/dashboard/Orders/DeleteOrderModal';
import OrderDetailsModal from '@/src/components/dashboard/Orders/OrderDetailsModal';
import OrdersTable, { OrderItem } from '@/src/components/dashboard/Orders/OrdersTable';
import OrdersUpdateChart from '@/src/components/dashboard/Orders/OrdersUpdateChart'
import React, { useState } from 'react'

const orders: OrderItem[] = [
  {
    id: 1,
    productName: "Agile Pro Rider",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
    qty: 2,
    date: "Apr 5, 2026",
    price: 1200000,
    total: 2400000,
    status: "Pending",
  },
  {
    id: 2,
    productName: "Agile City Lite",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    qty: 1,
    date: "Apr 8, 2026",
    price: 950000,
    total: 950000,
    status: "Completed",
  },
];

const OrderPage = () => {
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const [openModal, setOpenModal] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedDeleteOrder, setSelectedDeleteOrder] = useState<any>(null);

  return (
    <>
        <div className="p-6 flex flex-col gap-6">
        <div className='flex flex-row justify-between'>
            <StatsCard
                title="Total Orders"
                value="1,200"
                percentage={+22}
            />
            <StatsCard
                title="Completed Orders"
                value="800"
                percentage={+7.5}
            />
            <StatsCard
                title="Canceled Orders"
                value="400"
                percentage={-18}
            />
        </div>
        <OrdersUpdateChart />
        <OrdersTable
            orders={orders}
            onDelete={(order) => {
            setSelectedDeleteOrder(order);
            setDeleteModalOpen(true);
            }}
            onOpen={(order) => {
                setSelectedOrder(order);
                setOpenModal(true);
            }}
        />
        </div>

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
    </>
  )
}

export default OrderPage