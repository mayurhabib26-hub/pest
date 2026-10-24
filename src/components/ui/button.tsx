import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-[#ED1834] text-white hover:bg-[#C6102B] shadow-xs focus-visible:ring-[#ED1834]',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 shadow-xs focus-visible:ring-red-500',
        outline:
          'border border-[#E3E7EF] bg-white text-[#151E4D] hover:bg-[#EDF0F7] hover:text-[#101737] focus-visible:ring-[#151E4D]',
        secondary:
          'bg-[#EDF0F7] text-[#151E4D] hover:bg-[#E3E7EF] focus-visible:ring-[#151E4D]',
        ghost:
          'text-[#17213C] hover:bg-[#EDF0F7] hover:text-[#151E4D] focus-visible:ring-[#ED1834]',
        link: 'text-[#ED1834] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-6 text-base',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
