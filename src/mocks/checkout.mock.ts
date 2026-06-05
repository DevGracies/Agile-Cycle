import { OrderItemProps } from "../components/checkout/OrderItem";

export const checkoutItems: OrderItemProps[] =
  [
    {
      id: "1",
      name: "Agile Comet X",
      image: "/agile-image1.jpg",
      quantity: 1,
      price: 150000,
      color: "Sage",
      battery: "15Ah",
      size: "Regular / 5'1 - 6'5",
    },

    {
      id: "2",
      name: "Oversize Saddle",
      image: "/agile-image2.jpg",
      quantity: 1,
      price: 73000,
      color: "Sage",
      battery: "15Ah",
      size: "Regular / 5'1 - 6'5",
    },

    {
      id: "3",
      name: "Oversize Saddle",
      image: "/agile-image3.jpg",
      quantity: 1,
      price: 150000,
      subtitle: "Suitable for Agile Comet X",
    },
  ];