'use client';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { cn } from '../../../lib/utils';
import axios from 'axios';
import toast from 'react-hot-toast';

interface MetricsData {
  activeCustomers: number;
  repeatCustomers: number;
  visitors: number;
  conversionRate: number;
}

export function CustomerOverviewMetrics() {
  const [activeTab, setActiveTab] = useState<'thisWeek' | 'lastWeek'>('thisWeek');
  const [data, setData] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/metrics?period=${activeTab}`);
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
        toast.error('Could not load customer metrics');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [activeTab]);

  if (loading) {
    return (
      <Box className="rounded-2xl bg-white p-6 shadow-sm">
        <Typography className="text-[#5F6368]">Loading metrics...</Typography>
      </Box>
    );
  }

  if (!data) return null;

  return (
    <Box className="rounded-2xl bg-white p-6 shadow-sm">
      <Box className="mb-4 flex items-center justify-between">
        <Box className="flex items-center gap-2">
          <Box className="h-2 w-2 rounded-full bg-[#519A09]" />
          <Typography variant="body1" className="text-[#111827]">
            Customer Overview
          </Typography>
        </Box>
        <Box className="flex gap-2">
          <button
            onClick={() => setActiveTab('thisWeek')}
            className={cn(
              'rounded-md px-4 py-1.5 text-sm transition-all',
              activeTab === 'thisWeek'
                ? 'bg-[#519A09] text-white'
                : 'bg-[#F2F5F3] text-[#5F6368] hover:bg-gray-200'
            )}
          >
            This week
          </button>
          <button
            onClick={() => setActiveTab('lastWeek')}
            className={cn(
              'rounded-md px-4 py-1.5 text-sm transition-all',
              activeTab === 'lastWeek'
                ? 'bg-[#519A09] text-white'
                : 'bg-[#F2F5F3] text-[#5F6368] hover:bg-gray-200'
            )}
          >
            Last week
          </button>
        </Box>
      </Box>
      <Box className="flex justify-between gap-6">
        <Box>
          <Typography variant="body2" className="text-[#5F6368]">
            Active Customers
          </Typography>
          <Typography variant="h6" className="font-semibold text-[#111827]">
            {data.activeCustomers.toLocaleString()}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" className="text-[#5F6368]">
            Repeat Customers
          </Typography>
          <Typography variant="h6" className="font-semibold text-[#111827]">
            {data.repeatCustomers.toLocaleString()}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" className="text-[#5F6368]">
            Visitors
          </Typography>
          <Typography variant="h6" className="font-semibold text-[#111827]">
            {data.visitors.toLocaleString()}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" className="text-[#5F6368]">
            Conversion Rate
          </Typography>
          <Typography variant="h6" className="font-semibold text-[#111827]">
            {data.conversionRate}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}