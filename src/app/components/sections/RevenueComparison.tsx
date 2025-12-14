"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import partnerImage from "@public/logo/a1f7ca076bee9c69717df0093bffe7922bc05fcb.png";
import partnerLogos from "@public/logo/00986a76ccf151cda0ea9ceb8177ada8a0ab0e1e.png";
import hanwhaLogo from "@public/logo/d2bd2442aa020550cbe75f6963070aa7f084923e.png";
import daeboLogo from "@public/logo/9277615fa3d362c1a6cea2a441685ccbd3036504.png";
import jbcorpLogo from "@public/logo/e9c6b069e143d1ad94dc4d9bbe90be0b28e047e4.png";
import cashflowTable from "@public/graph/75e726933bbb3a51ca54d516753909622e3b2866.png";
import { ImageWithFallback } from '@components/shared/ImageWithFallback';
import { SolarOLogo } from '@components/shared/SolarOLogo';

// 솔라오 수익 데이터 (이미지 원본 데이터 그대로)
const solarOData = [
  { year: '1', investor: 0.35, owner: 0.25 },
  { year: '2', investor: 0.45, owner: 0.30 },
  { year: '3', investor: 0.55, owner: 0.35 },
  { year: '4', investor: 0.65, owner: 0.35 },
  { year: '5', investor: 0.70, owner: 0.35 },
  { year: '6', investor: 0.75, owner: 0.35 },
  { year: '7', investor: 0.80, owner: 0.35 },
  { year: '8', investor: 0.85, owner: 0.35 },
  { year: '9', investor: 0.90, owner: 0.35 },
  { year: '10', investor: 0.95, owner: 0.40 },
  { year: '11', investor: 1.40, owner: 1.10 },
  { year: '12', investor: 1.40, owner: 1.10 },
  { year: '13', investor: 1.40, owner: 1.10 },
  { year: '14', investor: 1.40, owner: 1.10 },
  { year: '15', investor: 1.40, owner: 1.10 },
  { year: '16', investor: 1.40, owner: 1.10 },
  { year: '17', investor: 1.40, owner: 1.10 },
  { year: '18', investor: 1.40, owner: 1.10 },
  { year: '19', investor: 1.40, owner: 1.10 },
  { year: '20', investor: 1.40, owner: 1.10 },
];

// 기존 사업방식 수익 데이터 (이미지 원본 데이터 그대로)
const traditionalData = [
  { year: '1', investor: 0.35, owner: 0.25 },
  { year: '2', investor: 0.45, owner: 0.30 },
  { year: '3', investor: 0.55, owner: 0.35 },
  { year: '4', investor: 0.65, owner: 0.35 },
  { year: '5', investor: 0.70, owner: 0.35 },
  { year: '6', investor: 0.75, owner: 0.35 },
  { year: '7', investor: 0.80, owner: 0.35 },
  { year: '8', investor: 0.85, owner: 0.35 },
  { year: '9', investor: 0.90, owner: 0.35 },
  { year: '10', investor: 0.95, owner: 0.40 },
  { year: '11', investor: 2.00, owner: 0.50 },
  { year: '12', investor: 2.00, owner: 0.50 },
  { year: '13', investor: 2.00, owner: 0.50 },
  { year: '14', investor: 2.00, owner: 0.50 },
  { year: '15', investor: 2.00, owner: 0.50 },
  { year: '16', investor: 2.00, owner: 0.50 },
  { year: '17', investor: 2.00, owner: 0.50 },
  { year: '18', investor: 2.00, owner: 0.50 },
  { year: '19', investor: 2.00, owner: 0.50 },
  { year: '20', investor: 2.00, owner: 0.50 },
];

export function RevenueComparison() {
  return (
    <section className="bg-[#0E1C45] py-12 md:py-28">
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
        {/* Title Section */}
        <div className="text-left mb-12">
          <p className="color-accent mb-2" style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '140%' }}>
            동일한 공간, 3배 이상의 수익 :
          </p>
          <h2 className="color-white" style={{ fontSize: '42px', fontWeight: 'bold', lineHeight: '140%' }}>
            구조의 차이가 만든 결과
          </h2>
        </div>

        {/* Charts Container */}
        <div 
          className="bg-[#152556]"
          style={{ 
            borderRadius: '24px', 
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Legend */}
          <div className="flex justify-end gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#4A90E2]" style={{ borderRadius: '4px' }}></div>
              <span className="color-white" style={{ fontSize: '15px' }}>투자자</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-accent" style={{ borderRadius: '4px' }}></div>
              <span className="color-white" style={{ fontSize: '15px' }}>건물주</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 솔라오 수익 배분 */}
            <div>
              <h3 className="text-white mb-2" style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '140%' }}>
                솔라오 수익 배분
              </h3>
              <p className="text-[#A8B4C8] mb-6" style={{ fontSize: '15px', lineHeight: '140%' }}>
                (20년, MW당 약 24억)
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={solarOData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A3F5F" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#A8B4C8" 
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#A8B4C8" 
                    style={{ fontSize: '12px' }}
                    domain={[0, 3.0]}
                    ticks={[0, 0.50, 1.00, 1.50, 2.00, 2.50, 3.00]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1B2E4A', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#FFFFFF'
                    }}
                  />
                  <Bar dataKey="investor" stackId="a" fill="#4A90E2" />
                  <Bar dataKey="owner" stackId="a" fill="#FF6A3D" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* 기존 사업방식 수익 배분 */}
            <div>
              <h3 className="text-white mb-2" style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '140%' }}>
                기존 사업방식 수익 배분
              </h3>
              <p className="text-[#A8B4C8] mb-6" style={{ fontSize: '15px', lineHeight: '140%' }}>
                (20년, MW당 약 8억)
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={traditionalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A3F5F" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#A8B4C8" 
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#A8B4C8" 
                    style={{ fontSize: '12px' }}
                    domain={[0, 3.0]}
                    ticks={[0, 0.50, 1.00, 1.50, 2.00, 2.50, 3.00]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1B2E4A', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#FFFFFF'
                    }}
                  />
                  <Bar dataKey="investor" stackId="a" fill="#4A90E2" />
                  <Bar dataKey="owner" stackId="a" fill="#FF6A3D" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom Highlight Box */}
          <div 
            className="bg-[#1B2E4A] mx-auto text-center mt-12 flex flex-wrap items-center justify-center gap-2"
            style={{ 
              borderRadius: '24px', 
              padding: '28px 40px',
              border: '2px solid #FF6A3D'
            }}
          >
            <p className="text-white" style={{ fontSize: '20px', lineHeight: '140%', fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              건물주에게 실질적 소유와 극대화된 수익을 보장하는 구조, 오직{' '}
            </p>
            <SolarOLogo size="small" />
            <p className="text-white" style={{ fontSize: '20px', lineHeight: '140%', fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              와 함께!
            </p>
          </div>
        </div>

        {/* Cash Flow Table Section */}
        <div className="mt-20">
          <div 
            className="bg-[#152556]"
            style={{ 
              borderRadius: '24px', 
              padding: '48px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Title */}
            <div className="mb-8">
              <p className="color-accent mb-1" style={{ fontSize: '18px', lineHeight: '140%' }}>
                건물주의 이익을 최우선 한
              </p>
              <h3 className="color-white" style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '140%' }}>
                결과가 보여주는 현금흐름 <span className="text-[#A8B4C8]" style={{ fontSize: '20px' }}>(억원)</span>
              </h3>
            </div>

            {/* First Table: Years 1-15 */}
            <div className="mb-6">
              <table className="w-full text-center border-collapse" style={{ fontSize: '13px', tableLayout: 'fixed' }}>
                <thead>
                  <tr className="bg-[#1B2E4A]">
                    <th className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ width: '6%' }}>연차</th>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(year => (
                      <th key={year} className="text-white py-4 px-1 border border-[#2A3F5F]" style={{ width: '5.2%' }}>{year}</th>
                    ))}
                    <th className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ width: '6%', fontWeight: 'bold', backgroundColor: '#000000' }}>계</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 투자금 */}
                  <tr className="bg-[#4A90E2]">
                    <td className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ fontWeight: 'bold' }}>투자금</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.12</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.19</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.26</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.33</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.40</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.48</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.53</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.56</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.59</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.63</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">1.54</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">1.53</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">1.52</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">1.51</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">1.50</td>
                    <td className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ fontWeight: 'bold', backgroundColor: '#4A90E2', fontSize: '15px' }}>11.48</td>
                  </tr>
                  {/* 건물주 */}
                  <tr className="bg-[#FF6A3D]">
                    <td className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ fontWeight: 'bold' }}>건물주</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.42</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.42</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.42</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.42</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.42</td>
                    <td className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ fontWeight: 'bold', backgroundColor: '#FF6A3D', fontSize: '15px' }}>7.58</td>
                  </tr>
                  {/* 배분율 */}
                  <tr className="bg-[#0E1C45]">
                    <td className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ fontWeight: 'bold' }}>배분율</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">50%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">50%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">42%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">42%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">42%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">42%</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">42%</td>
                    <td className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ fontWeight: 'bold', backgroundColor: '#000000', fontSize: '15px' }}>50%</td>
                  </tr>
                  {/* 총수익 */}
                  <tr className="bg-[#0E1C45]">
                    <td className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ fontWeight: 'bold' }}>총수익</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.62</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.69</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.76</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.83</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.90</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">0.98</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">1.05</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">1.12</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">1.19</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">1.26</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.64</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.63</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.62</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.61</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.60</td>
                    <td className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ fontWeight: 'bold', backgroundColor: '#D32F2F', fontSize: '16px' }}>22.49</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Second Table: Years 16-35 */}
            <div className="mb-8">
              <table className="w-full text-center border-collapse" style={{ fontSize: '12px', tableLayout: 'fixed' }}>
                <thead>
                  <tr className="bg-[#1B2E4A]">
                    <th className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ width: '5%' }}>연차</th>
                    {[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35].map(year => (
                      <th key={year} className="text-white py-4 px-1 border border-[#2A3F5F]" style={{ width: '4.3%' }}>{year}</th>
                    ))}
                    <th className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ width: '5%', fontWeight: 'bold', backgroundColor: '#000000' }}>계</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 투자금 */}
                  <tr className="bg-[#4A90E2]">
                    <td className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ fontWeight: 'bold' }}>투자금</td>
                    {[...Array(20)].map((_, i) => (
                      <td key={i} className="text-white py-4 px-1 border border-[#2A3F5F]">0.00</td>
                    ))}
                    <td className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ fontWeight: 'bold', backgroundColor: '#4A90E2', fontSize: '14px' }}>0.0</td>
                  </tr>
                  {/* 건물주 */}
                  <tr className="bg-[#FF6A3D]">
                    <td className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ fontWeight: 'bold' }}>건물주</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.59</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.58</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.57</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.56</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.56</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.55</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.54</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.53</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.52</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.51</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.49</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.48</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.47</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.46</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.45</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.44</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.44</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.43</td>
                    <td className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ fontWeight: 'bold', backgroundColor: '#FF6A3D', fontSize: '14px' }}>50.17</td>
                  </tr>
                  {/* 배분율 */}
                  <tr className="bg-[#0E1C45]">
                    <td className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ fontWeight: 'bold' }}>배분율</td>
                    {[...Array(20)].map((_, i) => (
                      <td key={i} className="text-white py-4 px-1 border border-[#2A3F5F]">100%</td>
                    ))}
                    <td className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ fontWeight: 'bold', backgroundColor: '#000000', fontSize: '14px' }}>100%</td>
                  </tr>
                  {/* 총수익 */}
                  <tr className="bg-[#0E1C45]">
                    <td className="text-white py-4 px-2 border border-[#2A3F5F]" style={{ fontWeight: 'bold' }}>총수익</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.59</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.58</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.57</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.56</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.56</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.55</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.54</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.53</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.52</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.51</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.50</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.49</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.48</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.47</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.46</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.45</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.44</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.44</td>
                    <td className="text-white py-4 px-1 border border-[#2A3F5F]">2.43</td>
                    <td className="text-white py-4 px-2 border-4 border-[#FF0000]" style={{ fontWeight: 'bold', backgroundColor: '#D32F2F', fontSize: '15px' }}>50.17</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom Text */}
            <div 
              className="bg-[#1B2E4A] mx-auto text-center mt-12"
              style={{ 
                borderRadius: '24px', 
                padding: '28px 40px',
                border: '2px solid #FF6A3D'
              }}
            >
              <p className="text-white" style={{ fontSize: '20px', lineHeight: '140%' }}>
                1MW(약 2,000평)당{' '}
                <span className="text-[#FF6A3D]" style={{ fontWeight: 'bold' }}>
                  15년간 11억, 35년간 61억
                </span>
                의 현금흐름 발생
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-20">
          <h2 className="text-center mb-16 text-white" style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '140%' }}>
            믿을 수 있는 <span className="text-[#FF6A3D]">대기업 파트너</span>
          </h2>
          
          <div 
            className="flex items-center justify-center gap-16 mx-auto"
            style={{ 
              maxWidth: '100%',
              padding: '48px',
              borderRadius: '24px',
              backgroundColor: '#152556'
            }}
          >
            {/* 한화시스템 로고 */}
            <div className="flex flex-col items-center flex-1">
              <div 
                className="flex items-center justify-center mb-6"
                style={{ 
                  width: '200px', 
                  height: '120px'
                }}
              >
                <ImageWithFallback 
                  src={hanwhaLogo.src} 
                  alt="한화시스템" 
                  style={{ 
                    maxWidth: '160px',
                    maxHeight: '120px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '140%' }}>
                  한화시스템
                </p>
                <p className="text-[#A8B4C8] mt-1" style={{ fontSize: '14px', lineHeight: '140%' }}>
                  HANWHA SYSTEMS
                </p>
              </div>
            </div>

            {/* 구분선 */}
            <div className="bg-white/20" style={{ width: '1px', height: '200px' }}></div>

            {/* JBCORP 로고 */}
            <div className="flex flex-col items-center flex-1">
              <div 
                className="flex items-center justify-center mb-6"
                style={{ 
                  width: '200px', 
                  height: '120px'
                }}
              >
                <ImageWithFallback 
                  src={jbcorpLogo.src} 
                  alt="제이비코퍼레이션" 
                  style={{ 
                    maxWidth: '160px',
                    maxHeight: '120px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '140%' }}>
                  제이비코퍼레이션
                </p>
                <p className="text-[#A8B4C8] mt-1" style={{ fontSize: '14px', lineHeight: '140%' }}>
                  JBCORP
                </p>
              </div>
            </div>

            {/* 구분선 */}
            <div className="bg-white/20" style={{ width: '1px', height: '200px' }}></div>

            {/* DAEBO 로고 */}
            <div className="flex flex-col items-center flex-1">
              <div 
                className="flex items-center justify-center mb-6"
                style={{ 
                  width: '200px', 
                  height: '120px'
                }}
              >
                <ImageWithFallback 
                  src={daeboLogo.src} 
                  alt="대보" 
                  style={{ 
                    maxWidth: '160px',
                    maxHeight: '120px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '140%' }}>
                  대보
                </p>
                <p className="text-[#A8B4C8] mt-1" style={{ fontSize: '14px', lineHeight: '140%' }}>
                  DAEBO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}