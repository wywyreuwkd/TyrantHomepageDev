"use client"

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function MainBarChartSection() {
	const statusData = [
    	{ name: '계약단계', value: 8 },
    	{ name: '시공진행', value: 18 },
    	{ name: '검수중', value: 5 },
    	{ name: '완료', value: 3 },
  	];

	return(
		<div className="mb-16 max-md:mb-12">
        	<h2 className="text-[13px] font-bold mb-8 tracking-[0.1em] max-md:mb-6 text-[#243c84]">
          		PROJECT STATUS DISTRIBUTION
        	</h2>
        	<p className="text-[15px] leading-[1.8] mb-12 max-w-4xl max-md:text-[14px] max-md:mb-8 text-gray-600 dark:text-gray-300">
          		현재 진행 중인 프로젝트의 단계별 분포 현황입니다. 각 단계별 프로젝트 수를 기준으로 전체 진행 상황을 파악할 수 있습니다.
        	</p>

        	<div className="w-full">
          		<ResponsiveContainer width="100%" height={300}>
            		<BarChart data={statusData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              			<CartesianGrid 
                			strokeDasharray="3 3" 
                			stroke={"var(--color-chart-line)"}
                			vertical={false}/>
              			<XAxis 
                			dataKey="name" 
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
                			}}
                			cursor={{fill:"var(--color-chart-cusor)"}}/>
              			<Bar 
                			dataKey="value" 
                			fill="#243c84" 
                			radius={[4, 4, 0, 0]}
                			maxBarSize={60}/>
            		</BarChart>
          		</ResponsiveContainer>
        	</div>
      	</div>
	);
}