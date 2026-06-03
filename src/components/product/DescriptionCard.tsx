import { Product } from "@/src/types/product";

interface DescriptionCardProps {
  product: Product;
}

export default function DescriptionCard({
  product,
}: DescriptionCardProps) {
  return (
    <div className="bg-white p-8 border border-[#ececec]">
      <h3 className="text-primary uppercase font-bold tracking-wide">
        Description
      </h3>

      <p className="mt-5 text-[#6c6c6c] leading-8 text-[15px]">
        {
          product.description
        }
      </p>
    </div>
  );
}