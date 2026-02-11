'use client';

import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean; // Add this
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  isLoading = false // Add default value
}: PaginationProps) {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots: (string | number)[] = [];
    let l: number;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <motion.button
        whileHover={!isLoading ? { scale: 1.05 } : {}}
        whileTap={!isLoading ? { scale: 0.95 } : {}}
        onClick={() => !isLoading && onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronLeft size={18} />
      </motion.button>

      {getPageNumbers().map((page, index) => (
        <motion.button
          key={index}
          whileHover={!isLoading && page !== '...' ? { scale: 1.05 } : {}}
          whileTap={!isLoading && page !== '...' ? { scale: 0.95 } : {}}
          onClick={() => !isLoading && typeof page === 'number' && onPageChange(page)}
          className={`min-w-[40px] h-10 px-3 rounded-lg text-sm font-medium transition-colors ${
            currentPage === page
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          style={currentPage === page ? { backgroundColor: '#d2b7ff', color: '#000' } : {}}
          disabled={page === '...' || isLoading}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        whileHover={!isLoading ? { scale: 1.05 } : {}}
        whileTap={!isLoading ? { scale: 0.95 } : {}}
        onClick={() => !isLoading && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronRight size={18} />
      </motion.button>
    </div>
  );
}