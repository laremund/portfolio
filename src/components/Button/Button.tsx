import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:ring-white',
  ghost: 'text-blue-600 hover:text-blue-800 hover:bg-blue-50 focus:ring-blue-500'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3 text-lg'
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  target,
  rel,
  disabled = false,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];
  
  const buttonClasses = `${baseClasses} ${variantClass} ${sizeClass} ${className}`;

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}
