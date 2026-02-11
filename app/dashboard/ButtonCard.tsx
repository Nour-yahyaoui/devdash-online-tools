'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCopy, FiCheck, FiCode } from 'react-icons/fi';
import * as buttons from '../components/data/buttons';
import { ButtonData } from '../components/data/buttons';

interface ButtonCardProps {
  button: ButtonData; // ✅ Now properly typed
  index: number;
  codeType: 'html' | 'tailwind';
}
export default function ButtonCard({ button, index, codeType }: ButtonCardProps) {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [showCode, setShowCode] = useState(false);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCode = () => {
    if (codeType === 'html') {
      return `${button.html}\n\n<style>\n${button.css}\n</style>`;
    } else {
      return `<button class="${button.tailwind}">\n  ${button.html.match(/>(.*?)</)?.[1] || 'Click Me'}\n</button>`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">{button.title}</h3>
            {button.category && (
              <span 
                className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: `${
                    button.category === 'gradient' ? '#ffb7c5' :
                    button.category === 'glass' ? '#d2b7ff' :
                    button.category === '3d' ? '#b7ffca' :
                    button.category === 'animated' ? '#ffb7c5' :
                    '#c5e6ff'
                  }20`,
                  color: `${
                    button.category === 'gradient' ? '#ffb7c5' :
                    button.category === 'glass' ? '#d2b7ff' :
                    button.category === '3d' ? '#b7ffca' :
                    button.category === 'animated' ? '#ffb7c5' :
                    '#c5e6ff'
                  }`
                }}
              >
                {button.category}
              </span>
            )}
          </div>
          
          {/* Code Type Badge */}
          <div 
            className="px-2 py-1 rounded-md text-xs font-mono"
            style={{ 
              backgroundColor: codeType === 'html' ? '#47556920' : '#d2b7ff20',
              color: codeType === 'html' ? '#475569' : '#d2b7ff'
            }}
          >
            {codeType === 'html' ? 'HTML/CSS' : 'Tailwind'}
          </div>
        </div>

        {/* Button Preview */}
        <div 
          className="mb-6 p-6 rounded-lg flex items-center justify-center min-h-[120px]"
          style={{ 
            backgroundColor: '#111',
            border: '1px solid #e2e8f0'
          }}
        >
          <button 
            className={button.tailwind}
            dangerouslySetInnerHTML={{ 
              __html: button.html.match(/>(.*?)</)?.[1] || 'Click Me' 
            }}
          />
        </div>

        {/* Code Section */}
        <div className="space-y-3">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: '#64748b' }}
          >
            <FiCode size={16} />
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>

          {showCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative bg-gray-900 rounded-lg p-4"
            >
              <pre className="text-xs overflow-x-auto max-h-[200px]">
                <code className="text-gray-100 font-mono">
                  {getCode()}
                </code>
              </pre>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(getCode(), button.id)}
                className="absolute top-2 right-2 p-2 rounded-lg transition-all"
                style={{ 
                  backgroundColor: copiedId === button.id ? '#b7ffca' : '#ffffff20',
                  color: copiedId === button.id ? '#000' : '#fff'
                }}
              >
                {copiedId === button.id ? (
                  <FiCheck size={14} />
                ) : (
                  <FiCopy size={14} />
                )}
              </motion.button>

              {/* Scroll indicator gradient */}
              <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none rounded-b-lg" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}