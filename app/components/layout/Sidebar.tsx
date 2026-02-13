"use client";

import { JSX, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FiHome,
  FiMenu,
  FiX,
  FiCode,
  FiGrid,
  FiUser,
  FiSettings,
  FiChevronRight,
  FiTerminal,
  FiChevronLeft,
  FiDroplet,
  FiSmartphone,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import { AiFillRobot } from "react-icons/ai";
import { useSwipeable } from "react-swipeable";

interface NavItem {
  name: string;
  path: string;
  icon: JSX.Element;
  color: string;
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FiHome size={20} />,
    color: "#c5e6ff",
  },
  {
    name: 'HTML Course',
    path: '/dashboard/html',
    icon: <FiCode size={20} />,
    color: '#475569'
  },
  {
    name: 'CSS Course',
    path: '/dashboard/css',
    icon: <FiDroplet size={20} />,
    color: '#475569'
  },
  {
    name: 'JavaScript Course',
    path: '/dashboard/javascript',
    icon: <FiTerminal size={20} />,
    color: '#475569'
  },
  {
    name: "CSS Themes",
    path: "/dashboard/themes",
    icon: <FiDroplet size={20} />,
    color: "#d2b7ff",
  },
  {
    name: 'Button Gallery',
    path: '/dashboard/buttons',
    icon: <FiSmartphone size={20} />,
    color: '#ffb7c5'
  },
  {
    name: 'Prompt for AI',
    path: '/dashboard/prompts',
    icon: <AiFillRobot size={20} />,
    color: '#ffb7c5'
  },
  {
    name: 'Icons Gallery',
    path: '/dashboard/icons',
    icon: <FiGrid size={20} />,
    color: '#b7ffca'
  }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const pathname = usePathname();

  // Load saved state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('sidebarOpen');
    if (savedState !== null) {
      setIsOpen(JSON.parse(savedState));
    }
    setIsInitialized(true);
  }, []);

  // Save state to localStorage whenever it changes (only from user interaction)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('sidebarOpen', JSON.stringify(isOpen));
    }
  }, [isOpen, isInitialized]);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle touch gestures for mobile
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      if (isMobile && !isOpen) {
        setIsOpen(true);
      }
    },
    onSwipedLeft: () => {
      if (isMobile && isOpen) {
        setIsOpen(false);
      }
    },
    trackMouse: true,
    trackTouch: true,
    delta: 50,
    swipeDuration: 500,
  });

  const sidebarVariants: Variants = {
    open: {
      width: isMobile ? "85%" : "280px",
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.3,
      },
    },
    closed: {
      width: isMobile ? "85%" : "80px",
      x: isMobile ? "-100%" : 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.3,
      },
    },
  };

  const overlayVariants: Variants = {
    visible: {
      opacity: 0.5,
      transition: { duration: 0.3 },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // Don't render until initialized to prevent flash
  if (!isInitialized) {
    return null;
  }

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black z-40"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      {isMobile && !isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-3 rounded-xl bg-black text-white shadow-lg"
          style={{ backgroundColor: "#0a0a0a", border: "1px solid #333" }}
          whileTap={{ scale: 0.95 }}
        >
          <FiMenu size={24} />
        </motion.button>
      )}

      {/* Sidebar */}
      <motion.aside
        {...swipeHandlers}
        variants={sidebarVariants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed md:relative h-screen bg-black text-white flex flex-col overflow-hidden z-50"
        style={{ 
          backgroundColor: "#0a0a0a",
          boxShadow: isMobile && isOpen ? "0 0 20px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Sidebar Header - No animation on page change */}
        <div className="flex items-center justify-between p-4 md:p-6 min-h-[72px]">
          {isOpen ? (
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#ffb7c5" }}
              >
                <FiCode size={20} color="#000" />
              </div>
              <span className="font-semibold text-lg">DevDash</span>
            </div>
          ) : (
            <div />
          )}

          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors active:bg-gray-700"
            style={{ color: "#94a3b8" }}
          >
            {isOpen ? (
              isMobile ? <FiX size={20} /> : <FiChevronLeft size={20} />
            ) : (
              !isMobile && <FiChevronRight size={20} />
            )}
          </button>
        </div>

        {/* Navigation Items - Hidden scrollbars on all screens */}
        <nav className="flex-1 px-2 md:px-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <ul className="space-y-1 md:space-y-2 pb-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.path} onClick={isMobile ? closeSidebar : undefined}>
                  <Link href={item.path} scroll={false}>
                    <div
                      className="relative flex items-center gap-4 px-3 md:px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200"
                      onMouseEnter={() => !isMobile && setHoveredItem(item.path)}
                      onMouseLeave={() => !isMobile && setHoveredItem(null)}
                      style={{
                        backgroundColor: isActive
                          ? `${item.color}15`
                          : hoveredItem === item.path
                            ? `${item.color}10`
                            : "transparent",
                      }}
                    >
                      {/* Active Indicator */}
                      {isActive && (
                        <div
                          className="absolute left-0 w-1 h-8 rounded-r-full"
                          style={{ backgroundColor: item.color }}
                        />
                      )}

                      {/* Icon Container */}
                      <div
                        className="relative p-2 rounded-lg transition-colors duration-300"
                        style={{
                          backgroundColor: isActive
                            ? `${item.color}30`
                            : hoveredItem === item.path
                              ? `${item.color}20`
                              : "transparent",
                        }}
                      >
                        <div style={{ color: isActive ? item.color : "#94a3b8" }}>
                          {item.icon}
                        </div>
                      </div>

                      {/* Label - Only animate when toggling sidebar */}
                      {isOpen && (
                        <span
                          className="text-sm font-medium truncate"
                          style={{
                            color: isActive ? "#fff" : "#94a3b8",
                          }}
                        >
                          {item.name}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-3 md:p-4 border-t border-gray-800">
          <div
            className="flex items-center gap-4 px-3 md:px-4 py-3 rounded-xl transition-colors duration-200"
            onMouseEnter={() => !isMobile && setHoveredItem('footer')}
            onMouseLeave={() => !isMobile && setHoveredItem(null)}
            style={{
              backgroundColor: hoveredItem === 'footer' ? "#64748b20" : "transparent",
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#d2b7ff" }}
            >
              <FiUser size={16} color="#000" />
            </div>
            {isOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-xs truncate" style={{ color: "#94a3b8" }}>
                  nourryahyaoui@gmail.com
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>
    </>
  );
}