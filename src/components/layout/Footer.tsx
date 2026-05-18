import Link from "next/link";

export function Footer() {
	
	const navItems = [
    	{ path: "/", label: "협회소개" },
    	{ path: "/gallery", label: "포토갤러리" },
    	{ path: "/calendar", label: "일정 캘린더" },
    	{ path: "/officers", label: "운영진소개" },
    	{ path: "/partners", label: "협력기업" },
  	];

	return (
		<footer className="relative mt-32 bg-[var(--bg-footer)] border-t border-[var(--border-gold)]">
        	<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-footer-dark)] opacity-50"></div>
        	<div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
          		<div className="grid md:grid-cols-3 gap-12">
            		<div>
              			<h3 className="font-display font-semibold text-2xl text-[var(--text-tertiary)] mb-4">
                			마포구 골프협회
              			</h3>
              			<p className="font-body text-[var(--text-tertiary)] leading-relaxed opacity-50">
                			마포구 골프의 발전과 회원 간의 친목 도모를 위해 노력하고 있습니다.
              			</p>
            		</div>
            		<div>
              			<h4 className="font-body font-semibold text-[var(--text-tertiary)] mb-4">Quick Links</h4>
              			<ul className="space-y-2">
                			{navItems.slice(0, 5).map((item) => (
                  				<li key={item.path}>
                    				<Link className="font-body text-[var(--text-tertiary)] opacity-50 hover:text-[var(--accent-gold)] transition-colors duration-300" href={item.path} >
                      					{item.label}
                    			</Link>
                  			</li>
                		))}
              		</ul>
            	</div>
            	<div>
            		<h4 className="font-body font-semibold text-[var(--text-tertiary)] mb-4">Contact</h4>
              		<div className="space-y-2 font-body text-[var(--text-tertiary)] opacity-50">
                		<p>서울특별시 마포구</p>
                		<p>Tel: 02-XXXX-XXXX</p>
                		<p>Email: info@mapogolf.or.kr</p>
              		</div>
            	</div>
        	</div>
        	<div className="mt-12 pt-8 border-t border-[var(--border-gold)]/30 text-center font-body text-sm text-[var(--text-tertiary)]">
        		<p>&copy; 2025 Mapo Golf Association. All rights reserved.</p>
        	</div>
    	</div>
      </footer>
	)
}