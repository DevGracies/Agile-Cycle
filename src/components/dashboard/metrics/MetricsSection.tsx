
import { MetricCard } from "./MetricCard";
import { DashboardMetric } from "@/src/types/dashboard";

interface MetricsSectionProps {
  metrics: DashboardMetric[];
  loading?: boolean;
}

export function MetricsSection({
  metrics,
  loading,
}: MetricsSectionProps) {
  return (
    <section
      aria-label="Dashboard Metrics"
      className="
        grid
        grid-cols-1
        gap-4
        md:grid-cols-3
      "
    >
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          metric={metric}
          loading={loading}
        />
      ))}
    </section>
  );
}