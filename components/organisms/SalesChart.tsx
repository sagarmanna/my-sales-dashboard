"use client";

import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

interface SalesChartProps {
  data: { year: number; sales: number }[];
  threshold?: number;
  type?: "bar" | "line";
}

const SalesChart: React.FC<SalesChartProps> = ({
  data,
  threshold = 0,
  type = "bar",
}) => {
  // Highlight bars/points above threshold
  const processedData = data.map((item) => ({
    ...item,
    highlight: item.sales >= threshold,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      {type === "bar" ? (
        <BarChart data={processedData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString()}`}
            contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
          />
          <Bar dataKey="sales" radius={[8, 8, 0, 0]} isAnimationActive={true}>
            {processedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.highlight ? "#10B981" : "#3b82f6"} // green if above threshold, blue otherwise
              />
            ))}
          </Bar>
        </BarChart>
      ) : (
        <LineChart data={processedData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString()}`}
            contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={3}
            activeDot={{ r: 6, fill: "#fff", stroke: "#3b82f6", strokeWidth: 2 }}
            dot={(props) => {
              const { cx, cy, payload } = props;
              return payload.sales >= threshold ? (
                <circle cx={cx} cy={cy} r={6} fill="#10B981" stroke="#10B981" strokeWidth={2} />
              ) : (
                <circle cx={cx} cy={cy} r={4} fill="#3b82f6" stroke="#3b82f6" strokeWidth={2} />
              );
            }}
          />
        </LineChart>
      )}
    </ResponsiveContainer>
  );
};

export default SalesChart;
