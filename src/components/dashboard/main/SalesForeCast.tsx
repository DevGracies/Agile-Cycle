import React from 'react'
import { MetricCard } from '../metrics/MetricCard'
import { ForecastMetric } from '@/src/types/dashboard';

interface MetricsSectionProps {
    metrics: ForecastMetric[];
    loading?: boolean;
}

const SalesForeCast = ({
    metrics,
    loading,
}: MetricsSectionProps) => {
    return (
        <div className='bg-gray-100 p-8 border border-gray-200 rounded-xl shadow-md space-y-6'>
            <h2 className='font-semibold'>Sales Forecast</h2>
            <section
                aria-label="Dashboard Metrics"
                className="
                grid grid-cols-1 sm:grid-cols-2 gap-6
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
        </div>
    )
}

export default SalesForeCast