import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  heading?: string;
  description?: string;
  className?: string;
  headingClassName?: string;
  contentClassName?: string;
  descriptionClassName?: string;
}

export function Card({
  children,
  heading,
  description,
  className,
  headingClassName,
  contentClassName,
  descriptionClassName,
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-lg p-6 border border-border h-full flex flex-col',
        className,
      )}
    >
      {heading && (
        <h2
          className={cn(
            'text-3xl font-bold mb-6 text-center',
            headingClassName,
          )}
        >
          {heading}
        </h2>
      )}

      <div className={cn('flex-1', contentClassName)}>{children}</div>

      {description && (
        <p
          className={cn(
            'text-center text-muted-foreground',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
