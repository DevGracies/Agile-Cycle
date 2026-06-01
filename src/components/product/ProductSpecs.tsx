import {
  Battery,
  Gauge,
  TimerReset,
  Weight,
  Zap,
  Activity,
} from "lucide-react";

import { Product } from "@/src/types/product";

interface ProductSpecsProps {
  product: Product;
}

const specConfig = [
  {
    key: "motor",
    title: "Motor",
    icon: Zap,
  },
  {
    key: "batterySize",
    title: "Battery",
    icon: Battery,
  },
  {
    key: "chargingTime",
    title: "Charging Time",
    icon: TimerReset,
  },
  {
    key: "range",
    title: "Range",
    icon: Activity,
  },
  {
    key: "maxSpeed",
    title: "Max Speed",
    icon: Gauge,
  },
  {
    key: "weight",
    title: "Weight",
    icon: Weight,
  },
] as const;

export default function ProductSpecs({
  product,
}: ProductSpecsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {specConfig.map(
        ({
          key,
          title,
          icon: Icon,
        }) => {
          const value =
            product.specs[
              key
            ];

          if (!value) {
            return null;
          }

          return (
            <div
              key={key}
              className="bg-white border border-[#ececec] p-7"
            >
              <div className="flex items-center gap-4">
                <Icon />

                <div>
                  <h4 className="uppercase text-primary font-bold tracking-wide">
                    {title}
                  </h4>

                  <p className="mt-1 text-[#555]">
                    {value}
                  </p>
                </div>
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}