import {
  Battery,
  Gauge,
  TimerReset,
  Weight,
  Zap,
  Activity,
} from "lucide-react";

const specs = [
  {
    title: "Motor",
    value: "750W mid-drive",
    icon: Zap,
  },
  {
    title: "Battery",
    value: "600 Wh",
    icon: Battery,
  },
  {
    title: "Charging Time",
    value: "3.5 hrs",
    icon: TimerReset,
  },
  {
    title: "Range",
    value: "65 miles",
    icon: Activity,
  },
  {
    title: "Max Speed",
    value: "30 MPH",
    icon: Gauge,
  },
  {
    title: "Weight",
    value: "28.7 Kg",
    icon: Weight,
  },
];

export default function ProductSpecs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {specs.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="bg-white border border-[#ececec] p-7"
          >
            <div className="flex items-center gap-4">
              <Icon />

              <div>
                <h4 className="uppercase text-[#6fa720] font-bold tracking-wide">
                  {item.title}
                </h4>

                <p className="mt-1 text-[#555]">{item.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}