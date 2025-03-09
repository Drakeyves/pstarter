import React, { ButtonHTMLAttributes } from 'react';
import { Button as DaisyButton } from 'react-daisyui';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  active?: boolean;
  children: React.ReactNode;
}

/**
 * Custom Button component that follows the Propulsion Society brand guidelines
 * 
 * Features gradient backgrounds, hover effects, and consistent styling
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  active = false,
  children,
  className = '',
  ...props
}) => {
  // Map our variants to daisyUI colors
  const colorMap = {
    primary: 'primary',
    secondary: 'secondary',
    accent: 'accent',
    outline: 'ghost',
    ghost: 'ghost',
  };

  const color = colorMap[variant];
  
  // Add custom classes for our styling
  const customClass = `btn-${variant} ${className}`;

  return (
    <DaisyButton
      color={color as any}
      size={size}
      loading={loading}
      fullWidth={fullWidth}
      active={active}
      className={customClass}
      {...props}
    >
      {children}
    </DaisyButton>
  );
};

export default Button;
