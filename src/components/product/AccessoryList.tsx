import Image from "next/image";
import { accessories } from "@/src/lib/product";

export default function AccessoryList() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="uppercase text-[#01430D] tracking-wide font-bold">
          Compatible Accessories & Enhancements
        </h3>

        <button className="text-primary font-semibold underline">
          See All
        </button>
      </div>

      <p className="text-[#7e7e7e] mt-3">
        Purchase up to 2 to get <span className="text-primary">20% off</span>
      </p>

      <div className="space-y-4 mt-6">
        {accessories.map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-lg flex items-center justify-between gap-5"
          >
            <div className="flex items-center gap-5">
              <input type="checkbox" className="w-5 h-5" />

              <Image
                src={item.image}
                alt={item.name}
                width={65}
                height={65}
                className="object-contain"
              />

              <div>
                <h4 className="font-semibold text-[#1d1d1d]">
                  {item.name}
                </h4>

                <p className="text-sm text-[#8f8f8f] mt-1">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="text-right">
              <h4 className="text-[#01430D] font-bold text-sm">
                {item.price}
              </h4>

              <button className="text-primary text-sm mt-2 underline">
                view
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}