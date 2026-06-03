import Link from "next/link";

import { Product } from "@/src/types/product";

interface BreadCrumbsProps {
  product: Product;
}

export default function BreadCrumbs({ product }: BreadCrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-3 text-[12px] uppercase tracking-wide"
    >
      <Link href="/" className="text-[#9d9d9d]">
        Home
      </Link>

      <span className="text-[#9d9d9d]">{">"}</span>

      <Link
        href={`/products?category=${product.category}`}
        className="text-[#9d9d9d]"
      >
        {product.category}
      </Link>

      <span className="text-[#9d9d9d]">{">"}</span>

      <span className="text-[#6f6f6f] font-semibold">{product.name}</span>
    </nav>
  );
}
