"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { Settings, ChevronRight, BookOpen, FolderOpen, FileText, MessageCircle, ChevronDown, LayoutDashboard, Calendar, User, CheckSquare, Table, Headphones, BarChart3, Layers, Shield, Bot, ShoppingCart, FileStack, Bell } from 'lucide-react';
import UserDropdown from "@/components/header/UserDropdown";
import HorizontaLDots from "@public/images/icons/horizontal-dots.svg";
import logoImage from "@public/images/logo/42084a9ed76544286cbbc6eee3e051e537b81c35.png";
import logoImageDark from "@public/images/logo/9dc3151ee9a339697f55b2f6cb1c9b289f14ff1f.png";
import logoTextImage from "@public/images/logo/f1f4c3a89553117f718d8dd04585ffa472cfb784.png";
import logoBlue from "@public/images/logo/logo_blue.png";
import logoWhite from "@public/images/logo/logo_white.png";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  new?: boolean;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <BookOpen />,
    name: "협력사 가이드라인",
    new: true,
    subItems: [
      { name: "사업비 안내", path: "/business-cost", new: false },
      { name: "주요 업무 흐름도", path: "/workflow", new: true },
      { name: "시공 참여 조건", path: "/participation-condition", new: false },      
    ],
  },
  {
    name: "서식 안내",
    icon: <FileText />,
    new: false,
    subItems: [
      { name: "서식 다운로드", path: "/form-download", new: false },      
    ],
  },
  {
    name: "프로젝트 관리",
    icon: <FolderOpen />,
    new: true,
    subItems: [
      { name: "신규 프로젝트 접수", path: "/project-request", new: true },
      { name: "프로젝트 조회", path: "/project-list", new: false },      
    ],
  },
  {
    name: "공지사항",
    icon: <Bell />,
    new: true,
    subItems: [
      { name: "공지사항 목록", path: "/notice-list", new: true },  
    ],
  },
  {
    name: "설정",
    icon: <Settings />,
    new: false,
    subItems: [
      { name: "내 정보 관리", path: "/my-info", new: false },  
      { name: "회사 정보 관리", path: "/company-info", new: false },  
    ],
  },
  {
    name: "Forms",
    icon: <FileStack />,
    new: false,
    subItems: [
      { name: "Form Elements", path: "/form-elements", new: false },  
      { name: "Form Layouts", path: "/form-layouts", new: false },  
    ],
  },
  {
    name: "Tables",
    icon: <Table />,
    new: false,
    subItems: [
      { name: "Basic Tables", path: "/basic-tables", new: false },  
      { name: "Data Tables", path: "/data-tables", new: false },  
    ],
  },
  {
    name: "Pages",
    icon: <FileText />,
    new: false,
    subItems: [
      { name: "File Manager", path: "/file-manager", new: false },  
      { name: "FAQ", path: "/faq", new: false },  
      { name: "Blank Page", path: "/blank-page", new: false },  
      { name: "404 Error", path: "/error-404", new: false },  
      { name: "500 Error", path: "/error-500", new: false },  
      { name: "503 Error", path: "/error-503", new: false },  
    ],
  },
  {
    name: "Chat",
    icon: <MessageCircle />,    
    new: true,
    subItems: [
      { name: "채팅 목록", path: "/chat-list", new: true }
    ],    
  },
];

const othersItems: NavItem[] = [
  {
    icon: <Layers />,
    name: "UI Elements",
    subItems: [
      { name: "Alerts", path: "/alerts" },
      { name: "Avatars", path: "/avatars" },
      { name: "Badge", path: "/badge" },
      { name: "Breadcrumb", path: "/breadcrumb" },
      { name: "Buttons", path: "/buttons" },
      { name: "Buttons Group", path: "/buttons-group" },
      { name: "Cards", path: "/cards" },
      { name: "Carousel", path: "/carousel" },
      { name: "Dropdowns", path: "/dropdowns" },
      { name: "Images", path: "/images" },
      { name: "Links", path: "/links" },
      { name: "Lists", path: "/lists" },
      { name: "Modals", path: "/modals" },
      { name: "Notifications", path: "/notifications" },
      { name: "Pagination", path: "/pagination" },
      { name: "Popovers", path: "/popovers" },
      { name: "Progressbar", path: "/progressbar" },
      { name: "Ribbons", path: "/ribbons" },
      { name: "Spinners", path: "/spinners" },
      { name: "Tabs", path: "/tabs" },
      { name: "Tooltips", path: "/tooltips" },
      { name: "Videos", path: "/videos" },
    ],
  },
  {
    name: "Authentication",
    icon: <Shield />,
    new: false,
    subItems: [
      { name: "Sign In", path: "/" },  
      { name: "Sign Up", path: "/sign-up" },        
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others"
  ) => (
    <ul className="flex flex-col gap-1 px-3">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}>
              <span
                className={`${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}>
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              
              {nav.new && (isExpanded || isHovered || isMobileOpen) && (
                <span
                  className={`${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "menu-dropdown-badge-active"
                      : "menu-dropdown-badge-inactive"
                  } menu-dropdown-badge`}>
                  new
                </span>
              )}

              <span className="ml-auto absolute right-2">
              {(isExpanded || isHovered || isMobileOpen) && (
                  openSubmenu?.type === menuType &&
                  openSubmenu?.index === index
                  ? <ChevronDown size={16} />
                  : <ChevronRight size={16} />                
              )}
            </span>
            
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}>
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}>
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}>
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}>
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}>
                            new
                          </span>
                        )}                        
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items =
        menuType === "main"
          ? navItems
          : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (
    index: number,
    menuType: "main" | "others"
  ) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <div>
      <aside className={`fixed flex flex-col xl:mt-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-full md:transition-all md:duration-300 md:ease-in-out z-50 border-l border-r border-gray-200
        ${ isExpanded || isMobileOpen ? "w-[260px]" : isHovered ? "w-[260px]" : "w-[0px] md:w-[64px]" }  
        ${ isMobileOpen ? "ml-auto right-0" : "" } // 모바일의 경우 슬라이드 메뉴를 오른쪽에 배치, 슬라이드 애니메이션은 데스크탑 모드에서만 적용              
        xl:translate-x-0`}>

        {!isMobileOpen ? (
          <div className={`flex justify-center ${ !isExpanded && !isHovered ? "py-[12.5px]" : "py-[9.2px]" }`}>
            <Link href="/main">
              {isExpanded || isHovered ? (
                <>
                <Image className="dark:hidden"
                  src={logoBlue.src}
                  alt="Logo"
                  width={170}
                  height={54}/>
                <Image className="hidden dark:block"
                  src={logoWhite.src}
                  alt="Logo"
                  width={170}
                  height={54}/>
                </>
              ) : (
                <>
                <Image className="dark:hidden"
                  src={logoImage.src}
                  alt="Logo"
                  width={38}
                  height={51}/>
                <Image className="hidden dark:block"
                  src={logoImageDark.src}
                  alt="Logo"
                  width={38}
                  height={51}/>
                </>
              )}
            </Link>        
          </div>
        ) : (
          <div className="mt-14 py-4 pl-2">
            <UserDropdown />
          </div>        
        )}    
      
        <div className="h-[1px] bg-gray-200 dark:bg-gray-800 mb-4" />

        <div className="flex flex-col overflow-y-auto  duration-300 ease-linear no-scrollbar">
          <nav className="mb-6">
            <div className="flex flex-col gap-4">
              <div>              
                {renderMenuItems(navItems, "main")}
              </div>            
              <div>
                <h2 className={`mb-4 text-xs uppercase flex leading-6 text-gray-400 ${ !isExpanded && !isHovered ? "xl:justify-center" : "justify-start ml-6"} ${isMobileOpen ? "justify-start ml-4" : ""}`}>
                  {isExpanded || isHovered || isMobileOpen ? ( "Others" ) : ( <HorizontaLDots /> )}
                </h2>
                {renderMenuItems(othersItems, "others")}
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default AppSidebar;
