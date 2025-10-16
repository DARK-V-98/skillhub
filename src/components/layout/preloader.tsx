
'use client';

import { GraduationCap } from 'lucide-react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <GraduationCap className="h-12 w-12 text-primary" />
      </div>
    </div>
  );
};

export default Preloader;
