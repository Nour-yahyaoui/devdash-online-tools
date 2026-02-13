'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Link from 'next/link';
import { 
  FiHome, 
  FiDroplet, 
  FiSmartphone, 
  FiGrid, 
  FiCode, 
  FiLayers,
  FiBox,
  FiFeather,
  FiChevronRight,
  FiBookmark,
  FiSettings,
  FiGithub,
  FiZap,
  FiWind,
  FiPlay,
  FiImage
} from 'react-icons/fi';
import { AiFillRobot } from 'react-icons/ai';

// FIXED: FloatingShapes component with NO random values during render
const FloatingShapes = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const fixedPositions = [
    { left: '10%', top: '20%', width: 200, height: 200, duration: 15 },
    { left: '70%', top: '60%', width: 250, height: 250, duration: 20 },
    { left: '30%', top: '80%', width: 150, height: 150, duration: 18 },
    { left: '80%', top: '30%', width: 180, height: 180, duration: 22 },
    { left: '40%', top: '10%', width: 220, height: 220, duration: 25 },
    { left: '60%', top: '70%', width: 280, height: 280, duration: 17 },
  ];

  const fixedLines = [
    { x1: '10%', y1: '30%', x2: '40%', y2: '60%', duration: 8 },
    { x1: '70%', y1: '20%', x2: '90%', y2: '80%', duration: 10 },
    { x1: '20%', y1: '70%', x2: '60%', y2: '30%', duration: 12 },
    { x1: '50%', y1: '40%', x2: '80%', y2: '90%', duration: 9 },
    { x1: '30%', y1: '50%', x2: '70%', y2: '70%', duration: 11 },
    { x1: '80%', y1: '10%', x2: '40%', y2: '80%', duration: 13 },
    { x1: '15%', y1: '85%', x2: '85%', y2: '15%', duration: 14 },
    { x1: '45%', y1: '25%', x2: '65%', y2: '95%', duration: 16 },
    { x1: '55%', y1: '75%', x2: '25%', y2: '45%', duration: 7 },
    { x1: '75%', y1: '55%', x2: '35%', y2: '35%', duration: 19 },
  ];

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fixedPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: pos.width,
            height: pos.height,
            left: pos.left,
            top: pos.top,
          }}
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -50, 0, 50, 0],
            scale: [1, 1.1, 1, 0.9, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      <svg className="absolute w-full h-full opacity-20">
        {fixedLines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="white"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const PulseDot = ({ color, delay = 0 }: { color: string; delay?: number }) => (
  <motion.span
    className="w-2 h-2 rounded-full"
    style={{ backgroundColor: color }}
    animate={{
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const FloatingCard = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

// FIXED: Section wrapper that shows content immediately, then animates when in view
const SectionWrapper = ({ children, className = "" }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }} // Start visible
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} // Always visible
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: FiHome, color: "#c5e6ff" },
    { name: "HTML Course", path: "/dashboard/html", icon: FiCode, color: "#475569" },
    { name: "CSS Course", path: "/dashboard/css", icon: FiImage, color: "#d2b7ff" },
    { name: "JavaScript Course", path: "/dashboard/javascript", icon: FiZap, color: "#ffb7c5" },
    { name: "Tailwind CSS", path: "/dashboard/tailwindcss", icon: FiWind, color: "#b7ffca" },
    { name: "Code Playground", path: "/dashboard/playground", icon: FiPlay, color: "#475569" },
    { name: "UI Components", path: "/dashboard/components", icon: FiBox, color: "#c5e6ff" },
    { name: "CSS Themes", path: "/dashboard/themes", icon: FiLayers, color: "#d2b7ff" },
    { name: "Button Gallery", path: "/dashboard/buttons", icon: FiSmartphone, color: "#ffb7c5" },
    { name: "AI Prompts", path: "/dashboard/prompts", icon: AiFillRobot, color: "#ffb7c5" },
    { name: "Icons Gallery", path: "/dashboard/icons", icon: FiFeather, color: "#b7ffca" },
  ];

  const featuredItems = navItems.slice(1, 11);

  if (!mounted) {
    return (
      <DashboardLayout pageTitle="Project Overview" showBackButton={false}>
        <div className="space-y-16">
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="relative z-10 max-w-3xl">
              <div className="h-8 w-32 bg-white/10 rounded-full mb-6" />
              <div className="h-16 w-96 bg-white/10 rounded-lg mb-4" />
              <div className="h-6 w-full max-w-2xl bg-white/10 rounded-lg mb-8" />
              <div className="flex gap-4">
                <div className="h-12 w-32 bg-white/10 rounded-lg" />
                <div className="h-12 w-48 bg-white/10 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout pageTitle="Project Overview" showBackButton={false}>
      <div className="space-y-16">
            
     <div className="relative rounded-3xl p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm">
  <div className="relative z-10 max-w-3xl">
    {/* Simple version badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-green-400" />
      <span className="text-sm font-medium text-gray-700">DEVDASH v1.0.2</span>
    </div>
    
    {/* Simple title */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
      Developer Dashboard
      <span className="block text-2xl md:text-3xl text-gray-600 mt-2 font-normal">
        Architecture Guide
      </span>
    </h1>
    
    {/* Simple description */}
    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
      A modern Next.js 14 application with TypeScript, TailwindCSS, and Framer Motion. 
      Built with consistency, reusability, and developer experience in mind.
    </p>
    
    {/* Simple buttons */}
    <div className="flex flex-wrap gap-4">
      <a 
        href="https://github.com/nour-yahyaoui/devdash-online-tools" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-md"
      >
        <FiGithub size={20} />
        <span>View on GitHub</span>
        <FiChevronRight size={16} />
      </a>
      
      <div className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-medium border border-gray-200 shadow-sm">
        <FiCode size={18} className="text-gray-500" />
        <span>Created by Nour Yahyaoui</span>
      </div>
    </div>
  </div>

  {/* Simple decorative elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ffb7c5]/10 to-[#d2b7ff]/10 rounded-full blur-3xl -z-10" />
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#b7ffca]/10 to-[#c5e6ff]/10 rounded-full blur-3xl -z-10" />
</div>

        {/* Featured Courses Section - Now using regular div instead of SectionWrapper for immediate display */}
        <div className="space-y-6">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <FiBookmark className="text-[#ffb7c5]" />
            Featured Courses
            <motion.div 
              className="h-1 flex-1 bg-gradient-to-r from-[#ffb7c5] to-transparent rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Link href={item.path}>
                    <FloatingCard delay={index * 0.5}>
                      <div 
                        className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all cursor-pointer group"
                        style={{
                          boxShadow: `0 10px 30px -15px ${item.color}40`
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <motion.div 
                            className="p-3 rounded-xl"
                            style={{ backgroundColor: `${item.color}20` }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon size={24} style={{ color: item.color }} />
                          </motion.div>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <FiChevronRight className="text-gray-400 group-hover:text-gray-600" size={20} />
                          </motion.div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          Master {item.name.replace(' Course', '').replace(' CSS', '')} with interactive lessons
                        </p>
                        
                        <motion.div 
                          className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden"
                          initial={{ width: '0%' }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        >
                          <div 
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color, width: '60%' }}
                          />
                        </motion.div>
                      </div>
                    </FloatingCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats Section */}
        <SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Courses', value: '11', icon: FiBookmark, color: '#ffb7c5' },
              { label: 'Components', value: '25+', icon: FiBox, color: '#d2b7ff' },
              { label: 'Code Examples', value: '100+', icon: FiCode, color: '#b7ffca' },
              { label: 'Icons', value: '500+', icon: FiFeather, color: '#c5e6ff' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 text-center"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className="inline-block"
                  >
                    <Icon size={32} style={{ color: stat.color }} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="text-2xl font-bold text-gray-900 mt-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Color Palette Showcase */}
        <SectionWrapper>
          <motion.h2 
            className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FiSettings className="text-[#d2b7ff]" />
            Color Palette
          </motion.h2>
          
          <div className="flex flex-wrap gap-3">
            {['#475569', '#64748b', '#94a3b8', '#ffb7c5', '#c5e6ff', '#d2b7ff', '#b7ffca'].map((color, index) => (
              <motion.div
                key={color}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 rounded-lg shadow-lg cursor-pointer"
                style={{ backgroundColor: color }}
              >
                <motion.div
                  className="w-full h-full rounded-lg"
                  whileHover={{
                    boxShadow: `0 0 20px ${color}`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Architecture Quote */}
        <SectionWrapper>
          <motion.div 
            className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <motion.p 
              className="text-xl text-gray-700 italic"
              animate={{ 
                textShadow: ['0 0 0px rgba(0,0,0,0)', '0 0 10px rgba(183,255,202,0.5)', '0 0 0px rgba(0,0,0,0)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "Consistency over creativity. Every page follows the exact same patterns."
            </motion.p>
            <div className="flex justify-center gap-2 mt-4">
              {['#ffb7c5', '#c5e6ff', '#d2b7ff', '#b7ffca'].map((color, i) => (
                <motion.div
                  key={color}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </SectionWrapper>
      </div>
    </DashboardLayout>
  );
}