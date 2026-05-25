import Image from "next/image";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
};

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
}: ProductCardProps) {
  return (
   <div className="rounded-[8px] w-[317px] h-[460px] overflow-hidden ">
  
  <div className="relative w-[317px] h-[314px] bg-[#FFFFFF]">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white via-white to-transparent" />
  </div>

  <div className="px-4 w-[317px] h-[134px] bg-white rounded-b-[8px]">
    <div className="w-[317px] h-[60px]">
      <h3 className="w-fit text-[18px] leading-[28px] font-semibold text-black text-center">
        {title}
      </h3>
    </div>

   
      <div className="flex items-center gap-[5px] w-[120px] h-[16px]">
      <p className="text-[#519A09] font-semibold text-[20px] leading-[28px]">
        ₦{price.toLocaleString()}
      </p>

      {oldPrice && (
        <p className="text-[14px] font-normal text-[#A2A2A2] line-through">
          ₦{oldPrice.toLocaleString()}
        </p>
      )}
    </div>
  </div>
</div>
  );
}