'use client';

import { motion } from 'framer-motion';

interface CodeTypeToggleProps {
  codeType: 'html' | 'tailwind';
  onChange: (type: 'html' | 'tailwind') => void;
}

export default function CodeTypeToggle({ codeType, onChange }: CodeTypeToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex p-1 rounded-xl"
      style={{ backgroundColor: '#f1f5f9' }}
    >
      <motion.button
        onClick={() => onChange('html')}
        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
          codeType === 'html' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {codeType === 'html' && (
          <motion.div
            layoutId="codeTypeActive"
            className="absolute inset-0 rounded-lg"
            style={{ backgroundColor: '#475569' }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">HTML/CSS</span>
      </motion.button>

      <motion.button
        onClick={() => onChange('tailwind')}
        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
          codeType === 'tailwind' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {codeType === 'tailwind' && (
          <motion.div
            layoutId="codeTypeActive"
            className="absolute inset-0 rounded-lg"
            style={{ backgroundColor: '#d2b7ff' }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">Tailwind</span>
      </motion.button>
    </motion.div>
  );
}