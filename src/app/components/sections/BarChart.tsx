"use client"

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 차트 데이터 타입 정의
type ChartDataItem = {
  year: string;
  investor: number;
  owner: number;
};

// 솔라오 수익 데이터
const solarOData: ChartDataItem[] = [
  { year: '1', investor: 0.12, owner: 0.50 },
  { year: '2', investor: 0.19, owner: 0.50 },
  { year: '3', investor: 0.26, owner: 0.50 },
  { year: '4', investor: 0.33, owner: 0.50 },
  { year: '5', investor: 0.40, owner: 0.50 },
  { year: '6', investor: 0.48, owner: 0.50 },
  { year: '7', investor: 0.53, owner: 0.52 },
  { year: '8', investor: 0.56, owner: 0.56 },
  { year: '9', investor: 0.59, owner: 0.60 },
  { year: '10', investor: 0.63, owner: 0.63 },
  { year: '11', investor: 1.54, owner: 1.10 },
  { year: '12', investor: 1.53, owner: 1.10 },
  { year: '13', investor: 1.52, owner: 1.10 },
  { year: '14', investor: 1.51, owner: 1.10 },
  { year: '15', investor: 1.30, owner: 1.30 },
  { year: '16', investor: 0.00, owner: 2.96 },
  { year: '17', investor: 0.00, owner: 2.95 },
  { year: '18', investor: 0.00, owner: 2.94 },
  { year: '19', investor: 0.00, owner: 2.93 },
  { year: '20', investor: 0.00, owner: 2.93 },
];

// 기존 사업방식 수익 데이터
const traditionalData: ChartDataItem[] = [
  { year: '1', investor: 0.22, owner: 0.40 },
  { year: '2', investor: 0.29, owner: 0.40 },
  { year: '3', investor: 0.36, owner: 0.40 },
  { year: '4', investor: 0.43, owner: 0.40 },
  { year: '5', investor: 0.50, owner: 0.40 },
  { year: '6', investor: 0.58, owner: 0.40 },
  { year: '7', investor: 0.65, owner: 0.40 },
  { year: '8', investor: 0.72, owner: 0.40 },
  { year: '9', investor: 0.79, owner: 0.40 },
  { year: '10', investor: 0.86, owner: 0.40 },
  { year: '11', investor: 2.24, owner: 0.40 },
  { year: '12', investor: 2.23, owner: 0.40 },
  { year: '13', investor: 2.22, owner: 0.40 },
  { year: '14', investor: 2.21, owner: 0.40 },
  { year: '15', investor: 2.20, owner: 0.40 },
  { year: '16', investor: 2.56, owner: 0.40 },
  { year: '17', investor: 2.55, owner: 0.40 },
  { year: '18', investor: 2.54, owner: 0.40 },
  { year: '19', investor: 2.53, owner: 0.40 },
  { year: '20', investor: 2.53, owner: 0.40 },
];

// Props 타입 정의
type CustomBarChartProps = {
  data?: ChartDataItem[];
};

export function CustomBarChart({ data = solarOData }: CustomBarChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-pulse text-gray-400">차트 로딩중...</div>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-400)" />
        <XAxis
          dataKey="year"
          stroke="var(--primary-dark-2)"
          style={{ fontSize: '12px' }}
          label={{ 
            value: '(년차)', 
            position: 'insideBottomRight', 
            offset: 0,
            style: { fontSize: '12px', fill: 'var(--primary-dark-2)' }
          }}
        />
        <YAxis
          stroke="var(--primary-dark-2)"
          style={{ fontSize: '12px' }}
          domain={[0, 3.0]}
          ticks={[0, 0.50, 1.00, 1.50, 2.00, 2.50, 3.00]}
          label={{ 
            value: '(억원)', 
            angle: -90, 
            position: 'insideTopLeft',
            offset: 10,
            style: { fontSize: '12px', fill: 'var(--primary-dark-2)', textAnchor: 'middle' }
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--gray-200)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--primary-dark-2)',
          }}
          itemSorter={(item) => (item.dataKey === 'owner' ? -1 : 1)}
        />
        <Bar dataKey="investor" stackId="a" fill="var(--secondary)" />
        <Bar dataKey="owner" stackId="a" fill="var(--color-accent)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export { solarOData, traditionalData };