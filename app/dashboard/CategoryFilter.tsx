'use client';

import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  color: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  isLoading?: boolean; // Add this
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  isLoading = false // Add default value
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category, index) => {
        const isSelected = selectedCategory === category.id;
        
        return (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => !isLoading && onCategoryChange(category.id)} // Disable when loading
            disabled={isLoading} // Disable button when loading
            className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: isSelected ? category.color : 'transparent',
              color: isSelected ? '#000' : '#64748b',
              border: isSelected ? 'none' : '1px solid #e2e8f0'
            }}
            whileHover={!isLoading ? { scale: 1.05 } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
          >
            {category.name}
            {isSelected && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 rounded-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}