'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiPhone, FiCalendar, FiHeart } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white border-t border-gray-200 mt-auto"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left section - Brand */}
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#c5e6ff' }}
            >
              <span className="text-sm font-bold text-black">D</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              DEVDASH
            </span>
            <span className="text-xs text-gray-400 hidden sm:inline">|</span>
            <span className="text-xs text-gray-500 hidden sm:inline">
              Developer Dashboard
            </span>
          </div>

          {/* Center section - Developer info */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Built with</span>
              <FiHeart className="text-pink-400" size={14} />
              <span className="text-gray-600">by</span>
              <span className="font-semibold text-gray-900">Nour Yahyaoui</span>
            </div>
            
            <div className="flex items-center gap-4 text-xs">
              {/* Date */}
              <div className="flex items-center gap-1.5 text-gray-500">
                <FiCalendar size={14} className="text-gray-400" />
                <span>{currentDate || 'Loading...'}</span>
              </div>

              {/* GitHub */}
              <Link 
                href="https://github.com/nour-yahyaoui" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-500 hover:text-black transition-colors group"
              >
                <FiGithub size={14} className="group-hover:scale-110 transition-transform" />
                <span className="hover:underline">nour-yahyaoui</span>
              </Link>

              {/* Phone */}
              <div className="flex items-center gap-1.5 text-gray-500">
                <FiPhone size={14} className="text-gray-400" />
                <span className="font-mono">25739896</span>
              </div>
            </div>
          </div>

          {/* Right section - Year */}
          <div className="flex items-center">
            <span className="text-xs text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </div>

        {/* Mobile view - Bottom line */}
        <div className="mt-6 pt-6 border-t border-gray-100 md:hidden text-center">
          <p className="text-xs text-gray-400">
            Developer Dashboard • Nour Yahyaoui • {currentDate?.split(',')[1]?.trim() || new Date().getFullYear()}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}