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
      </div>
    </DashboardLayout>
  );
}