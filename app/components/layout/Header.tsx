'use client';

import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiPhone, FiCalendar } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export default function Header({ title, showBackButton = true }: HeaderProps) {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/90"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left section - Back button and title */}
          <div className="flex items-center gap-4">
            {showBackButton && (
              <motion.button
                whileHover={{ scale: 1.05, x: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBackToDashboard}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition-all"
              >
                <FiArrowLeft size={18} />
                <span className="text-sm font-medium hidden sm:inline">Dashboard</span>
              </motion.button>
            )}
            
            <div className="flex items-center gap-3">
              <div 
                className="w-2 h-8 rounded-full"
                style={{ backgroundColor: '#d2b7ff' }}
              />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                {title}
              </h1>
            </div>
          </div>

          {/* Right section - Developer info */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Dev Mode</span>
            </div>
            
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#ffb7c5' }}
            >
              <span className="text-sm font-bold text-black">NY</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}