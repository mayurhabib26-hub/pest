import React from 'react';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variantClasses = {
    primary:
      'bg-[#ED1834] hover:bg-[#C6102B] text-white shadow-sm hover:shadow-md focus-visible:ring-[#ED1834]/40 active:translate-y-px',
    secondary:
      'bg-white hover:bg-[#F7F8FC] text-[#151E4D] border border-[#E3E7EF] hover:border-[#151E4D]/30 shadow-2xs focus-visible:ring-[#151E4D]/20',
    navy:
      'bg-[#151E4D] hover:bg-[#101737] text-white shadow-sm hover:shadow-md focus-visible:ring-[#151E4D]/40',
  };

  return (
    <button
      disabled={disabled}
      className={`relative inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* Restrained subtle highlight shine animation */}
      {variant === 'primary' && !disabled && (
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none bg-linear-to-r from-transparent via-white/20 to-transparent"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
};
