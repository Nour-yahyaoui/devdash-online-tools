'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToDashboard() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div 
          className="w-16 h-16 rounded-full mx-auto mb-4 animate-pulse"
          style={{ backgroundColor: '#d2b7ff' }}
        />
        <h1 className="text-xl font-semibold text-gray-900 mb-2">Redirecting to Dashboard...</h1>
        <p className="text-gray-600">Please wait</p>
      </div>
    </div>
  );
}