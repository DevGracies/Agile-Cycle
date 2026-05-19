"use client";

import { Box, Typography } from "@mui/material";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
}

export function StatCard({ title, value, change }: StatCardProps) {
  return (
    <Box className="w-full rounded-2xl border border-[#E8E8E8] bg-white p-4 shadow-sm transition-all sm:p-5">
      <Typography variant="body2" className="mb-2 text-[#5F6368]">
        {title}
      </Typography>
      <Box className="flex items-center justify-between">
        <Typography variant="h5" className="font-semibold tracking-tight text-[#111827]">
          {value ?? 0}
        </Typography>
        {change && (
          <Box className="flex items-center gap-2 sm:gap-3">
            {/* Sparkline SVG with percentage value above the dot */}
            <svg
              width="86"
              height="60"
              viewBox="0 0 86 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[60px] w-[86px]"
            >
              <path
                d="M2 33C10 33 10 19 18 19C26 19 26 41 43 41C60 41 58 6 73 6"
                stroke="#519A09"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="76" cy="5" r="5" fill="#519A09" />
              {/* Percentage text positioned above the dot */}
              <text
                x="76"
                y="0"
                textAnchor="middle"
                fill="#519A09"
                fontSize="12"
                fontWeight="600"
                dy="-4"
              >
                {change}
              </text>
            </svg>
          </Box>
        )}
      </Box>
    </Box>
  );
}