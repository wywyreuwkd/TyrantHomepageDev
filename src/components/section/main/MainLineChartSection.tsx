"use client"

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function MainLineChartSection() {
	const monthlyData = [
    	{ month: '7월', count: 18 },
    	{ month: '8월', count: 22 },
    	{ month: '9월', count: 19 },
    	{ month: '10월', count: 25 },
    	{ month: '11월', count: 21 },
    	{ month: '12월', count: 23 },
  	];

	return(
		<div className="mb-16 max-md:mb-12">
        	<h2 className="text-[13px] font-bold mb-8 tracking-[0.1em] max-md:mb-6 text-[#243c84]">
          		MONTHLY TREND
        	</h2>
        	<p className="text-[15px] leading-[1.8] mb-12 max-w-4xl max-md:text-[14px] max-md:mb-8 text-gray-600 dark:text-gray-300">
          		월별 프로젝트 진행 추이는 시스템 운영 현황을 파악하기 위한 참고 지표로 제공되며, 
          		실제 사업 조건 및 일정에 따라 변동될 수 있습니다.
        	</p>

        	<div className="w-full">
          		<ResponsiveContainer width="100%" height={300}>
            		<LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              			<CartesianGrid 
                			strokeDasharray="3 3" 
                			stroke={"var(--color-chart-line)"}
                			vertical={false}/>
              			<XAxis 
                			dataKey="month" 
                			axisLine={{stroke:"var(--color-chart-line)"}}
                			tick={{fill:"var(--color-chart-text)", fontSize:12}}
                			tickLine={false}/>
              			<YAxis 
                			axisLine={false}
                			tick={{fill:"var(--color-chart-text)", fontSize:12}}
                			tickLine={false}/>
              			<Tooltip 
                			contentStyle={{ 
                  			backgroundColor: "var(--color-chart-bg)",
                  			border: "1px solid var(--color-chart-line)",
                  			borderRadius: '8px',
                  			fontSize: '13px'
                			}}/>
              			<Line 
                			type="monotone" 
                			dataKey="count" 
                			stroke="#243c84" 
                			strokeWidth={2}
                			dot={{ fill: '#243c84', r: 4 }}
                			activeDot={{ r: 6 }}/>
            		</LineChart>
          		</ResponsiveContainer>
        	</div>
      	</div>
	);
}