'use client';

import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ThemeCard from '../../dashboard/ThemeCard';
import CategoryFilter from '../../dashboard/CategoryFilter';
import Pagination from '../../dashboard/Pagination';
import ThemeCardSkeleton from '../../dashboard/ThemeCardSkeleton';
import { themes, categories } from '../../components/data/themes';

const ITEMS_PER_PAGE = 6;

export default function ThemesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top function - use useCallback to memoize
  const scrollToTop = useCallback(() => {
    // Use multiple methods to ensure it works
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Fallback for browsers that don't support smooth scroll
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  // Filter themes based on selected category
  const filteredThemes = selectedCategory === 'all' 
    ? themes 
    : themes.filter(theme => theme.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredThemes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedThemes = filteredThemes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to first page when category changes with loading state
  const handleCategoryChange = async (categoryId: string) => {
    setIsLoading(true);
    
    // Scroll to top IMMEDIATELY
    scrollToTop();
    
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    
    // Simulate minimum loading time for smooth transition
    await new Promise(resolve => setTimeout(resolve, 600));
    setIsLoading(false);
  };

  // Handle page change with loading state - FIXED SCROLLING
  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    
    // Scroll to top IMMEDIATELY - BEFORE any state changes
    // Use requestAnimationFrame to ensure it runs before render
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Force immediate scroll as fallback
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    setCurrentPage(page);
    
    // Simulate minimum loading time for smooth transition
    await new Promise(resolve => setTimeout(resolve, 400));
    setIsLoading(false);
  };

  // Also scroll to top when filtered themes change (category/page change)
  useEffect(() => {
    if (!isLoading) {
      // Small delay to ensure content is rendered
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [displayedThemes, isLoading]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#d2b7ff' }}
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CSS Themes</h1>
              <p className="text-gray-600">Discover and use beautiful color palettes for your projects</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{themes.length}</span>
              <span className="text-gray-600">Total Themes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{categories.length - 1}</span>
              <span className="text-gray-600">Categories</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          isLoading={isLoading}
        />

        {/* Themes Grid with Loading State */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <ThemeCardSkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory + currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayedThemes.map((theme, index) => (
                <ThemeCard key={theme.id} theme={theme} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && displayedThemes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#ffb7c5' }}
            >
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No themes found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        )}
      </div>
    </DashboardLayout>
  );
}