'use client';

import { motion } from 'framer-motion';

export default function ThemeCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
    >
      {/* Color Palette Preview Skeleton */}
      <div className="h-32 flex overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-gray-200 animate-pulse"
            style={{ 
              animationDelay: `${i * 0.1}s`,
              background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite'
            }}
          />
        ))}
      </div>

      {/* Content Skeleton */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
              <div className="w-16 h-5 bg-gray-200 rounded-full animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Color Codes Skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-6 bg-gray-200 rounded-md animate-pulse"
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>

        {/* Footer Skeleton */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-gray-200 rounded animate-pulse"
                style={{ animationDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </motion.div>
  );
}