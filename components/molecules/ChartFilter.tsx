"use client";

import React from "react";

interface ChartFilterProps {
  threshold: number;
  setThreshold: (value: number) => void;
}

const ChartFilter: React.FC<ChartFilterProps> = ({ threshold, setThreshold }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
      <label className="text-gray-700 font-semibold whitespace-nowrap">
        Sales Threshold:
      </label>
      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        placeholder="Enter sales value"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default ChartFilter;
