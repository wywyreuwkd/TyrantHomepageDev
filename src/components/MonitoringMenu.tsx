import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  href: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "monitoring",
    label: "모니터링",
    items: [
      { id: "generation-time", label: "발전시간 조회", href: "/monitoring/generation-time" },
      { id: "balance", label: "잔고조회", href: "/monitoring/balance" },
      { id: "management-report", label: "관리운영 보고서", href: "/monitoring/management-report" },
      { id: "financial-report", label: "자금관리 보고서", href: "/monitoring/financial-report" },
    ],
  },
  {
    id: "customer-center",
    label: "고객센터",
    items: [
      { id: "notice", label: "공지사항", href: "/customer-center/notice" },
      { id: "faq", label: "자주 묻는 질문", href: "/customer-center/faq" },
      { id: "inquiry", label: "문의하기", href: "/customer-center/inquiry" },
    ],
  },
];

export function MonitoringMenu() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["monitoring"]);
  const [activeItem, setActiveItem] = useState<string>("generation-time");

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden max-w-md">
        <nav className="bg-[#0F214A]">
          {menuData.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            
            return (
              <div key={category.id}>
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-white hover:bg-[#15305A] transition-colors"
                >
                  <span className="font-bold">{category.label}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {/* Active Indicator */}
                {isExpanded && (
                  <div className="h-1 bg-[#FF6B3D]" />
                )}

                {/* Sub-menu Items */}
                {isExpanded && (
                  <div className="bg-[#0E1C45]">
                    {category.items.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`
                          w-full px-6 py-5 text-left text-white
                          hover:bg-[#15305A] transition-colors
                          ${activeItem === item.id ? "bg-[#152556]" : ""}
                          ${index !== category.items.length - 1 ? "" : ""}
                        `}
                        style={{ lineHeight: "140%" }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Demo Content Area */}
      <div className="mt-12 bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-[#0F214A] mb-4">
          선택된 메뉴
        </h2>
        <p className="text-[#0F214A]/70">
          {menuData
            .flatMap((cat) => cat.items)
            .find((item) => item.id === activeItem)?.label || "선택된 항목 없음"}
        </p>
      </div>
    </div>
  );
}
