"use client";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

interface MetricGaugeProps {
  title: string;
  value: number;
  label: string;
}

const MetricGauge = ({
  title,
  value,
  label,
}: MetricGaugeProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-[#6D8165] font-semibold mb-5 text-lg">
        {title}
      </h3>

      <div className="w-[150px] h-[150px]">
        <CircularProgressbar
          value={value}
          strokeWidth={8}
          text={label}
          circleRatio={0.7}
          styles={buildStyles({
            rotation: 0.65,
            pathColor: "#519A09",
            trailColor: "#D9D9D9",
            textColor: "#6D8165",
            textSize: "8px",
            strokeLinecap: "round",
          })}
        />
      </div>
    </div>
  );
};

export default MetricGauge;