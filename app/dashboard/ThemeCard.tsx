'use client';

import { motion, MotionValue } from 'framer-motion';
import { FiCopy, FiHeart, FiStar } from 'react-icons/fi';
import { ColorPalette } from '../components/data/themes';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';

interface ThemeCardProps {
  theme: ColorPalette;
  index: number;
}

export default function ThemeCard({ theme, index }: ThemeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

// In ThemeCard.tsx - Fix the copyToClipboard function
const copyToClipboard = (color: string) => {
  if (!color) return; // Guard clause
  
  navigator.clipboard.writeText(color);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'modern': return '#ffb7c5';
      case 'vintage': return '#d2b7ff';
      case 'minimal': return '#c5e6ff';
      case 'dark': return '#475569';
      case 'nature': return '#b7ffca';
      case 'pastel': return '#ffb7c5';
      default: return '#94a3b8';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Color Palette Preview */}
      <div className="h-32 flex overflow-hidden">
        {theme.colors.map((color: string, i: Key | null | undefined) => (
          <motion.div
            key={i}
            className="flex-1 relative group cursor-pointer"
            style={{ backgroundColor: color }}
            whileHover={{ flex: 2 }}
            onClick={() => copyToClipboard(color)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <FiCopy className="text-white" size={16} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900">{theme.name}</h3>
              <span 
                className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: `${getCategoryColor(theme.category)}20`,
                  color: getCategoryColor(theme.category)
                }}
              >
                {theme.category}
              </span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{theme.description}</p>
          </div>
        </div>

        {/* Color Codes */}
        <div className="flex flex-wrap gap-2 mb-4">
          {theme.colors.map((color: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | MotionValue<number> | MotionValue<string> | null | undefined, i: Key | null | undefined) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.95 }}
              onClick={() => copyToClipboard(String(color))}              className="text-xs font-mono px-2 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {color}
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                size={14}
                className={i < theme.popularity ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
            <FiHeart size={16} />
          </motion.button>
        </div>

        {/* Copy Notification */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 right-4 bg-black text-white text-xs px-3 py-1.5 rounded-lg"
          >
            Copied!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}