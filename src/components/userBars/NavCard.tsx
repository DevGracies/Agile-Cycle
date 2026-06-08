import Image from "next/image";

type NavCardProps = {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
};

export default function NavCard({
  image,
  title,
  price,
  oldPrice,
}: NavCardProps) {
  return (
    <div className="w-full max-w-[317px] rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200">

      {/* IMAGE */}
      <div className="relative w-full aspect-[4/5] bg-white">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white via-white to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4 space-y-2">

        <h3 className="text-[15px] sm:text-[18px] font-semibold text-black leading-snug line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 flex-wrap">

          <p className="text-[#519A09] font-semibold text-[18px] sm:text-[20px]">
            ₦{price.toLocaleString()}
          </p>

          {oldPrice && (
            <p className="text-sm text-[#A2A2A2] line-through">
              ₦{oldPrice.toLocaleString()}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}