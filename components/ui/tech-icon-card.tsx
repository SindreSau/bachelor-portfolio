import { Icon } from '@iconify/react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface TechIconCardProps {
  icon: string;
  name: string;
  className?: string;
}

export function TechIconCard({ icon, name, className }: TechIconCardProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn(
            'p-2 rounded-lg bg-card border border-border hover:bg-accent transition-colors',
            className,
          )}
        >
          <Icon icon={icon} className="w-6 h-6" />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
