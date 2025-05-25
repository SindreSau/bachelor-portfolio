'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={cn('min-h-screen bg-background', className)}>
      {/* Back Button Container */}
      <div className="w-full">
        {/* Desktop: Back button on the left side of max-w-6xl - only show when there's enough space */}
        <div className="hidden xl:block">
          <div className="max-w-6xl mx-auto px-6 pt-6 relative">
            <Button
              onClick={handleBack}
              variant="outline"
              size="icon"
              className="absolute -left-16 top-6 rounded-full hover:scale-110"
              title="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet: Back button on top */}
        <div className="xl:hidden">
          <div className="px-6 pt-6 pb-1">
            <Button
              onClick={handleBack}
              variant="outline"
              className="flex items-center gap-2"
              title="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto md:px-0">{children}</div>
    </div>
  );
}
