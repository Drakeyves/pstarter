import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Badge component with semi-transparent backgrounds and accent colors
 * 
 * Used for status indicators, labels, and categories
 */
const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  // Base classes for all badges
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium';
  
  // Size-specific classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-opacity-20 bg-accent-purple text-accent-purple-light',
    secondary: 'bg-opacity-20 bg-accent-teal text-accent-teal-light',
    accent: 'bg-opacity-20 bg-accent-gold text-accent-gold-light',
    neutral: 'bg-opacity-20 bg-accent-metallic text-accent-metallic-light',
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return <span className={classes}>{children}</span>;
};

export default Badge;
