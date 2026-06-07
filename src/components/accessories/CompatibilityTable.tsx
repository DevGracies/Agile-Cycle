import React from "react";
import Image from "next/image";
import { ProductCompatibility } from "@/src/types/product";


interface CompatibilityTableProps {
  data: ProductCompatibility[];
}

const CompatibilityTable = ({
  data,
}: CompatibilityTableProps) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-3">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-wide text-primary">
        Applicable Bike Model
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px]">
          <thead>
            <tr className="border-b border-gray-300 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-4 py-4">E-Bikes</th>
              <th className="px-4 py-4">Model</th>
              <th className="px-4 py-4">Wheel Size</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-300 last:border-none"
              >
                <td className="px-4 py-4 flex gap-2 items-center">
                  <div className="relative h-16 w-20 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.bikeName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {item.bikeName}
                </td>

                <td className="px-4 py-4 text-gray-600">
                  {item.model}
                </td>

                <td className="px-4 py-4 text-gray-600">
                  {item.wheelSize}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CompatibilityTable;