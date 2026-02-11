'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface DashboardLayoutProps {
  children: ReactNode;
  pageTitle?: string;
  showBackButton?: boolean;
}

export default function DashboardLayout({ 
  children, 
  pageTitle = 'Dashboard',
  showBackButton = true 
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <Header title={pageTitle} showBackButton={showBackButton} />
        
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex-1"
        >
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </motion.main>

        <Footer />
      </div>
    </div>
  );
}