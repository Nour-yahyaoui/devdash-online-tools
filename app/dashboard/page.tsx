'use client';

import { motion } from 'framer-motion';
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
  FiGithub
} from 'react-icons/fi';

export default function DashboardPage() {
  return (
    <DashboardLayout pageTitle="Project Overview" showBackButton={false}>
      <div className="space-y-10">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-10"
          style={{ 
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">DEVDAH v1.0.1</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            >
              Developer Dashboard
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffb7c5] via-[#d2b7ff] to-[#b7ffca]">
                Architecture Guide
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              A modern Next.js 14 application with TypeScript, TailwindCSS, and Framer Motion. 
              Built with consistency, reusability, and developer experience in mind.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://github.com/nour-yahyaoui/devdah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105"
              >
                <FiGithub size={20} />
                <span>View on GitHub</span>
              </a>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#b7ffca]" />
                <span>Created by Nour Yahyaoui</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Color Palette - Primary Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d2b7ff' }}>
              <FiDroplet className="w-5 h-5 text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Official Color Palette</h2>
              <p className="text-gray-600">These 7 colors are the ONLY colors used in the entire application. No exceptions.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {[
              { hex: '#475569', name: 'Slate 600', usage: 'Dark text, secondary buttons' },
              { hex: '#64748b', name: 'Slate 500', usage: 'Secondary text, icons' },
              { hex: '#94a3b8', name: 'Slate 400', usage: 'Disabled states, placeholders' },
              { hex: '#ffb7c5', name: 'Pink', usage: 'Buttons, animated category' },
              { hex: '#c5e6ff', name: 'Light Blue', usage: 'Dashboard link, basic category' },
              { hex: '#d2b7ff', name: 'Light Purple', usage: 'Themes link, glass category' },
              { hex: '#b7ffca', name: 'Light Green', usage: '3D category, success states' }
            ].map((color, index) => (
              <motion.div
                key={color.hex}
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="space-y-2"
              >
                <div 
                  className="w-full aspect-square rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-center">
                  <p className="font-mono text-xs font-medium text-gray-900">{color.hex}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{color.name}</p>
                  <p className="text-xs text-gray-400 mt-1 hidden md:block">{color.usage}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 font-medium flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              CRITICAL RULE: Never use custom hex codes. Always use these 7 colors only.
            </p>
          </div>
        </motion.div>

        {/* Navigation Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#b7ffca' }}>
              <FiHome className="w-5 h-5 text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard Sections</h2>
              <p className="text-gray-600">Each link in the sidebar follows strict color coding</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Dashboard', path: '/dashboard', icon: <FiHome />, color: '#c5e6ff', desc: 'Overview & quick actions' },
              { name: 'CSS Themes', path: '/dashboard/themes', icon: <FiDroplet />, color: '#d2b7ff', desc: 'Color palette gallery' },
              { name: 'Button Gallery', path: '/dashboard/buttons', icon: <FiSmartphone />, color: '#ffb7c5', desc: 'HTML/Tailwind buttons' },
              { name: 'Icons Gallery', path: '/dashboard/icons', icon: <FiGrid />, color: '#b7ffca', desc: 'Feather icons collection' }
            ].map((item, index) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-xl border-2 transition-all cursor-pointer"
                style={{ borderColor: item.color, backgroundColor: `${item.color}05` }}
              >
                <Link href={item.path} className="block">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: item.color }}>
                      <span className="text-black">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end text-xs" style={{ color: item.color }}>
                    <span>View section</span>
                    <FiChevronRight size={14} className="ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Component Templates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ffb7c5' }}>
              <FiBookmark className="w-5 h-5 text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">How to Create a New Section</h2>
              <p className="text-gray-600">Follow this exact 6-step process</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Create Data File',
                desc: 'components/data/your-section.ts',
                details: ['Export interface YourItem', 'Export const yourData array', 'Add category colors if needed'],
                color: '#c5e6ff'
              },
              {
                step: '02',
                title: 'Create Card Component',
                desc: 'components/dashboard/YourCard.tsx',
                details: ['Use ButtonCard/ThemeCard as template', 'Add copy functionality', 'Include category badge'],
                color: '#ffb7c5'
              },
              {
                step: '03',
                title: 'Create Skeleton',
                desc: 'components/dashboard/YourCardSkeleton.tsx',
                details: ['Match card layout exactly', 'Use animate-pulse class', 'Add shimmer effect'],
                color: '#d2b7ff'
              },
              {
                step: '04',
                title: 'Create Page',
                desc: 'app/dashboard/your-section/page.tsx',
                details: ['Start with "use client"', 'Import DashboardLayout', 'Add pagination (6 per page)'],
                color: '#b7ffca'
              },
              {
                step: '05',
                title: 'Add to Sidebar',
                desc: 'components/layout/Sidebar.tsx',
                details: ['Import icon from react-icons/fi', 'Add to navItems array', 'Assign color from palette'],
                color: '#475569'
              },
              {
                step: '06',
                title: 'Test Everything',
                desc: 'Quality Assurance',
                details: ['Loading skeleton', 'Copy function', 'Pagination', 'Responsive design'],
                color: '#64748b'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="p-6 rounded-xl border"
                style={{ borderColor: `${item.color}40` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                    style={{ backgroundColor: item.color, color: '#000' }}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-xs font-mono bg-gray-100 p-2 rounded mb-3 text-gray-700">
                  {item.desc}
                </p>
                <ul className="space-y-1.5">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-gray-400">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center pt-6"
        >
          <p className="text-sm text-gray-500">
            This dashboard follows strict architectural patterns. Every page, component, and color has been 
            deliberately chosen for consistency. Follow this guide when creating new sections.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
            <span>DEVDAH Project</span>
            <span>•</span>
            <span>Nour Yahyaoui</span>
            <span>•</span>
            <span>v1.0.1</span>
            <span>•</span>
            <span className="font-mono">25739896</span>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}