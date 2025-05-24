import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AvatarImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  borderColor?: 'primary' | 'border' | 'none';
}

const sizeVariants = {
  sm: { container: 'size-8', width: 32, height: 32 },
  md: { container: 'w-24 h-24', width: 96, height: 96 },
  lg: { container: 'w-32 h-32', width: 128, height: 128 },
  xl: { container: 'w-40 h-40', width: 160, height: 160 },
};

const borderVariants = {
  primary: 'border-4 border-primary',
  border: 'border-2 border-border',
  none: '',
};

export function AvatarImage({
  src,
  alt,
  size = 'md',
  className,
  borderColor = 'primary',
}: AvatarImageProps) {
  const sizeConfig = sizeVariants[size];
  const borderClass = borderVariants[borderColor];

  return (
    <div
      className={cn(
        sizeConfig.container,
        'rounded-full overflow-hidden',
        borderClass,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={sizeConfig.width}
        height={sizeConfig.height}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
