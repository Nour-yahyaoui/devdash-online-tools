"use client";

import { JSX, useState } from "react";
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
     name: 'prompt for ai',
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
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  const sidebarVariants: Variants = {
    open: {
      width: "280px",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.3,
      },
    },
    closed: {
      width: "80px",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.3,
      },
    },
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="open"
      animate={isOpen ? "open" : "closed"}
      className="relative h-screen bg-black text-white flex flex-col overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-6">
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#ffb7c5" }}
              >
                <FiCode size={20} color="#000" />
              </div>
              <span className="font-semibold text-lg">DevDash</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          style={{ color: "#94a3b8" }}
        >
          {isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.path}>
                <Link href={item.path}>
                  <motion.div
                    className="relative flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer"
                    onHoverStart={() => setHoveredItem(item.path)}
                    onHoverEnd={() => setHoveredItem(null)}
                    whileHover={{ x: 4 }}
                    animate={{
                      backgroundColor: isActive
                        ? `${item.color}15`
                        : hoveredItem === item.path
                          ? `${item.color}10`
                          : "transparent",
                    }}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute left-0 w-1 h-8 rounded-r-full"
                        style={{ backgroundColor: item.color }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Icon Container */}
                    <div
                      className="relative p-2 rounded-lg transition-all duration-300"
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

                    {/* Label */}
                    <AnimatePresence mode="wait">
                      {isOpen && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="text-sm font-medium"
                          style={{
                            color: isActive ? "#fff" : "#94a3b8",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <motion.div
          className="flex items-center gap-4 px-4 py-3 rounded-xl"
          whileHover={{ backgroundColor: "#64748b20" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#d2b7ff" }}
          >
            <FiUser size={16} color="#000" />
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1"
            >
              <p className="text-xs" style={{ color: "#94a3b8" }}>
                nourryahyaoui@gmail.com
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.aside>
  );
}
