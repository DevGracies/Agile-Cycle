import MetricGauge from "./MetricGauge";

const metrics = [
  {
    title: "Speed & Performance",
    value: 60,
    label: "Very Good",
  },
  {
    title: "Ride Comfortability",
    value: 90,
    label: "Very Comfortable",
  },
  {
    title: "Build Quality",
    value: 88,
    label: "Strong",
  },
];

const PerformanceMetrics = () => {
  return (
    <div className="flex flex-wrap gap-14 justify-center">
      {metrics.map((metric) => (
        <MetricGauge
          key={metric.title}
          title={metric.title}
          value={metric.value}
          label={metric.label}
        />
      ))}
    </div>
  );
};

export default PerformanceMetrics;