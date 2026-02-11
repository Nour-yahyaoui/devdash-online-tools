'use client';

import { motion } from 'framer-motion';

export default function ButtonCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
    >
      <div className="p-6">
        {/* Header Skeleton */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-24 h-5 bg-gray-200 rounded animate-pulse" />
            <div className="w-16 h-5 bg-gray-200 rounded-full animate-pulse" />
          </div>
          <div className="w-20 h-5 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Preview Skeleton */}
        <div className="mb-6 p-6 rounded-lg bg-gray-100 flex items-center justify-center min-h-[120px]">
          <div className="w-24 h-10 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Code Button Skeleton */}
        <div className="w-24 h-6 bg-gray-200 rounded animate-pulse mb-3" />

        {/* Code Block Skeleton */}
        <div className="bg-gray-900 rounded-lg p-4 space-y-2">
          <div className="w-full h-3 bg-gray-700 rounded animate-pulse" />
          <div className="w-3/4 h-3 bg-gray-700 rounded animate-pulse" />
          <div className="w-1/2 h-3 bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}