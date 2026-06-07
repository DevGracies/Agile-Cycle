import Link from "next/link";
import React from "react";

const OrderButton = ({ text, href }: { text: string, href: string }) => {
  return <Link href={href} className="px-6 py-4 bg-secondary hover:bg-secondary/95 text-white rounded-md">{text}</Link>;
};

export default OrderButton;
