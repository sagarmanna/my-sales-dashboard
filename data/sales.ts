"use client"; // ⚠️ Important: Mark page as a client component

import React, { useState } from 'react';
import SalesChart from '../components/organisms/SalesChart';
import ChartFilter from '../components/molecules/ChartFilter';
import Button from '../components/atoms/Button';

// Mock sales data
const mockSalesData = [
  { year: 2022, sales: 125000 },
  { year: 2023, sales: 150000 },
  { year: 2024, sales: 175000 },
  { year: 2025, sales: 185000 },
];

const Dashboard: React.FC = () => {
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  const totalSales = mockSalesData.reduce((acc, item) => acc + item.sales, 0);

  // Ensure number formatting is consistent across server & client
  const formattedTotalSales = Intl.NumberFormat('en-US').format(totalSales);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Sales Dashboard
      </h1>

      {/* Summary Card */}
      <div className="mb-8 flex justify-center">
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg text-lg md:text-xl">
          Total Sales: ${formattedTotalSales}
        </div>
      </div>

      {/* Controls Card */}
      <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Chart Type Buttons */}
          <div className="flex gap-2">
            <Button
              className={`bg-blue-600 hover:bg-blue-700 ${chartType === 'bar' ? 'ring-2 ring-blue-400' : ''}`}
              onClick={() => setChartType('bar')}
            >
              Bar Chart
            </Button>
            <Button
              className={`bg-purple-600 hover:bg-purple-700 ${chartType === 'line' ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setChartType('line')}
            >
              Line Chart
            </Button>
          </div>

          {/* Threshold Input */}
          <ChartFilter threshold={threshold} setThreshold={setThreshold} />
        </div>
      </div>

      {/* Chart Card */}
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <SalesChart data={mockSalesData} threshold={threshold} type={chartType} />
      </div>
    </div>
  );
};

export default Dashboard;
