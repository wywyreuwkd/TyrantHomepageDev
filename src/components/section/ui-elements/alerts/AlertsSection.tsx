"use client"

import Link from "next/link";
import { CheckCircle2, Info, AlertTriangle, AlertCircle, X, Bell, Shield } from "lucide-react";
import { useState } from "react";

const BRAND_PRIMARY = '#243c84';
const BRAND_ACCENT = '#d8442c';

interface Alert {
 	id: string;
  	type: 'success' | 'info' | 'warning' | 'error';
  	title: string;
  	message: string;
  	action?: { label: string; href: string };
  	timestamp: string;
}

export function AlertsSection() {

	const [alerts, setAlerts] = useState<Alert[]>([
    	{
      		id: '1',
      		type: 'success',
      		title: '데이터 동기화 완료',
      		message: '모든 데이터가 성공적으로 동기화되었습니다.',
      		timestamp: '방금'
    	},
    	{
      		id: '2',
      		type: 'info',
      		title: '시스템 점검 안내',
      		message: '2026-01-20 02:00 ~ 04:00 정기 점검이 예정되어 있습니다.',
      		action: { label: '자세히 보기', href: '#' },
      		timestamp: '10분 전'
    	},
    	{
      		id: '3',
      		type: 'warning',
      		title: '스토리지 용량 경고',
      		message: '스토리지 용량이 85%를 초과했습니다. 데이터를 정리하거나 용량을 증설하세요.',
      		action: { label: '용량 관리', href: '#' },
      		timestamp: '30분 전'
    	},
    	{
      		id: '4',
      		type: 'error',
      		title: '파일 업로드 실패',
      		message: '파일 업로드에 실패했습니다. 네트워크 연결을 확인하고 다시 시도해주세요.',
      		timestamp: '1시간 전'
    	}
  	]);

  	const dismissAlert = (id: string) => {
    	setAlerts(alerts.filter(alert => alert.id !== id));
  	};

  	const getAlertIcon = (type: string) => {
    	switch (type) {
      		case 'success':
        		return <CheckCircle2 size={16} className="flex-shrink-0 text-green-500" />;
      		case 'info':
        		return <Info size={16} className="flex-shrink-0 text-blue-500" />;
      		case 'warning':
        		return <AlertTriangle size={16} className="flex-shrink-0 text-amber-500" />;
      		case 'error':
        		return <AlertCircle size={16} className="flex-shrink-0 text-red-500" />;
      		default:
        		return <Bell size={16} className="flex-shrink-0 text-gray-500 dark:text-gray-400" />;
    	}
  	};

  	const getAlertIconColor = (type: string): string => {
    	switch (type) {
      		case 'success':
        		return '#10B981';
      		case 'info':
        		return '#3B82F6';
      		case 'warning':
        		return '#F59E0B';
      		case 'error':
        		return '#EF4444';
      		default:
        		return '#6b7280';
    	}
  	};

  	const successAlerts = alerts.filter(a => a.type === 'success');
  	const infoAlerts = alerts.filter(a => a.type === 'info');
  	const warningAlerts = alerts.filter(a => a.type === 'warning');
  	const errorAlerts = alerts.filter(a => a.type === 'error');
  
  	// Alert Card Component
  	const AlertCard = ({ alert }: { alert: Alert }) => (
    	<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 transition-all">
      		<div className="flex items-start gap-3">
        		<div className="mt-0.5">
          			{getAlertIcon(alert.type)}
        		</div>
        		<div className="flex-1 min-w-0">
          			<div className="text-[14px] font-medium tracking-tight text-gray-900 dark:text-gray-50 mb-1">
            			{alert.title}
          			</div>
          			<div className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.5]">
            			{alert.message}
            			{alert.action && (
              				<>
                				{' '}
                				<a className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
                  					href={alert.action.href}                  
                  					style={{ color: getAlertIconColor(alert.type) }}>
                  					{alert.action.label} →
                				</a>
              				</>
            			)}
          			</div>
        		</div>
        		<div className="flex items-center gap-2 flex-shrink-0">
          			<span className="text-[11px] whitespace-nowrap hidden md:block text-gray-400 dark:text-gray-500 mt-0.5">
            			{alert.timestamp}
          			</span>
          			<button className="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 bg-transparent border-none rounded cursor-pointer transition-all flex-shrink-0 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700"
            			onClick={() => dismissAlert(alert.id)}>
            			<X size={14} />
          			</button>
        		</div>
      		</div>
    	</div>
  	);

  	// Section Header Component
  	const SectionHeader = ({ title }: { title: string }) => (
    	<div className="flex items-center gap-2 mb-4">
      		<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
      		<h2 className="text-[16px] font-semibold tracking-tight text-gray-900 dark:text-gray-50">
        		{title}
      		</h2>
    	</div>
  	);

  	return (
  		<div>
  			{/* Success Alerts */}
      		{successAlerts.length > 0 && (
        		<div className="mb-12">
          			<SectionHeader title="성공" />
          			<div className="space-y-3">
            			{successAlerts.map(alert => (
              				<AlertCard key={alert.id} alert={alert} />
            			))}
          			</div>
        		</div>
      		)}

      		{/* Info Alerts */}
      		{infoAlerts.length > 0 && (
        		<div className="mb-12">
          			<SectionHeader title="정보" />
          			<div className="space-y-3">
            			{infoAlerts.map(alert => (
              				<AlertCard key={alert.id} alert={alert} />
            			))}
          			</div>
        		</div>
      		)}

      		{/* Warning Alerts */}
      		{warningAlerts.length > 0 && (
        		<div className="mb-12">
          			<SectionHeader title="경고" />
          			<div className="space-y-3">
            			{warningAlerts.map(alert => (
              				<AlertCard key={alert.id} alert={alert} />
            			))}
          			</div>
        		</div>
      		)}

      		{/* Error Alerts */}
      		{errorAlerts.length > 0 && (
        		<div className="mb-12">
          			<SectionHeader title="오류" />
          			<div className="space-y-3">
            			{errorAlerts.map(alert => (
              				<AlertCard key={alert.id} alert={alert} />
            			))}
          			</div>
        		</div>
      		)}

      		{/* Empty State */}
      		{alerts.length === 0 && (
        		<div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-20 px-5 text-center">
          			<Shield className="text-gray-300 dark:text-gray-600 mx-auto mb-4"
            			size={48} />
          			<h3 className="text-[16px] font-semibold mb-2 text-gray-500 dark:text-gray-400">
            			알림이 없습니다
          			</h3>
          			<p className="text-[14px] text-gray-400 dark:text-gray-500">
            			모든 알림을 확인했습니다.
          			</p>
        		</div>
      		)}
  		</div>
  	);
}