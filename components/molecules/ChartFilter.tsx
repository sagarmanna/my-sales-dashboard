"use client";

import React from "react";
import Input from "../atoms/Input";

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
      <Input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        placeholder="Enter sales value"
        className="w-32 sm:w-40 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-3 py-2 transition duration-200"
      />
    </div>
  );
};

export default ChartFilter;
