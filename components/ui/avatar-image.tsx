import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const avatarVariants = cva('rounded-full overflow-hidden', {
  variants: {
    size: {
      sm: 'size-8',
      md: 'size-14',
      lg: 'size-24',
    },
    borderColor: {
      primary: 'border-2 border-primary/50',
      border: 'border border-border',
      none: '',
    },
  },
  defaultVariants: {
    size: 'md',
    borderColor: 'primary',
  },
});

const sizeToImageDimensions = {
  sm: { width: 32, height: 32 },
  md: { width: 96, height: 96 },
  lg: { width: 128, height: 128 },
  xl: { width: 160, height: 160 },
} as const;

interface AvatarImageProps extends VariantProps<typeof avatarVariants> {
  src: string;
  alt: string;
  className?: string;
}

export function AvatarImage({
  src,
  alt,
  size = 'md',
  borderColor = 'primary',
  className,
}: AvatarImageProps) {
  const imageDimensions = sizeToImageDimensions[size!];

  return (
    <div className={cn(avatarVariants({ size, borderColor }), className)}>
      <Image
        src={src}
        alt={alt}
        width={imageDimensions.width}
        height={imageDimensions.height}
        quality={30}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
